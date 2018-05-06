
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    backgroundColor: "#ffffff",
    systemInfo: [{model: '',
      pixelRatio: '',
      windowWidth: '',
      windowHeight: '',
      language: '',
      version: '',
      platform: ''
    }],

    city: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  wxRequest: function (event) {
    var that = this
    wx.request({
      url: 'https://ip.ws.126.net/ipquery?ip=',
      data: {
        ip: ""
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        var localAddress = res.data
        that.setData({
          city: localAddress
        })
      }
    })
  },

  getSystemInfo: function (e) { // 调用获取系统信息的api
    var that = this // 不这样做的话就会报错
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          model: res.model,
          pixelRatio: res.pixelRatio,
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          language: res.language,
          version: res.version,
          platform: res.platform
        })
      }
    })
  },

  getRunData: function (e) {
    wx.login({
      success: function (res) {
        console.log(res.code)
        wx.getWeRunData({
          success: function (res) {
            const encryData = res.encryptedData
            console.log(encryData)
            console.log(res.errMsg)
            wx.getUserInfo({
              success: function (res) {
          
                console.log(res.iv)
              }
            })
          }           
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  changeColor: function (e) {
    this.setData({
      backgroundColor: "#E0E0E0"
    })
  },

  changeColor1: function (e) {
    this.setData({
      backgroundColor: "#ffffff"
    })
  },

  toUserCenter: function (e) {
    wx.navigateTo({
      url: '../mine/userCenter/userCenter'
    })
  },

  toSettings:function (e) {
    wx.navigateTo({
      url: '../mine/settings/settings'
    })
  }
})