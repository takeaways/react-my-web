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
import Scroll from 'pages/Scroll'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      {/* <App /> */}
      <Scroll />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
)
