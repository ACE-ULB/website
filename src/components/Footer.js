import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavSocial from './NavSocial';
import SETTINGS from '../settings';

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
              <NavSocial/>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href={SETTINGS.contact.github}
                    id="githubtooltip"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="githubtooltip">
                    Notre code sur Github
                  </UncontrolledTooltip>
                </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
