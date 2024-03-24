import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Icon from "react-bootstrap-icons";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import RouterWrapper from "./RouterWrapper";
import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import account_img from "./assets/account_img.png"

const NavBar = () => {

  const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
  
    return (
      <Navbar className="justify-content-between" sticky="top" expand="lg">
        <img className="ms-5 me-3" height="60px" src={logo} alt="logo" />
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link fs-6 text-light pe-2" to="/">
                Home
              </Link>
              <Link className="nav-link fs-6 text-light pe-2" to="/TVshows">
                TV Shows
              </Link>
              <Link className="nav-link fs-6 text-light pe-2" to="/">
                Movies
              </Link>
              <Link className="nav-link fs-6 text-light pe-2" to="/">
                New & Popular
              </Link>
              <Link className=" nav-link fs-6 text-light pe-2" to="/">
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
                <Icon.Search color="white" className="pe-2" size={30}/>
              </Nav.Link>
              <Nav.Link className="text-light fs-4 pe-2" href="#">Kids</Nav.Link>
              <Nav.Link href="#">
                <Icon.Bell color="white" className="pe-2" size={30}/>
              </Nav.Link>
              <NavDropdown title={<img height="40px" alt="profile" src={account_img}/>} className=" fs-4 pe-2" id="basic-nav-dropdown" show={show}
               onMouseEnter={showDropdown} 
               onMouseLeave={hideDropdown}>
                
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    );
  }


export default RouterWrapper(NavBar);
