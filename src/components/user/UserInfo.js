import React, { Component } from 'react'
import Header from '../Header'
import UserNav from './UserNav'

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="user-info">
        <Header />
        <UserNav />
      </div>
    )
  }
}

export default UserInfo
