import React, { Component } from "react";
import { Users } from "../User/Users";
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
          userData = userData.concat(response.data.data);
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
    const userList = this.state.users.reduce((userArr, user) =>
      userArr.findIndex(elem => elem.id === user.id) < 0 ?
        [...userArr, user] : userArr, []);
    this.setState({
      users: userList,
      deletedCount: this.state.users.length - userList.length
    });
  }

  deleteUser(e, person) {
    e.preventDefault();
    this.setState({ users: this.state.users.filter(elem => elem.id !== person.id) });
  }

  render() {
    return (
      <div className="pearson-users">
        <h1>Pearson User Management</h1>
        {this.state.error === '' && this.state.users && this.state.users.length >= 0 ?
          <React.Fragment>
            <a className="btn-delete" href="" onClick={(e) => this.deleteDuplicates(e)} >Delete Duplicate Users</a>
            {this.state.deletedCount !== undefined ?
              <div className="duplicate-label">
                {this.state.deletedCount > 0 ?
                  <div>{this.state.deletedCount} duplicate users deleted !</div>
                  :
                  <div>No duplicate users found !</div>}
              </div>
              :
              <div></div>
            }
            <div className="user-row">
              {this.state.users.map((data, index) => {
                return <Users data={data} key={index} deleteUser={(e) => this.deleteUser(e, data)} />
              })}
            </div>
          </React.Fragment>
          :
          <React.Fragment>
            {this.state.error === '' ?
              <div className="page-loading">Fetching user profiles..</div>
              :
              <Error errMsg={this.state.error} />
            }
          </React.Fragment>
        }
      </div>
    );
  }
}
