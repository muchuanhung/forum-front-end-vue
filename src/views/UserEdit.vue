<template>
  <div class="container py-5">
    <UserEditForm 
     :initial-profile="userProfile"
     @after-submit="handleAfterSubmit" 
    />
  </div>
</template>

<script>
import UserEditForm from "../components/UserEditForm.vue";

//設定種子資料
const dummyData = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: "https://i.imgur.com/58ImzMM.png",
    updatedAt: "2019-08-01T10:33:51.095Z",
  },
};

export default {
  components: {
    UserEditForm,
  },

  data() {
    return {
      userProfile: dummyData.profile,
    };
  },


   methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
}
</script>

