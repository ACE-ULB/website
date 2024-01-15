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
// eslint-disable-next-line
export default ({ img, title, svg, h }) => {
  return (
    <section>
      <Banner
        className="img-fluid w-100 h-100"
        alt=""
        src={HOME_SOURCE === window.location.pathname ? 
          require("../assets/img/banner.jpg") : 
          require(`../assets/img/${img}.png`)}
      />
      {HOME_SOURCE === window.location.pathname ? (
        <Row className="align-items-center w-100 m-0" style={{height:"100vh"}}>
          <Col lg="6" sm="0" className="anim_title container-fluid justify-content-center">
            <div style={{margin:"10% 0 0 0"}}>
              <div className="anim_box">
                <div className="anim_title">
                  <span className="anim_block"></span>
                    <h1>{SETTINGS.title}<span className="d-none d-sm-block"></span></h1>
                </div>
                <div className="anim_role">
                  <div className="anim_block"></div>
                  <p>{SETTINGS.subtitle}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" className="text-center logo">
            <img
              className="img-fluid"
              style={{ maxWidth: "90%" }}
              alt=""
              src={require("../assets/img/ACE.png")}
            />
          </Col>
        </Row>
      ) : (
        <Row className="align-items-center w-100 m-0" style={{height:"100vh"}}>
          <Col lg="6" sm="0" className="anim_title container-fluid justify-content-center">
            <div style={{margin:"10% 0 0 0"}}>
              <div className="anim_box">
                <div className="anim_title">
                  <span className="anim_block"></span>
                    <h1>{title}<span className="d-none d-sm-block"></span></h1>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" className="text-center logo">
            <span style={{display:"flex"}}>
            {React.createElement(SVGs[svg], { color: style.palh, width: "500pt", height: h })}
            </span>
          </Col>
        </Row>
      )}
    </section>
  );
};
