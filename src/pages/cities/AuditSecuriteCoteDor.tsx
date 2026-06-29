import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCoteDor = () => (
  <CityLandingPage
    data={{
      city: "Côte-d'Or",
      citySlug: "cote-dor",
      region: "Bourgogne-Franche-Comté",
      postalCode: "21",
      intro: "CyberSecure est votre prestataire audit de sécurité Côte-d'Or (21) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Dijon, Beaune, Chenôve, Quetigny, Longvic et tout le département.",
      localContext: "La Côte-d'Or est le département siège de la Région Bourgogne-Franche-Comté. Dijon Métropole est une smart city pionnière (OnDijon, IoT urbain) avec une transformation numérique avancée. Le CHU Dijon-Bourgogne est l'établissement de santé de référence de l'est bourguignon. L'industrie est portée par Urgo Group (dispositifs médicaux), Nidec Global Appliance (moteurs), Cargill (céréales). Le vitivinicole (négoces de Beaune, domaines viticoles) génère des volumes importants de transactions et données clients. L'Université de Bourgogne et l'INRAE créent un écosystème de recherche agri-agroalimentaire.",
      sectors: [
        "Santé (CHU Dijon-Bourgogne — HDS, NIS2 santé, audit données patients, pentest)",
        "Industrie (Urgo Group, Nidec Dijon — OT, audit dispositifs médicaux, propriété R&D)",
        "Agroalimentaire (Cargill, IAA 21 — audit ERP, traçabilité, audit ISO 27001)",
        "Vitivinicole (négoces Beaune, domaines — PCI DSS, RGPD, audit sécurité e-commerce)",
        "Smart city (Dijon Métropole — audit IoT, pentest OnDijon, NIS2 collectivités)",
        "Logistique (Bolloré, FM Logistic — audit SI, WMS, sécurité flux fournisseurs)",
        "Recherche (Université Bourgogne, INRAE — RGPD recherche, sécurité open data)",
        "PME services (ESN dijonnaises, professions libérales — pentest, NIS2)",
      ],
      neighborhoods: [
        "Dijon – Quetigny (21000/21560)",
        "Chenôve – Marsannay (21300)",
        "Beaune (21200)",
        "Longvic – Chevigny-Saint-Sauveur (21600/21800)",
        "Talant – Fontaine-lès-Dijon (21240)",
        "Auxonne (21130)",
        "Nuits-Saint-Georges (21700)",
        "Montbard (21500)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Côte-d'Or (21) pour les audits ?",
          a: "Oui, CyberSecure intervient dans toute la Côte-d'Or : Dijon Métropole, Beaune, Côte de Nuits, Auxois. Nos consultants maîtrisent les spécificités sectorielles locales (santé, vitivinicole, agroalimentaire, smart city). CERT d'urgence 24/7.",
        },
        {
          q: "CHU Dijon-Bourgogne : comment réaliser un audit NIS2 d'un établissement de santé majeur ?",
          a: "Le CHU Dijon-Bourgogne est un établissement de santé soumis à NIS2 (catégorie 'entité essentielle' santé). Un audit NIS2 santé couvre : gouvernance cybersécurité (RSSI, politique SMSI), gestion des incidents (SOC, CERT santé), sécurité des systèmes DPI (Dossier Patient Informatisé — Hexavie, Crossway), sécurité des équipements médicaux connectés (scanners, IRM, moniteurs patients), continuité d'activité (PRA/PCA avec scénario ransomware), et hébergement HDS. La certification HDS est obligatoire pour toute infrastructure hébergeant des données de santé à caractère personnel. CyberSecure réalise des audits NIS2 spécialisés pour les établissements de santé.",
        },
        {
          q: "Urgo Group fabrique des dispositifs médicaux : quelles exigences de sécurité spécifiques ?",
          a: "Les fabricants de dispositifs médicaux comme Urgo Group sont soumis au règlement MDR (Medical Device Regulation EU 2017/745) qui impose des exigences de cybersécurité sur les DM connectés. Pour les produits SaMD (Software as Medical Device), la norme IEC 62304 régit le cycle de développement logiciel (analyse de risques, tests de sécurité). Les données d'essais cliniques et les données de pharmacovigilance sont des données de santé (RGPD - base légale intérêt public). CyberSecure audite les systèmes de fabrication et les données de R&D des fabricants de dispositifs médicaux.",
        },
        {
          q: "Les négoces de Beaune traitent des paiements de vins à plusieurs milliers d'euros : quelle conformité PCI DSS ?",
          a: "Un négoce bourguignon comme Maison Drouhin ou Louis Jadot traite des paiements en ligne de bouteilles valant parfois 500 à 5000€ par commande. La conformité PCI DSS exige : qualification du niveau PCI DSS (niveau 1 si +6M transactions/an), audit QSA annuel (Qualified Security Assessor), tokenisation des numéros de carte (jamais stockés en clair), et scans trimestriels de vulnérabilités des serveurs e-commerce. Un seul incident de fraude sur une grande maison peut ruiner une réputation construite en 200 ans. CyberSecure réalise des audits PCI DSS pour les acteurs du e-commerce vitivinicole.",
        },
        {
          q: "Quels financements pour un audit cyber en Côte-d'Or ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Côte-d'Or — diagnostics numériques. Dijon Métropole — programmes innovation entreprises. BPI France Bourgogne-Franche-Comté — prêts innovation. La Région Bourgogne-Franche-Comté — aides numérisation PME, fonds FEDER. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCoteDor;
