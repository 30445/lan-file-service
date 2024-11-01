// import Koa from "koa"
// import config from "config"
const config = require('config');
const express = require('express');

const user = require('./user');

// const app = new Koa()

const run = () => {
  const app = express()

  app.use(express.json())

  app.use("/user", user)

  const port = config.get('port');

  app.listen(port, () => {
    console.log(`服务已在端口：${port}启动`);
  })
}

run()










