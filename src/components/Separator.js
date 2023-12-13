import React from "react";
import { H1 } from "./Titles.js";
import { Row } from "reactstrap";
import styled from "styled-components";
import "../assets/css/style.scss"

export const Sep = styled.div`
  font-weight: 200;

  @media (max-width: 480px) {
    padding: 40px 15px;
  }

  @media (min-width: 480px) {
    padding: 80px 15px;
  }
`;

export default ({ title, Object }) => {
  return (
    <section className="section section-lg section-shaped pg-250 color-secondary font-white">
      <Sep className="h-100">
        <Row className="align-items-center text-center w-100">
          <H1 className="w-100 d-flex align-items-center justify-content-center">
            {title} {Object}
          </H1>
        </Row>
      </Sep>
    </section>
  );
};
