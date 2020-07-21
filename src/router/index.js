// 在该文件中初始化路由实例,且导出即可
import Vue from 'vue'

// 导入vue-router插件
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
import Login from '@/views/login'


// 定义路由规则
const routes = [
    {
        path: '/login',
        component: Login
    }
]

// 初始化路由实例
const router = new VueRouter({ routes })

// 导出
export default router