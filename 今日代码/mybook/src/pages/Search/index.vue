<template>
  <div class="searchContainer">
    <div class="search_header">
      <input
        type="text"
        placeholder="书中自有黄金屋"
        placeholder-class="placeholder"
        v-model="searchText"
        @confirm="seachHandle"
      />
      <span class="close" v-show="isShow" @click="searchText=''">✖</span>
    </div>
    <div class="search_content" v-if="books.length">
      <BookList :books="books" />
    </div>
  </div>
</template>
<script>
import request from '../../utils/request.js'
// 引入组件
import BookList from '../BookList/index.vue'
export default {
  components: {
    BookList
  },
  data() {
    return {
      searchText: '',
      books: [],
      isShow: false
    }
  },
  watch: {
    searchText() {
      this.isShow = this.searchText ? true : false
      this.books = []
    }
  },
  methods: {
    async seachHandle() {
    
      const searchText = this.searchText
      console.log(searchText)
       const result = await request('/search', { req: searchText })
      if (result) {
        this.books = result
        console.log(this.books)
      }
      // console.log('完成了')
      // const searchText = this.searchText
      // wx.request({
      //   url: 'http://localhost:4000/search',
      //   data: { req: searchText },
      //   method: 'GET',
      //   success: (res)=> {
      //     console.log(res.data)
      //     this.books = res.data
      //   }
      // })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.search_header
  width 90%
  height 80rpx
  border-bottom 1rpx solid #02a774
  margin 0 auto
  position relative
  input
    text-align center
    font-size 40rpx
    line-height 80rpx
    height 100%
    .placeholder
      color #02a774
  .close
    position absolute
    top 20rpx
    right 10rpx
    font-size 40rpx
    z-index 99
</style>