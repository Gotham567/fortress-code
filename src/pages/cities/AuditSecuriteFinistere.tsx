import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteFinistere = () => (
  <CityLandingPage
    data={{
      city: "Finistère",
      citySlug: "finistere",
      region: "Bretagne",
      postalCode: "29",
      intro: "CyberSecure est votre prestataire audit de sécurité Finistère (29) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Brest, Quimper, Morlaix, Quimperlé, Landerneau et tout le département.",
      localContext: "Le Finistère est l'un des départements français avec la plus forte densité d'acteurs de la défense et de la recherche maritime. Brest est la 2e base navale française, siège du Commandement de la Zone Maritime de l'Atlantique. Naval Group Brest conçoit des sous-marins nucléaires d'attaque (Barracuda) et des frégates pour la Marine Nationale et l'export. L'Ifremer (Institut Français de Recherche pour l'Exploitation de la Mer) a son siège à Plouzané. Le Pôle Mer Bretagne-Atlantique fédère la filière maritime innovante. La filière agroalimentaire (Bigard, conserveries, produits de la mer) est un pilier économique majeur.",
      sectors: [
        "Défense navale (Naval Group Brest, SNA Barracuda — IP classifiée, conformité)",
        "Base navale (BCRM Brest, ALFAN — systèmes militaires NIS2 défense)",
        "Recherche maritime (Ifremer, SHOM, CNRS — données bathymétriques, brevets)",
        "Agroalimentaire maritime (Bigard, Hénaff, Le Gaulois — ERP, traçabilité mer)",
        "Numérique breton (Digital Bretagne, Brest Métropole — startups, French Tech)",
        "Port et maritime civil (Port de Commerce Brest, Morlaix — OT portuaire)",
        "Santé (CHRU Brest, hôpitaux finistériens — HDS, télémédecine atlantique)",
        "Collectivités (Brest Métropole, CD29 — cloud souverain, e-administration)",
      ],
      neighborhoods: [
        "Brest – Recouvrance – Lambézellec (29200)",
        "Plouzané – Guipavas – Landerneau (29280/29490/29400)",
        "Quimper – Ergué-Gabéric (29000)",
        "Morlaix – Saint-Martin-des-Champs (29600)",
        "Concarneau – Quimperlé (29900/29300)",
        "Brest Métropole Nord – Lesneven (29400)",
        "Douarnenez – Audierne (29100)",
        "Crozon – Châteaulin (29160/29150)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Finistère (29) ?",
          a: "Oui, CyberSecure intervient dans tout le Finistère : Brest Métropole, Quimper Bretagne Occidentale, Pays de Morlaix, Pays de Cornouaille. Nos consultants ont une expertise dans les environnements de défense navale et les systèmes d'information maritimes. CERT d'urgence 24/7.",
        },
        {
          q: "Comment les PME finistériennes sous-traitantes de Naval Group obtiennent-elles les habilitations nécessaires ?",
          a: "L'habilitation de sécurité (Secret Défense, Confidentiel Défense, Diffusion Restreinte) pour les PME sous-traitantes de Naval Group est délivrée par le SGDSN via le Haut Fonctionnaire de Défense et de Sécurité (HFDS) du ministère concerné. La procédure comprend : demande d'habilitation pour les personnes qui accèdent aux données classifiées, homologation des SI qui traitent ces données (validation ANSSI), et respect des consignes de sécurité permanentes (CSNA). Cela prend typiquement 6-18 mois selon le niveau d'habilitation requis. CyberSecure accompagne les PME finistériennes dans la préparation du dossier de sécurité.",
        },
        {
          q: "L'Ifremer et ses partenaires académiques : comment partager des données de recherche marine sensibles ?",
          a: "L'Ifremer collabore avec des universités mondiales (MIT, Woods Hole, Scripps) via des projets européens (Horizon Europe) et des conventions de recherche. Le partage de données bathymétriques (certaines données sont confidentielles car elles intéressent les sous-marins militaires) doit suivre des protocoles stricts. Pour les données non sensibles, des plateformes de partage ouvert (SEANOE) sont utilisées. Pour les données sensibles, des accords de partage restrictifs (NDA, accès contrôlé) et des espaces cloud sécurisés (OVHcloud SecNumCloud ou Microsoft GCC High) sont nécessaires. CyberSecure accompagne Ifremer et ses partenaires dans la gestion des données.",
        },
        {
          q: "Bigard (Quimperlé) est le 1er abattoir de France : risques cyber dans l'industrie de la viande ?",
          a: "Bigard (groupe Bigard-Socopa-Médina) traite des millions de tonnes de viande par an avec des chaînes d'abattage automatisées, des systèmes de traçabilité (RFID, ERP), et des exports vers 100+ pays. Un ransomware sur les systèmes de planification de production (comme l'attaque JBS USA en 2021 qui a paralysé 20% de la production bovine américaine) peut coûter des dizaines de millions. Mesures clés : ségrégation IT/OT (les automates de la chaîne d'abattage sur un réseau isolé), sauvegardes immuables des ERP de traçabilité, et formation des opérateurs à la détection des menaces. CyberSecure audite les IAA bretonnes.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Finistère ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Finistère — diagnostics numériques. Brest Métropole — programmes innovation. BPI France Bretagne — prêts innovation. Le Pôle Mer Bretagne-Atlantique et Digital Bretagne accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteFinistere;
