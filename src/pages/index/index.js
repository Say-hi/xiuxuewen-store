// 获取全局应用程序实例对象
const app = getApp()
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabNav: [
      {
        t: '发布课程',
        url: '/releasePage/pageseleven/releaseCourse/releaseCourse',
        img: app.data.testImg
      },
      {
        t: '我的课程',
        url: '/coursePage/pageszero/course/course',
        img: app.data.testImg
      },
      {
        t: '分享有奖',
        url: '/releasePage/pageseleven/releaseCourse/releaseCourse',
        img: app.data.testImg
      }
    ],
    testImg: app.data.testImg
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    app.setBar('首页')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // console.log(' ---------- onReady ----------')
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // console.log(' ---------- onShow ----------')
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

    // console.log(' ---------- onHide ----------')
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

    // console.log(' ---------- onUnload ----------')
  },
  onShareAppMessage () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {

  }
})
