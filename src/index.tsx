import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// components
import App from './App';
// store
import store from './common/store';
import GlobalStyles from './common/components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
