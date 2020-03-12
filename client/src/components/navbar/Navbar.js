import React from "react";
import { Link } from "react-router-dom";
import AuthServices from "../../services/auth";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import "./NavBar.scss";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.authServices = new AuthServices();
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.props.userInSession) {
      return (
        <Navbar sticky="top" bg="light" expand="lg">
          <Navbar.Brand className="navbar-brand"><Link to="/home"><img className="navbar-logo" src="https://res.cloudinary.com/yelpcampagb/image/upload/v1583620107/ironhack-project3/inemcz4pjwjcfqppheev.png" alt="SUMA logo"/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/categories">Categorías</Nav.Link>
              <Nav.Link as={Link} to="/activities">Actividades</Nav.Link>
            </Nav>
            {this.props.userInSession.role === 'organization' ? (
              <>
                <Link to="/organizations/new" className="navLink-create">Crear organización</Link>
                <Link to="/activities/new" className="navLink-create">Crear actividad</Link>
              </>
            ) : (
              <></>
            )}
            <DropdownButton className="navbar-dropdown"
              alignRight
              title={this.props.userInSession.username}
            >
              {this.props.userInSession.role === 'organization' ? (
                <Link to="/controlpanel" className="navbar-userLink">Panel de control</Link>
              ) : (
                <></>
              )}
              <Link to={`/users/${this.props.userInSession._id}`} className="navbar-userLink">Mi perfil</Link>
              <Link to="/home" onClick={this.handleLogout} className="navbar-userLink">Logout</Link>
            </DropdownButton>

            <span className="navbar-avatar"><img src={this.props.userInSession.imgPath} alt=""/></span>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar sticky="top" bg="light" expand="lg">
          <Navbar.Brand className="navbar-brand"><Link to="/home"><img className="navbar-logo" src="https://res.cloudinary.com/yelpcampagb/image/upload/v1583620107/ironhack-project3/inemcz4pjwjcfqppheev.png" alt="SUMA logo"/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
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
