import express from 'express'
import user from './user/user.ts'
import file from "./file/index.ts"
import * as path from "path";
import {__dirname} from "./nodeUtils/pathUtils.ts"
import * as fs from "fs";

const run = () => {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));

  app.use(globalConfig)

  app.use("/user", user)
  app.use("/file", file)

let port = 3000
  app.listen(port, () => {
    console.log(`服务已在端口：${port}启动`);
  })
}

run()

// 全局配置
function globalConfig(req: any, _: any, next: any) {
  const config = fs.readFileSync(path.join(__dirname, "../config.json"), "utf-8")
  req.__config = JSON.parse(config)
  next()
}








