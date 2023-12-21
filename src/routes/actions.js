import React from "react";
import Slider from "react-slick";
import { Separator, Banner, ContentBar, LogoView, Navbar } from "../components";
import { H3, Text, Center } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";

const contentArrays = [
    {svg: "Donate", id: "actions/#fsab", title: "FSAB", width: "100pt", height: "100pt"},
    {svg: "Camsaoule", id: "actions/#cms", title: "Ça m'saoule", width: "100pt", height: "100pt"},
    {svg: "Candle", id: "actions/#cantus", title: "Cantus", width: "100pt", height: "100pt"},
    {svg: "Museum", id: "actions/#culture", title: "Culture", width: "100pt", height: "100pt"},
    {svg: "Recycle", id: "actions/#ecologie", title: "Écologie", width: "100pt", height: "100pt"},
    {svg: "Love", id: "actions/#e&i", title: "E & I", width: "100pt", height: "100pt"},
    {svg: "Loudspeaker", id: "actions/#librex", title: "Librex", width: "100pt", height: "100pt"},
    {svg: "Penne", id: "actions/#folklore", title: "Folklore", width: "120pt", height: "100pt"},
    {svg: "Health", id: "actions/#rdr", title: "RdR", width: "100pt", height: "100pt"},
    {svg: "Hands", id: "actions/#social", title: "Social", width: "100pt", height: "100pt"},
]

