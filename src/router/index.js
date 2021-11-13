import Vue from 'vue'
import VueRouter from 'vue-router'
//404 Not Found 頁面被呼叫的時機是「所有的路由都匹配不到的情況」
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
//首頁
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [
    //設定根目錄轉址
  {
      path: '/',
      name: 'root',
      redirect: '/restaurants'
  },
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
    //餐廳首頁
   {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    //最新動態
  {
      path: '/restaurants/feeds',
      name: 'restaurants-feeds',
      component: () => import('../views/RestaurantsFeeds.vue')
  },
    //人氣餐廳
  {
      path: '/restaurants/top',
      name: 'restaurants-tops',
      component: () => import('../views/RestaurantsTop.vue')
  },
    //美食達人
  {
      path: '/users/top',
      name: 'users-top',
      component: () => import('../views/UsersTop.vue')
  },
    //搜索不到頁面
  {
    //星號 (*) 是萬用字元，這裡代表「所有的網址」
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'hash',
  routes
})

export default router
