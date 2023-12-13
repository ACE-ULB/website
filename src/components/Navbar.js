import React from "react";
import Headroom from "react-headroom";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  UncontrolledTooltip,
  Nav,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import NavSocial from "./NavSocial";
import * as SVGs from "../assets/svg"; 
import SETTINGS from "../settings";
import "../assets/css/display.scss";

export default () => {
  return (
    <Headroom>
      <Navbar
        className="color-main headroom z-3"
        expand="lg"
        id="navbar-main"
      >
        <NavbarBrand to="/">
          <Link to="/">
            <img 
              alt={SETTINGS.title} 
              src={require("../assets/img/ACE.png")}
              style={{width:"4%"}}
            />
          </Link>
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <NavItem>
              <NavLink
              className="nav-link-icon"
              href="/cercle"
              id="cercletooltip"
              >
              <SVGs.ACE color="#FFF" width="30pt" height="30pt"/>
              </NavLink>
              <UncontrolledTooltip delay={0} target="cercletooltip">Le Cercle</UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
              className="nav-link-icon"
              href="/events"
              id="eventstooltip"
              >
              <SVGs.Beers color="#FFF" width="30pt" height="30pt"/>
              </NavLink>
              <UncontrolledTooltip delay={0} target="eventstooltip"> Nos Événements</UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
              className="nav-link-icon"
              href="/actions"
              id="actionstooltip"
              >
              <SVGs.Solidarity color="#FFF" width="30pt" height="30pt"/>
              </NavLink>
              <UncontrolledTooltip delay={0} target="actionstooltip">Actions & Projets</UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
              className="nav-link-icon"
              href="/folklore"
              id="folkloretooltip"
              >
              <SVGs.Penne color="#FFF" width="30pt" height="30pt"/>
              </NavLink>
              <UncontrolledTooltip delay={0} target="folkloretooltip">Folklore ULbiste</UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
              className="nav-link-icon"
              href="/members"
              id="memberstooltip"
              >
              <SVGs.ULB color="#FFF" width="22pt" height="22pt"/>
              </NavLink>
              <UncontrolledTooltip delay={0} target="memberstooltip">Espace Membre</UncontrolledTooltip>
            </NavItem>
            <NavSocial color="white" />
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    </Headroom>
  );
};
