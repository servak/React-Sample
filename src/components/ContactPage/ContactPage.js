import React, { Component } from 'react';
import styles from './ContactPage.css';
import withStyles from '../../decorators/withStyles';
import {changeTitle} from '../../actions/TitleAction';
import UserStore from '../../stores/UserStore';

import {
  List,
  ListItem,
  Avatar,
} from 'material-ui';

const title = 'Contact Us';
@withStyles(styles)
class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      strawHatPirates: UserStore.getStrawHatPirates(),
      sevenWarlordsOfTheSea: UserStore.getSevenWarlordsOfTheSea(),
    };
  }

  componentWillMount() {
    UserStore.addChangeListener(this._onChange.bind(this));
  }

  componentDidMount() {
    changeTitle(title);
  }

  getListItem(user, index) {
    const avator = (<Avatar>{user[0]}</Avatar>);

    return (
      <ListItem
        key={index}
        leftAvatar={avator}
        primaryText={user}
        />
    );
  }

  _onChange() {
    this.setState({
      strawHatPirates: UserStore.getStrawHatPirates(),
      sevenWarlordsOfTheSea: UserStore.getSevenWarlordsOfTheSea(),
    });
  }

  render() {
    const strawHatPirates = this.state.strawHatPirates.map(this.getListItem);
    const sevenWarlordsOfTheSea = this.state.sevenWarlordsOfTheSea.map(this.getListItem);

    return (
      <div className="ContactPage">
        <div className="ContactPage-container">
          <h1>{title}</h1>
          <List subheader="麦わら海賊団">
            {strawHatPirates}
          </List>
          <List subheader="王下七武海">
            {sevenWarlordsOfTheSea}
          </List>
        </div>
      </div>
    );
  }

}

export default ContactPage;
