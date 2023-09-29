import store from './redux/redux-store'
import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

render((
  <Provider store={store}>
    <App />
  </Provider>
),
document.getElementById('root'),
);

