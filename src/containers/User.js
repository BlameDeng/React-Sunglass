import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/user/Login'
import { login, setCart } from '../actions'
import UserInfo from '../components/user/UserInfo'

class UserContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const user = this.props.user
    return (
      <>
        {user ? (
          <UserInfo {...this.props}> </UserInfo>
        ) : (
          <Login {...this.props} />
        )}
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispathToProps = dispath => ({
  login: user => dispath(login(user)),
  setCart: cart => dispath(setCart(cart))
})

export default connect(
  mapStateToProps,
  mapDispathToProps
)(UserContainer)
