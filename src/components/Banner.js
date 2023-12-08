import React from "react";
import { Banner } from "./Images.js";
import {
  Col,
  Row
} from "reactstrap";
import SETTINGS from "../settings";
import * as SVGs from "../assets/svg";
import '../assets/css/animation.scss';
import style from "../assets/css/style.scss";

const HOME_SOURCE = '/';

export default ({ img, title, svg, h }) => {
  return (
    <section>
      <Banner
        className="img-fluid w-100"
        src={HOME_SOURCE === window.location.pathname ? 
          require("../assets/img/banner.jpg") : 
          require(`../assets/img/${img}.png`)}
      />
      {HOME_SOURCE === window.location.pathname ? (
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
      ) : (
        <Row className="position-relative z-1 align-items-center m-0">
          <Col lg="6" sm="0" className="position-relative anim_title d-none d-sm-block"
            style={{
              marginLeft: "25vw",
              marginRight: "-25vw",
              paddingTop: "30vh",
            }}>
            <div className="anim_box">
              <div className="anim_title">
                <span className="anim_block" style={{margin:"0 0 0 -300px"}}></span>
                  <h1>{title}<span></span></h1>
              </div>
            </div>
          </Col>
          <Col lg="6" className="position-relative text-center logo">
            {React.createElement(SVGs[svg], { color: style.palh, width: "500pt", height: h })}
          </Col>
        </Row>
      )}
    </section>
  );
};
