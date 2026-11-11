// ─────────────────────────────────────────────────────────────
//  RÉGLAGES DE LA PAGE — tout ce qui se modifie est ici.
// ─────────────────────────────────────────────────────────────
window.CONFIG = {
  // Textes
  surtitre: "Avis à tous les héros",
  titre: "LAN PARTY",
  sousTitre: "Une seule question demeure…",
  message: "Réponds vite, les boutons d'acné vont périmer.",
  signature: "",

  // Version de la page :
  //   "question" → la page pose la question de la date
  //   "compte"   → compte à rebours jusqu'à la date retenue
  mode: "question",

  // ── Version "question" ──
  question: "Quand est-ce qu'on fait cette maudite LAN ?",

  // ── Version "compte" ──
  // Date et heure de l'événement (format AAAA-MM-JJTHH:MM:SS)
  date: "2026-12-12T20:00:00",
  lieu: "Lieu à préciser",

  // Musique : nom du fichier déposé dans le dossier "music".
  // Tant que le fichier n'existe pas, une petite boucle 8-bit est jouée à la place.
  musique: "LAN.mp3",
  volume: 0.5,

  // Bande son du bouton "Introspection" (fichier du dossier "music").
  // Laisse vide ("") pour retirer le bouton.
  introspection: "Introspection.mp3",
  // Nombre de héros à toucher pour faire apparaître le bouton
  herosPourSurprise: 30,
  volumeIntrospection: 1,

  // Personnages : fichiers du dossier "assets".
  // Pour en ajouter un, dépose le fichier dans "assets" et ajoute une ligne ici.
  //   regarde : sens dans lequel le personnage regarde sur l'image d'origine,
  //             "gauche" ou "droite" → il est retourné pour avancer de face ;
  //             "face" → il n'est jamais retourné.
  //   type: "coucou" → ne traverse pas : sort du bas de l'écran puis redescend.
  // Une même image n'est jamais affichée deux fois en même temps.
  images: [
    { fichier: "Druide ancien au bâton d’or.png", regarde: "gauche" },
    { fichier: "Guerrier pixel chevauchant un ours enragé.png", regarde: "gauche" },
    { fichier: "absolum.png", regarde: "gauche" },
    { fichier: "project_zomboid.png", regarde: "gauche" },
    { fichier: "RL.png", regarde: "gauche" },
    { fichier: "phoenix.png", regarde: "face" },
    { fichier: "pubg.png", regarde: "gauche" },
    { fichier: "riskofrain.png", regarde: "gauche" },
    { fichier: "vrising.png", regarde: "face" },
    { fichier: "benji.png", type: "coucou" },
  ],

  // Nombre maximum de personnages visibles en même temps
  maxPersonnages: 4,
};
