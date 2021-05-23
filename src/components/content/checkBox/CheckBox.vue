<template>
  <div class="iconfont check-wrap" :class='{active: isActive}'>&#xe67e;</div>
</template>

<script>
  export default {
    name: 'CheckBox',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-wrap {
    color: transparent;
    font-weight: 600;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }
  .active {
    background: red;
    color: #fff;
  }
</style>


