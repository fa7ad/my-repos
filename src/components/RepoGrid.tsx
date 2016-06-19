import * as React from 'react';
import {observer} from 'mobx-react';

import Repo from './Repo';

interface RepoProps{
  id: number;
  name: string;
  languages: string;
  description: string;
  type: string;
  link: string;
}

@observer
class RepoGrid extends React.Component<{repos: RepoProps[]}, {}> {
  render(){
    let repos = this.props.repos.map(repo => (
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
    );
    return (
      <div className="repo-grid">
        {repos}
      </div>
    );
  }
}

export default RepoGrid;