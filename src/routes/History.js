import React, { useState } from "react";
import { Separator, Timeline, Navbar } from "../components/";
import { Center, H1, H3, Text } from "../components/Titles";
import { Skew } from "../components/Images";
import { Row, Col, Alert } from "reactstrap";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Popup = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Center>
    <Alert color="warning" isOpen={visible} toggle={onDismiss}>
        <H3>
          <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" /> Sujet à modification
        </H3>
        <Text>
          Nous vous présentons toutes nos plus sincères excuses, cette page n'est absolument pas complète.
          Nous avons bien l'intention de faire prochainement un gros travail d'archive, afin d'étaler avec fierté sur cette page,
          la tumulteuse et passionnante histoire de l'ACE et ses origines.
        </Text>
        <hr/>
        <Text>
          <FontAwesomeIcon icon="fa-solid fa-envelope" /> Nous sommes très demandeur de toutes informations, documents et photos pouvant enrichir cette ligne du temps.
          Veuillez les envoyer à l'email : <a href="mailto:web@ace-ulb.be">web@ace-ulb.be</a>. Merci !
        </Text>
    </Alert>
    </Center>
)}

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
          Il sera codé en React App par notre cher Webmaster Julien et rempli par les textes de Sarah Rousseau.
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
// eslint-disable-next-line
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
      <Popup/>
      <section className="section section-lg section-shaped pg-250">
        <div style={{ padding: "50px 50px" }}>
          <Timeline timeline={history} />
        </div>
      </section>
    </>
  );
};
