import React from "react";
import { NavItem, NavLink, UncontrolledTooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line
export default ({
   color,
   size,
   website, 
   facebook,
   instagram,
   discord,
   email,
   github
  }) => (
  <>
    {website && (
      website.url && (
        <NavItem>
          <NavLink
            className="nav-link-icon"
            style={{ color: color }}
            href={website.url}
            id={`website${website.id}`}
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-solid fa-globe" size={size}/>
            <span className="nav-link-inner--text d-lg-none ml-2"></span>
          </NavLink>
          <UncontrolledTooltip delay={0} target={`website${website.id}`}>
            {website.tip}
          </UncontrolledTooltip>
        </NavItem>
      )
    )}  
    {facebook && (
      facebook.url && (
        <NavItem>
          <NavLink
            className="nav-link-icon"
            style={{ color: color }}
            href={facebook.url}
            id={`facebook${facebook.id}`}
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} size={size}/>
            <span className="nav-link-inner--text d-lg-none ml-2"></span>
          </NavLink>
          <UncontrolledTooltip delay={0} target={`facebook${facebook.id}`}>
            {facebook.tip}
          </UncontrolledTooltip>
        </NavItem>
      )
    )}
    {instagram && (
      instagram.url && (
        <NavItem>
          <NavLink
            className="nav-link-icon"
            style={{ color: color }}
            href={instagram.url}
            id={`instagram${instagram.id}`}
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} size={size}/>
            <span className="nav-link-inner--text d-lg-none ml-2"></span>
          </NavLink>
          <UncontrolledTooltip delay={0} target={`instagram${instagram.id}`}>
            {instagram.tip}
          </UncontrolledTooltip>
        </NavItem>
      )
    )}
    {discord && (
      discord.url && (
        <NavItem>
          <NavLink
            className="nav-link-icon"
            style={{ color: color }}
            href={discord.url}
            id={`discord${discord.id}`}
            target="_blank"
         size={size} >
            <FontAwesomeIcon icon={["fab", "discord"]} size={size}/>
            <span className="nav-link-inner--text d-lg-none ml-2"></span>
          </NavLink>
          <UncontrolledTooltip delay={0} target={`discord${discord.id}`}>
            {discord.tip}
          </UncontrolledTooltip>
        </NavItem>
      )
    )}
    {email && (
      email.url && (
        <NavItem>
          <NavLink
            className="nav-link-icon"
            style={{ color: color }}
            href={`mailto:${email.url}`}
            id={`mail${email.id}`}
            target="_blank"
          >
            <FontAwesomeIcon icon={["fas", "envelope"]} size={size}/>
            <span className="nav-link-inner--text d-lg-none ml-2"></span>
          </NavLink>
          <UncontrolledTooltip delay={0} target={`mail${email.id}`}>
            {email.tip}
          </UncontrolledTooltip>
        </NavItem>
      )
    )}
    {github && (
      github && (
        <NavItem>
          <NavLink
            className="nav-link-icon"
            style={{ color: color }}
            href={github.url}
            id={`github${github.id}`}
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "github"]} size={size}/>
            <span className="nav-link-inner--text d-lg-none ml-2"></span>
          </NavLink>
          <UncontrolledTooltip delay={0} target={`github${github.id}`}>
            {github.tip}
          </UncontrolledTooltip>
        </NavItem>
      )
    )}
  </>
);
