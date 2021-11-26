<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>
<script>
import authorizationAPI from './../apis/authorization';
import { Toast } from './../utils/helpers';

export default {
  data() {
    return {
      email: "",
      password: "",
      //避免使用者重覆點擊
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      //via authorizationAPI
      // 如果 email 或 password 為空，則使用 Toast 提示
      // 然後 return 不繼續往後執行
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "沒有輸入帳號密碼",
          });
          return;
        }
        this.isProcessing = true;
        // 使用 authorizationAPI 的 signIn 方法
        // 並且帶入使用者填寫的 email 和 password
        const { data } = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });
        //做一個status判斷式
        if (data.status !== "success")
          throw new Error("請確認您輸入了正確的帳號密碼");
        //將伺服器回傳的token保存在localstorage中  
        localStorage.setItem("token", data.token);
        //將currentUser存入vuex
        this.$store.commit("setCurrentUser", data.user);
        this.$router.push("/restaurants");
      } catch (err) {
        this.isProcessing = false;
        this.password = "";
        Toast.fire({
          icon: "warning",
          title: err,
        });
      }
    },
  },
};
</script>