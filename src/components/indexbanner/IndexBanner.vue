<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper swiper">
      <div class="swiper-slide item" v-for="(item,index) in banner" :key="index">
        <img :src="item.src" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { getIndexbanner, ERR_OK } from '@/api/data'
export default {
  data() {
    return {
      banner: []
    }
  },
  created() {
    getIndexbanner().then(res=>{
      if(res.status === ERR_OK) {
        this.banner = res.data.banner
        this.$nextTick(()=>{
          let swiperContainer = this.$refs.swiperContainer;
          let mySwiper = new Swiper(swiperContainer,{
            autoplay: {
              delay: 2000
            },
            loop: true
          })
        })
        
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  height 4.8rem
  .item
    height 100%
    img
      width 100% 
      height 100%
</style>
