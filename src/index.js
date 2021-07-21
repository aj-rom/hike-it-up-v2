import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from "react-redux";
import {compose, applyMiddleware, createStore, combineReducers} from 'redux';
import trailsReducer from "./reducers/trailsReducer";
import thunk from "redux-thunk";
import accountReducer from "./reducers/accountReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ trailsReducer, accountReducer})
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
    <span>Made with ❤️ by <a href='https://github.com/aj-rom'>A.J. Romaniello</a></span>
  </Provider>,
  document.getElementById('root')
);
