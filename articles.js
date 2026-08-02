/* ============================================================
   articles.js : SOURCE DE VÉRITÉ du blog Actus Hygie.
   Ajouter un article = ajouter un objet ici (en premier)
   + créer le fichier HTML correspondant dans /articles/.
   Rubriques valides : "Tutos appli", "Prog & cycles",
   "Challenges", "Vie de la box".
   "epingle": true = affiché en tête de liste, avant les
   articles triés par date (du plus récent au plus ancien).
   ============================================================ */

const ARTICLES = [
  {
    "id": "lexique-crossfit",
    "titre": "Décode le tableau : le lexique CrossFit",
    "rubrique": "Vie de la box",
    "date": "2026-08-02",
    "resume": "AMRAP, EMOM, RX, PR… le petit lexique pour comprendre tout ce qui est écrit au tableau et parler CrossFit comme un pro.",
    "url": "articles/lexique-crossfit.html"
  },
  {
    "id": "bien-demarrer-chez-hygie",
    "titre": "Bien démarrer chez Hygie",
    "rubrique": "Vie de la box",
    "date": "2026-08-02",
    "resume": "Nouveau membre ? Réserver sur Resawod, ta première séance, Strivee, le groupe WhatsApp, le guide des cours : tout est là.",
    "url": "articles/bien-demarrer-chez-hygie.html",
    "epingle": true
  },
  {
    "id": "bienvenue-sur-les-actus",
    "titre": "Bienvenue sur les Actus Hygie",
    "rubrique": "Vie de la box",
    "date": "2026-08-02",
    "resume": "Pourquoi cette page existe, ce que tu vas y trouver, et comment ne plus jamais perdre une info de la box.",
    "url": "articles/bienvenue-sur-les-actus.html",
    "epingle": true
  }
];
