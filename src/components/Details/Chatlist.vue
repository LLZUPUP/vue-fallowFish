<template>
<div class="container">
  <div class="chatlist" ref="chatlist" :class="showBox==1?'popbox':'listbottom'">
    <ul>
      <div v-for="(item,index) in talks" :key="index">
        <li class="user" v-if="item.type == 1">
          <div class="chat-user">
            <img :src="url" alt="">
          </div>
          <div class="time">
            <span><i>{{item.time}}</i>{{name}}</span>
          </div>
          <div class="text" v-html="replaceEmoj(item.content)"></div>
        </li>
        <li class="seller" v-if="item.type == 2">
          <div class="chat-user">
            <img :src="news.avatar" alt="">
          </div>
          <div class="time">
            <span>{{news.name}}<i>{{item.time}}</i></span>
          </div>
          <div class="text" v-html="replaceEmoj(item.content)"></div>
        </li>
      </div>
    </ul>
  </div>
  <div class="footer">
    <div class="inputbox">
      <span class="speaks" @click="toast">
        <img src="../../assets/images/录音.png" alt="">
      </span>
      <input type="text" placeholder="想对TA说点什么" class="input" v-model="content" @keypress.enter="sendMsg"/>
      <span class="emoj" @click="change">
        <img src="../../assets/images/笑脸.png" alt="">
      </span>
      <span class="send" @click="sendMsg">发送</span>
    </div>
    <div class="emojibox">
      <div class="emoji" :class="showBox>0?'show':'hide'">
        <div class="emojis">
          <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(n,index) in Math.ceil(EXPS.length/18)" :key="index">
                <li v-for="(item, index) in getEXP(n,18)" :key="index">
                  <img :src="'static/emotion/'+item.file" alt="" :data="item.code" @click="content+=item.code">
                </li>
              </div>
            </div>
            <div class="swiper-pagination"></div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>


