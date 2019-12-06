<template>
  <div class="searchContainer">
    <div class="search_content">
      <input
        type="text"
        placeholder="书中自有黄金屋"
        placeholder-class="placeholder"
        v-model="searchText"
        @confirm="search"
      />
      <span class="close" v-show="isShow" @click="clear">✖</span>
    </div>
    <div class="search_list" v-if="books.length">
      <BookList :books="books" />
    </div>
  </div>
</template>
<script>
// 引入接口
import request from '../../utils/request.js'
// 引入booklist组件
import BookList from '../BookList/index.vue'
export default {
  components: {
    BookList
  },
  data() {
    return {
      searchText: '', // 文本框中的数据
      isShow: false,
      books: [] // 存储书籍数据的
    }
  },
  watch: {
    searchText() {
      this.isShow = this.searchText ? true : false
      this.books=[]
    }
  },
  methods: {
    clear() {
      // 清空文本框
      this.searchText = ''
    },
    // 搜索功能
    async search() {
      const searchText = this.searchText
      const result = await request('/search', { req: searchText })
      this.books = result

      //  wx.request({
      //   url: '/search',
      //   data: {req:searchText},
      //   method: 'GET',
      //   success: function(res){
      //     console.log(res.data)
      //   }
      // })
      // console.log('触发了')
      // wx.request({
      //   url: 'http://localhost:4000/search',
      //   data: {req:searchText},
      //   method: 'GET',
      //   success: function(res){
      //     console.log(res.data)
      //   }
      // })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.searchContainer
  width 100%
  .search_content
    width 90%
    margin 0 auto
    height 80rpx
    border-bottom 1rpx solid #02a774
    position relative
    input
      width 100%
      height 100%
      font-size 36rpx
      text-align center
      line-height 80rpx
      font-weight 700
    .placeholder
      color #02a77f
    .close
      position absolute
      bottom 10rpx
      right 10rpx
      font-size 36rpx
      z-index 99
</style>