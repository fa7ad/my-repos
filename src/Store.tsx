import {observable} from 'mobx';

interface Repo {
  name: string;
  languages: string;
  description: string;
  type: string;
  link: string;
}

class MyStates {
  @observable private _title: string = '';
  @observable repos: any[] = [];

  set title(newTitle:string) {
    let prefix: string = '';
    if(newTitle.length > 1) prefix = '\u00BB';
    this._title = ` ${prefix} ${newTitle}`;
  }

  get title() {
    return this._title;
  }

}

const State = new MyStates();

export default State;