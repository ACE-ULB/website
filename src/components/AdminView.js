import React from "react";
import { Card, CardTitle, CardText, CardLink, Button } from "reactstrap";
import { H2, Text } from "./Titles.js";
import { Link } from "react-router-dom";

export default ({ title, brief, href }) => {
  const handleClick = (props) => {
    {props === 'pv' ? (
      window.location.href = '/cercle/pv'
    ) : (
      window.open(require(`../assets/admin/${props}.pdf`), '_blank')
    )}
  };

  return (
    <Card body className="grid-item">
      <CardTitle className="text-center">
        <H2>{title}</H2>
      </CardTitle>
      <CardText className="text-center">
        <Text>{brief}</Text>
      </CardText>
      <CardLink>
          <Button block onClick={() => handleClick(href)}>
            Parcourir le contenu
          </Button>
      </CardLink>
    </Card>
  );
};