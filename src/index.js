import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';

import './index.css';

const store = createStore(searchRobots);

ReactDOM.render(
  /* jshint ignore:start */
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
  /* jshint ignore:end */
);
registerServiceWorker();
