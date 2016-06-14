import * as React from 'react';
import {Component} from 'react';

import State from '../Store';

class About extends Component<{}, {}>{
  componentWillMount(){
    State.setTitle('About')
  }

  render(){
    return (
      <div className='text-center'>
        <h1>Hello, World!</h1>
        <h3>&mdash; from React and TS</h3>
      </div>
    );
  }
};

export default About;
