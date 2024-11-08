import * as fs from "fs"
import * as path from "path"

export function readFile(filePath: string) {
  return fs.readFileSync(filePath)
}

export function readDir(dirPath: string) {
  return fs.readdirSync(dirPath, {withFileTypes: true})
}

export function statSync(filePath: string) {
  return fs.statSync(filePath)
}

export function pathJoin(...paths: string[]) {
  return path.join(...paths)
}
