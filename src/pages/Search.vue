<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../assets/images/返回.png" alt="">
      </div>
      <div class="searchbox">
        <input type="search" autofocus @keypress="search(keywords)" v-model="keywords" placeholder="手机">
      </div>
      <div class="searchbtn">
        <button class="search" @click="search(keywords)">搜索</button>
      </div>
    </div>
    <div class="results" v-if="result">
      <div class="title">
        <span class="name">{{keywords}}</span>
      </div>
      <div class="reContainer">
        <div class="result" v-for= "(item,index) in infos" :key="index">
          <img :src="item.image" alt=""/>
          <p class="desc">{{item.desc}}</p>
          <p class="price">¥{{item.price}}</p>
          <div class="more">
            <span class="addr">{{item.addr}}</span>
            <span class="time">{{item.time}}</span>
          </div>
        </div>      
      </div>
      
    </div>
    <div class="noresults" v-else>
      <p class="noresult">啊呀~您太潮了，小鱼暂时还未找到您要的东西呢，要不搜索连衣裙或手机试试~</p>
    </div>
  </div>
</template>
<script>
import { getSearchresult, ERR_OK } from '@/api/data'

export default {
  data() {
    return {
      keywords: '',
      result: true,
      results: null,    //获取请求过来的数据
      infos: null,    //得到搜索结果的数据
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
    search(keywords) {
      this.infos = null;
      this.keywords = keywords
      console.log(this.result)
      if(this.keywords === '') {
        this.$toast('请输入要搜的宝贝哦~')
        return;
      }
      let results = this.results
      for(let i in results) {
        if(i.indexOf(this.keywords) !== -1 && this.keywords <= i) {
          console.log(i)
          this.infos = results[i]
          console.log(this.infos)
          this.result = true;
        } 
      }
      if(!this.infos) {
        this.result = false
      }
    }
  },
  created() {
    getSearchresult().then(res => {
      if(res.status === ERR_OK ) {
        this.results = res.data
      }
    }).catch(error=> {
      console.log(error)
    })
  }
}
</script>
<style lang="stylus" scoped>
  .container
    width 10rem
    height 100vh
    background-color #f2f1ed
    .head
      background-color #f3f3f3
      width 100%
      height 1.6rem
      display flex
      align-items center
      .back
        width 1rem
        height 1rem
        img 
          width .8rem
          height .8rem
      .searchbox
        flex 1
        margin-right 0.1rem
        input 
          height 1.2rem
          width 100%
          border none 
          font-size 0.4rem
          outline none 
          border-radius .2rem
          padding-left 1.2rem
          background url('../assets/images/search.png') no-repeat .2rem 50%
          background-size .8rem .8rem
          box-sizing border-box
          background-color #fff
      .searchbtn
        margin-right 0.3rem
        display flex
        align-items center
        .search
          outline none
          background-color #f3f3f3
          font-size 0.4rem
          border none

    .results
      width 10rem
      .title
        padding .4rem .4rem
        font-size 0.4rem
        color #000
        box-sizing border-box
        .name
          display inline-block
      .reContainer
        width 100%
        display flex
        justify-content space-between
        .result
          width 4.8rem
          height auto
          background-color #fff
          img 
            width 100%
            height 4rem
          .desc
            width 100%
            padding .2rem .2rem
            box-sizing border-box
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            color #000000
            font-size 0.4rem
          .price
            width 100%
            padding .2rem .2rem
            box-sizing border-box
            color red
            font-size 0.4rem
          .more
            padding 0 .4rem .4rem .4rem
            box-sizing border-box
            font-size 0.4rem
            color #888888
            display flex
            .addr
              flex 1

    .noresults
      width 10rem
      height 80vh
      display flex
      align-items center
      justify-content center
      .noresult
        width 7rem
        font-size 0.5rem
        padding-left 1.6rem
        box-sizing border-box
        background url('../assets/images/noresult.png') no-repeat
        font-family 'STKaiti'





</style>
