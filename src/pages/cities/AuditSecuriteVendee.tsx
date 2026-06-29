import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteVendee = () => (
  <CityLandingPage
    data={{
      city: "Vendée",
      citySlug: "vendee",
      region: "Pays de la Loire",
      postalCode: "85",
      intro: "CyberSecure est votre prestataire audit de sécurité Vendée (85) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de La Roche-sur-Yon, Les Herbiers, Montaigu-Vendée, Les Sables-d'Olonne, Challans et tout le département.",
      localContext: "La Vendée est un département économiquement performant avec de nombreuses ETI et PME familiales dans l'industrie, l'agroalimentaire, et le nautisme. Les Herbiers et Montaigu forment un pôle industriel dense dans le Bocage vendéen avec de l'électronique industrielle, de la mécanique de précision, et de la plasturgie. L'agroalimentaire vendéen (Fleury Michon à Pouzauges, Sodebo à Saint-Georges-de-Montaigu, Tipiak) est reconnu nationalement. Le nautisme (Bénéteau à Saint-Gilles, Jeanneau à Saint-Gilles) fait du département un leader mondial de la construction de bateaux de plaisance.",
      sectors: [
        "Industrie bocage (PME/ETI Herbiers-Montaigu — mécatronique, électronique, OT)",
        "Agroalimentaire (Fleury Michon, Sodebo, Tipiak — ERP, HACCP cloud, traçabilité)",
        "Nautisme (Bénéteau, Jeanneau, Fountaine Pajot — CAO marine, OT chantier)",
        "Ameublement (Gautier, Parisot — conception 3D, ERP cloud, e-commerce)",
        "Tourisme (Puy du Fou, Vendée Atlantique — PCI DSS, données visiteurs)",
        "Santé (CHD Vendée, cliniques Yon — HDS, télémédecine)",
        "PME services (services B2B vendéens — cloud, Microsoft 365, NIS2)",
        "Collectivités (LRYA, CD85 — cloud souverain, e-administration)",
      ],
      neighborhoods: [
        "La Roche-sur-Yon (85000)",
        "Les Herbiers – Montaigu (85500/85600)",
        "Les Sables-d'Olonne (85100)",
        "Challans (85300)",
        "Fontenay-le-Comte (85200)",
        "Saint-Gilles-Croix-de-Vie (85800)",
        "Noirmoutier-en-l'Île (85330)",
        "Chantonnay (85110)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Vendée (85) ?",
          a: "Oui, CyberSecure intervient dans toute la Vendée : La Roche-sur-Yon Agglomération, Nord Vendée, Bocage, Littoral vendéen. Nos consultants connaissent les ETI familiales vendéennes et les enjeux cyber de l'industrie bocagère. CERT d'urgence 24/7.",
        },
        {
          q: "Fleury Michon (Pouzauges) a été victime d'une cyberattaque en 2022 : quelles leçons pour les IAA vendéennes ?",
          a: "Fleury Michon a subi une cyberattaque en 2022 qui a perturbé sa production pendant plusieurs jours. Les leçons pour les IAA vendéennes : segmentation réseau entre les systèmes de pilotage de la chaîne de production (automates, SCADA) et les systèmes IT bureautiques, sauvegardes testées quotidiennement et hors ligne, plan de continuité d'activité (PCA) documenté avec des procédures manuelles de secours pour maintenir une production minimale, et exercices de crise réguliers. CyberSecure propose des audits de cybersécurité adaptés aux industries agroalimentaires (contraintes HACCP, traçabilité, certification IFS/BRC).",
        },
        {
          q: "Bénéteau-Jeanneau (Les Herbiers/Saint-Gilles) : comment un leader mondial du nautisme protège-t-il ses plans de conception ?",
          a: "Bénéteau groupe est le 1er constructeur mondial de voiliers et 2e de bateaux à moteur. Ses plans de conception (coques, éléments composites, systèmes de navigation) représentent des décennies de R&D. La protection passe par : DRM (Digital Rights Management) sur les fichiers CAO partagés avec les sous-traitants, classification des données (plans des nouveaux modèles = CONFIDENTIEL pendant 2 ans avant lancement), audit des accès aux serveurs de fichiers CAO, et DLP pour bloquer les exfiltrations USB/email. CyberSecure a une expertise dans la protection de la propriété intellectuelle industrielle.",
        },
        {
          q: "Le Puy du Fou est-il soumis à la directive NIS2 ?",
          a: "Le Puy du Fou est un acteur touristique et culturel d'envergure nationale. Il n'entre pas directement dans les catégories NIS2 (infrastructures critiques, énergie, santé). Cependant, comme tout opérateur traitant des données personnelles à grande échelle (millions de données clients), il est fortement soumis au RGPD. Les risques liés à une violation de données (vol des données de réservation de milliers de familles) peuvent engendrer des sanctions CNIL importantes et un impact réputationnel majeur. CyberSecure propose des audits RGPD et de sécurité des systèmes de billetterie pour les parcs d'attractions.",
        },
        {
          q: "Quels financements pour un audit cyber en Vendée ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI de Vendée — diagnostics numériques. La Roche-sur-Yon Agglomération — programmes innovation. BPI France Pays de Loire — prêts innovation. Vendée Expansion accompagne les PME dans leur développement. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteVendee;
