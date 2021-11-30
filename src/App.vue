<!-- ./src/App.vue -->
<!-- 使用自定義標籤載入元件 -->
<template>
  <div id="restaurant-forum">
    <Navbar /> 
     <main
      role="main"
      class="mt-5 bg-white"
    >
    <router-view />
     </main>
  </div>
</template>



<!-- 註冊元件 -->
<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'



export default {
  components:{
    Navbar 
  }
}
</script>

<!-- scope屬性可以讓樣式特殊化不影響其他元件 -->
<style scoped>
  main {
    margin-top: 65px !important;
  }
</style>