import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import 'antd/dist/antd.css'
import './style/Global.scss'
import './style/App.scss'
import './style/TopBar.scss'
import './style/Slide.scss'
import './style/HomeNavBar.scss'
import './style/NewArrival.scss'
import './style/HomeIndex.scss'
import './style/Footer.scss'
import './style/Sider.scss'
import * as serviceWorker from './serviceWorker'
import { initStore } from './store'

ReactDOM.render(
  <Provider store={initStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
