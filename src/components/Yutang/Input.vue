<template>
  <div class="inputwrap">
    <div class="goinput" @click="fail">
      <input type="text" placeholder="请输入鱼塘关键字">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fail() {
      this.$toast('这个功能小哥哥还未完成哦')
    }
  }
}
</script>


<style lang="stylus" scoped>
.inputwrap
  width 10rem
  height 1.5rem
  line-height 1.5rem
  background-color #f7f7f7
  .goinput
    width 96%
    height 100%
    margin 0 auto
    text-align center
    box-sizing border-box
    padding .3rem
    display flex
    justify-content center
    align-items center
    input 
      width 100%
      height 100%
      padding-left 40%
      outline none
      border none 
      background-color #fff
      border-radius .13rem
      box-sizing border-box
      background #fff url('../../assets/images/search.png') no-repeat
      background-size .6rem .6rem
      background-position 35% 50%



</style>
