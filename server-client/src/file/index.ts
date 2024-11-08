import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello World! File")
})

router.get("/public", (req, res) => {
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
