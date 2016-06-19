import * as React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';
import MyRepos from './components/MyRepos';
import About from './components/About';

const Routes: JSX.Element = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MyRepos} />
      <Route path="about" component={About}/>
    </Route>
  </Router>
);

export default Routes;
