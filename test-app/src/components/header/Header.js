import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand><a href="/">Test App</a></Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="/submit_post">Submit Post</NavItem>
          <NavItem eventKey={2} href="/">View Posts</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;