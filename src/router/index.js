import Vue from 'vue'
import VueRouter from 'vue-router'
//404 Not Found 頁面被呼叫的時機是「所有的路由都匹配不到的情況」
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
//首頁
import Restaurants from '../views/Restaurants.vue'
import store from '../store/index.js'


Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser.name.length !== 0 && !currentUser.isAdmin) {
    next({ name: 'not-found' })
  }
  next()
}

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
     //餐廳個別頁-用:id來定義動態路徑參數
  {
      path: '/restaurants/:id',
      name: 'restaurant',
      component: () => import('../views/Restaurant.vue')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard')
  },
    //美食達人
  {
      path: '/users/top',
      name: 'users-top',
      component: () => import('../views/UsersTop.vue')
  },
    //User Profile頁面
  {
      path: '/users/:id',
      name: 'user',
      component: () => import('../views/User.vue')
  },
    //美食達人-編輯使用者資料
  {
      path: '/users/:id/edit',
      name: 'user-edit',
      component: () => import('../views/UserEdit.vue')
  },
    //管理頁面
  {
      path: '/admin',
      exact: true,
      redirect: 'admin/restaurants',
      beforeEnter: authorizeIsAdmin
  },
    //管理頁面個人餐廳  
  {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      component: () => import('../views/AdminRestaurants'),
      beforeEnter: authorizeIsAdmin
  },
    //頁面元件-有指定名稱的路由都要放在動態路由前面  
  {
      path: '/admin/restaurants/new',
      name: 'admin-restaurant-new',
      component: () => import('../views/AdminRestaurantNew.vue'),
      beforeEnter: authorizeIsAdmin
  }, 
    //管理頁面個人頁面  
  {
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      component: () => import('../views/AdminRestaurant.vue'),
      beforeEnter: authorizeIsAdmin
  }, 
    //後台編輯餐廳
  {
      path: '/admin/restaurants/:id/edit',
      name: 'admin-restaurant-edit',
      component: () => import('../views/AdminRestaurantEdit.vue'),
      beforeEnter: authorizeIsAdmin
  },  
    //管理頁面餐廳類別後台
  {
      path: '/admin/categories',
      name: 'admin-categories',
      component: () => import('../views/AdminCategories.vue'),
      beforeEnter: authorizeIsAdmin
  },
    //使用者權限管理  
  {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/AdminUsers.vue'),
      beforeEnter: authorizeIsAdmin
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
  routes
})

router.beforeEach(async (to, from, next) => {
  // token validation
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated
  //有token的情況下向後端驗證
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
  // redirect 如果token無效轉址到登入頁
  const pathsWithoutAuthentication = ['sign-up', 'sign-in']
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  // redirect如果token有效轉址到餐廳論壇登入頁  
  } else if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }
  next()
})

export default router