import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

exports.changeSearch = (val) => {
  Dispatcher.dispatch({
    actionType: ActionTypes.CHANGE_SEARCH,
    value: val,
  });
};
