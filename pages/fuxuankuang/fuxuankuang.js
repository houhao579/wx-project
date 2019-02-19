Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    arr: [],
    arrStatus: []
  },

  check: function (e) {
    //获取当前选中的值
    var checkValue = e.currentTarget.dataset.val;
    //获取当前选中的下标
    var checkIndex = e.currentTarget.dataset.index;
    //当前选中的取反值
    this.data.arrStatus[checkIndex] = !this.data.arrStatus[checkIndex];
    if (this.data.arrStatus[checkIndex]) {
      //如果当前为选中状态则将值插入进数组中
      this.data.arr.push(checkValue);
    } else {
      //如果当前为未选中状态则将值从数组中删除并返回一个新的数组
      for (var i in this.data.arr) {
        if (this.data.arr[i] == checkValue) {
          this.data.arr.splice(i);
        }
      }
    }
    //打印当前所选中的数据
    console.log(this.data.arr);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置数组中每一个数据的状态
    for (var i in this.data.items) {
      this.data.arrStatus[i] = false;
    }
  },
})