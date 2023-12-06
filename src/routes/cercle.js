import React from "react";
import Slider from "react-slick";
import '../assets/css/display.scss';
import { Separator, Preview, PreviewCercles } from "../components";
import { H3, Text, Center, Quote, Cite } from "../components/Titles";
import { Overlay, Floating } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import { filterPosts, filterCards } from "../utils/content";
try {
  var ADMIN_SUMMARY_JSON = require("../assets/admin/summary.json");
  var CERCLES_SUMMARY_JSON = require("../assets/cercles/summary.json");
} catch (e) {
  var ADMIN_SUMMARY_JSON = { fileMap: [] };
  var CERCLES_SUMMARY_JSON = { fileMap: [] };
}

export default () => {
    const admin = filterPosts(ADMIN_SUMMARY_JSON, 'src/assets/admin');
    const cercles = filterCards(CERCLES_SUMMARY_JSON, 'src/assets/cercles');

    return (
        <span>
        <Helmet>
            <title>Association des Cercles Étudiants - Le Cercle</title>
        </Helmet>
        <Separator title={"Administratif"} />
        <div id="admin">
        <Slider
          infinite={true}
          slidesToShow={admin.length > 3 ? 3 : admin.length}
          dots={true}
        >
          {admin.map((post) => (
            <Preview {...post} />
          ))}
        </Slider>
        </div>
        <Separator title={"Le Cercle"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="objectifs">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
            <Overlay>
              <img src={require("../assets/img/cercle_objectif.png")}/>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>Quels sont nos objectifs ?</H3>
                <Text>
                  <p>
                  L’ACE a pour objectif principal de représenter ses cercles membres auprès des autorités de l’ULB, et de défendre leurs intérêts communs. Nous servons surtout de relais et de porte-parole avec le Vice-rectorat aux affaires étudiantes, mais également avec d’autres corps de l’université, comme ULB Santé, ULB Culture, la Commission Culturelle, la Commission aux Affaires Sociales Étudiantes, … En plus des instances de l’université, nous faisons également le lien avec les autres associations étudiantes du campus (Bureau des Étudiant·e·s Administateurs·trices, Association Inter-Cercles) et avec l’Union des Anciens Étudiants, l’association des anciens et anciennes de l’université.
                  </p>
                  <p>
                  L’ACE rassemble également les étudiants et étudiantes de ses cercles membres autour d’une direction commune concernant la vie étudiante de l’ULB en général. Nos cercles se réunissent une fois par semaine pour organiser la vie étudiante sur les différents campus, mais aussi pour discuter de projets inter-cercles qui pourraient voir le jour. En plus de ça, nos cercles membres se réunissent occasionnellement en commissions pour parler de sujets plus spécifiques : pour le moment, ont été mises en place les commissions Cantus, Culture, Écologie, Égalité & Inclusivité, Folklore, Librex, Réduction des Risques et Sociale.
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title="Le Comité" />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="comité">
        
        </div>
        </section>
        <Separator title="Les Cercles Membres" />
        <section className="section section-lg section-shaped pg-250">
        <div className="grid-container" id="cercles">
          {cercles.map((card) => (
            <div key={card.acronyme} className="grid-item">
              <PreviewCercles {...card} />
            </div>
          ))}
        </div>
        </section>
        </span>
    );
};