import React, {Component} from 'react';
import title from 'title';

import State from '../Store';

class About extends Component {
  componentWillMount(){
    State.title = 'About';
    title('About - %o');
  }

  render(){
    return (
      <div className='text-center'>
        <h1>About this project</h1>
        <hr />
        <h3>This is just me trying out material-ui and react and the GitHub API.</h3>
      </div>
    );
  }
};

export default About;
