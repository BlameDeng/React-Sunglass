import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MyCart from '../components/cart/MyCart'
import { setCart } from '../actions'
import Payment from '../components/cart/Payment'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'cart',
      selectedIds: null,
      total: 0
    }
  }

  handleChangeTab(tab, selectedIds, total) {
    if (tab !== this.state.tab) {
      this.setState(() => (selectedIds ? { tab, selectedIds, total } : { tab }))
    }
  }

  render() {
    const { tab, selectedIds, total } = this.state
    return (
      <>
        <Header />
        <div className="cart">
          <aside className="side-nav">
            <h3>全部功能</h3>
            <div
              onClick={() => this.handleChangeTab('cart')}
              className={tab !== 'order' ? 'active' : ''}
            >
              我的购物车
            </div>
            <div
              onClick={() => this.handleChangeTab('order')}
              className={tab === 'order' ? 'active' : ''}
            >
              已买到的宝贝
            </div>
          </aside>
          {tab === 'cart' ? (
            <MyCart
              {...this.props}
              handleChangeTab={this.handleChangeTab.bind(this)}
            />
          ) : (
            ''
          )}
          {tab === 'payment' ? (
            <Payment {...this.props} selectedIds={selectedIds} total={total} handleChangeTab={this.handleChangeTab.bind(this)} />
          ) : (
            ''
          )}
          {tab === 'order' ? '' : ''}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  setCart: cart => dispatch(setCart(cart))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
