import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AppNavbar() {
  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid className="px-5">
        <Navbar.Brand href="./index.html">
          <Image src="/assets/netflix_logo.png" id="logo" alt="Netflix Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="./index.html">Home</Nav.Link>
            <Nav.Link href="#">Tv Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#" className="active">
              <i className="bi bi-search text-white px-3"></i>
            </Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
            <Nav.Link href="#" className="text-white">
              <i className="bi bi-bell-fill text-white px-3"></i>
            </Nav.Link>
            <NavDropdown
              title={<Image src="/assets/avatar.png" id="avatar" alt="User Avatar" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="./profile.html" className="text-light">
                <div className="d-flex align-items-center">
                  <Image src="/assets/avatar.png" id="avatar-small" alt="User Avatar" />
                  Epicoder #1
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="./profile.html" className="text-light">
                Manage Profiles
              </NavDropdown.Item>
              <NavDropdown.Item href="./accounts.html" className="text-light">
                Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-light">
                Help Center
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="text-light">
                Signout Netflix
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
