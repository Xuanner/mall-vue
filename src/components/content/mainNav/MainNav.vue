<template>
  <common-nav>
    <common-nav-item path='/home'>
      <template v-slot:item-icon>
        <div class="iconfont">&#xe674;</div>
      </template>
      <template v-slot:item-text>
        <div>home</div>
      </template>
    </common-nav-item>
    <common-nav-item path='/type'>
      <template v-slot:item-icon>
        <div class="iconfont">&#xe678;</div>
      </template>
      <template v-slot:item-text>
        <div>Type</div>
      </template>
    </common-nav-item>
    <common-nav-item path='/cart'>
      <template v-slot:item-icon>
        <div class="iconfont">&#xe679;</div>
      </template>
      <template v-slot:item-text>
        <div>Cart</div>
      </template>
    </common-nav-item>
    <common-nav-item path='/user'>
      <template v-slot:item-icon>
        <div class="iconfont">&#xe682;</div>
      </template>
      <template v-slot:item-text>
        <div>My</div>
      </template>
    </common-nav-item>
  </common-nav>
</template>

<script>
  import CommonNav from 'components/common/commonNav/CommonNav'
  import CommonNavItem from 'components/common/commonNav/CommonNavItem'

  export default {
    name: 'MainNav',
    components: {
      CommonNav,
      CommonNavItem
    }
  }
</script>

<style scoped>

</style>


