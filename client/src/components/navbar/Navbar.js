import React from "react";
import { Link } from "react-router-dom";
import AuthServices from "../../services/auth";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.scss";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loggedInUser: null };
    this.authServices = new AuthServices();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <Navbar sticky="top" bg="light" expand="lg">
          <Navbar.Brand className="navbar-brand"><Link to="/"><img className="navbar-logo" src="https://res.cloudinary.com/yelpcampagb/image/upload/v1583620107/ironhack-project3/inemcz4pjwjcfqppheev.png" alt="SUMA logo"/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/categories">Categorías</Nav.Link>
              <Nav.Link as={Link} to="/activities">Actividades</Nav.Link>
            </Nav>
            {this.state.loggedInUser.role === 'organization' ? (
              <>
                <Link to="/organizations/new" className="navLink-create">Crear organización</Link>
                <Link to="/activities/new" className="navLink-create">Crear actividad</Link>
              </>
            ) : (
              <span></span>
            )}
            <Link to={`/users/${this.state.loggedInUser._id}`} className="navLink">{this.state.loggedInUser.username}</Link>
            <Link to="/" className="navLink navLink-right" onClick={this.handleLogout}>Logout</Link>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar sticky="top" bg="light" expand="lg">
          <Navbar.Brand className="navbar-brand"><Link to="/"><img className="navbar-logo" src="https://res.cloudinary.com/yelpcampagb/image/upload/v1583620107/ironhack-project3/inemcz4pjwjcfqppheev.png" alt="SUMA logo"/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/categories">Categorías</Nav.Link>
              <Nav.Link as={Link} to="/activities">Actividades</Nav.Link>
            </Nav>
              <Link to="/signup" className="navLink">Regístrate</Link>
              <Link to="/login" className="navLink navLink-right">Inicia sesión</Link>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}
