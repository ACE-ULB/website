import React from "react";
import { H1 } from "./Titles.js";
import { Row } from "reactstrap";
import styled from "styled-components";
import "../assets/css/style.scss"
import { randColor } from './ContentBar.js'
export const Sep = styled.div`
  font-weight: 200;

  @media (max-width: 480px) {
    padding: 40px 15px;
  }

  @media (min-width: 480px) {
    padding: 80px 15px;
  }
`;
// eslint-disable-next-line
export default ({ title, Object }) => {
  return (
    <section style={{ 'background': randColor}} className="section section-lg section-shaped pg-250 font-white">
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
