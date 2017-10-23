//index.js
//获取应用实例
var app = getApp()
var username = ""
var password = ""
Page({
  data: {
    motto: '我的成绩呢...',
    userInfo: {},
    text1: {},
    text2: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindKeyInput: function (e) {
    username = e.detail.value
    // this.setData({
    //   username: e.detail.value
    // })
  },

  bindPasswordInput: function (e) {
    password = e.detail.value
    // this.setData({
    //   password: e.detail.value
    // })
  },

  loadData: function (e) {

    wx.setStorage({
      key: "username",
      data: username
    })

    wx.setStorage({
      key: "password",
      data: password
    })

    var that = this
    wx.request({
      url: 'https://xxx/hgdonline_weixin_web/index.php',
      data: {
        username: username,
        password: password
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.header)
        console.log(res.data)
        that.setData({
          motto: res.data
        })
      }
    })
  },

  onLoad: function () {
    console.log(username)
    console.log(password)

    var that = this
    wx.getStorage({
      key: 'username',
      success: function (res) {
        username = res.data
        that.setData({
          text1: res.data,
        })
      },
      fail: function (res) {
        console.log(res)
        username = ""
        that.setData({
          text1: "",
        })
      }
    })

    wx.getStorage({
      key: 'password',
      success: function (res) {
        password = res.data
        that.setData({
          text2: res.data,
        })
      },
      fail: function (res) {
        console.log(res)
        password = ""
        that.setData({
          text2: "",
        })
      }
    })

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
