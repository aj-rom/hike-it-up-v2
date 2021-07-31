import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from "react-redux";
import {compose, applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from "redux-thunk";

import accountReducer from "./reducers/accountReducer";
import trailsReducer from "./reducers/trailsReducer";
import userReducer from "./reducers/userRedcuer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ trailsReducer, accountReducer, userReducer })
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
    <p>Made with ❤️ by <a href='https://github.com/aj-rom'>A.J. Romaniello</a></p>
  </Provider>,
  document.getElementById('root')
);
