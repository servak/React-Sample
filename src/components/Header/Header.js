/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';
import AppBar from 'material-ui/lib/app-bar';

@withStyles(styles)
class Header extends Component {
  constructor() {
    super();

    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
    this.state = {
      title: "",
    }
  };

  componentDidMount() {
    this.setState({
      title: document.title,
    });
  };

  onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  };

  render() {
    let menuItems = [
      {type: "Link", value: "/contact", icon: "removeRedEye", text: "Contact"},
      {type: "Link", value: "/about", icon: "removeRedEye", text: "About"},
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
  };
}

export default Header;
