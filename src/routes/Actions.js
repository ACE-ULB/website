import React from "react";
import Slider from "react-slick";
import { Separator, Banner, ContentBar, Navbar, Footer } from "../components";
import { H3, Text, Center, C1, C2, C3, C4, C5 } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contentArrays = [
    {svg: "Donate", id: "actions/#fsab", title: "FSAB", width: "100pt", height: "100pt"},
    {svg: "Camsaoule", id: "actions/#cms", title: "Ça m'saoule", width: "100pt", height: "100pt"},
    {svg: "Candle", id: "actions/#cantus", title: "Cantus", width: "100pt", height: "100pt"},
    {svg: "Museum", id: "actions/#culture", title: "Culture", width: "100pt", height: "100pt"},
    {svg: "Recycle", id: "actions/#ecologie", title: "Écologie", width: "100pt", height: "100pt"},
    {svg: "Love", id: "actions/#e&i", title: "E & I", width: "100pt", height: "100pt"},
    {svg: "Loudspeaker", id: "actions/#librex", title: "Librex", width: "100pt", height: "100pt"},
    {svg: "Penne", id: "actions/#folklore_s", title: "Folklore", width: "120pt", height: "100pt"},
    {svg: "Health", id: "actions/#rdr", title: "RdR", width: "100pt", height: "100pt"},
    {svg: "Hands", id: "actions/#social", title: "Social", width: "100pt", height: "100pt"},
]

export const EmailD = ({mail}) => {
    return (
        <H3>
        <a href={`mailto:${mail}@ace-ulb.be`} style={{color:"#343a40"}}>
            <FontAwesomeIcon icon={["fas", "envelope"]}/> {mail}@ace-ulb.be
        </a>
        </H3>
)}

