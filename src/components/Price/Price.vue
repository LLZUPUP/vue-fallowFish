<template>
  <div class="pricebox">
    <div class="price">
      <div class="inputprice">
        <label for="">价格</label>
        <input type="number" v-model="newPrice" placeholder="0.00" >
      </div>
      <div class="inputprice">
        <label for="">原价</label>
        <input type="number" v-model="oldPrice" placeholder="0.00">
      </div>
      <div class="inputprice">
        <label for="">运费</label>
        <input type="number" v-model="sendPrice" placeholder="0.00" >
      </div>
    </div>
    <div class="categorybox" @click="tokind">
      <span class="kind">分类</span>
      <span class="choose">{{kind}}</span>
    </div>
    <div class="bottom">
      <p class="info">把该宝贝同步到</p>
      <div class="yutang">
        <span class="big">鱼塘</span>
        <span class="little">:加入鱼塘，更多曝光</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    kind: {
      type: String
    }
  },
  data() {
    return {
      oldPrice: '',
      newPrice: '',
      sendPrice: ''
    }
  },
  methods: {
    tokind() {
      let category = document.querySelector('.category')
      console.log(category)
      category.style.display = 'block'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.pricebox 
  width 10rem
  .price
    width 100%
    height 3.3rem
    display flex
    align-items center
    justify-content flex-start
    font-size 0.4rem
    flex-wrap wrap
    flex 1
    .inputprice
      width 50%
      display flex
      align-items center
      justify-content center
      input
        outline none 
        border none
        padding-left 0.4rem
        box-sizing border-box
  .categorybox
    width 100%
    padding 0.3rem
    border-top 1px solid #f3f3f3
    box-sizing border-box
    tri-2px(#999)
    display flex
    align-items center
    font-size 0.4rem
    .kind
      color #000000
    .choose
      position absolute
      right 2rem
      color #888888
  .bottom
    width 100%
    height 3.3rem
    background-color #f3f3f3
    padding .3rem
    box-sizing border-box
    .info
      font-size 0.3rem
      color #888888
      margin-bottom 0.3rem
    .yutang
      width 6.6rem
      height 1rem
      background-color #fff
      line-height 1rem
      text-align center
      font-size 0.3rem
      font-weight 500
      .big
        color #000000
      .little
        color #888888
</style>
