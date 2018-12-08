import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './style/Global.scss'
import './style/App.scss'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
