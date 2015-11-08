/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import AppBar from 'material-ui/lib/app-bar';

@withStyles(styles)
class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    zDepth: PropTypes.integer.isRequired,
    onLeftIconButtonTouchTap: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar
        title={this.props.title}
        onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
        zDepth={this.props.zDepth}
        />
    );
  }
}

export default Header;
