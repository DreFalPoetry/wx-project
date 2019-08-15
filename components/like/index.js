// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    },
    count:{
      type:Number
    },
    readOnly:{
      type:Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //数据绑定
    /**
     * 
     * 组件的封装性和开放性
     * 封装在内部 开放出来的
     * 组件的力度
     * 简单的功能  复杂的功能
     */
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      if(this.properties.readOnly){
        return;
      }
      //创建自定义事件
      let like =  this.properties.like;
      let count = this.properties.count;
      count = like ? count - 1 : count + 1
      this.setData({
        count:count,
        like:!like
      })
      //激活事件
      let behavior = this.properties.like ? 'like' : 'cancel';
      this.triggerEvent('like',{
        behavior:behavior
      },{})
    }
  }
})
