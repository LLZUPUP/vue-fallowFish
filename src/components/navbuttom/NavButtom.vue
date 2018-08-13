<template>
  <div class="footer">
    <div class="item item2" :class="{icon11: footerIndex ===0,icon1: footerIndex !== 0}" @click="tohome">闲鱼</div>
    <div class="item item2" :class="{icon22: footerIndex === 1, icon2: footerIndex !== 1}" @click="toyutang">鱼塘</div>
    <div class="item item1">
      <div class="outbox">
        <span class="open" @click="open"></span>
      </div>
      <p class="commit">发布</p>
    </div>
    <div class="login" v-show="login" ref="login" :class="{'active':active}">
      <div class="head">
        <h2 class="guide">闲鱼赚钱指南</h2>
        <ul class="navbar">
          <li class="li">
            <p class="title">卖什么更赚</p>
            <p class="tip">教你卖什么更赚钱</p>
          </li>
          <li class="li">
            <p class="title">拍照相机</p>
            <p class="tip">看看家里的东西值多少钱</p>
          </li>
          <li class="li">
            <p class="title">淘宝一键转卖</p>
            <p class="tip">剁手多了回回血</p>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="type" @click="tosell">
          <div class="image">
            <img src="../../assets/images/收纳盒.png" alt="">
          </div>
          <p class="explain">卖闲置</p>
        </div>
        <div class="type">
          <div class="image">
            <img src="../../assets/images/房子.png" alt="">
          </div>
          <p class="explain">出租房屋</p>
        </div>
        <div class="type">
          <div class="image">
            <img src="../../assets/images/头像.png" alt="">
          </div>
          <p class="explain">发布服务</p>
        </div>
      </div>
      <div class="closebox">
        <span class="close" @click="close"></span>
      </div>
    </div>
    <div class="item item2" :class="{icon44: footerIndex === 3, icon4: footerIndex !== 3}" @click="tomessage">消息</div>
    <div class="item item2" :class="{icon55: footerIndex === 4, icon5: footerIndex !== 4}" @click="tomy">我的</div>
  </div>
</template>

<script>
import store from '../../store/index.js'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      footerIndex: 0,
      active: false
    }
  },
  computed: {
    ...mapGetters([
      'login'
    ])
  },
  mounted() {
    this.active = false
    this.$store.dispatch('hasLogin')
    this.footerIndex = this.$store.state.curIndex
  },
  methods: {
    tosell() {
      this.$refs.login.style.display = 'none'
      this.$router.push({
        path: '/sell'
      })
    },
    tohome() {
      this.$store.dispatch('setCurIndex', 0)
      this.$router.push({
        path: '/'
      })
    },
    toyutang() {
      this.$store.dispatch('setCurIndex', 1)
      this.$router.push({
        path: '/yutang'
      })
    },
    tomessage() {
      if(this.$store.state.isLogin) {
        this.$store.dispatch('setCurIndex', 3)
        this.$router.push({
          path: '/message'
        })
      }else {
        this.$router.push({
          path: '/login'
        })
      }
      
    },
    tomy() {
      this.$store.dispatch('setCurIndex', 4)
      this.$router.push({
        path: '/my'
      })
    },
    open() {
      if(this.$store.state.isLogin) {
        const login = this.$refs.login
        login.style.display = 'block'
        this.active = false
      }else {
        this.$router.push({
          path: '/login'
        })
      }
    },
    close() {
      this.active = true
      const login = this.$refs.login
      setTimeout(()=> {
        login.style.display = 'none'
      },500)
    }
  },
 
}
</script>

<style lang="stylus" scoped>
.footer
  z-index 500
  width 10rem
  display flex
  height 1.6rem
  position fixed
  bottom 0
  left 0
  border-top 1px solid #ccc
  background-color #fff
  .item
    width 100%
    height 100%
    color #888888
    font-size 0.3rem
    text-align center
    &.icon1
      background: url('../../assets/images/home.png') no-repeat center 25%;
      background-size: .8rem;
    &.icon11
      background: url('../../assets/images/home1.png') no-repeat center 25%;
      background-size: .8rem;
    &.icon2
      background: url('../../assets/images/yutang.png') no-repeat center 25%;
      background-size: .8rem;
    &.icon22
      background: url('../../assets/images/yutang1.png') no-repeat center 25%;
      background-size: .8rem;
    &.icon4
      background: url('../../assets/images/message.png') no-repeat center 25%;
      background-size: .8rem;
    &.icon44
      background: url('../../assets/images/meaasge1.png') no-repeat center 25%;
      background-size: .8rem;
    &.icon5
      background: url('../../assets/images/my.png') no-repeat center 25%;
      background-size: .8rem;
    &.icon55
      background: url('../../assets/images/my1.png') no-repeat center 25%;
      background-size: .8rem;
    &.item2
      line-height 2.5rem
    &.item1
      padding-bottom 0.8rem
      box-sizing border-box
      position relative
      display flex
      flex-direction column
      justify-content center
      .outbox
        width 1.3rem
        height 1.3rem
        border-radius 50%
        background-color #fff
        margin 0.15rem auto
        display block
        position relative
        z-index 500
        .open
          width 1.2rem
          height 1.2rem
          display block
          border-radius 50%
          margin 0.1rem auto 
          background: #ffda44 url('../../assets/images/加.png') no-repeat;
          background-size .8rem .8rem
          background-position 50% 50%
  .login
    display none
    position fixed
    z-index 600
    top 0
    left 0
    right 0
    bottom 0
    background-color #fff
    animation enter .5s
    overflow hidden
    &.active
      animation out 1s
    @keyframes enter 
      0% 
        transform scale(0)
        opacity 0
      100%
        transform scale(1)
        opacity 1
    @keyframes out 
      0%
        transform scale(1)
      100%
        transform scale(0)
        opacity 0
    .head
      width 100%
      .guide
        margin-top 1.5rem
        font-size 0.5rem
        width 100%
        color #000000
        padding-left 0.4rem
        box-sizing border-box
      .navbar
        margin-top 1rem
        width 100%
        padding-left 0.3rem
        display flex
        justify-content space-around
        list-style none
        .li
          margin-right 0.4rem
          .title
            font-size 0.4rem
            font-weight 500
            color #000
            margin-bottom 0.2rem
            &:after
              content ''
              display inline-block
              height 0.16rem
              width 0.16rem
              border-width: 2px 2px 0 0;
              border-color: #ffda44;
              border-style: solid;
              transform: rotate(45deg);
              position: relative;
              margin-left: .066rem;
          .tip
            font-size 0.3rem
            color #888888
    .content
      width 100%
      display flex
      margin-top 5rem
      transition all .7s ease-in
      .type
        flex 1
        display flex
        flex-direction column
        align-items center
        .image
          width 2rem
          height 2rem
          background-color #ffda44
          border-radius 50%
          display flex
          justify-content center
          align-items center
          img 
            width 1.2rem
            height 1.2rem
            vertical-align middle   
        .explain
          margin-top 0.3rem
          color #333333
          font-size 0.35rem
    .closebox
      width 3rem
      height 3rem
      position fixed
      bottom 0
      left 50%
      margin-left -1.5rem
      display flex
      justify-content center
      align-items center
      .close
        width 1.2rem
        height 1.2em
        background url('../../assets/images/X.png') no-repeat
        background-size 1.3rem 1.3rem

    



</style>
