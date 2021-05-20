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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
  }
  .left, .right  {
    width: 60px;
    height: 100%;
  }
  .center {
    flex: 1;
    height: 100%;
    line-height: 44px;
  }
  .active {
    color: red
  }
</style>


