<template>

  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">{{news.name}}</div>
    </div>
    <div class="details">
      <div class="info">
        <div class="useravatar">
          <img :src="news.img" alt="">
        </div>
        <div class="desc">
          <p class="price">{{news.price}}</p>
          <p class="yunfei">含运费{{news.freight}}</p>
          <p class="chat">交易前聊一聊</p>
        </div>
        <div class="buy" @click="buy">立即购买</div>
      </div>
    </div>
    <Chatlist></Chatlist>
  </div>
</template>

<script>
import Chatlist from './Chatlist'
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'news'
    ])
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
    buy() {
      this.$router.push('/pay')
    }
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0
  },
  components: {
    Chatlist
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 10rem
  background-color #f7f7f7
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
  .details
    position absolute
    top 1.6rem
    left 0
    right 0
    .info
      background-color #fff
      display flex
      width 100%
      height 2.3rem
      align-items center
      padding 0 .3rem
      box-sizing border-box
      border-bottom .1rem solid #f7f7f7
      .useravatar
        width 1.3rem
        height 1.3rem
        img 
          width 1.3rem
          height 1.3rem
      .desc
        flex 1
        display flex
        margin-left 0.3rem
        flex-direction column
        .price
          font-size 0.4rem
          font-weight 500
          color #000000
        .yunfei,.chat
          font-size 0.35rem
          color #888888
        .yunfei
          margin-bottom 0.1rem
      .buy
        height 1.5rem
        width 2.3rem
        text-align center
        line-height 1.5rem
        background-color red
        color #ffffff
        font-size 0.4rem
</style>
