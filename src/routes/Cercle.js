import React from "react";
import '../assets/css/display.scss';
import { Separator, AdminView, Banner, ContentBar, Navbar, Comite, Cercles, Footer } from "../components";
import { H3, Text, Center, H1, C5, C1, C } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import * as SVGs from "../assets/svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contentArrays = [
  {svg: "Contract", id: "cercle/#admin", title: "Administratif", width: "100pt", height: "100pt"},
  {svg: "Question", id: "cercle/#objectifs", title: "Le Cercle", width: "100pt", height: "100pt"},
  {svg: "Team", id: "cercle/#comite", title: "Le Comité", width: "100pt", height: "100pt"},
  {svg: "ULB", id: "cercle/#cercles", title: "Cercles Membres", width: "120pt", height: "100pt"},
  {svg: "Medal", id: "cercle/#OdP", title: "Ordre du Prisme", width: "100pt", height: "100pt"},
  {svg: "Hands", id: "cercle/#join-us", title: "Rejoins-nous", width: "100pt", height: "100pt"},
]
// eslint-disable-next-line
export default () => {
    return (
        <span>
        <Helmet>
            <title>Le Cercle - Association des Cercles Étudiants</title>
        </Helmet>
        <Navbar/>
        <Banner img="cercle" title="Le Cercle" svg="ACE" h="300pt"/>
        <ContentBar links={contentArrays}/>
        <Separator title={"Administratif"} />
        <div id="admin" className="grid-container">
          <AdminView 
            title="R.O.I"
            brief="Réglement d'Ordre Intérieur de l'ACE et ses Cercles membres"
            href='roi'
            className="grid-item"
          />
          <AdminView 
            title="Statuts"
            brief="Statuts officiel de l'ACE et ses Cercles membres"
            href='statuts'
            className="grid-item"
          />
          <AdminView 
            title="La Bulle"
            brief="Journal de l'ACE en collaboration avec ses cercles membres"
            href='journal'
            className="grid-item"
          />
        </div>
        <Separator title={"Le Cercle"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="objectifs">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
            <Overlay>
              <img src={require("../assets/img/cercle_objectif.png")} alt=""
              style={{width:"100%"}}/>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>Quels sont nos objectifs ?</H3>
                <Text>
                  <p>
                  L’ACE a pour objectif principal de <C5>représenter ses cercles membres</C5> auprès des autorités de l’ULB, et de <u>défendre leurs intérêts communs.</u> Nous servons surtout de relais et de porte-parole avec le Vice-rectorat aux affaires étudiantes, mais également avec d’autres corps de l’université, comme ULB Santé, ULB Culture, la Commission Culturelle, la Commission aux Affaires Sociales Étudiantes, … En plus des instances de l’université, nous faisons également le <u>lien avec les autres associations étudiantes</u> du campus (Bureau des Étudiant·e·s Administateurs·trices, Association Inter-Cercles) et avec l’Union des Anciens Étudiants, l’association des anciens et anciennes de l’université.
                  </p>
                  <p>
                  L’<C5>ACE rassemble</C5> également les étudiants et étudiantes de ses cercles membres autour d’une <u>direction commune</u> concernant la <C5>vie étudiante de l’ULB en général</C5>. Nos cercles se réunissent <u>une fois par semaine</u> pour organiser la vie étudiante sur les différents campus, mais aussi pour <u>discuter de projets inter-cercles</u> qui pourraient voir le jour. En plus de ça, nos cercles membres se <C5>réunissent occasionnellement en commissions</C5> pour parler de sujets plus spécifiques : pour le moment, ont été mises en place les commissions Cantus, Culture, Écologie, Égalité & Inclusivité, Folklore, Librex, Réduction des Risques et Sociale.
                  </p>
                </Text>
                <H3><FontAwesomeIcon icon="fa-solid fa-timeline"/> Parcours notre <a href="/cercle/history"><u>histoire</u></a> !</H3>
              </Center>
            </Col>
          </Row>
        </div>
        </section>
        <span id="comite"></span>
        <Comite/>
        <span id="cercles"></span>
        <Cercles/>
        <Separator title="L'Ordre du Prisme" />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="OdP">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
              <Center>
                <H3>Qu'est-ce que c'est ?</H3>
                <Text>
                  <p>
                    Créé en novembre 2016, l'Ordre du Prisme a pour vocation de récompenser les personnes s'étant investies de façon remarquable au sein de l’ACE.
                  </p>
                  <p>
                    Le visuel du vleck est une palette colorimétrique composée au centre de la couleur noire, représentant l’ACE, entourée des couleurs primaires et secondaires, représentant ainsi les cercles membres de celle-ci.
                  </p>
                  <p>
                    Le nom de l'Ordre a été choisi car le prisme est un instrument optique utilisé pour réfracter, réfléchir ou disperser la lumière. Dans certains cas, le prisme permet donc de faire apparaître les couleurs dont la lumière est composée.
                  </p>
                  <p>
                  Voici l’actuelle composition du bureau de l’Ordre du Prisme :
                  </p>
                  <p>
                    <C1>Grande Chromatique</C1> : Lucile Neyrinck<br/>
                    <C1>Petit Chromatique</C1> : Thibaut Kemajou<br/>
                    <C1>Dodécagone</C1> : Juliette Renard<br/>
                    <C1>Losange</C1> : Ruth Janet Maguéna
                  </p>
                </Text>
              </Center>
            </Col>
            <Col lg="6" className="p-0">
              <img 
                src={require("../assets/img/prisme.png")}
                alt=""
                style={{
                  width: "70%",
                  position: "relative",
                  left: "15%",
                  margin: "5px 5px"
                }}
              />
            </Col>
          </Row>
        </div>
        </section>
        <Separator title="Nous rejoindre" />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="join-us">
        <Row className="m-0">
          <Col lg="6" className="d-flex align-items-center flex-column">
            <div className="text-center">
              <SVGs.ACE color="#FF5656" width="150pt" height="120pt"/>
              <H1>Membre du Comité</H1>
            </div>
              <Center>
                <p>
                Le Conseil d’Administration de l’ACE se renouvelle chaque année académique <br/>
                (nos élections ont lieu annuellement au mois de mai).
                </p>
                <p>
                Critères d'éligibilité pour se présenter à un poste du comité :
                </p>
                <p>1. Être étudiant•e à l’ULB et souscrire au principe du <a href="https://actus.ulb.be/fr/presse/kit-media/le-principe-du-libre-examen"><u>libre examen</u></a>.</p>
                <p>2. Être étudiant•e en BA3 minimum.</p>
                <p>3. Avoir effectué au moins un mandat d’investissement dans le comité d’un cercle membre</p>
                <p>4. Ne plus occuper de mandat dans le comité d’un cercle membre lors de son arrivée à l’ACE</p>
                <p><C color="#b3b6bb">Une dérogation est néanmoins possible pour un des critères 2 à 4 (sauf pour les postes de bureau).</C></p>
                <p>
                Tu es intéressé·e par nous rejoindre ? Suis attentivement les informations publiées sur nos réseaux sociaux !<br/>
                En cas de question, n’hésite pas à contacter <a href="mailto:bureau@ace-ulb.be">bureau@ace-ulb.be</a> !
                </p>
              </Center>
          </Col>
          <Col lg="6">
            <div className="text-center">
              <SVGs.ULB color="#6F4B92" width="120pt" height="120pt"/>
              <H1>Cercle Membre</H1>
            </div>
            <div style={{margin:"auto"}}>
              <p>
              Toute association étudiante enregistrée à l’ULB et se considérant comme folklorique peut faire la demande de rejoindre l’ACE. Pour cela, elle devra en faire la demande auprès du Bureau du Conseil d'Administration de l’ACE (bureau@ace-ulb.be) au moins quinze jours avant la tenue de l'Assemblée Générale ordinaire annuelle (qui a lieu en général entre début et mi-mai).
              </p>
              <p>
              Si la demande d’adhésion est acceptée par au moins deux tiers des cercles membres, le Cercle pourra accéder à la qualité de membre observateur, et entrera donc dans une période-test d’un an.
              </p>
              <p>
              Après son année-test, le cercle membre observateur peut faire la demande d’acquérir la qualité de membre effectif, et l’Assemblée Générale votera en prenant en compte les éléments suivants (qui seront envoyés aux cercles membres avant l’AG) :
              </p>
              <p>
              <li>La présence en réunion lors de la période d’observation.</li>
              <li>La conformité de ses statuts à ceux de l'ACE.</li>
              <li>Un bilan moral et financier des activités écoulées lors de la dernière année de la période d’observation.</li>
              <li>Un état de ses comptes. (Le nouveau Cercle membre ne doit pas être une charge pour l'ACE ou ses Cercles membres. Il doit assurer une autonomie financière pour au moins l'organisation d'un TD et la gestion des gobelets.)</li>
              <li>Une présentation exhaustive des postes au sein de son Comité d’Administration avec les charges de chacun·e. Ce Conseil d’Administration sera composé d'au moins les postes suivants : présidence, secrétariat, trésorerie, librex, social, culture, écologie et réduction des risques. Ces postes peuvent être cumulés, sauf pour les postes de présidence, secrétariat et trésorerie. Pour qu'il puisse accéder à une Liste ACE (comme décrit dans le Titre V du Règlement d’Ordre Intérieur de l’ACE), chaque poste composant le comité d’administration sera voté séparément.</li>
              <li>Si le Cercle remplit les obligations dues à sa catégorie (cercle facultaire, régional ou de section).</li>
              <li>L'avis de Commissaires aux comptes.</li>
              </p>
              <p>
              Si l'Assemblée Générale refuse d'accorder le statut de membre effectif, le Cercle reste membre observateur et pourra réintroduire sa demande lors de la tenue de l'Assemblée Générale suivante.
              </p>
              <p>
              Ton association est intéressée par rejoindre l’ACE ? Tu as besoin de plus d’infos ? Contacte notre bureau à l’adresse <a href="mailto:bureau@ace-ulb.be">bureau@ace-ulb.be</a> !
              </p>
            </div>
          </Col>
        </Row>
        </div>
        </section>
        <Footer/>
        </span>
    );
};