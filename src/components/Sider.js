import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { smoothScroll } from '../utils/smoothScroll'

class Sider extends Component {
  handleScrollToTop() {
    smoothScroll(window, { x: 0, y: 0 })
  }

  render() {
    const cart = this.props.cart
    return (
      <div className="sider">
        <div className="link">
          <div className="user">
            <Link to="/user">
              <Icon type="user" />
            </Link>
          </div>
          <Link to="/cart">
            <div className="cart">
              <Icon type="shopping-cart" />
              <span>
                购 <br /> 物 <br /> 车
              </span>
              <span className="count">
                {cart && cart.products ? cart.products.length : 0}
              </span>
            </div>
          </Link>
        </div>
        <div className="to-top" onClick={this.handleScrollToTop.bind(this)}>
          TOP
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user
})

export default connect(mapStateToProps)(Sider)
