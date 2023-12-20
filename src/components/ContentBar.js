import React from "react";
import styled from "styled-components";
import { H3 } from "./Titles"
import * as SVGs from "../assets/svg";
import { NavHashLink } from "react-router-hash-link";
import "../assets/css/display.scss";
import style from "../assets/css/style.scss";

export const NavLinkS = ({ to, children }) => (
  <NavHashLink className="font-white nav-link" to={to}>
    {children}
  </NavHashLink>
);

export const NavStyle = styled.div`
  font-weight: 200;

  @media (max-width: 480px) {
    padding: 15px 15px;
  }

  @media (min-width: 480px) {
    padding: 20px 15px;
  }
`;

export default ({ links }) => {
    return (
    <>
    <section className="section section-lg section-shaped pg-250 color-main font-white">
      <NavStyle className="h-100 grid-container text-center align-items-center">
      {links.map((link, index) => (
        <NavLinkS key={index} to={`/${link.id}`} className="content-item">
          <p>{React.createElement(SVGs[link.svg], { color: style[`pal${index % 5}`], width: link.width, height: link.height })}</p>
          <p><H3>{`${link.title}`}</H3></p>
        </NavLinkS>
      ))}
      </NavStyle>
    </section>
    </>
  );
};
