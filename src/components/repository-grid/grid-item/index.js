import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './styles.css';
import Star from '../../icons/star';
import Fork from '../../icons/fork';
import Watcher from '../../icons/watcher';

class GridItem extends React.Component {
  render() {
    return (
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item-container">
        <div className="grid-item-body">
          <div className="author-header clearfix">
            <a href={ this.props.repository.owner.html_url } target="_blank">
              <div className="author-img">
                <img src={ this.props.repository.owner.avatar_url }/>
              </div>
              <div className="author-details">
                <h5>{ this.props.repository.owner.login }</h5>
                <p className="small text-muted">View Profile</p>
              </div>
            </a>
          </div>
          <div className="repo-header">
            <h5>
              <a href={ this.props.repository.html_url } target="_blank">
                <span className="repo-name">{ this.props.repository.name }</span>
              </a>
            </h5>
            <p className="repo-meta text-muted small">
              Built by &middot; <a target="_blank" href={ this.props.repository.owner.html_url }>{ this.props.repository.owner.login }</a> &middot; { moment(this.props.repository.created_at).format('MMMM D YYYY') }
            </p>
          </div>
          <div className="repo-body">
            <p>{ this.props.repository.description || 'No description given.' }</p>
          </div>
          <div className="repo-footer">
            {
              this.props.repository.language && (
                <span className="d-inline-block mr-3">
                  <span className="repo-language-color ml-0"></span>
                  <span itemProp="programmingLanguage">
                    { this.props.repository.language }
                  </span>
                </span>
              )
            }
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/stargazers` }
               target="_blank">
              <Star/>
              { this.props.repository.stargazers_count.toLocaleString() }
            </a>
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/network/members` }
               target="_blank">
              <Fork/>
              { this.props.repository.forks.toLocaleString() }
            </a>
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/watchers` }
               target="_blank">
              <Watcher/>
              { this.props.repository.watchers.toLocaleString() }
            </a>
          </div>
        </div>
      </div>
    );
  }
}

GridItem.propTypes = {
  repository: PropTypes.object.isRequired
};

export default GridItem;
