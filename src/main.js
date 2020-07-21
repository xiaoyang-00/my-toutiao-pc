import Vue from 'vue'
import App from './App.vue'

// 导入element-ui组件库
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
