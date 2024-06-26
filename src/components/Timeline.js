import React, { useState } from "react";
import Slider from "react-slick";
import { H2, Text } from "../components/Titles";
import "../assets/css/timeline.scss";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";

const Enhance = ({ src }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <img className="w-100" onClick={toggle} src={src} alt=""/>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <img className="w-100" onClick={toggle} src={src} alt=""/>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Fermer</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
// eslint-disable-next-line
export default ({ timeline }) => {
  return (
    <ul style={{'z-index':0}} className="timeline">
      {timeline.map((e, i) => (
        <li className={i % 2 ? "timeline-inverted" : null}>
          <div className="timeline-image">
            <H2 style={{ paddingTop: "20px" }}>{e.date}</H2>
          </div>
          <div className="timeline-panel">
            <Row className="timeline-body">
              <Card body>
                <CardTitle className="text-center">
                  <H2>{e.title}</H2>
                </CardTitle>
                {e.content || e.image ? (
                  <CardText>
                    {typeof e.content == "string" ? (
                      <Text>{e.content}</Text>
                    ) : (
                      e.content
                    )}
                    <div style={{ padding: "0px 20px", paddingTop: "10px", margin:"auto", maxWidth:`${e.imgWidth}` }}>
                      {e.image ? (
                        Array.isArray(e.image) ? (
                          <Slider
                            infinite={true}
                            slidesToShow={1}
                            arrows={true}
                            dots={false}
                            fade={true}
                            centerMode={true}
                            draggable={false}
                            swipe={false}
                            touchMove={false}
                            speed={1000}
                          >
                            {e.image.map((x, i) => (
                              <img key={i} src={x} alt=""/>
                            ))}
                          </Slider>
                        ) : (
                          <Enhance src={e.image}/>
                        )
                      ) : null}
                    </div>
                  </CardText>
                ) : null}
              </Card>
            </Row>
          </div>
        </li>
      ))}
    </ul>
  );
};
