import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  appBar: {
  height: 50
  }
}, typeof window === 'undefined' ? {userAgent: 'all'} : null);

interface AppProps {}
interface AppStates {}

class App extends React.Component<AppProps, AppStates> {
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          {this.props.children || 'Oh hello, Its 404!'}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
