import * as React from 'react';
import {observer} from 'mobx-react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Container from './bootstrap/Container';
import Header from './Header';
import State from '../Store';

const muiTheme = getMuiTheme({
  appBar: {
  height: 50
  }
}, typeof window === 'undefined' ? {userAgent: 'all'} : null);

interface AppProps {
  children: JSX.Element | string;
}

@observer
class App extends React.Component<AppProps, {}> {
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header title="@fa7ad" pageTitle={State.title || ""}/>
          <Container fluid={false}>
            {this.props.children || 'Oh hello, Its 404!'}
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
