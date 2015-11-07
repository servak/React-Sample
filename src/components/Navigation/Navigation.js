/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import Location from '../../core/Location';
import mui, {
  LeftNav,
  CardHeader,
  List,
  ListItem,
} from 'material-ui';

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
      return <ListItem primaryText={item.text} leftIcon={item.icon} onTouchTap={this.jumpLink.bind(this, item.value)}/>;
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
