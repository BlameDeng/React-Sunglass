import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon } from 'antd'

class TopBar extends Component {
  render() {
    const cart=this.props.cart
    const user=this.props.user
    return (
      <div className="top-bar">
        <div className="top-bar-inner">
          <Link className="user-info" to="/user">
            <Icon type="user" />
            <span className="username"> {(user&&(user.nickyname||user.username))||'未登录'} </span>
          </Link>
          <Link className="top-bar-cart" to="/cart">
            <Icon type="shopping-cart" />
            <span className="badge"> {(cart&&cart.products.length)||0} </span>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart
})

export default connect(mapStateToProps)(TopBar)
