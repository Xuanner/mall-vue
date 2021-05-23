<template>
  <div class='cart-list-wrap'>
    <cart-item v-for='(item, index) in cartList' 
               :key='index' 
               :cartItem='item'
               @click.native='changeChecked(item.id)'
    ></cart-item>
  </div>
</template>

<script>
  import CartItem from './CartItem'

  export default {
    name: 'CartList',
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      CartItem
    },
    methods: {
      changeChecked(id) {
        this.$emit('changeChecked', id);
      }
    }
  }
</script>

<style scoped>
</style>


