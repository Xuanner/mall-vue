<template>
  <div id='home'>
    <header-bar>
      <template v-slot:center>
        <div>{{pageTitle}}</div>
      </template>
    </header-bar>
    <swiper :banner='slidList'></swiper>
    <Recommend :recommendList='recommendList'></Recommend>
  </div>
</template>

<script>
  import HeaderBar from 'components/common/headerBar/HeaderBar'
  import Swiper from 'components/common/swiper/Swiper'
  import Recommend from './childComps/recommend'
  import {getSlidBanners, getRecommends} from '@/network/home'

  export default {
    name: 'Home',
    data() {
      return {
        pageTitle: 'Shoping',
        slidList: [],
        recommendList: []
      }
    },
    components: {
      HeaderBar,
      Swiper,
      Recommend
    },
    created() {
      getSlidBanners().then(res => {
        this.slidList = res.data.swiper
      })
      getRecommends().then(res => {
        this.recommendList = res.data.recommends
      })
    }
  }
</script>

<style scoped>
</style>


