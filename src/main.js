import Vue from 'vue'
import App from './App.vue'

// 导入element-ui组件库
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

// 导入路由模块
import router from '@/router'

// 导入axios库
import axios from 'axios'
// 挂载->将来在任何组件访问$http属性就是访问axios进行请求
Vue.prototype.$http = axios


Vue.config.productionTip = false

// 挂载到根实例
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
