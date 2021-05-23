<template>
  <div>
    <header-bar>
      <template v-slot:center>
        <div>购物车({{cartCount}})</div>
      </template>
    </header-bar>
    <div class='cart-content' ref="content">
      <cart-list :cartList = '$store.state.cartList' @changeChecked='changeChecked'></cart-list>
    </div>
    <bottom-bar class='bottom-bar-wrap'></bottom-bar>
  </div>
</template>

<script>
  import HeaderBar from 'components/common/headerBar/HeaderBar'
  import CartList from './childComps/CartList'
  import BottomBar from './childComps/BottomBar'
  import {CHANGE_CHECKED} from '@/store/mutationType'
  import {mapGetters} from 'vuex'

  export default {
    name: 'Cart',
    components: {
      HeaderBar,
      CartList,
      BottomBar
    },
    computed: {
      ...mapGetters(['cartCount'])
    },
    methods: {
      changeChecked(id) {
        this.$store.dispatch(CHANGE_CHECKED, id);
      }
    }
  }
</script>

<style scoped>
  .cart-content{
    position: absolute;
    top: 44px;
    bottom: 95px;
    overflow: scroll;
  }
  .bottom-bar-wrap {
    position: absolute;
    bottom: 55px;
    height:40px;
    line-height: 40px;
    width: 100%;
    background: #ddd;
  }
</style>


