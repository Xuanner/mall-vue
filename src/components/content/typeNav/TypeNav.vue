<template>
  <div class='type-wrap'>
    <div class='type-item' 
         v-for='(item, index) in typeList' 
         :key='item'
         :class='{active: currentIndex == index}'>
      <span @click='handleClick(index)'>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TypeNav',
    props: {
      typeList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      handleClick(index) {
        this.currentIndex = index;
        this.$emit('handleClickType', index)
      }
    }
  }
</script>

<style scoped>
  .type-wrap {
    display: flex;
    padding: 10px 0;
    text-align: center;
    height: 20px;
    background: #fff;
  }
  .type-item {
    flex: 1;
    line-height: 20px;
  }
  .type-item span{
    cursor: pointer
  }
  .active {
    color: red
  }
  .active span{
    border-bottom: 2px solid red;
  }
</style>


