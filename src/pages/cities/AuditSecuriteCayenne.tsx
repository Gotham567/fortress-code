import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCayenne = () => (
  <CityLandingPage
    data={{
      city: "Cayenne",
      citySlug: "cayenne",
      region: "Guyane française — Amazonie",
      postalCode: "97300",
      intro: "CyberSecure, prestataire qualifié PASSI ANSSI, accompagne les organisations de Guyane française : pentest CSG/CNES (Centre Spatial Guyanais, infrastructure critique nationale de niveau maximum NIS2), audit de sécurité des prestataires spatiaux (ArianeGroup, Arianespace), test d'intrusion CHU Guyane, audit systèmes SCADA mines d'or guyanaises. RGPD et NIS2 France intégralement applicables. La Guyane héberge une des infrastructures critiques les plus stratégiques de France.",
      localContext: "La Guyane française est un DROM-COM français situé en Amazonie, pleinement soumis au droit français et européen. Le CSG (Centre Spatial Guyanais) à Kourou est une infrastructure critique nationale de premier rang — base de lancement des fusées Ariane 6, Soyouz et Vega, opérée par le CNES (Centre National d'Études Spatiales) en partenariat avec ArianeGroup et l'ESA (Agence Spatiale Européenne). Une cyberattaque sur le CSG pourrait compromettre des lancements de satellites militaires, commerciaux ou scientifiques européens, avec des conséquences géostratégiques majeures. Les systèmes du CSG (télémétrie, télécommande, contrôle de lancement, réseaux de suivi) sont des entités essentielles NIS2 de niveau critique maximum. L'industrie minière (Iamgold Rosebel, Nordgold — mines d'or) opère des systèmes IoT/SCADA en milieu forestier amazonien. Le CHU Guyane (CHAR — Centre Hospitalier Andrée Rosemon) est soumis aux obligations NIS2 santé.",
      sectors: [
        "Spatial et défense (CSG, CNES, ArianeGroup, OHB, prestataires)",
        "Mines et extractif (Iamgold, Nordgold, artisanat minier)",
        "Santé (CHU Cayenne/CHAR, CHOG)",
        "Collectivités (CTG, communes, Préfecture)",
        "Distribution (Leclerc, Super U)",
        "BTP et construction",
      ],
      neighborhoods: [
        "Cayenne centre et Cité Ronjon",
        "Kourou (base spatiale, technopark)",
        "Saint-Laurent du Maroni (2e ville)",
        "Matoury et Rémire-Montjoly",
        "Zones minières intérieur",
        "Route des Plages et zones résidentielles",
      ],
      faq: [
        {
          q: "Pentest CSG/CNES : peut-on tester la sécurité d'une infrastructure spatiale ?",
          a: "Oui, les tests d'intrusion sur les systèmes du Centre Spatial Guyanais sont possibles et nécessaires, mais requièrent des autorisations préalables strictes. Le CSG est une infrastructure critique nationale (ICN) de niveau maximum, entité essentielle NIS2 catégorie 'défense et espace'. Les tests d'intrusion se déroulent exclusivement sur des périmètres définis et autorisés par le CNES et les autorités compétentes (SGDSN — Secrétariat Général de la Défense et de la Sécurité Nationale), avec une habilitation de sécurité des testeurs si nécessaire. CyberSecure, avec sa qualification PASSI ANSSI, est habilité à intervenir sur ce type d'infrastructure. Les périmètres typiques d'audit incluent : systèmes de communication et télémétrie, réseaux IT administratifs du CSG, applications web et SI des prestataires intervenant sur le site.",
        },
        {
          q: "Quel coût pour un pentest en Guyane ?",
          a: "Les tarifs de base en Guyane sont identiques à la France métropolitaine (mêmes références PASSI, même qualité d'intervention). Un surcoût de 15 à 25 % s'applique pour couvrir les déplacements depuis la métropole : vols Paris-Cayenne (Air France/Corsair) et hébergement à Cayenne ou Kourou. Pour optimiser les coûts, CyberSecure mutualise plusieurs missions sur le même déplacement. Exemples de tarifs tout compris : pentest application web PME 3 500 à 7 000 €, audit CHU Guyane 8 000 à 18 000 €, audit sécurité prestataire CSG 5 000 à 15 000 € selon le périmètre. Les prestataires du CSG peuvent également bénéficier de remises pour des audits groupés.",
        },
        {
          q: "Les prestataires du CSG sont-ils soumis à NIS2 ?",
          a: "Les prestataires directs du CSG (ArianeGroup, Arianespace, OHB, MT Aerospace, Avio, les sous-traitants de maintenance et services IT) peuvent être soumis à la directive NIS2 selon leur taille et leur rôle dans la chaîne d'approvisionnement spatiale. Deux critères s'appliquent : (1) les prestataires dépassant les seuils NIS2 (250 salariés ou 50 M€ CA dans les secteurs concernés), (2) les prestataires fournissant des services essentiels au fonctionnement du CSG. De plus, le CNES et ArianeGroup imposent contractuellement des exigences de sécurité à leurs sous-traitants (clauses cybersécurité, audits périodiques). CyberSecure accompagne les prestataires du CSG dans leur mise en conformité NIS2 et les exigences contractuelles spatiales.",
        },
        {
          q: "Comment auditer les systèmes IT des mines d'or guyanaises ?",
          a: "Les exploitations minières guyanaises (Iamgold Rosebel côté surinamais mais avec des opérations en Guyane, Nordgold, projets Montagne d'Or) opèrent des systèmes IoT/SCADA pour la supervision des extraction (sondes, convoyeurs, traitement du minerai), des systèmes de géolocalisation des engins, des communications satellitaires (VSAT) et des réseaux Wi-Fi en milieu forestier. Un audit de sécurité mine comprend : inventaire des actifs IoT et OT (capteurs, automates), audit des communications VSAT et radio, test de la segmentation réseau bureau/terrain, audit des accès distants des sous-traitants, évaluation des risques spécifiques au milieu amazonien (connectivité dégradée, accès physique difficile). Budget indicatif : 3 000 à 8 000 € pour un audit complet.",
        },
        {
          q: "Que faire en cas de cyberattaque sur une infrastructure du CSG ?",
          a: "En cas de cyberattaque sur une infrastructure du CSG ou d'un de ses prestataires : (1) activez immédiatement le protocole de sécurité du CNES/CSG et contactez le RSSI du CNES — la chaîne d'alerte spatiale est strictement définie, (2) alertez le SGDSN et l'ANSSI (les infrastructures critiques nationales font l'objet d'une surveillance ANSSI dédiée), (3) si un lancement est en cours ou imminent, la priorité absolue est la mise en sécurité des systèmes de contrôle de vol selon les procédures d'urgence définies, (4) contactez CyberSecure pour un appui forensique et réponse à incident — nos experts ont l'expérience des environnements sensibles et industriels, (5) aucune communication publique sans coordination avec le CNES, le gouvernement et l'ESA. La gestion d'un incident cyber sur le CSG engage la souveraineté spatiale européenne.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCayenne;
