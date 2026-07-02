import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMarrakech = () => (
  <CityLandingPage
    data={{
      city: "Marrakech",
      citySlug: "marrakech",
      region: "Maroc — Marrakech-Safi",
      postalCode: "40000",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Marrakech pour les hôtels de luxe (Mamounia, Four Seasons, Royal Mansour), les plateformes de réservation touristique en ligne et les systèmes de gestion hôtelière (PMS). Cabinet qualifié PASSI ANSSI, nous intervenons dans la capitale touristique du Maroc avec une expertise en sécurité des Property Management Systems, des données bancaires hôtelières et des réseaux WiFi de luxe soumis à la Loi 09-08 marocaine.",
      localContext: "Marrakech est la première destination touristique africaine avec plus de 4 millions de touristes internationaux par an et 15 millions de nuitées générant un chiffre d'affaires de plusieurs milliards de dirhams. La Mamounia, le Four Seasons, le Royal Mansour Marrakech (propriété royale) et des dizaines de Relais & Châteaux gèrent des données ultra-sensibles de clients HNWI internationaux. Les plateformes de réservation en ligne (sites hôteliers, Booking.com, Airbnb pour les riads) traitent des milliers de cartes bancaires internationales soumises à la PCI DSS. L'aéroport Marrakech-Menara (2e aéroport marocain) gère les flux de passagers internationaux avec des systèmes IT critiques. Le festival populaire des sites de réservation crée des risques de phishing touristique et de fraude aux billets. La Ville de Marrakech développe des services smart city avec des capteurs IoT dans la médina historique.",
      sectors: [
        "Hôtellerie de luxe et palais (Mamounia, Four Seasons, Royal Mansour)",
        "Riads et hôtels boutique (réservations en ligne, OTA partenaires)",
        "Aéroport et aviation (Marrakech-Menara, RAM, compagnies charters)",
        "E-tourisme et plateformes (agences réceptives, tour-opérateurs)",
        "Commerce et artisanat (e-commerce coopératives, marketplaces)",
        "Événementiel et congrès (Palais des Congrès, salons internationaux)",
      ],
      neighborhoods: [
        "Médina et Djemaa el-Fna (riads, tourisme, artisanat)",
        "Guéliz (centre moderne, boutiques, restaurants, hôtels)",
        "Hivernage (hôtels 5 étoiles, discothèques, résidentiel chic)",
        "Palmeraie (villas luxe, golfs, stations touristiques haut de gamme)",
        "Zone industrielle (Sidi Ghanem, artisanat moderne, design)",
        "Route de l'Aéroport (hôtels milieu de gamme, commerces)",
      ],
      faq: [
        {
          q: "Combien coûte un audit de sécurité PMS (Property Management System) pour un hôtel à Marrakech ?",
          a: "Un audit de sécurité d'un hôtel de luxe à Marrakech couvre principalement le Property Management System (PMS : Opera, Fidelio, Protel), les terminaux de paiement (PCI DSS), le WiFi invités et les interfaces OTA (Booking.com, Expedia). Tarifs indicatifs : audit PMS et systèmes hôteliers (test d'intrusion, revue configuration) entre 20 000 et 50 000 MAD HT (1 850-4 600 €) ; audit de conformité PCI DSS pour les paiements par carte entre 25 000 et 60 000 MAD HT ; pentest WiFi hôtel (segmentation réseau invités/personnel/back-office) entre 10 000 et 25 000 MAD HT ; audit complet cyber pour un palace (Mamounia, Four Seasons) entre 80 000 et 200 000 MAD HT. Les tarifs peuvent être exprimés en EUR pour les chaînes hôtelières internationales facturant depuis la France ou l'Europe.",
        },
        {
          q: "Comment auditer la sécurité des plateformes de réservation e-booking et des OTA partenaires à Marrakech ?",
          a: "Les hôtels marrakchis sont connectés à des dizaines d'OTA (Online Travel Agencies) via des interfaces de channel management (Siteminder, RateTiger, D-EDGE). Chaque connexion OTA est un vecteur potentiel d'attaque : credential stuffing sur les extranets Booking.com/Expedia, manipulation des tarifs et disponibilités (revenue attack), injection dans les flux XML/JSON de synchronisation. CyberSecure réalise : audit des accès extranets OTA (mots de passe uniques, MFA), test de la sécurité du channel manager, revue des API d'interfaces PMS-OTA, test de phishing ciblé sur les équipes réservations. Nous testons également la sécurité des sites de réservation en direct (WordPress, Booking Button) pour détecter les injections SQL et XSS.",
        },
        {
          q: "Sécurité WiFi hôtel de luxe à Marrakech : comment protéger les réseaux invités des menaces externes ?",
          a: "Le WiFi d'un hôtel de luxe à Marrakech dessert simultanément des clients HNWI internationaux (CEO, ministres, célébrités), du personnel et des systèmes back-office (PMS, caméras, domotique). Les risques : attaques Man-in-the-Middle sur le réseau invités, accès non autorisé depuis le réseau invités vers les systèmes hôteliers (pivotage réseau), écoute des communications non chiffrées. CyberSecure réalise : audit de la segmentation VLAN (invités / personnel / systèmes hôteliers / IoT), test d'intrusion depuis le réseau WiFi invités vers le réseau interne, audit des contrôleurs WiFi (Cisco, Ruckus, Aruba), test de la captive portal authentication, recommandations de VPN pour les clients sensibles. Tarif audit WiFi hôtel : 10 000-25 000 MAD HT.",
        },
        {
          q: "Aéroport de Marrakech-Menara : comment auditer les systèmes informatiques d'un aéroport touristique international ?",
          a: "L'aéroport Marrakech-Menara (géré par ONDA — Office National Des Aéroports) est une infrastructure critique marocaine accueillant 6+ millions de passagers par an. Un audit aéroportuaire comprend : test des systèmes de billetterie et check-in (DCS — Departure Control System), audit des accès aux portiques de contrôle de sûreté, test de la segmentation entre réseaux passagers (WiFi), réseaux opérationnels et réseaux commerciaux, audit des systèmes CCTV aéroportuaires, test des interfaces compagnies aériennes (RAM, Ryanair, EasyJet). Toute prestation aéroportuaire nécessite une autorisation ONDA et DGAC marocaine préalable. CyberSecure coordonne ces autorisations réglementaires et adapte les tests aux contraintes opérationnelles 24h/24.",
        },
        {
          q: "Que faire en cas de fraude à la réservation ou de cyberattaque contre un hôtel à Marrakech ?",
          a: "En cas d'incident cyber contre un hôtel marrakchi, notre CERT est disponible 24h/24 en français et arabe. Les incidents hôteliers les plus fréquents : compromission de système de réservation (fraude aux cartes, vol de données clients), ransomware sur le PMS (blocage des check-in, clés digitales inaccessibles), phishing ciblant l'équipe réservations (wire fraud). Obligations marocaines : notification à la CNDP (Commission Nationale de contrôle de la Protection des Données, Loi 09-08) si données personnelles de clients compromises, notification à la DGSSI si infrastructure critique affectée. Pour un palace international (Four Seasons, Marriott) : notification simultanée au siège international selon les procédures de la chaîne. CyberSecure coordonne l'investigation forensique, le containment et la communication aux clients affectés. Dépôt de plainte à la DGSN (Direction Générale de la Sûreté Nationale) — brigade cybercriminalité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMarrakech;
