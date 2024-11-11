import express from 'express'
import user from './user/user.ts'
import file from "./file/index.ts"
import * as path from "path";
import {__dirname} from "@/utils/pathUtils.ts"
import * as fs from "fs";
import {Config} from "../node-env.ts";
import responseParse from "@/middleware/responseParse.js";

const run = () => {
  const app = express()

  // 第三方中间件
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));

  // 读取配置文件
  const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../config.json"), "utf-8"))

  // 自定义中间件
  // 设置全局配置
  app.use(setGlobalConfig(config))
  // 响应处理
  app.use(responseParse())

  // 加载路由
  app.use("/user", user)
  app.use("/file", file)

  // 启动服务
  let port = config.port
  app.listen(port, () => {
    console.log(`服务已在端口：${port}启动`);
  })
}

run()

// 全局配置
function setGlobalConfig(config: Config) {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    req.__config = config
    next()
  }
}








