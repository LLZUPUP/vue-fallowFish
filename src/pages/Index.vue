<template>
  <div class="container">
      <div class="head" style="margin-bottom:1.5rem">
        <Head></Head>
      </div>
      <IndexBanner></IndexBanner>
      <IndexGoods :iconList="iconList"></IndexGoods>
      <IndexTypes :typeList="typeList"></IndexTypes>
      <SmallBanner :smBanner="smBanner"></SmallBanner>
      <IndexNav :news="news" :nears="nears" :recoms="recoms"></IndexNav>
      <NavButtom></NavButtom>
      
    </div>
</template>

<script>
import { getIconlist, getTypelist, getSmBanner, getIndexNav, ERR_OK } from '@/api/data'
import IndexGoods from '@/components/indexgoods/IndexGoods'
import IndexTypes from '@/components/indexTypes/IndexTypes'
import NavButtom from '@/components/navbuttom/NavButtom'
import SmallBanner from '@/components/smallbanner/SmallBanner'
import IndexNav from '@/components/indexnav/IndexNav'
import IndexBanner from '@/components/indexbanner/IndexBanner'
import Head from '@/components/head/Head'
export default {
  name: 'App',
  components: {
    Head,
    IndexBanner,
    IndexGoods,
    IndexTypes,
    SmallBanner,
    IndexNav,
    NavButtom
  },
  data() {
    return {
      iconList: [],
      typeList: [],
      smBanner: [],
      news: [],
      nears: [],
      recoms: []
    }
  },
  created() {
    getIconlist().then(res=> {
      if(res.status === ERR_OK) {
        this.iconList = res.data.iconlist
      }
    }),
    getTypelist().then(res=> {
      if(res.status === ERR_OK) {
        this.typeList = res.data.typelist
      }
    }),
    getSmBanner().then(res=> {
      if(res.status === ERR_OK) {
        this.smBanner = res.data.banner
      }
    }),
    getIndexNav().then(res=> {
      if(res.status === ERR_OK) {
        this.news = res.data.news
        this.nears = res.data.nears
        this.recoms = res.data.recoms
      }
    })

  }
}
</script>
<style lang="stylus" scoped>
.container
    width 10rem
    height 100%
</style>
