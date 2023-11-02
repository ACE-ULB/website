import React from "react";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SETTINGS from "../settings";

const NavLink = ({ to, children }) => (
  <NavHashLink activeClassName="" className="font-white nav-link" to={to}>
    {children}
  </NavHashLink>
);

export default () => {
  return (
      <Navbar
        className="navbar-main navbar-dark headroom"
        expand="lg"
        id="navbar-main"
      >
        <NavbarBrand to="/">
          <Link to="/">
            <img alt={SETTINGS.title} src={require("../assets/img/ACE.png")} width="80" />
          </Link>
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <NavItem>
              <NavLink to="/Home">Home</NavLink>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
  );
};
