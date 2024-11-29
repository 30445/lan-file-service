import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from "axios";

const httpContentType: {[key: string]: string} = {
  form: "application/x-www-form-urlencoded",
  upload: "multipart/form-data",
  json: "application/json"
}

interface ResponseData<T> {
  data: T,
  message: string,
  status: number,
  timestamp: Date,
}

const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 1000 * 30,
  headers: {
    "Content-Type": httpContentType['json'],
  }
})

instance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response: AxiosResponse): any => {
  if (response.status === 200) {
    return response.data
  }
  return Promise.reject(response)
}, error => {
  return Promise.reject(error)
})

const apiGet = (url: string, params?: any, config?: any) => {
  return instance.get<ResponseData<any>>(url, {
    params: params,
    ...config
  })
}

const apiPost = (url: string, data?: any, config?: any) => {
  return instance.post<ResponseData<any>>(url, data, config)
}

export default {
  apiGet,
  apiPost
}

