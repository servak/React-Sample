import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

const CHANGE_EVENT = 'change';

class UserStoreClass extends EventEmitter {
  constructor() {
    super();
    this.users = {
      strawHatPirates: [],
      sevenWarlordsOfTheSea: [],
    };
    this.word = '';
  }

  getSevenWarlordsOfTheSea() {
    if (this.word === '') {
      return this.users.sevenWarlordsOfTheSea;
    }

    const searchWordReg = new RegExp(this.word, 'i');
    return this.users.sevenWarlordsOfTheSea.filter(name => {
      return searchWordReg.test(name);
    });
  }

  getStrawHatPirates() {
    if (this.word === '') {
      return this.users.strawHatPirates;
    }

    const searchWordReg = new RegExp(this.word, 'i');
    return this.users.strawHatPirates.filter(name => {
      return searchWordReg.test(name);
    });
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
}

const UserStore = new UserStoreClass();

Dispatcher.register((payload) => {
  const action = payload.actionType;
  switch (action) {
  case ActionTypes.CHANGE_SEARCH:
    UserStore.word = payload.value;
    UserStore.emit(CHANGE_EVENT);
    break;
  case ActionTypes.CHANGE_USER:
    UserStore.users = payload.value;
    UserStore.emit(CHANGE_EVENT);
    break;
  default:
    return true;

  }
});

export default UserStore;
