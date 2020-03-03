import React from 'react';
import { Link } from 'react-router-dom';
import AuthServices from '../../services/auth';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loggedInUser: null };
    this.authServices = new AuthServices();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li>
              <Link to="/" onClick={this.handleLogout}>Logout</Link>
            </li>
          </ul>

          <div className="header">
            <h2>Welcome {this.state.loggedInUser.username}</h2>
          </div>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <Link to="/signup">Regístrate</Link>
              </li>
              <li>
                <Link to="/login">Inicia sesión</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}
