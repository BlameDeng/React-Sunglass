import React, { Component } from 'react'
import { Icon } from 'antd'
import { smoothScroll } from '../utils/smoothScroll'

class Sider extends Component {
  handleScrollToTop() {
    smoothScroll(window, { x: 0, y: 0 })
  }

  render() {
    return (
      <div className="sider">
        <div className="link">
          <div className="user">
            <Icon type="user" />
          </div>
          <div className="cart">
            <Icon type="shopping-cart" />
            <span>
              购<br />物<br />车
            </span>
            <span className="count">{22}</span>
          </div>
        </div>
        <div className="to-top" onClick={this.handleScrollToTop.bind(this)}>
          TOP
        </div>
      </div>
    )
  }
}

export default Sider
