<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../../assets/images/返回.png" alt="">
      </div>
      <div class="title">我发布的</div>
    </div>
    <div class="goodsbox" v-if="show" v-for="(item,index) in goods" :key="index">
      <div class="username">
        <img :src="url" alt="">
        <p class="name">{{username}}</p>
        <p class="price">¥{{item.price}}</p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
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
</style>