export default () => {

    return (
        <span>
        <Helmet>
            <title>Association des Cercles Étudiants - Actions</title>
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
              <img src={require("../assets/img/fsab.png")}
              style={{width:"100%"}}/>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>F.S.A.B.</H3>
                <Text>
                  <p>
                  En 2020, le Fonds de Solidarité Auguste Baron (FSAB) voit le jour, sous l’impulsion de l’ACE et de la Loge des Amis Philanthropes. Ce fonds a pour objectif d’apporter un soutien financier et humain aux étudiante·s de la communauté universitaire ne rentrant pas dans les critères du système de bourse habituel de la Fédération Wallonie-Bruxelles et du Service Social Étudiant, en distribuant des bourses allant chacune de 500 à 1000 euros.
                  </p>
                  <p>
                  Une commission étudiante, mise en place et présidée par la·le délégué·e Social de l’ACE, est en charge de l’étude des dossiers et de la distribution des bourses.
                  </p>
                  <p>
                  Tu souhaites rejoindre la commission FSAB ? Renvoies le dossier de candidature complété à l’adresse <a href="mailto:fsab@ace-ulb.be">fsab@ace-ulb.be</a> dans les délais ! Consulte nos réseaux sociaux pour avoir les dates exactes, mais chaque année la commission se renouvelle entre mi-mai et mi-juillet.
                  </p>
                  <p>
                  Tu souhaites savoir si tu peux bénéficier d’une bourse ? Contacte notre délégué·e Social à l’adresse <a href="mailto:fsab@ace-ulb.be">fsab@ace-ulb.be</a> pour demander des informations et savoir comment introduire un dossier.
                  </p>
                </Text>
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
                        « Ça m’saoule » est un projet de promotion de la santé et de réduction des risques dans le cadre de la vie estudiantine et folklorique, créé par et pour les étudiant·es de l’ULB. Le projet aborde différentes thématiques telles que les assuétudes, l’éducation à la vie relationnelle, affective et sexuelle (EVRAS), les retours safe à domicile après les soirées, et bien d’autres. Il a pour objectif d’informer et de sensibiliser les étudiant·es aux risques liés à la guindaille, afin de permettre à toutes et tous de faire la fête de manière responsable, et ce en toute sécurité. Le projet est mis en pratique par l’éducation par les pairs : ce sont des étudiant·es formé·es aux thématiques qui, à leur tour, informent d’autres étudiant·es.
                        </p>
                        <p>
                        Les acteurs et actrices du projet sont la·le délégué·e Réduction des Risques de l’ACE, ainsi que les délégué·es chargé·es de la réduction des risques dans les comités des cercles membres de l’ACE. Le projet est soutenu par de nombreux partenaires, comme Modus Vivendi, O’Yes et Aimer à l’ULB. Ensemble iels tiennent des stands “Ça m’saoule” aux différents événements des cercles et organisent des événements spécifiques au cours de l’année, comme par exemple le parcours “Ça m’saoule, j’ai plus de capotes”.
                        </p>
                        <p>
                        Pour plus d’information, consulte la page facebook <a href="https://www.facebook.com/ca.msaoule/" target="_blank">“Ça m’saoule.”</a> ou la page instagram <a href="https://instagram.com/ca.msaoule" target="_blank">@ca.msaoule</a> ! 
                        </p>
                        <p>
                        Une question ? Contacte la·le délégué·e Réduction des Risques de l’ACE à l’adresse <a href="mailto:rdr@ace-ulb.be">rdr@ace-ulb.be</a> !
                        </p>
                    </Text>
                </Center>
            </Col>
            <Col lg="6" className="p-0" style={{marginBottom:"-7px"}}>
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
                    <img src={require("../assets/img/camsaoul1.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/camsaoul2.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/camsaoul3.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/camsaoul4.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/camsaoul5.png")}
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
            <Col lg="6" className="p-0" style={{marginBottom:"-7px"}}>
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
                    <img src={require("../assets/img/cantus1.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/cantus2.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/cantus3.png")}
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Carpe Diem</H3>
                    <Text>
                        <p>
                        Les cantus sont des activités organisées autour du chant. La chanson estudiantine et paillarde est une des plus vieilles expressions du folklore de l’Université libre de Bruxelles, et du folklore estudiantin belge en général.
                        </p>
                        <p>
                        Ouverts à toute personne intéressée ou concernée de près ou de loin par le folklore estudiantin de l’ULB, les cantus rassemblent les participant·es en corona (tablées disposées en U et éclairées à la bougie) et leur permettent de chanter moult chansons paillardes arrosées de quelques affonds.
                        </p>
                        <p>
                        Ce sont les différentes guildes qui organisent les cantus. La·le Senior·a de chacune d’entre elles est chargé·e de rythmer ces derniers avec l’aide de son bureau et de ses membres actif·ves.
                        </p>
                        <p>
                        Les cantus ont lieu presque tous les jours sur les différents campus de l’ULB, en particulier à la salle Éric Schelstraete (souvent abrégée SES), sur le campus du Solbosch, où se déroule la plupart des cantus. 
                        </p>
                        <p>
                        Une question sur le folklore chantant à l’ULB ? Contacte notre délégué·e Cantus à l’adresse <a href="mailto:cantus@ace-ulb.be">cantus@ace-ulb.be</a> !
                        </p>
                    </Text>
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
                        L’ACE s’engage pour la culture sur les campus, que ce soit par l’organisation d’évènements propres ou en faisant le lien entre les délégué·es responsable de la culture dans ses différents cercles membres avec les partenaires culturels de l’ULB et les partenaires culturels bruxellois. L’ACE collabore notamment avec <a href="https://culture.ulb.be">ULB Culture</a>.
                        </p>
                        <p>
                        L’ACE est également membre de la Commission Culturelle de l’ULB (CoCu), l’instance participative officielle reliée au Conseil d’Administration de l’ULB qui fixe la direction de l’université en matière de politique culturelle. Tous les corps de l’université y sont représentés : le corps académique, le corps scientifique, le personnel de l’université et bien sûr le corps étudiant. La CoCu est d’ailleurs présidée par un·e étudiant·e, qui a le rôle d’Adjoint·e au rectorat pour les affaires culturelles. La CoCu attribue notamment chaque année une enveloppe à l’ACE, pour qu’elle redistribue l’argent sous forme de subsides soutenant les activités à caractère socio-culturel de ses cercles membres.
                        </p>
                        <p>
                        Une question sur la culture à l’ACE ? Contacte notre délégué·e Culture à l’adresse <a href="mailto:culture@ace-ulb.be">culture@ace-ulb.be</a> !
                        </p>
                    </Text>
                    <H3>Les subsides socio-culturels</H3>
                    <Text>
                        <p>
                        Chaque année, une enveloppe est allouée à l’ACE par la Commission Culturelle de l’université, pour soutenir des activités culturelles ou socio-folkloriques organisées par ses Cercles membres.
                        </p>
                        <p>
                        Le Cercle membre désirant profiter d’un subside en fait la demande à la·au délégué·e Culture de l’ACE via le <a href="https://forms.gle/xJQgLbtuPpU3fHHg7">formulaire de demande en ligne</a>. Il joint à sa demande un dossier de présentation de l’événement, qui reprend au moins un budget prévisionnel complet, les dates et lieux de l’événement, le public visé, ainsi qu’une copie des bilans moraux et financiers de l’activité si une précédente édition a eu lieu. Le Conseil d’Administration examine les dossiers au cas par cas et vote l’attribution (ou non) d’un subside qui n'excède toutefois pas les 250 euros par activité. Le Conseil d’Administration est libre du choix des activités allouées et ne doit pas s’en justifier. Toutefois, le critère de toucher la communauté universitaire est indispensable à la sélection des activités. Le subside n’est versé qu’après l’activité, uniquement dans le cas où l’activité est en déficit. Le versement se fait sur base du bilan moral et financier de ladite activité, d’une déclaration de créance ainsi que de pièces justificatives originales pour un montant équivalent au subside.
                        </p>
                        <p>
                        Ton cercle organise une activité pour laque des subsides socio-culturels peuvent être attribués ? Envoie ta demande via le formulaire en ligne, et contacte notre délégué·e Culture (culture@ace-ulb.be) en cas de question !
                        </p>
                        <p>
                        Si tu le désires, tu peux aussi introduire des demandes du même type auprès du <a href="https://bea.ulb.ac.be">BEA</a> ou auprès de la CoCu directement pour des plus grosses sommes.
                        </p>
                    </Text>
                </Center>
            </Col>
            <Col lg="6" className="p-0" style={{marginBottom:"-7px"}}>
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
                    <img src={require("../assets/img/culture1.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/culture2.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/culture3.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/culture4.png")}
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
                    <img src={require("../assets/img/ecologie1.png")}
                        style={{width:"100%"}}/>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Que faisons-nous</H3>
                    <Text>
                        <p>
                        L’ACE s’engage dans la durabilité de son campus et dans la transition écologique de l’ULB. Nous agissons à notre échelle pour mettre en place des projets durables dans le folklore, dans le but de le rendre plus respectueux de l’environnement et du campus sur lequel il évolue.
                        </p>
                        <p>
                        Notre délégué·e Écologie travaille donc avec nos cercles pour mettre en place des projets divers (comme par exemple le projet des gobelets réutilisables il y a quelques années) et pour sensibilisation à une transition écologique et durable même en guindaille.
                        </p>
                        <p>
                        L’ACE participe depuis plusieurs années à certains projets de grande ampleur, comme <a href="https://laplaine.jimdofree.com/" target="_blank">Sauver la Plaine</a>.</p>
                        <p>
                        Depuis la création de l’organe en 2022, l’ACE siège également au <a href="https://www.facebook.com/SITO-Students-in-Transition-Office-107593058526986/" target="_blank">Students in Transition Office</a> (SiTO), l’assemblée étudiante pour la transition socio-écologie de l’ULB.
                        </p>
                        <p>
                        Une question ? Contacte notre délégué·e Écologie à l’adresse <a href="mailto:ecologie@ace-ulb.be">ecologie@ace-ulb.be</a> !
                        </p>
                    </Text>
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
                        Le poste Égalité & Inclusivité est le petit nouveau de notre comité. Il a été créé en 2021, après une année-covid qui a eu le mérite d’éveiller les consciences et les cœurs sur des problématiques et des valeurs qui touchent nos cercles, et nos campus en général. Nous avons donc créé un poste dédié à la mise en place de projets contre toutes formes de violences ou de discriminations.
                        </p>
                        <p>
                        L’objectif est de rendre l’université safe et inclusive, pour que chacun et chacune s’y sente bien. Nous menons notamment un projet de lutte contre les violences sexuelles, travaillons pour la mise en place d’une safezone dans nos espaces de fêtes, et menons des campagnes de sensibilisation.
                        </p>
                        <p>
                        Notre direction commune est inscrite dans notre charte inter-cercles.
                        </p>
                        <p>
                        Une question ? Contacte notre délégué·e Égalité & Inclusivité à l’adresse <a href="mailto:egalite@ace-ulb.be">egalite@ace-ulb.be</a> !
                        </p>
                    </Text>
                </Center>
            </Col>
            <Col lg="6" className="p-0" style={{marginBottom:"-7px"}}>
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
                    <img src={require("../assets/img/e&i1.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/e&i2.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/e&i3.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/e&i4.png")}
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
                    <img src={require("../assets/img/eng-librex.png")}
                        style={{width:"100%"}}/>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
                <Center>
                    <H3>C'est quoi</H3>
                    <Text>
                        <p>
                        Le poste Engagement-Librex a été créé à l’ACE en 2021, après l’année-covid. On ressentait l’urgence d’établir un posté dédié à la défense du libre examen dans notre folklore, mais aussi à la direction inter-cercles d’engagement étudiant par rapport à certaines problématiques touchant notre université ou plus généralement la société dans laquelle nous évoluons en tant qu’étudiantes et étudiants.
                        </p>
                        <p>
                        Le poste Engagement-Librex est donc notamment responsable de la partie engagée de la Saint-Verhaegen, et donc du choix de son thème autour duquel le cortège et la quête sociale se réfèrent.
                        </p>
                        <p>
                        Une question ? Contacte notre délégué·e Engagement-Librex à l’adresse <a href="mailto:librex@ace-ulb.be">librex@ace-ulb.be</a> !
                        </p>
                    </Text>
                </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Folklore"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="folklore">
        <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Comment s'organisons-nous</H3>
                    <Text>
                        <p>
                        Nous avons une équipe de trois délégué·es Folklore sont notamment responsables de l’organisation administrative des baptêmes des cercles baptismaux reliés à l’ACE. Elles·ils s’occupent de faire le lien avec les autorités de l’ULB pour que les bleusailles se déroulent au mieux, avec l’aide de leur comité folklore.
                        </p>
                        <p>
                        En plus de ça, les délégué·es Folklore s’occupe d’organiser la Semaine Folklorique lors du deuxième quadrimestre, pendant laquelle la vie estudiantine reprend telle qu'elle existait durant la période de bleusaille : les comitardes et comitards de baptême portent à nouveau leur toge, des tournées des cercles sont organisées, ainsi que d'autres activités restaurant l'esprit de la guindaille.
                        </p>
                        <p>
                        Enfin, nos délégué·es Folklore mettent en place chaque année des tables folkloriques avec les comités de baptêmes, lors desquelles notre folklore et ses traditions sont discutés et remis en question.
                        </p>
                        <p>
                        Une question ? Contacte nos délégué·es Folklore à l’adresse <a href="mailto:folklore@ace-ulb.be">folklore@ace-ulb.be</a> !
                        </p>
                    </Text>
                </Center>
            </Col>
            <Col lg="6" className="p-0">
                <Overlay>
                    <img src={require("../assets/img/folklore1.png")}
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
                    <img src={require("../assets/img/rdr.png")}
                        style={{width:"100%"}}/>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Guindaille Safe</H3>
                    <Text>
                        <p>
                        L’ACE s’engage avec ses cercles pour la réduction des risques en guindaille ! Notre délégué·es Réduction des Risques est donc responsable de la mise en place de différents projets de prévention touchant à la santé et au bien-être, dans le milieu étudiant en général mais plus particulièrement dans nos endroits de fête. Ça concerne donc les assuétudes (dépendances) ainsi que la santé affective et sexuelle.
                        </p>
                        <p>
                        Les acteurs et actrices des projets sont la·le délégué·e Réduction des Risques de l’ACE, ainsi que les délégué·es chargé·es de la réduction des risques dans les comités des cercles membres de l’ACE. Le projet est soutenu par de nombreux partenaires, comme Modus Vivendi, O’Yes et Aimer à l’ULB. Ensemble iels tiennent des stands “Ça m’saoule” aux différents événements des cercles et organisent des événements spécifiques au cours de l’année, comme par exemple le parcours “Ça m’saoule, j’ai plus de capotes”.
                        </p>
                        <p>
                        Une question ? Contacte notre délégué·e Réduction des Risques à l’adresse <a href="mailto:rdr@ace-ulb.be">rdr@ace-ulb.be</a> !
                        </p>
                    </Text>
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
                        L’ACE est engagée sur les campus de l’ULB pour encourager l’engagement étudiant tourné vers le social ! Notre délégué·e Social est responsable de la mise en place de projets sociaux dans le folklore, en collaboration avec les responsables social des cercles. Nous organisons notamment une brocante sociale aux alentours de la rentrée académique, et une quête sociale dans les environs de la Saint-V.
                        </p>
                        <p>
                        En 2020, le Fonds de Solidarité Auguste Baron (FSAB) voit le jour, sous l’impulsion de l’ACE et de la Loge des Amis Philanthropes. Ce fonds a pour objectif d’apporter un soutien financier et humain aux étudiante·s de la communauté universitaire ne rentrant pas dans les critères du système de bourse habituel de la Fédération Wallonie-Bruxelles et du Service Social Étudiant, en distribuant des bourses allant chacune de 500 à 1000 euros. Une commission étudiante, mise en place et présidée par la·le délégué·e Social de l’ACE, est en charge de l’étude des dossiers et de la distribution des bourses.
                        </p>
                        <p>
                        Une question ? Contacte notre délégué·e Social à l’adresse <a href="mailto:social@ace-ulb.be">social@ace-ulb.be</a> !
                        </p>
                    </Text>
                </Center>
            </Col>
            <Col lg="6" className="p-0">
                <Overlay>
                    <img src={require("../assets/img/social.png")}
                        style={{width:"100%"}}/>
                </Overlay>
            </Col>
          </Row>
        </div>
        </section>
        </span>
    );
};