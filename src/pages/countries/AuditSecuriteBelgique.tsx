import CountryHubPage, { CountryData } from "@/components/CountryHubPage";

const data: CountryData = {
  country: "Belgique",
  countrySlug: "belgique",
  region: "Europe occidentale",
  intro:
    "CyberSecure accompagne les entreprises belges dans leurs audits de sécurité informatique, pentests et mise en conformité NIS2/RGPD. De Bruxelles à Mons, nos experts PASSI sécurisent les institutions européennes, le secteur public belge, les banques (ING, KBC) et les industries (ArcelorMittal) selon les exigences du Centre for Cybersecurity Belgium (CCB).",
  context:
    "La Belgique accueille les sièges de l'Union européenne et de l'OTAN à Bruxelles, faisant du pays une cible prioritaire pour les opérations de cyberespionnage étatiques. En 2021, le Parlement fédéral belge a subi une cyberattaque majeure attribuée à des acteurs liés à la Chine. Le secteur bancaire belge (ING Belgique, KBC, Belfius, BNP Paribas Fortis) traite des volumes considérables de transactions interbancaires via SWIFT, nécessitant des tests d'intrusion réguliers sur les systèmes de paiement. ArcelorMittal Liège, premier producteur d'acier d'Europe, exploite des systèmes OT industriels (hauts fourneaux, laminage) vulnérables aux attaques sur les protocoles PROFIBUS et OPC-UA. Le CCB (Centre for Cybersecurity Belgium) a publié la stratégie nationale cybersécurité 2.0 avec l'objectif de rendre la Belgique l'un des pays les moins vulnérables au cyber d'ici 2025.",
  regulation:
    "La Belgique a transposé la directive NIS2 via la loi du 26 avril 2024, avec le CCB comme autorité compétente. Le RGPD est supervisé par l'APD (Autorité de Protection des Données) / GBA (Gegevensbeschermingsautoriteit). La loi du 7 avril 2019 établissant un cadre pour la sécurité des réseaux et des systèmes d'information constitue la base légale NIS1. DORA s'applique aux entités financières belges depuis janvier 2025. Le CCB a le pouvoir d'audit et de sanction sur les entités essentielles et importantes au sens de NIS2.",
  sectors: [
    "Institutions EU/OTAN et secteur public fédéral (Commission EU, OTAN, SPF)",
    "Banques et assurances (ING, KBC, Belfius, BNP Paribas Fortis, Ageas)",
    "Industrie lourde et OT (ArcelorMittal, Solvay, UCB Pharma)",
    "Télécommunications (Proximus, Orange Belgium, Telenet)",
    "Logistique et ports (Port d'Anvers, Brussels Airport, bpost)",
    "Énergie et utilities (Engie Belgium, Luminus, Elia réseau)",
  ],
  cities: [
    { name: "Bruxelles", urlPath: "/audit-securite-bruxelles", description: "UE, OTAN, banques et siège des multinationales" },
    { name: "Liège", urlPath: "/audit-securite-liege", description: "ArcelorMittal, industrie OT et université" },
    { name: "Namur", urlPath: "/audit-securite-namur", description: "Capitale wallonne, administrations régionales" },
    { name: "Charleroi", urlPath: "/audit-securite-charleroi", description: "Industries, aéroport et PME manufacturières" },
    { name: "Mons", urlPath: "/audit-securite-mons", description: "OTAN SHAPE, universités et pôle numérique" },
  ],
  faq: [
    {
      q: "Quel est le coût d'un audit de sécurité NIS2 en Belgique ?",
      a: "Un audit de conformité NIS2 en Belgique pour une entité essentielle est facturé entre 15 000 € et 60 000 € selon la taille et la criticité. Le périmètre comprend la cartographie des risques, l'évaluation des 10 mesures NIS2 obligatoires, le pentest des systèmes critiques et la rédaction du plan de mise en conformité. Les premières déclarations CCB étaient attendues pour octobre 2024.",
    },
    {
      q: "Le CCB impose-t-il des audits obligatoires aux entreprises belges ?",
      a: "La loi NIS2 belge du 26 avril 2024 donne au CCB le pouvoir d'ordonner des audits de sécurité aux entités essentielles et importantes. Les sanctions peuvent atteindre 10 millions d'euros ou 2 % du chiffre d'affaires mondial pour les entités essentielles (17 secteurs concernés). CyberSecure peut réaliser les audits de conformité reconnus par le CCB.",
    },
    {
      q: "Comment sécuriser les systèmes industriels OT d'ArcelorMittal ou de Solvay en Belgique ?",
      a: "La sécurisation des OT industriels belges implique : audit de segmentation IT/OT selon IEC 62443, test d'intrusion sur les automates (Siemens S7, ABB), revue des protocoles PROFIBUS/Profinet, mise en place d'une supervision OT (Claroty/Nozomi) et plan de réponse à incident industriel. Pour un site de taille moyenne (5 à 10 lignes de production), compter 20 000 à 50 000 €. Délai : 6 à 10 semaines.",
    },
    {
      q: "DORA s'applique-t-il aux banques belges ? Quelles obligations en matière de pentest ?",
      a: "DORA (Digital Operational Resilience Act) s'applique depuis janvier 2025 à toutes les entités financières belges : banques, assurances, gestionnaires de fonds, PSP. Les obligations incluent des tests de résilience opérationnelle numérique annuels (TLPT — Threat-Led Penetration Testing) pour les entités significatives, selon le cadre TIBER-EU. CyberSecure est qualifié pour réaliser des tests TLPT/TIBER pour les entités financières belges.",
    },
    {
      q: "CyberSecure est-il reconnu par le CCB pour réaliser des audits en Belgique ?",
      a: "CyberSecure dispose de la qualification PASSI (Prestataire d'Audit de la Sécurité des Systèmes d'Information) de l'ANSSI française, reconnue dans le cadre de la coopération franco-belge en matière de cybersécurité. Nos rapports d'audit sont acceptés par le CCB pour la démonstration de conformité NIS2. Nous intervenons régulièrement à Bruxelles, Liège et Namur pour des clients institutionnels et industriels.",
    },
  ],
};

const AuditSecuriteBelgique = () => <CountryHubPage data={data} />;
export default AuditSecuriteBelgique;
