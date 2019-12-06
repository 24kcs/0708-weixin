<template>
  <div class="firstViewContainer">
    <swiper :indicator-dots="current!==3" autoplay @change="changeIndex">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
       <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
       <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
       <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button class="btn" v-show="current===3" @click="goBooks">开启体验</button>
  </div>
</template>
<script>
export default {
  // 如果小程序中的事件是bind或者catch开头的,那么在mpvue框架内部,需要干掉bind或者catch,使用@开头--->v-on指令
  data () {
    return {
      current:0  
    }
  },
  methods: {
    // 只要轮播图切换界面,该事件就会自动的触发
    changeIndex(event){
      // 获取当前界面切换后的索引值---current
      const current=event.mp.detail.current
      // 更新状态数据
      this.current=current
    },
    goBooks(){
      wx.switchTab({
        url: '/pages/Books/main'
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.firstViewContainer
  width 100%
  height 100%
  position relative
  swiper
    width 100%
    height 100%
    img
      width 100%
      height 100%
  .btn
    width 200rpx
    height 80rpx
    color white
    background rgba(0,0,0,.3)
    position absolute
    left 50%
    margin-left -100rpx
    bottom 30rpx
</style>