import {defineStore} from "pinia";

export const showFileListStore = defineStore('showFileList', () => {
  const currentPath = ref('')
  const pathHistory = ref<string[]>([])

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
  }

  return {
    currentPath,
    pathHistory,
    setCurrentPath,
    pushPathHistory,
    popPathHistory,
    initState
  }
}, {
  persist: true
})
