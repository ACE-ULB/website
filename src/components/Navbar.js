import React from "react";
import Headroom from "react-headroom";
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
import NavSocial from "./NavSocial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SETTINGS from "../settings";
import * as SVGs from "../assets/svg";

const NavLink = ({ to, children }) => (
  <NavHashLink activeClassName="" className="font-white" to={to}>
    {children}
  </NavHashLink>
);

const NavLinkD = ({ to, children }) => (
  <NavHashLink activeClassName="" className="font-white" to={to}>
    {children}
  </NavHashLink>
);

export default () => {
  return (
    <Headroom>
      <Navbar
        className="headroom"
        expand="lg"
        id="navbar-main"
      >
        <NavbarBrand to="/">
          <Link to="/">
            <img
            alt={SETTINGS.title}
            src={require("../assets/img/ACE.png")}
            style={{
              width: "70px"
            }}/>
          </Link>
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <UncontrolledDropdown>
              <DropdownToggle drop="down">
                <SVGs.ACE color="#FF5656" width="50pt" height="30pt"/>
              </DropdownToggle>
              <DropdownMenu>
                <NavLinkD to="/#admin">Administratif</NavLinkD>
                <NavLinkD to="/#objectifs">{"C'est quoi"}</NavLinkD>
                <NavLinkD to="/#comite">Le Comité</NavLinkD>
                <NavLinkD to="/#cercles">Cercles Membres</NavLinkD>
                <NavLinkD to="/#OdP">Ordre du Prisme</NavLinkD>
                <NavLinkD to="/#join-us">Nous rejoindre</NavLinkD>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle drop="down">
                <SVGs.Beers color="#FFCC37" width="45pt" height="30pt"/>
              </DropdownToggle>
              <DropdownMenu>
                <NavLinkD to="/#st-v">Saint-Verhaegen</NavLinkD>
                <NavLinkD to="/#ntv">Nuit Théodore Verhaegen</NavLinkD>
                <NavLinkD to="/#cab">Cantus Auguste Baron</NavLinkD>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle drop="down">
                <SVGs.Solidarity color="#84C825" width="45pt" height="30pt"/>
              </DropdownToggle>
              <DropdownMenu>

              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle drop="down">
                <SVGs.Penne color="#1875C3" width="60pt" height="30pt"/>
              </DropdownToggle>
              <DropdownMenu>

              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink to="/members">
                <SVGs.ULB color="#6F4B92" width="35pt" height="30pt"/>
              </NavLink>
            </NavItem>
            {/*<NavSocial color="white" />*/}
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    </Headroom>
  );
};
