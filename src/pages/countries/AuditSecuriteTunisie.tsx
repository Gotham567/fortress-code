import CountryHubPage, { CountryData } from "@/components/CountryHubPage";

const data: CountryData = {
  country: "Tunisie",
  countrySlug: "tunisie",
  region: "Afrique du Nord",
  intro:
    "CyberSecure propose des audits de sécurité informatique et pentests en Tunisie, marché nearshore privilégié des entreprises françaises. Nos experts PASSI interviennent à Tunis, Sfax et Sousse pour sécuriser les centres offshore IT, les banques et les infrastructures industrielles conformément aux exigences de l'ANSI tunisienne.",
  context:
    "La Tunisie héberge plus de 700 sociétés de services informatiques nearshore travaillant pour des donneurs d'ordre européens, principalement français, ce qui en fait une cible de choix pour les cyberattaques par rebond. La Société Tunisienne de Banque (STB) et Attijari Bank Tunisie ont renforcé leurs dispositifs de sécurité après plusieurs incidents de fraude bancaire en ligne. Les industries mécaniques et de phosphates de la région de Sfax concentrent des systèmes SCADA vieillissants présentant des failles critiques. L'Agence Nationale de la Sécurité Informatique (ANSI) a publié en 2022 le référentiel de sécurité des systèmes d'information pour les administrations, imposant des audits biannuels aux ministères. Le CERT-TCC (Computer Emergency Response Team – Tunisie) traite en moyenne 4 500 incidents déclarés par an, avec une hausse de 38 % des attaques ransomware en 2023.",
  regulation:
    "La loi n° 2004-63 du 27 juillet 2004 portant sur la protection des données à caractère personnel est supervisée par l'Instance Nationale de Protection des Données Personnelles (INPDP). L'Agence Nationale de la Sécurité Informatique (ANSI), créée par la loi n° 2004-5, a autorité pour auditer les systèmes d'information des administrations et des opérateurs d'importance vitale. La loi n° 2015-26 relative à la lutte contre le terrorisme et au blanchiment d'argent impose des obligations de cybersurveillance aux institutions financières. Les sociétés offshore traitant des données personnelles européennes sont soumises au RGPD via leurs contractants.",
  sectors: [
    "Services IT nearshore et centres offshore (Telnet, Vermeg, CrédiLog)",
    "Banques et établissements financiers (STB, Attijari, BNA, UIB)",
    "Industries mécaniques et chimiques (GCT Phosphates, TUNINTER)",
    "Télécommunications (Ooredoo, Orange Tunisie, Tunisie Telecom)",
    "Administration publique et e-Gov (ANSI, Présidence du gouvernement)",
    "Santé et hôpitaux universitaires (CHU La Rabta, CHU Sfax)",
  ],
  cities: [
    { name: "Tunis", urlPath: "/audit-securite-tunis", description: "Capitale, offshore IT, banques et administrations" },
    { name: "Sfax", urlPath: "/audit-securite-sfax", description: "Industries chimiques, phosphates et PME export" },
    { name: "Sousse", urlPath: "/audit-securite-sousse", description: "Tourisme, zone industrielle et centres d'appel" },
  ],
  faq: [
    {
      q: "Quel est le prix d'un pentest en Tunisie ?",
      a: "Un test d'intrusion applicatif en Tunisie est facturé entre 3 500 € et 18 000 € selon le nombre d'applications et la profondeur des tests. Les missions pour les sociétés nearshore travaillant pour des clients français bénéficient de tarifs compétitifs incluant les frais de déplacement depuis la France. Délai de livraison : 2 à 6 semaines.",
    },
    {
      q: "L'ANSI impose-t-elle des audits aux sociétés nearshore tunisiennes ?",
      a: "L'ANSI impose des audits aux administrations et aux opérateurs d'importance vitale. Les sociétés nearshore privées ne sont pas directement soumises à cette obligation, mais leurs clients européens exigent souvent des audits tiers dans le cadre de leurs contrats de sous-traitance. Le RGPD impose également des garanties techniques aux sous-traitants hors UE.",
    },
    {
      q: "Comment sécuriser un centre offshore IT à Tunis contre le cyberespionnage ?",
      a: "La sécurisation d'un centre offshore passe par un audit de segmentation réseau, le durcissement des postes de travail (CIS Benchmarks), la mise en place d'un DLP (Data Loss Prevention), des tests de phishing ciblés sur les équipes et un audit des accès VPN. CyberSecure propose un package nearshore en 4 semaines à partir de 6 500 €.",
    },
    {
      q: "CyberSecure intervient-il sur site en Tunisie ?",
      a: "Oui, nos consultants interviennent à Tunis (La Marsa, Ennahli, El Manar), Sfax et Sousse. Les missions de moins de 5 jours sont généralement réalisées à distance avec un kick-off sur site. Pour les missions longues (audit complet + remédiation), nous planifions 2 à 3 semaines en présentiel.",
    },
    {
      q: "La loi 2004-63 tunisienne est-elle équivalente au RGPD ?",
      a: "La loi 2004-63 est moins contraignante que le RGPD : les sanctions maximales sont de l'ordre de 10 000 TND (environ 3 000 €), sans équivalent aux amendes RGPD pouvant atteindre 4 % du CA mondial. Cependant, les sociétés tunisiennes traitant des données de citoyens européens restent soumises au RGPD, ce qui constitue le principal levier de conformité.",
    },
  ],
};

const AuditSecuriteTunisie = () => <CountryHubPage data={data} />;
export default AuditSecuriteTunisie;
