import React, { Component } from 'react'

class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { order } = this.props
    const { product } = order
    return (
      <li>
        <header className="order-info">
          <span className="number">{2011 - 1 - 2}</span>
          <span>订单号：</span>
          <span className="number">{order.id}</span>
        </header>
        <div className="info">
          <img src={product.main_image} alt="main" />
          <span>{product.title}</span>
        </div>
        <div className="price">
          <span>￥{product.discount.toFixed(2)}</span>
          {product.discount < product.price ? (
            <span className="origin">
              <span className="text">原价</span>￥{product.price.toFixed(2)}
            </span>
          ) : (
            ''
          )}
        </div>
        <div className="count">
          <span className="text">&times;</span>
          {product.count}
        </div>
        <div className="total">
          ￥{(product.discount * product.count).toFixed(2)}
        </div>
        <div className="action">
          {order.status === 'toConfirm' ? (
            <div className="btn delivery">确认收货</div>
          ) : (
            ''
          )}
          {order.status === 'toEvaluate' ? (
            <div className="btn">评价商品</div>
          ) : (
            ''
          )}
          {order.status === 'done' ? (
            <div className="btn">
              <x-icon name="delete" className="icon" />
              删除订单
            </div>
          ) : (
            ''
          )}
        </div>
      </li>
    )
  }
}

export default OrderItem
