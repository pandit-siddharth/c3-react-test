import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Users extends Component {
  render() {
    return (
      <div className="user-column" >
        <img src={this.props.data.avatar} alt="User avatar" />
        <div className="user">{this.props.data.first_name} {this.props.data.last_name}</div>
        <a href="" onClick={(e) => this.props.deleteUser(e, this.props.data)}>Delete</a>
      </div>
    );
  }
}

Users.defaultProps = {
  data: {},
  deleteUser: () => { }
};

Users.propTypes = {
  data: PropTypes.object,
  deleteUser: PropTypes.func
};