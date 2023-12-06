import React, { useEffect } from 'react';
import { Center, H3, Text } from './Titles.js';
import {
  Card,
  CardText,
  Col,
  Row
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MapContainer as Map, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import SETTINGS from '../settings';
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MarkerIcon =L.icon({
    iconUrl: require('../assets/img/marker.png'),
    iconSize: [32,38],
    iconAnchor: [32, 32],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
});

export default () => {
  return (
    <section className="section section-lg section-shaped pg-250" id="#map">
      <div className="h-100 w-100">
        <Row className="align-items-center m-0">
          <Col lg="6" className='p-0'>
            <Center>
              <H3 className="text-center"><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> Où nous trouver </H3>
              <Text>
                <ul style={{listStyleType: "none"}}>
                  {SETTINGS.location.entreprise ?
                    <li>
                      <FontAwesomeIcon icon={['fas', 'address-book']} />
                      {SETTINGS.location.entreprise.url
                        ? <a href={SETTINGS.location.entreprise.url}> {SETTINGS.location.entreprise.name}</a>
                        : SETTINGS.location.entreprise}
                    </li>
                    : null
                  }
                  <li><FontAwesomeIcon icon={['fas', 'road']} />{` ${SETTINGS.location.number} ${SETTINGS.location.street}`}</li>
                  <li><FontAwesomeIcon icon={['fas', 'street-view']} />{` ${SETTINGS.location.CP} ${SETTINGS.location.town}`}</li>
                  {SETTINGS.location.phone ? (
                    <li><FontAwesomeIcon icon={['fas', 'phone']} />{` ${SETTINGS.location.phone}`}</li>
                    ) : null
                  }
                  {SETTINGS.location.bank ? (
                    <li><FontAwesomeIcon icon={['fas', 'wallet']} />{` ${SETTINGS.location.bank}`}</li>
                    ) : null
                  }
                </ul>
              </Text>
              {SETTINGS.location.additional ? (
                  <Card body >
                    <CardText>
                      <Text><span dangerouslySetInnerHTML={{ __html: SETTINGS.location.additional }}></span></Text>
                    </CardText>
                  </Card>
                ) : null
              }
            </Center>
          </Col>
          <Col lg="6" className='p-0'>
            <Map style={{zIndex: -1, width: "100%", height: "500px"}} center={SETTINGS.location.position} zoom={16} zoomControl={false} attributionControl={false}>
              <TileLayer
                url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
              />
              <Marker position={SETTINGS.location.position} icon={MarkerIcon}/>
            </Map>
          </Col>
        </Row>
      </div>
    </section>
  );
}