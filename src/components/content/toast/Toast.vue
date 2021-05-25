<template>
  <div class='toast' v-if='isShow'>{{message}}</div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message) {
        this.isShow = true;
        this.message = message;
        setTimeout(() => {
          this.message = '';
          this.isShow = false;
        }, 2000)
      }
    }
  }
</script>

<style scoped>
  .toast {
    width: 200px;
    height: 100px;
    background: #696969;
    opacity: .9;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2000;
    border-radius: 5%;
    text-align: center;
    line-height: 100px;
  }
</style>


