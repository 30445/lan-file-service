<script setup lang="ts">
// 国际化
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import {theme} from 'ant-design-vue';

dayjs.locale('zh-cn');








/* --------这部分用户将ant design vue的主题色设置到css变量中，方便在css中使用var(--xxx)变量来设置样式，避免在css中直接使用ant design vue的token，因为ant design vue的token是js变量，无法在css中使用。------- */
const userTheme = ref<{
  token: {[key: string]: string}
}>({
  token: {}
})
const styleToken = ref<{[key: string]: string}>({})
const verStyle = (styleObj: {[key: string]: string}) => {
  let style = ":root {"
  for(let key in styleObj) {
    style += `--${key}: ${styleObj[key]};`
  }
  style += "}"
  style = style.replace(/\n/g, "")
  return style
}
const initThemeCssVar = () => {
  let styleDom = document.createElement("style");
  styleDom.setAttribute("type", "text/css");
  styleDom.setAttribute("id", "theme-token");
  // 再次调用theme.useToken()方法会报错，所以只能调用一次，后续用其他方法修改
  styleToken.value = JSON.parse(JSON.stringify(theme.useToken().token.value))
  styleDom.innerText = verStyle(styleToken.value)
  document.head.appendChild(styleDom);
}
onMounted(() => {
  if (!document.getElementById("theme-token")) {
    initThemeCssVar()
  }
})
watch(() => userTheme.value.token, (newVal) => {
  let newStyleToken = Object.assign({}, styleToken.value, newVal)
  let styleDom = document.getElementById("theme-token")
  if (styleDom) {
    styleDom.innerText = verStyle(newStyleToken)
  }
})
/* ------css颜色变量设置结束---- */
</script>

<template>
  <div class="root-app">
    <a-config-provider :locale="zhCN" :theme="userTheme">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>

<style scoped>

</style>
