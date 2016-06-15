import * as React from 'react';
import {Component} from 'react';

const title = require('title');

import State from '../Store';

class About extends Component<{}, {}>{
  componentWillMount(){
    State.title = 'About';
    title('About - %o');
  }

  render(){
    return (
      <div className='text-center'>
        <h1>About me</h1>
        <h3>&mdash; from React and TS</h3>
      </div>
    );
  }
};

export default About;
