/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './ContactPage.css';
import withStyles from '../../decorators/withStyles';
import {changeTitle} from '../../actions/TitleAction';

const title = 'Contact Us';
@withStyles(styles)
class ContactPage extends Component {
  componentDidMount() {
    changeTitle(title);
  }

  render() {
    return (
      <div className="ContactPage">
        <div className="ContactPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default ContactPage;
