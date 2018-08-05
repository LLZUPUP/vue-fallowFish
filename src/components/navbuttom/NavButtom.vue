<template>
  <div>
    <button @click="addCount">{{this.$store.state.count}}--{{this.$store.getters.computedCount}}</button>
  </div>
</template>

<script>
import store from '../../store/index.js'
export default {
  methods: {
    addCount() {
      // this.$store.commit('addCount')    //直接触发mutation里的方法
      this.$store.dispatch('incMutations')
    }
  },
 
}
</script>

<style lang="stylus" scoped>

</style>
