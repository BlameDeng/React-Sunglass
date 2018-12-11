import React, { Component } from 'react'
import * as api from '../../api'

class ProductInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null,
      tab: 'main'
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) {
      api
        .getSingleProduct(parseInt(id))
        .then(res => {
          this.setState({
            product: res.data
          })
        })
        .catch(() => {
          this.props.history.push('/')
        })
    }
  }

  handleMouseEnter(tab) {
    tab !== this.state.tab && this.setState({ tab })
  }

  render() {
    const { product, tab } = this.state
    return (
      <>
        <div className="tags-bar">
          <a href="/home.html" target="_blank" className="tag">
            首页
          </a>
          <x-icon name="next" className="icon" />
          <a
            href="/home.html#/category?tab=all"
            target="_blank"
            className="tag"
          >
            全部
          </a>
          <x-icon name="next" className="icon" />
          <a
            href="/home.html#/category?tab=male"
            target="_blank"
            className="tag"
          >
            男士
          </a>
          <a
            href="/home.html#/category?tab=female"
            target="_blank"
            className="tag"
          >
            女士
          </a>
          <x-icon name="next" className="icon" />
          <a className="tag">{}</a>
        </div>
        <div className="content">
          <div className="imgs">
            <div className="show-img">
              {tab === 'main' ? (
                <img src={product && product.main_image} alt="main" />
              ) : (
                <img src={product && product.sub_image} alt="sub" />
              )}
            </div>
            <div className="focus-img">
              <div
                className={`cover ${tab === 'main' ? 'active' : ''}`}
                onMouseEnter={() => {
                  this.handleMouseEnter('main')
                }}
              >
                <img src={product && product.main_image} alt="main" />
              </div>
              <div
                className={`feature ${tab === 'sub' ? 'active' : ''}`}
                onMouseEnter={() => {
                  this.handleMouseEnter('sub')
                }}
              >
                <img src={product && product.sub_image} alt="sub" />
              </div>
            </div>
          </div>
          <div className="goods-wrapper">
            <div className="goods-info">
              <div className="title">
                <h2 className="main-title">{product && product.title}</h2>
                <h4 className="sub-title">品牌授权 正品保障 急速物流</h4>
              </div>
              <div className="goods-price">
                {product ? (
                  product.discount < product.price ? (
                    <>
                      <div className="origin-price">
                        <span className="label w3">参考价</span>
                        <span>￥{product && product.price.toFixed(2)}</span>
                      </div>
                      <div className="price">
                        <span className="label w3">优惠价</span>
                        <span>￥</span>
                        <span className="number">
                          {product && product.discount}
                        </span>
                        <span>.00</span>
                      </div>
                    </>
                  ) : (
                    <div className="price">
                      <span className="label w2">价格</span>
                      <span>￥</span>
                      <span className="number">
                        {product && product.discount}
                      </span>
                      <span>.00</span>
                    </div>
                  )
                ) : (
                  ''
                )}
                {/* {product && product.discount < product.price ? (
                  <>
                    <div className="origin-price">
                      <span className="label w3">参考价</span>
                      <span>￥{product && product.price.toFixed(2)}</span>
                    </div>
                    <div className="price">
                      <span className="label w3">优惠价</span>
                      <span>￥</span>
                      <span className="number">
                        {product && product.discount}
                      </span>
                      <span>.00</span>
                    </div>
                  </>
                ) : (
                  ''
                )}
                {product && product.discount === product.price ? (
                  <div className="price">
                    <span className="label w2">价格</span>
                    <span>￥</span>
                    <span className="number">
                      {product && product.discount}
                    </span>
                    <span>.00</span>
                  </div>
                ) : (
                  ''
                )} */}
                <div className="ems">
                  <span className="label w2">快递</span>
                  <span>EMS</span>
                  <span className="number"> 0.00 </span>
                  <span>免运费</span>
                </div>
              </div>
              <div className="count">
                <div className="label w2">数量</div>
                <span className="minus">-</span>
                <input type="text" />
                <span className="plus">+</span>
                <span className="remain">库存充足</span>
              </div>
              <div className="service">
                <div className="label w2">服务</div>
                <x-icon name="return" className="icon" />
                <span>七天无理由退货</span>
              </div>
            </div>
            <div className="actions">
              <div className="pay" role="button">
                立即购买
              </div>
              <div className="add-to-cart" role="button">
                <x-icon name="cart" className="icon" />
                加入购物车
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProductInfo
