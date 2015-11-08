/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';

import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  TextField,
  IconButton,
  Avatar,
  DropDownIcon,
} from 'material-ui';

import {
  ImageDehaze,
  ActionSearch,
  ActionFace,
} from 'material-ui/lib/svg-icons';

let timer = null;

@withStyles(styles)
class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    zDepth: PropTypes.number.isRequired,
    onLeftIconButtonTouchTap: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.inputChange = this._inputChange.bind(this);
  }

  getStyles() {
    let themeVariables = {
      height: 55,
      textColor: 'white',
    };
    let iconButtonSize = 48;

    return {
      title: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
        paddingTop: 0,
        letterSpacing: 0,
        fontSize: 24,
        lineHeight: themeVariables.height + 'px',
      },
      iconButton: {
        marginTop: (themeVariables.height - iconButtonSize) / 2,
        marginRight: 8,
        marginLeft: -16,
      },
      iconSvg: {
        marginTop: (themeVariables.height - iconButtonSize) / 2,
        marginLeft: '16px',
        marginRight: '10px',
      },
      textField: {
        fontSize: '18px',
      },
    };
  }

  _inputChange(e) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      console.log(e.target.value);
    }, 500);
  }

  render() {
    const styles = this.getStyles();
    const iconMenuItems = [
      { payload: '1', text: 'Download' },
      { payload: '2', text: 'More Info' }
    ];

    return (
      <Toolbar
        zDepth={this.props.zDepth}
        >

        <ToolbarGroup key={0}>
          <IconButton style={styles.iconButton} onTouchTap={this.props.onLeftIconButtonTouchTap}>
            <ImageDehaze />
          </IconButton>
        </ToolbarGroup>

        <ToolbarGroup key={1}>
          <ToolbarTitle text={this.props.title} style={styles.title}/>
          <ActionSearch style={styles.iconSvg}/>
          <TextField
            style={styles.textField}
            hintText="search word"
            onChange={this.inputChange}
            />
        </ToolbarGroup>

        <ToolbarGroup key={2} float="right">
          <DropDownIcon iconClassName="icon-navigation-expand-more" menuItems={iconMenuItems} />
          <Avatar style={styles.iconSvg} icon={<ActionFace />} />
        </ToolbarGroup>

      </Toolbar>
    );
  }
}

export default Header;
