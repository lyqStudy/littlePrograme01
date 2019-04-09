//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'boy',
  },
  onchage:function(){
    this.setData({
      motto:'girl',
    });
  }
})
