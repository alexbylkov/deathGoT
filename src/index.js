import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import './index.css'
import App from './components/app'
import ErrorBoundary from './hoc/errorBoundary'

import 'antd/dist/antd.css'

const app = (
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
