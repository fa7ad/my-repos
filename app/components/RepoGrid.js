import React, {Component} from 'react';
import {observer} from 'mobx-react';

import Repo from './Repo';

@observer
class RepoGrid extends Component {
  render(){
    let repos = (this.props.repos.length > 10 ? this.props.repos.map(repo => (
      <div key={repo.id} className="repo">
        <Repo
          name={repo.name}
          type={repo.type}
          languages={repo.languages}
          description={repo.description}
          link={repo.link}
        />
      </div>
      )
    ) : <h1 className="text-center">Loading...</h1>);
    return (
      <div className="repo-grid">
        {repos}
      </div>
    );
  }
}

export default RepoGrid;
