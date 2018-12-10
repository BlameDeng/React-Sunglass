import React, { Component } from 'react'

class UserNav extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <nav className="user-navbar">
        <div className="user-avatar">
          <img src={require('../../style/img/avatar.png')} alt="avatar" />
          <span>{}</span>
        </div>
        <div className="index">我的首页</div>
        <div className="account">账户设置</div>
      </nav>
    )
  }
}

export default UserNav