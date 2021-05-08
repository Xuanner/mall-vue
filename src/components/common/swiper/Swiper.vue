<template>
  <div class='swiper-wrap'>
      <div class='swiper-imgs'>
        <div class='swiper-imgs-item'
             v-for='(item, id) in banner' 
             :key='item.id'
             v-show='index == id'
        >
          <a>
            <img :src='item.img' />
          </a>
        </div>
      </div>
      <ul class='swiper-point'>
        <li class='point-item' 
            v-for='(item, id) in banner' 
            :key='item.id'
            :class="{'active-point': index == id}"
            @click="handlePoint(id)"
        ></li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'Swiper',
    data() {
      return {
        index: 0
      }
    },
    props: {
      banner: Array
    },
    methods: {
      handlePoint(id) {
        this.index = id;
      }
    }
  }
</script>

<style scoped>
  .swiper-wrap {
    position: relative;
  }
  .swiper-imgs {
    display: flex;
    overflow: hidden;
  }
  .swiper-point {
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


