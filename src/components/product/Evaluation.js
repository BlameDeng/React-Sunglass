import React, { Component } from 'react'

class Evaluation extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return (        <div className="detail-container">
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
      </div>)
    }
}

export default Evaluation
