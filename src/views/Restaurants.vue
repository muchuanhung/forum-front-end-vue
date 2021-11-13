<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <!-- 賦予 RestaurantCard 一個自訂屬性 initial-restaurant-->
      <Restaurantcard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
        />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'

const dummyData = {

    "restaurants": [
        {
            "id": 1,
            "name": "Alison Hills",
            "tel": "596-073-7406 x399",
            "address": "3910 Norene Manors",
            "opening_hours": "08:00",
            "description": "Ut quia nostrum ea et commodi nisi esse at. Omnis ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.24054586968803",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:32:53.000Z",
                "updatedAt": "2021-11-10T13:32:53.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Skylar Auer",
            "tel": "(732) 880-4192 x065",
            "address": "43152 Conn Glens",
            "opening_hours": "08:00",
            "description": "In perferendis velit et optio qui totam. Sint sequ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.77621067602432",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T13:32:53.000Z",
                "updatedAt": "2021-11-10T13:32:53.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Lizeth Gaylord",
            "tel": "1-048-177-0072",
            "address": "081 Watsica Spur",
            "opening_hours": "08:00",
            "description": "Exercitationem et suscipit maxime porro animi aute",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.44129612894935",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:32:53.000Z",
                "updatedAt": "2021-11-10T13:32:53.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Arvilla Graham",
            "tel": "(225) 355-6363",
            "address": "893 Domenick Mountains",
            "opening_hours": "08:00",
            "description": "voluptate",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.514761397883028",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T13:32:53.000Z",
                "updatedAt": "2021-11-10T13:32:53.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Mr. Eva Kunze",
            "tel": "1-766-279-6555 x028",
            "address": "30276 Amos View",
            "opening_hours": "08:00",
            "description": "fugit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.29475445213781",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:32:53.000Z",
                "updatedAt": "2021-11-10T13:32:53.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Dewitt Kertzmann II",
            "tel": "1-119-895-2832 x782",
            "address": "12126 Russel Forks",
            "opening_hours": "08:00",
            "description": "Aliquam aliquid odit et totam. Illo aut provident ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.69060670371908",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T13:32:53.000Z",
                "updatedAt": "2021-11-10T13:32:53.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Irving Kub MD",
            "tel": "(632) 322-4778 x32373",
            "address": "6312 Bosco Valleys",
            "opening_hours": "08:00",
            "description": "Quos ut voluptatem odit hic omnis mollitia alias. ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.045937945941727",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:32:53.000Z",
                "updatedAt": "2021-11-10T13:32:53.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Ms. Carolina Kemmer",
            "tel": "(001) 990-9233 x68602",
            "address": "146 McGlynn Lake",
            "opening_hours": "08:00",
            "description": "esse repellendus eligendi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.798806352041325",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T13:32:53.000Z",
                "updatedAt": "2021-11-10T13:32:53.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Brionna Kuhn",
            "tel": "072.428.5465 x588",
            "address": "12082 Hosea Road",
            "opening_hours": "08:00",
            "description": "Vitae dolorem repellendus nihil autem eius corrupt",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.278514642619",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T13:32:53.000Z",
                "updatedAt": "2021-11-10T13:32:53.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Deja Kunze",
            "tel": "(997) 000-5181 x8099",
            "address": "33236 Kaley Meadows",
            "opening_hours": "08:00",
            "description": "Commodi amet quia a sed nesciunt saepe dolore eaqu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.311561035151315",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T13:32:53.000Z",
                "updatedAt": "2021-11-10T13:32:53.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2021-11-10T13:32:53.000Z",
            "updatedAt": "2021-11-10T13:32:53.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2

}

export default {
   components: {
    NavTabs,
    RestaurantCard
  },

  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1

    }
  },

  created(){
    this.fetchRestaurants()
  },

  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }

  }
}
</script>