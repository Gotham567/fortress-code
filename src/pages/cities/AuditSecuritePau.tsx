import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuritePau = () => (
  <CityLandingPage
    data={{
      city: "Pau",
      citySlug: "pau",
      region: "Nouvelle-Aquitaine",
      postalCode: "64000",
      intro: "CyberSecure accompagne les PME et ETI de Pau avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs pétrolier, aéronautique et agricole des Pyrénées-Atlantiques. Notre cabinet qualifié PASSI ANSSI intervient sur site à Pau pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises du bassin palois.",
      localContext: "Pau est le siège historique de TotalEnergies en France et abrite un important cluster d'entreprises pétrolières et parapétrolières dont les systèmes d'information industriels (SCADA, DCS) constituent des cibles critiques de cyberattaques d'État. Safran Landing Systems, spécialisé dans les trains d'atterrissage pour l'aviation civile et militaire, représente le volet aéronautique d'une économie paloise en forte croissance industrielle. L'agriculture spécialisée des Pyrénées-Atlantiques (viticulture Jurançon, maïs semence) s'appuie sur des coopératives en transformation numérique. Le CHU de Pau, les cliniques privées et les nombreuses MSP du département font face aux cybermenaces ciblant le secteur médical basque et béarnais.",
      sectors: [
        "Énergie et pétrochimie (TotalEnergies, services pétroliers)",
        "Aéronautique (Safran Landing Systems, sous-traitants)",
        "Agriculture spécialisée et viticulture (Jurançon)",
        "Santé (CHU Pau, cliniques Pyrénées-Atlantiques)",
        "Tourisme pyrénéen et thermale",
        "Collectivités et Communauté d'Agglomération Pau Béarn Pyrénées",
      ],
      neighborhoods: [
        "Centre-ville et quartier du château",
        "Boulevard des Pyrénées et centre d'affaires",
        "Lons et zone industrielle sud (aéronautique)",
        "Idron et Aressy (zones d'activités technologiques)",
        "Billère et Lescar (commerce, industrie)",
        "Orthez et Béarn intérieur (agroalimentaire, industrie)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une entreprise pétrolière ou un sous-traitant TotalEnergies à Pau ?",
          a: "Un audit de sécurité pour une entreprise de services pétroliers à Pau incluant les systèmes OT/SCADA se situe entre 15 000 et 40 000 € HT selon la criticité des infrastructures. Pour les PME sous-traitantes de TotalEnergies ou Safran, un audit réseau et sécurité est tarifé entre 7 000 et 15 000 € HT. CyberSecure maîtrise les référentiels IEC 62443 pour les systèmes industriels pétroliers et propose des devis personnalisés sous 48h.",
        },
        {
          q: "Quel délai pour un test d'intrusion réseau ETI à Pau ?",
          a: "Un test d'intrusion réseau pour une ETI paloise de 100 à 300 collaborateurs dure 5 à 9 jours ouvrés. Pour des systèmes OT/IT d'une installation pétrolière ou aéronautique, comptez 10 à 20 jours selon la complexité. L'audit Active Directory seul est réalisable en 3 à 4 jours. CyberSecure peut intervenir en urgence sous 72h à Pau.",
        },
        {
          q: "Comment auditer les systèmes SCADA/DCS d'une installation pétrolière à Pau ?",
          a: "Les installations de TotalEnergies et de ses prestataires à Pau utilisent des systèmes de contrôle industriels (DCS, SCADA, SIS) dont la compromission peut entraîner des accidents industriels graves. CyberSecure réalise des audits OT/IT selon la norme IEC 62443 incluant la cartographie des réseaux OT, l'évaluation des cloisonnements IT/OT, le test des accès distants aux automates et la revue des procédures de mise à jour des firmwares industriels. Nous intervenons sans perturber la production.",
        },
        {
          q: "CyberSecure intervient-il sur site à Pau et dans les Pyrénées-Atlantiques ?",
          a: "Oui, nos consultants se déplacent à Pau, Bayonne, Biarritz, Orthez, Oloron-Sainte-Marie et dans toute la zone Pyrénées-Atlantiques. Nous couvrons également les Hautes-Pyrénées (Tarbes) pour les groupes ayant des sites dans les deux départements. Déploiement sous 48h à Pau.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site industriel ou une PME à Pau ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Pour les installations industrielles critiques (pétrolières, aéronautiques), activez également vos procédures d'urgence industrielle et contactez l'INERIS si nécessaire. Notre équipe peut être déployée sur site à Pau dans les 4 heures. CyberSecure assure les notifications ANSSI, CNIL et les déclarations réglementaires sectorielles. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuritePau;
