<template>
  <div class='bottom'>
    <div class='left' @click='allSelect'>
      <check-box class='bottom-check' :isActive='isAllSelect'></check-box>
      <div>全选</div>
    </div>
    <div class='center'>
      合计: ¥{{totalPrice}}
    </div>
    <div class='right'>
      去计算({{selectCount}})
    </div>
    
  </div>
</template>

<script>
  import CheckBox from 'components/content/checkBox/CheckBox'
  import {mapGetters} from 'vuex'
  import {ALL_CKECKED} from '@/store/mutationType'

  export default {
    name: 'BottomBar',
    components: {
      CheckBox
    },
    computed: {
      ...mapGetters(['isAllSelect','totalPrice','selectCount'])
    },
    methods: {
      allSelect() {
       this.$store.dispatch(ALL_CKECKED);
      }
    }
  }
</script>

<style scoped>
  .bottom {
    display: flex;
    flex-direction: row;
  }
  .left {
    width: 80px;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }
  .center {
    flex: 1;
  }
  .right {
    width: auto;
    background: red;
    padding: 0 30px;
  }
  .bottom-check {
    display: flex;
    align-items: center;
  }
</style>


