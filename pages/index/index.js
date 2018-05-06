//index.js
//获取应用实例
var app = getApp()
var myData = {
  userInfo: {},
  imgUrls: [
    '../images/1.jpg',
    '../images/2.jpg',
    '../images/3.jpg'
  ],
  someData: null,
  likeImgUrl: '../images/unlike.png'
}
Page({
  data: myData,
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  wxRequest: function () {
    let that = this
    // 向服务器发送请求以获取数据
    wx.request({
      url: 'https://www.h4ck1ng.com', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // 设置请求得到的数据
        that.setData({someData: res.data})
      }
    })
  },
  isLike: function () {
    // 点赞或者取消赞
    myData.likeImgUrl = myData.likeImgUrl === '../images/unlike.png' ? '../images/like4.png' : '../images/unlike.png';
    this.setData({likeImgUrl: myData.likeImgUrl});
  }
})