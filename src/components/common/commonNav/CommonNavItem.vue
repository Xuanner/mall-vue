<template>
  <div class='common-nav-item'>
    <slot name='item-icon'></slot>
    <slot name='item-text'></slot>
  </div>
</template>

<script>
  export default {
    name: 'CommonNavItem'
  }
</script>

<style scoped>
  .common-nav-item {
    flex: 1;
    text-align: center;
  }
</style>


