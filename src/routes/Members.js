import React from "react";
import { H1, H2 } from "../components/Titles.js";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar.js";
import "../assets/css/construction.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer.js";
// eslint-disable-next-line
export default () => {
  return (
    <>
      <Helmet>
        <title>Indisponible - Espace Membre</title>
      </Helmet>
      <Navbar/>

      <section
        className="section section-lg section-shaped pg-250"
        style={{ padding: "100px" }}
      >
        <div className="h-100 w-100">
          <Row className="align-items-center" style={{height:"60vh"}}>
            <Col lg="6" className="text-center">
              <H1>Projet en construction</H1>
              <H2>Page indisponible</H2>
              <H2><a href="https://youtu.be/dQw4w9WgXcQ"><FontAwesomeIcon icon="fa-solid fa-eye" /> <u>Consulter le plan du projet</u></a></H2>
            </Col>
            <Col lg="6">
              <div className="d-flex m-50">
              <div className="construction"></div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};
