/* ============================================================
   alerte.js : le bandeau d'alerte affiché tout en haut de TOUTES
   les pages, juste sous la barre de menu (fermeture exceptionnelle,
   changement d'horaire…). Une seule alerte à la fois.
   - Pour en poser une : remplir ALERTE (du = début d'affichage,
     au = dernier jour d'affichage inclus, en ISO).
   - Pour n'en afficher aucune : ALERTE = null.
   Elle disparaît toute seule le lendemain de la date « au ».
   ============================================================ */
(function () {
  "use strict";

  var ALERTE = {
    "du": "2026-09-13",
    "au": "2026-09-19",
    "titre": "Samedi 19 septembre",
    "texte": "la box est exceptionnellement fermée"
  };

  if (!ALERTE) return;
  var maintenant = new Date();
  var debut = new Date(ALERTE.du + "T00:00:00");
  var fin = new Date(ALERTE.au + "T23:59:59");
  if (maintenant < debut || maintenant > fin) return;

  function poser() {
    var entete = document.querySelector(".site-header");
    if (!entete || document.querySelector(".alerte")) return;

    /* Un bandeau qui défile : le message est répété pour que la boucle
       soit continue, sans trou. Les copies sont masquées aux lecteurs
       d'écran, qui ne lisent le message qu'une fois. */
    var bandeau = document.createElement("div");
    bandeau.className = "alerte";
    bandeau.setAttribute("role", "alert");

    var lu = document.createElement("p");
    lu.className = "alerte-lu";
    lu.textContent = ALERTE.titre + " : " + ALERTE.texte + ".";
    bandeau.appendChild(lu);

    var piste = document.createElement("div");
    piste.className = "alerte-piste";
    piste.setAttribute("aria-hidden", "true");
    for (var i = 0; i < 8; i++) {
      var item = document.createElement("span");
      item.className = "alerte-item";
      item.innerHTML =
        '<svg class="alerte-icone" viewBox="0 0 24 24" focusable="false">' +
          '<path d="M12 2.5 1.5 21h21L12 2.5Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>' +
          '<path d="M12 9.5v5.2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>' +
          '<circle cx="12" cy="17.8" r="1.4" fill="currentColor"/>' +
        '</svg><strong></strong><span class="alerte-msg"></span>';
      item.querySelector("strong").textContent = ALERTE.titre;
      item.querySelector(".alerte-msg").textContent = ALERTE.texte;
      piste.appendChild(item);
    }
    bandeau.appendChild(piste);
    entete.insertAdjacentElement("afterend", bandeau);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", poser);
  } else {
    poser();
  }
})();
