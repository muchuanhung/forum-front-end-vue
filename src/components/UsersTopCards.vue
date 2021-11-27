<template>
  <div class="text-center col-12 col-sm-6 col-md-4 col-lg-3 g-4 px-4">
    <!-- temporary router -->
    <router-link :to="{ name: 'user', params: { id: user.id } }">
      <img :src="user.image" class="rounded-3 w-100" />
    </router-link>
    
    <h2 class="fs-4 my-2">{{ user.name }}</h2>
    <span class="badge bg-secondary w-auto px-2"
      >追蹤人數：{{ user.FollowerCount }}</span
    >
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.prevent.stop="removeFollowed(user.id)"
        type="button"
        class="btn btn-danger mx-2 px-3"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.stop.prevent="addFollowing(user.id)"
        type="button"
        class="btn btn-primary mx-2 px-3"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    async addFollowing (userId) {
     try {
      const { data } = await usersAPI.addFollowing({ userId })

      console.log('data', data)

      if (data.status !== 'success') {
      throw new Error(data.message)
    }

    this.users = this.users.map(user => {
      if (user.id !== userId) {
        return user
      } else {
        return {
          ...user,
          followerCount: user.followerCount + 1,
          isFollowed: true
        }
      }
    })
  } catch (error) {
    Toast.fire({
      icon: 'error',
      title: '無法加入追蹤，請稍後再試'
    })
  }
},
   async deleteFollowing (userId) {
    try {
      const { data } = await usersAPI.deleteFollowing({ userId })

      console.log('data', data)

    if (data.status !== 'success') {
      throw new Error(data.message)
    }

    this.users = this.users.map(user => {
      if (user.id !== userId) {
        return user
      } else {
        return {
          ...user,
          followerCount: user.followerCount - 1,
          isFollowed: false
        }
      }
    })
  } catch (error) {
    Toast.fire({
      icon: 'error',
      title: '無法取消追蹤，請稍後再試'
    })
  }
},
  },
};
</script>

