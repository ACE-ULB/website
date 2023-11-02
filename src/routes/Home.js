import React from "react";
import Slider from "react-slick";
import { Banner, Contact, Map, Preview, Separator } from "../components/";
import { H3, Text, Center, Quote, Cite } from "../components/Titles";
import { Overlay, Floating } from "../components/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { filterPosts } from "../utils/content";
import { Button, Container, Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
/*try {
  var SUMMARY_JSON = require("../assets/posts/summary.json");
} catch (e) {
  var SUMMARY_JSON = { fileMap: [] };
}*/

export default () => {
  //const posts = filterPosts(SUMMARY_JSON);

  return (
        <span>
        <Helmet>
            <title>Association des Cercles Étudiants - Acceuil</title>
        </Helmet>
        <Banner />
        </span>
    );
}