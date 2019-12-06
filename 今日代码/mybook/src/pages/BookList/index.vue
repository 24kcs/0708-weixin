<template>
  <div class="bookListContainer">
    <ul>
      <li v-for="(book,index) in books" :key="index" @click="goDetail(book,index)">
        <img class="avatar" :src="book.image" alt="">
        <div class="content">
          <p>《{{book.title}}》</p>
          <p>作者:{{book.author}}</p>
          <p>{{book.publisher}}</p>
        </div>
        <span class="price">{{book.price}}元</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:['books'],
  data () {
    return {
      books:[]
    }
  },
  mounted () {
   // console.log(this.$mp)
    if(this.$mp){
      this.books=JSON.parse(this.$mp.query.books)
    }
  },
  methods: {
     goDetail(book,index){
    wx.navigateTo({
      url: `/pages/Detail/main?book=${JSON.stringify(book)}&index=${index}`
    })
  }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.bookListContainer
  display flex
  flex-direction column
  li
    display flex
    padding 10rpx
    border-bottom 1rpx solid #666
    .avatar
      width 140rpx
      height 140rpx
    .content
      width 60%
      margin-left 10rpx
      p
        font-size 32rpx
    .price
      font-size 34rpx
      color red
      font-weight 700
</style>