import React from "react";
import { Navbar, Separator } from "../components/";
import { H1 } from "../components/Titles";
import { Skew } from "../components/Images";
import { Col, Row } from "reactstrap";
import moment from "moment";
import Journal from "../assets/journal/journal.json";
import { Helmet } from "react-helmet";
// eslint-disable-next-line
export default () => {
  return (
    <>
      <Helmet>
        <title>La Bulle - Journal ACE</title>
      </Helmet>
      <Navbar/>
      <section className="section section-lg section-shaped pg-250">
        <Row className="align-items-center h-100 color-secondary-dark">
          <Col lg="6">
            <H1 className="font-white">La Bulle - Journal ACE & ses Cercles </H1>
          </Col>
          <Col lg="6" className="text-center">
            <Skew src={require("../assets/img/journal.png")} />
          </Col>
        </Row>
      </section>
      {Journal.sort((a, b) => {
        if (a.year > b.year) return -1;
        if (a.year < b.year) return 1;

        return 0;
      }).map(x => (
        <>
          <Separator title={x.year} />
          <section
            style={{ padding: "50px 0" }}
            className="section section-lg section-shaped pg-250"
          >
            <ul>
              {x.content
                .sort((a, b) => {
                  if (a.date > b.date) return -1;
                  if (a.date < b.date) return 1;

                  return 0;
                })
                .map(x => ({ ...x, ...{ date: moment(x.date) } }))
                .map(x => {
                  let prefix = '';

                  if (x.stv) prefix='La Bulle Saint-V - ';
                  else if (x.sf) prefix='La Bulle Semaine Folklo - ';
                  return (
                  <li>
                    <a href={require("../assets/" + x.url)} target="_blank" rel="noreferrer">
                      {prefix + x.date.format("dddd, DD/MM/YYYY")}
                    </a>
                  </li>
                  );
                })}
            </ul>
          </section>
        </>
      ))}
    </>
  );
};
