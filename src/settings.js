/**
 * contain some general infos that can be used in other files
 */
// eslint-disable-next-line
export default {
    title: process.env.REACT_APP_WEBSITE_TITLE,
    short_title: process.env.REACT_APP_WEBSITE_SHORT_TITLE,
    subtitle: "Représentant des cercles folkloriques ULBiste",
    description: process.env.REACT_APP_WEBSITE_DESC,
    url: process.env.REACT_APP_WEBSITE_URL,
    location: {
      entreprise: {
        name: "Association des Cercles Étudiants de l'ULB",
        url: "https://www.facebook.com/AssociationDesCerclesEtudiants/",
        num: "414.410.031"
      },
      number: "CP 166/09",
      street: "Avenue Paul Héger 22",
      CP: "1050",
      town: "Ixelles",
      position: [50.8134387, 4.3818590],
      local: "S.F1.E229",
      phone: "",
      bank: {
        general : {name: "Général", iban: "BE52 3631 1343 8409"},
        folklore: {name: "Folklore", iban: "BE08 3631 1343 8813"},
        cantus  : {name: "Cantus", iban: "BE14 3631 9403 3483"},
        fsab    : {name: "FSAB", iban: "BE39 3631 9736 3819"}
      },
      additional:
        "Notre local est situé sur le Campus du Solbosch. Dirigez-vous vers les préfabriqués multi-colore à côté du parking du Janson, empruntez les escaliers au centre vers le bâtiment F. Sur votre droite se trouveront quelques marches menant à une grande baie vitrée aux châssis blancs. Vous y êtes !"
    },
    contact: {
      facebook: "https://www.facebook.com/AssociationDesCerclesEtudiants",
      instagram: "https://www.instagram.com/ace-ulb/",
      discord: "https://discord.gg/",
      email: "bureau@ace-ulb.be",
      github: "https://github.com/ACE-ULB/"
    }
  };
  