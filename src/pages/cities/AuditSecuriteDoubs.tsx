import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteDoubs = () => (
  <CityLandingPage
    data={{
      city: "Doubs",
      citySlug: "doubs",
      region: "Bourgogne-Franche-Comté",
      postalCode: "25",
      intro: "CyberSecure est votre prestataire audit de sécurité Doubs (25) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Besançon, Montbéliard, Pontarlier, Morteau, Audincourt et tout le département.",
      localContext: "Le Doubs est un département à double identité économique. Besançon est une ville universitaire et technologique (FEMTO-ST, microtechnique, robotique) avec une qualité de vie reconnue qui attire les talents. Montbéliard-Sochaux est le berceau de Peugeot (Stellantis), avec une usine centenaire en pleine transition Industrie 4.0. La frontière suisse génère un tissu transfrontalier dense dans la microtechnique, l'horlogerie, et les services financiers. Le CHRU Jean-Minjoz de Besançon est le principal établissement de santé de la région.",
      sectors: [
        "Automobile (Stellantis Sochaux — OT Industrie 4.0, AGV, IoT production)",
        "Microtechnique (FEMTO-ST, Statice, Percipio Robotics — IP, brevets, MEMS)",
        "Pharmacie (Novartis, Nestlé Purina Pontarlier — GxP, essais cliniques)",
        "Transfrontalier Suisse (horlogers, Roche, Novartis CH — NDA, flux data)",
        "Numérique (TEMIS Besançon, Numerica, startups — SaaS, cloud, ESN)",
        "Santé (CHRU Jean-Minjoz, cliniques — HDS, télémédecine, urgences)",
        "Bois et plasturgie (forêts Doubs, plasturgistes — ERP, traçabilité matières)",
        "Collectivités (Grand Besançon Métropole, CD25 — cloud souverain, marchés publics)",
      ],
      neighborhoods: [
        "Besançon – Planoise – La Chapelle-des-Buis (25000)",
        "Montbéliard – Sochaux – Audincourt (25200/25600)",
        "Pontarlier – Morteau (25300/25500)",
        "Baume-les-Dames (25110)",
        "Valentigney – Seloncourt (25700)",
        "Héricourt (70400)",
        "Maîche – Morteau (25120/25500)",
        "Ornans – Amancey (25290)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Doubs (25) ?",
          a: "Oui, CyberSecure intervient dans tout le Doubs : Grand Besançon Métropole, Pays de Montbéliard, Haut-Doubs, Pays de Baume. Nous avons une expertise dans les environnements automobiles OT et les relations transfrontalières Doubs-Suisse. CERT d'urgence 24/7.",
        },
        {
          q: "Stellantis Sochaux : quelles sont les exigences d'un audit IEC 62443 pour une usine automobile connectée ?",
          a: "IEC 62443 est la norme internationale de cybersécurité pour les systèmes de contrôle industriel (ICS/SCADA). Une usine Stellantis qui l'implémente définit : un Security Level (SL) cible pour chaque zone et conduit industrielle, une décomposition des systèmes en zones et conduites sécurisées (Zone and Conduit Model), des exigences de sécurité fonctionnelles (authentication, audit trails, integrity), et des tests réguliers de conformité. L'audit IEC 62443 chez Stellantis Sochaux couvre les systèmes de pilotage des robots soudeurs, des lignes d'assemblage, et des AGV. CyberSecure est qualifié pour les audits IEC 62443.",
        },
        {
          q: "FEMTO-ST (Besançon) : comment sécuriser un laboratoire de recherche en microtechnique de rang mondial ?",
          a: "FEMTO-ST (Franche-Comté Électronique Mécanique Thermique et Optique — Sciences et Technologies) est un laboratoire CNRS de premier plan. Ses recherches sur les MEMS, les systèmes temporels, et la photonique peuvent avoir des applications dans la défense et le secteur spatial. La sécurisation passe par : segmentation du réseau de recherche (internet/réseau labo/instruments), contrôle des accès physiques aux salles blanches (accès = enregistrement), politique de gestion des supports amovibles (clés USB, disques durs), et sensibilisation des doctorants aux tentatives d'espionnage industriel. CyberSecure propose des formations et audits adaptés aux laboratoires de recherche.",
        },
        {
          q: "Les entreprises bisontines avec des filiales suisses (Bale-Neuchâtel) : gestion des données personnelles transfrontalières ?",
          a: "Les transferts de données personnelles France → Suisse sont légaux car la Suisse bénéficie d'une décision d'adéquation de la Commission Européenne. Cependant, depuis septembre 2023, la nouvelle loi suisse sur la protection des données (nLPD) impose des obligations similaires au RGPD aux entreprises suisses. Les entreprises doubistes doivent : documenter les flux transfrontaliers (registre RGPD), signer des DPA avec les entités suisses qui traitent des données pour leur compte, et informer leurs clients des transferts vers la Suisse. CyberSecure accompagne les ETI francomtoises dans leur conformité RGPD transfrontalière.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Doubs ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Doubs — diagnostics numériques. Grand Besançon Métropole — programmes innovation. BPI France Bourgogne-Franche-Comté — prêts innovation. Le TEMIS et la Cité des Microtechniques accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteDoubs;
