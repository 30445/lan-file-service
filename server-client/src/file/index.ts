const fsUtils = require('./../nodeUtils/fs')

function createFileRouter({config, express}) {
  const router = express.Router()

  router.get("/", (req, res) => {
    res.send("Hello World! File")
  })

  router.get("/public", (req, res) => {
    const path = config.get('directory').root
    const files = fsUtils.readDir(path)
    console.log(files)

    res.send(files)
  })

  return router
}

module.exports = createFileRouter
