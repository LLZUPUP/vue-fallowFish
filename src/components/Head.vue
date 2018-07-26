<template>
  <div class="header">
    <div class="scanner">
      <img src="../assets/images/二维码.png" alt="">
      <input type="file" name="file" capture="camera"/>
    </div>
    <router-link to="/search" class="search">
      <input type="search" placeholder="搜索宝贝/鱼塘/用户">
    </router-link>
    <div class="category" @click="category">
      <img src="../assets/images/分类.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
  .header
    height 1.5rem
    width 10rem
    background-color #ffda44
    position fixed
    top 0
    display flex
    align-items center
    .scanner
      width 0.6rem
      height 0.6rem
      margin-left 0.3rem
      margin-right 0.3rem
      box-sizing border-box
      display flex
      align-items center
      img 
        width 0.6rem
        height 0.6rem
      input 
        display none
    .search
      box-sizing border-box
      height 1rem
      z-index 10
      flex 1
      display flex
      align-items center
      border 1px solid green
      background url('../assets/images/search.png') no-repeat .26rem 50%
      background-size .6rem .6rem
      // overflow hidden
      input 
        z-index 99
        padding-left 1rem
        outline none 
        height 100%
        background-color #fff
</style>
