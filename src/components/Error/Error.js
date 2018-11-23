import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Error extends Component {
  render() {
    return (
      <div id="error-screen">
        <div className="error-screen">
          <div className="error-screen-msg">
            <h1>Oops!</h1>
            <h2>Something went wrong !</h2>
          </div>
          <h2>Error details : {this.props.errMsg}</h2>
          <a href="">Go To Homepage</a>
        </div>
      </div>
    );
  }
}

Error.defaultProps = {
  errMsg: 'Unknown Error'
};

Error.propTypes = {
  errMsg: PropTypes.string
};
