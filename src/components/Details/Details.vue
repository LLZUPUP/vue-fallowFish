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
          <img :src="news.avatar" alt="" class="avatar">
        </div>
        <div class="info">
          <div class="username">{{news.name}}</div>
          <div class="ta">{{news.time}}{{news.add}}</div>
        </div>
        <div class="pricebox">
          <div class="price">{{news.price}}</div>
        </div>
      </div>
      <div class="descbox">
        <p class="desc">{{news.desc}}</p>
      </div>
      <div class="img">
        <img :src="news.img" alt="">
      </div>
    </div>
    <div class="messagebox">
      <p class="msg border-1px">留言</p>
      <div class="comment">
        <img class="bg" src="../../assets/images/yu.png" alt="">
        <p class="nomsg">还没有人留言，还不快来抢沙发</p>
      </div>
    </div>
    <div class="bottom">
      <div class="message">
        <img src="../../assets/images/留言.png" alt="">
        <span class="leabmsg">留言</span>
      </div>
      <div class="givestar" @click="star">
        <img src="../../assets/images/赞.png" alt="" v-if="show">
        <img src="../../assets/images/赞1.png" alt="" v-else>
        <span class="star">点赞</span>
      </div>
      <div class="buy" @click="buy">我想要</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
    star() {
      this.show = !this.show
    },
    buy() {
      if(this.login) {
        this.$router.push({
          path: '/chat'
        })
      }else {
        this.$router.push({
          path: '/login'
        })
      }
    }
  },
  computed: {
    ...mapGetters([
      'news',
      'login'
    ])
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
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
    width 100%
    min-height 100%
    padding .5rem .4rem
    box-sizing border-box
    background-color #fff
    .top
      width 100%
      height 2rem
      display flex
      align-items center
      .avatarbox
        width 1.6rem
        height 1.6rem
        .avatar
          width 1.6rem
          height 1.6rem
          border-radius 50%
      .info
        margin-left 0.3rem
        flex 1
        display flex
        flex-direction column
        .username
          color #000000
          font-size 0.4rem
          font-weight 600
          margin-bottom 0.1rem
        .ta
          color #777777
          font-size 0.3rem
      .pricebox
        .price
          color red
          font-size 0.4rem
          font-weight 400
    .descbox
      width 100%
      .desc
        font-size 0.4rem
        color #000000
        line-height 0.5rem
        font-weight 500
    .img
      width 100%
      margin-top 0.4rem
      img
        width 100%
  .messagebox
    margin-top 0.3rem
    background-color #fff
    padding .3rem .4rem
    margin-bottom 1.4rem
    .msg
      font-size 0.4rem
      color #000000
      font-weight 600
      height 1.3rem
      line-height 1.3rem
      border-1px(#f8f8f8)
      &:before
        content ''
        display inline-block
        width 0.13rem
        height 0.4rem
        background-color #ffda44
        margin-right 0.13rem
        vertical-align baseline
    .comment
      width 100%
      display flex
      flex-direction column
      align-items center
      padding .5rem 0
      .nomsg
        margin-top 0.2rem
        font-size 0.4rem
        color #888888
  .bottom
    position fixed
    bottom 0
    left 0
    right 0
    height 1.4rem
    display flex
    align-items center
    background-color #f8f8f8
    z-index 100
    box-sizing border-box
    .message,.givestar,.buy
      display flex
      flex-direction column
    .message
      flex 1
      align-items center
      font-size 0.3rem
      font-weight 500
      img 
        width 0.8rem
        height 0.8rem
    .givestar
      flex 2
      font-size 0.3rem
      font-weight 500
      img 
        width 0.8rem
        height 0.8rem
    .buy
      flex 1
      background-color #d81e06
      height 1.4rem
      line-height 1.4rem
      text-align center
      color #ffffff
      font-size 0.4rem
      
</style>
