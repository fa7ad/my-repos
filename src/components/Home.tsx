import * as React from 'react';
import {Component} from 'react';

const title = require('title');

import State from '../Store';
import Repo from './Repo';

class Home extends Component<{}, {}>{
  componentWillMount(){
    State.title = 'Home';
    title('Home - %o');
  }

  render(){
    return (
      <div className='home'>
        <div className="col-md-4">
          <Repo
            name="my-repos"
            languages="TypeScript, Stylus, HTML"
            description="Testing out React"
            type="source"
            link="https://github.com/fa7ad/my-repos"
          />
        </div>
      </div>
    );
  }
};

export default Home;
