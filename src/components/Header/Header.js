/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Navigation from '../Navigation';
import AppBar from 'material-ui/lib/app-bar';

import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

@withStyles(styles)
class Header extends Component {
  constructor() {
    super();

    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
    this.state = {
      title: null,
    };
  }

  componentDidMount() {
    this.state.title = document.title;
  }

  onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }

  render() {
    const menuItems = [
      {type: 'Link', value: '/contact', icon: <RemoveRedEye />, text: 'Contact'},
      {type: 'Link', value: '/about', icon: <PersonAdd />, text: 'About'},
    ];

    return (
      <div className="Header">
        <AppBar
          title={this.state.title}
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          />

        <Navigation ref="leftNav" menuItems={menuItems}/>
      </div>
    );
  }
}

export default Header;
