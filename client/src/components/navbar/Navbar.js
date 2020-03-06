import React from "react";
import { Link } from "react-router-dom";
import AuthServices from "../../services/auth";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
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
        <Navbar bg="light" expand="lg">
          <Navbar.Brand><Link to="/">+SUMA</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
              <Button className="navButton" variant="outline-primary"><Link to="/profile" className="navLink">{this.state.loggedInUser.username}</Link></Button>
              <Button className="navButton" variant="outline-primary"><Link to="/" className="navLink" onClick={this.handleLogout}>Logout</Link></Button>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand><Link to="/">+SUMA</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
              <Button className="navButton" variant="outline-primary"><Link to="/signup" className="navLink">Regístrate</Link></Button>
              <Button className="navButton" variant="outline-primary"><Link to="/login" className="navLink">Inicia sesión</Link></Button>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}
