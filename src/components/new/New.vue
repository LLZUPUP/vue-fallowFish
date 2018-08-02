<template>
  <div class="container">
    <ul>
      <li class="list" v-for="(list,index) in indexnav.news" :key="index">
        <div class="header">
          <img :src="list.avatar" alt="">
          <div class="info">
            <p class="title"></p>
            <p class="desc"></p>
          </div>
          <span class="price"></span>
        </div>
        <div class="imgbox">
          <img src="" alt="">
        </div>
        <div class="detail">
          <p class="desc"></p>
        </div>
        <div class="footer">
          <div class="addr"></div>
          <div class="kind"></div>
          <div class="star"></div>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    indexnav: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
