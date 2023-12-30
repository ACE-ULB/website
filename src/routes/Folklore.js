import React from "react";
import Slider from "react-slick";
import { Separator, Banner, ContentBar, LogoView, Navbar, NavSocial } from "../components";
import { H3, Text, Center } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Nav, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import { filterCards } from "../utils/content";
try {
  var GUILDES_SUMMARY_JSON = require("../assets/guildes/summary.json");
  var CERCLES_SUMMARY_JSON = require("../assets/cercles/summary.json");
} catch (e) {
  // eslint-disable-next-line
  var GUILDES_SUMMARY_JSON = { fileMap: [] };
  // eslint-disable-next-line
  var CERCLES_SUMMARY_JSON = { fileMap: [] };
}

const contentArrays = [
    {svg: "ULB", id: "folklore/#asbls", title: "ASBLs", width: "100pt", height: "100pt"},
    {svg: "Loudspeaker", id: "folklore/#librex", title: "Libre-Examen", width: "100pt", height: "100pt"},
    {svg: "Beers", id: "folklore/#ulb", title: "À l'ULB", width: "120pt", height: "100pt"},
    {svg: "Toge", id: "folklore/#bapteme", title: "Baptême", width: "100pt", height: "100pt"},
    {svg: "Candle", id: "folklore/#chantant", title: "Chantant", width: "100pt", height: "100pt"},
]
// eslint-disable-next-line
export default () => {
    const guildes = filterCards(GUILDES_SUMMARY_JSON, 'src/assets/guildes');
    const cercles = filterCards(CERCLES_SUMMARY_JSON, 'src/assets/cercles');

    return (
        <span>
        <Helmet>
            <title>Folklore - Association des Cercles Étudiants</title>
        </Helmet>
        <Navbar/>
        <Banner img="folklore" title="Folklore ULBiste" svg="Penne" h="380pt"/>
        <ContentBar links={contentArrays}/>
        <Separator title={"Le monde associatif ULBiste"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="asbls">
          <Row className="align-items-center m-0">
          <p style={{marginTop: "20px"}}></p>
            <Center>
                <H3>Comment ça marche</H3>
                <Text>
                <p>Les étudiantes et étudiants de l’ULB ont la possibilité de s’engager et de rejoindre une multitude d’associations étudiantes. Une soixantaine de cercles étudiants sont reconnus chaque année par le conseil d'administration de l'ULB. Qu'ils soient folkloriques, socio-culturels, politiques, sportifs ou autres, ils tiennent une part essentielle dans l'animation et la vie de l'université et de ses campus.</p>
                </Text>
            </Center>
            <p style={{marginTop: "20px"}}></p>
            <Col lg="6" className="p-0">
            <img 
                src={require("../assets/img/bea.png")}
                alt=""
                style={{
                  width: "50%",
                  position: "relative",
                  left: "25%",
                  margin: "5px 5px"
                }}
            />
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>Le BEA</H3>
                <Text>
                  <p>
                  Le Bureau des Étudiant·e·s Administrateurs·trices est le conseil étudiant de l’ULB. Il a pour missions de représenter les étudiante∙s auprès des autorités de l’ULB, de défendre et promouvoir leurs intérêts en siégeant dans les différents Conseils et Commissions, ainsi que d’informer les étudiant∙es de leurs droits et devoirs et de tout ce qui se passe à l’ULB. Le BEA peut également apporter un soutien administratif et logistique aux étudiant·es, notamment lors des recours.
                  </p>
                  <p>
                  Reliés au BEA, on trouve les différents bureaux étudiants facultaires. N’hésite pas à te rendre sur le site de ta faculté si tu veux avoir plus d’info !
                  </p>
                  <p>
                  Une question ? Envie d'en savoir plus ? Suivez et contactez le BEA via leurs réseaux !
                  </p>
                </Text>
                <Nav className="justify-content-center">
                  <NavSocial
                    color = "black"
                    size = "2x"
                    website={{url: "https://bea.ulb.ac.be/", tip:`Consultez le site du BEA`, id:`BEA`}}
                    facebook={{url: "https://www.facebook.com/BEAULB/", tip:`Consultez le Facebook du BEA`, id:`BEA`}}
                    instagram={{url: "https://www.instagram.com/bea.ulb/", tip:`Consultez l'Instagram du BEA`, id:`BEA`}}
                    email={{url: "bea@ulb.be", tip:`Contactez le BEA par email`, id:`BEA`}}
                  />
                </Nav>
              </Center>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>L'AIC</H3>
                <Text>
                  <p>
                  L’Association Inter-Cercles a le même type de rôle que l’ACE, mais pour les cercles socio-culturels et politiques. Fondée en 2015, l’AIC est une association représentative et participative des cercles actifs sur les questions sociales, culturelles et/ou politiques, par et pour les cercles et à l’initiative des étudiant·es.
                  </p>
                  <p>
                  Une question ? Envie d'en savoir plus ? Suivez et contactez le l'AIC via leurs réseaux !
                  </p>
                </Text>
                <Nav className="justify-content-center">
                  <NavSocial
                    color = "black"
                    size = "2x"
                    website={{url: "https://aic.ulb.be/", tip:`Consultez le site de l'AIC`, id:`AIC`}}
                    facebook={{url: "https://www.facebook.com/AssociationInterCercles", tip:`Consultez le Facebook de l'AIC`, id:`AIC`}}
                    instagram={{url: "https://www.instagram.com/aic_ulb/", tip:`Consultez l'Instagram de l'AIC`, id:`AIC`}}
                    email={{url: "aic@ulb.be", tip:`Contactez l'AIC par email`, id:`AIC`}}
                  />
                </Nav>
              </Center>
            </Col>
            <Col lg="6" className="p-0">
            <img 
                src={require("../assets/img/aic.png")}
                alt=""
                style={{
                  width: "50%",
                  position: "relative",
                  left: "25%",
                  margin: "5px 5px"
                }}
              />
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Le libre-examen"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="librex">
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
                    <img src={require("../assets/img/librex1.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/librex2.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/librex3.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>La pensée ne doit jamais se soumettre</H3>
                <Text>
                  <p>
                  L'article premier des statuts de l’ULB proclame que son enseignement a pour principe le libre examen. Celui-ci postule, en toute matière, le rejet de l'argument d'autorité et l'indépendance de jugement. C’est en 1909 que l’ULB a adopté le libre examen comme principe fondamental, dans un discours donné par Henri Poincaré à l’occasion des 75 ans de la création de l’université : « La pensée ne doit jamais se soumettre, ni à un dogme, ni à un parti, ni à une passion, ni à un intérêt, ni à une idée préconçue, ni à quoi que ce soit, si ce n'est aux faits eux-mêmes, parce que, pour elle, se soumettre, ce serait cesser d'être. »
                  </p>
                  <p>
                  Le libre examen est à la base de la méthode scientifique, et c’est aussi un principe auquel on souscrit par engagement. Toute personne s’affirmant libre exaministe s'engage donc à mettre ses paroles et ses actes en accord avec ce qu'elle tient pour vrai.
                  </p>
                  <p>
                  L’histoire du principe du libre examen à l’ULB depuis 1834 a été déterminée par des considérations religieuses, philosophiques, administratives et politiques, dont notamment l’opposition à l’enseignement soumis à des dogmes religieux et la lutte pour la sécularisation de la société belge. Après la première Guerre mondiale, le principe du libre examen entre dans une phase plus politique, et la lutte libre exaministe devient synonyme d’engagement face au nazisme, au communisme, puis plus tard pour la décolonisation du Congo, pour le syndicalisme étudiant et pour la démocratisation de l’enseignement universitaire. Après les luttes étudiantes de mai 68, l’ULB adopte une nouvelle définition du libre examen dans ses statuts, et il y est depuis écrit comme Article 1 : « L'Université Libre de Bruxelles fonde l'enseignement et la recherche sur le principe du libre examen. Celui-ci postule, en toute matière, le rejet de l'argument d'autorité et l'indépendance de jugement. »
                  </p>
                  <p>
                  Fondé en 1928, le <a href="cercle/#Librex">Cercle du Libre Examen</a> est un cercle étudiant de l’ULB qui a pour mission de promouvoir les valeurs du libre examen et sa diffusion parmi la communauté étudiante, et aussi encourager le débat et la prise de conscience chez ses membres. Une question ? Consulte leur site internet ou contacte-le par mail à l’adresse <a href="mailto:cercle@librexulb.be">cercle@librexulb.be</a>.
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Le Folklore ULB"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="ulb">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
              <Center>
                <H3>Folklore ≠ Baptême !</H3>
                <Text>
                  <p>
                  Depuis la création de notre université en 1834, les traditions étudiantes et folkloriques de l’ULB ne cessent de se transmettre, tout en évoluant et en s’enrichissant avec le temps.
                  </p>
                  <p>
                  Mais le folklore ULB, c’est quoi ? C’est avant tout la culture de la camaraderie, de la dérision, de l’humour et de la fête. Vivre le folklore, c’est célébrer la joie étudiante, l’insouciance et la liberté. C’est la culture du vivre ensemble !
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
                    <img src={require("../assets/img/st-v1.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/cantus2.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/cab1.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
          </Row>
        </div>
        </section>
        <Separator title={"Le Baptême"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="bapteme">
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
                    <img src={require("../assets/img/bapteme1.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/bapteme2.png")} alt=""
                    style={{width:"100%"}}/>
                    <img src={require("../assets/img/bapteme3.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>Tout a un sens</H3>
                <Text>
                  <p>
                  Si tu es nouveau ou nouvelle à l’ULB, certains cercles folkloriques te proposent la possibilité de vivre une bleusaille et de passer ton baptême. Mais un baptême étudiant, c’est quoi ? C’est un rite initiatique, un rite de passage et d’intégration dans un cercle, qui a pour objectif de te faire vivre une expérience unique et étonnante.
                  </p>
                  <p>
                  Dans les cercles membres de l’ACE, <u>16 cercles sont considérés comme baptismaux</u> (listés ci-dessous), donc organisent un baptême en début d’année. N’hésite pas à les contacter si tu veux plus d’informations !
                  </p>
                  <p>
                  Ta curiosité est piquée ? N’hésite pas à aller te faire ton propre avis et à essayer ! Sache que tu as bien sûr le droit d’arrêter n’important quand.
                  </p>
                </Text>
              </Center>
            </Col>
            </Row>
            <div className="grid-container" id="baptismaux" style={{marginTop: "20px"}}>
            {cercles.map((card) => (
                card.baptismal === true ? (
                    <div key={card.acronyme} className="grid-item">
                    <LogoView {...card} source='cercles' />
                    </div>
                ) : null
            ))}
            </div>
        </div>
        </section>
        <Separator title={"Le Folklore Chantant"} />
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="chantant">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0">
              <Center>
                <H3>Semeur vaillant du rêve ...</H3>
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
                    <img src={require("../assets/img/cantus3.png")} alt=""
                    style={{width:"100%"}}/>
                </Slider>
                </Overlay>
            </Col>
          </Row>
          <Row className="align-items-center m-0">
            <p style={{marginTop: "20px"}}></p>
            <Center>
                <H3>Guildes Membres</H3>
                <Text>
                    <p>
                    Les guildes sont des organisations folkloriques composées de plusieurs membres, se partageant entre elles·eux des postes bien définis. En général, une guilde a à sa tête un·e Senior·a, qui préside les cantus. La·le Senior·a est généralement accompagné·e d’un bureau. Les postes principaux qu’on retrouve dans une guilde sont variables, mais comprennent généralement un·e Cantor qui propose des chants, un·e Censor qui fait respecter le calme, un·e Quaestor qui est responsable des finances, un·e Scriba qui est responsable du secrétariat et un·e Fuchs Mayor qui gère les fûts et la distribution de boissons par les Fuchsen.
                    </p>
                    <p>
                    Pendant quelques années, l’ACE fesait le relais entre les guildes et les autorités de l’ULB. En 2021, l’ACE a officialisé cette représentation en se dotant d’un Charte Cantus, instituant notamment la Commission Cantus.
                    </p>
                    <p>
                    Depuis 2023, les guildes sont à présents fédérées par la FUG (Fédération Unie des Guildes), qui organise des Assemblées Générales avec les Senior•a et fait le relais avec le•la délégué•e Cantus de l'ACE, auprès de l'ULB et des cercles.
                    </p>
                    <p>
                    La FUG compte 19 guildes membres, reprises ci-dessous :
                    </p>
                </Text>
            </Center>
        </Row>
        <div className="grid-container" id="guildes">
          {guildes.map((card) => (
            <div key={card.acronyme} className="grid-item">
              <LogoView {...card} source='guildes' />
            </div>
          ))}
        </div>
        </div>
        </section>
        </span>
    );
};