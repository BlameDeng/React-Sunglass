import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Home from '../containers/Home'
import TopBar from './TopBar'
import Footer from './Footer'
import Sider from './Sider'

const HomeContainer = Loadable({
  loader: () => import('../containers/Home'),
  loading: Home
})
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Router>
          <Route exact path="/:category?" component={HomeContainer} />
        </Router>
        <Sider />
        <Footer />
      </div>
    )
  }
}

export default App
