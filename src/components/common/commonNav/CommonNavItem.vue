<template>
  <div class='common-nav-item' :style='activeStyle' @click='itemClick'>
    <slot name='item-icon'></slot>
    <slot name='item-text'></slot>
  </div>
</template>

<script>
  export default {
    name: 'CommonNavItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#FF0000'
      }
    },
    computed: {
      activeStyle() {
        return (this.$route.path.indexOf(this.path) != -1) ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .common-nav-item {
    flex: 1;
    text-align: center;
  }
</style>


