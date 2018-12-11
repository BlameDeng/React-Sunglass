import React, { Component } from 'react'
import {connect} from 'react-redux'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <main className="main-product">
        <div className="tags-bar">
          <a href="/home.html" target="_blank" className="tag">
            首页
          </a>
          <x-icon name="next" className="icon" />
          <a href="/home.html#/category?tab=all" target="_blank" className="tag">
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
          <a className="tag">
            {}
          </a>
        </div>
        <div className="content">
          <div className="imgs">
            <div className="show-img">
              <img />
              <img />
            </div>
            <div className="focus-img">
              <div className="cover">
                <img />
              </div>
              <div className="feature">
                <img />
              </div>
            </div>
          </div>
          <div className="goods-wrapper">
            <div className="goods-info">
              <div className="title">
                <h2 className="main-title">{}</h2>
                <h4 className="sub-title">品牌授权 正品保障 急速物流</h4>
              </div>
              <div className="goods-price">
                  <div className="origin-price">
                    <span className="label w3">参考价</span>
                    <span>￥{}.00</span>
                  </div>
                  <div className="price">
                    <span className="label w3">优惠价</span>
                    <span>￥</span>
                    <span className="number">{}</span>
                    <span>.00</span>
                  </div>
                  <div className="price">
                    <span className="label w2">价格</span>
                    <span>￥</span>
                    <span className="number">{}</span>
                    <span>.00</span>
                  </div>
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
        <div className="detail-container">
          <ul className="navbar">
            <li>商品详情</li>
            <li>
              累计评价
              <span className="number">{}</span>
            </li>
          </ul>
          <div className="content-area">
            <div className="detail">
              <p className="detail-item">{}</p>
            </div>
            <div className="evaluation">
              <div className="add-evaluation">
                <h2>其他买家，需要你的建议哦！</h2>
                <div className="textarea-wrapper">
                  <textarea />
                  <span className="tips">
                    <span>{}</span> / 300
                  </span>
                </div>
                <div className="action">
                  <div className="btn" role="button">
                    提交评价
                  </div>
                </div>
              </div>
              <ul className="content">
                <li v-for="item in evaluation" className="comment">
                  <div className="user">
                    <div className="avatar">
                      <x-icon name="avatar" className="icon" />
                    </div>
                    <span className="username">{}</span>
                    <span className="time">{}</span>
                  </div>
                  <p className="evaluation-content">{}</p>
                </li>
                <li>
                  <span>该商品还没有评论</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default connect()(Product)
