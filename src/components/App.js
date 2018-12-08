import React, { Component } from 'react'
import Loadable from 'react-loadable'
import Home from '../containers/Home'

const HomeContainer = Loadable({
  loader: () => import('../containers/Home'),
  loading: Home
})
class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
      </div>
    )
  }
}

export default App
