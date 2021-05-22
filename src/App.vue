<template>
  <div id="app">
    <keep-alive exclude='Detail'>
      <router-view class='content'></router-view>
    </keep-alive>
    <main-nav class='footer' v-if='showMainNav'></main-nav>
  </div>
</template>

<script>
  import MainNav from 'components/content/mainNav/MainNav'

  export default {
    name: 'App',
    components: {
      MainNav
    },
    computed: {
      showMainNav() {
        return this.$store.state.showMainNav;
      }
    }
  }
</script>

<style>
  @import 'assets/css/base.css';
  
  .content {
    height: calc(100vh - 55px);
  }
</style>
