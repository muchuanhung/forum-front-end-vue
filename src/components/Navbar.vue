<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link
      class="navbar-brand"
      to="/"
    >
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent" 
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
             v-if="currentUser.isAdmin"
             to="/admin" 
             class="text-white mr-3"
        >
         管理員後台
       </router-link>

        <!-- is user is login -->
        <!-- 透過 v-if 的判斷，如果使用者已登入而且身份為管理員，將可以在導覽列看到「管理員後台」、「管理者 您好」和「登出」的按鈕 -->
        <template v-if="isAuthenticated">
          <router-link
             to="#" 
             class="text-white mr-3"
          > 
          {{ currentUser.name || '使用者' }} 您好
           使用者 您好
         </router-link>
         <button
           type="button" 
           class="btn btn-sm btn-outline-success my-2 my-sm-0"
           @click="logout"
         >
           登出
          </button>
         </template>  
      </div>
    </div>
  </nav>
</template>


<script>
// seed data 類json種子資料
// 假資料 dummyUser，這組資料是在串 API 之前，先模擬一組登入使用者
// 預設的空資料：data 屬性裡的 currentUser，這是在使用者未登入的情況下，Navbar 預設的空資料，他的登入狀態是 false，一旦接受到外部資料，這組 currentUser 就會被覆寫。
import { mapState } from 'vuex'
  // Step1：移除 dummyUser

export default {
   // Step4：新增 `mapState` 方法
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    logout () {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    }
  } 
}
</script>

<!-- scope屬性可以讓樣式特殊化不影響其他元件 -->
<style scoped>
  .navbar-toggler {
    min-width: 70px;
    margin-right: 0;
  }

  nav.bg-dark {
    padding: 14px 16px;
    background-color: #bd2333 !important;
  }

  .navbar-brand {
    font-size: 19px;
    padding: 0;
}
</style>