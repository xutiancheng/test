// pages/detail/itemDetail.js
Page({
  data:{
    itemDetail:[],
    percent:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
      wx.request({
      url: 'http://172.16.90.30:8080/project/detail.html', //仅为示例，并非真实的接口地址
      data:{
        projectId:options.projectId
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
        'itemDetail':res.data,
        'percent':((res.data.project.accountYes/res.data.project.account)*100).toFixed(2)
      })
      }
    })
  },
  tapName: function(event) {
    console.log(event);
  },
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  }
})