<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">我发布的</div>
    </div>
    <div class="infobox" v-if="show" v-for="(item,index) in fabuinfo" :key="index">
      <div class="username">
        <img :src="url" alt="">
        <p class="name">{{username}}</p>
        <p class="price">¥{{item.newPrice}}</p>
      </div>
      <div class="imgbox">
        <div class="img" v-for="(img, index) in item.imgUrls" :key="index">
          <img :src="img" alt="" class="image">
        </div>
      </div>
      <div class="detail">
        <p class="desc">{{item.desc}}</p>
      </div>
      <div class="bottom">
        <div class="kind">类别: {{item.kind}}</div>
        <div class="time">发布时间: {{item.time}}</div>
      </div>
      <div class="operate">
        <div class="del" v-if="item.del" @click="del(index)">删除发布</div>
      </div>
    </div>

    <div class="nothingbox" v-if="hide">
      <div class="nothing">
        <img src="../../assets/images/钓鱼.png" alt="">
        <p class="warn">还没有发布宝贝哦</p>
        <p class="fabu" @click="tofabu">发布宝贝</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {MessageBox} from 'mint-ui'
export default {
  data() {
    return {
      url: '',
      show: true,
      hide: false
    }
  },
  computed: {
    ...mapGetters([
      'fabuinfo',
      'username'
    ])
  },  
  methods: {
    goBack() {
      this.$router.back(-1)
    },
    tofabu() {
      this.$router.push({
        path: '/sell'
      })
    },
    del(index) {
      MessageBox.confirm('确定要删除你的发布吗？').then( 
				(action) => {
					this.$store.dispatch('cutFabuinfo', index)
					this.isShow()
				}
			)
    },
    isShow() {
      if(Array.from(this.fabuinfo).length===0){
        this.show = false
        this.hide = true
			}else{
        this.show = true
        this.hide = false
			}
    }
  },
  mounted() {
    this.url = window.localStorage.getItem('useravatar')
    this.isShow()
  }
  
}
</script>

<style lang="stylus" scoped>
.container
  width 10rem
  background-color #f7f7f7
  height 100vh
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
  .infobox
    width 95%
    display flex
    flex-direction column
    background-color #fff
    margin 0 auto
    margin-top 0.3rem
    .username
      display flex
      font-size 0.4rem
      height 1.6rem
      align-items center
      padding 0 .3rem
      box-sizing border-box
      border-bottom 1px solid #f6f6f6
      img
        width 1.3rem
        height 1.3rem
        border-radius 50%
      .name
        flex 1
        color #000000
        font-weight 700
        padding-left 0.3rem
        box-sizing border-box
        background-position 0 center
      .price
        color red
        font-size 0.5rem
        font-weight 500
    .imgbox
      display flex
      justify-content space-between
      flex-wrap wrap
      flex 1
      padding 0.4rem
      box-sizing border-box
      .img
        width 4rem
        height 4rem
        margin-bottom 0.4rem
        .image
          width 100%
          height 100%
    .detail
      width 100%
      margin-top 0.2rem
      padding 0 .3rem
      box-sizing border-box
      .desc
        font-size 0.4em
        color #000000
        font-weight 600
    .bottom
      display flex
      height 1.3rem
      line-height 1.3rem
      padding 0 .4rem
      box-sizing border-box
      color #17abe3
      border-bottom 1px solid #f6f6f6
      font-size 0.3rem
      font-weight 400
      .kind
        flex 1
    .operate
      width 100%
      height 1.3rem
      display flex
      align-items center
      box-sizing border-box
      position relative
      font-size 0.3rem
      font-weight 500
      .del
        width 2rem
        height 0.8rem
        text-align center
        border 1px solid red
        border-radius .4rem
        line-height 0.8rem
        color red
        position absolute
        right 0.4rem
    
  .nothingbox
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    .nothing
      width 6.6rem
      height 6.6rem
      display flex
      flex-direction column
      align-items center
      img 
        width 1.3rem
        height 1.3rem
      .warn
        margin .2rem 0
        font-size 0.3rem
        color #888888
      .fabu
        color #000000
        padding .13rem .26rem
        box-sizing border-box
        background-color #ffda44  
        font-size 0.3rem
</style>
