import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/material-design-lite/material.min.js';
import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import './styles/styles.css';
import './components/libs/material.components.ext.min.css';
import './components/libs/material.components.ext.min.js';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadEmployeeList} from './actions/employeeActions';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
 
const store = configureStore();
//store.dispatch(loadEmployeeList());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);