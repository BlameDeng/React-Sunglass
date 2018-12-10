import React, { Component } from 'react'
import * as api from '../../api'
import { Input, message } from 'antd'

class UserAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'password',
      psw1: '',
      psw2: '',
      psw3: '',
      isChanging: false
    }
  }

  handleClickTab(tab) {
    if (tab !== this.state.tab) {
      this.setState({
        tab
      })
    }
  }

  handlePsw1Change(e) {
    this.setState({
      psw1: e.target.value
    })
  }

  handlePsw2Change(e) {
    this.setState({
      psw2: e.target.value
    })
  }

  handlePsw3Change(e) {
    this.setState({
      psw3: e.target.value
    })
  }

  changePsw() {
    const pattern = /.{6,18}/
    const { psw1, psw2, psw3 } = this.state
    if (!psw1 || !psw2 || !psw3) {
      message.info('密码不能为空', 2)
      return
    }
    let array = [psw1, psw2, psw3]
    for (let i = 0; i < array.length; i++) {
      if (!pattern.test(array[i])) {
        message.info('密码为6到18个字符', 2)
        return
      }
    }
    if (psw1 === psw2) {
      message.info('新密码不能与原密码相同', 2)
      return
    }
    if (psw2 !== psw3) {
      message.info('两次输入的新密码不一致', 2)
      return
    }
    this.setState({
      isChanging: true
    })
    api
      .changePassword(this.props.user.username, psw1, psw2)
      .then(res => {
        message.success('密码修改成功', 2)
        this.clearPsw()
      })
      .catch(err => {
        message.error(err.msg, 2)
        this.clearPsw()
      })
  }

  clearPsw() {
    this.setState({
      psw1: '',
      psw2: '',
      psw3: '',
      isChanging: false
    })
  }

  handleSubmit() {
    if (this.state.isChanging) {
      return
    }
    if (this.state.tab === 'password') {
      this.changePsw()
    }
  }

  render() {
    const { tab } = this.state
    return (
      <div className="user-account">
        <div className="title-wrapper">
          <h4
            className={`title ${tab === 'password' ? 'active' : ''}`}
            onClick={() => this.handleClickTab('password')}
          >
            <span>修改密码</span>
          </h4>
          <h4
            className={`title ${tab === 'address' ? 'active' : ''}`}
            onClick={() => this.handleClickTab('address')}
          >
            <span>我的收货地址</span>
          </h4>
        </div>
        {tab === 'password' ? (
          <div className="password">
            <p>
              <label>原密码：</label>
              <Input
                type="password"
                value={this.state.psw1}
                onChange={this.handlePsw1Change.bind(this)}
              />
            </p>
            <p>
              <label>新密码：</label>
              <Input
                type="password"
                value={this.state.psw2}
                onChange={this.handlePsw2Change.bind(this)}
              />
            </p>
            <p>
              <label>确认新密码：</label>
              <Input
                type="password"
                value={this.state.psw3}
                onChange={this.handlePsw3Change.bind(this)}
              />
            </p>
          </div>
        ) : (
          <div className="address">
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
            <p>
              现有收货地址：<span>{}</span>
            </p>
          </div>
        )}
        <div
          className="btn"
          role="button"
          onClick={this.handleSubmit.bind(this)}
        >
          保存
        </div>
      </div>
    )
  }
}

export default UserAccount
