<template>
  <div class="booksContainer">
    <div class="books_header">
      <swiper indicator-dots autoplay>
        <swiper-item>
          <img src="/static/imgs/firstView/1.jpg" alt />
        </swiper-item>
        <swiper-item>
          <img src="/static/imgs/firstView/2.jpg" alt />
        </swiper-item>
        <swiper-item>
          <img src="/static/imgs/firstView/3.jpg" alt />
        </swiper-item>
        <swiper-item>
          <img src="/static/imgs/firstView/nvsheng.jpg" alt />
        </swiper-item>
      </swiper>
    </div>
    <div class="books_content">
      <span>全部商品</span>
      <span class="right" @click="goBookList">></span>
    </div>
    <ul class="books_list">
      <li v-for="(book,index) in books" :key="index">
        <img :src="book.image" alt />
        <p>《{{book.title}}》</p>
        <p>作者:{{book.author}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import datas from './datas/data.json'
export default {
  data() {
    return {
      books: [] // 存储书籍数组
    }
  },
  // 界面加载后更新books数据
  mounted() {
    this.books = datas
  },
  methods: {
    // 去书籍列表界面
    goBookList() {
      wx.navigateTo({
        url: '/pages/BookList/main?books=' + JSON.stringify(this.books)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.booksContainer
  width 100%
  height 100%
  .books_header
    width 100%
    height 400rpx
    swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
  .books_content
    padding 10rpx
    span
      font-size 38rpx
      font-weight 700
      &.right
        float right
        color #02a774
  .books_list
    display flex
    flex-wrap wrap /* 拆行 */
    li
      width 50%
      border-bottom 1rpx solid #666
      text-align center
      box-sizing border-box
      &:nth-child(2n+1)
        border-right 1rpx solid #666
      img
        width 170rpx
        height 170rpx
        margin 5rpx
      p
        font-size 36rpx
        margin 10rpx
</style>