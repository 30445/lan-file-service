import {defineStore} from "pinia";

// 当前用户信息
export const currentStore = defineStore("current", () => {
  const current = reactive({

  })


  return {
    current
  }
}, {
  persist: true,
})
