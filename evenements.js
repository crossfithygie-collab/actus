/* ============================================================
   evenements.js : l'AGENDA de la box, affiché en tête de l'accueil.
   Ajouter un événement = ajouter un objet ici. Un événement passé
   disparaît tout seul de l'accueil le lendemain de sa date.
   Champs : id, titre, date (ISO, jour de l'événement), horaire
   (texte libre), resume, image (facultatif), lien et libelleLien
   (facultatifs : page d'inscription ou d'infos existante).
   ============================================================ */

const EVENEMENTS = [
  {
    "id": "wod-anniversaire-5-ans",
    "titre": "WOD anniversaire : la box fête ses 5 ans",
    "date": "2026-09-25",
    "horaire": "19h à 20h30, à la box",
    "resume": "Hygie souffle sa 5e bougie ! Un gros WOD anniversaire à vivre avec toute la team. On veut voir un maximum de monde pour fêter ça ensemble.",
    "image": "https://crossfithygie-collab.github.io/Hygieborne/anniversaire-5ans.jpg?v=3"
  },
  {
    "id": "save-the-rep-2026-09",
    "titre": "Save The Rep : apprends à sauver une vie",
    "date": "2026-09-27",
    "horaire": "2 créneaux : 10h et 11h15",
    "resume": "Ilona revient à la box avec son atelier : en 1h, tu apprends le massage cardiaque et l'utilisation du défibrillateur. Il reste 2 créneaux (10h et 11h15), 14 places chacun, tarif libre, aucun prérequis.",
    "image": "https://crossfithygie-collab.github.io/Hygieborne/str-affiche.jpg?v=2",
    "lien": "https://crossfithygie-collab.github.io/Hygieborne/save-the-rep.html",
    "libelleLien": "Je réserve ma place"
  },
  {
    "id": "hygie-race-4",
    "titre": "Hygie Race 4",
    "date": "2026-10-04",
    "horaire": "Toute la journée, à la box",
    "resume": "La compétition de la box revient pour sa 4e édition. Inscris-toi en compétiteur, ou deviens volontaire pour la faire tourner avec nous.",
    "image": "https://crossfithygie-collab.github.io/Hygieborne/race4-email-banner.png?v=1",
    "lien": "https://hygierace.fr",
    "libelleLien": "Toutes les infos"
  },
  {
    "id": "wod-parent-enfant-2026-10",
    "titre": "WOD Parent / Enfant",
    "date": "2026-10-17",
    "horaire": "Accueil à 14h30, à la box",
    "resume": "Une heure de WOD à partager avec ton enfant, à son rythme, avec les coachs pour encadrer. Gratuit, réservé aux adhérents Hygie et à leurs propres enfants : 30 places, enfants compris.",
    "lien": "https://hygiebot.tail7ef5c3.ts.net/hub/inscription/wod-famille-2026-10",
    "libelleLien": "J'inscris mon enfant"
  },
  {
    "id": "wod-halloween-2026",
    "titre": "WOD Halloween, puis auberge raclette",
    "date": "2026-10-30",
    "horaire": "19h à 20h, à la box",
    "resume": "Le WOD d'Halloween se fait déguisé, et on enchaîne sur une auberge espagnole version raclette : chacun apporte fromage et charcuterie, et surtout des appareils à raclette et des rallonges."
  },
  {
    "id": "workshop-gym-2026-11",
    "titre": "Workshop gym : toes-to-bar et pull-up",
    "date": "2026-11-07",
    "horaire": "14h à 16h, avec Baptiste",
    "resume": "Deux heures pour débloquer les toes-to-bar et les pull-up : gainage, kipping, grip, timing. Chacun travaille à son niveau. 30 €, 24 places seulement.",
    "lien": "https://buy.stripe.com/3cIeVf78y563eOB4Msdby06",
    "libelleLien": "Je réserve ma place"
  },
  {
    "id": "black-friday-2026",
    "titre": "Black Friday : l'abonnement annuel",
    "date": "2026-11-27",
    "horaire": "24 heures seulement",
    "resume": "L'abonnement annuel à prix Black Friday, un seul jour. Inscris-toi sur la liste d'attente pour recevoir l'offre en premier.",
    "lien": "https://hygiebot.tail7ef5c3.ts.net/hub/liste/bf",
    "libelleLien": "Je veux recevoir l'offre"
  },
  {
    "id": "compet-interne-2026-11",
    "titre": "Compétition interne",
    "date": "2026-11-29",
    "horaire": "Dimanche, à la box",
    "resume": "Une journée de compétition à la maison : nos WOD, nos juges, notre ambiance. C'est vous qui choisissez le format : vote, et le format qui gagne sera celui de la journée.",
    "lien": "https://hygiebot.tail7ef5c3.ts.net/hub/inscription/compet-format-2026-11",
    "libelleLien": "Je vote pour le format"
  }
];
