import React from "react";
import { Button, Card, CardTitle, CardText, CardLink, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { H3, Text } from "./Titles.js";

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
      <CardLink>
        <Link to={props.href} target="_blank">
          <Button block>Leur site web</Button>
        </Link>
      </CardLink>
    </CardBody>
    </Card>
  );
};
