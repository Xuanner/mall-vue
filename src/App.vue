<template>
  <div id="app">
    <router-view></router-view>
    <main-nav></main-nav>
  </div>
</template>

<script>
  import MainNav from 'components/content/mainNav/MainNav'

  export default {
    name: 'App',
    components: {
      MainNav
    }
  }
</script>

<style>
  @import 'assets/css/base.css';
  
</style>
