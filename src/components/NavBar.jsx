import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Icon from "react-bootstrap-icons";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import RouterWrapper from "./RouterWrapper";

class NavBar extends Component {
  render() {
    return (
      <Navbar className="justify-content-between" bg="dark" data-bs-theme="dark" expand="lg">
        <img height="70px" src={logo} alt="logo" />
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link fw-bold fs-5" to="/">
                Home
              </Link>
              <Link className="nav-link fw-bold fs-5" to="/TVshows">
                TV Shows
              </Link>
              <Link className="nav-link fw-bold fs-5" to="/">
                Movies
              </Link>
              <Link className="nav-link fw-bold fs-5" to="/">
                Recently Added
              </Link>
              <Link className=" nav-link fw-bold fs-5" to="/">
                My List
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="d-flex justify-content-end pe-4" id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#">
                <Icon.Search color="white" />
              </Nav.Link>
              <Nav.Link href="#">KIDS</Nav.Link>
              <Nav.Link href="#">
                <Icon.BellFill color="white" />
              </Nav.Link>
              <Nav.Link href="#">
                <Icon.PersonFill color="white" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default RouterWrapper(NavBar);
