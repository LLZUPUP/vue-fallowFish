<template>
  <div class="container">
    <div class="wrapper border-1px" @click="toast">
      <div class="img">
        <img src="../assets/images/通知.png" alt="" class="avatar">
      </div>
      <div class="text">
        <p class="name">通知</p>
        <div class="desc">
          <p class="detail">闲鱼奇葩说，U CAN U BIBI</p>
          <span class="time">| 18小时前</span>
        </div>
      </div>
    </div>
    
    <NavButtom></NavButtom>
  </div>
</template>

<script>
import NavButtom from '@/components/navbuttom/NavButtom'
export default {
  components: {
    NavButtom
  },
  methods: {
    toast() {
      this.$toast('此功能还在完善')
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl'
.container
  width 10rem
  background-color #fff
  .wrapper
    width 100%
    height 2.5rem
    display flex
    align-items center
    color #000000
    padding 0 .4rem
    border-1px(#f7f7f7)
    .img
      width 2rem
      height 2rem
      background-color pink
      border-radius 50%
      display flex
      justify-content center
      align-items center
      img 
        width 1.4rem
    .text
      margin-left .3rem
      .name
        font-size 0.4rem
        font-weight 600
        margin-bottom 0.3rem
      .desc
        display flex
        font-size 0.3rem
        color #888888
        .time
          margin-left 0.3rem

</style>
