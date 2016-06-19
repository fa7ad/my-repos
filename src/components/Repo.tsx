import * as React from 'react';
import {
  Card, CardActions, CardMedia, CardTitle, CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const InlineSVG = require('svg-inline-react');

interface Props{
  name: string;
  languages: string;
  description: string;
  type: string;
  link: string;
}

class Repo extends React.Component<Props, {}> {
  render(){
    let icon = (this.props.type === 'fork' ? 'repo-forked' : 'repo');
    return (
      <Card>
        <CardMedia>
          <InlineSVG
            src={require(`svg-inline!../../images/${icon}.svg`) }
            className="repo-icon"
            />
        </CardMedia>
        <CardTitle
          title={this.props.name}
          subtitle={this.props.languages.toUpperCase()}
          />
        <CardText>{this.props.description}</CardText>
        <CardActions expandable={false}>
          <div>
            <RaisedButton
              label="GITHUB LINK"
              href={this.props.link}
              linkButton={true}
              primary={true}
            />
          </div>
        </CardActions>
      </Card>
    );
  }
};

export default Repo;
