import * as React from 'react';
import {Component} from 'react';

import State from '../Store';

class Home extends Component<{}, {}>{
  componentWillMount(){
    State.setTitle('Home')
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
