import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //這個動作會把所有和 Vue 有關的內容都放進 public/index.html 裡的 <div id="app">
}).$mount('#app')
