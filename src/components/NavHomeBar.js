import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { H3 } from "./Titles"
import * as SVGs from "../assets/svg";
import { NavHashLink } from "react-router-hash-link";

const NavLinkS = ({ to, children }) => (
  <NavHashLink activeClassName="" className="font-white nav-link" to={to}>
    {children}
  </NavHashLink>
);

export const NavHome = styled.div`
  font-weight: 200;

  @media (max-width: 480px) {
    padding: 15px 15px;
  }

  @media (min-width: 480px) {
    padding: 20px 15px;
  }
`;

export default () => {
  return (
    <section className="section section-lg section-shaped pg-250 color-main font-white">
      <NavHome className="h-100">
        <Row className="align-items-center text-center w-100">
          <Col lg="1"></Col>
          <Col lg="2">
            <NavLinkS to="/cercle">
              <p><SVGs.ACE color="#FF5656" /></p>
              <p><H3>Le Cercle</H3></p>
            </NavLinkS>
          </Col>
          <Col lg="2">
            <NavLinkS to="/events">
              <p><SVGs.Beers color="#FFCC37" /></p>
              <p><H3>Évènements</H3></p>
            </NavLinkS>
          </Col>
          <Col lg="2">
            <NavLinkS to="/actions">
              <p><SVGs.Solidarity color="#84C825" /></p>
              <p><H3>Actions</H3></p>
            </NavLinkS>
          </Col>
          <Col lg="2">
            <NavLinkS to="/folklore">
              <p><SVGs.Penne color="#1875C3" /></p>
              <p><H3>Folklore</H3></p>
            </NavLinkS>
          </Col>
          <Col lg="2">
            <NavLinkS to="/members">
              <p><SVGs.ULB color="#6F4B92" /></p>
              <p><H3>Espace Membres</H3></p>
            </NavLinkS>
          </Col>
        </Row>
      </NavHome>
    </section>
  );
};
