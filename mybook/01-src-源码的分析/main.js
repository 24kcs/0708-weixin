import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 设置当前程序的类型,是小程序
App.mpType = 'app'
// 创建实例对象
const app = new Vue(App)
// 挂载
app.$mount()
