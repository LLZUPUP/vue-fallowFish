<template>
  <div class="header">
    <div class="scanner">
      <img src="../../assets/images/二维码.png" alt="">
      <input type="file" name="file" capture="camera"/>
    </div>
    <router-link to="/search" class="search">
      <input type="search" placeholder="搜索宝贝/鱼塘/用户">
    </router-link>
    <div class="category" @click="category">
      <img src="../../assets/images/分类.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    category () {
      this.$router.push({
        path: '/category'
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    z-index 200
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
      flex 1
      display flex
      align-items center
      background-color #fff
      border-radius .11rem
      input 
        background url('../../assets/images/search.png') no-repeat .26rem 50%
        background-size .6rem .6rem
        border-radius .11rem
        padding-left 1rem
        outline none 
        height 1rem
        border none
    .category
      width 0.6rem
      height 0.6rem
      margin-left 0.3rem
      margin-right 0.3rem
      display flex
      align-items center
      img 
        width 0.6rem
        height 0.6rem
</style>
