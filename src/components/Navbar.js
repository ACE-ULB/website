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

export const NavItemSVG = ({ svg, href, tip, size }) => {
  return (
  <NavItem className="">
    <NavLink
    className="nav-link-icon"
    href={`/${href}`}
    id={href}
    >
    {React.createElement(SVGs[svg], {color:"#FFF", width: size, height: size})}
    <span className="d-lg-none d-sm-block" style={{marginLeft:"20px"}}>{tip}</span>
    </NavLink>
    <UncontrolledTooltip delay={0} target={href}>{tip}</UncontrolledTooltip>
  </NavItem>
)}
// eslint-disable-next-line
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
              style={{width:"7vh"}}
            />
          </Link>
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <Nav className="align-items-lg-center ml-lg-auto container-fluid justify-content-end" navbar>
            <NavItemSVG svg="ACE" href="cercle" tip="Le Cercle" size="30pt"/>
            <NavItemSVG svg="Beers" href="events" tip="Nos Événements" size="30pt"/>
            <NavItemSVG svg="Solidarity" href="actions" tip="Actions & Projets" size="30pt"/>
            <NavItemSVG svg="Penne" href="folklore" tip="Folklore ULBiste" size="30pt"/>
            <NavItemSVG svg="ULB" href="members" tip="Espace Membre" size="22pt"/>
            <span className="d-lg-flex d-none">
            <NavSocial
                color = "white"
                facebook={{url: SETTINGS.contact.facebook, tip:"Suivez nous sur Facebook", id:"navbar"}}
                instagram={{url: SETTINGS.contact.instagram, tip:"Suivez nous sur Instagram", id:"navbar"}}
                discord={{url: '#', tip:"Coming soon", id:"navbar"}}
                email={{url: SETTINGS.contact.email, tip:"Envoyez nous un email", id:"navbar"}}
              /></span>
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    </Headroom>
  );
};
