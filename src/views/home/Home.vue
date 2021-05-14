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
      <type-nav class='type-nav' :typeList='type' @handleClickType='handleClickType'></type-nav>
      <goods-list :goodsList="showGoodsList"></goods-list>
    </div> 
  </div>
</template>

<script>
  import HeaderBar from 'components/common/headerBar/HeaderBar'
  import Swiper from 'components/common/swiper/Swiper'
  import Recommend from './childComps/recommend'
  import TypeNav from 'components/content/typeNav/TypeNav'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import {getSlidBanners, getRecommends, getTypeData, getGoods} from '@/network/home'

  export default {
    name: 'Home',
    data() {
      return {
        pageTitle: 'Shoping',
        slidList: [],
        recommendList: [],
        type: [],
        showGoodsList: [],
        goods: {
          'pop': {'page': 0, 'list': []},
          'hot': {'page': 0, 'list': []},
          'sale': {'page': 0, 'list': []}
        }
      }
    },
    components: {
      HeaderBar,
      Swiper,
      Recommend,
      TypeNav,
      GoodsList
    },
    created() {
      this.getSlidBanners();
      this.getRecommends();
      this.getTypeData();
      this.getGoods('pop');
      this.getGoods('hot');
      this.getGoods('sale');
      this.showGoodsList = this.goods['pop'].list;
    },
    methods: {
      getSlidBanners() {
        getSlidBanners().then(res => {
          this.slidList = res.data.swiper
        })
      },
      getRecommends() {
        getRecommends().then(res => {
          this.recommendList = res.data.recommends
        })
      },
      getTypeData() {
        getTypeData().then(res => {
          this.type = res.data.type
        })
      },
      getGoods(type) {
        let page = this.goods[type].page;
        getGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data);
        })
      },
      handleClickType(index) {
        console.log(this.goods);
        this.showGoodsList = this.goods[this.type[index]].list;
      }
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
  .type-nav {
    position: sticky;
    top: 0;
  }
</style>


