import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import routes from "../../routes.js";
import patientRoutes from "../../patientRoutes.js";

function Header() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    const role = localStorage.getItem("accountType");
    if (role === "therapist") {
      for (let i = 0; i < routes.length; i++) {
        if (
          location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
      return "Brand";
    } else if (role === "patient") {
      for (let i = 0; i < patientRoutes.length; i++) {
        if (
          location.pathname.indexOf(
            patientRoutes[i].layout + patientRoutes[i].path
          ) !== -1
        ) {
          return patientRoutes[i].name;
        }
      }
      return "Brand";
    }
  };

  const logout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" navbar>
            <Link to="/login" className="nav-link" onClick={logout}>
              Log out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
