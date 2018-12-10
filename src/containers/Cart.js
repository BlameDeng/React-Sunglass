import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MyCart from '../components/cart/MyCart'
import {setCart} from '../actions'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'cart'
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="cart">
          <aside className="side-nav">
            <h3>全部功能</h3>
            <div>我的购物车</div>
            <div>已买到的宝贝</div>
          </aside>
          <MyCart {...this.props} />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps=dispatch=>({
    setCart:cart=>dispatch(setCart(cart))
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