// eslint-disable-next-line
export default () => {

    return (
        <span>
        <Helmet>
            <title>Actions - Association des Cercles Étudiants</title>
        </Helmet>
        <Navbar/>
        <Banner img="actions" title="Actions et Projets" svg="Solidarity" h="380pt"/>
        <ContentBar links={contentArrays}/>
        <Separator title={"Fonds de Solidarité Auguste Baron"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="fsab">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
            <Overlay>
              <img src={require("../assets/img/fsab.png")} alt=""
              style={{width:"100%"}}/>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>F.S.A.B.</H3>
                <Text>
                  <p>
                  En 2020, le <u>Fonds de Solidarité Auguste Baron</u> (FSAB) voit le jour, sous l’impulsion de <C1>l’ACE</C1> et de la <C1>Loge des Amis Philanthropes</C1>. Ce fonds a pour objectif <u>d’apporter un soutien financier et humain</u> aux étudiante·s de la communauté universitaire <C1>ne rentrant pas</C1> dans les critères du système de bourse habituel de la Fédération Wallonie-Bruxelles et du Service Social Étudiant, en distribuant des bourses allant chacune de <u>500 à 1000 euros.</u>
                  </p>
                  <p>
                  Une <u>commission étudiante</u>, mise en place et présidée par la·le <C1>délégué·e Social de l’ACE</C1>, est en charge de l’étude des dossiers et de la distribution des bourses.
                  </p>
                  <p>
                  Tu souhaites <C1>rejoindre la commission FSAB</C1> ? Renvoies le dossier de candidature complété à l’adresse mail FSAB dans les délais ! Consulte nos réseaux sociaux pour avoir les dates exactes, mais chaque année la commission se renouvelle entre mi-mai et mi-juillet.
                  </p>
                  <p>
                  Tu souhaites savoir si tu peux <C1>bénéficier d’une bourse</C1> ? Envoie un mail à notre délégué·e Social pour demander des informations et savoir comment introduire un dossier.
                  </p>
                </Text>
                <EmailD mail="fsab"/>
              </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Projet Ça m'saoule"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="cms">
        <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Center>
                    <H3>C'est quoi</H3>
                    <Text>
                        <p>
                        « Ça m’saoule » est un projet de <C2>promotion de la santé</C2> et de <C2>réduction des risques</C2> dans le cadre de la vie estudiantine et folklorique, <u>créé par et pour les étudiant·es de l’ULB.</u> Le projet aborde <u>différentes thématiques</u> telles que les assuétudes, l’éducation à la vie relationnelle, affective et sexuelle (EVRAS), les retours safe à domicile après les soirées, et bien d’autres. Il a pour objectif <C2>d’informer et de sensibiliser</C2> les étudiant·es aux risques liés à la guindaille, afin de permettre à toutes et tous de faire la fête de manière <u>responsable</u>, et ce en toute <u>sécurité</u>. Le projet est mis en pratique par <C2>l’éducation par les pairs</C2> : ce sont des étudiant·es formé·es aux thématiques qui, à leur tour, informent d’autres étudiant·es.
                        </p>
                        <p>
                        Les acteurs et actrices du projet sont la·le <C2>délégué·e Réduction des Risques de l’ACE</C2>, ainsi que les délégué·es chargé·es de la réduction des risques <u>dans les comités des cercles membres</u> de l’ACE. Le projet est soutenu par de nombreux partenaires, comme Modus Vivendi, O’Yes et Aimer à l’ULB. Ensemble iels tiennent des <C2>stands “Ça m’saoule”</C2> aux différents événements des cercles et <u>organisent des événements spécifiques</u> au cours de l’année, comme par exemple le parcours “Ça m’saoule, j’ai plus de capotes”.
                        </p>
                        <p>
                        Pour plus d’information, consulte la page facebook <a href="https://www.facebook.com/ca.msaoule/" target="_blank" rel="noreferrer"><u>“Ça m’saoule.”</u></a> ou la page instagram <a href="https://instagram.com/ca.msaoule" target="_blank" rel="noreferrer"><u>@ca.msaoule</u></a> ! 
                        </p>
                        <p>
                        Une question ? Envoie un mail à notre délégué·e Réduction des Risques !
                        </p>
                    </Text>
                    <EmailD mail="rdr"/>
                </Center>
            </Col>
            <Col lg="6" className="p-0" style={{display:"flex"}}>
                <Overlay>
                <Slider
                infinite={true}
                slidesToShow={1}
                dots={false}
                speed={3500}
                autoplaySpeed={1500}
                fade={true}
                autoplay={true}
                arrows={false}
                >
                    <img src={require("../assets/img/camsaoul1.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/camsaoul2.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/camsaoul3.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/camsaoul4.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/camsaoul5.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Cantus"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="cantus">
        <Row className="align-items-center m-0">
            <Col lg="6" className="p-0" style={{display:"flex"}}>
                <Overlay>
                <Slider
                infinite={true}
                slidesToShow={1}
                dots={false}
                speed={3500}
                autoplaySpeed={1500}
                fade={true}
                autoplay={true}
                arrows={false}
                >
                    <img src={require("../assets/img/cantus1.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/cantus2.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/cantus3.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Carpe Diem</H3>
                    <Text>
                        <p>
                        Les cantus sont des <C3>activités organisées autour du chant</C3>. La chanson estudiantine et paillarde est une des <u>plus vieilles expressions du folklore</u> de l’Université libre de Bruxelles, et du folklore estudiantin belge en général.
                        </p>
                        <p>
                        <C3>Ouverts à toute personne</C3> intéressée ou concernée de près ou de loin par le folklore estudiantin de l’ULB, <u>les cantus rassemblent</u> les participant·es en corona (tablées disposées en U et éclairées à la bougie) et leur permettent de chanter moult chansons paillardes arrosées de quelques affonds.
                        </p>
                        <p>
                        Ce sont les différentes <C3>guildes</C3> qui organisent les cantus. La·le <C3>Senior·a</C3> de chacune d’entre elles est chargé·e de <u>rythmer ces derniers</u> avec l’aide de son bureau et de ses membres actif·ves.
                        </p>
                        <p>
                        Les cantus ont lieu presque <u>tous les jours</u> sur les différents campus de l’ULB, en particulier à la <C3>salle Éric Schelstraete</C3> (souvent abrégée SES), sur le campus du Solbosch, où se déroule la plupart des cantus. 
                        </p>
                        <p>
                        Une question sur le folklore chantant à l’ULB ? Envoie un mail à notre délégué·e Cantus !
                        </p>
                    </Text>
                    <EmailD mail="cantus"/>
                </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Culture"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="culture">
        <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Comment ça marche</H3>
                    <Text>
                        <p>
                        L’ACE s’engage pour <C4>la culture sur les campus</C4>, que ce soit par l’organisation d’évènements propres ou en faisant le <u>lien entre les délégué·es</u> responsable de la culture dans ses différents cercles membres avec les <u>partenaires culturels de l’ULB</u> et les <u>partenaires culturels bruxellois</u>. L’ACE collabore notamment avec <a href="https://culture.ulb.be">ULB Culture</a>.
                        </p>
                        <p>
                        L’ACE est également membre de la <C4>Commission Culturelle de l’ULB</C4> (CoCu), l’instance participative officielle reliée au <u>Conseil d’Administration de l’ULB</u> qui fixe la direction de l’université en matière de <u>politique culturelle</u>. Tous les corps de l’université y sont représentés : le corps académique, le corps scientifique, le personnel de l’université et bien sûr le corps étudiant. La CoCu est d’ailleurs <C4>présidée par un·e étudiant·e</C4>, qui a le rôle d’<u>Adjoint·e au rectorat</u> pour les affaires culturelles.
                        </p>
                        <p>
                        Une question sur la culture à l’ACE ? Envoie un mail à notre délégué·e Culture !
                        </p>
                    </Text>
                    <EmailD mail="culture"/><br/>
                    <H3>Les subsides socio-culturels</H3>
                    <Text>
                        <p>
                        Chaque année, une <C4>enveloppe est allouée à l’ACE</C4> par la Commission Culturelle de l’université, pour <u>soutenir</u> des activités <C4>culturelles</C4> ou <C4>socio-folkloriques</C4> organisées par ses Cercles membres.
                        </p>
                        <p>
                        Le Cercle membre désirant profiter d’un subside en <C4>fait la demande à la·au délégué·e Culture de l’ACE</C4> via le <a href="https://forms.gle/xJQgLbtuPpU3fHHg7"><u>formulaire de demande en ligne</u></a>. Il joint à sa demande un dossier de présentation de l’événement, qui reprend au moins un <u>budget prévisionnel</u> complet, les <u>dates</u> et <u>lieux</u> de l’événement, le <u>public visé</u>, ainsi qu’une copie des <u>bilans moraux et financiers</u> de l’activité si une précédente édition a eu lieu. Le <C4>Conseil d’Administration</C4> examine les dossiers <u>au cas par cas</u> et vote l’attribution (ou non) d’un subside qui n'excède toutefois pas les <C4>250 euros par activité</C4>. Le Conseil d’Administration est libre du choix des activités allouées et ne doit pas s’en justifier. Toutefois, le critère de <C4>toucher la communauté universitaire est indispensable</C4> à la sélection des activités. Le subside n’est versé <u>qu’après l’activité</u>, uniquement dans le cas où l’activité est en <u>déficit</u>. Le versement se fait sur base du <u>bilan moral et financier</u> de ladite activité, d’une <u>déclaration de créance</u> ainsi que de <u>pièces justificatives</u> originales pour un <u>montant équivalent au subside</u>.
                        </p>
                        <p>
                        Ton cercle organise une activité pour laque des <C4>subsides socio-culturels</C4> peuvent être attribués ? Envoie ta demande via le formulaire en ligne, et <C4>contacte notre délégué·e Culture</C4> en cas de question !
                        </p>
                        <p>
                        Si tu le désires, tu peux aussi introduire des demandes du même type auprès du <a href="folklore/#asbls">BEA</a> ou auprès de la <C4>CoCu</C4> directement pour des <u>plus grosses sommes</u>.
                        </p>
                    </Text>
                </Center>
            </Col>
            <Col lg="6" className="p-0" style={{display:"flex"}}>
                <Overlay>
                <Slider
                infinite={true}
                slidesToShow={1}
                dots={false}
                speed={3500}
                autoplaySpeed={1500}
                fade={true}
                autoplay={true}
                arrows={false}
                >
                    <img src={require("../assets/img/culture1.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/culture2.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/culture3.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/culture4.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Écologie"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="ecologie">
        <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Overlay>
                    <img src={require("../assets/img/ecologie1.png")} alt=""
                        style={{width:"100%"}}/>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Que faisons-nous</H3>
                    <Text>
                        <p>
                        L’ACE <C5>s’engage dans la durabilité</C5> de son campus et dans la <C5>transition écologique</C5> de l’ULB. Nous agissons à notre échelle pour mettre en place des <u>projets durables dans le folklore</u>, dans le but de le rendre plus <C5>respectueux de l’environnement</C5> et du campus sur lequel il évolue.
                        </p>
                        <p>
                        Notre délégué·e Écologie travaille donc avec nos cercles pour mettre en place des projets divers (comme par exemple le <u>projet des gobelets réutilisables</u> il y a quelques années) et pour <C5>sensibiliser</C5> à une transition <u>écologique et durable</u> même en guindaille.
                        </p>
                        <p>
                        L’ACE participe depuis plusieurs années à certains <C5>projets de grande ampleur</C5>, comme <a href="https://laplaine.jimdofree.com/" target="_blank" rel="noreferrer"><u>Sauver la Plaine</u></a>.</p>
                        <p>
                        Depuis la création de l’organe en 2022, <C5>l’ACE siège</C5> également au <a href="https://www.facebook.com/SITO-Students-in-Transition-Office-107593058526986/" target="_blank" rel="noreferrer"><u>Students in Transition Office</u></a> (SiTO), l’assemblée étudiante pour la transition socio-écologie de l’ULB.
                        </p>
                        <p>
                        Une question ? Envoie un mail à notre délégué·e Écologie !
                        </p>
                    </Text>
                    <EmailD mail="ecologie"/>
                </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Égalité & Inclusivité"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="e&i">
        <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Qu'est-ce que c'est</H3>
                    <Text>
                        <p>
                        Le poste Égalité & Inclusivité est <C1>le petit nouveau de notre comité</C1>. Il a été créé en <u>2021</u>, après une année-covid qui a eu le mérite <C1>d’éveiller les consciences et les cœurs</C1> sur des problématiques et des valeurs qui touchent nos cercles, et nos campus en général. Nous avons donc <C1>créé un poste dédié</C1> à la mise en place de <u>projets contre</u> toutes formes de <u>violences</u> ou de <u>discriminations</u>.
                        </p>
                        <p>
                        L’objectif est de <C1>rendre l’université safe et inclusive</C1>, pour que chacun et chacune <u>s’y sente bien</u>. Nous menons notamment un <C1>projet de lutte contre les violences sexuelles</C1>, travaillons pour <u>la mise en place</u> d’une <C1>safezone</C1> dans nos <u>espaces de fêtes</u>, et <u>menons des campagnes</u> de <C1>sensibilisation</C1>.
                        </p>
                        <p>
                        Notre <u>direction commune</u> est inscrite dans notre <C1>charte inter-cercles</C1>.
                        </p>
                        <p>
                        Une question ? Envoie un mail à notre délégué·e Égalité & Inclusivité !
                        </p>
                    </Text>
                    <EmailD mail="egalite"/>
                </Center>
            </Col>
            <Col lg="6" className="p-0" style={{display:"flex"}}>
                <Overlay>
                <Slider
                infinite={true}
                slidesToShow={1}
                dots={false}
                speed={3500}
                autoplaySpeed={1500}
                fade={true}
                autoplay={true}
                arrows={false}
                >
                    <img src={require("../assets/img/e&i1.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/e&i2.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/e&i3.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/e&i4.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Engagement-Librex"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="librex">
        <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Overlay>
                    <img src={require("../assets/img/eng-librex.png")} alt=""
                        style={{width:"100%"}}/>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
                <Center>
                    <H3>C'est quoi</H3>
                    <Text>
                        <p>
                        Le poste Engagement-Librex a été créé à l’ACE en <u>2021</u>, après l’année-covid. On ressentait <C2>l’urgence d’établir</C2> un posté <u>dédié</u> à la <C2>défense du libre examen</C2> dans notre folklore, mais aussi à la <u>direction inter-cercles d’engagement étudiant</u> par rapport à certaines <u>problématiques</u> touchant notre <C2>université</C2> ou plus généralement <C2>la société</C2> dans laquelle nous évoluons en tant qu’étudiantes et étudiants.
                        </p>
                        <p>
                        Le poste Engagement-Librex est donc <u>notamment responsable</u> de la partie engagée de la <C2>Saint-Verhaegen</C2>, et donc du choix de son <u>thème</u> autour duquel le <C2>cortège</C2> et la <C2>quête sociale</C2> se réfèrent.
                        </p>
                        <p>
                        Une question ? Envoie un mail à notre délégué·e Engagement-Librex !
                        </p>
                    </Text>
                    <EmailD mail="librex"/>
                </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Folklore"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="folklore_s">
        <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Comment s'organisons-nous</H3>
                    <Text>
                        <p>
                        Nous avons une équipe de <C3>trois délégué·es Folklore</C3> sont notamment responsables de <u>l’organisation administrative des baptêmes</u> des <C3>cercles baptismaux reliés à l’ACE</C3>. Elles·ils s’occupent de faire le lien avec les <u>autorités de l’ULB</u> pour que les <C3>bleusailles</C3> se déroulent au mieux, avec <u>l’aide de leur comité folklore</u>.
                        </p>
                        <p>
                        En plus de ça, les délégué·es Folklore s’occupe d’organiser la <C3>Semaine Folklorique</C3> lors du <u>deuxième quadrimestre</u>, pendant laquelle la vie estudiantine <u>reprend telle qu'elle</u> existait durant la <C3>période de bleusaille</C3> : les comitardes et comitards de baptême <u>portent à nouveau leur toge</u>, des <u>tournées des cercles</u> sont organisées, ainsi que d'autres activités restaurant <u>l'esprit de la guindaille</u>.
                        </p>
                        <p>
                        Enfin, nos délégué·es Folklore mettent en place <u>chaque année</u> des <C3>tables folkloriques avec les comités de baptêmes</C3>, lors desquelles notre folklore et ses traditions sont <u>discutés et remis en question</u>.
                        </p>
                        <p>
                        Une question ? Envoie un mail à nos délégué·es Folklore !
                        </p>
                    </Text>
                    <EmailD mail="folklore"/>
                </Center>
            </Col>
            <Col lg="6" className="p-0">
                <Overlay>
                    <img src={require("../assets/img/folklore1.png")} alt=""
                        style={{width:"100%"}}/>
                </Overlay>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Réduction des Risques"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="rdr">
        <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Overlay>
                    <img src={require("../assets/img/rdr.png")} alt=""
                        style={{width:"100%"}}/>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Guindaille Safe</H3>
                    <Text>
                        <p>
                        L’ACE s’engage avec ses cercles pour la <C4>réduction des risques en guindaille</C4> ! Notre délégué·es Réduction des Risques est donc responsable de la mise en place de <C4>différents projets de prévention</C4> touchant à la <C4>santé</C4> et au <C4>bien-être</C4>, dans le <u>milieu étudiant en général</u> mais plus particulièrement dans nos <u>endroits de fête</u>. Ça concerne donc les assuétudes (dépendances) ainsi que la <u>santé affective et sexuelle</u>.
                        </p>
                        <p>
                        Les acteurs et actrices du projet sont la·le <C4>délégué·e Réduction des Risques de l’ACE</C4>, ainsi que les délégué·es chargé·es de la réduction des risques <u>dans les comités des cercles membres</u> de l’ACE. Le projet est soutenu par de nombreux partenaires, comme Modus Vivendi, O’Yes et Aimer à l’ULB. Ensemble iels tiennent des <C4>stands “Ça m’saoule”</C4> aux différents événements des cercles et <u>organisent des événements spécifiques</u> au cours de l’année, comme par exemple le parcours “Ça m’saoule, j’ai plus de capotes”.
                        </p>
                        <p>
                        Une question ? Envoie un mail à notre notre délégué·e Réduction des Risques !
                        </p>
                    </Text>
                    <EmailD mail="rdr"/><br/>
                    <H3>Quelques contacts utiles sur Bruxelles</H3>
                    <Text>
                        <li><a href="https://sante.site.ulb.be">ULB Santé</a></li>
                        <li><a href="https://www.aimeralulb.be">Aimer à l’ULB</a></li>
                        <li><a href="http://www.ssmulb.be/centre/psycampus">PsyCampus</a></li>
                        <li><a href="https://depistage.be">Dépistage IST</a></li>
                        <li><a href="https://www.centreantipoisons.be">Centre anti-poison</a> (en cas de problème de drogue ou autre  dans un verre)</li>
                        <li><a href="https://www.preventionsuicide.be">Centre de prévention suicide</a></li>
                    </Text>
                </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Social"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="social">
        <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Nos engagements</H3>
                    <Text>
                        <p>
                        L’ACE est engagée sur les campus de l’ULB pour <u>encourager</u> <C5>l’engagement étudiant tourné vers le social</C5> ! Notre délégué·e Social est responsable de la mise en place de <C5>projets sociaux</C5> dans le <u>folklore</u>, en <C5>collaboration</C5> avec les <u>responsables social les cercles</u>. Nous organisons notamment une <C5>brocante sociale</C5> aux alentours de la <u>rentrée académique</u>, et une <C5>quête sociale</C5> dans les environs de la <u>Saint-V</u>.
                        </p>
                        <p>
                        En 2020, le <u>Fonds de Solidarité Auguste Baron</u> (FSAB) voit le jour, sous l’impulsion de <C5>l’ACE</C5> et de la <C5>Loge des Amis Philanthropes</C5>. Ce fonds a pour objectif <u>d’apporter un soutien financier et humain</u> aux étudiante·s de la communauté universitaire <C5>ne rentrant pas</C5> dans les critères du système de bourse habituel de la Fédération Wallonie-Bruxelles et du Service Social Étudiant, en distribuant des bourses allant chacune de <u>500 à 1000 euros.</u>
                        </p>
                        <p>
                        Une <u>commission étudiante</u>, mise en place et présidée par la·le <C5>délégué·e Social de l’ACE</C5>, est en charge de l’étude des dossiers et de la distribution des bourses.
                        </p>
                        <p>
                        Une question ? Envoie un mail à notre délégué·e Social !
                        </p>
                    </Text>
                    <EmailD mail="social"/>
                </Center>
            </Col>
            <Col lg="6" className="p-0">
                <Overlay>
                    <img src={require("../assets/img/social.png")} alt=""
                        style={{width:"100%"}}/>
                </Overlay>
            </Col>
          </Row>
        </div>
        </section>
        </span>
    );
};