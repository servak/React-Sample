/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import Location from '../../core/Location';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';

import {
  List,
  ListItem,
} from 'material-ui';

import {
  SocialPersonAdd,
  ImageRemoveRedEye,
} from 'material-ui/lib/svg-icons';

@withStyles(styles)
class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  jumpLink(item) {
    Location.pushState('state', item.value, null);
  }

  renderListItems(items) {
    return items.map((item, index) => {
      return <ListItem key={index} primaryText={item.text} leftIcon={item.icon} onTouchTap={this.jumpLink.bind(this, item)}/>;
    });
  }

  render() {
    const menuItems = [
      {type: 'Link', value: '/contact', icon: <ImageRemoveRedEye />, text: 'Contact'},
      {type: 'Link', value: '/about', icon: <SocialPersonAdd />, text: 'About'},
    ];

    return (
      <div>
        <List>
          {this.renderListItems(menuItems)}
        </List>
      </div>
    );
  }
}

export default Navigation;
