import React, { Component } from 'react'
import { Spin } from 'antd'

class NewArrival extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    !this.props.newArrival.data && this.props.getNewArrival()
  }

  render() {
    const { isFetching, data } = this.props.newArrival
    return (
      <div className="new-arrival">
        <h1 className="title"> New Arrival </h1>
        <div className="product-wrapper">
          {isFetching ? (
            <div className="spin-wrapper">
              <Spin size="large" />
            </div>
          ) : (
            ''
          )}
          {data && data.length
            ? data.map(product => (
                <div className="product" key={product.id}>
                  <h2 className="name"> {product.name} </h2>
                  <img src={product.sub_image} alt="product" />
                  <span className="price"> ￥{product.discount} </span>
                  <div className="add"> 添加到购物车 </div>
                </div>
              ))
            : ''}
        </div>
      </div>
    )
  }
}

export default NewArrival
