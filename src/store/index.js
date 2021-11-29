import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //data-每個vue component都可以取用到這個data
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  //用來修改state的方法-methods
  mutations: {
    setCurrentUser (state, currentUser){
     state.currentUser = {
      ...state.currentUser,
       // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
      ...currentUser
    }
     // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated =false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  //透過API拉取currentUser的資料
  actions: {
  },
  //
  modules: {
  }
})
