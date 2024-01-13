import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import NavSocial from './NavSocial';
import SETTINGS from '../settings';
// eslint-disable-next-line
export default () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-md-between">
          <Col md="6">
            {SETTINGS.title} © {new Date().getFullYear()}
          </Col>
          <Col md="6">
            <Nav className=" nav-footer justify-content-end">
              <NavItem>
                <NavLink
                  href="https://opensource.org/licenses/MIT"
                  target="_blank"
                >
                  MIT License
                </NavLink>
              </NavItem>
              <NavSocial
                facebook={{url: SETTINGS.contact.facebook, tip:"Suivez nous sur Facebook", id:"footer"}}
                instagram={{url: SETTINGS.contact.instagram, tip:"Suivez nous sur Instagram", id:"footer"}}
                discord={{url: '#', tip:"Coming soon", id:"footer"}}
                email={{url: SETTINGS.contact.email, tip:"Envoyez nous un email", id:"footer"}}
                github={{url: SETTINGS.contact.github, tip:"Notre code sur Github", id:"footer"}}
              />
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
