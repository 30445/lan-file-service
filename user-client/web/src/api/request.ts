import axios from "axios";
import {responseErrorHandler, requestErrorHandler} from "./apiErrorHandle.ts"

const instance = axios.create({
  baseURL: "/api",
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json",
  }
});

const httpContentType: {[key: string]: string} = {
  form: "application/x-www-form-urlencoded",
  upload: "multipart/form-data",
  json: "application/json"
}

instance.interceptors.request.use(config => {
  return config
}, requestErrorHandler)

instance.interceptors.response.use(response => {
  return response;
}, responseErrorHandler)

function apiGet(url: string, params?: any, config?: {}) {
  return instance.get(
    url,
    {
      ...config,
      params
    }
  )
}

function apiPost(url: string, params?: any, config?: {}) {
  return instance.post(url, params, config)
}

function useRequest(options: {
  method?: "get" | "post";
  url: string;
  data?: any;
  immediate?: boolean;
  delay?: number;
  error?: Function,
  success?: Function,
  default?: any
}) {
  const config = Object.assign({
    method: "get",
    immediate: true,
    delay: 0
  }, options);

  const isLoading = ref(false)
  const isFinished = ref(false)
  const isAborted = ref(false)
  const data = ref(config.default)
  const error = ref<any>(null)

  const loading = (loading: boolean) => {
    isLoading.value = loading
    isFinished.value = !loading
  }

  const controller = new AbortController();
  const abort = (reason: any) => {
    if (!isLoading.value) {
      return;
    }

    controller.abort(reason);

    isAborted.value = true;
    loading(false);
  }

  async function execute(executeOptions: any) {
    loading(true);
    const options = Object.assign(config, executeOptions);

    if (options.delay) {
      await new Promise(resolve => setTimeout(resolve, options.delay));
    }

    const headers: {[key: string]: any} = {}
    if (options.dataType && Object.keys(httpContentType).includes(options.dataType)) {
      headers['Content-Type'] = httpContentType[options.dataType];
    }

    try {
      const httpMethod = options.method === "post" ? apiPost: apiGet;

      const response = await httpMethod(
        options.url,
        options.data,
        {
          signal: controller.signal,
          ...config,
          headers
        }
      );
      data.value = response

      if (options.success) {
        options.success({
          data: response,
          params: options.params,
          methods: options.method,
          url: options.url,
          headers
        })
      }

      return
    } catch (e) {
      error.value = e;
      if (options.error) {
        options.error({
          error: e,
          params: options.data,
          url: options.url,
          method: options.method,
          headers
        })
      }
    } finally {
      loading(false);
    }


  }

  if (config.immediate) {
    execute(config)
  }

  return {
    isLoading,
    isFinished,
    isAborted,
    abort,
    execute,
    data,
    error
  }
}

export default {
  apiGet,
  apiPost,
  useRequest
}


