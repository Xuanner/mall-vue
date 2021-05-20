<template>
  <div id='home'>
    <header-bar>
      <template v-slot:center>
        <div>{{pageTitle}}</div>
      </template>
    </header-bar>
    <div class='home-content' @scroll='handleContentScroll' ref="content">
      <swiper :banner='slidList'></swiper>
      <recommend :recommendList='recommendList'></recommend>
      <type-nav class='type-nav' :typeList='type' @handleClickType='handleClickType'></type-nav>
      <goods-list :goodsList="showGoodsList" @goToDetail='goToDetail'></goods-list>
    </div> 
    <back-top v-show='isShowBackTop' @click.native='backTop'>Top</back-top>
  </div>
</template>

<script>
  import HeaderBar from 'components/common/headerBar/HeaderBar'
  import Swiper from 'components/common/swiper/Swiper'
  import Recommend from './childComps/recommend'
  import TypeNav from 'components/content/typeNav/TypeNav'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'
  import {getSlidBanners, getRecommends, getTypeData, getGoods} from '@/network/home'

  export default {
    name: 'Home',
    data() {
      return {
        pageTitle: 'Shoping',
        slidList: [],
        recommendList: [],
        type: [],
        curtType: '',
        showGoodsList: [],
        goods: {
          'pop': {'page': 0, 'list': []},
          'hot': {'page': 0, 'list': []},
          'sale': {'page': 0, 'list': []}
        },
        isShowBackTop: false,
        positionY: 0
      }
    },
    computed: {
      swiperWidth() {
        return document.documentElement.offsetWidth;
      }
    },
    components: {
      HeaderBar,
      Swiper,
      Recommend,
      TypeNav,
      GoodsList,
      BackTop
    },
    created() {
      this.getSlidBanners();
      this.getRecommends();
      this.getTypeData();
      this.getGoods('pop');
      this.getGoods('hot');
      this.getGoods('sale');
      this.showGoodsList = this.goods['pop'].list;
      this.curtType = 'pop';
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
        this.curtType = this.type[index];
        this.showGoodsList = this.goods[this.type[index]].list;
      },
      handleContentScroll() {
        this.isShowBackTop = (this.$refs.content.scrollTop > 150) ? true : false;
        this.needLoadMore() ? this.loadMore(this.curtType) : '';
      },
      backTop() {
        this.$refs.content.scrollTo(0,0);
      },
      loadMore(type) {
        this.getGoods(type);
      },
      needLoadMore() {
        let contentEle = this.$refs.content;
        return ((contentEle.scrollTop + contentEle.clientHeight) == contentEle.scrollHeight) ? true : false;
      },
      goToDetail(id) {
        this.$router.push('/detail/'+id);
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
  }
  .type-nav {
    position: sticky;
    top: -1px;
  }
</style>


