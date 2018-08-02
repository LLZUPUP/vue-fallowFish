<template>
  <div class="goodsbox border-1px">
    <ul>
      <li class="item" v-for="(item,index) in iconList" :key="index" @click="active">
        <img :src="item.src" alt="" class="image">
        <p class="title">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    iconList: {
      type: Array
    }
  },
  methods: {
    active() {
      this.$toast('此功能待完善，请往下滑')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.goodsbox
  border-bottom .4rem solid #f3f3f3
  height 2.6666rem
  ul
    display flex
    .item
      list-style none
      flex 1
      display flex
      flex-flow column nowrap 
      align-items center
      .image
        width 1rem
        height 1rem
        margin .1rem 0
      .title
        font-size 0.4rem
        color #000000
        font-weight 400
        padding .2rem 0
      .desc
        font-size 0.3rem
        color #666666
</style>
