<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

  <!-- v-for start -->
  <!-- 透過@click監聽按鈕點擊事件 -->
    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-end"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{name: 'user', params: {id:comment.User.id}}">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer mt-1">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
// 載入撰寫好的 mixin
import { fromNowFilter } from '../utils/mixins.js'
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}
export default {
   // 透過 mixins 屬性將撰寫好的 mixin 放入
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  data () {
    return {
      currentUser: dummyUser.currentUser,
    }
  },
  //定義點擊事件處理程序-透過emit發射資料回父元件
  methods: {
    handleDeleteButtonClick(commentId) {
  // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
      // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )    
      this.$emit('after-delete-comment', commentId)
    }
  }
}
</script>