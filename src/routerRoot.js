import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes.js';
import config from '../config'; // <-- Configuration file
import Essentials from './essentials.js'; // <-- Essentials file

// const env = (process.env.NODE_ENV || 'production').trim();
// Skip if no Analytics ID provided.
if(Essentials.env === 'production' && config.googleAnalytics != null){
  var ReactGA = require('react-ga');
  ReactGA.initialize(config.googleAnalytics);
}

// Will be called on every route change
function onUpdate() {
  //simulate standard browser behavior and scroll page to top.
  window.scrollTo(0, 0)

  // If we have a google Analyitics ID.
  if(Essentials.env === 'production' && config.googleAnalytics != null){
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
}

export default class routerRoot extends React.Component {
  render() {
    return (
        <Router history={browserHistory} routes={routes} onUpdate={onUpdate}/>
    );
  }
}
