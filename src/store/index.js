import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from './../apis/users'

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
    // 將使用者的登出狀態改為 false
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated =false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  //透過API拉取currentUser的資料
  actions: {
    async fetchCurrentUser () {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        const { data } = await userAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data
        
        this.commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
        return true
      } catch (error) {
        console.log('error', error)
        console.error('Failed to fetch user information')
        this.commit('revokeAuthentication')
        return false
      }
    }
  },
  //
  modules: {
  }
})
