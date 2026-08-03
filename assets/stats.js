/* ============================================================
   stats.js : suivi des clics importants via GoatCounter.
   Les vues de pages sont comptées automatiquement par count.js
   (script GoatCounter chargé avant celui-ci sur chaque page).
   Tableau de bord : https://hygie.goatcounter.com
   ============================================================ */

(function () {
  "use strict";

  function compter(nom) {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: nom, title: nom, event: true });
    }
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a") : null;
    if (!a || !a.href) return;
    var h = a.href;

    if (h.indexOf("Hygieborne/reserver") !== -1) compter("clic-reserver");
    else if (h.indexOf("wa.me") !== -1 || h.indexOf("chat.whatsapp.com") !== -1) compter("clic-whatsapp");
    else if (h.indexOf("calendly.com") !== -1) compter("clic-seance-essai");
    else if (h.indexOf("apps.apple.com") !== -1 || h.indexOf("play.google.com") !== -1) compter("clic-strivee-store");
    else if (h.indexOf("crossfit-hygie.fr") !== -1 && h.indexOf("actus.crossfit-hygie.fr") === -1) compter("clic-retour-site");
  });
})();
