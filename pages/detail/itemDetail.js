// pages/detail/itemDetail.js
var app = getApp();
Page({
  data:{
    itemDetail:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.projectId)
    var that = this
      wx.request({
      url: app.globalWebUrl.host+'/project/detail.html', //仅为示例，并非真实的接口地址
      data:{
        projectId:options.projectId
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
        'itemDetail':res.data
      })
      }
    })
  },
  tapName: function(event) {
    console.log(event);
  },
  onPullDownRefresh: function(){
    console.log(1);
    wx.stopPullDownRefresh()
  }
})