<template>
  <div id='detail' class='detail-wrap'>
    <header-bar>
      <template v-slot:center>
        <div class='header-type'>
          <div v-for='(item, index) in type' :key='index' :class='{active: curtIndex == index}'  @click='handleClick(index)'>{{item}}</div>
        </div>
      </template>
    </header-bar>
    <div class='detail-content' @scroll='handleScroll' ref='content'>
      <swiper :banner='product.images' :swiper-height="swiperHeight"></swiper>
      <div class='info'>
        <div>{{product.title}}</div>
        <div>{{product.price}}</div>
        <div v-for='(item, index) in product.images' :key='index'>
          <img :src='item.img' @load='imgLoad'/>
        </div>
      </div>
      <div class='params' ref='params'>
        <div class='params-item' v-for='(item, index) in params' :key='index'>
          <div>{{item.key}}</div>
          <div>{{item.value}}</div>
        </div>
      </div>
      <div class='comment' ref='comment'>
        <div class='comment-item' v-for='(item, index) in comments' :key='index'>
          <div>{{item.date}}</div>
          <div>{{item.content}}</div>
        </div>
      </div>
      <div class='recommend' ref='recommend'>
        <goods-list :goodsList="recommends"></goods-list>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from 'components/common/headerBar/HeaderBar'
  import Swiper from 'components/common/swiper/Swiper'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import { getDetails } from '@/network/detail'

  export default {
    name: 'Detail',
    data(){
      return {
        type: ['商品','参数','评论','推荐'],
        swiperHeight: 200,
        product: {},
        params: [],
        comments: [],
        recommends: [],
        curtIndex: 0,
        positionY: []
      }
    },
    components: {
      HeaderBar,
      Swiper,
      GoodsList
    },
    created() {
      this.getDetails(this.$route.params.id);
    },
    methods: {
      getDetails(id) {
        getDetails(id).then(res => {
          this.product = res.data.product;
          this.params = res.data.params;
          this.comments = res.data.comments;
          this.recommends = res.data.recommends;
        })
      },
      handleScroll() {
        for(let i=0; i < this.positionY.length; i++) {
          console.log(this.$refs.content.scrollTop)
          if((i<this.positionY.length-1) && (this.positionY[i] < this.$refs.content.scrollTop && this.$refs.content.scrollTop < this.positionY[i+1])) {
            this.curtIndex = i;
          }
        }
        
      },
      handleClick(index) {
        this.curtIndex = index;
        this.$refs.content.scrollTo(0, this.positionY[index]);
      },
      imgLoad() {
        this.positionY = [];
        this.positionY.push(0);
        this.positionY.push(this.$refs.params.offsetTop);
        this.positionY.push(this.$refs.comment.offsetTop);
        this.positionY.push(this.$refs.recommend.offsetTop);
        this.positionY.push(Number.MAX_VALUE)
      }
    }
  }
</script>

<style scoped>
  .header-type {
    display: flex;
    justify-content: space-evenly;
  }
  .detail-content {
    position: absolute;
    top: 44px;
    bottom: 55px;
    overflow: scroll;
  }
  .params-item {
    display: flex;
    margin: 130px 5px;
    font-size: 20px;
  }
  .comment-item {
    margin: 130px 5px;
    font-size: 20px;
  };
  
</style>


