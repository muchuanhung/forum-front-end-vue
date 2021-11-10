<!-- HTML元素呈現內容結構 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- HelloWorld的子元件，而它的內容來自 /components/HelloWorld.vue -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<!-- JavaScript資料處理與方法 -->
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<!-- CSS樣式 -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
