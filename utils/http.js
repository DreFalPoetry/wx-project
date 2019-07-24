import {config} from '../config.js';

const tips = {
  1:'抱歉出现错误',
  1005:'sddd',
  3000:'aaaaa'
}

class HTTP{
  request(params){
    wx.request({
      url: config.api_base_url + params.url,
      data: params.data,
      method: params.method || 'GET',
      success: (res)=>{
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          params.success && params.success(res.data)
        }else{
          let error_code = res.data.error_code;
          this._show_error(error_code)
        }
      },
      fail: (err)=>{
        this._show_error(1)
      }
    })
  }

  _show_error(error_code){
    wx.showToast({
      title: tips[error_code] || tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export {HTTP};