import * as React from 'react';
import {Component} from 'react';

interface BSProps {
  fluid: boolean;
  children?: JSX.Element | string;
}

class Container extends Component<BSProps, {}>{

  render(){
    return (
      <div className={'main ' + (this.props.fluid ? 'container-fluid' : 'container')}>
        {this.props.children}
      </div>
    );
  }
}


export default Container;