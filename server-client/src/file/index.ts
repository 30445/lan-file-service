import express from "express"
import {pathJoin} from "@/utils/fsUtils.ts";
import {StaticDirectory} from "@/types/EnumConfig.ts";
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello World! File")
})

router.get("/public", (req, res) => {
  let config = req.__config
  let path = pathJoin(config.directory.root, StaticDirectory.public)
  console.log(path)
  // const path = config.get('directory').root
  // const files = readDir(path)
  // let list = []
  // for (const file of files) {
    // let sta = fsUtils.statSync(fsUtils.pathJoin(path, file))
    // console.log(sta)
  // }

  res.send([])
})


export default router
