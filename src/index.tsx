import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '@fortawesome/fontawesome-free/js/all.js'
// components
import App from './App'
// store
import store from './stores'
import GlobalStyles from './components/common/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
)
