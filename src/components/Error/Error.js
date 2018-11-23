import React, { Component } from "react";
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

export class Error extends Component {
  render() {
    return (
      <div id="error-screen">
        <div className="error-screen">
          <div className="error-screen-msg">
            <h1><FormattedMessage id="app.errTitle" defaultMessage={`Oops`} />!</h1>
            <h2><FormattedMessage id="app.errMessage" defaultMessage={`Something went wrong`} /> !</h2>
          </div>
          <h2><FormattedMessage id="app.errDetails" defaultMessage={`Error details`} /> : {this.props.errMsg}</h2>
          <a href=""><FormattedMessage id="app.goto" defaultMessage={`Go to Homepage`} /></a>
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
