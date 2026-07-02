import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteFortDeFrance = () => (
  <CityLandingPage
    data={{
      city: "Fort-de-France",
      citySlug: "fort-de-france",
      region: "Martinique — Caraïbes",
      postalCode: "97200",
      intro: "CyberSecure, prestataire qualifié PASSI ANSSI, intervient en Martinique avec les mêmes standards qu'en métropole : pentest CHU Martinique (NIS2 santé — déjà victime d'une cyberattaque en 2022), audit des distilleries de rhum AOP (IoT/OT process de vieillissement), test d'intrusion GBH grande distribution, audit port Fort-de-France (hub croisières Antilles). RGPD et NIS2 France intégralement applicables.",
      localContext: "La Martinique est un département et région d'outre-mer (DROM) français, pleinement soumis au droit français et européen. Le CHU Martinique a subi une cyberattaque majeure en décembre 2022 — un incident ransomware qui a paralysé les systèmes informatiques hospitaliers pendant plusieurs semaines et constitue désormais une référence nationale sur la vulnérabilité des hôpitaux ultramarins. Les distilleries de rhum AOP Martinique (Clément, Trois Rivières, Saint-James, Depaz, Habitation Saint-Étienne) utilisent des IoT et systèmes de supervision pour le contrôle du processus de vieillissement en fûts — une cible émergente pour la cybercriminalité industrielle. GBH (groupe Bernard Hayot) est le premier distributeur des Antilles. Le port de Fort-de-France est un hub majeur des croisières caribéennes, avec des systèmes de gestion des escales et des passagers. La CTM (Collectivité Territoriale de Martinique) administre l'île.",
      sectors: [
        "Santé (CHU Martinique, Clinique Antilles-Guyane)",
        "Rhum et distilleries (Clément, Trois Rivières, Saint-James, Depaz)",
        "Distribution (GBH, Carrefour, Match, Leader Price)",
        "Port et tourisme (port, croisières, hôtels)",
        "Collectivités (CTM, communes)",
        "Finance (Crédit Agricole Martinique, BRED)",
      ],
      neighborhoods: [
        "Fort-de-France centre et La Savane",
        "Le Lamentin (zone commerciale et industrielle)",
        "Schoelcher (université, résidentiel)",
        "Le Robert et Le François (Atlantique)",
        "Sainte-Anne et Le Marin (tourisme)",
        "Saint-Pierre (Nord historique)",
      ],
      faq: [
        {
          q: "Après la cyberattaque du CHU Martinique en 2022, comment éviter qu'elle se reproduise ?",
          a: "La cyberattaque ransomware du CHU Martinique en décembre 2022 a paralysé les systèmes informatiques (DPI, réseau, applications métier) pendant plusieurs semaines, nécessitant un retour au fonctionnement papier et affectant la prise en charge des patients. Pour éviter qu'un tel incident se reproduise, nos recommandations : (1) audit NIS2 complet du CHU (entité essentielle santé) incluant la cartographie des actifs, le test d'intrusion réseau interne, l'audit Active Directory et la revue des sauvegardes, (2) mise en place d'un plan de continuité d'activité (PCA) incluant des procédures dégradées testées régulièrement, (3) segmentation réseau renforcée entre les systèmes cliniques, administratifs et les accès internet, (4) formation des personnels médicaux et administratifs à la détection des tentatives de phishing, (5) déploiement d'un EDR/XDR et d'une supervision SOC. CyberSecure accompagne le CHU Martinique dans sa démarche NIS2.",
        },
        {
          q: "Pentest distilleries de rhum à Fort-de-France : comment tester les IoT de production ?",
          a: "Les distilleries de rhum AOP Martinique (Clément, Trois Rivières, Saint-James, Depaz) utilisent des capteurs IoT et des systèmes de supervision (SCADA) pour contrôler la fermentation, la distillation et le vieillissement en fûts. Un audit de sécurité IoT/OT distillerie comprend : (1) inventaire des capteurs IoT connectés (thermomètres, hygromètres, débitmètres) et de leurs protocoles de communication (Modbus, MQTT, LoRaWAN), (2) test de la segmentation réseau entre le réseau de supervision et le réseau bureautique, (3) audit des interfaces web des systèmes de supervision (accès non autorisés, mises à jour firmware), (4) test des accès distants des prestataires de maintenance, (5) évaluation du risque de manipulation des paramètres de production. Budget indicatif : 2 000 à 5 000 € pour un audit IoT/OT distillerie.",
        },
        {
          q: "Tarif pentest Martinique : pareil qu'en France métropolitaine ?",
          a: "Les tarifs de base d'un pentest en Martinique sont identiques à ceux de la métropole, car la Martinique est un DROM français soumis aux mêmes référentiels PASSI/ANSSI. La seule différence est le coût des déplacements : un déplacement depuis la métropole vers Fort-de-France (vols Air Caraïbes ou Air France) et les frais d'hébergement s'ajoutent aux honoraires. Pour optimiser les coûts, CyberSecure mutualise les jours de déplacement sur plusieurs missions simultanées en Martinique et aux Antilles. Tarifs indicatifs : pentest web PME 3 000 à 6 000 €, audit CHU 8 000 à 20 000 €. Une partie significative des tests peut être effectuée à distance.",
        },
        {
          q: "Audit GBH Grande Distribution aux Antilles ?",
          a: "Le groupe Bernard Hayot (GBH) est le premier distributeur de Martinique, Guadeloupe et Guyane, avec des enseignes Carrefour, Match et Leader Price. Ses systèmes comprennent : ERP de gestion des stocks et d'approvisionnement, plateformes e-commerce, terminaux de caisse connectés (POS), systèmes logistiques inter-îles et de gestion des fournisseurs. Un audit de sécurité GBH comprend : pentest des plateformes web et e-commerce (OWASP Top 10), audit de conformité PCI-DSS pour les paiements en caisse, test de la segmentation réseau entre les magasins et le siège, audit des accès fournisseurs et de la chaîne d'approvisionnement numérique. Un audit multi-sites (Martinique + Guadeloupe + Guyane) peut être organisé pour optimiser le déplacement.",
        },
        {
          q: "Que faire en cas de cyberattaque en Martinique ?",
          a: "En cas de cyberattaque en Martinique : (1) activez votre PCA et isolez les systèmes compromis — ne les éteignez pas brutalement (préservation des preuves volatiles en mémoire RAM), (2) contactez le CERT de l'ANSSI (cert.ssi.gouv.fr) si vous êtes une entité NIS2 — obligation de notification dans les 24h, (3) déposez une plainte auprès de la gendarmerie locale ou du commissariat (coordination avec le C3N/STRJD pour les enquêtes cyber), (4) contactez CyberSecure CERT pour une réponse à incident immédiate à distance et déploiement d'une équipe sur site à Fort-de-France sous 24-48h, (5) ne payez pas de rançon sans consultation d'experts. Le groupe ANSSI Réponse à Incidents peut être mobilisé pour les incidents majeurs.",
        },
      ],
    }}
  />
);

export default AuditSecuriteFortDeFrance;
