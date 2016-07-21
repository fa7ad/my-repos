import React, {Component} from 'react';

import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import InlineSVG from 'svg-inline-react';

import ForkedIcon from '../../images/repo-forked.svg!text';
import SourceIcon from '../../images/repo.svg!text';

class Repo extends Component {
  render(){
    let Icon = (this.props.type === 'fork' ? ForkedIcon : SourceIcon);
    return (
      <Card expandable={false}>
        <CardMedia>
          <InlineSVG
            src={Icon}
            className="repo-icon"
            />
        </CardMedia>
        <CardTitle
          title={this.props.name}
          subtitle={this.props.languages.toUpperCase()}
          />
        <CardText>{this.props.description}</CardText>
        <CardActions>
          <div>
            <RaisedButton
              label="GITHUB LINK"
              href={this.props.link}
              primary={true}
            />
          </div>
        </CardActions>
      </Card>
    );
  }
};

export default Repo;
