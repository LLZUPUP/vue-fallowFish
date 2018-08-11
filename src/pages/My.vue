<template>
  <div class="container">
    <div class="top" v-if="login">
      <div class="loginhead">
        <div class="border border-1px">
          <div class="flexprimary">
            <div class="name">{{username}}</div>
            <div class="somedesc">用闲鱼来挣钱~</div>
          </div>
          <div class="useravatar">
            <img :src="url" alt="" class="avatar">
          </div>
        </div>
        <div class="count">
          <div class="numbox">
            <span class="num">{{starnum}}</span>
            <span class="numname">被赞数</span>
          </div>
          <div class="numbox">
            <span class="num">{{focusnum}}</span>
            <span class="numname">关注数</span>
          </div>
          <div class="numbox">
            <span class="num">{{fannum}}</span>
            <span class="numname">粉丝数</span>
          </div>
        </div>
      </div>
      <div class="open">
        <div class="flexprimary">
          <p class="openvip">开通属于你的闲鱼!</p>
          <p class="tipinfo">就可以看到sei关注你啦</p>
        </div>
        <button class="on">开通</button>
      </div>
    </div>
    <div class="head" v-else>
      <div class="welcome">欢迎来到闲鱼</div>
      <button class="login" @click="tologin">马上登录</button>
      <div class="animate"></div>
    </div>
    <div class="list">
      <ul class="itemlist">
        <li class="item item1" @click="fabu">我发布的<span class="number" v-if="login">{{fabunum}}</span></li>
        <li class="item item2">我卖出的<span class="number" v-if="login">{{sellnum}}</span></li>
        <li class="item item3" @click="buy">我买到的<span class="number" v-if="login">{{buynum}}</span></li>
        <li class="item item4">我赞过的<span class="number" v-if="login">{{likenum}}</span></li>
        <li class="item item5">我的拍卖</li>
        <li class="item item6">我的鱼贝<span class="number" v-if="login">{{money}}</span></li>
      </ul>
    </div>
    <div class="list" v-if="login">
      <ul class="itemlist">
        <li class="item item8">我的公益</li>
        <li class="item item9">闲鱼Family</li>
        <li class="item item10">帮助与反馈</li>
      </ul>
    </div>
    <div class="list">
      <ul class="itemlist">
        <li class="item item7">设置</li>
      </ul>
    </div>
    <div class="buttonwrap">
      <button class="logout" v-if="login" @click="logout">退出登录</button>
    </div>

    <NavButtom></NavButtom>
  </div>
</template>

<script>
import NavButtom from '@/components/navbuttom/NavButtom'
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.isLogin = this.$store.state.isLogin
    let username = window.localStorage.getItem('username')
    this.$store.dispatch('setUsername', username)
    this.url = window.localStorage.getItem('useravatar')
  },
  methods: {
    tologin() {
      this.$router.push({
        path: '/login'
      })
    },
    logout() {
      window.localStorage.clear()
      this.$store.dispatch('noLogin')
      this.$router.push({
        path: '/my'
      })
    },
    fabu() {
      if(!this.isLogin) {
        this.$toast('请先登录再查看')
      }else {
        this.$router.push({
          path: '/fabu'
        })
      }
    },
    buy() {
      if(!this.isLogin) {
        this.$toast('请先登录再查看')
      }else {
        this.$router.push({
          path: '/order'
        })
      }
    }
  },
  computed: {
    ...mapGetters([
      'login',
      'username',
      'starnum',
      'focusnum',
      'fabunum',
      'fannum',
      'sellnum',
      'likenum',
      'buynum',
      'money'
    ])
  },
  components: {
    NavButtom
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl'
.container
  margin-bottom 3rem
  background-color #f3f3f3
  .top
    width 100%
    .loginhead
      width 100%
      height 5rem
      background-color #fff
      padding 0 .4rem
      box-sizing border-box
      .border
        border-1px(#f8f8d8)
        height 3.3rem
        display flex
        align-items center
        .flexprimary
          padding-left 1rem
          flex 1
          .name
            font-size 0.45rem
            font-weight 600
            margin-bottom 0.3rem
          .somedesc
            font-size 0.33rem
            color #888888
        .useravatar
          width 1.6rem
          height 1.6rem
          background-color #f9f9f9
          border-radius 50%
          margin-right 0.5rem
          display flex
          align-items center
          justify-content center
          img 
            width 100%
            height 100%
            border-radius 50%
      .count
        display flex
        align-items center
        .numbox
          flex 1
          display flex
          flex-direction column
          align-items center
          justify-content center
          height 1.3333rem
          .num
            color #000000
            font-weight 600
            font-size 0.3rem
            margin-bottom 0.06rem
          .numname
            color #888888
            font-size 0.3rem
    .open
      width 100%
      height 2rem
      margin-bottom 0.3rem
      margin-top 0.3rem
      padding 0 .4rem
      box-sizing border-box
      background-color #ffda44
      display flex
      align-items center
      .flexprimary
        flex 1
        .openvip
          font-size 0.4rem
          font-weight 600
          margin-bottom 0.3rem
        .tipinfo
          font-size 0.3rem
          font-weight 400
      .on
        border none 
        outline none 
        width 2.3rem
        height 0.93rem
        box-sizing border-box
        border 1px solid #333
        background-color transparent
  .head
    width 100%
    height 3.3rem
    background-color #fff
    position relative
    .welcome
      margin-left 0.4rem
      margin-top 0.6rem
      font-size 0.55rem
      font-weight 600
    .login
      margin-top 0.4rem
      margin-left 0.4rem
      width 2.5rem
      height 1.2rem
      background-color #ffda44
      outline none 
      border none
    .animate
      position absolute
      bottom 0
      right 1rem
      width 5.2rem
      height 100%
      background #fff url('../assets/images/fish.png') no-repeat
      background-position 100% 100%
  .list
    margin-top 0.3rem
    width 100%
    height auto 
    background-color #fff
    font-size 0.4rem
    font-weight 400
    .item
      padding .4rem 1.2rem
      border 1px solid #f8f8f8
      box-sizing border-box
      position relative
      background-repeat no-repeat
      background-size .6rem .6rem
      background-position .3rem .3rem
      tri-2px(#999)
      &.item1
        background-image: url('../assets/images/book.png')
      &.item2
        background-image: url('../assets/images/发送.png')
      &.item3
        background-image: url('../assets/images/我收到的.png')
      &.item4
        background-image: url('../assets/images/收到评价.png')
      &.item5
        background-image: url('../assets/images/拍卖.png')
      &.item6
        background-image: url('../assets/images/撒鱼币.png')
      &.item7
        background-image: url('../assets/images/设置.png')
      &.item8
        background-image: url('../assets/images/爱心_.png')
      &.item9
        background-image: url('../assets/images/闲鱼.png')
      &.item10
        background-image: url('../assets/images/帮助.png')
      .number
        position absolute
        right 1rem
        color #888888
  .buttonwrap
    width 100%
    .logout
      display block
      width 95%
      font-size 0.4rem
      margin 0.3rem auto 
      height 1.3rem
      outline none 
      border none 
      background-color red
      color #ffffff


</style>
