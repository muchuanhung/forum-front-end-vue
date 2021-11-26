<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />

     <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">

      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants />
        <!-- :restaurants 是 v-bind:restaurants 的縮寫，而 v-bind 用來把資料綁定到 HTML 標籤裡 -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>

      <div class="col-md-6">
        <h3>最新評論</h3>
        <!-- 最新評論 NewestComments-->
        <NewestComments />
        <!-- :comments 是 v-bind:comments
         的縮寫，而 v-bind 用來把資料綁定到 HTML 標籤裡 -->
        <NewestComments :comments="comments" />
      </div>
    </div>

  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants'
import NewestComments from './../components/NewestComments'
import restaurants from '../apis/restaurants.js'
import { Toast } from '../utils/helpers.js'


export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  //使用data函式將資料放入vue
   data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  //改用async/await語法
  //呼叫getfeeds去拉資料
  //撰寫錯誤處理
  methods: {
      async fetchFeeds () {
      try {
        const response = await restaurants.getFeeds()
        console.log('response', response)
        if (response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }
        this.restaurants = response.data.restaurants
        this.comments = response.data.comments
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得最新新動態'
        })
      }
    }
  }
}
</script> 