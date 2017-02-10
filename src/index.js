//Application Entry point
//everything starts here

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routerRoot'; // <--
import configuration from '../config'; // <-- Configuration file

//Element of which react will control
const rootEl = document.getElementById(configuration.ReactRootID);

ReactDOM.render(
    <App />,
  rootEl
);

//HOT reloading...
if (module.hot) {
  module.hot.accept('./routerRoot', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./routerRoot').default;
    ReactDOM.render(
         <NextApp />,
      rootEl
    );
  });
}
