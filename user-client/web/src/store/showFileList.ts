import {defineStore} from "pinia";

export const showFileListStore = defineStore('showFileList', () => {
  const currentPath = ref('')
  const pathHistory = ref<string[]>([])
  const fileMap = ref<Map<string, FileList>>(new Map())

  const setCurrentPath = (path: string) => {
    currentPath.value = path
  }
  const pushPathHistory = (path: string) => {
    pathHistory.value.push(path)
  }
  const popPathHistory = () => {
    pathHistory.value.pop()
  }
  const initState = () => {
    currentPath.value = ''
    pathHistory.value = []
    fileMap.value = new Map()
  }

  const setFileList = (path: string, list: FileList) => {
    fileMap.value.set(path, list)
  }
  const getFileList = (path: string) => {
    return fileMap.value.get(path)
  }

  return {
    currentPath,
    pathHistory,
    setCurrentPath,
    pushPathHistory,
    popPathHistory,
    initState,
    setFileList,
    getFileList
  }
}, {
  persist: true
})
