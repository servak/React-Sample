/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Navigation from '../Navigation';
import AppBar from 'material-ui/lib/app-bar';
import TitleStore from '../../stores/TitleStore';

import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

@withStyles(styles)
class Header extends Component {
  constructor(props) {
    super(props);

    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
    this.state = {
      title: '',
    };
  }

  componentDidMount() {
    TitleStore.addChangeListener(this._onChange.bind(this));
  }

  onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }

  _onChange() {
    this.setState({title: TitleStore.get()});
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

        <Navigation ref="leftNav" menuItems={menuItems} className="Navigation"/>
      </div>
    );
  }
}

export default Header;
