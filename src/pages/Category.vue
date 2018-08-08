<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../assets/images/返回.png" alt="">
      </div>
      <div class="title">分类</div>
    </div>
    <div class="category">
      <div class="menu-wrapper" ref="menu">
        <ul>
          <li class="menu-item" :class="{'current':currentIndex===index}" v-for="(item,index) in category" :key="index" ref="menuItem" @click="selectMenu(index)">
            <span class="text border-1px">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="list-wrapper" ref="list">
        <ul>
          <li class="list-item" v-for="(item,index) in category" :key="index" ref="listItem">
            <h1 class="title">{{item.name}}</h1>
            <div class="new">
              <p class="newTitle">每日最新</p>
            </div>
            <ul class="itemContainer">
              <li class="item" v-for="(list,index) in item.imglist" :key="index">
                <div class="imgbox">
                  <img :src="list.img" alt="" class="image">
                </div>
                <p class="desc">{{list.desc}}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
   
</template>
<script>
import { getCategory, ERR_OK } from '../api/data.js'
import BScroll from 'better-scroll'       //引入better-scroll
export default {
  data() {
    return {
      category: [],
      listHeight: [],
      scrollY: 0
    }
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this._followScroll(i);
          return i;
        }
      }
      return 0;
    }
  },
  methods:{
    selectMenu(index) {
      let listItem = this.$refs.listItem;
      let el = listItem[index];
      this.listScroll.scrollToElement(el,200);
    },
    goBack() {
      this.$router.back(-1)
    },
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menu, {
        click: true
      });

      this.listScroll = new BScroll(this.$refs.list, {
        click: true,
        probeType: 3
      });

      this.listScroll.on('scroll', (pos) => {
        // console.log(pos.y)
        // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    _calculateHeight() {
        let listItem = this.$refs.listItem;
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < listItem.length; i++) {
          let item = listItem[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
        console.log(this.listHeight)
      },
      _followScroll(index) {
        let menuItem = this.$refs.menuItem;
        let el = menuItem[index];
        this.menuScroll.scrollToElement(el, 300, 0, -100);
      }
  },
  created() {
    getCategory().then(res=>{
        if(res.status === ERR_OK) {
          this.category = res.data.category
          // console.log(this.category)
          this.$nextTick(()=>{
            this._initScroll()
            this._calculateHeight()
          })
        }
     })
    }

  
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl'
.container
    width 10rem
    height 100vh
    background-color #fff
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
    .category
      width 100%
      display flex
      position absolute
      top 1.6rem
      bottom 0
      overflow hidden
      .menu-wrapper
        width 3rem
        .menu-item
          box-sizing border-box
          width 100%
          height 1rem
          padding 0 12px
          line-height 1rem
          font-size .4rem
          text-align center
          &.current
            border-left 2px solid #ffda44
            font-weight 700
            background-color #ccc
      .list-wrapper
        flex 1
        .list-item
          list-style none
          .title
            text-align center
            height 1.6rem
            line-height 1.6rem
            font-size 0.4rem
          .new
            width 3rem
            height 1.5rem
            background-color #f8f8f8
            font-size 0.4rem
            display flex
            justify-content center
            align-items center
            margin-bottom .4rem
          .itemContainer
            display flex
            justify-content flex-start
            flex-wrap wrap
            .item
              list-style none
              width 33%
              display flex
              flex-direction column
              align-items center
              margin-bottom .8rem
              .imgbox
                width 1.4rem
                height 1.4rem
                .image
                  width 100%
                  height 100%
              .desc
                font-size 0.3rem
                font-weight 700
                margin-top 0.2rem
</style>
