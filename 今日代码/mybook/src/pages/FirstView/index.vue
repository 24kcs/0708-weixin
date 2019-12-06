<template>
  <div class="firstViewContainer">
    <swiper indicator-dots="current!==3" autoplay @change="changeIndex">
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
    <button class="btn" v-show="current===3" @click="goBooks">开启体验</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current :0  
    }
  },
  methods: {
    // 只要轮播图切换,该事件就会触发
    changeIndex(event){
      const current =event.mp.detail.current
      this.current=current
    },
    // 跳转到books页面
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
    line-height 80rpx
    text-align center
    background rgba(0,0,0,.3)
    position absolute
    left 50%
    margin-left -100rpx
    bottom 30rpx
    color white
</style>