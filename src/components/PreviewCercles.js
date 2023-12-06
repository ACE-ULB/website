import React from "react";
import { Button, Row, Col, Card, CardTitle, CardText, CardLink, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { H3, Text } from "./Titles.js";
import { NavHashLink } from "react-router-hash-link";
import * as SVGs from "../assets/svg";

const NavLinkS = ({ to, children }) => (
  <NavHashLink activeClassName="" className="font-white nav-link" to={to}>
    {children}
  </NavHashLink>
);

export default props => {
  return (
    <Card
      color="light"
      outline
    >
      <img 
        src={require(`../assets/cercles/logos/${props.acronyme}.png`)}
        alt={props.acronyme}
        style={{ 
          width: '200px',
          position: "relative",
          left: "32%",
          marginTop: "5px"
        }}
      />
    <CardBody>
      <CardTitle className="text-center">
        <H3>{props.cercle}</H3>
      </CardTitle>
      <CardText className="text-center">
        <Text>{props.brief}</Text>
      </CardText>
      <CardLink
      style={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        <Row className="m-0">
          <Col lg="4">
            <NavLinkS to={props.href} target="_blank">
              <SVGs.Website color="#000" size="40" />
            </NavLinkS>
          </Col>
          <Col lg="4">
            <NavLinkS to={props.fb} target="_blank">
              <SVGs.Facebook color="#1877F2" size="40" />
            </NavLinkS>
          </Col>
          <Col lg="4">
            <NavLinkS to={props.ig} target="_blank">
              <SVGs.Instagram color="#833AB4" size="40" />
            </NavLinkS>
          </Col>
        </Row>
      </CardLink>
    </CardBody>
    </Card>
  );
};
