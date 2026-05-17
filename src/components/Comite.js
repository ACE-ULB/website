import React, { useState } from 'react';
import { Separator } from './'
import { filterYears } from "../utils/content";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, UncontrolledTooltip } from 'reactstrap';
import '../assets/css/style.scss'
import '../assets/css/animation.scss'
import { H1 } from './Titles';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
  const postesMail = require('../assets/comite/mails.json');

  // ── Legacy helpers (named-object format, years 2019-2024) ──────────────

  const getContentPoste = (poste) => {
    return postesContent[poste.replace(/\d+$/, '')] || "Aucune description disponible";
  };

  const getMailPoste = (poste) => {
    return postesMail[poste.replace(/\d+$/, '')] || "Aucune mail disponible";
  };

  // Returns an <img> for the legacy named-object format
  const getPicture = (comite, title) => {
    const imgValue = comite[title].img;
    // New CMS upload: absolute path string like "/static/img/comite/…"
    if (typeof imgValue === 'string' && imgValue.length > 0) {
      return <img src={imgValue} alt={title}/>;
    }
    // Legacy: `true` (original format) OR `""` (replaced for CMS compat)
    // → load the pre-existing photo from src/assets, bundled by webpack
    if (imgValue === true || imgValue === '') {
      try {
        return <img src={require(`../assets/comite/${comite.year}/photos/${title}.png`)} alt={title}/>;
      } catch (e) {
        return <img src={require(`../assets/comite/empty.png`)} alt={title}/>;
      }
    }
    return <img src={require(`../assets/comite/empty.png`)} alt={title}/>;
  };

  const getCercle = (comite, title) => {
    return (comite[title].cercle ? (
        <a href={`cercle/#${comite[title]?.cercle}`}><img src={require(`../assets/cercles/logos/${comite[title].cercle}.png`)} alt=""/></a>
    ) : (
        <img src={require(`../assets/comite/unknow.png`)} alt=""/>))
  };

  // ── New helpers (membres[] array format, 2025+) ────────────────────────

  // Returns an <img> for the new list-based format
  const getPictureFromMembre = (membre) => {
    if (typeof membre.img === 'string' && membre.img.length > 0) {
      return <img src={membre.img} alt={membre.nom}/>;
    }
    return <img src={require(`../assets/comite/empty.png`)} alt={membre.nom}/>;
  };

  const getCercleFromMembre = (membre) => {
    if (membre.cercle) {
      try {
        return (
          <a href={`cercle/#${membre.cercle}`}>
            <img src={require(`../assets/cercles/logos/${membre.cercle}.png`)} alt={membre.cercle}/>
          </a>
        );
      } catch (e) {
        // cercle logo not found
      }
    }
    return <img src={require(`../assets/comite/unknow.png`)} alt=""/>;
  };

  // ── State ──────────────────────────────────────────────────────────────

  const [openCard, setOpenCard] = useState(null);

  const handleCardClick = (key) => {
    setOpenCard(openCard === key ? null : key);
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
            <React.Fragment key={comite.year}>

              {/* ── New format : membres[] array (CMS list widget) ── */}
              {Array.isArray(comite.membres) ? (
                comite.membres.map((membre, index) => {
                  const cardKey = `${comite.year}-${index}`;
                  return (
                    <div key={cardKey} className="wrapper card-item" onClick={() => handleCardClick(cardKey)}>
                    <div className="card">
                        {membre.dem ? (
                          <div className="poster demission">
                            {getPictureFromMembre(membre)}
                          </div>
                        ) : (
                          <div className="poster">
                            {getPictureFromMembre(membre)}
                          </div>
                        )}
                        <div className={`contact ${openCard === cardKey ? 'hidden' : 'visible'}`}>
                          <h1>{membre.nom}</h1>
                          <h2>{membre.poste}</h2>
                        </div>
                        <div className={`details ${openCard === cardKey ? 'visible' : 'hidden'}`}>
                          <h1>{membre.nom}</h1>
                          {membre.dem ? (
                            <h2>Démissionnaire·e - {membre.poste}</h2>
                          ) : (
                            <h2>{membre.poste}</h2>
                          )}
                          <div className="cast">
                            <ul>
                              <li>{getCercleFromMembre(membre)}</li>
                            </ul>
                          </div>
                        </div>
                    </div>
                    </div>
                  );
                })

              ) : (
                /* ── Legacy format : named-object keys (2019-2024) ── */
                Object.keys(comite).map((title) => (
                  (title !== "year" && comite[title].nom ? (
                  <div key={title} className="wrapper card-item" onClick={() => handleCardClick(title)}>
                  <div className="card">
                      {comite[title].dem ? (
                      <div className="poster demission">
                      {getPicture(comite, title)}
                      </div>) : (
                      <div className="poster">
                          {getPicture(comite, title)}
                      </div>)}
                    <div className={`contact ${openCard === title ? 'hidden' : 'visible'}`}>
                      <h1>{comite[title].nom}</h1>
                      <h2>{comite[title].poste}</h2>
                      <h3>
                        <FontAwesomeIcon icon={['fas', 'envelope']}/>
                        <a href={`mailto:${getMailPoste(title)}`} className="email-link">
                          {` ${getMailPoste(title)}`}
                        </a>
                      </h3>
                    </div>
                    <div className={`details ${openCard === title ? 'visible' : 'hidden'}`}>
                      <h1>{comite[title].nom}</h1>
                      {comite[title].dem ? (
                          <h2>Démissionnaire - {comite[title].poste}</h2>
                      ) : (
                          <h2>{comite[title].poste}</h2>
                      )}
                      <h3>
                        <FontAwesomeIcon icon={['fas', 'envelope']}/>
                        <a href={`mailto:${getMailPoste(title)}`} className="email-link">
                          {` ${getMailPoste(title)}`}
                        </a>
                      </h3>
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
                ))
              )}

            </React.Fragment>
        ))}
    </div>
    </section>
    </>
  );
};
