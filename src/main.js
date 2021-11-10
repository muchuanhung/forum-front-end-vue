import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,

  //這個動作會把所有和 Vue 有關的內容都放進 public/index.html 裡的 <div id="app">
  render: h => h(App)
}).$mount('#app')
