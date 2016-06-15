import * as React from 'react';
import {Component} from 'react';

const title = require('title');

import State from '../Store';

class Home extends Component<{}, {}>{
  componentWillMount(){
    State.title = 'Home';
    title('Home - %o');
  }

  render(){
    return (
      <div className='text-center home'>
        <h1>Hello, World!</h1>
        <h3>&mdash; from React and TS</h3>
      </div>
    );
  }
};

export default Home;
