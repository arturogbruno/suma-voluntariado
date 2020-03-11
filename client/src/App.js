import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthServices from './services/auth';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import ActivitiesByCategory from './components/activitiesByCategory/ActivitiesByCategory';
import AllActivities from './components/allActivities/AllActivities';
import ActivityDetails from './components/activityDetails/ActivityDetails';
import NewOrganization from './components/newOrganization/NewOrganization';
import NewActivity from './components/newActivity/NewActivity';
import SearchResult from './components/searchResult/SearchResult';



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
      loggedInUser: userObj
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
    const { loggedInUser } = this.state;

    return (
      <div className="App">
        <NavBar userInSession={this.state.loggedInUser} logout={this.logout} />

        {loggedInUser ? (
          <>
            <Redirect to="/home" />
            <Switch>
              <Route exact path="/home" component={Home} /> 
              <Route exact path="/categories" render={() => <Categories {...this.state} />} /> 
              <Route exact path="/categories/:name" render={props => <ActivitiesByCategory {...props} />} />
              <Route exact path="/activities" render={() => <AllActivities />} />
              <Route exact path="/activities/details/:id" render={props => <ActivityDetails {...props} loggedInUser={this.state.loggedInUser}/>} /> 
              <Route exact path="/activities/search/:searchTerm" render={props => <SearchResult {...props} loggedInUser={this.state.loggedInUser} />} />
              <Route exact path="/organizations/new" render={props => <NewOrganization {...props} loggedInUser={this.state.loggedInUser}/>} /> 
              <Route exact path="/activities/new" render={props => <NewActivity {...props} loggedInUser={this.state.loggedInUser}/>} /> 
            </Switch>
            <Footer />
          </>
        ) : (
          <>
            <Redirect to="/home" />
						<Switch>
							<Route exact path="/login" render={props => <Login {...props} setUser={user => this.setUser(user)} />} />
							<Route exact path="/signup" render={() => <Signup setUser={user => this.setUser(user)} />} />
              <Route exact path="/home" component={Home} /> 
              <Route exact path="/categories" render={() => <Categories {...this.state} />} /> 
              <Route exact path="/categories/:name" render={props => <ActivitiesByCategory {...props} />} />
              <Route exact path="/activities" render={() => <AllActivities />} />
              <Route exact path="/activities/details/:id" render={props => <ActivityDetails {...props} loggedInUser={this.state.loggedInUser}/>} />
              <Route exact path="/activities/search/:searchTerm" render={props => <SearchResult {...props} loggedInUser={this.state.loggedInUser} />} />
						</Switch>
            <Footer />
          </>
        )}
      </div>
    )
  }
}