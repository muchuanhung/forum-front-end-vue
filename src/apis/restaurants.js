//透過 apiHelper 發出 GET 請求給 /restaurants
//從 LocalStorage 取出 token，放進 Header
//攜帶 page 和 categoryId 參數

import { apiHelper } from '../utils/helpers'

export default {
  getRestaurants({ page, categoryID }) {
    const searchParams = new URLSearchParams({ page, categoryID })
    return apiHelper.get(`/restaurants?${searchParams}`)
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getRestaurantsTop() {
    return apiHelper.get(`/restaurants/top`)
  }
}