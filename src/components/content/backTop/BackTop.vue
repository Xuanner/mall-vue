<template>
  <div class='back-top-wrap'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'BackTop'
  }
</script>

<style scoped>
  .back-top-wrap {
    height: 50px;
    width: 50px;
    border: 1px solid #DDDDDD;
    border-radius: 50%;
    background: #DDDDDD;
    z-index: 100;
    position: absolute;
    bottom: 70px;
    right: 10px;
    text-align: center;
    line-height: 50px;
  }
</style>


