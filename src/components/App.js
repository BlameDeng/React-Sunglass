import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import TopBar from './TopBar'
import Footer from './Footer'
import Sider from './Sider'
import Home from '../containers/Home'
import User from '../containers/User'
import Cart from '../containers/Cart'

const HomeContainer = Loadable({
  loader: () => import('../containers/Home'),
  loading: Home
})

const UserContainer = Loadable({
  loader: () => import('../containers/User'),
  loading: User
})

const CartContainer = Loadable({
  loader: () => import('../containers/Cart'),
  loading: Cart
})

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/user" component={UserContainer} />
          <Route path="/cart" component={CartContainer} />
          <Sider />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
