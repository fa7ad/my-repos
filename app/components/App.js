import React, {Component} from 'react';
import {observer} from 'mobx-react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Container from './bootstrap/Container';
import Header from './Header';
import State from '../Store';

const muiTheme = getMuiTheme({
  AppBar: {
    height: 100
  }
}, null);

@observer
class App extends Component {
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header title="@fa7ad" pageTitle={State.title || ""}/>
          <Container fluid={true}>
            {this.props.children || 'Oh hello, Its 404!'}
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
