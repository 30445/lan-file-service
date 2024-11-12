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
      const bodyType = typeof body
      const isNotPrimitiveType = !["object", "boolean", "number"].includes(bodyType)
      // 字符串是否包含___end___，包含就不用再包装
      const isEndString = bodyType === "string" && body.includes("___end___")
      // 请求成功，数据不是object、boolean、number、包含___end___字符串的，去json包装一下
      if (res.statusCode >= 200 && res.statusCode < 400 && isNotPrimitiveType && !isEndString) {
        return originalJsonFn(body)
      }
      // 兼容自定义的json格式
      if (isEndString) {
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


