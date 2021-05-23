<template>
  <div class='cart-item-wrap'>
    <div class='check-box'><check-box :isActive='cartItem.checked'></check-box></div>
    <div class='img-wrap'><img :src='cartItem.imgUrl.img' /></div>
    <div class='info'>
      <div class='title'>{{cartItem.title}}</div>
      <div class='content'>
        <div>¥{{cartItem.price}}</div>
        <div>x{{cartItem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckBox from 'components/content/checkBox/CheckBox'

  export default {
    name: 'CartItem',
    components: {
      CheckBox
    },
    props: {
      cartItem :{
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .cart-item-wrap {
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    padding: 5px;
    width: auto;
    height: 130px;
  }
  .check-box {
    width: 30px;
    display: flex;
    align-items: center;
  }
  .img-wrap {
    width: 130px;
    height: 100%;
  }
  .img-wrap img {
    height: 100%;
  }
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .title {
    margin: 5px 0x;
    flex: 1;
  }
  .content {
    flex: 1;
    display: flex;
    align-items: flex-end;
    margin: 10px;
    justify-content: space-between;
  }
</style>


