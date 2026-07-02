import CountryHubPage, { CountryData } from "@/components/CountryHubPage";

const data: CountryData = {
  country: "Suisse",
  countrySlug: "suisse",
  region: "Europe centrale",
  intro:
    "CyberSecure accompagne les entreprises suisses dans leurs audits de sécurité informatique, pentests et mise en conformité nLPD/LPD. De Genève à Neuchâtel, nos experts PASSI sécurisent les banques privées de gestion de fortune, les organisations internationales (ONU, CICR), les laboratoires pharmaceutiques (Roche, Novartis) et les manufactures horlogères (Rolex) contre des cybermenaces sophistiquées.",
  context:
    "La Suisse concentre parmi les actifs financiers les plus élevés au monde : UBS, Julius Baer, Pictet et les autres banques privées genevoises gèrent plus de 2 000 milliards de CHF d'avoirs offshore, ce qui en fait des cibles prioritaires pour le cyberespionnage et les tentatives de fraude BEC. Genève héberge plus de 40 organisations internationales dont l'ONU et le CICR (Comité International de la Croix-Rouge), dont le CICR a subi en 2022 une cyberattaque majeure compromettant les données de 515 000 personnes vulnérables. Le pôle pharma suisse (Roche à Bâle, Novartis à Bâle, Lonza à Viège) est visé par des campagnes de cyberespionnage industriel ciblant les données de R&D et les brevets. L'EPFL et l'ETH Zurich font régulièrement l'objet d'attaques APT visant leurs travaux de recherche en IA et en cryptographie. Le secteur horloger (Rolex, Patek Philippe, Audemars Piguet) protège des secrets industriels et des bases clients ultra-VIP.",
  regulation:
    "La nouvelle Loi sur la Protection des Données (nLPD/LPD révisée) est entrée en vigueur le 1er septembre 2023, avec le Préposé Fédéral à la Protection des Données et à la Transparence (PFPDT/FDPIC) comme autorité de contrôle. L'Office Fédéral de la Cybersécurité (OFCS, anciennement MELANI) coordonne la stratégie nationale de cybersécurité. La FINMA (Autorité fédérale de surveillance des marchés financiers) impose des exigences de résilience opérationnelle aux banques et assurances (circulaire FINMA 2023/01 sur les risques opérationnels). La nLPD impose la notification des violations de données dans les 72 heures et des amendes pouvant atteindre 250 000 CHF.",
  sectors: [
    "Banques privées et gestion de fortune (UBS, Julius Baer, Pictet, Lombard Odier)",
    "Organisations internationales (ONU, CICR, OMS, OCDE)",
    "Pharmaceutique et sciences de la vie (Roche, Novartis, Lonza, Straumann)",
    "Recherche et hautes écoles (EPFL, ETH Zurich, Universités de Genève et Lausanne)",
    "Horlogerie de luxe et joaillerie (Rolex, Patek Philippe, Audemars Piguet)",
    "Assurances et réassurance (Swiss Re, Zurich Insurance, Helvetia)",
  ],
  cities: [
    { name: "Genève", urlPath: "/audit-securite-geneve", description: "Banques privées, ONU, CICR et organisations internationales" },
    { name: "Lausanne", urlPath: "/audit-securite-lausanne", description: "EPFL, CIO, multinationales et pharma" },
    { name: "Fribourg", urlPath: "/audit-securite-fribourg", description: "Canton bilingue, administrations et industrie" },
    { name: "Neuchâtel", urlPath: "/audit-securite-neuchatel", description: "Horlogerie premium, microtechnique et recherche" },
  ],
  faq: [
    {
      q: "Quel est le coût d'un audit de sécurité pour une banque privée à Genève ?",
      a: "Un audit de sécurité complet pour une banque privée genevoise est facturé entre 30 000 CHF et 120 000 CHF selon la taille et la complexité. Le périmètre inclut : pentest des portails wealth management, audit des accès privilegiés, test de spear-phishing ciblé sur les conseillers en gestion, revue des contrôles FINMA et évaluation de la conformité nLPD. Les délais vont de 6 à 16 semaines pour un audit complet.",
    },
    {
      q: "La nLPD impose-t-elle des audits de sécurité aux entreprises suisses ?",
      a: "La nLPD (en vigueur depuis septembre 2023) n'impose pas directement des audits périodiques, mais exige la mise en place de mesures techniques et organisationnelles appropriées (privacy by design, privacy by default) et la notification sous 72 heures de toute violation. La FINMA, en revanche, impose explicitement des audits de cybersécurité annuels aux banques et assurances dans le cadre de sa circulaire 2023/01.",
    },
    {
      q: "Comment protéger les secrets industriels des manufactures horlogères suisses ?",
      a: "La protection des propriétés intellectuelles horlogères passe par : audit des accès aux CAO/PLM (CATIA, SolidWorks), chiffrement des plans techniques, DLP (Data Loss Prevention) pour les ingénieurs R&D, tests d'intrusion sur les réseaux de production et sensibilisation au spear-phishing ciblé. CyberSecure propose un package 'IP Protection' pour les industries de précision à partir de 15 000 CHF.",
    },
    {
      q: "CyberSecure travaille-t-il avec les organisations internationales à Genève ?",
      a: "Oui, CyberSecure intervient régulièrement auprès d'organisations internationales basées à Genève pour des audits de sécurité et des pentests. Nos consultants disposent des habilitations nécessaires pour travailler sur des périmètres sensibles. Après l'incident CICR de 2022 (compromission de données sur 515 000 personnes vulnérables), la demande d'audits de sécurité des ONG et organisations humanitaires a fortement augmenté.",
    },
    {
      q: "La Suisse est-elle soumise à DORA pour ses banques ?",
      a: "La Suisse n'est pas membre de l'UE et n'est donc pas directement soumise à DORA. Cependant, les filiales suisses de banques européennes (UBS, Credit Suisse/UBS repris) doivent se conformer à DORA pour leurs entités UE. La FINMA développe ses propres exigences de résilience opérationnelle (circulaire 2023/01) qui convergent vers les standards DORA/TIBER-EU. CyberSecure réalise des tests TLPT compatibles avec les deux cadres.",
    },
  ],
};

const AuditSecuriteSuisse = () => <CountryHubPage data={data} />;
export default AuditSecuriteSuisse;
