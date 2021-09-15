import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from "react-redux";
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
    <p>Made with ❤️ by <a href='https://github.com/aj-rom'>A.J. Romaniello</a></p>
  </Provider>,
  document.getElementById('root')
);
