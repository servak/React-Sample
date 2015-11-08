/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Navigation from '../Navigation';
import TitleStore from '../../stores/TitleStore';

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
      navigation: true,
    };
  }

  componentWillMount() {
    TitleStore.addChangeListener(this._onChange.bind(this));
  }

  onLeftIconButtonTouchTap() {
    this.setState({
      navigation: !this.state.navigation,
    });
  }

  _onChange() {
    this.setState({title: TitleStore.get()});
  }

  getStyles() {
    const navWidth = 20;
    const navPadding = 1;

    let styles = {
      app: {
        height: '100%',
      },
      navigation: {
        display: 'inline-block',
        height: '90%',
        verticalAlign: 'top',
        overflowX: 'auto',
        overflowY: 'auto',
        marginTop: '10px',
        width: (navWidth - navPadding) + '%',
        paddingLeft: navPadding + '%',
      },
      contents: {
        height: '90%',
        width: (100 - navWidth) + '%',
        display: 'inline-block',
        position: 'relative',
        overflowY: 'auto',
        overflowX: 'hidden',
      },
    };

    if (!this.state.navigation) {
      styles.navigation.display = 'none';
      styles.contents.width = '100%';
    }

    return styles;
  }

  render() {
    const styles = this.getStyles();

    return !this.props.error ? (
      <div style={styles.app}>
        <Header
          title={this.state.title}
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          zDepth={2}
          />
        <div style={styles.navigation}>
          <Navigation />
        </div>
        <div className="ContentsWrapper" style={styles.contents}>
          {this.props.children}
        </div>
      </div>
    ) : this.props.children;
  }

}

export default App;
