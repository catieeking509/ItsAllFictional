import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';

export default function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='nav-section'>
      <Navbar {...args}>
        <NavbarBrand>
          <img alt="logo" src="/logo-white.svg" style={{
            height: 40,
            width: 40
          }}
          />
        </NavbarBrand>
        <NavbarBrand>it's all fictional</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/" exact="true" >
                home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/BookShelf">
                books
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Favorites">
                favorites
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Contact">
                contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
