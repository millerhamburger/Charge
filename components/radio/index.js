// components/radio/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    value: 0,
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value
      });
    },
  }
})