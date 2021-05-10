<template>
  <div id='home'>
    <header-bar>
      <template v-slot:center>
        <div>{{pageTitle}}</div>
      </template>
    </header-bar>
    <div class='home-content'>
      <swiper :banner='slidList'></swiper>
      <recommend :recommendList='recommendList'></recommend>
      <type-nav :typeList='type'></type-nav>
    <ul>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
    </ul>
    </div> 
  </div>
</template>

<script>
  import HeaderBar from 'components/common/headerBar/HeaderBar'
  import Swiper from 'components/common/swiper/Swiper'
  import Recommend from './childComps/recommend'
  import TypeNav from 'components/content/typeNav/TypeNav'
  import {getSlidBanners, getRecommends, getTypeData} from '@/network/home'

  export default {
    name: 'Home',
    data() {
      return {
        pageTitle: 'Shoping',
        slidList: [],
        recommendList: [],
        type: []
      }
    },
    components: {
      HeaderBar,
      Swiper,
      Recommend,
      TypeNav
    },
    created() {
      getSlidBanners().then(res => {
        this.slidList = res.data.swiper
      })
      getRecommends().then(res => {
        this.recommendList = res.data.recommends
      })
      getTypeData().then(res => {
        this.type = res.data.type
      })
    }
  }
</script>

<style scoped>
  #home {
    height: calc(100vh - 55px);
  }
  .home-content{
    position: absolute;
    top: 44px;
    bottom: 55px;
    overflow: scroll;
    flex:1;
  }
</style>


