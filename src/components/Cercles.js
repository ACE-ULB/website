import React, { useState } from 'react';
import { LogoView, Separator, Timeline } from './';
import { filterCards } from '../utils/content';
import { Dropdown, DropdownToggle, UncontrolledTooltip } from 'reactstrap';
import '../assets/css/style.scss';
import { H1, Text } from './Titles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
try {
  var CERCLES_SUMMARY_JSON = require('../assets/cercles/summary.json');
} catch (e) {
  // eslint-disable-next-line
  var CERCLES_SUMMARY_JSON = { fileMap: [] };
}

const ViewSelector = ({ onSelect, current }) => {
    const getViewText = () => {
      return current === 'social' ? 
      <><FontAwesomeIcon icon="fa-solid fa-timeline" /> Timeline View</> : 
      <><FontAwesomeIcon icon="fa-solid fa-at" />       Social View</> ;
    };
  
    return (
      <span style={{ margin: "0 0 0 20px" }}>
        <Dropdown isOpen={false} toggle={() => {}}>
          <DropdownToggle
            className='d-flex align-items-center'
            id="cerclestooltip"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'transparent'
            }}
          >
            <H1><u onClick={onSelect}>{getViewText()}</u></H1>
          </DropdownToggle>
          <UncontrolledTooltip delay={0} target="cerclestooltip">Change de vue en cliquant ici !</UncontrolledTooltip>
        </Dropdown>
      </span>
    );
  };  

export default () => {
  const cercles = filterCards(CERCLES_SUMMARY_JSON, 'src/assets/cercles');

  const socialView = (
    <div className="grid-container" id="cercles">
      {cercles.map((card) => (
        <div key={card.acronyme} className="grid-item">
          <LogoView {...card} source="cercles" />
        </div>
      ))}
    </div>
  );

  const timelineView = (
    <div className="" id="cercles" style={{margin:"50px 0 0 0"}}>
      <Timeline
        timeline={cercles
          .map((card) => ({
            date: card.date,
            sortDate: new Date(card.date),
            title: card.cercle,
            content: (
              <>
              {card.others_dates ? (
              <>
              <Text>Autres dates trouvées dans les archives :</Text>
              <ul>
                {card.others_dates.map((date) => (
                  <li><font color={card.color}>{date}</font></li>
                ))}
              </ul>
              </>) : null}
              {card.others_names ? (
              <>
              <Text>Autres noms trouvés dans les archives :</Text>
              <ul>
                {card.others_names.map((name) => (
                  <li><font color={card.color}>{name}</font></li>
                ))}
              </ul>
              </>) : null}
              </>
            ),
            image: require(`../assets/cercles/logos/${card.acronyme}.png`),
            imgWidth: "50%",
          }))
          .sort((a, b) => a.sortDate - b.sortDate)
        }
      />
    </div>
  );
  
  

  const [selectedView, setSelectedView] = useState('social');

  const handleViewChange = () => {
    setSelectedView((prevView) => (prevView === 'social' ? 'timeline' : 'social'));
  };
  
  return (
    <>
      <Separator
        title="Les Cercles Membres :"
        Object={React.createElement(ViewSelector, { onSelect: handleViewChange, current: selectedView })}
      />
      <section className="section section-lg section-shaped pg-250">
        {selectedView === 'social' ? socialView : timelineView}
      </section>
    </>
  );  
};
