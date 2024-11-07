function createUserRouter({config, express}) {
  const router = express.Router()

  router.get("/", (req, res) => {
    res.send("Hello World! User")
  })

  return router
}
module.exports = createUserRouter