import Vue from 'vue'
import VueRouter from 'vue-router'
//404 Not Found 頁面被呼叫的時機是「所有的路由都匹配不到的情況」
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
    //登入頁面
  {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    //註冊頁面
  {
      path: '/signup',
      name: 'sign-up',
    //動態載入  
      component: () => import('../views/SignUp.vue')
  },

  {
    //星號 (*) 是萬用字元，這裡代表「所有的網址」
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
