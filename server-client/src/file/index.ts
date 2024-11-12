import express from "express"
import {StaticDirectory} from "@/types/EnumConfig.ts";
import {readDirectoryDetail} from "@/file/utils/readDirectoryDetail.ts";
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello World! File")
})

router.get("/public", (req: express.Request, res: express.Response) => {
  let config = req.__config
  let list = readDirectoryDetail(StaticDirectory.public, config.directory.root)
  res.send(list)
})


export default router
