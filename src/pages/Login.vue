<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goBack">
        <img src="../assets/images/返回.png" alt="">
      </div>
      <div class="title">账户登录</div>
    </div>
    <div class="loginform">
      <div class="avatar" @click="addPic">
        <img :src="url" alt="">
        <span class="upavatar">上传帅照</span>
        <input type="file" hidden accept="image/jpeg,image/jpg,image/png" capture="camera" @change="fileInput" ref="file">
      </div>
      
      <form action="#" class="form">
        <div class="inputbox border-1px">
          <label for="name" class="label">账户</label>
          <input type="text" id="name" placeholder="手机号/会员号/邮箱" name="username" v-model="username">
        </div>
        <div class="inputbox border-1px">
          <label for="password" class="label">密码</label>
          <input type="password" id="password" placeholder="请输入密码" name="password" v-model="password">
        </div>
        <div class="button">
          <div class="login" @click="gologin">登录</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import lrz from 'lrz'
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      url: '../../../static/avatar.jpg',
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters([
      'login'
    ])
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
    addPic() {
      this.$refs.file.click()
    },
    fileInput(e) {
      let files = e.target.files
      console.log(files)
      if(!files.length) return
      this.createImage(files, e)
    },
    createImage(files, e) {
      lrz(files[0], { width: 480 }).then(rst=> {
        this.url = rst.base64
      }).catch(err=> {
        console.log(err)
      }).always(()=> {
        e.tartget.value = null
      })
    },
    gologin() {
      if(this.username == '') {
        this.$toast('请输入用户名')
      }else if(this.password == '') {
        this.$toast('请输入密码')
      }else if(this.password.length<=9) {
        this.$toast('密码不能低于9位哦！')
      }else {
        window.localStorage.setItem('username',this.username)
        window.localStorage.setItem('password',this.password)
        this.$store.dispatch('hasLogin')
        let obj = {}
        obj.avatar = this.url
        obj.username = this.username
        obj.password = this.password
        this.$store.dispatch('setUsername', this.username)
        this.$store.dispatch('setUserinfo', obj)
        this.$toast({
          message: '登录成功',
          duration: 500
        })
        setTimeout(()=> {
          this.$router.push({
            path: '/'
          })
        },600)
        this.$store.dispatch('setCurIndex', 0)
      }
    }

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
    .loginform
      .avatar
        width 100%
        font-size 0.45rem
        font-weight 700
        display flex
        flex-direction column
        align-items center
        justify-content center
        margin 1.4rem 0
        img 
          width 2rem
          height 2rem
          border-radius 50%
          margin-bottom 0.2rem
      .form
        .inputbox
          border-1px(#f1f1f1)
          padding 0.333rem .333rem
          margin-bottom 0.5rem
          display flex
          align-items center
          .label
            width 2.5rem
            font-size 0.5rem
            font-weight 600
          input
            flex 1
            border none
            outline none
            background-color #fff
            font-size 0.4rem
            color #666666
        .button
          width 10rem
          padding 0.25rem .25rem
          box-sizing border-box
          .login
            width 100%
            height 1.3rem
            background-color #ffda44
            outline none 
            border-radius 8px
            font-size 0.45em
            color #ffffff
            display flex
            align-items center
            justify-content center
            letter-spacing .1rem
          
          
</style>
