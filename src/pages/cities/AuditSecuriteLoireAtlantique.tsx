import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLoireAtlantique = () => (
  <CityLandingPage
    data={{
      city: "Loire-Atlantique",
      citySlug: "loire-atlantique",
      region: "Pays de la Loire",
      postalCode: "44",
      intro: "CyberSecure est votre prestataire audit de sécurité Loire-Atlantique (44) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Nantes, Saint-Nazaire, Saint-Herblain, Rezé, Orvault et tout le département.",
      localContext: "La Loire-Atlantique est un département locomotive de l'économie française. Nantes Métropole est la 6e métropole française, reconnue pour sa qualité de vie et son attractivité des talents numériques. La French Tech Nantes (fintech, insurtech, medtech) génère des startups à forte croissance. Saint-Nazaire est un centre mondial de construction navale (Chantiers de l'Atlantique) et aéronautique (Airbus Saint-Nazaire). Le port de Nantes-Saint-Nazaire est le 4e port français. Les mutuelles et assurances (Groupama Loire Bretagne, Macif, Caisse d'Épargne) ont leur siège dans le 44.",
      sectors: [
        "Construction navale (Chantiers de l'Atlantique, Naval Group — OT, conception navire)",
        "Aéronautique (Airbus Saint-Nazaire, Daher, stelia Aerospace — TISAX)",
        "Fintech et assurance (Groupama Loire Bretagne, Crédit Agricole 44 — cloud financier)",
        "Numérique (SII Nantes, CGI, Capgemini — ESN, SI complexes)",
        "Santé (CHU Nantes, ICO Nantes — HDS, télémédecine, recherche)",
        "Startups SaaS (Bpifrance Nantes, Atlanpole — levées de fonds, audits)",
        "Port et logistique (Grand Port Maritime Nantes-Saint-Nazaire, CMA CGM)",
        "Collectivités (Nantes Métropole, CD44 — open data, cloud souverain)",
      ],
      neighborhoods: [
        "Nantes – Île de Nantes – Malakoff (44000)",
        "Saint-Herblain – Orvault – La Chapelle (44800/44700)",
        "Rezé – Vertou – Saint-Sébastien (44400/44120)",
        "Saint-Nazaire – Trignac – Donges (44600/44480)",
        "La Baule-Escoublac – Guérande (44500)",
        "Ancenis-Saint-Géréon (44150)",
        "Châteaubriant – Pouancé (44110)",
        "Clisson – Vallet – Montaigu (44190)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Loire-Atlantique (44) ?",
          a: "Oui, CyberSecure intervient dans tout le 44 : Nantes Métropole, Saint-Nazaire Agglomération, Pays de la Loire côtier, Pays d'Ancenis. Nos consultants ont une expertise dans les secteurs naval, aéronautique, et fintech nantais. CERT d'urgence 24/7.",
        },
        {
          q: "Airbus Saint-Nazaire assemble des tronçons de l'A320 : quelles sont les exigences cyber pour un site de production aéronautique ?",
          a: "Le site Airbus de Saint-Nazaire (tronçons de fuselage) est soumis aux exigences TISAX et aux politiques de cybersécurité du groupe Airbus. Un audit de sécurité couvre : les systèmes MES (Manufacturing Execution System) de suivi de production, les équipements de test et de mesure connectés (IoT industriel), les accès des sous-traitants sur site (sous-réseaux invités, portails extranet), et la sécurité physique des zones sensibles. CyberSecure accompagne les sites industriels aéronautiques dans leur conformité.",
        },
        {
          q: "Les Chantiers de l'Atlantique à Saint-Nazaire : comment protéger les plans de conception des paquebots ?",
          a: "Les plans de paquebot (Royal Caribbean Icon of the Seas, MSC Virtuosa) représentent des années de travail et des milliards d'euros de propriété intellectuelle. Les risques : espionnage industriel (concurrents asiatiques, coréens), vol de plans via des attaques phishing ciblées sur les ingénieurs. Mesures : classification des données de conception (SECRET, CONFIDENTIEL), chiffrement des espaces de travail CAO (CATIA, AutoCAD), DLP (Data Loss Prevention) pour bloquer les exfiltrations, et contrôle strict des accès des équipes projet. CyberSecure audite ces environnements de haute valeur intellectuelle.",
        },
        {
          q: "Le CHU de Nantes face aux ransomwares hospitaliers : quelle stratégie de défense ?",
          a: "Le CHU de Nantes, comme tout établissement de santé NIS2, est une cible prioritaire des groupes de ransomware (LockBit, BlackCat, Clop). La stratégie de défense repose sur : segmentation du réseau hospitalier (DMZ entre IT et équipements médicaux IoT), sauvegardes quotidiennes immuables testées régulièrement, formation du personnel soignant à la détection du phishing, PCA/PRA avec objectif de RPO inférieur à 24h, et convention CERT-Santé pour la réponse aux incidents. CyberSecure propose des audits de maturité cyber adaptés aux hôpitaux.",
        },
        {
          q: "Quels financements pour un audit cyber en Loire-Atlantique ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Nantes-Saint-Nazaire — chèques transformation numérique. Nantes Métropole — programmes numériques. BPI France Pays de Loire — prêts innovation. Le pôle EMC2 et la French Tech Nantes accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLoireAtlantique;
