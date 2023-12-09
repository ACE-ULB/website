import React from "react";
import Slider from "react-slick";
import { Separator, Banner, ContentBar, Navbar } from "../components";
import { H3, Text, Center } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";

const contentArrays = [
    {svg: "Teddy", id: "events/#st-v", title: "Saint-Verhaegen", width: "100pt", height: "100pt"},
    {svg: "Party", id: "events/#ntv", title: "Nuit Théodore Verhaegen", width: "100pt", height: "100pt"},
    {svg: "Candle", id: "events/#cab", title: "Cantus Auguste Baron", width: "100pt", height: "100pt"},
]

export default () => {

    return (
        <span>
        <Helmet>
            <title>Association des Cercles Étudiants - Événements</title>
        </Helmet>
        <Navbar/>
        <Banner img="events" title="Nos Événements" svg="Beers" h="380pt"/>
        <ContentBar links={contentArrays}/>
        <Separator title={"Saint-Verhaegen"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="st-v">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
            <Overlay>
              <img src={require("../assets/img/st-v1.png")}
              style={{width:"100%"}}/>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>C'est quoi ?</H3>
                <Text>
                  <p>
                  La Saint-Verhaegen (plus couramment appelée <u>Saint-V</u>) est la fête annuelle célébrant la création de l’ULB, chaque <font color="#FF5656">20 novembre</font>. Cette fête est un jour de congé pour la communauté étudiante et le personnel de <u>l’ULB</u> et de la <u>Vrije Universiteit Brussels</u>, l’université sœur néerlandophone de l’ULB fondée en 1969 après une scission avec cette dernière. Des <u>commémorations</u> sont organisées dans la matinée, pour célébrer les <u>valeurs historiques humanistes</u> de l’ULB, notamment incarnées par son fondateur, <font color="#FF5656">Pierre-Théodore Verhaegen</font>, reconnu comme l’artisan d’une éducation libre et scientifique, libérée de la superstition et de l’intolérance.
                  </p>
                  <p>
                  L’après-midi du 20 novembre, les étudiantes et étudiants de <u>l’ULB et de la VUB</u> – accompagné·es d’ancien·nes étudiant·es de plusieurs générations - se rassemblent dans le <u>centre-ville de Bruxelles</u>, pour faire la fête et pour célébrer la solidarité étudiante et les liens fraternels et sororaux qui les unissent. Ces festivités traditionnelles dans le centre rassemblent chaque année entre <u>5 000 et 10 000 personnes</u>, et sont organisées par <font color="#FF5656">l’ACE</font> et son homologue flamande, la <font color="#FF5656">BSG</font> (<a href="https://bsggtgv.be">Brussels Studentengenootschap</a>).
                  </p>
                  <p>
                  Chaque année, la Saint-V s’organise autour d’un <u>thème particulier</u>, choisi par les associations étudiantes des deux universités. Ce thème affirme le <font color="#FF5656">caractère engagé de la Saint-V</font>, et influence notamment le choix de l’association pour la <u>quête sociale inter-cercles</u> ainsi que différents évènements et projets à caractère <u>politique et engagé</u> mis en place aux alentours du 20 novembre.
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Un peu d'histoire - Origine</H3>
                    <Text>
                        <p>
                        L’ouverture officielle de l’ULB a eu lieu le 20 novembre 1834, mais il faudra attendre 1843 pour voir les premières festivités se mettre en place, avec la création de l’Union des Anciens Étudiants. Il s'organisait alors à cette date des retrouvailles entre anciens étudiants de l'ULB dans les bars de Bruxelles, avec un banquet pour finir la journée.
                        </p>
                        <p>
                        C’est en 1888 qu’apparaît pour la première fois l’expression « Saint-Verhaegen ». Les étudiants voulurent à cette date réagir contre l'organisation universitaire ressentie comme antidémocratique et éloignée du principe du libre examen, et c'est pourquoi ils firent référence publiquement au fondateur de l'ULB, grand promoteur de l'enseignement libre et scientifique. Le matin du 20 novembre 1888, 200 étudiants (sur les 1 400 au total) munis de drapeaux des différentes organisations estudiantines se rendirent donc devant la statue de Verhaegen située devant les bâtiments de l'université, qui se trouvait à l'époque rue des Sols. Puis ils allèrent déposer une couronne de feuilles de chêne sur la tombe de Verhaegen au cimetière de Bruxelles, à Evere. Ce n'est que deux ans plus tard que les autorités académiques prirent part aux cérémonies.
                        </p>
                    </Text>
                </Center>
            </Col>
            <Col lg="6" className="p-0">
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
                    <img src={require("../assets/img/st-v2.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/st-v3.png")}
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
          </Row>
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
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
                    <img src={require("../assets/img/st-v4.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/st-v5.png")}
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Un peu d'histoire - Pérénité</H3>
                    <Text>
                        <p>
                        Dans les années qui suivirent, un cortège partait dans l'après-midi du boulevard Anspach, précédé des drapeaux et fanfare, pour se rendre à l'université, rue des Sols, devant le monument dédié à Verhaegen. Là, étaient prononcés des discours au nom des étudiants et au nom de l'ULB. Le recteur recevait ensuite les étudiants. Ceux-ci, pour finir partaient faire la fête dans les rues bruxelloises. L'aspect guindaille ne débutait pas avant 17 heures, l'essentiel de la journée étant consacré aux hommages.
                        </p>
                        <p>
                        Dans la courant du 20ème siècle, le cortège s’est motorisé et en se composant de différents chars, portant des décors engagés et subversifs ainsi que des pompes volantes pour servir de la bière pendant le cortège lui-même. Depuis 2014, la Ville de Bruxelles n’autorise plus les cortèges motorisés et les festivités ont désormais traditionnellement lieu entre midi et 16h sur la Place du Grand Sablon, et son clôturées par un cortège pédestre reliant le Sablon et la Bourse.
                        </p>
                    </Text>
                </Center>
            </Col>
          </Row>
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Un peu d'histoire - Annulation</H3>
                    <Text>
                        <p>
                        La Saint-Verhaegen a depuis sa création eu lieu chaque année, et n’a été annulée par les étudiant·es qu’à huit reprises.
                        </p>
                        <p>
                        Lors de la seconde guerre mondiale, entre 1938 et 1941, seules des collectes furent organisées au profit des familles des mobilisé·es.
                        </p>
                        <p>
                        En 1975, le cortège fut annulé en raison du conflit entre les universités et le gouvernement autour du projet de loi-programme Humblet-De Croo.
                        </p>
                        <p>
                        En 2015, elle fut également annulée en dernière minute à la suite des menaces terroristes pesant sur Bruxelles après les attentats du 13 novembre à Paris.
                        </p>
                        <p>
                        Enfin, l’édition 2020 de la Saint-V a eu lieu en ligne suite à la crise du Covid-19.
                        </p>
                        <p>
                        L’édition 2021, bien qu’initialement prévue dans le centre-ville, a dû être annulée quelques jours avant, suite à la quatrième vague de propagation de l’épidémie.
                        </p>
                    </Text>
                </Center>
            </Col>
            <Col lg="6" className="p-0">
                <Overlay>
                    <img src={require("../assets/img/st-v6.png")}
                    style={{width:"100%"}}/>
                </Overlay>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Nuit Théodore Verhaegen"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="ntv">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
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
                    <img src={require("../assets/img/ntv1.png")}
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/ntv2.png")}
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>C'est quoi ?</H3>
                <Text>
                  <p>
                  La Nuit Théodore Verhaegen (NTV) est le bal coorganisé par l’ACE et le Cercle du Libre Examen. Ce bal est généralement le premier bal de l’année académique, il a lieu peu de temps après la Saint-V, donc soit fin-novembre, soit début-décembre.
                  </p>
                  <p>
                  La NTV se déroule généralement en trois parties : elle commence par un banquet, suivi par une remise de vlecks, et finalement la soirée dansante.
                  </p>
                  <p>
                  Le banquet accueille généralement étudiant·es, ancien·nes étudiant·es et le corps académique.
                  </p>
                  <p>
                  La partie remise de vleck accueille trois ordres différents, l'Ordre Théodore Verhaegen (OTV) qui récompense les personnes qui ont œuvré au prestige des Universités libres de Bruxelles (ULB et VUB) ; l’Ordre du Prisme qui récompense les personnes s'étant investies de façon remarquable au sein de l'ACE, et finalement l’Ordre des Lumières qui récompense les personnes s'étant investies de façon remarquable au sein du Cercle du Libre Examen.
                  </p>
                  <p>
                  Finalement la soirée dansante prend place et se clôture au petit matin après une nuit de folie.
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Cantus Auguste Baron"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="cab">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
              <Center>
                <H3>Adfundum !</H3>
                <Text>
                  <p>
                  Auguste Baron est, avec Pierre-Théodore Verhaegen, un des deux fondateurs de l’ULB.
                  </p>
                  <p>
                  Après avoir donné le nom de l’un pour son bal annuel (la Nuit Théodore Verhaegen), l’ACE rend hommage au second lors de son fameux Cantus Auguste Baron, qui est organisé chaque année aux alentours du printemps.
                  </p>
                  <p>
                  Ce cantus de grande ampleur réunit notamment les membres et sympathisant·es des différentes guildes ainsi que leurs anciens et anciennes, pour célébrer les traditions du folklore chantant de notre université.
                  </p>
                </Text>
              </Center>
            </Col>
            <Col lg="6" className="p-0">
            <Overlay>
              <img src={require("../assets/img/cab1.png")}
              style={{width:"100%"}}/>
            </Overlay>
            </Col>
          </Row>
        </div>
        </section>
        </span>
    );
};