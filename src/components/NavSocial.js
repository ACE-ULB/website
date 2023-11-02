import React from "react";
import { UncontrolledTooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SETTINGS from "../settings";

export const Facebook = ({ color }) => {
  return (
    SETTINGS.contact.facebook && (
      <div>
        <a
          className="nav-link-icon"
          style={{ color: color }}
          href={SETTINGS.contact.facebook}
          id="facebooktooltip"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          <span className="nav-link-inner--text d-lg-none ml-2">Facebook</span>
        </a>
        <UncontrolledTooltip delay={0} target="facebooktooltip">
          Suivez nous sur Facebook
        </UncontrolledTooltip>
      </div>
    )
  );
};
export const Instagram = ({ color }) => {
    return (
      SETTINGS.contact.instagram && (
      <div>
        <div
          className="nav-link-icon"
          style={{ color: color }}
          href={SETTINGS.contact.instagram}
          id="instagramtooltip"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <span className="nav-link-inner--text d-lg-none ml-2">Instagram</span>
        </div>
        <UncontrolledTooltip delay={0} target="instagramtooltip">
          Suivez nous sur Instagram
        </UncontrolledTooltip>
      </div>
    )
    );
};
export const Discord = ({ color }) => {
    return (
      SETTINGS.contact.discord && (
      <div>
        <div
          className="nav-link-icon"
          style={{ color: color }}
          href={SETTINGS.contact.discord}
          id="instagramtooltip"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "discord"]} />
          <span className="nav-link-inner--text d-lg-none ml-2">Discord</span>
        </div>
        <UncontrolledTooltip delay={0} target="instagramtooltip">
          Rejoignez-nous sur Discord
        </UncontrolledTooltip>
      </div>
    )
    );
};
export const Mail = ({ color }) => {
    return (
      SETTINGS.contact.email && (
      <div>
        <div
          className="nav-link-icon"
          style={{ color: color }}
          href={`mailto:${SETTINGS.contact.email}`}
          id="mailtooltip"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fas", "envelope"]} />
          <span className="nav-link-inner--text d-lg-none ml-2">Mail</span>
        </div>
        <UncontrolledTooltip delay={0} target="mailtooltip">
          Envoyez nous un email
        </UncontrolledTooltip>
      </div>
    )
    );
};