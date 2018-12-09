import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import TopBar from './TopBar'
import Footer from './Footer'
import Sider from './Sider'
import Home from '../containers/Home'
import User from '../containers/User'

const HomeContainer = Loadable({
  loader: () => import('../containers/Home'),
  loading: Home
})

const UserContainer = Loadable({
  loader: () => import('../containers/User'),
  loading: User
})

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/user" component={UserContainer} />
          <Sider />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
