import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

@observer
class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
      helpOpen: false
    };
  }

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      menuOpen: true,
      anchorEl: event.currentTarget
    });
  }

  handleClose = () => {
    this.setState({
      menuOpen: false,
      helpOpen: false
    });
  }

  showHelp = () => {
    this.setState({
      helpOpen: true
    });
  }

  render(){
    return (
      <header>
        <AppBar
          title={this.props.title + this.props.pageTitle}
          onLeftIconButtonTouchTap={this.handleTouchTap}
          iconElementRight={<FlatButton label="Search" onTouchTap={this.showHelp}/>}
        />
        <Snackbar
          open={this.state.helpOpen}
          message="Use your browser's search functionality to search. (Ctrl + F)"
          autoHideDuration={1500}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.menuOpen}
          onRequestChange={(open) => this.setState({menuOpen: open})}
        >
          <MenuItem
            primaryText='My Repos'
            containerElement={<Link to='/'/>}
            onTouchTap={this.handleClose}
          />
          <MenuItem
            primaryText='About'
            containerElement={<Link to='/about'/>}
            onTouchTap={this.handleClose}
          />
        </Drawer>
      </header>
    );
  }
}

export default Header;
