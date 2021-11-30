<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
    :initial-restaurant="restaurant"
     />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <!-- v-bind 綁定的 props 屬性是 :restaurant-comments="restaurantComments"，這裡的 restaurantComments 是對應到 data 屬性裡回傳內容 -->
    <!-- v-on父元件監聽子元件事件 -->
     <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />

    <!-- 新增評論 CreateComment -->
    <!-- v-on父元件監聽子元件事件 -->
    <CreateComment 
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment from './../components/CreateComment.vue'
// STEP 1: 匯入 restaurantsAPI 和 Toast 顯示提示
import restaurantsAPI from '../apis/restaurants.js'
import commentsAPI from '../apis/comments.js'
import { Toast } from '../utils/helpers.js'
import { mapState } from 'vuex'


export default {
 components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  //使用 data 函式來回傳method上一步設定好的資料
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        restaurantComments: [],
        isFavorited: false,
        isLiked: false,
      },
      isPosting: false,
      isDeleteing: false,
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  
  //設定在 created 階段觸發 fetchRestaurant 函式
   created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },

  //定義抓取資料的函式 fetchRestaurant，把 dummyData 的內容放進 Vue 元件
  methods: {
     // STEP 3: 改用 async/await 語法
    async fetchRestaurant (restaurantId) {
      try {
        // STEP 4: 透過 restaurantsAPI 取得餐廳資訊
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId })

        // STEP 5: 透過 restaurantsAPI 取得餐廳資訊
        const { restaurant, isFavorited, isLiked } = data
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments
        } = restaurant

       this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked
        }
       this.restaurantComments = Comments
      } catch (error) {
        // STEP 6: 透過 restaurantsAPI 取得餐廳資訊
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },

     async afterDeleteComment(commentId) {
      try {
        this.isDeleteing = true
        const { data } = await commentsAPI.deleteRestaurantComment({ commentId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant.restaurantComments =
          this.restaurant.restaurantComments.filter(comment => comment.id !== commentId)
        this.isDeleteing = false
      } catch (error) {
        this.isDeleteing = false
        Toast.fire({
          icon: 'error',
          title: '無法刪除評論，請稍後再試'
        })
      }
    },
    async afterCreateComment(payload) {
      try {
        const { restaurantId : RestaurantId, text } = payload
        const UserId = this.currentUser.id
        const { data } = await commentsAPI.createRestaurantComment({ UserId, RestaurantId, text})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant.restaurantComments.push({
        id: data.commentId,
        text,
        UserId,
        RestaurantId,
        createdAt: new Date(),
        User: {
          id: UserId,
          name: this.currentUser.name,
        },
      })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試'
        })
      }
    },
  },
};
</script>