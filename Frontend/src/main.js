// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'//导入Element
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia' //创建pinia
import { createPersistedState } from 'pinia-persistedstate-plugin' //pinia 持久化
import '@/assets/icons/iconfont.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// main.ts
import 'virtual:uno.css'
const app = createApp(App)//创建应用实例
const pinia = createPinia()//创建pinia 实例
const persist = createPersistedState()
app.use(ElementPlus)//使用element
app.use(pinia)//使用pinia
app.use(router)//使用路由
// 将 lodash 设置为全局变量
//把他加载到Vue中
app.use(mavonEditor)
pinia.use(persist)//使用持久化
app.mount('#app')