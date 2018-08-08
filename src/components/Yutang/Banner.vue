<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper swiper">
      <div class="swiper-slide item" v-for="(item,index) in banner" :key="index">
        <img :src="item.src" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import { getBanner, ERR_OK } from '@/api/data'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data() {
    return {
      banner: []
    }
  },
  created() {
    getBanner().then(res=> {
      if(res.status === ERR_OK) {
        // console.log(res.data.banner)
        this.banner = res.data.banner
        let swiper = this.$refs.swiper
        this.$nextTick(()=> {
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
      })
    }
  })
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  height 3.2rem
  img
    width 100%
    height 100%
</style>
