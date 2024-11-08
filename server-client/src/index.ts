import express from 'express'

import user from './user/user.ts'
// import file from "./file/index"
import * as path from "path";
// import {readFile} from "./nodeUtils/fsUtils";

const run = () => {
  const app = express()

  // const config = readFile(path.join(__dirname, "../config.json"))
  // console.log(config)
  app.use(express.json())

  app.use("/user", user)
  // app.use("/file", file)
let port = 3000
  app.listen(port, () => {
    console.log(`服务已在端口：${port}启动`);
  })
}

run()










