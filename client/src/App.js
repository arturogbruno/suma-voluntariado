import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthServices from './services/auth';
import NavBar from './components/navbar/NavBar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Categories from './components/categories/Categories';
import Activities from './components/activities/Activities';
import ActivityDetails from './components/activityDetails/ActivityDetails';
import NewOrganization from './components/newOrganization/NewOrganization'


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


  // render() {
	// 	const { loggedInUser } = this.state;
	// 	return (
	// 		<div className="App">
	// 			{loggedInUser ? (
	// 				<div>
	// 					<Redirect to="/" />
	// 					<NavBar userInSession={loggedInUser} logout={this.logout} />
	// 					<Switch>
	// 						<Route exact path="/" render={() => <Home {...this.state} />} />
	// 						<Route exact path="/trainers" component={Home} />
	// 					</Switch>
	// 				</div>
	// 			) : (
	// 				<div>
						// <NavBar />
						// <Switch>
						// 	<Route exact path="/" render={() => <Home {...this.state} />} /> /}
						// 	<Route exact path="/login" render={() => <Login setUser={(user) => this.setUser(user)} />} />
						// 	<Route exact path="/signup" render={() => <Signup setUser={(user) => this.setUser(user)} />} />
						// </Switch>
	// 				</div>
	// 			)}
	// 		</div>
	// 	);
	// }

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        {loggedInUser ? (
          <div>
            {/* <Redirect to='/' /> */}
            <NavBar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Switch>
              <Route exact path="/login" render={() => <Login setUser={(user) => this.setUser(user)} />} />
              <Route exact path="/signup" render={() => <Signup setUser={(user) => this.setUser(user)} />} />
              <Route exact path="/categories" render={() => <Categories {...this.state} />} /> 
              <Route exact path="/categories/:name" render={props => <Activities {...props} />} />
              <Route exact path="/activities/:id" render={props => <ActivityDetails {...props} loggedInUser={this.state.loggedInUser}/>} /> 
              <Route exact path="/organizations/new" render={props => <NewOrganization {...props} loggedInUser={this.state.loggedInUser}/>} /> 
            </Switch>
          </div>
        ) : (
          <div>
            <NavBar />      
						<Switch>
							<Route exact path="/login" render={() => <Login setUser={(user) => this.setUser(user)} />} />
							<Route exact path="/signup" render={() => <Signup setUser={(user) => this.setUser(user)} />} />
              <Route exact path="/categories" render={() => <Categories {...this.state} />} /> 
              <Route exact path="/categories/:name" render={props => <Activities {...props} />} />
              <Route exact path="/activities/:id" render={props => <ActivityDetails {...props} loggedInUser={this.state.loggedInUser}/>} /> 
						</Switch>
          </div>
        )}
      </div>
    )
  }
}