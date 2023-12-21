import React from "react";
import { Navbar, Separator } from "../components/";
import { H1 } from "../components/Titles";
import { Skew } from "../components/Images";
import { Col, Row } from "reactstrap";
import moment from "moment";
import PV from "../assets/pv/pv.json";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <>
      <Helmet>
        <title>Procès Verbaux</title>
      </Helmet>
      <Navbar/>
      <section className="section section-lg section-shaped pg-250">
        <Row className="align-items-center h-100 color-secondary-dark">
          <Col lg="6">
            <H1 className="font-white">Procès Verbaux - Réunions/AG ACE & OA </H1>
          </Col>
          <Col lg="6" className="text-center">
            <Skew src={require("../assets/img/pv.png")} />
          </Col>
        </Row>
      </section>
      {PV.sort((a, b) => {
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

                  if (x.ag) prefix='Assemblée Générale - ';
                  else if (x.ace) prefix='Réunion ACE - ';
                  else if (x.oa) prefix="Réunion Comité - ";
                  return (
                  <li>
                    <a href={require("../assets/" + x.url)} target="_blank">
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
