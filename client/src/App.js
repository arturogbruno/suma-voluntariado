import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthServices from './services/auth';
import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: null
    };

    this.authServices = new AuthServices();
  }

  componentDidMount = () => this.fetchUser();

  setUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  fetchUser() {
    return this.authServices.loggedin()
    .then(user => {
      this.setState({
        loggedInUser: user,
      });
    })
    .catch(err => {
      this.setState({
        loggedInUser: false,
      });
    });
  }

  logout = () => {
    this.authServices.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <Redirect to="/private" />
          <div className="App">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Redirect to="/" />
          <div className="App">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Switch>
                <Route exact path="/signup" render={() => <Signup setUser={this.setUser} />} />
                <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
              </Switch>
          </div>
        </React.Fragment>
      );
    }
  }
}
