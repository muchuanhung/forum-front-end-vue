<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row">
       <!-- User cards -->
       <UsersTopCards
         v-for="user in users"
        :key="user.id"
        :initial-user="user"
      />
    </div>
  </div>
</template>

<script>
//導入上方元件
import NavTabs from "../components/NavTabs.vue";
import UsersTopCards from '../components/UsersTopCards.vue';

//導入API資料
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$UvMcSKrgRN4dyz6og7gpveO6jE4JjZeTO/UcoR92KBr8llL45vEIa",
      isAdmin: true,
      image: "https://i.ibb.co/JFDyWNr/adorableavatar.png",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$zMr3omqXDS8O64UOiGcwuu8IFs50zPRvzrXOkJMdm4lXEc8feWVT.",
      isAdmin: false,
      image: "https://i.ibb.co/Tk4wmLB/58ImzMM.png",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
       id: 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$.l2Fo6WUe54k0EqEmm1XL.ZmCvCYMt8fN0N3IMxcnnoHtChcEnE8y",
            "isAdmin": false,
            "image": "https://i.ibb.co/G5xvkcR/17409731.png",
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
    },
  ],
};

export default {
  name: "UserTop",
  components: {
    NavTabs,
    UsersTopCards
  },
  //輸出回傳API的資料
   data() {
    return {
      users: [],
    };
  },
   created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
  },
};

</script>