import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app.use(store); //仓库 vuex 全局
app.use(router); //路由
app.use(ElementPlus)

app.mount("#app"); //挂载
