import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from "react-redux";
import {compose, applyMiddleware, createStore} from 'redux';
import trailsReducer from "./reducers/trailsReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(trailsReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
    <span>Made with ❤️ by <a href='https://github.com/aj-rom'>A.J. Romaniello</a></span>
  </Provider>,
  document.getElementById('root')
);
