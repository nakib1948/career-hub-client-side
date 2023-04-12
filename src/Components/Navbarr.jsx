import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Navbarr = () => {
    return (
        <Navbar collapseOnSelect className="p-3" expand="lg" bg="light">
        <Container>
          <h1>Jobspot</h1>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            <Link to="/" className="text-decoration-none px-2">Home</Link>
            <Link to="/statistics" className="text-decoration-none px-2">Statistics</Link>
              <Link to="/appliedjobs" className="text-decoration-none px-2">Applied Jobs</Link>
              <Link to="/blog" className="text-decoration-none px-2">Blog</Link>
            </Nav>
            <Nav>
              <Button variant="primary">Star Applying</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navbarr;