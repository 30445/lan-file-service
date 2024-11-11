import express from "express";

const router = express.Router()

router.get("/", (req, res) => {
  res.send(`Hello World! User  ${JSON.stringify(req.__config)}`)
})

export default router
