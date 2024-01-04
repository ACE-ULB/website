import React from "react";
import Slider from "react-slick";
import { Separator, Banner, ContentBar, LogoView, Navbar, NavSocial } from "../components";
import { H3, Text, Center, C1, C2, C3, C4, C, C5 } from "../components/Titles";
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
            <Center>
                <H3>Comment ça marche</H3>
                <Text>
                <p>Les <C1>étudiantes et étudiants de l’ULB</C1> ont la possibilité de <u>s’engager</u> et de <u>rejoindre</u> une <C1>multitude d’associations étudiantes</C1>. Une <u>soixantaine</u> d'association d'étudiants sont reconnus <C1>chaque année</C1> par le conseil d'administration de l'ULB. Qu'ils soient folkloriques, socio-culturels, politiques, sportifs ou autres, ils tiennent <u>une part essentielle</u> dans <C1>l'animation</C1> et la <C1>vie de l'université</C1> et de ses <C1>campus</C1>.</p>
                </Text>
            </Center>
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
                  Le Bureau des Étudiant·e·s Administrateurs·trices est le <C2>conseil étudiant de l’ULB</C2>. Il a pour missions de <C2>représenter les étudiante∙s</C2> <u>auprès des autorités de l’ULB</u>, de <C2>défendre et promouvoir leurs intérêts</C2> en siégeant dans les différents <u>Conseils</u> et <u>Commissions</u>, ainsi que <C2>d’informer</C2> les étudiant∙es de leurs <C2>droits</C2> et <C2>devoirs</C2> et de tout ce qui se passe à l’ULB. Le BEA peut également apporter un <u>soutien administratif et logistique</u> aux étudiant·es, notamment lors des <u>recours</u>.
                  </p>
                  <p>
                  Reliés au BEA, on trouve les différents <C2>bureaux étudiants facultaires</C2>. N’hésite pas à te rendre sur <u>le site de ta faculté</u> si tu veux avoir plus d’info !
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
                  L’Association Inter-Cercles a le <u>même type de rôle que l’ACE</u>, mais pour les <C3>cercles socio-culturels et politiques</C3>. Fondée en <u>2015</u>, l’AIC est une <C3>association représentative et participative</C3> des cercles actifs sur les questions <u>sociales</u>, <u>culturelles</u> et/ou <u>politiques</u>, par et pour les cercles et à l’initiative des étudiant·es.
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
                  L'<C4>article premier des statuts de l’ULB</C4> proclame que son <u>enseignement</u> a pour principe le <C4>libre examen</C4>. Celui-ci postule, en toute matière, le <C4>rejet de l'argument d'autorité</C4> et l'<C4>indépendance de jugement</C4>. C’est en <u>1909</u> que l’ULB a adopté le libre examen comme <C4>principe fondamental</C4>, dans un discours donné par <u>Henri Poincaré</u> à l’occasion des <u>75 ans</u> de la création de l’université : « <C color="#FC4E00">La pensée ne doit jamais se soumettre, ni à un dogme, ni à un parti, ni à une passion, ni à un intérêt, ni à une idée préconçue, ni à quoi que ce soit, si ce n'est aux faits eux-mêmes, parce que, pour elle, se soumettre, ce serait cesser d'être.</C> »
                  </p>
                  <p>
                  Le libre examen est à la base de la <C4>méthode scientifique</C4>, et c’est aussi un principe auquel on <C4>souscrit par engagement</C4>. Toute personne <u>s’affirmant libre exaministe</u> s'engage donc à mettre <C4>ses paroles</C4> et <C4>ses actes</C4> en <u>accord</u> avec ce qu'elle <u>tient pour vrai</u>.
                  </p>
                  <p>
                  L’histoire du principe du libre examen à l’ULB depuis <C4>1834</C4> a été déterminée par des considérations <u>religieuses</u>, <u>philosophiques</u>, <u>administratives</u> et <u>politiques</u>, dont notamment <C4>l’opposition à l’enseignement soumis à des dogmes religieux</C4> et la <C4>lutte pour la sécularisation de la société belge</C4>. Après la <u>première Guerre mondiale</u>, le principe du libre examen entre dans une <u>phase plus politique</u>, et la lutte libre exaministe devient <C4>synonyme d’engagement</C4> face au <u>nazisme</u>, au <u>communisme</u>, puis plus tard pour la <u>décolonisation du Congo</u>, pour le <u>syndicalisme étudiant</u> et pour la <C4>démocratisation de l’enseignement universitaire</C4>. Après les luttes étudiantes de <C4>mai 68</C4>, l’ULB adopte une <u>nouvelle définition du libre examen</u> dans ses statuts, et il y est depuis écrit comme <C4>Article 1</C4> : « <C color="#FC4E00">L'Université Libre de Bruxelles fonde l'enseignement et la recherche sur le principe du libre examen. Celui-ci postule, en toute matière, le rejet de l'argument d'autorité et l'indépendance de jugement.</C> »
                  </p>
                  <p>
                  Fondé en 1928, le <a href="cercle/#Librex"><u>Cercle du Libre Examen</u></a> est un cercle étudiant de l’ULB qui a pour mission de <C4>promouvoir les valeurs du libre examen</C4> et sa <C4>diffusion parmi la communauté étudiante</C4>, et aussi <C4>encourager le débat et la prise de conscience</C4> chez ses membres. Une question ? Consulte leur site internet ou contacte-le par mail à l’adresse <a href="mailto:cercle@librexulb.be"><u>cercle@librexulb.be</u></a>.
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
                  Depuis la <u>création de notre université</u> en 1834, les <C5>traditions étudiantes et folkloriques</C5> de l’ULB ne cessent de se <u>transmettre</u>, tout en <u>évoluant</u> et en s’<u>enrichissant</u> avec le temps.
                  </p>
                  <p>
                  Mais le <C5>folklore ULB</C5>, c’est quoi ? C’est avant tout la culture de la <u>camaraderie</u>, de la <u>dérision</u>, de l’<u>humour</u> et de la <u>fête</u>. Vivre le folklore, c’est <C5>célébrer la joie étudiante</C5>, <C5>l’insouciance</C5> et <C5>la liberté</C5>. C’est la culture du <C5>vivre ensemble</C5> !
                  </p>
                  <p>
                  L'ACE est l'association <u>fédératrice</u> des <C5>cercles folklorique</C5> qui peuvent être <u>facultaires</u>, <u>interfacultaires</u>, ou <u>régionaux</u>. Ils organisent et perpétuent chaque année le <C5>folklore traditionnel de l'ULB</C5>: baptêmes estudiantins, soirée étudiantes (les TD), participation à la Saint-V, soutien aux guildes dans leur organisation de cantus. En dehors du folklore, nos cercles organisent également des événements et des <C5>activités ouvertes à tous</C5>: débat, conférence, sport ou culture.
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
                  Si tu es nouveau ou nouvelle à l’ULB, <u>certains cercles folkloriques</u> te proposent la possibilité de <C1>vivre une bleusaille</C1> et de passer <C1>ton baptême</C1>. Mais un baptême étudiant, c’est quoi ? C’est un <C1>rite initiatique</C1>, un <u>rite de passage</u> et <u>d’intégration dans un cercle</u>, qui a pour objectif de te faire vivre une <C1>expérience unique et étonnante</C1>.
                  </p>
                  <p>
                  Dans les cercles membres de l’ACE, <C1><u>16 cercles sont considérés comme baptismaux</u></C1> (listés ci-dessous), donc organisent un baptême en <u>début d’année</u>. N’hésite pas à les contacter si tu veux plus d’informations !
                  </p>
                  <p>
                  Tous no cercles membres ont pour objectif premier la <C1>solidarité et la convivialité</C1>, et te permettent donc de les rejoindre pour <u>t'investir dans le cercle</u> ou simplement <u>faire la fête</u> <C1>sans faire ta bleusaille</C1>. Elle te sera cependant <C1>vivement conseillée</C1> et n'est évidemment <u>jamais</u> mit en cause dans les <u>cercles n'organisant pas de baptême</u>.
                  </p>
                  <p>
                  Ta curiosité est piquée ? N’hésite pas à aller te <C1>faire ton propre avis et à essayer</C1> ! Sache que tu as bien sûr le droit d’arrêter n’important quand.
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
                  Les guildes sont des <C3>organisations folkloriques</C3> composées de <u>plusieurs membres</u>, se partageant entre elles·eux des <u>postes bien définis</u>. En général, une guilde a à sa tête <C3>un·e Senior·a</C3>, qui <u>préside les cantus</u>. La·le Senior·a est généralement accompagné·e <u>d’un bureau</u>. Les postes principaux qu’on retrouve dans une guilde <u>sont variables</u>, mais comprennent généralement <C3>un·e Cantor</C3> qui <u>propose des chants</u>, <C3>un·e Censor</C3> qui <u>fait respecter le calme</u>, <C3>un·e Quaestor</C3> qui est <u>responsable des finances</u>, <C3>un·e Scriba</C3> qui est <u>responsable du secrétariat</u> et <C3>un·e Fuchs Mayor</C3> qui <u>gère les fûts</u> et la <u>distribution de boissons</u> par <C3>les Fuchsen</C3>.
                  </p>
                  <p>
                  Pendant plusieurs années, l’ACE fesait le <C3>relais entre les guildes et les autorités de l’ULB</C3>. En 2021, l’ACE a <u>officialisé</u> cette représentation en se dotant d’une <C3>Charte Cantus</C3>, instituant notamment la <C3>Commission Cantus</C3>.
                  </p>
                  <p>
                  <u>Depuis 2023</u>, les guildes sont à présents <C3>fédérées par la FUG</C3> (Fédération Unie des Guildes), qui organise des <u>Assemblées Générales</u> avec les Senior•a et fait le <C3>relais avec le•la délégué•e Cantus</C3> de <u>l'ACE</u>, auprès de <u>l'ULB</u> et des <u>cercles</u>.
                  </p>
                  <p>
                  La FUG compte <C3><u>19 guildes membres</u></C3>, reprises ci-dessous :
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
          <p style={{marginTop: "20px"}}></p>
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