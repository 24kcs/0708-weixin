/**
 * 
 * 复习:
 * 小程序中如何向模版中传递数据
 * item是一个对象
 * <view data-id="{{index}}">
 * <template wx:for="{{datas}}" data="{{...item}}"></template>
 * </view>
 * 点击模版(li列表项)跳转到详情页
 * 参数的属性名字是索引:起名用的是id=index
 * const index=event.currentTarget.dataset.id
 * wx.navigateto({
 *  url:'地址?参数的属性名字='+index
 * })
 * 收藏操作/取消收藏
 * 提示框
 * wx.showToast({
 *  title:'显示的提示内容',
 *  icon:'success'
 * })
 * // 设置缓存
 * 对象:{索引:true/false,索引:true/false}
 * wx.setStorage({
 *  key:'键',
 *  data:对象
 * })
 * 读取缓存
 *  wx.getStorageSync('键')
 * 
 * 播放音乐
 * 
 * 该方法返回一个实例对象
 * let bgm=wx.getBackgroundAudioManager()
 * 实例对象可以调用播放/暂停/监听播放/监听暂停的相关的方法或者属性
 *  属性:
 * src----->音乐播放的地址
 * title---->音乐标题(音乐的名字)
 * coverImgUrl---->封面
 * 方法:
 * .play()播放音乐
 * .pause()暂停音乐
 * 
 * 获取播放的状态,及是哪个索引
 * 获取全局的唯一对象的方法
 * let appData= getApp()
 * appData.data.musicPlay--->播放状态
 * appData.data.pageIndex--->索引
 * BackgroundAudioManager.onPlay(function callback)
 * 监听背景音频播放事件

 * BackgroundAudioManager.onPause(function callback)
 * 监听背景音频暂停事件
 * 
 * 用了缓存的方式来获取播放的状态及是哪个列表项播放的音乐(index)
 * 在App.js文件中
 * 内部使用data对象
 * data:{
 *  musicPlay:false
 *  pageIndex:null
 * }
 * 
 * 页面的底部菜单:
 * tabBar:{
 *  list:[
 *    {
 *        pagePath:'路径'
 *        text:'标题信息'
 *        iconPath:'默认的图标'
 *        selectedIconPath:'选中后的图标'
 *   }
 *  ]
 * 
 * }
 * 可以跳转到有tabBar的界面
 * wx.switchTab({
 *  url:'地址'
 * })
 * 
 * 授权的问题:
 * 点击按钮,进行授权,可以活用户的相关信息
 * button--->当按钮中用到了open-type属性之后,就意味着,点击按钮的时候要打开相关的权限了
 * open-type="getUserInfo" bindgetuserinfo="回调" 回调函数内部可以获取用户信息
 * 在当前的登录界面中在onLoad生命周期函数中再次获取用户信息
 * wx.getUserInfo({
 * success:()=>{
 *  可以获取用户的相关信息
 * }
 * })
 * 
 * 
 * 
 * 
 */

 