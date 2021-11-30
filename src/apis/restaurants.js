//透過 apiHelper 發出 GET 請求給 /restaurants
//從 LocalStorage 取出 token，放進 Header
//攜帶 page 和 categoryId 參數


import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  //新增API設定
  getRestaurant ({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()} ` }
    })
  },
  getRestaurantsTop() {
    return apiHelper.get(`/restaurants/top`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}