//index.js
//获取应用实例
var app = getApp()
Page({
data: {
    typeData:[],
    listData:[]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
     wx.request({
      url: 'http://172.16.90.30:8080/invest/projectTypeList.html', //仅为示例，并非真实的接口地址
      header: {
          'content-type': 'application/json'
      },
      data:{
        "parentId":"7ca31c421ce34e3fb8d57208e42f409f"
      },
      success: function(res) {
        that.setData({
        'typeData':res.data.list
      })
      }
    })
  this.listRequest("2b03ef65c72843f99a311775b3724a63","1","10")
  },
  changeType: function (event){
    this.listRequest(event.target.dataset.id,"1","10")
    console.log(event)
    event.target.classname="2134"
  },
  listRequest: function (projectTypeId,page,pageSize){
    var that=this;
    wx.request({
        url: 'http://172.16.90.30:8080/invest/projectList.html', //仅为示例，并非真实的接口地址
        header: {
            'content-type': 'application/json'
        },
        data:{
          "projectTypeId":projectTypeId
        },
        success: function(res) {
          console.log(res);
          that.setData({
          'listData':res.data.page.rows
          })
        }
      })
  }
})
