import * as React from 'react';
import * as title from 'title';
import {Component} from 'react';

import State from '../Store';
import RepoGrid from './RepoGrid';

import * as agent from 'superagent';

agent
  .get('https://api.github.com/users/fa7ad/repos')
  .auth('fa7ad', atob("YTRkYmY2OTY1MjQxMTI2ZWNiZDU5ZGI3ZjYxMDlmYjZhNzFmNzliZA=="))
  .end((error, repos) => {
    repos.body.forEach(repo => {
      agent
        .get(repo.languages_url)
        .auth('fa7ad', atob("YTRkYmY2OTY1MjQxMTI2ZWNiZDU5ZGI3ZjYxMDlmYjZhNzFmNzliZA=="))
        .end((err, lang) => {
          State.repos.push({
            id: repo.id,
            name: repo.name,
            languages: Object.keys(lang.body).join(', '),
            description: repo.description,
            type: (repo.fork ? 'fork' : 'source'),
            link: repo.html_url
          });
        });
    })
  });


class MyRepos extends Component<{}, {}>{
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
};

export default MyRepos;
