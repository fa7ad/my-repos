import * as React from 'react';
import {Component} from 'react';

class Container extends Component {
  render(){
    return (
      <div className={'main ' + (this.props.fluid ? 'container-fluid' : 'container')}>
        {this.props.children}
      </div>
    );
  }
}


export default Container;