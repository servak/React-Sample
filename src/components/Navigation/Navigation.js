/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import Link from '../Link';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuDivider from 'material-ui/lib/menus/menu-divider';
import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

import CardHeader from 'material-ui/lib/card/card-header'

class Navigation extends Component {
  constructor() {
    super();
    this.toggle = this.toggleDockedLeftNavClick.bind(this);
  };

  toggleDockedLeftNavClick() {
    this.refs.leftNav.toggle();
  };

  render() {
    return (
      <LeftNav ref="leftNav" docked={false}>
        <CardHeader title="Title" subtitle="Subtitle"/>
        <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
        <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
      </LeftNav>
    );
  };

}

export default Navigation;
