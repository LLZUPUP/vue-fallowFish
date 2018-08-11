<template>

  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">我买到的</div>
    </div>
    <div class="goodsbox" v-if="show" v-for="(item,index) in goods" :key="index">
      <div class="infobox"> 
        <img :src="item.img" alt="">
        <div class="info">
          <p class="desc">{{item.desc}}</p>
          <p class="price">¥{{item.price}}</p>
        </div>
      </div>
      <div class="operate">
        <div class="connect" @click="connect">联系卖家</div>
        <div class="assure" v-if="item.receive" @click="receive(index)">确认收货</div>
        <div class="del" v-if="item.del" @click="del(index)">删除订单</div>
      </div>
    </div>
    <div class="nogoodsbox" v-if="hide">
      <div class="nothing">
        <img src="../../assets/images/钓鱼.png" alt="">
        <p class="warn">亲，这里是空的哦~</p>
      </div>
    </div>
    
      
  </div>
</template>

<script>
import { Toast,MessageBox } from 'mint-ui'
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      show: true,
      hide: false
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
    connect() {
      this.$router.push({
        path: '/chat'
      })
    },
    receive(index) {
      let obj = {}
      obj.receive = false
      obj.index = index 
      let obj1 = {}
      obj1.index = index 
      obj1.del = true
      this.$store.dispatch('setReceive', obj)
      this.$store.dispatch('setDel', obj1)
      this.$toast('收货成功')
    },
    del(index) {
      MessageBox.confirm('确定删除订单吗').then((action)=> {
        this.$store.dispatch('cutGoods', index)
        this.noGoods()
      })
    },
    noGoods() {
      if(Array.from(this.goods).length===0){
				this.show = false
				this.hide = true
			}else{
				this.show = true
				this.hide = false
			}
    }
  },
  computed: {
    ...mapGetters([
      'goods'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 10rem
  height 100vh
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
  .goodsbox
    width 95%
    display flex
    flex-direction column
    background-color #fff
    margin 0 auto
    margin-top 0.3rem
    .infobox
      display flex
      align-items center
      padding 0 .3rem
      box-sizing border-box
      img 
        width 2rem
        height 2rem
      .info
        display flex
        flex-direction column
        margin-left 0.3rem
        width 6.2rem
        line-height 3
        .desc
          font-size 0.4rem
          color #000000
          width 6rem
          white-space nowrap
          overflow hidden
          text-overflow ellipsis 
        .price
          color red
          font-size 0.4rem
    .operate
      display flex
      height 1.3rem
      align-items center
      padding-left 0.3rem
      padding-right 0.3rem
      box-sizing border-box
      .connect
        font-size 0.3rem
        font-weight 400
        height 0.8rem
        line-height 0.8rem
        background: url('../../assets/images/留言.png') no-repeat;
        background-size .63rem .63rem
        padding-left 0.63rem
        box-sizing border-box
        flex 1
      .assure,.del
        font-size 0.3rem
        width 2.5rem
        height 1rem
        text-align center
        line-height 1rem
        font-weight 500
      .assure
        border 1px solid green
        border-radius .63rem
        color green
      .del
        border 1px solid red
        border-radius .63rem
        color red
      
  .nogoodsbox
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    .nothing
      width 6.3rem
      height 6.3rem
      display flex
      flex-direction column
      align-items center
      img 
        width 1.6rem
        height 1.6rem
      .warn
        margin .2rem 0
        font-size 0.4rem
        color #888888

</style>
