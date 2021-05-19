<template>
  <div id='detail'>
    <header-bar>
      <template v-slot:center>
        <div class='header-type'>
          <div v-for='(item, index) in type' :key='index'>{{item}}</div>
        </div>
      </template>
    </header-bar>
  </div>
</template>

<script>
  import HeaderBar from 'components/common/headerBar/HeaderBar'

  export default {
    name: 'Detail',
    data(){
      return {
        type: ['商品','参数','评论','推荐']
      }
    },
    components: {
      HeaderBar
    },
    mounted() {
      console.log(this.$route.params)
    }
  }
</script>

<style scoped>
  .header-type {
    display: flex;
    justify-content: space-evenly;
  }
</style>


