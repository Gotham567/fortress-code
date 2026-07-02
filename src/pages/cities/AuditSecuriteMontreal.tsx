import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMontreal = () => (
  <CityLandingPage
    data={{
      city: "Montréal",
      citySlug: "montreal",
      region: "Canada — Québec",
      postalCode: "H3A",
      intro: "CyberSecure réalise des pentests, audits de sécurité IA/ML et Red Team exercises à Montréal pour le MILA, Ubisoft, EA, Bombardier, CAE, Desjardins et la Banque Nationale. Cabinet qualifié PASSI ANSSI, nous intervenons au Québec avec une expertise en protection de la propriété intellectuelle des studios de jeu vidéo, en sécurité des modèles d'IA et en conformité Loi 25, avec des tarifs en dollars canadiens.",
      localContext: "Montréal est un centre mondial de l'intelligence artificielle avec le MILA (Yoshua Bengio, plus grand laboratoire académique d'IA au monde), hébergeant des modèles d'entraînement sur des données sensibles convoitées par des services de renseignement étrangers. L'industrie du jeu vidéo est dominante : Ubisoft Montréal (Assassin's Creed, Rainbow Six), EA Motive (Star Wars), Warner Bros. Games Montréal représentent des milliards en propriété intellectuelle — le vol de jeux en développement est un phénomène documenté. Bombardier et CAE sont des leaders mondiaux de l'aéronautique et de la simulation de vol, avec des données de certification EASA/Transport Canada ultra-sensibles. Desjardins (7 millions de membres) a subi en 2019 la plus grande fuite de données canadienne — 4,2 millions de membres compromis par un employé malveillant — démontrant la criticité des menaces internes. La Loi 25 du Québec (LAI réformée) impose depuis 2023 des obligations strictes de protection des données personnelles et de notification des incidents.",
      sectors: [
        "Intelligence artificielle et recherche (MILA, IVADO, Element AI/ServiceNow)",
        "Jeu vidéo et divertissement (Ubisoft, EA, WB Games, Eidos)",
        "Aéronautique et défense (Bombardier, CAE, Pratt & Whitney)",
        "Finance et coopératives (Desjardins, Banque Nationale, CDPQ)",
        "Pharma et biotech (Pfizer Montréal, Merck, Shire/Takeda)",
        "Tech et startups (District Central, Mile-Ex, Quartier de l'Innovation)",
      ],
      neighborhoods: [
        "Mile-Ex et Rosemont (MILA, startups IA, tech)",
        "Vieux-Port et Centre-Ville (finance, sièges sociaux)",
        "Plateau Mont-Royal et Mile-End (créatif, jeux vidéo)",
        "Dorval et Lachine (Bombardier, aéroport, aéronautique)",
        "Brossard et Longueuil (CAE, PME, Rive-Sud)",
        "Laval et Montréal-Nord (pharma, biotech, distribution)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Montréal pour une startup IA ou un studio de jeu vidéo ?",
          a: "Les tarifs montréalais en dollars canadiens : un pentest d'application web ou API pour une PME ou startup IA coûte entre 5 000 et 12 000 $ CAD HT ; un audit de sécurité complet (infrastructure, cloud AWS/GCP, Active Directory) entre 10 000 et 25 000 $ CAD HT ; un Red Team exercise simulant un groupe de ransomware ciblant un studio de jeux entre 25 000 et 60 000 $ CAD HT ; un audit spécialisé sécurité des modèles IA (protection des données d'entraînement, model stealing) entre 8 000 et 20 000 $ CAD HT. Les rapports sont en français québécois et/ou en anglais selon les besoins. CyberSecure est qualifié PASSI ANSSI — qualification reconnue par les donneurs d'ordre européens et américains des entreprises québécoises.",
        },
        {
          q: "Comment auditer les modèles IA du MILA pour prévenir l'exfiltration de données d'entraînement ?",
          a: "Les modèles d'IA du MILA et des startups IA montréalaises sont entraînés sur des datasets propriétaires ou sous licence stricte — leur vol ou reproduction constitue un dommage intellectuel et financier majeur. Les attaques documentées sur les modèles IA : model extraction (reconstruction d'un modèle propriétaire par requêtes API), data poisoning (empoisonnement des datasets d'entraînement via des contributions malveillantes), membership inference (déterminer si des données personnelles sont dans le dataset). CyberSecure réalise : audit des pipelines d'entraînement (protection des datasets, contrôle d'accès aux GPUs), test d'intrusion des plateformes de déploiement (API de serving, MLflow), test de model extraction contre les APIs publiques, audit de la différential privacy des modèles sur données sensibles. Rapport en français ou anglais.",
        },
        {
          q: "Après la brèche Desjardins (2019), comment éviter les mêmes erreurs de sécurité interne ?",
          a: "La brèche Desjardins a exposé 4,2 millions de membres via un employé ayant accès excessif aux données. Les enseignements critiques : principe du moindre privilège (un employé ne devrait accéder qu'aux données nécessaires à sa fonction), surveillance comportementale (UEBA — User and Entity Behavior Analytics détectant les téléchargements anormaux), Data Loss Prevention (DLP bloquant les transferts non autorisés vers des clés USB ou services cloud personnels), audit des accès aux bases de données membres (qui accède à quoi, quand, depuis où). CyberSecure réalise des audits de sécurité insider threat spécifiques : cartographie des données surexposées, test de la détection DLP, simulation d'exfiltration interne. Pour Desjardins ou une institution similaire : 15 000-40 000 $ CAD HT pour un audit insider threat complet.",
        },
        {
          q: "La qualification PASSI ANSSI est-elle reconnue au Québec pour les entreprises soumises à la Loi 25 ?",
          a: "La Loi 25 (Loi modernisant des dispositions législatives en matière de protection des renseignements personnels) du Québec n'impose pas de qualification spécifique pour les auditeurs de sécurité, mais exige une évaluation des facteurs relatifs à la vie privée (EFVP) par des personnes compétentes. La qualification PASSI ANSSI constitue la référence de qualification la plus rigoureuse en Europe francophone et est reconnue comme gage de qualité par les DPO (délégués à la protection des données) et les RSSI des grandes entreprises québécoises. CyberSecure accompagne la mise en conformité Loi 25 : EFVP, politiques de gouvernance des données, notification de la Commission d'accès à l'information (CAI). Pour les entreprises québécoises ayant des activités en France ou en Europe, nos rapports PASSI satisfont simultanément le RGPD et la Loi 25.",
        },
        {
          q: "Que faire en cas de cyberattaque à Montréal (ransomware studio de jeux, fuite de données IA) ?",
          a: "En cas d'incident à Montréal, notre CERT est disponible 24h/24 en français. Obligations Loi 25 : notification à la Commission d'accès à l'information (CAI) si l'incident présente un risque de préjudice sérieux, dans les délais les plus courts possible (idéalement 72h). Pour un studio de jeux : isolez les serveurs build et les repositories de code source (Perforce, git) avant que l'attaquant n'accède aux builds non publiés. CyberSecure coordonne : investigation forensique, notification CAI, liaison avec le CCIRC (Centre canadien pour la cybersécurité), dépôt de plainte à la GRC (Gendarmerie Royale du Canada) et au SPVM (Service de Police de la Ville de Montréal). Pour une fuite de données personnelles : lettres aux individus affectés selon les exigences CAI. Intervention sur site à Montréal sous 4 heures.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMontreal;
