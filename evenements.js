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
    "horaire": "3 créneaux : 10h, 11h15 et 12h30",
    "resume": "Ilona revient à la box avec son atelier : en 1h, tu apprends le massage cardiaque et l'utilisation du défibrillateur. 14 places par créneau, tarif libre, aucun prérequis.",
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
  }
];
