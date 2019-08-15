import {HTTP} from '../utils/http.js';
class ClassicModel extends HTTP{
  getLatest(sCallback){
    this.request({
      url: '/classic/latest',
      success: (res) => {
        sCallback(res)
        this._setLatestIndex(res.index)
        let key = this._getKey(res.index);
        wx.setStorageSync(key,res)
      }
    })
  }

  getPrevious(index,sCallback){
    this.request({
      url:'/classic/' + index + '/previous',
      success:(res)=>{
        sCallback(res)
      }
    })
  }

  getMyFavor(sCallback){
    this.request({
      url:'/classic/favor',
      success:(res)=>{
        sCallback(res)
      }
    })
  }

  getClassic(index,nextOrPrevious,sCallback){
    //缓存中寻找 or API 写入到缓存中
    //确定key
    let key = nextOrPrevious == 'next' ? this._getKey(index+1) : this._getKey(index-1)
    let classic = wx.getStorageSync(key)
    if(!classic){
      this.request({
        url:'/classic/' + index + '/' + nextOrPrevious,
        success:(res)=>{
          wx.setStorageSync(this._getKey(res.index),res)
          sCallback(res)
        }
      })
    }else{
      sCallback(classic)
    }
  }

  isFirst(index){
    return index == 1 ? true : false
  }

  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }

  _setLatestIndex(index){
    wx.setStorageSync('latest',index)
  }

  _getLatestIndex(){
    return wx.getStorageSync('latest')
  }

  _getKey(index){
    let key = 'classic-' + index;
    return key
  }
}

export { ClassicModel }