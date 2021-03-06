import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./reducers/rootReducer";

function saveToLocalStorage(state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}

function loadFromLocalStorage() {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;