<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import util from '../../assets/utils/utils.js'
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      content: '',
      showBox: 0,   //0隐藏表情框，1显示表情框
      url: '',
      name: '',
      //模拟聊天对话数据
      talks: [
        {
          type: 1,
          time: util.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
          content: '你好，在吗?'
        },
        {
          type: 2,
          time: util.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
          content: '在的哦，亲按回车即可回复哟~'
        }
      ],
      EXPS: [
        { file: '100.gif', code: '/::)', title: '微笑',reg:/\/::\)/g },
        { file: '101.gif', code: '/::~', title: '伤心',reg:/\/::~/g },
        { file: '102.gif', code: '/::B', title: '美女',reg:/\/::B/g },
        { file: '103.gif', code: '/::|', title: '发呆',reg:/\/::\|/g },
        { file: '104.gif', code: '/:8-)', title: '墨镜',reg:/\/:8-\)/g },
        { file: '105.gif', code: '/::<', title: '哭',reg:/\/::</g },
        { file: '106.gif', code: '/::$', title: '羞',reg:/\/::\$/g },
        { file: '107.gif', code: '/::X', title: '哑',reg:/\/::X/g },
        { file: '108.gif', code: '/::Z', title: '睡',reg:/\/::Z/g },
        { file: '109.gif', code: '/::\'(', title: '哭',reg:/\/::'\(/g },
        { file: '110.gif', code: '/::-|', title: '囧',reg:/\/::-\|/g },
        { file: '111.gif', code: '/::@', title: '怒',reg:/\/::@/g },
        { file: '112.gif', code: '/::P', title: '调皮',reg:/\/::P/g },
        { file: '113.gif', code: '/::D', title: '笑',reg:/\/::D/g },
        { file: '114.gif', code: '/::O', title: '惊讶',reg:/\/::O/g },
        { file: '115.gif', code: '/::(', title: '难过',reg:/\/::\(/g },
        { file: '116.gif', code: '/::+', title: '酷',reg:/\/::\+/g },
        { file: '117.gif', code: '/:--b', title: '汗',reg:/\/:--b/g },
        { file: '118.gif', code: '/::Q', title: '抓狂',reg:/\/::Q/g },
        { file: '119.gif', code: '/::T', title: '吐',reg:/\/::T/g },
        { file: '120.gif', code: '/:,@P', title: '笑',reg:/\/:,@P/g },
        { file: '121.gif', code: '/:,@-D', title: '快乐',reg:/\/:,@-D/g },
        { file: '122.gif', code: '/::d', title: '奇',reg:/\/::d/g },
        { file: '123.gif', code: '/:,@o', title: '傲' ,reg:/\/:,@o/g},
        { file: '124.gif', code: '/::g', title: '饿',reg:/\/::g/g },
        { file: '125.gif', code: '/:|-)', title: '累' ,reg:/\/:\|-\)/g},
        { file: '126.gif', code: '/::!', title: '吓',reg:/\/::!/g },
      ]
    }
  },
  mounted() {
    this.url = window.localStorage.getItem('useravatar')
    this.name = window.localStorage.getItem('username')
    this.talks[0].name = this.username
    this.talks[1].name = this.news.name
    let swiper = this.$refs.swiper
    this.$nextTick(()=> {
      let mySwiper = new Swiper(swiper,{
        pagination: {
          el: '.swiper-pagination',
        },
      })
    })
  },
  methods: {
    getEXP (pageCurrent,pageSize) {
        return this.EXPS.slice((pageCurrent - 1) * pageSize, pageSize * pageCurrent)
    },
    // 替换表情代码
    replaceEmoj(content) {
      var exps=this.EXPS;
      for(var i=0;i<exps.length;i++){
          content = content.replace(exps[i].reg, '<img src="static/emotion/' + exps[i].file +'"  alt="" />');
      }
      return content;
    },
    //滚动条滚动到底部
    scrollToBottom() {
      setTimeout(()=> {
        this.$refs.chatlist.scrollTop = this.$refs.chatlist.scrollHeight
      })
    },
    toast() {
      this.$toast('还没来得及做这个功能呢！')
    },
    sendMsg() {
      if(this.content == '') {
        this.$toast('输入消息不能为空哦')
        return 
      }
      this.talks.push({
        type: 1,
        time: util.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        content: this.content
      })
      setTimeout(()=> {
        this.talks.push({
          type: 2,
          time: util.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
          content: '小哥哥你好啊!'
        })
      },100)
      this.content = ''
      this.scrollToBottom()

    },
    //改变showBox
    change() {
      this.showBox = this.showBox==1?0:1
    },
  },
  computed: {
    ...mapGetters([
      'news',
      'username'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.show
  display block
.hide
  display none
.popbox
  bottom 6.2rem
.listbottom
  bottom 1.6rem
.chatlist
  position absolute
  top 3.9rem
  left 0
  right 0
  overflow-x hidden
  overflow-y scroll
  padding .3rem 0
  box-sizing border-box
  background-color #f7f7f7
  ul
    min-height 10rem
    li
      position relative
      margin-bottom .3rem
      padding-left 2rem
      min-height 2.3rem
      box-sizing border-box
    .user,.seller
      .chat-user
        position absolute
      .chat-user,.text
        display inline-block
        font-size 0.37rem
        vertical-align middle
      .time
        width 100%
        span 
          left auto 
          right 2rem
          text-align right
          font-style normal 
          line-height .8rem
          font-size 0.3rem
          white-space nowrap
          color #999999
          text-align left
          i 
            font-style normal 
            padding-left 0.23rem
            padding-right 0.23em
            font-size 0.35rem
      img 
        width 1.3rem
        height 1.3rem
        border-radius 50%
      .text
        position relative
        line-height 1rem
        padding .1rem .1rem
        background-color #fff
        border-radius 3px
        color #333
        word-break break-all
        max-width 46.2rem\9
        // font-size 0.37rem
        &:after
          content ''
          width 0
          height 0
          position absolute
          left -0.3rem
          border-width 0.3rem
          border-style solid dashed dashed
          border-color #fff transparent transparent
          overflow hidden
        img 
          max-width 100%
          vertical-align middle
    .user
      text-align right
      padding-left 0
      padding-right 2rem
      box-sizing border-box
      .chat-user
        right .1rem
        left auto
      .text
        margin-left 0
        text-align left
        background-color #ffda44
        color #ffffff
        &:after
          left auto 
          right -0.3rem
          border-top-color #ffda44
    .seller
      .chat-user
        left 0.1rem
        right auto
.footer
  width 100%
  // height 1.6rem
  position fixed
  bottom 0
  left 0
  background-color #fff
  display flex
  flex-direction column
  align-items center
  justify-content center
  border-top 1px solid #f6f6f6
  padding 0 .4rem
  box-sizing border-box
  .emoji
    width 100%
    height 4rem
  .inputbox
    display flex
    height 1.3rem
    width 100%
    align-items center
    .speaks,.emoj
      width 1.3rem
      display block
      text-align center
    input
      flex 1
      border none 
      outline none
      font-size .3rem
    img 
      width .8rem
      height .8rem
    .send
      width 1.6rem
      height 1rem
      background-color #ffda44
      color #000000
      font-weight 600
      text-align center
      line-height 1rem
      font-size 0.3rem
  .emoji
    width 100%
    height 4.2rem
    .emojis
      overflow hidden
      width 9.6rem
      margin 0 auto
      height 4.5rem
      li
        width 1rem
        float left 
        padding .2rem .3rem 0 .26rem

    
</style>
