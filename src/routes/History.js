import React from "react";
import { Separator, Timeline, Pdf, Navbar } from "../components/";
import { H1 } from "../components/Titles";
import { Skew } from "../components/Images";
import { Button, Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";

const history = [
  {
    date: "2023",
    title: "Nouveau site web",
    content: (
      <>
        <p>
          Après plus de 2ans sans siteweb, l'ACE s'offre enfin un nouveau site web !
        </p>
        <p>
          Elle sera codée en React App par notre cher Webmaster Julien et rempli par les textes de Sarah Rousseau réalisé 2ans auparavant mais restants en standbye.
        </p>
      </>
    ),
  },
  {
    date: "1989",
    title: "Création de l'Association des Cercles Étudiants",
    content: (
      <>
        <p>
          Après le dépôt de bilan de l'AG(E), l'ACE est crée pour répondre au besoin d'une association inter-cercles
        </p>
        <p>
          Les activités de l'époque étaient les suivantes:
          <ul>
            <li>Des thé-dansants.</li>
            <li>
              Des bals.
            </li>
          </ul>  
        </p>
      </>
    ),
    image: require("../assets/img/ACE.png"),
  },
];

export default () => {
  return (
    <>
      <Helmet>
        <title>Historique</title>
      </Helmet>
      <Navbar/>
      <section className="section section-lg section-shaped pg-250">
        <Row className="align-items-center h-100 color-secondary-dark">
          <Col lg="6">
            <H1 className="font-white">L'ACE au fil du temps</H1>
          </Col>
          <Col lg="6" className="text-center">
            <Skew src={require("../assets/img/history.png")} />
          </Col>
        </Row>
      </section>
      <Separator title={"Historique de l'Association des Cercles Étudiants"} />
      <section className="section section-lg section-shaped pg-250">
        <div style={{ padding: "50px 50px" }}>
          <Timeline timeline={history} />
        </div>
      </section>
    </>
  );
};
