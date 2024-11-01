import { createApp } from 'vue'
import "ant-design-vue/dist/reset.css"
import './style.scss'
import App from './App.vue'
import router from "./router";
import {createPinia} from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
