import {config} from '../config.js';

const tips = {
  1:'抱歉出现错误',
  1005:'sddd',
  3000:'aaaaa'
}

class HTTP{
  request({url,data={},method='GET'}){
    return  new Promise((resolve,reject)=>{
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url, resolve, reject, data, method){
    wx.request({
      url: config.api_base_url + url,
      data: data,
      method: method || 'GET',
      success: (res)=>{
        const code = res.statusCode.toString()
        if(code.startsWith('2')){
          resolve(res.data)
        }else{
          reject()
          const error_code = res.data.error_code;
          this._show_error(error_code)
        }
      },
      fail: (err)=>{
        reject()
        this._show_error(1)
      }
    })
  }

  _show_error(error_code){
    const tip = tip[error_code]
    wx.showToast({
      title: tip || tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export {HTTP};