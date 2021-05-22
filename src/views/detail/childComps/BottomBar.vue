<template>
  <div class='bottom-bar-wrap'>
    <div class='add-cart' @click='addCart'>加入购物车</div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  methods: {
    addCart() {
      this.$emit('addCart');
    }
  }
}
</script>

<style scoped>
  .bottom-bar-wrap {
    position: fixed;
    bottom: 0;
    background: #fff;
    z-index: 1000;
    height: 55px;
    width: 100%;
    line-height: 55px;
  }
  .add-cart {
    height: 100%;
    width: 100px;
    background: #dddddd;
    text-align: center;
  }
</style>


