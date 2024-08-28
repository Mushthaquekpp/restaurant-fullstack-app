import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container"; // Importing Container for a responsive layout
import Nav from "react-bootstrap/Nav"; // Importing Nav for navigation links
import Navbar from "react-bootstrap/Navbar"; // Importing Navbar for the navigation bar
import "./header.css"; // Importing  CSS file

const Header = ({ setExpanded, isSticky, expanded }) => {
  return (
    <Navbar
      sticky="top"
      expanded={expanded} // Control whether the navbar is expanded on mobile
      onToggle={() => setExpanded(!expanded)} // Toggle navbar state
      className={`navbar ${isSticky || expanded ? "sticky-navbar" : ""}`} // Add sticky class if needed
      collapseOnSelect
      expand="lg" // Enable expansion on large screens
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/" className="me-auto">
          Lorem Ipsum
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle expanded state on click
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="link" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="link" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
