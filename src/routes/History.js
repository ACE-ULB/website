import React, { useState } from "react";
import { Separator, Timeline, Navbar, Footer } from "../components/";
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
    date: "2024",
    title: "Nouveau site web",
    content: (
      <>
        <p>
          Après plus de 3ans sans siteweb, l'ACE s'offre enfin un nouveau site web !
        </p>
        <p>
          Il sera codé en React App par notre Webmaster Julien, fourni des recherche d'archive de notre Président Pierre et rempli par les textes de Sarah Rousseau.
        </p>
      </>
    ),
  },
  {
    date: "2006",
    title: "Avantages",
    content: (
      <>
        <p>
         Apparaition de l'avantage 1€ = 10 tickets pour les Présidents de Cercle (et de Baptême en période de bleusaille) à la Jefke.
        </p>
      </>
    ),
  },
  {
    date: "2005",
    title: "Comité Folklore",
    content: (
      <>
        <p>
         Mise en place du Comité Folklore, qui se renouvel chaque année, toujours actif aujourd'hui.
        </p>
      </>
    ),
  },
  {
    date: "2005",
    title: "Nouveau logo",
    content: (
      <>
        <p>
          Le logo est changé pour celui encore utilisé aujourd'hui.
        </p>
      </>
    ),
    image: require("../assets/img/ACE.png"),
  },
  {
    date: "2002",
    title: "Déménagement",
    content: (
      <>
        <p>
          Déménagement dans le local actuel au le bâtiment F.
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
          Après le dépôt de bilan de l'ACF, l'ACE reprend le rôle d'association inter-cercles
        </p>
      </>
    ),
  },
  {
    date: "1983",
    title: "l'ACF souhaite amener du changement",
    content: (
      <>
        <p>
          Un document d'archive envoyé aux bureaux des cercles qui parle d'une ACF souhaitant être plus utile que simplement organiser la St-Vé.
          Certainement les prémices de la dissolution de l'ACF et de la création de l'ACE pour céler ce nouvel ère.
        </p>
      </>
    ),
    image: require("../assets/history/ACF veut s_imposer.png"),
  },
  {
    date: "1973",
    title: "Création de l'Association des Cercles Facultaires",
    content: (
      <>
        <p>
          Après le dépôt de bilan de l'AGE, l'ACF sera créé pour faire perdurer le rôle de sa prédécesseuse
        </p>
      </>
    ),
  },
  {
    date: "1970",
    title: "Dissolution de l'Association Générale des Étudiants",
    content: (
      <>
        <p>
          Nous ne savons pas vous en détailler la raison pour le moment.
        </p>
      </>
    ),
  },
  {
    date: "1887",
    title: "Création de l'Association Générale des Étudiants",
    content: (
      <>
        <p>
          Après une association précédente dessinant les prémissent d'une association fédératrice pour les cercles (à l'époque très peu nombreux) afin de faciliter la communication avec l'ULB, la presse et l'organisation de la St-V. C'était d'ailleurs l'une de ses rares réelle occupation.
        </p>
      </>
    ),
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
