/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Navigation from '../Navigation';
import TitleStore from '../../stores/TitleStore';

import {
  AppBar,
} from 'material-ui';

const NavWidth = 20;

@withContext
@withStyles(styles)
class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
    this.state = {
      title: TitleStore.get(),
      width: NavWidth,
    };
  }

  componentWillMount() {
    TitleStore.addChangeListener(this._onChange.bind(this));
  }

  onLeftIconButtonTouchTap() {
    if (this.state.width === NavWidth) {
      this.setState({width: 0});
    } else {
      this.setState({width: NavWidth});
    }
  }

  getNavStyle() {
    const NavWidthPaddingLeft = 1;
    if (this.state.width === NavWidth) {
      return {
        width: (this.state.width - NavWidthPaddingLeft + '%'),
        paddingLeft: (NavWidthPaddingLeft + '%'),
      };
    }

    return {display: 'none'};
  }

  _onChange() {
    this.setState({title: TitleStore.get()});
  }

  render() {
    const navCss = this.getNavStyle();
    const contentCss = {
      width: (100 - this.state.width + '%'),
    };

    return !this.props.error ? (
      <div style={{height: '100%'}}>
        <AppBar
          title={this.state.title}
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          zDepth={2}
          />
        <div style={navCss} className="Navigation">
          <Navigation />
        </div>
        <div className="ContentsWrapper" style={contentCss}>
          {this.props.children}
        </div>
      </div>
    ) : this.props.children;
  }

}

export default App;
