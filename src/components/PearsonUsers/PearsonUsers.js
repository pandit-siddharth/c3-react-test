import React, { Component } from "react";
import { FormattedMessage } from 'react-intl';
import { User } from "../User/User";
import { avatars as defaultAvatars } from "../../avatars"
import { config } from "../../config"
import { Error } from "../Error/Error"
import axios from "axios";

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: defaultAvatars,
      error: ''
    };
  }

  componentDidMount() {
    axios.get(config.apiUrl)
      .then(response => {
        let userData = this.state.users;
        if (response.data && response.data.data) {
          userData = [...userData, ...response.data.data];
        }
        this.setState({
          users: userData
        });
      })
      .catch(error => {
        this.setState({
          users: [],
          error: error.message
        });
      });
  }

  deleteDuplicates(e) {
    e.preventDefault();
    const origUserList = this.state.users;
    const userList = origUserList.reduce((userArr, user) =>
      userArr.findIndex(elem => elem.id === user.id) < 0 ?
        [...userArr, user] : userArr, []);
    this.setState({
      users: userList,
      deletedCount: origUserList.length - userList.length
    });
  }

  deleteUser(e, person) {
    e.preventDefault();
    this.setState({ users: this.state.users.filter(elem => elem.id !== person.id) });
  }

  render() {
    const { users, error, deletedCount } = this.state;
    return (
      <div className="pearson-users">
        <h1><FormattedMessage id="app.title" defaultMessage={`Pearson User Management`} /></h1>
        {error === '' && users && users.length >= 0 ?
          <React.Fragment>
            <a className="btn-delete" href="" onClick={(e) => this.deleteDuplicates(e)} >
              <FormattedMessage id="app.deleteUsers" defaultMessage={`Delete Duplicate Users`} /></a>
            {deletedCount !== undefined ?
              <div className="duplicate-label">
                {deletedCount > 0 ?
                  <div>{deletedCount} <FormattedMessage id="app.deleted" defaultMessage={`duplicate users deleted`} /> !</div>
                  :
                  <div><FormattedMessage id="app.noDuplicates" defaultMessage={`No duplicate users found`} /> !</div>}
              </div>
              :
              <div></div>
            }
            <div className="user-row">
              {users.map((data, index) => {
                return <User data={data} key={index} deleteUser={(e) => this.deleteUser(e, data)} />
              })}
            </div>
          </React.Fragment>
          :
          <React.Fragment>
            {error === '' ?
              <div className="page-loading"><FormattedMessage id="app.fetching" defaultMessage={`Fetching user profiles..`} /></div>
              :
              <Error errMsg={error} />
            }
          </React.Fragment>
        }
      </div>
    );
  }
}
