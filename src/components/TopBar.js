import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Icon } from 'antd'

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-inner">
          <Link className="user-info" to="/user">
            <Icon type="user" />
            <span className="username">username</span>
          </Link>
          <Link className="top-bar-cart" to="/cart">
            <Icon type="shopping-cart" />
            <span className="badge">22</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default TopBar
