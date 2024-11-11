import fs from "fs"
import path from "path"

export function readFile(filePath: string, config?: any) {
  return fs.readFileSync(filePath, config)
}

export function statSync(filePath: string) {
  return fs.statSync(filePath)
}

export function pathJoin(...paths: string[]) {
  return path.join(...paths)
}

export function readEnsureExistsDir(dirPath: string) {
  if (fs.existsSync(dirPath)) {
    return fs.readdirSync(dirPath, {encoding: 'utf-8', withFileTypes: true})
  } else {
    fs.mkdirSync(dirPath)
    return []
  }
}
