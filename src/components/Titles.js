import styled from "styled-components";
import style from "../assets/css/style.scss"

export const H1 = styled.h1`
  text-align: center;
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 20pt;
  }
`;

export const H1_2 = styled.h1`
  font-family: "Fjalla One", sans-serif;
  font-weight: 900;
  font-size: 20pt;
  
`;

export const Subtitle = styled.h6`
  font-family: "Fjalla One", sans-serif;
  font-weight: 200;
  opacity: 0.7;
`;

export const H2 = styled.h2`
  text-align: center;
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 12pt;
  }
`;

export const Text = styled.span`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 200;
  opacity: 0.7;
`;

export const H3 = styled.h3`
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
`;

export const Center = styled.div`
  padding: 50px 0px;
  margin: auto;

  @media (max-width: 1280px) {
    width: 85%;
  }

  @media (min-width: 1280px) {
    width: 70%;
  }
`;

export const Quote = styled.p`
  padding: 0 15px;
  text-align: right;
  font-family: "Fjalla One", sans-serif;
  font-style: italic;
  font-weight: 200;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.light};

  &:before {
    content: "«";
  }

  &:after {
    content: "»";
  }
`;

export const Cite = styled.p`
  text-align: right;
  font-family: "Fjalla One", sans-serif;
  font-style: normal;
  color: ${props => props.theme.white};
`;

export const C = styled.span`
  color : ${props => props.color};
`;

export const C1 = styled.span`
  color : ${style.pal0};
`;

export const C2 = styled.span`
  color : ${style.pal1};
`;

export const C3 = styled.span`
  color : ${style.pal2};
`;

export const C4 = styled.span`
  color : ${style.pal3};
`;

export const C5 = styled.span`
  color : ${style.pal4};
`;