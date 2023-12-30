import React, { useEffect, useRef, useState } from "react";
import "../assets/css/counter-style.scss";
import '../assets/css/animation.scss';
import { Helmet } from "react-helmet";
import { Banner } from "../components/Images.js";
import { Col, Row } from "reactstrap";

// eslint-disable-next-line
export default () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const countdownRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date('2024-01-03T18:00:00');

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const secondsLeft = (targetDate - currentDate) / 1000;

      setDays(pad(parseInt(secondsLeft / 86400)));
      setHours(pad(parseInt((secondsLeft % 86400) / 3600)));
      setMinutes(pad(parseInt((secondsLeft % 3600) / 60)));
      setSeconds(pad(parseInt(secondsLeft % 60)));
    };

    const pad = (n) => (n < 10 ? "0" + n : "" + n);

    const intervalId = setInterval(updateCountdown, 1000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <Helmet>
        <title>Association des Cercles Étudiants</title>
    </Helmet>
    <section>
    
    </section>
    <section>
      <Banner
        className="img-fluid w-100"
        alt=""
        src={require("../assets/img/banner.jpg")}
      />
        <Row className="position-relative align-items-center m-0">
          <Col lg="6" sm="12">
            <span className="justify-content-center d-flex align-middle">
                <div id="countdown">
                <div ref={countdownRef} id="tiles">
                    <span>{days}</span>
                    <span>{hours}</span>
                    <span>{minutes}</span>
                    <span>{seconds}</span>
                </div>
                <div className="labels">
                    <li>Days</li>
                    <li>Hours</li>
                    <li>Mins</li>
                    <li>Secs</li>
                </div>
                </div>
            </span>
          </Col>
          <Col lg="6" className="d-lg-flex d-none justify-content-center align-middle">
            <img
              className="img-fluid"
              style={{ maxWidth: "90%" }}
              alt=""
              src={require("../assets/img/ACE.png")}
            />
          </Col>
        </Row>
    </section>
    </>
  );
};