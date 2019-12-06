<template>
  <div class="bookListContainer">
    <ul>
      <li v-for="(book,index) in books" :key="index" @click="goDetail(book,index)">
        <img :src="book.image" alt />
        <div class="books_content">
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
  props: ['books'],
  data() {
    return {
      books: []
    }
  },
  // 界面加载后
  mounted() {
    if (this.$mp) {
      // 先获取路由跳转的时候传过来的数据
      const books = JSON.parse(this.$mp.query.books)
      // 把当前得到的数据更新到状态数据中
      this.books = books
    }
  },
  methods: {
    // 跳转到详情页
    goDetail(book, index) {
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
  width 100%
  ul
    width 100%
    li
      width 100%
      display flex
      border-bottom 1rpx solid #666
      padding 10rpx
      img
        width 140rpx
        height 140rpx
      .books_content
        width 58%
        margin-left 10rpx
        p
          font-size 32rpx
      .price
        font-size 36rpx
        color red
        font-weight 700
</style>