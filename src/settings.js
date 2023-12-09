/**
 * contain some general infos that can be used in other files
 */
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
      phone: "02 650 25 14",
      bank: {
        general : {name: "Principal", iban: "BE52 3631 1343 8409"},
        folklore: {name: "Folklore", iban: "BE08 3631 1343 8813"},
        cantus  : {name: "Cantus", iban: "BE14 3631 9403 3483"},
        fsab    : {name: "FSAB", iban: "BE39 3631 9736 3819"}
      },
      additional:
        "Notre local est situé sur le <i>Campus du Solbosch</i>. Dirigez-vous vers les préfabriqués multi-color à côté du <i>parking du Janson</i>, empruntez les escaliers au centre vers le <i>bâtiment F</i>. Sur votre droite se trouverons quelques marches menant à une <i>grande baie vitrée aux chassis blanc</i>. Vous y êtes !"
    },
    contact: {
      facebook: "https://www.facebook.com/AssociationDesCerclesEtudiants",
      instagram: "https://www.instagram.com/ace-ulb/",
      discord: "https://discord.gg/",
      email: "bureau@ace-ulb.be"
    }
  };
  