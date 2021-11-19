<template>
  <div class="card">
    <div class="card-header">
      <!-- 從 User 傳入資料給 子元件 -->
      <strong>{{userProfile.Comments.length}}</strong> 已評論餐廳</div>>
    <div class="card-body">
      <!-- v-for start -->
      <router-link
        v-for="comment in userProfile.Cooments"
        :key="comment.id"
        :to="{ name: 'restaurant', params: { id: comment.Restaurant.id } }"
      >
        <img
          :src="comment.Restaurant.image"
          width="60"
          height="60"
           class="avatar m-1 rounded-1"
        />
      </router-link>
      <!-- v-for end -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userProfile: {
      type: Object,
      required: true,
    },
  },
};
</script>