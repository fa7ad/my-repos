import * as React from 'react';
import {Link} from 'react-router';

import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

interface Props{
  title: string;
  pageTitle: string;
}


interface States {
  menuOpen: boolean;
  anchorEl?: any;
}

class Header extends React.Component<Props, States> {
  constructor() {
    super();
    this.state = {
      menuOpen: false
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
      menuOpen: false
    });
  }

  render(){
    return (
      <header>
        <AppBar
          title={this.props.title + this.props.pageTitle}
          onLeftIconButtonTouchTap={this.handleTouchTap}
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