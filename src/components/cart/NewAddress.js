import React, { Component } from 'react'
import { Input } from 'antd'

class NewAddress extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="mask">
        <div className="dialog">
          <div className="address">
            <div className="info">使用新地址</div>
            <div className="wrapper">
              <p>
                <label>收货人：</label>
                <Input />
              </p>
              <p>
                <label>手机号码：</label>
                <Input />
              </p>
            </div>
            <p>
              <label>地址信息：</label>
              <Input placeholder="省/市/区" />
            </p>
            <p>
              <label>详细地址：</label>
              <Input placeholder="详细地址，如：门牌、街道、村镇" />
            </p>
          </div>
          <div className="btn-wrapper">
            <div className="btn cancle" role="button">
              取消
            </div>
            <div className="btn" role="button">
              保存
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewAddress
