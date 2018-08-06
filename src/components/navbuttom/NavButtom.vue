<template>
  <div class="footer">
    <div class="item item2" :class="{icon1: footerIndex !==0,icon11: footerIndex === 0}" @click="tohome">闲鱼</div>
    <div class="item item2" :class="{icon22: footerIndex === 1, icon2: footerIndex !== 1}" @click="toyutang">鱼塘</div>
    <div class="item item1">
      <div class="outbox">
        <span class="open" @click="open"></span>
      </div>
      <p class="commit">发布</p>
    </div>
    <div class="login" v-show="login">
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
        <div class="type">
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
      <div class="close">
        <span class="close"></span>
      </div>
    </div>
    <div class="item item2" :class="{icon44: footerIndex === 3, icon4: footerIndex !== 3}" @click="tomessage">消息</div>
    <div class="item item2" :class="{icon55: footerIndex === 4, icon5: footerIndex !== 4}" @click="tomy">我的</div>
  </div>
</template>

<script>
import store from '../../store/index.js'
export default {
  data() {
    return {
      footerIndex: 0
    }
  },
  mounted() {
    this.footerIndex = this.$store.state.curIndex
  },
  methods: {
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
      this.$store.dispatch('setCurIndex', 3)
      this.$router.push({
        path: '/message'
      })
    },
    tomy() {
      this.$store.dispatch('setCurIndex', 4)
      this.$router.push({
        path: '/my'
      })
    },
    open() {

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
      padding-bottom 0.8em
      box-sizing border-box
      position relative
      display flex
      flex-direction column
      justify-content center
</style>
