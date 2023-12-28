import React from "react";
import { Row, Col, Card, CardTitle, CardText, CardLink, CardBody, Nav } from "reactstrap";
import { H3, Text } from "./Titles.js";
import { NavHashLink } from "react-router-hash-link";
import * as SVGs from "../assets/svg";
import NavSocial from "./NavSocial.js";

const NavLinkS = ({ to, children }) => (
  <NavHashLink className="font-white nav-link" to={to}>
    {children}
  </NavHashLink>
);

export default props => {
  const source = props.source;
  return (
    <Card
      color="light"
      outline
    >
      <img
        src={require(`../assets/${source}/logos/${props.acronyme}.png`)}
        alt={props.acronyme}
        style={{ 
          width: '200px',
          position: "relative",
          marginTop: "5px"
        }}
        className="container-fluid justify-content-center"
      />
    <CardBody>
      <CardTitle className="text-center">
        <H3>{props.cercle}</H3>
      </CardTitle>
      <CardText className="text-center">
        <Text>{props.brief}</Text>
      </CardText>
      <CardLink>
        <Nav className="justify-content-center">
          <NavSocial
            color = {props.color}
            size = "2x"
            website={{url: props.href, tip:`Consultez le site du ${props.acronyme}`, id:`${props.acronyme}`}}
            facebook={{url: props.fb, tip:`Consultez le Facebook du ${props.acronyme}`, id:`${props.acronyme}`}}
            instagram={{url: props.ig, tip:`Consultez l'Instagram du ${props.acronyme}`, id:`${props.acronyme}`}}
          />
        </Nav>
      </CardLink>
    </CardBody>
    </Card>
  );
};
