/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import Location from '../../core/Location';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuDivider from 'material-ui/lib/menus/menu-divider';
import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

import CardHeader from 'material-ui/lib/card/card-header'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

class Navigation extends Component {
  static propTypes = {
    menuItems: PropTypes.array.isRequired,
  };

  constructor() {
    super();
    this.toggle = this.toggleDockedLeftNavClick.bind(this);
  };

  toggleDockedLeftNavClick() {
    this.refs.leftNav.toggle();
  };

  jumpLink(href) {
    Location.pushState("state", href, null);
    this.toggleDockedLeftNavClick();
  };

  renderListItems(items) {
    return items.map(item => {
      return <ListItem primaryText={item.text} leftIcon={<RemoveRedEye />} onTouchTap={this.jumpLink.bind(this, item.value)}/>;
    });
  };

  render() {
    let items = this.props.menuItems;

    return (
      <LeftNav ref="leftNav" docked={false}>
        <CardHeader title="Title" subtitle="Subtitle"/>
        <List>
          {this.renderListItems(items)}
        </List>
      </LeftNav>
    );
  };

}

export default Navigation;
