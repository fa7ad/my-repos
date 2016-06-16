import * as React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';

const Routes: JSX.Element = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}/>
    </Route>
  </Router>
);

export default Routes;
