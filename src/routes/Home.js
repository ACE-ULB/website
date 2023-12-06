import React from "react";
import Slider from "react-slick";
import { Banner, Map, NavHomeBar } from "../components/";
import { H3, Text, Center } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";

export default () => {

  return (
        <span>
        <Helmet>
            <title>Association des Cercles Étudiants - Acceuil</title>
        </Helmet>
        <Banner/>
        <NavHomeBar className="color-main font-white"/>
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="caroussel">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
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
              <img src={require("../assets/img/home/1.JPG")}/>
              <img src={require("../assets/img/home/2.JPG")}/>
              <img src={require("../assets/img/home/3.JPG")}/>
              <img src={require("../assets/img/home/4.JPG")}/>
              <img src={require("../assets/img/home/5.JPG")}/>
              <img src={require("../assets/img/home/6.JPG")}/>
              <img src={require("../assets/img/home/7.JPG")}/>
              <img src={require("../assets/img/home/8.JPG")}/>
              <img src={require("../assets/img/home/9.JPG")}/>
              <img src={require("../assets/img/home/10.JPG")}/>
              <img src={require("../assets/img/home/11.JPG")}/>
              <img src={require("../assets/img/home/12.JPG")}/>
              <img src={require("../assets/img/home/13.JPG")}/>
              <img src={require("../assets/img/home/14.JPG")}/>
              <img src={require("../assets/img/home/15.JPG")}/>
              <img src={require("../assets/img/home/16.JPG")}/>
              <img src={require("../assets/img/home/17.JPG")}/>
              <img src={require("../assets/img/home/18.JPG")}/>
              </Slider>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>Qui sommes-nous ?</H3>
                <Text>
                  <p>
                  L’Association des Cercles Étudiants (en abrégé, ACE) est une <u>association étudiante représentative</u>, qui fédère et rassemble les cercles folkloriques de l’<u>Université libre de Bruxelles</u>. Pour le moment, nos cercles membres sont au nombre de <font color="#FF5656">31</font>, et parmi eux on peut trouver des cercles liés à des facultés, des sections d’études ou encore des régions de Belgique. Malgré leur diversité et leurs particularités, nos cercles ont tous pour but cette envie de <u>rassembler des étudiantes et des étudiants</u> autour de projets et de moments communs.
                  </p>
                  <p>
                  Les cercles folkloriques ont pour objectif de <u>perpétuer le folklore</u> et les <u>traditions de l’ULB</u>, ainsi que l’esprit de liberté, de solidarité, d’humour et de dérision qui est caractéristique de la vie étudiante en général. Depuis la création de notre université en <font color="#FF5656">1834</font>, les traditions étudiantes et folkloriques de l’ULB ne cessent de se transmettre, tout en <u>évoluant</u> et en <u>s’enrichissant</u> avec le temps.
                  </p>
                  <p>
                  À travers nos cercles et nos guildes membres, les étudiantes et étudiants font <u>vivre ce folklore et ces traditions</u> en organisant des événements folkloriques, des soirées sur les campus, des TD à la <font color="#FF5656">Jefke</font>, des cantus, des activités socioculturelles et sportives, des conférences, des projets sociaux, des bals, des voyages, ainsi que d’autres <u>moments de partage</u> et de <u>rencontre en général</u>. Certains de nos cercles organisent également des <u>baptêmes</u>, à chaque début d’année académique.
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Map id="location" />
        </span>
    );
}