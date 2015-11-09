/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../../theme';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired,
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  };

  static defaultProps = {
    title: 'Title',
    description: '',
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  }

  getStyles() {
    return {
      html: {
        color: '#222',
        fontWeight: 100,
        fontSize: '1em',
        fontFamily: "'Segoe UI', 'HelveticaNeue-Light', sans-serif",
        lineHeight: 1.375,
        height: '100%',

      },
      body: {
        height: '100%',
      },
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <html className="no-js" lang="" style={styles.html}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <style id="css" dangerouslySetInnerHTML={{__html: this.props.css}} />
      </head>
      <body style={styles.body}>
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} />
        <script src="/app.js"></script>
      </body>
      </html>
    );
  }

}

export default Html;
