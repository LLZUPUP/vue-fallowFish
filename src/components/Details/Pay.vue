<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">购买宝贝</div>
    </div>
    <div class="goodswrap">
      <img :src="news.img" alt="" class="goodimg">
      <div class="goodinfo">
        <p class="detail">[转卖]{{news.desc}}</p>
        <p class="price">{{news.price}}</p>
      </div>
    </div>
    <div class="addrbox">
      <div class="addr border-1px" @click="setaddr">
        <label for="" class="label">收货地址</label>
        <div class="address" v-if="address.name !== undefined">
          <p class="user">{{address.name}}{{address.tel}}</p>
          <p class="addrdetail">{{address.addr}}</p>
        </div>
        <div class="address" v-else>
          <p class="addrdetail">请选择地址</p>
        </div>
      </div>
      <div class="addr border-1px">
        <label for="" class="label">运费</label>
        <p class="freight">¥{{news.freight}}</p>
      </div>
    </div>
    <div class="fixedbottom">
      <div class="payment">
        <span class="price">实付款:&nbsp;&nbsp;&nbsp;{{allPrice}}</span>
      </div>
      <div class="buy" @click="pay">确定</div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      all: 0
    }
  },
  computed: {
    ...mapGetters([
      'news',
      'address',
      'goods'
    ]),
    allPrice() {
      let jiage = this.news.price.split("");
      let fenge = jiage.splice(0,1);
      let price = jiage.join("")
      return this.all += parseFloat(price)+parseFloat(this.news.freight)
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
    setaddr() {
      this.$router.push({
        path: '/addr'
      })
    },
    pay() {
      if(this.address.name === undefined) {
        this.$toast('请选择收货地址')
        return
      }
      if(this.goods.length === 0) {
        this.setGoods(0)
      }else {
        for(let i = 0;i<this.goods.length;i++) {
          let goods = this.$store.state.goods
          let ID = goods[i].id
          if(this.news.id !== ID) {
            this.setGoods(i+1)
          }else {
            MessageBox.alert('你已经买了这个宝贝了哟').then(action => {
              this.$router.push('/')
            })
          }
        }
      }

    },
    setGoods(i) {
      MessageBox.alert('购买成功，查看订单').then(action => {
        let obj = {}
        obj.count = i
        obj.img = this.news.img
        obj.desc = this.news.desc
        obj.price = this.all
        obj.id = this.news.id
        obj.name = this.news.name
        obj.avatar = this.news.avatar
        obj.receive = true
        obj.del = false
        this.$store.dispatch('setBuynum')
        this.$store.dispatch('setGoods', obj)
        this.$router.push({
          path: '/my'
        })
        this.$store.dispatch('setCurIndex', 4)

      })
    }
  },
  mounted() {
    
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
  .goodswrap
    width 100%
    height 3.3rem
    display flex
    background-color #fff
    .goodimg
      width 3.3rem
      height 3.3rem
    .goodinfo
      padding .3rem .4rem
      .detail
        font-size 0.4rem
        color #000000
        margin-bottom 0.2rem
        line-height 1.6
        font-weight 500
      .price
        font-size 0.4rem
        font-weight 600
        color red  
  .addrbox
    width 100%
    margin-top 0.3rem
    background-color #fff
    .addr
      width 100%
      height 2rem
      display flex
      align-items center
      padding 0 .4rem
      box-sizing border-box
      border-1px(#f7f7f7)
      .freight
        width 2.1rem
        color red
        font-size 0.4rem
        position relative
        text-align right
      .label
        flex 1
        font-size 0.5rem
        color #666666
      .address
        width 6.3rem
        display flex
        align-items center
        flex-direction column
        font-size 0.4rem
        color #888888
        line-height 1.2
        .addrdetail
          &:after
            content ''
            display inline-block
            height 8px
            width 8px
            border-width 2px 2px 0 0 
            border-color #999999
            border-style solid 
            transform rotate(45deg)
            position absolute
            right 0.3rem
  .fixedbottom
    position fixed
    bottom 0
    left 0
    right 0
    height 1.3333rem
    display flex
    align-items center
    background-color #fff
    padding-left 0.4rem
    box-sizing border-box
    font-size 0.4rem
    .payment
      flex 1
      color #000000
      .price
        font-weight 500
    .buy
      width 2.1rem
      height 1.3333rem
      background-color red
      line-height 1.3333rem
      color #ffffff
      text-align center
</style>
