import {pathJoin, readEnsureExistsDir, statSync} from "@/utils/fsUtils.js";
import filesAndFoldersConfig from "@/file/config/filesAndFoldersConfig.json";
import nodePath from "path";

// 读取文件夹详情
export function readDirectoryDetail(dirPath: string, baseUrl: string) {
  let path = pathJoin(baseUrl, dirPath)
  // 过滤掉不需要读取的文件或文件夹，一般是系统文件，可能会造成读取失败
  const fileList = readEnsureExistsDir(path).filter(item => !filesAndFoldersConfig.dontReadPath.list.includes(item.name))
  if (fileList.length === 0) {
    return []
  }
  let list: any[] = []
  for (const file of fileList) {
    let stats = null
    try {
      stats = statSync(pathJoin(path, file.name))
    } catch (e) {
      stats = {
        size: 0,
        birthtime: null,
        mtime: null
      }
    }
    list.push({
      name: file.name,
      path: file.path.replaceAll(baseUrl, ""),
      isDir: file.isDirectory(),
      isFile: file.isFile(),
      size: stats.size,
      birthtime: stats.birthtime,
      mtime: stats.mtime,
      extension: nodePath.extname(file.name),
    })
  }
  return list
}