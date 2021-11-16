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
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'

const dummyData = {
  //宣告api資料取得
     
   restaurant: {
        "id": 1,
        "name": "Judy Runte",
        "tel": "(918) 827-1962",
        "address": "98138 Elisa Road",
        "opening_hours": "08:00",
        "description": "dicta et cupiditate",
        "image": "https://loremflickr.com/320/240/food,dessert,restaurant/?random=1",
        "createdAt": "2019-06-22T09:00:43.000Z",
        "updatedAt": "2019-06-22T09:00:43.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2019-06-22T09:00:43.000Z",
            "updatedAt": "2019-06-22T09:00:43.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 3,
                "text": "Quos asperiores in nostrum cupiditate excepturi aspernatur.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2019-06-22T09:00:43.000Z",
                "updatedAt": "2019-06-22T09:00:43.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
                    "image": "https://i.imgur.com/XooCt5K.png",
                    "isAdmin": false,
                    "createdAt": "2019-06-22T09:00:43.000Z",
                    "updatedAt": "2019-06-23T01:16:31.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
  
}

export default {
 components: {
    RestaurantDetail,
    RestaurantComments
  },
  //使用 data 函式來回傳method上一步設定好的資料
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    }
  },
  
  //設定在 created 階段觸發 fetchRestaurant 函式
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },

  //定義抓取資料的函式 fetchRestaurant，把 dummyData 的內容放進 Vue 元件
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }
      this.restaurantComments = dummyData.restaurant.Comments
    },
     afterDeleteComment (commentId) {
      // 以 filter 保留未被選擇的 comment.id
      // 會保留回傳值為 true 的陣列項目
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      );
    }
  }
}
</script>