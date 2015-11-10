/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import {changeSearch} from '../../actions/SearchAction';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../../theme';
import Colors from 'material-ui/lib/styles/colors';

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
const KeyTimer = 200;

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    zDepth: PropTypes.number.isRequired,
    onLeftIconButtonTouchTap: PropTypes.func.isRequired,
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.inputChange = this._inputChange.bind(this);
  }

  getChildContext() {
    const mui = ThemeManager.getMuiTheme(MyRawTheme);
    mui.toolbar.backgroundColor = MyRawTheme.palette.primary1Color;
    mui.textField.textColor = 'white';
    return {
      muiTheme: mui,
    };
  }

  getStyles() {
    const lineHeight = 55;
    const iconButtonSize = 48;

    return {
      title: {
        color: 'white',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
        paddingTop: 0,
        letterSpacing: 0,
        fontSize: 24,
        lineHeight: lineHeight + 'px',
      },
      iconButton: {
        marginTop: (lineHeight - iconButtonSize) / 2,
        marginRight: 8,
        marginLeft: -16,
      },
      iconSvg: {
        marginTop: (lineHeight - iconButtonSize) / 2,
        marginLeft: '16px',
        marginRight: '10px',
      },
      textField: {
        fontSize: '18px',
      },
    };
  }

  _inputChange(event) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      changeSearch(event.target.value);
    }, KeyTimer);
  }

  render() {
    const styles = this.getStyles();
    const iconMenuItems = [
      { payload: '1', text: 'Download' },
      { payload: '2', text: 'More Info' },
    ];

    return (
      <Toolbar
        zDepth={this.props.zDepth}
        >

        <ToolbarGroup key={0}>
          <IconButton style={styles.iconButton} onTouchTap={this.props.onLeftIconButtonTouchTap}>
            <ImageDehaze color="white"/>
          </IconButton>
        </ToolbarGroup>

        <ToolbarGroup key={1}>
          <ToolbarTitle text={this.props.title} style={styles.title}/>
          <ActionSearch color="white" style={styles.iconSvg}/>
          <TextField
            style={styles.textField}
            hintText="search word"
            hintStyle={{color: Colors.blue50}}
            underlineStyle={{borderColor: Colors.blue500}}
            underlineFocusStyle={{borderColor: Colors.blue50}}
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
