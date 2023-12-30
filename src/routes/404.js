import React from "react";
import { H3 } from "../components/Titles.js";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar.js";
// eslint-disable-next-line
export default () => {
  return (
    <>
      <Helmet>
        <title>404: Not Found</title>
      </Helmet>
      {/*<Navbar/>"*/}

      <section
        className="section section-lg section-shaped pg-250"
        style={{ padding: "100px" }}
      >
        <div className="h-100">
          <Row className="align-items-center">
            <Col className="text-center">
              <H3>404: Not Found</H3>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};
