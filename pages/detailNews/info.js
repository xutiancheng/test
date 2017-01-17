// pages/detail-info/info.js
var app = getApp();
Page({
  data:{
    data:""
    },
  onLoad:function(options){
    var that = this
    wx.request({
      url: app.globalWebUrl.host+'/project/content.html',
      header: {
          'content-type': 'application/json'
      },
      data:{
        "projectId":options.projectId
      },      
      success: function(res) {
        console.log(res.data);
        that.setData({
        'data':res.data
      })
      }
    })   
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})