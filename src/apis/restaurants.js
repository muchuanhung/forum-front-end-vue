//透過 apiHelper 發出 GET 請求給 /restaurants
//從 LocalStorage 取出 token，放進 Header
//攜帶 page 和 categoryId 參數


import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants ({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
