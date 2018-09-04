import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import {
  createLogger
} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {
  searchRobots,
  requestRobots
} from './reducers';

import './index.css';

const logger = createLogger();

const rootReducers = combineReducers({
  searchRobots,
  requestRobots
});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  /* jshint ignore:start */
  <Provider store = {store}>
    <App />
  </Provider>, 
  document.getElementById('root')
  /* jshint ignore:end */
);
registerServiceWorker();