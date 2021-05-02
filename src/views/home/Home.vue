<template>
  <div id='home'>
    <header-bar>
      <template v-slot:center>
        <div>{{pageTitle}}</div>
      </template>
    </header-bar>
  </div>
</template>

<script>
  import HeaderBar from 'components/common/headerBar/HeaderBar'
  export default {
    name: 'Home',
    data() {
      return {
        pageTitle: 'Shoping'
      }
    },
    components: {
      HeaderBar
    }
  }
</script>

<style scoped>
  
</style>


