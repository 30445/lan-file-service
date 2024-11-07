const fs = require('fs')

function readFile(filePath: string) {
  return fs.readFileSync(filePath)
}

function readDir(dirPath: string) {
  return fs.readdirSync(dirPath)
}

exports.readFile = readFile
exports.readDir = readDir