import React, { Component } from "react";
import { Users } from "../User/Users";
import { users as defaultUsers } from "../../users"
import { config } from "../../config"
import axios from "axios";

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: defaultUsers,
      error: ''
    };
  }

  componentDidMount() {
    axios.get(config.apiUrl)
      .then(response => {
        let userData = response.data;
        this.setState({
          users: this.state.users.concat(userData.data)
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
      userArr.findIndex(elem => elem.first_name + elem.last_name === user.first_name + user.last_name) < 0 ?
        [...userArr, user] : userArr, []);
    this.setState({
      users: userList
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
        {this.state.users && this.state.users.length > 0 ?
          <React.Fragment>
            <a className="btn-delete" href="" onClick={(e) => this.deleteDuplicates(e)} >Delete Duplicate Users</a>
            <div className="user-row">
              {this.state.users.map((data) => {
                return (
                  <Users data={data} key={data.id} deleteUser={(e) => this.deleteUser(e, data)} />
                )
              })}
            </div>
          </React.Fragment>
          :
          <React.Fragment>
            {this.state.error === '' ?
              <div className="page-loading">Fetching user profiles..</div>
              :
              <div className="error-screen">{this.state.error}</div>}
          </React.Fragment>
        }
      </div>
    );
  }
}
