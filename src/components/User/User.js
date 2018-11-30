import React, { Component } from "react";
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

export class User extends Component {
  render() {
    return (
      <div className="user-column" >
        <img src={this.props.data.avatar} alt="User avatar" />
        <div className="user">{this.props.data.first_name} {this.props.data.last_name}</div>
        <a href="" onClick={(e) => this.props.deleteUser(e, this.props.data)}>
        <FormattedMessage id="app.delete" defaultMessage={`Delete`} /></a>
      </div>
    );
  }
}

User.defaultProps = {
  data: {},
  deleteUser: () => { }
};

User.propTypes = {
  data: PropTypes.object,
  deleteUser: PropTypes.func
};