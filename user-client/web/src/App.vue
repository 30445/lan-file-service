<script setup lang="ts">
// 国际化
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
import { theme, cssinjs } from 'ant-design-vue';

provide("themeToken", theme.useToken().token);

const userTheme = ref({
  token: {
    colorPrimary: "#ac9956"
  }
})

// 全局样式变化后调用这个方法
const themeChangeEvent = () => {
  console.log(theme.useToken, "theme.useToken().token.value")
  let token = JSON.parse(JSON.stringify(theme.useToken().token.value))
  let style = ":root {"

  for(let key in token) {
    style += `--${key}: ${token[key]};`
  }

  style += "}"

  style = style.replace(/\n/g, "")
  let styleDom = document.getElementById("theme-token")

  console.log(styleDom)

  if (!styleDom) {
    styleDom = document.createElement("style");
    styleDom.setAttribute("type", "text/css");
    styleDom.setAttribute("id", "themeToken");
    document.head.appendChild(styleDom);
  }

  styleDom.innerText = style
  console.log(style)
}



const changeColor = () => {
  userTheme.value.token = {
    colorPrimary: "#112233"
  }
  console.log(cssinjs.useStyleInject())
  nextTick(() => {
    themeChangeEvent()
  })
}

onMounted(() => {
  themeChangeEvent()
})
</script>

<template>
  <div class="root-app">
    <a-config-provider :locale="zhCN" :theme="userTheme">
      <router-view></router-view>
    </a-config-provider>
    <button @click="changeColor">改变主题色</button>
  </div>
</template>

<style scoped>

</style>
