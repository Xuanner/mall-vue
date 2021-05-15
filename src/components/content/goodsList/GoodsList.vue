<template>
  <div class='goods-wrap'>
    <div class='goods-item' v-for='(item, index) in goodsList' :key='index'>
      <a>
        <img :src='item.img'/>
      </a>
      <div class='goods-info'>
        <span>{{item.title}}</span>
        <span>{{item.collect}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsList',
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .goods-item {
    width: 45%;
    margin: 10px 0;
  }
  .goods-item img {
    display: inline-block;
    width: 100%;
  }
  .goods-info {
    padding: 10px 0;
  }
</style>


