import React, { Component } from 'react'
import { Icon } from 'antd'

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="user-info">
            <Icon type="user" />
            <span className="username">username</span>
          </div>
          <div className="top-bar-cart">
            <Icon type="shopping-cart" />
            <span className="badge">22</span>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar
