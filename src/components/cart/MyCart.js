import React, { Component } from 'react'

class MyCart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleCountChange() {}

  render() {
    const { cart } = this.props
    console.log(cart)

    return (
      <div className="my-cart">
        <div className="title">我的购物车</div>
        <ul className="title-bar">
          <li className="label">
            <label />
            <span>全选</span>
          </li>
          <li className="info">商品信息</li>
          <li className="price">单价</li>
          <li className="count">数量</li>
          <li>金额</li>
          <li className="action">操作</li>
        </ul>
        <ul className="goods">
          {cart && cart.products && cart.products.length ? (
            cart.products.map(product => (
              <li key={product.id}>
                <div className="label">
                  <label />
                </div>
                <div className="info">
                  <img src={product.main_image} alt="main" />
                  <span>{product.title}</span>
                </div>
                <div className="price">
                  <span>￥{product.discount}</span>
                  {product.discount < product.price ? (
                    <span className="origin">
                      <span className="text">原价</span>￥{product.price}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
                <div className="count">
                  <span className="minus">-</span>
                  <input
                    type="text"
                    value={product.count}
                    onChange={() => this.handleCountChange}
                  />
                  <span className="plus">+</span>
                </div>
                <div className="total">
                  <span>小计</span>￥{product.discount * product.count}
                </div>
                <div className="action">
                  <span>删除</span>
                </div>
              </li>
            ))
          ) : (
            <li className="else">购物车是空的哦~~~</li>
          )}
        </ul>
        <ul className="action-bar">
          <li className="label">
            <label />
            <span>全选</span>
          </li>
          <li className="info" />
          <li className="count">
            已选商品<span className="number">{}</span>件
          </li>
          <li className="total">
            合计<span className="number">{}</span>
          </li>
          <li className="pay">结 算</li>
        </ul>
      </div>
    )
  }
}

export default MyCart
