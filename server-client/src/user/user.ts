import express from "express";

const router = express.Router()

router.get("/", (req, res) => {
  console.log(req.__config)
  res.send(`Hello World! User  ${JSON.stringify(req.__config)}`)
})

export default router
