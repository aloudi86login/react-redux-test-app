import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer.js';

export default function configurreStore(initialState, history) {

  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware)));
}
