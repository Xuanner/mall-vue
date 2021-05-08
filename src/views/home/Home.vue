<template>
  <div id='home'>
    <header-bar>
      <template v-slot:center>
        <div>{{pageTitle}}</div>
      </template>
    </header-bar>
    <swiper :banner='slidList'></swiper>
  </div>
</template>

<script>
  import HeaderBar from 'components/common/headerBar/HeaderBar'
  import Swiper from 'components/common/swiper/Swiper'
  import {getSlidBanners} from '@/network/home'
  import '@/mock/mock.js'

  export default {
    name: 'Home',
    data() {
      return {
        pageTitle: 'Shoping',
        slidList: []
      }
    },
    components: {
      HeaderBar,
      Swiper
    },
    created() {
      getSlidBanners().then(res => {
        this.slidList = res.data.swiper
      })
    }
  }
</script>

<style scoped>
  
</style>


