import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { H3 } from "./Titles"
import * as SVGs from "../assets/svg";

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
          <p><SVGs.ACE color="#FF5656" /></p>
          <p><H3>Le Cercle</H3></p>
          </Col>
          <Col lg="2">
          <p><SVGs.Beers color="#FFCC37" /></p>
          <p><H3>Évènements</H3></p>
          </Col>
          <Col lg="2">
          <p><SVGs.Solidarity color="#84C825" /></p>
          <p><H3>Actions</H3></p>
          </Col>
          <Col lg="2">
          <p><SVGs.Penne color="#1875C3" /></p>
          <p><H3>Folklore</H3></p>
          </Col>
          <Col lg="2">
          <p><SVGs.ULB color="#6F4B92" /></p>
          <p><H3>Espace Membres</H3></p>
          </Col>
        </Row>
      </NavHome>
    </section>
  );
};
