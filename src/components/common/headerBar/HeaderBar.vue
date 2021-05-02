<template>
  <div class='header-bar'>
    <div class='left'><slot name='left'></slot></div>
    <div class='center'><slot name='center'></slot></div>
    <div class='right'><slot name='right'></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderBar'
  }
</script>

<style scoped>
  .header-bar{
    display: flex;
    height: 44px;
    align-items: center;
    box-shadow: 0 -1px 10px #DCDCDC;
    text-align: center;
  }
  .left, .right  {
    width: 60px;
  }
  .center {
    flex: 1
  }
</style>


