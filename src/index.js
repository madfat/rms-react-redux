import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/material-design-lite/material.min.js';
import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import './styles/styles.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);