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

export default () => {
  const yearsDirectory = filterYears(COMITE_SUMMARY_JSON, 'src/assets/comite');
  const [selectedYear, setSelectedYear] = useState(yearsDirectory[0]?.year.toString());
  const postesContent = require('../assets/comite/postes.json');

  const getContentPoste = (poste) => {
    return postesContent[poste.replace(/\d+$/, '')] || "Aucune description disponible";
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
                    <div className="poster">
                        <img src={require(`../assets/comite/${comite.year}/photos/${title}.png`)}/>
                    </div>
                    <div className="details">
                        <h1>{comite[title].nom}</h1>
                        <h2>{comite[title].poste}</h2>
                        <p className="desc">
                            {getContentPoste(title)}
                        </p>
                        <div className="cast">
                            <ul>
                                <li><a href={`cercle/#${comite[title]?.cercle}`}><img src={require(`../assets/cercles/logos/${comite[title].cercle}.png`)}/></a></li>
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
