import React from "react";
import Slider from "react-slick";
import { Banner, Map, ContentBar, Footer } from "../components/";
import { H3, Text, Center, C1 } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";

const contentArrays = [
  {svg: "ACE", id: "cercle", title: "Le Cercle", width: "120pt", height: "120pt"},
  {svg: "Beers", id: "events", title: "Événements", width: "120pt", height: "120pt"},
  {svg: "Solidarity", id: "actions", title: "Actions", width: "120pt", height: "120pt"},
  {svg: "Penne", id: "folklore", title: "Folklore", width: "120pt", height: "120pt"},
  {svg: "ULB", id: "members", title: "Espace Membres", width: "120pt", height: "120pt"},
]
// eslint-disable-next-line
export default () => {

  return (
        <span>
        <Helmet>
            <title>Accueil - Association des Cercles Étudiants</title>
        </Helmet>
        <Banner/>
        <ContentBar links={contentArrays}/>
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="caroussel">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0" style={{display:"flex"}}>
            <Overlay>
              <Slider
                infinite={true}
                slidesToShow={1}
                dots={false}
                speed={3500}
                autoplaySpeed={1500}
                fade={true}
                autoplay={true}
                arrows={false}
              >
              <img src={require("../assets/img/home/1.png")} alt=""/>
              <img src={require("../assets/img/home/2.png")} alt=""/>
              <img src={require("../assets/img/home/3.png")} alt=""/>
              <img src={require("../assets/img/home/4.png")} alt=""/>
              <img src={require("../assets/img/home/6.png")} alt=""/>
              <img src={require("../assets/img/home/7.png")} alt=""/>
              <img src={require("../assets/img/home/8.png")} alt=""/>
              <img src={require("../assets/img/home/9.png")} alt=""/>
              <img src={require("../assets/img/home/10.png")} alt=""/>
              <img src={require("../assets/img/home/11.png")} alt=""/>
              <img src={require("../assets/img/home/12.png")} alt=""/>
              <img src={require("../assets/img/home/13.png")} alt=""/>
              <img src={require("../assets/img/home/14.png")} alt=""/>
              <img src={require("../assets/img/home/15.png")} alt=""/>
              <img src={require("../assets/img/home/16.png")} alt=""/>
              <img src={require("../assets/img/home/17.png")} alt=""/>
              </Slider>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>Qui sommes-nous ?</H3>
                <Text>
                  <p>
                  L’Association des Cercles Etudiants (<C1>ACE</C1>) a pour mission de fédérer et représenter les <C1>31 Cercles folkloriques</C1> actifs sur les campus de l’Université libre de Bruxelles. Parmi ceux-ci se trouvent les Cercles liés à une faculté ou à une ou plusieurs sections, les régionales au nombre de huit, ainsi que des membres conseillers tels le Cercle du Libre Examen ou la Fédération Unie des Guildes, qui coordonne le <C1>folklore chantant</C1>. Avec une grande diversité d'activités et des identités propres, ces Cercles s’attachent tous à promouvoir le <C1>principe du libre examen</C1>, l’<C1>esprit d’initiative</C1> et la <C1>camaraderie étudiante</C1>. Ensemble, ils rassemblent près d'un millier d’étudiant.e.s engagé.e.s.
                  </p>
                  <p>
                  Les Cercles ont pour objet la perpétuation du <C1>folklore ULBiste</C1> et la transmission de ses <C1>traditions</C1> : un héritage empreint de liberté, de revendications, de solidarité, et de dérision, valeurs essentielles de notre <C1>Alma Mater</C1>.
                  </p>
                  <p>
                  Les Cercles et les Guildes <C1>rythment l’année académique</C1> de leurs membres et sympathisant.e.s en proposant d’innombrables services étudiants et activités, qu’elles soient <C1>sociales</C1>, <C1>festives</C1>, <C1>culturelles</C1>, <C1>sociétales</C1> ou <C1>sportives</C1>. Certains Cercles folkloriques sont également <C1>baptismaux</C1>; ce dernier a lieu lors du premier quadrimestre et est une opportunité proposée à chaque étudiant.e de l'Université.
                  </p>
                  <p>
                  L'ACE est animée par une <C1>vingtaine de délégué.e.s</C1>. Elle <C1>représente</C1> ses membres devant les autorités, la communauté universitaire et le monde extérieur; et <C1>coordonne</C1> les efforts des Cercles à travers plusieurs commissions. Elle est également en charge de l’encadrement des activités folkloriques et baptismales et organise des évènements rassembleurs pour la communauté universitaire.
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Map id="location" />
        <Footer/>
        </span>
    );
};