import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import UserCard from "../components/User/UserCard";
import Header from "../components/Header";

const HeaderBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Header text="IMDB" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/booking" className="btn btn-dark">
              Booking
            </Link>
          </Nav>
          <React.Suspense fallback="Loading...">
            <UserCard />
          </React.Suspense>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
