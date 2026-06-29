import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBouchesduRhone = () => (
  <CityLandingPage
    data={{
      city: "Bouches-du-Rhône",
      citySlug: "bouches-du-rhone",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "13",
      intro: "CyberSecure est votre prestataire audit de sécurité Bouches-du-Rhône (13) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Marseille, Aix-en-Provence, Vitrolles, Aubagne, Martigues et tout le département.",
      localContext: "Les Bouches-du-Rhône combinent un poids économique majeur (2e département de PACA) avec une diversité sectorielle unique : port de commerce (Grand Port Maritime de Marseille, 2e port européen de conteneurs), industrie pétrochimique lourde sur la zone de Fos-sur-Mer, pôle high-tech à Aix-en-Provence (Technopole de l'Arbois), et tourisme de masse sur la côte. Marseille accueille aussi des câbles sous-marins intercontinentaux (SEACOM, PEACE) qui en font un nœud stratégique de connectivité méditerranéenne. CMA CGM (siège à Marseille) est l'un des plus grands armateurs mondiaux.",
      sectors: [
        "Port et maritime (Grand Port Maritime Marseille, CMA CGM, MSC — OIV)",
        "Pétrochimie et raffinage (TotalEnergies Lavera, Ineos, Arkema — OT Seveso)",
        "Sidérurgie (ArcelorMittal Fos-sur-Mer — MES, OT industriel)",
        "High-tech et numérique (Technopole Arbois, Capgemini, Sopra Steria Aix)",
        "Santé (AP-HM, IPC, Générale de Santé — HDS, urgences cyber)",
        "Tourisme (Aéroport Marseille-Provence, hôtellerie, casinos — PCI DSS)",
        "Agroalimentaire (Pernod Ricard Marseille, Pastis Henri Bardouin — ERP)",
        "Collectivités (Métropole Aix-Marseille-Provence, CD13 — smart city, NIS2)",
      ],
      neighborhoods: [
        "Marseille – La Joliette – Euroméditerranée (13001/13002)",
        "Aix-en-Provence – Technopole Arbois (13100)",
        "Vitrolles – Marignane – Berre (13127/13700)",
        "Martigues – Fos-sur-Mer – Port-Saint-Louis (13500/13230)",
        "Aubagne – La Ciotat – Cassis (13400/13600)",
        "Salon-de-Provence – Istres (13300/13800)",
        "Arles – Tarascon (13200)",
        "Miramas – Châteaurenard (13140/13160)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Bouches-du-Rhône (13) ?",
          a: "Oui, CyberSecure intervient dans tout le 13 : Métropole Aix-Marseille-Provence (92 communes), Pays d'Arles, Pays de Martigues, et Pays Salonais. Nous connaissons les contraintes industrielles des zones de Fos-sur-Mer et les spécificités portuaires marseillaises. CERT d'urgence 24/7.",
        },
        {
          q: "Les obligations NIS2 pour les OIV et les grands ports maritimes dans les Bouches-du-Rhône ?",
          a: "Le Grand Port Maritime de Marseille est à la fois un OIV (Opérateur d'Importance Vitale) et une entité essentielle NIS2. Les TotalEnergies et ArcelorMittal de Fos-sur-Mer sont également OIV dans les secteurs énergie et industrie. Ces entreprises doivent respecter les arrêtés sectoriels de sécurité (SSI) pour les OIV, et la directive NIS2 pour la cybersécurité des systèmes d'information essentiels. CyberSecure accompagne les OIV dans leurs audits de conformité et la préparation des plans de sécurité.",
        },
        {
          q: "Pentest d'une application de gestion de terminal portuaire (TOS) au Havre ou à Marseille ?",
          a: "Les systèmes de gestion de terminal (TOS comme Navis N4, TBA SPARCS) gèrent le mouvement de milliers de conteneurs par jour. Un pentest de TOS couvre : l'interface web et les APIs de l'opérateur, les intégrations EDI avec les armateurs et la douane, les systèmes de contrôle des équipements (grues, AGV), et la gestion des accès des chauffeurs et acconiers. La criticité est très élevée : une compromission peut bloquer un terminal et générer des pertes de plusieurs millions d'euros par jour. CyberSecure a l'expérience des environnements portuaires complexes.",
        },
        {
          q: "CMA CGM a été victime d'un ransomware en 2020 : comment les armateurs se protègent-ils aujourd'hui ?",
          a: "Après l'attaque Ragnar Locker (octobre 2020), CMA CGM a massivement investi dans sa cybersécurité. Les mesures standard pour un armateur : segmentation réseau IT/OT (systèmes de navigation ECDIS séparés du réseau corporate), EDR sur tous les postes (y compris à bord), MFA généralisé pour les accès distants, sauvegardes immuables hors ligne, et exercices de crise cyber avec les équipes à bord. CyberSecure propose des audits et des exercices de crise pour les entreprises maritimes.",
        },
        {
          q: "Quels financements pour un audit cyber dans les Bouches-du-Rhône ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Marseille-Provence — diagnostics numériques et chèques cyber. Métropole Aix-Marseille-Provence — programmes numériques. BPI France PACA — prêts innovation. French Tech Aix-Marseille accompagne ses startups. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBouchesduRhone;
