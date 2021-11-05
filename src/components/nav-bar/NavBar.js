import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartWidjet } from "../cart-widjet/CartWidjet";
import './NavBar.css'


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <li className="navbar-brand">
          <Link to="/">Home</Link> 
        </li>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="selected">Home</NavLink> 
            </li>
            <li className="nav-item">
              <NavLink to="/category/pc" activeClassName="selected">Pc</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/ps4" activeClassName="selected">Ps4</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" activeClassName="selected">Carrito</NavLink>
            </li>
            <CartWidjet cantidad={4} />
          </ul>
        </div>
      </div>
    </nav>
  );
};
