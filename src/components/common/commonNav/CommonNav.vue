<template>
  <div class="common-nav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CommonNav',
  }
</script>

<style scoped>
.common-nav {
    display: flex;
    height: 55px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #F5F5F5;
    box-shadow: 0 -1px 10px #DCDCDC;
    align-items: center;
  }
</style>


