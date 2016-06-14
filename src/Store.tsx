import {observable} from 'mobx';

class MyStates {
  @observable title:string = '';

  setTitle(title:string = ''){
    let prefix:string = ''
    if(title.length > 1)
      prefix = '\u00BB'
    this.title = ` ${prefix} ${title}`;
  }
}

const State = new MyStates();

export default State;