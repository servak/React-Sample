import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

export function changeTitle(val) {
  Dispatcher.dispatch({
    actionType: ActionTypes.CHANGE_TITLE,
    value: val,
  });
}
