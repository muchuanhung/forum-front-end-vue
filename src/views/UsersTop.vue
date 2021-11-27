<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row">
       <!-- User cards -->
       <UsersTopCards
         v-for="user in users"
        :key="user.id"
        :initial-user="user"
      />
    </div>
  </div>
</template>

<script>
//導入上方元件
//匯入API設定
import NavTabs from "../components/NavTabs.vue"
import UsersTopCards from '../components/UsersTopCards.vue'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'


export default {
  name: "UserTop",
  components: {
    NavTabs,
    UsersTopCards
  },
  //輸出回傳API的資料
   data() {
    return {
      users: [],
    };
  },
   created() {
    this.fetchUsers();
  },
 methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers()
        this.users = data.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }))
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人資訊，請稍後再試'
        })
      }
    },
  },
};
</script>