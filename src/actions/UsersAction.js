import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import http from '../core/HttpClient';

exports.getUsers = () => {
  http.get('/api/users').then((val) => {
    Dispatcher.dispatch({
      actionType: ActionTypes.CHANGE_USER,
      value: val,
    });
  });
};
