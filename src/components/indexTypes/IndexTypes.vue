<template>
  <div class="typewrap">
    <ul>
      <li class="item" v-for="(item,index) in typeList" :key="index" @click="active">
        <div class="left">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
        <img :src="item.src" alt="" class="right">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    typeList: {
      type: Array
    }
  },
  methods: {
    active() {
      this.$toast('这里还没做哦，逛逛其他的吧😁')
    }
  }
}
</script>

<style lang="stylus" scoped>
.typewrap
  ul
    display flex
    flex-wrap wrap
    justify-content space-between
    .item
      width 50%
      box-sizing border-box
      padding .3rem
      display flex
      .left
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items flex-start
        .title
          font-size 0.4rem
          font-weight 600
          color #000000
          margin-bottom 0.3rem
        .desc
          font-size 0.3rem
      .right
        width 1.3rem
        height 1.3rem
</style>
