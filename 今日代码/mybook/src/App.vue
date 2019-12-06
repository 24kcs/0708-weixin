
<script>
import request from './utils/request'
export default {
  mounted () {
    wx.login({
      success: async(res)=>{
        const code=res.code
        console.log(code)
        // 向后台发送请求
        const result=await request('/getopenId',{
          code
        })
        console.log('openId:'+result)
        wx.setStorage({
          key: 'openId',
          data: result
        })
      }
     
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
page
  width 100%
  height 100%
</style>