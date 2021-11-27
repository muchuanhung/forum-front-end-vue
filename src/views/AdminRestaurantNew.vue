<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'
// STEP 1: 匯入 adminAPI 和 Toast
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'


export default {
  components: {
    AdminRestaurantForm
  },
  methods: {
    // STEP 2: 改成 async...await 語法
    async handleAfterSubmit (formData) {
      try {
        // STEP 3: 透過 restaurants.create 方法來向伺服器建立餐廳
        const { data } = await adminAPI.restaurants.create({
          formData
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // STEP 4: 成功的話則轉址到 `/admin/restaurants`
        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        // STEP 5: 錯誤處理
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
      }
    }
  }
}
</script>