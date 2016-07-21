import React, {Component} from 'react';
import {observer} from 'mobx-react';
import title from 'title';
import GitHub from 'github-api';

import State from '../Store';
import RepoGrid from './RepoGrid';

const TOKEN = atob("YTRkYmY2OTY1MjQxMTI2ZWNiZDU5ZGI3ZjYxMDlmYjZhNzFmNzliZA==");

const gh = new GitHub({
  token: TOKEN
});

@observer
class MyRepos extends Component {
  componentWillMount(){
    State.title = 'My Repos';
    title('My Repos - %o');
  }

  render(){
    return (
      <div className='home'>
        <RepoGrid repos={State.repos}/>
      </div>
    );
  }

  componentDidMount(){
    const fa7ad = gh.getUser('fa7ad');
    const myRepos = fa7ad.listRepos();
    myRepos.then(({data}) => data.forEach(repo => {
      const singleRepo = {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        type: (repo.fork ? 'fork' : 'source'),
        link: repo.html_url
      };

      fetch(repo.languages_url, {
        method: 'get',
        headers: {
          'Authorization': `token ${TOKEN}`
        }
      }).then(res => res.json()).then(langs => {
        //console.log(langs);
        singleRepo.languages = Object.keys(langs).join(', ');
        State.repos.push(singleRepo);
      });
    }));
  }
};

export default MyRepos;
