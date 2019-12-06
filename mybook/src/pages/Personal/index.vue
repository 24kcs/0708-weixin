<template>
  <div class="profileContainer">
    <div class="profile_header">
      <img :src="userInfo.nickName?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt />
      <button open-type="getUserInfo" @getuserinfo="getUser">
        {{
          userInfo.nickName?userInfo.nickName:'登录'
        }}
      </button>
    </div>
    <div class="profile_content">
      <div class="cards">
        <span>我的收藏</span>
        <span class="right">more></span>
      </div>
      <div class="cards">
        <span>扫码看书</span>
        <span class="right">more></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInfo:{} // 用户信息数据  
    }
  },
  mounted() {
    // 当前的界面加载后,直接获取用户的信息
    wx.getUserInfo({
      success: res => {
        if (res.userInfo) {
          // const userInfo = res.userInfo
          this.userInfo= res.userInfo
        }
      }
    })
  },
  methods: {
    getUser(event){
      console.log(event)
      if(event.mp){
        this.userInfo=event.mp.detail.userInfo
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.profileContainer
  display flex
  flex-direction column
  .profile_header
    width 100%
    height 140rpx
    background-color #02a774
    display flex
    align-items center
    padding 0 20rpx
    img
      width 100rpx
      height 100rpx
      vertical-align middle
      border-radius 50%
    button
      height 60rpx
      margin-left 20rpx
      font-size 28rpx
      background rgba(255, 255, 255, 0.3)
      line-height 60rpx
  .profile_content
    width 90%
    margin 0 auto
    .cards
      border 1px solid #ccc
      padding 10rpx
      span
        font-size 34rpx
        &.right
          float right
</style>