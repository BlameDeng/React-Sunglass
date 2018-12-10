import React, { Component } from 'react'
import PayItem from './PayItem'
import NewAddress from './NewAddress'

class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newAddressVisible: false,
      checkPswVisible: false,
      products: null
    }
  }

  componentDidMount() {
    const { selectedIds, cart } = this.props
    const products = cart.products.filter(
      product => selectedIds.indexOf(product.id) > -1
    )
    this.setState({ products })
  }

  render() {
    const { newAddressVisible, checkPswVisible, products } = this.state
    const { total } = this.props
    return (
      <div className="payment">
        <div className="title">确认收货地址</div>
        <div className="address">
          <div className="detail-address">
            <p>默认收货地址：</p>
            <p>{`（收）`}</p>
            <p>{``}</p>
          </div>
          <div className="btn" role="button">
            使用新地址
          </div>
          {newAddressVisible ? <NewAddress /> : ''}
        </div>
        <div className="title">确认订单信息</div>
        <ul className="title-bar">
          <li className="info">商品信息</li>
          <li className="price">单价</li>
          <li>数量</li>
          <li>小计</li>
        </ul>
        <ul className="goods">
          {products && products.length
            ? products.map(product => (
                <PayItem product={product} key={product.id} />
              ))
            : ''}
          <li className="order-info">
            <div className="ems">
              <span>运送方式 EMS 免邮</span>
              <span className="number">0.00</span>
            </div>
            <div className="all">
              <span>订单合计（含运费）</span>
              <span className="number">￥{total.toFixed(2)}</span>
            </div>
          </li>
        </ul>
        <div className="action-bar">
          <div className="pay-info">
            <div className="pay">
              <span className="label">实付款：</span>
              <span className="number">￥{total.toFixed(2)}</span>
            </div>
            <div className="address">
              <span className="label">寄送至：</span>
              <span className="detail">
                {''} ${''}`}}
              </span>
            </div>
            <div className="contract">
              <span className="label">收货人：</span>
              <span>
                {''} ${''}`}}
              </span>
            </div>
          </div>
          <div className="btns">
            <div className="return">
              <x-icon name="back" className="icon" />
              <span onClick={()=>this.props.handleChangeTab('cart')}>返回购物车</span>
            </div>
            <div className="confirm">提交并支付</div>
          </div>
        </div>
        {checkPswVisible ? (
          <div className="check-password">
            <div className="inner">
              <h3>支付订单需要验证登录密码</h3>
              <sun-input type="password" />
              <div className="btns">
                <div className="cancle">取消</div>
                <div className="confirm">确定</div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default Payment
