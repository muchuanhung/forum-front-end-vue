<template>
  <div class="container py-5">
    <!-- User Profile Card -->
    <UserProfileCard />

    <!-- User Following Card -->
    <UserFollowingsCard/>

     <!-- User Followers Card -->
    <UserFollowersCard/>

     <!-- User Comments Card -->
    <UserCommentsCard/>

     <!-- UserFavoritedRestaurantsCard -->
    <UserFavoritedRestaurantsCard/>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoriteRestaurantsCard.vue";

import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  //建立 data 函式，並定義資料
  data() {
    return {
      userProfile: {
        id: -1,
        name: '',
        email: '',
        isAdmin: false,
        image: '',
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: []
      },
      isFollowed: false,
    }
  },
  //透過 computed 將 currentUser 從 Vuex 取出
   computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { id } = this.$route.params
    this.fetchUserProfile(id)
  },
  //在 beforeRouteUpdate 時要再重新取得使用者資料
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUserProfile(id)
    next()
  },

  //將 fetchUser 改成 async/await 語法，並可帶入參數 userId
  methods: {
    async fetchUserProfile(userId) {
      try {
        //在 fetchUser 中呼叫 usersAPI  
        const { data } = await usersAPI.getUser({ userId })
        if (data.profile.name.length === 0) {
          throw new Error('error')
        }
        this.userProfile = {
          ...this.userProfile,
          ...data.profile
        }
        this.isFollowed = data.isFollowed
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得用戶資料，請稍後再試'
        })
      }
    },
    async toggleFollowingStatus(userId) {
      try {
        if (userId !== this.currentUser.id) {
          if (this.isFollowed) {
            const { data } = await usersAPI.deleteFollowing({ userId })
            if (data.status !== 'success') {
              throw new Error(data.message)
            }
            this.isFollowed = false
            this.userProfile.Followers = this.userProfile.Followers.filter(
              (follower) => follower.id !== this.currentUser.id
            )
          } else {
            const { data } = await usersAPI.addFollowing({ userId })
            if (data.status !== 'success') {
              throw new Error(data.message)
            }
            this.isFollowed = true
            this.userProfile.Followers.push(this.currentUser)
          }
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法更新追蹤狀態，請稍後再試'
        })
      }
    },
  },
};
</script>