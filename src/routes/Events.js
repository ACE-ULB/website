import React from "react";
import Slider from "react-slick";
import { Separator, Banner, ContentBar, Navbar } from "../components";
import { H3, Text, Center, C1, C2, C3, C4, C5 } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";

const contentArrays = [
    {svg: "Teddy", id: "events/#st-v", title: "Saint-Verhaegen", width: "100pt", height: "100pt"},
    {svg: "Party", id: "events/#ntv", title: "Nuit Théodore Verhaegen", width: "100pt", height: "100pt"},
    {svg: "Candle", id: "events/#cab", title: "Cantus Auguste Baron", width: "100pt", height: "100pt"},
]
// eslint-disable-next-line
export default () => {

    return (
        <span>
        <Helmet>
            <title>Événements - Association des Cercles Étudiants</title>
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
              <img src={require("../assets/img/st-v1.png")} alt=""
              style={{width:"100%"}}/>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>C'est quoi ?</H3>
                <Text>
                  <p>
                  La Saint-Verhaegen (plus couramment appelée <u>Saint-V</u>) est la fête annuelle célébrant la création de l’ULB, chaque <C1>20 novembre</C1>. Cette fête est un jour de congé pour la communauté étudiante et le personnel de <u>l’ULB</u> et de la <u>Vrije Universiteit Brussels</u>, l’université sœur néerlandophone de l’ULB fondée en 1969 après une scission avec cette dernière. Des <u>commémorations</u> sont organisées dans la matinée, pour célébrer les <u>valeurs historiques humanistes</u> de l’ULB, notamment incarnées par son fondateur, <C1>Pierre-Théodore Verhaegen</C1>, reconnu comme l’artisan d’une éducation libre et scientifique, libérée de la superstition et de l’intolérance.
                  </p>
                  <p>
                  L’après-midi du 20 novembre, les étudiantes et étudiants de <u>l’ULB et de la VUB</u> – accompagné·es d’ancien·nes étudiant·es de plusieurs générations - se rassemblent dans le <u>centre-ville de Bruxelles</u>, pour faire la fête et pour célébrer la solidarité étudiante et les liens fraternels et sororaux qui les unissent. Ces festivités traditionnelles dans le centre rassemblent chaque année entre <u>5 000 et 10 000 personnes</u>, et sont organisées par <C1>l’ACE</C1> et son homologue flamande, la <C1>BSG</C1> (<a href="https://bsggtgv.be">Brussels Studentengenootschap</a>).
                  </p>
                  <p>
                  Chaque année, la Saint-V s’organise autour d’un <u>thème particulier</u>, choisi par les associations étudiantes des deux universités. Ce thème affirme le <C1>caractère engagé de la Saint-V</C1>, et influence notamment le choix de l’association pour la <u>quête sociale inter-cercles</u> ainsi que différents évènements et projets à caractère <u>politique et engagé</u> mis en place aux alentours du 20 novembre.
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
                        L’ouverture officielle de l’ULB a eu lieu le <C2>20 novembre 1834</C2>, mais il faudra attendre 1843 pour voir les premières festivités se mettre en place, avec la création de <u>l’Union des Anciens Étudiants</u>. Il s'organisait alors à cette <u>date des retrouvailles entre anciens étudiants</u> de l'ULB dans les bars de Bruxelles, avec un banquet pour finir la journée.
                        </p>
                        <p>
                        C’est en 1888 qu’apparaît pour la première fois l’expression <C2>« Saint-Verhaegen »</C2>. Les étudiants voulurent à cette date réagir contre l'organisation universitaire ressentie comme <u>antidémocratique et éloignée du principe du </u><C2>libre examen</C2>, et c'est pourquoi ils firent référence publiquement au fondateur de l'ULB, grand promoteur de l'enseignement libre et scientifique. Le matin du <u>20 novembre 1888</u>, 200 étudiants (sur les 1 400 au total) munis de <C2>drapeaux des différentes organisations estudiantines</C2> se rendirent donc devant la statue de Verhaegen située devant les bâtiments de l'université, qui se trouvait à l'époque rue des Sols. Puis ils allèrent déposer une couronne de feuilles de chêne sur la <u>tombe de Verhaegen au cimetière de Bruxelles</u>, à Evere. Ce n'est que deux ans plus tard que les autorités académiques prirent part aux cérémonies.
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
                    <img src={require("../assets/img/st-v2.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/st-v3.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
          </Row>
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
                    <img src={require("../assets/img/st-v4.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/st-v5.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
                <Center>
                    <H3>Un peu d'histoire - Pérénité</H3>
                    <Text>
                        <p>
                        Dans les années qui suivirent, un <C3>cortège</C3> partait dans l'après-midi du boulevard Anspach, précédé <u>des drapeaux et fanfare</u>, pour se rendre à l'université, rue des Sols, devant le monument dédié à Verhaegen. Là, étaient prononcés des <C3>discours au nom des étudiants et au nom de l'ULB</C3>. Le recteur recevait ensuite les étudiants. Ceux-ci, pour finir partaient faire la fête dans les rues bruxelloises. L'aspect guindaille ne débutait pas avant 17 heures, <u>l'essentiel de la journée étant consacré aux hommages.</u>
                        </p>
                        <p>
                        Dans la courant du <C3>20ème siècle</C3>, le cortège s’est motorisé et en se composant de différents chars, portant <u>des décors engagés et subversifs ainsi que des pompes volantes</u> pour servir de la bière pendant le cortège lui-même. Depuis 2014, la Ville de Bruxelles <u>n’autorise plus les cortèges motorisés</u> et les festivités ont désormais traditionnellement lieu entre midi et 16h sur la <C3>Place du Grand Sablon</C3>, et son clôturées par un cortège pédestre reliant <u>le Sablon et la Bourse.</u>
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
                        La Saint-Verhaegen a depuis sa création eu lieu chaque année, et <C4>n’a été annulée par les étudiant·es qu’à huit reprises.</C4>
                        </p>
                        <p>
                        Lors de la <u>seconde guerre mondiale</u>, entre <C4>1938 et 1941</C4>, seules des collectes furent organisées au profit des familles des mobilisé·es.
                        </p>
                        <p>
                        <C4>En 1975</C4>, le cortège fut annulé en raison du conflit entre les universités et le gouvernement autour du projet de loi-programme Humblet-De Croo.
                        </p>
                        <p>
                        <C4>En 2015</C4>, elle fut également annulée en dernière minute à la suite des menaces terroristes pesant sur Bruxelles après les attentats du 13 novembre à Paris.
                        </p>
                        <p>
                        Enfin, <C4>l’édition 2020</C4> de la Saint-V a eu lieu <u><a href="https://auvio.rtbf.be/media/journal-televise-sujet-par-sujet-saint-v-une-fete-virtuelle-pour-les-etudiants-2706235" target="_blank" rel="noreferrer">en ligne</a></u> suite à la crise du Covid-19.
                        </p>
                        <p>
                        <C4>L’édition 2021</C4>, bien qu’initialement prévue dans le centre-ville, a dû être <u>annulée quelques jours avant</u>, suite à la quatrième vague de propagation de l’épidémie.
                        </p>
                    </Text>
                </Center>
            </Col>
            <Col lg="6" className="p-0">
                <Overlay>
                    <img src={require("../assets/img/st-v6.png")} alt=""
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
                    <img src={require("../assets/img/ntv1.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/ntv2.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>C'est quoi ?</H3>
                <Text>
                  <p>
                  La <C5>Nuit Théodore Verhaegen</C5> (NTV) est le <u>bal coorganisé par l’ACE et le Cercle du Libre Examen</u>. Ce bal est généralement le premier bal de l’année académique, il a lieu <u>peu de temps après la Saint-V</u>, donc soit fin-novembre, soit début-décembre.
                  </p>
                  <p>
                  La NTV se déroule généralement en trois parties : elle commence par un <C5>banquet</C5>, suivi par une remise de <C5>vlecks</C5>, et finalement la <C5>soirée dansante</C5>.
                  </p>
                  <p>
                  Le banquet accueille généralement <u>étudiant·es</u>, <u>ancien·nes étudiant·es</u> et le <u>corps académique</u>.
                  </p>
                  <p>
                  La partie remise de vleck accueille trois ordres différents, <C5>l'Ordre Théodore Verhaegen</C5> (OTV) qui récompense les personnes qui ont œuvré au prestige <u>des Universités libres de Bruxelles</u> (ULB et VUB) ; <C5>l’Ordre du Prisme</C5> qui récompense les personnes s'étant investies de façon remarquable <u>au sein de l'ACE</u>, et finalement <C5>l’Ordre des Lumières</C5> qui récompense les personnes s'étant investies de façon remarquable <u>au sein du Cercle du Libre Examen</u>.
                  </p>
                  <p>
                  Finalement la soirée dansante prend place et se clôture au petit matin après <u>une nuit de folie</u>.
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
                  <C1>Auguste Baron</C1> est, avec Pierre-Théodore Verhaegen, un des <u>deux fondateurs de l’ULB</u>.
                  </p>
                  <p>
                  Après avoir donné le nom de l’un pour son bal annuel (la Nuit Théodore Verhaegen), l’ACE rend hommage au second lors de son fameux <C1>Cantus Auguste Baron</C1>, qui est organisé chaque année <u>aux alentours du printemps</u>.
                  </p>
                  <p>
                  Ce cantus de <u>grande ampleur</u> réunit notamment les <u>membres et sympathisant·es</u> des différentes guildes ainsi que leurs <u>anciens et anciennes</u>, pour célébrer les traditions du <C1>folklore chantant</C1> de notre université.
                  </p>
                </Text>
              </Center>
            </Col>
            <Col lg="6" className="p-0">
            <Overlay>
              <img src={require("../assets/img/cab1.png")} alt=""
              style={{width:"100%"}}/>
            </Overlay>
            </Col>
          </Row>
        </div>
        </section>
        </span>
    );
};