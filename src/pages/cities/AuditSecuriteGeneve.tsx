import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteGeneve = () => (
  <CityLandingPage
    data={{
      city: "Genève",
      citySlug: "geneve",
      region: "Suisse — Canton de Genève",
      postalCode: "1200",
      intro: "CyberSecure réalise des pentests ultra-discrets, audits de sécurité et Red Team exercises à Genève pour les banques privées (Pictet, Lombard Odier, UBS Genève), les organisations internationales (ONU, OMS, CERN, CICR), les maisons d'horlogerie de luxe (Rolex, Patek Philippe) et les gestionnaires de fortune exposés à l'espionnage industriel et aux cyberattaques de haut niveau. Cabinet qualifié PASSI ANSSI, nous intervenons en Suisse romande avec des rapports conformes aux exigences FINMA et à la LPD/nFADP suisse.",
      localContext: "Genève concentre une densité exceptionnelle d'organisations à valeur stratégique très élevée : plus de 200 organisations internationales (UNHCR, OMS/WHO, CICR, OMC/WTO, OMPI, OIT) classées parmi les cibles privilégiées du cyberespionnage étatique mondial. Le CERN héberge l'accélérateur de particules LHC et des données de recherche fondamentale convoitées. La Geneva Finance City regroupe UBS, Pictet & Cie, Lombard Odier, Mirabaud et d'autres banques privées gérant collectivement des centaines de milliards de francs suisses pour des HNWI (High Net Worth Individuals) qui sont des cibles d'extorsion, de fraude et de social engineering de très haut niveau. Rolex et Patek Philippe protègent des R&D horlogères valant des milliards en propriété intellectuelle. L'aéroport international de Genève-Cointrin est une porte d'entrée pour les déplacements d'affaires sensibles. La FINMA surveille les établissements financiers genevois avec des exigences croissantes en matière de cyber-résilience.",
      sectors: [
        "Banques privées et gestion de fortune (Pictet, Lombard Odier, Mirabaud)",
        "Organisations internationales et ONG (ONU, OMS, CICR, OMC)",
        "Recherche scientifique (CERN, IHEID, Université de Genève)",
        "Horlogerie et luxe (Rolex, Patek Philippe, Chopard)",
        "Fintech et gestion d'actifs alternatifs (hedge funds, family offices)",
        "Cabinets d'avocats et études notariales internationaux",
      ],
      neighborhoods: [
        "Quartier des Nations (Palais des Nations, OMS, CICR, Pregny)",
        "Rive droite bancaire (Cornavin, Pâquis, banques privées)",
        "Rive gauche et luxe (Rues Basses, Eaux-Vives, Champel)",
        "CERN et Meyrin (accélérateur, zone scientifique)",
        "Aéroport et Cointrin (zone affaires, Grand-Saconnex)",
        "Carouge et Lancy (tech, startups, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Genève pour une banque privée ou un gestionnaire de fortune ?",
          a: "Les tarifs genevois reflètent le niveau d'exigence et la criticité des actifs protégés : un pentest d'application web (e-banking, portail client HNWI) coûte entre 6 000 et 15 000 CHF HT ; un audit de sécurité complet (infrastructure, AD, cloud, application) entre 12 000 et 30 000 CHF HT ; un Red Team exercise simulant une attaque APT ciblant la trésorerie ou les données clients entre 30 000 et 70 000 CHF HT. Les rapports sont en français et/ou anglais, conformes aux circulaires FINMA 2023/1 (risques opérationnels) et compatibles avec les exigences LPD/nFADP. CyberSecure signe des NDA bilatéraux renforcés et intervient avec la discrétion absolue requise par la place financière genevoise.",
        },
        {
          q: "Votre qualification PASSI ANSSI est-elle reconnue par la FINMA suisse ?",
          a: "La FINMA (Autorité fédérale de surveillance des marchés financiers) n'impose pas de qualification PASSI spécifiquement, mais exige des audits conduits par des spécialistes indépendants et qualifiés selon les meilleures pratiques internationales (TIBER-EU, ISO 27001, NIST). La qualification PASSI de l'ANSSI française est la référence de qualification indépendante la plus rigoureuse d'Europe francophone et constitue une garantie forte de qualité auprès des comités d'audit des banques genevoises. Plusieurs banques privées de la Place nous ont choisis précisément pour cette qualification. Nos rapports respectent le cadre de la circulaire FINMA 2023/1 et peuvent être présentés directement aux organes de contrôle.",
        },
        {
          q: "Comment tester la sécurité d'une organisation internationale ONU ou CERN à Genève ?",
          a: "Les organisations internationales genevoises bénéficient d'une immunité diplomatique partielle compliquant les aspects légaux des pentests — une autorisation formelle de la direction IT et juridique est impérative. CyberSecure a l'expérience de ces contextes : cadrage juridique préalable avec les services légaux de l'organisation, reconnaissance OSINT sur les portails publics et systèmes exposés, test d'intrusion externe sur les API et webservices publiés, social engineering ciblé sur les fonctionnaires (les campagnes de phishing sophistiquées visant l'ONU sont documentées depuis 2019), audit de la segmentation entre réseaux confidentiels et réseaux grand public (IoT, conférences). Nos auditeurs sont soumis à des vérifications d'antécédents approfondies.",
        },
        {
          q: "Pentest sur environnement cloud AWS/Azure à Genève : méthodologie et conformité LPD suisse ?",
          a: "La LPD révisée (nFADP, entrée en vigueur le 1er septembre 2023) impose des obligations strictes de sécurité des données personnelles stockées dans le cloud, y compris pour les données hébergées hors de Suisse. Un audit cloud genevois comprend : revue des configurations AWS/Azure (IAM policies, S3/Blob exposure, encryption at rest/in transit), test d'intrusion des API cloud exposées, audit des accès des administrateurs au panneau de contrôle, review des logs CloudTrail/Monitor pour détecter des comportements anormaux, évaluation de la conformité nFADP (analyse d'impact AIPD, clauses contractuelles avec l'hébergeur). CyberSecure délivre un rapport de conformité cloud exploitable directement par le PFPDT (Préposé Fédéral à la Protection des Données).",
        },
        {
          q: "Que faire en cas de cyberattaque à Genève (banque privée, organisation internationale) ?",
          a: "En cas d'incident à Genève, contactez notre CERT immédiatement (disponible 24h/24 en français et anglais). Pour une banque privée : obligation de notification à la FINMA dans les 24h (loi sur les banques, art. 29), notification au PFPDT si données personnelles compromises, notification aux clients HNWI affectés. CyberSecure coordonne : investigation forensique discrète (préservation des actifs de preuve, chain of custody), containment de la menace sans impact sur les opérations de trading, communication de crise confidentielle avec les parties prenantes, liaison avec le NCSC (Centre National de Cybersécurité suisse). Pour les organisations internationales : nous respectons les protocoles de notification interne spécifiques à chaque organisation (ICT Security Officers). Intervention sur site à Genève sous 4 heures.",
        },
      ],
    }}
  />
);

export default AuditSecuriteGeneve;
