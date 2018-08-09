<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">宝贝详情</div>
    </div>
    <div class="details">
      <div class="top">
        <div class="avatarbox">
          <img src="" alt="" class="avatar">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    }
  },
  computed: {
    ...mapGetters([
      'news'
    ])
  },
  created() {
    console.log(this.news)
    
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 10rem
  .head
    position relative
    background-color #f3f3f3
    width 100%
    height 1.6rem
    display flex
    justify-content center
    align-items center
    .back
      position absolute
      left .2rem
      top .4rem
      width 1rem
      height 1rem
      img 
        width .8rem
        height .8rem
    .title
      font-size .4rem
      font-weight 700
</style>
