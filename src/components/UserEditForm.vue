<template>
  <!-- 將 <form> 綁定 submit 事件 -->
  <form @submit.prevent.stop="handleFormSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        v-model="profile.name"
        id="name"
        type="text"
        name="name"
        class="form-control my-2"
        placeholder="Enter Name"
        required
      />
    </div>

    <div class="form-group">
      <label for="email">e-mail</label>
      <input
        v-model="profile.email"
        id="email"
        type="text"
        name="email"
        class="form-control my-2"
        placeholder="Enter email"
        required
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="profile.image"
        :src="profile.image"
        class="d-block img-thumbnail my-1"
        width="150"
        height="150"
      />
      <input
        @change="handleFileChange"
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control my-2"
      />
    </div>
    <button type="submit" class="btn btn-primary my-3">Submit</button>
    <button @click="$router.back()" class="btn btn-secondary my-3 mx-3">
      返回
    </button>
  </form>
</template>

<script>
export default {
  props: {
    initialProfile: {
      type: Object,
      //當我們要為物件或陣列類型的資料設定預設值時，需要使用 () => ({}) 的寫法來回傳物件。
      default: () => ({
        id: -1,
        name: "",
        email: "",
        image: "",
        updatedAt: "",
      }),
    },
  },
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        email: "",
        image: "",
        updatedAt: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUserProfile(id);
  },
  methods: {
    fetchUserProfile(userId) {
      console.log(`fetching user profile (id:${userId}) from API`);
      this.profile = {
        ...this.profile,
        ...this.initialProfile,
      };
    },
    //撰寫對應的 handleFileChagne 方法，並顯示預覽圖
    handleFileChange(event) {
      const { files } = event.target;

      if (files.length === 0) {
        this.profile.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.profile.image = imageURL;
      }
    },
    //撰寫對應的 handleSubmit 事件，將 form 轉成 formData 準備傳送到後端伺服器
    handleFormSubmit(event) {
      const form = event.target;
      const formData = new FormData(form);
      this.$emit('after-submit', formData);
    },
  },
};
</script>