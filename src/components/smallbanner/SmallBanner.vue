<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper swiper">
      <div class="swiper-slide item" v-for="(item,index) in smBanner" :key="index">
        <img :src="item.src" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  props: {
    smBanner: {
      type: Array
    }
  },
  mounted() {
    this.$nextTick(()=> {
      let swiper = this.$refs.swiper
      let mySwiper = new Swiper(swiper,{
        observer:true,
        observeParents:true,
        autoplay: {
          delay: 1000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
        
      })
      console.log(swiper)
    })

  }
}
</script>

<style lang="stylus" scoped>
.swiper
  height 2.88rem
  img
    width 100%
    height 100%
</style>
