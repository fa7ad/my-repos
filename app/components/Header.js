import React, {Component} from 'react';
import {Link} from 'react-router';

import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

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

  handleRequestClose =  () => {
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
        <Popover
          open={this.state.menuOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu onItemTouchTap={this.handleRequestClose}>
            <MenuItem
              primaryText='My Repos'
              containerElement={<Link to='/'/>}
            />
            <MenuItem
              primaryText='About'
              containerElement={<Link to='/about'/>}
            />
          </Menu>
        </Popover>
      </header>
    );
  }
}

export default Header;
