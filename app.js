//app.js
App({
  onLaunch: function () {
    //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now()) 
    // unshift()：方法是向数组的开头新增元素，接着返回新数组的长度
    wx.setStorageSync('logs', logs)
  },

  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      //typeof 运算符返回一个用来表示表达式的数据类型的字符串
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () { 
          // 调用微信登录接口成功之后，就调用获取用户信息接口
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  globalData:{
    userInfo:null
  },
  
  onShow: function () {
    wx.navigateTo({
      url: './pages/enter/enter'
    })
  }
})