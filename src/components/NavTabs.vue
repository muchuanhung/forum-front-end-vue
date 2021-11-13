<!-- 運用v-for 迴圈顯示重複的內容 -->
<!-- 運用v-bind 給予key一個不重複的屬性透過uuid插件 -->
<template>
  <ul class="nav nav-tabs mb-4">
     <li
      v-for="tab in tabs"
      :key="tab.id"
      class="nav-item"
    >
      <router-link
        :to="tab.path"
        class="nav-link"
      >
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>


<script>
//定義idv4插件導入 create a UUID
import {v4 as uuidv4} from 'uuid'
export default {
   data () {
      return {
        //導入資料迴圈
      tabs: [
        {
          id: uuidv4(),
          title: '首頁',
          path: '/restaurants'
        },
        {
          id: uuidv4(),
          title: '最新動態',
          path: '/restaurants/feeds'
        },
        {
          id: uuidv4(),
          title: 'TOP 10 人氣餐廳',
          path: '/restaurants/top'
        },
        {
          id: uuidv4(),
          title: '美食達人',
          path: '/users/top'
        }
      ]
    }
  }
}
</script>
