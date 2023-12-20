import React from "react";
import { Card, CardTitle, CardText, CardLink } from "reactstrap";
import { H2, Text } from "./Titles.js";

export default ({ title, brief, href }) => {
  return (
    <Card body className="grid-item">
      <CardTitle className="text-center">
        <H2>{title}</H2>
      </CardTitle>
      <CardText className="text-center">
        <Text>{brief}</Text>
      </CardText>
      <CardLink>
        {href}
      </CardLink>
    </Card>
  );
};