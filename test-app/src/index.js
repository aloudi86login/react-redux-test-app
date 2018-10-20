import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from '../src/store/store';
import { createBrowserHistory } from 'history';
import {initialState } from './store/initialState';
import {fetchPosts} from '../src/actions/postActions';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const store = configureStore(initialState, history);
store.dispatch(fetchPosts());

render(
  <Provider store={store}>
    <App history = {history} />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
