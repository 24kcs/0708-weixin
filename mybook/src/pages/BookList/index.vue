<template>
  <div>
    这里是bookList界面
  </div>
</template>
<script>
export default {
  props: ['books'],
  data () {
    return {
      books:[]
    }
  },
  // 界面加载后
  mounted () {
      // 先获取路由跳转的时候传过来的数据
       const books=JSON.parse(this.$mp.query.books)
      // 把当前得到的数据更新到状态数据中
       this.books=books
       console.log(books)
    

  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>