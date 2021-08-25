import React, { Component } from 'react';
import LoginComp from './Component/Login Page/LoginComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardComp from './Component/Dashboard Component/DashboardComp';
import SignUpComp from './Component/Login Page/SignUpComp';
import axios from 'axios';

export default class App extends Component {
  state = {};

  componentDidMount = () => {

      axios.get('user/profile/1').then(
          res => {
              // console.log(res);
              // this.setUser(res.data.profile);
              // console.log('state');
              // console.log('halo', this.state.user.name);
              this.setUser(res.data.profile);
              console.log(this.state.user);
          },
          err => {
              console.log(err);
          }
      )
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <LoginComp setUser={this.setUser}/>} />
          <Route exact path="/dashboard" component={() => <DashboardComp user={this.state.user}/>} />
          <Route exact path="/signup" component={SignUpComp} />
        </Switch>
      </BrowserRouter>
    );
  }
}
