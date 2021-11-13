<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
     <div class="card-body">
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <h4>
          <a href="#">{{ restaurant.name }}</a>
          &nbsp;
          <small>{{ restaurant.Category ? restaurant.Category.name : '未分類'
 }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<style scoped>
small {
  font-size: 10px;
}
</style>


<!-- 子元件加上props屬性 -->
<script>
export default {
  //優化:顯示人性化時間
   filters: {
    fromNow (datetime) {
      return `--${datetime}--`
    }
  },
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
}
</script>