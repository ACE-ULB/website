import React, { useState } from 'react';
import { Separator } from './'
import { filterYears } from "../utils/content";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, UncontrolledTooltip } from 'reactstrap';
import '../assets/css/style.scss'
import '../assets/css/animation.scss'
import { H1 } from './Titles';
try {
    var COMITE_SUMMARY_JSON = require("../assets/comite/summary.json");
} catch (e) {
    // eslint-disable-next-line
    var COMITE_SUMMARY_JSON = { fileMap: [] };
}

const YearSelector = ({ years, onSelect, current }) => {
  return (
    <span>
    <UncontrolledDropdown>
    <DropdownToggle
        caret
        drop="down"
        className='d-flex align-items-center'
        id='dropdowntooltip'
        style= {{
            backgroundColor: 'transparent',
            borderColor: 'transparent'
        }}
    >
        <H1> : <u>{current}</u></H1>
    </DropdownToggle>
    <UncontrolledTooltip delay={0} target="dropdowntooltip">Clique sur l'année de ton choix !</UncontrolledTooltip>
    <DropdownMenu>
        {years.map((year) => (
            <DropdownItem value={year} onClick={(e) => onSelect(e.target.value)}>
                {year}
            </DropdownItem>
        ))}
    </DropdownMenu>
    </UncontrolledDropdown>
    </span>
  );
};
// eslint-disable-next-line
export default () => {
  const yearsDirectory = filterYears(COMITE_SUMMARY_JSON, 'src/assets/comite');
  const [selectedYear, setSelectedYear] = useState(yearsDirectory[0]?.year.toString());
  const postesContent = require('../assets/comite/postes.json');

  const getContentPoste = (poste) => {
    return postesContent[poste.replace(/\d+$/, '')] || "Aucune description disponible";
  };

  const getPicture = (comite, title) => {
    return (comite[title].img ? (
        <img src={require(`../assets/comite/${comite.year}/photos/${title}.png`)} alt={title}/>
    ) : (
        <img src={require(`../assets/comite/empty.png`)} alt={title}/>))
  };

  const getCercle = (comite, title) => {
    return (comite[title].cercle ? (
        <a href={`cercle/#${comite[title]?.cercle}`}><img src={require(`../assets/cercles/logos/${comite[title].cercle}.png`)} alt=""/></a>
    ) : (
        <img src={require(`../assets/comite/unknow.png`)} alt=""/>))
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <>
    <Separator 
        title="Le Comité"
        Object={React.createElement(YearSelector, { years: yearsDirectory.map((comite) => comite.year), onSelect: handleYearChange, current: selectedYear })}
    />
    <section className="section section-lg section-shaped pg-250"
        style={{marginTop:"30px", marginBottom:"30px"}}>
    <div className='h-100 card__comite grid-container'>
        {yearsDirectory
        .filter((comite) => comite.year.toString() === selectedYear)
        .map((comite) => (
            <>
            {Object.keys(comite).map((title) => (
                (title !== "year" && comite[title].nom ? (
                <div className="wrapper card-item">
                <div className="card">
                    {comite[title].dem ? (
                    <div className="poster demission">
                    {getPicture(comite, title)}
                    </div>) : (
                    <div className="poster">
                        {getPicture(comite, title)}
                    </div>)}
                    <div style={{'z-index':0}} className="details">
                        <h1>{comite[title].nom}</h1>
                        {comite[title].dem ? (
                        <h2>Démissionnaire - {comite[title].poste}</h2>
                        ) : (
                        <h2>{comite[title].poste}</h2>)}
                        <p className="desc">
                            {getContentPoste(title)}
                        </p>
                        <div className="cast">
                            <ul>
                                <li>{getCercle(comite, title)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                ) : null)
            ))}
            </>
        ))}
    </div>
    </section>
    </>
  );
};
