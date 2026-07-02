import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAgadir = () => (
  <CityLandingPage
    data={{
      city: "Agadir",
      citySlug: "agadir",
      region: "Maroc — Souss-Massa",
      postalCode: "80000",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Agadir pour les hôtels balnéaires (Club Med, Sofitel, Riu), le port de pêche, les coopératives agro-export et les systèmes IoT touristiques. Cabinet qualifié PASSI ANSSI, nous intervenons dans la région Souss-Massa avec une expertise en sécurité des Property Management Systems hôteliers, des chaînes logistiques agricoles et des réseaux WiFi de complexes touristiques.",
      localContext: "Agadir est la 3e destination touristique du Maroc avec 3 millions de touristes internationaux par an, concentrant des complexes hôteliers balnéaires de grande capacité (Club Med Agadir, Sofitel Royal Bay, Riu Palace, Iberostar). Le port d'Agadir est le 1er port sardinier mondial et le hub de l'agro-export marocain (tomates, agrumes, primeurs vers l'EU). Les coopératives agricoles du Souss-Massa exportent vers Rungis (Paris) et les Mercados espagnols via des chaînes logistiques réfrigérées numérisées. L'aéroport Al Massira est le 3e aéroport marocain. La région développe des projets smart agriculture (drones, capteurs IoT, plateformes traçabilité) qui créent de nouvelles surfaces d'attaque sur des infrastructures rurales peu sécurisées. L'afflux de touristes européens (cartes bancaires, données personnelles) génère d'importants flux financiers soumis à la Loi 09-08 marocaine.",
      sectors: [
        "Hôtellerie et tourisme balnéaire (Club Med, Sofitel, Riu, Iberostar)",
        "Port et pêche industrielle (sardines, poulpe, export haliceutique)",
        "Agro-export (tomates, agrumes, coopératives Souss-Massa)",
        "Aéroport et aviation (Al Massira, RAM, charter EU)",
        "Commerce et retail (Souk El Had, zones commerciales)",
        "Smart agriculture et IoT (plateformes traçabilité, irrigation connectée)",
      ],
      neighborhoods: [
        "Corniche et balnéaire (hôtels resort, beach clubs)",
        "Secteur balnéaire nord (Founti, Tikida, complexes hôteliers)",
        "Centre-ville et Talborjt (commerce, résidentiel, services)",
        "Port d'Agadir (pêche, commerce, export haliceutique)",
        "Inezgane et Aït Melloul (zone industrielle, logistique agro-export)",
        "Tiznit et Taroudannt (agriculture, agro-export rural, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit de sécurité pour un hôtel resort à Agadir (Club Med, Sofitel, Riu) ?",
          a: "Un audit de sécurité hôtelier à Agadir couvre les systèmes de gestion hôtelière (PMS : Opera, Fidelio), les paiements (PCI DSS), le WiFi balnéaire et les bornes IoT de loisirs. Tarifs : audit PMS et systèmes de réservation entre 15 000 et 40 000 MAD HT (1 400-3 700 €) ; audit de conformité PCI DSS (paiements par carte touristes EU) entre 20 000 et 50 000 MAD HT ; pentest WiFi resort (segmentation piscine, chambres, back-office) entre 8 000 et 20 000 MAD HT ; audit complet cyber resort (toutes surfaces) entre 50 000 et 120 000 MAD HT. Pour les chaînes internationales (Club Med Paris, Accor, Marriott), les audits peuvent être commandés depuis le siège européen et inclure les sites d'Agadir. CyberSecure intervient en français, arabe et anglais.",
        },
        {
          q: "Audit de la supply chain agro-export à Agadir : comment sécuriser les plateformes de traçabilité des primeurs marocains ?",
          a: "Les coopératives d'export du Souss-Massa (COMAPRIM, Azura Group, Idyl) utilisent des plateformes digitales de traçabilité pour certifier l'origine et la conformité sanitaire de leurs primeurs (tomates, poivrons) à destination de l'EU. Ces plateformes échangent des données sensibles avec les importateurs européens (Rungis, Freshways UK) et sont soumises aux exigences de traçabilité du règlement EU 178/2002. CyberSecure réalise : audit des plateformes de gestion de traçabilité (GlobalGAP, Azura Connect, ERP Agro), test de l'intégrité des données de certification (anti-falsification des lots), audit des accès des auditeurs externes (BRC, IFS), test de la sécurité des capteurs IoT (sondes température chaîne du froid). Tarif supply chain agricole : 20 000-50 000 MAD HT.",
        },
        {
          q: "Sécurité IoT à Agadir : bornes touristiques, smart agriculture, irrigation connectée — quels risques ?",
          a: "La région d'Agadir déploie des systèmes IoT dans deux secteurs principaux : le tourisme (bornes d'information WiFi dans les complexes hôteliers, bracelets connectés resort, domotique chambres) et l'agriculture (sondes d'irrigation, stations météo, drones de traitement). Ces systèmes IoT sont souvent peu sécurisés : mots de passe d'usine non changés, firmwares obsolètes, communications non chiffrées. CyberSecure réalise des audits IoT spécifiques : test de pénétration des bornes WiFi touristiques (risque d'accès aux réseaux hôteliers), audit des plateformes de gestion à distance des systèmes d'irrigation (risque de perturbation de l'irrigation et dommages agricoles), test des protocoles de communication (Zigbee, Z-Wave, LoRa) utilisés dans les smart farms du Souss-Massa. Tarif audit IoT : 10 000-30 000 MAD HT.",
        },
        {
          q: "Port de pêche d'Agadir (1er port sardinier mondial) : quels systèmes informatiques auditer ?",
          a: "Le port d'Agadir concentre une activité industrielle haliceutique massive : systèmes de gestion des débarquements (pesée électronique, traçabilité des lots), plateformes de vente aux enchères informatisées, systèmes de contrôle sanitaire (ONSSA), interfaces d'export (certificats sanitaires EU, Japon). Ces systèmes gèrent des données économiques sensibles (cours du marché, volumes de pêche). CyberSecure réalise : audit des systèmes de gestion portuaire et des ventes aux enchères, test d'intégrité des données de traçabilité haliceutique (fraude à l'origine documentée dans la pêche), audit des accès des organismes de contrôle (ONP — Office National des Pêches). Coordination avec l'ANP (Agence Nationale des Ports) pour les interventions sur site portuaire.",
        },
        {
          q: "Que faire en cas de cyberattaque à Agadir (hôtel, port, coopérative agricole) ?",
          a: "En cas d'incident à Agadir, notre CERT est disponible 24h/24 en français et arabe. Pour un hôtel : isolez les systèmes PMS des terminaux de paiement (prévention de la propagation vers les données de carte), notifiez le groupe hôtelier international (Club Med, Accor) selon les procédures internes de la chaîne, notification à la CNDP si données de clients UE compromises (Loi 09-08 et potentiellement RGPD si clientèle européenne). Pour une coopérative agro-export : isolez les plateformes de traçabilité, notifiez les importateurs EU partenaires, vérifiez l'intégrité des données de certification (les certifications falsifiées entraînent des retraits de produits EU coûteux). CyberSecure coordonne la réponse à incident et la notification à la DGSSI (maCERT). Dépôt de plainte à la DGSN cybercriminalité d'Agadir.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAgadir;
