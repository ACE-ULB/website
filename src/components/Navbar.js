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
  <NavItem>
    <NavLink
    className="nav-link-icon"
    href={`/${href}`}
    id={href}
    >
    {React.createElement(SVGs[svg], {color:"#FFF", width: size, height: size})}
    </NavLink>
    <UncontrolledTooltip delay={0} target={href}>{tip}</UncontrolledTooltip>
  </NavItem>
)}

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
            <NavItemSVG svg="ACE" href="cercle" tip="Le Cercle" size="30pt"/>
            <NavItemSVG svg="Beers" href="events" tip="Nos Événements" size="30pt"/>
            <NavItemSVG svg="Solidarity" href="actions" tip="Actions & Projets" size="30pt"/>
            <NavItemSVG svg="Penne" href="folklore" tip="Folklore ULbiste" size="30pt"/>
            <NavItemSVG svg="ULB" href="members" tip="Espace Membre" size="22pt"/>
            <NavSocial
                color = "white"
                facebook={{url: SETTINGS.contact.facebook, tip:"Suivez nous sur Facebook", id:"navbar"}}
                instagram={{url: SETTINGS.contact.instagram, tip:"Suivez nous sur Instagram", id:"navbar"}}
                discord={{url: SETTINGS.contact.discord, tip:"Rejoignez-nous sur Discord", id:"navbar"}}
                email={{url: SETTINGS.contact.email, tip:"Envoyez nous un email", id:"navbar"}}
              />
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    </Headroom>
  );
};
