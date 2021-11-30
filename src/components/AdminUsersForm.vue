<template>
  <div class="container py-5">
    <AdminNav />
    <AdminUsersForm :initial-user-list="userList" />
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import AdminUsersForm from '../components/AdminUsersForm.vue'
import adminAPI from '../apis/admin.js'
import { Toast } from '../utils/helpers.js'


export default {
  components: {
    AdminNav,
    AdminUsersForm,
  },
  data() {
    return {
      userList: [],
    }
  },

  //角色 role 部分，若使用者的 isAdmin 是 true 則呈現 admin，否則呈現 user
  methods: {
     async fetchUsersData() {
      try {
        const { data } = await adminAPI.users.getUsers()
        if (!data.users) {
          throw new Error('error')
        }
        this.userList = data.users
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者清單，請稍後再試'
        })
      }
    },
  },
};
</script>