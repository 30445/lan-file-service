import {NextFunction, Request, Response} from "express";

function warpResponse(data: any, status: number, message: string) {
  return {
    data,
    status,
    message,
    timestamp: Date.now()
  }
}

export default function () {
  return (req: Request, res: Response, next: NextFunction) => {
    const originalSendFn = res.send.bind(res) // 保存原始的 send 方法
    const originalJsonFn = res.json.bind(res) // 保存原始的 json 方法

    res.send = function (body: any) {
      let bodyType = typeof body
      // 请求成功，数据不是object、boolean、number、包含___end___字符串的，去json包装一下
      if (res.statusCode >= 200 && res.statusCode < 400 && !["object", "boolean", "number"].includes(bodyType) && !(bodyType === "string" && body.includes("___end___"))) {
        return originalJsonFn(body)
      }
      // 兼容自定义的json格式
      if (bodyType === "string" && body.includes("___end___")) {
        let str = JSON.parse(body)
        delete str.___end___
        body = JSON.stringify(str)
      }
      return originalSendFn(body)
    }

    res.json = function (body: any) {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        body = warpResponse(body, res.statusCode, 'success')
      }
      body.___end___ = true
      return originalJsonFn(body)
    }
    next()
  }
}


