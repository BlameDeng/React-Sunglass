import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductInfo from '../components/product/ProductInfo'
import Evaluation from '../components/product/Evaluation'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <main className="main-product">
        <ProductInfo {...this.props} /> <Evaluation {...this.props} />
      </main>
    )
  }
}

export default connect()(Product)
