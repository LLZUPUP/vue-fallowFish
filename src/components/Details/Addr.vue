<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">添加新地址</div>
      <div class="save" @click="save">保存</div>
    </div>
    <div class="addrbox">
      <div class="set border-1px">
        <label for="" class="label">收货人</label>
        <input type="text" v-model="name">
      </div>
      <div class="set border-1px">
        <label for="" class="label">联系电话</label>
        <input type="tel" v-model="tel">
      </div>
      <div class="set border-1px">
        <label for="" class="label">地址</label>
        <input type="text" v-model="addr">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      tel: '',
      addr: ''
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
    save() {
      if(this.name == '') {
        this.$toast('请填写收货人姓名！')
        return 
      }
      if(this.tel == '') {
        this.$toast('请填写电话号码!')
        return 
      }
      if(this.addr == '') {
        this.$toast('请填写收获地址')
        return 
      }
      let address = {}
      address.name = this.name
      address.tel = this.tel
      address.addr = this.addr
      this.$store.dispatch('setAddr', address)
      this.$toast('保存成功')
      this.$router.push({
        path: '/pay'
      })
    }
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
    .save
      position absolute
      right 0.3rem
      font-size 0.4rem
      font-weight 500
      color red
  .addrbox
    background-color #fff
    .set
      display flex
      height 2.5rem
      align-items center
      padding 0 .4rem
      box-sizing border-box
      border-1px(#f7f7f7)
      font-weight 500
      .label
        width 3.2rem
        font-size 0.4rem
        color #333333
      input 
        outline none 
        border none 
        font-size 0.4rem
</style>
