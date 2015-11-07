import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

const CHANGE_EVENT = 'change';

class TitleStoreClass extends EventEmitter {
  constructor() {
    super();
    this.title = '';
  }

  get() {
    return this.title;
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
}

const TitleStore = new TitleStoreClass();

Dispatcher.register((payload) => {
  const action = payload.actionType;
  switch (action) {
  case ActionTypes.CHANGE_TITLE:
    TitleStore.title = payload.value;
    TitleStore.emit(CHANGE_EVENT);
    break;

  default:
    return true;

  }
});

export default TitleStore;
