<template>
  <div class="container">
    <div class="content">
      <router-link to="/new" tag="div" class="tab-item">
        <span>新鲜的</span>
      </router-link>
      <router-link to="/near" tag="div" class="tab-item">
        <span>附近的</span>
      </router-link>
    </div>
    <router-view :news="news" :nears="nears" :recoms="recoms"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    news: {
      type: Array
    },
    nears: {
      tyepe: Array
    },
    recoms: {
      type: Array
    }
  },
  created() {
    
  }
}
</script>
<style lang="stylus" scoped>
.router-link-active
  color #ffda44
  font-weight 700
  border-bottom 4px solid #ffda44
a
  text-decoration none
.container
  .content
    display flex
    .tab-item
      flex 1
      text-align center
      padding 0.3rem 0
      font-size 0.4rem
</style>
