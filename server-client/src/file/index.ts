import express from "express"
import {pathJoin, readEnsureExistsDir, statSync} from "@/utils/fsUtils.ts";
import {StaticDirectory} from "@/types/EnumConfig.ts";
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello World! File")
})

router.get("/public", (req: express.Request, res: express.Response) => {
  let config = req.__config
  let path = pathJoin(config.directory.root, StaticDirectory.public)
  console.log(path)
  const fileList = readEnsureExistsDir(path)
  if (fileList.length === 0) {
    res.send([])
    return
  }
  for (const file of fileList) {
  let sta = statSync(pathJoin(path, file.path))
    console.log(sta)
  }
  res.send([])
})


export default router
