<!--新增 isProcessing 屬性避免使用者連續點擊-->
<template>
  <div class="container py-5">
    <AdminRestaurantForm 
     :initial-restaurant="restaurant"
     :is-processing="isProcessing"
     @after-submit="handleAfterSubmit" 
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'
// STEP 1: 載入 adminAPI 和 Toast
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'


//這裡我們透過 this.$route.params 取得網址上的 id，才會知道現在編輯的是哪一筆餐廳資料
export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
 methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
        const {
          id,
          name,
          CategoryId: categoryId,
          tel,
          address,
          description,
          image,
          opening_hours: openingHours,
        } = data.restaurant
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryId,
          tel,
          address,
          description,
          image,
          openingHours,
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async handleAfterFormSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.updateDetail({ restaurantId: this.restaurant.id, formData })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        //更新完成後轉址到 /admin/restaurants 頁面
        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    },
  },
};
</script>