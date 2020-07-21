import Vue from 'vue'
import App from './App.vue'

// 导入element-ui组件库
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

// 导入路由模块
import router from '@/router'

Vue.config.productionTip = false

// 挂载到根实例
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
