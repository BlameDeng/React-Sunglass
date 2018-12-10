import React, { Component } from 'react'
import Header from '../Header'
import UserNav from './UserNav'
import UserProfile from './UserProfile'

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="user-info">
        <Header />
        <UserNav {...this.props} />
        <UserProfile {...this.props} />
      </div>
    )
  }
}

export default UserInfo
