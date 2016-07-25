import React, {Component} from 'react';
import {observer} from 'mobx-react';

import Repo from './Repo';

@observer
class RepoGrid extends Component {
  render(){
    if (this.props.repos.length > 5) {
      const reposDone = this.props.repos.map(
        (repo) => (
          <div key={repo.id} className="repo">
            <Repo
              name={repo.name}
              type={repo.type}
              languages={repo.languages}
              description={repo.description}
              link={repo.link}
            />
          </div>
        ));
      return (
        <div className="repo-grid">
          {reposDone}
        </div>
      );
    } else {
      return (<h1 id="loading">Loading...</h1>);
    }
  }
}

export default RepoGrid;
