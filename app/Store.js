import {observable} from 'mobx';

class MyStates {
  @observable _title = '';
  @observable repos = [];

  set title(newTitle) {
    let prefix = '';
    if(newTitle.length > 1) prefix = '\u00BB';
    this._title = ` ${prefix} ${newTitle}`;
  }

  get title() {
    return this._title;
  }

}

const State = new MyStates();

export default State;