import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartWidjet } from "../cart-widjet/CartWidjet";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="navLink logo">Kumara shop</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink exact to="/" className="navLink">
            Games
          </NavLink>
          <NavLink to="/category/ps4" className="navLink">
            Ps4
          </NavLink>
          <NavLink to="/category/pc" className="navLink">
            Pc
          </NavLink>
        </Nav>
        <CartWidjet />
      </Container>
    </Navbar>
  );
};
