import React from 'react';
import { Link } from 'react-router-dom';
import AuthServices from '../../services/auth';
import './Navbar.scss';

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
    if(this.state.loggedInUser) {
      return (
        <nav className="navbar">
          <div className="navbar-brand">
            <span>+SUMA</span>
          </div>
          <ul>
            <li>
              <span>Bienvenido, <Link className="nav-links" to="/profile">{this.state.loggedInUser.username}</Link></span>
            </li>
            <li>
              <Link className="nav-links" to="/" onClick={this.handleLogout}>Logout</Link>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="navbar">
            <div className="navbar-brand">
              <span>+SUMA</span>
            </div>
            <ul>
              <li>
                <Link className="nav-links" to="/signup">Regístrate</Link>
              </li>
              <li>
                <Link className="nav-links" to="/login">Inicia sesión</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}
