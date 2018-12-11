import React, { Component } from 'react'
import * as api from '../../api'
import formatDate from '../../utils/formatDate'

class Evaluation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      evaluation: null,
      tab: 'detail',
      content: ''
    }
  }

  componentDidMount() {
    console.log(1);
    
    const { orders } = this.props
    const  id  = parseInt(this.props.match.params.id)
    //获取用户订单
    !orders &&
      api
        .getOrders()
        .then(res => {
          this.props.setOrders(res.data)
          console.log(this.canEvaluate(id));
          
        })
        .catch(() => {})
        if(orders){
          console.log(this.canEvaluate(id));
        }
    //获取商品评论
    api
      .getEvaluation(id)
      .then(res => {
        this.setState({
          evaluation: res.data.sort((prev, next) => next.id - prev.id)
        })
      })
      .catch(() => {})
  }

  canEvaluate(id) {
    const { orders } = this.props
    return orders.find(
      order => order.status === 'toEvaluate' &&order.product.id===id
    )
  }

  handleClickTab(tab) {
    if (this.state.tab !== tab) {
      this.setState({ tab })
    }
  }

  handleTextarea(e) {
    this.setState({
      content: e.target.value
    })
  }

  render() {
    const { evaluation, tab, content } = this.state
    const { product } = this.props
    return (
      <div className="detail-container">
        <ul
          className={`navbar ${tab === 'detail' ? 'active' : ''}`}
          style={{ marginBottom: 0 }}
        >
          <li
            onClick={() => this.handleClickTab('detail')}
            className={tab === 'detail' ? 'active' : ''}
          >
            商品详情
          </li>
          <li
            onClick={() => this.handleClickTab('evaluation')}
            className={tab === 'evaluation' ? 'active' : ''}
          >
            累计评价
            <span className="number">{evaluation && evaluation.length}</span>
          </li>
        </ul>
        <div className="content-area">
          {tab === 'detail' ? (
            <div className="detail">
              {product &&
                product.detail.split('\n').map((item, index) => (
                  <p className="detail-item" key={index}>
                    {item}
                  </p>
                ))}
            </div>
          ) : (
            <div className="evaluation">
              <div className="add-evaluation">
                <h2>其他买家，需要你的建议哦！</h2>
                <div className="textarea-wrapper">
                  <textarea
                    value={content}
                    onChange={this.handleTextarea.bind(this)}
                  />
                  <span className="tips">
                    <span>{content.length}</span> / 300
                  </span>
                </div>
                <div className="action">
                  <div className="btn" role="button">
                    提交评价
                  </div>
                </div>
              </div>
              <ul className="content">
                {evaluation && evaluation.length ? (
                  evaluation.map(item => (
                    <li className="comment" key={item.id}>
                      <div className="user">
                        <div className="avatar">
                          <img
                            src={require('../../style/img/avatar.png')}
                            alt="avatar"
                          />
                        </div>
                        <span className="username">
                          {item.nickyname || item.username}
                        </span>
                        <span className="time">
                          {formatDate(item.createdAt)}
                        </span>
                      </div>
                      <p className="evaluation-content">{item.content}</p>
                    </li>
                  ))
                ) : (
                  <li>
                    <span>该商品还没有评论</span>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Evaluation
