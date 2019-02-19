// pages/hhh/hhh.js
Page({
  data: {
    msg: "我是msg",
    id:22,
    num:1,
    list:[1,2,3,4],
    show:false,
    staffA: {firstName:"aaa",lastName:"aaa111"},
    staffB: { firstName: "bbb", lastName: "bbb22" },
    staffC: { firstName: "ccc", lastName: "ccc222" },
  },
  text: "hhhhhhhhh",
  go(){
    this.setData({
      msg:"newnew",
      staffA: { firstName: "AAAAA", lastName: "aaa111" },
    })
  },
  add(){
    this.setData({
      num:this.data.num + 1

    })

  },
  showText: function() {
    this.setData({
      // 重新定义data中的数据
      msg: "我是msg--新的"
    })
    console.log(this.text)
  },
  tabs:function(e){
    console.log(this.parentNode)
    console.log(e.targrt.innerText)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})