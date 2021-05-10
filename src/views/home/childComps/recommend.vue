<template>
  <div class='recommend-wrap'>
    <div v-for='item in recommendList' 
          :key='item.id'
          class='recommend-item'>
      <a :href='item.link'>
        <img :src='item.img' />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    props: {
      recommendList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend-wrap{
    display: flex;
    color: #969696
  }
  .recommend-item {
    flex: 1;
    text-align: center;
    width: 80px;
  }
  .recommend-item img{
    max-width: 80px;
  }
</style>


