import React from "react";
import { Banner } from "./Images.js";
import { Facebook, Instagram, Discord, Mail} from "./NavSocial.js"
import {
  Col,
  Row
} from "reactstrap";
import SETTINGS from "../settings";
import '../assets/css/animation.scss';

export default () => {
  return (
    <section
      className=""
      style={{
        "background-size": "cover",
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover"
      }}
    >
      <Banner
            className="img-fluid w-100"
            src={require("../assets/img/banner.jpg")}
      />
      <Row className="position-relative z-1 align-items-center m-0">
        <Col lg="6" sm="0" className="position-relative anim_title d-none d-sm-block"
          style={{
            marginLeft: "6vw",
            marginRight: "-6vw",
            paddingTop: "30vh",
          }}>
          <div className="anim_box">
            <div className="anim_title">
              <span className="anim_block"></span>
                <h1>{SETTINGS.title}<span></span></h1>
            </div>
            <div className="anim_role">
              <div className="anim_block"></div>
              <p>{SETTINGS.subtitle}</p>
            </div>
          </div>
        </Col>
        <Col lg="6" className="position-relative text-center logo">
          <img
            className="img-fluid"
            style={{ maxWidth: "90%" }}
            src={require("../assets/img/ACE.png")}
          />
        </Col>
      </Row>
    </section>
  );
};
