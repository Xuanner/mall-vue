<template>
  <div class='swiper-wrap' :style="widthAndHeightStyle">
    <div class='slide' :style="slideClass">
      <div class='slide-item'
           v-for='(item) in banner' 
           :key='item.id'>
        <a>
          <img :src='item.img' :style="{width: swiperWidth+'px'}"/>
        </a>
      </div>
    </div>
    <ul class='points'>
      <li class='point-item' 
          v-for='(item, id) in banner' 
          :key='item.id'
          :class="{'active-point': curtIndex == id}"
          @click="handlePoint(id)">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    props: {
      banner: Array,
      intervalTime: {
        type: Number,
        default: 3000
      },
      swiperWidth: {
        type: Number,
        default: document.documentElement.offsetWidth
      },
      swiperHeight: Number
    },
    data() {
      return {
        curtIndex: 0,
        playTimer: {}, //间隔定时器
      }
    },
    computed: {
      slideClass() {
        return {
          transition: 'transform 300ms',
          transform: `translate3d(${-this.swiperWidth * this.curtIndex}px, 0, 0)`,
        };
      },
      widthAndHeightStyle() {
        return {
          width: `${this.swiperWidth}px`,
          height: `${this.swiperHeight}px`
        }
      }
    },
    mounted() {
      // 开启定时器, 自动滑动图片
      this.startTimer();
    },
    methods: {
      handlePoint(id) {
        this.curtIndex = id;
        this.stopTimer();
        this.startTimer();
      },
      startTimer() {
        this.playTimer = setInterval(() => {
          if(this.curtIndex == (this.banner.length-1)) {
            this.curtIndex = 0;
          }else {
            this.curtIndex++;
          }
        }, this.intervalTime)
      },
      stopTimer() {
        clearInterval(this.playTimer);
      },
    }
  }
</script>

<style scoped>
  .swiper-wrap {
    position: relative;
    overflow: hidden;
  }
  .slide {
    display: flex;
  }
  .points {
    display: flex;
    position: absolute;
    right: 20px;
    bottom: 10px;
    transition: tansform 2s;
  }
  .point-item {
    width: 10px;
    height: 10px;
    background: #f5f5f5;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
  }
  .active-point {
    background: #ff7f50;
  }
</style>


