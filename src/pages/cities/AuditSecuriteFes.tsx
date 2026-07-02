import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteFes = () => (
  <CityLandingPage
    data={{
      city: "Fès",
      citySlug: "fes",
      region: "Maroc — Fès-Meknès",
      postalCode: "30000",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Fès pour le CHU Hassan II, l'Université Sidi Mohammed Ben Abdellah (USMBA), les plateformes e-commerce d'artisanat et les hôtels touristiques de la médina. Cabinet qualifié PASSI ANSSI, nous intervenons dans la région Fès-Meknès avec une expertise en sécurité des données de santé hospitalières, des systèmes universitaires et des plateformes de vente en ligne d'artisanat marocain.",
      localContext: "Fès est la capitale spirituelle et culturelle du Maroc, Patrimoine Mondial UNESCO, accueillant 1,5 million d'habitants et une économie mixte artisanale/industrielle/universitaire. Le CHU Hassan II est le plus grand hôpital du Maroc hors Casablanca, gérant les données de santé de patients de toute la région Fès-Meknès et disposant de systèmes d'information médicale (HIS) complexes. L'Université USMBA compte 40 000 étudiants et développe des recherches en informatique, pharmacie et médecine. L'artisanat fassi (maroquinerie, zellige, cuivre, bois) se digitalise avec des plateformes e-commerce (Artisanat Maroc, coopératives en ligne) exportant vers l'Europe et les États-Unis. Le tourisme culturel génère des flux de données bancaires touristiques. La zone industrielle Sidi Brahim héberge des PME textiles et agroalimentaires.",
      sectors: [
        "Santé et CHU (Hassan II, cliniques privées, pharmacies)",
        "Enseignement supérieur (USMBA, Agrotech, Polytechnique Fès)",
        "Artisanat et e-commerce (coopératives, maisons artisanales en ligne)",
        "Tourisme culturel (hôtels médina, riads, agences réceptives)",
        "Industrie et agroalimentaire (zone Sidi Brahim, laiteries, conserverie)",
        "Administrations régionales (préfecture, wilaya, collectivités)",
      ],
      neighborhoods: [
        "Médina de Fès (Fès el-Bali, Fès el-Jdid, Kairaouine, artisans)",
        "Ville Nouvelle (centre commercial, administrations, hôtels chaînes)",
        "USMBA Campus (université, cités étudiantes, technopole)",
        "Aïn Chkef et Route Imouzzer (résidentiel, hôtels haut de gamme)",
        "Zone industrielle Sidi Brahim (agroalimentaire, textile, PME)",
        "Meknès et El Hajeb (pôle industriel régional, agriculture)",
      ],
      faq: [
        {
          q: "Combien coûte un audit de sécurité CHU Hassan II à Fès pour protéger les données de santé des patients ?",
          a: "Le CHU Hassan II est le plus grand hôpital du Maroc hors Casablanca et gère des données de santé très sensibles soumises à la Loi 09-08 marocaine (CNDP). Un audit de sécurité CHU Hassan II comprend : pentest du système d'information hospitalier (HIS : Hosix, MedMark ou autres), audit des équipements médicaux connectés (scanners, IRM, monitoring), test de la segmentation réseau (médical/administratif/WiFi visiteurs), audit des droits d'accès des médecins, infirmiers et administratifs (contrôle d'accès basé sur les rôles), test de phishing sur le personnel soignant. Tarifs : audit partiel (application et réseau) entre 25 000 et 60 000 MAD HT (2 300-5 600 €) ; audit complet CHU entre 60 000 et 150 000 MAD HT.",
        },
        {
          q: "Pentest pour une plateforme e-commerce d'artisanat fassi : comment sécuriser la vente en ligne vers l'Europe ?",
          a: "Les plateformes e-commerce d'artisanat de Fès (zellige, maroquinerie, cuivre, broderie) vendent à des clients européens et américains dont les données bancaires (cartes Visa/Mastercard) sont soumises à la PCI DSS et les données personnelles au RGPD (si clientèle européenne) et à la Loi 09-08 marocaine. Un audit e-commerce artisanat comprend : test d'intrusion du site web (SQL injection, XSS, CSRF sur les formulaires de commande), audit de la sécurité du paiement en ligne (CMI, PayPal, Stripe intégré), test de la configuration SSL/TLS, audit des droits d'accès au back-office boutique (admin WordPress, Prestashop). CyberSecure fournit un rapport compatible avec les exigences des plateformes de marketplace EU (Amazon, Etsy) qui peuvent exiger des preuves de sécurité. Tarif e-commerce artisanat : 8 000-20 000 MAD HT.",
        },
        {
          q: "Audit de sécurité USMBA (Université Sidi Mohammed Ben Abdellah) à Fès : données étudiants et recherche ?",
          a: "L'USMBA héberge 40 000 étudiants et des laboratoires de recherche en informatique, pharmacie et médecine. Un audit universitaire USMBA comprend : test d'intrusion du portail étudiant (inscriptions, résultats, scolarité), audit des droits d'accès des enseignants-chercheurs aux bases de données de recherche, test de phishing ciblé sur les étudiants et administratifs (vecteur fréquent d'intrusion universitaire), audit du réseau WiFi campus (segmentation étudiants/chercheurs/administratif), revue de la politique de traitement des données personnelles (dossiers étudiants, données de recherche soumises à CNDP). CyberSecure peut accompagner l'USMBA dans la création d'un programme de sensibilisation cybersécurité pour les étudiants en informatique. Tarif audit universitaire : 20 000-50 000 MAD HT.",
        },
        {
          q: "Sécurité des hôtels et riads touristiques dans la médina de Fès : comment protéger les données des voyageurs ?",
          a: "Les hôtels de la médina de Fès (Palais Faraj, Riad Fès, Dar Roumana...) accueillent principalement une clientèle internationale (EU, États-Unis, Golfe) dont les données personnelles et bancaires sont soumises au RGPD si les réservations proviennent d'OTA européennes (Booking.com, Expedia), en plus de la Loi 09-08 marocaine. Les riads utilisent des PMS cloud (Cloudbeds, Little Hotelier) et des systèmes WiFi. CyberSecure réalise : audit de la sécurité du PMS cloud (droits d'accès, authentification), test de sécurité du WiFi invités (isolation des chambres entre elles, accès au réseau interne), audit de la conformité PCI DSS pour les paiements par carte sur place, test de phishing sur la réception (fraude BEC aux réservations). Tarif riad/hôtel boutique : 10 000-25 000 MAD HT.",
        },
        {
          q: "Que faire en cas de cyberattaque à Fès (incident CHU, fraude e-commerce, violation données USMBA) ?",
          a: "En cas d'incident à Fès, notre CERT est disponible 24h/24 en français et arabe. Pour le CHU Hassan II : priorité absolue à la continuité des soins critiques, isolement des systèmes administratifs sans impacter les équipements médicaux vitaux, notification à la DGSSI et à la CNDP. Pour une plateforme e-commerce d'artisanat : notification à la CNDP si données personnelles de clients EU compromises, notification aux clients affectés selon les obligations RGPD, vérification de l'intégrité des transactions (remboursement des fraudes aux cartes via les banques marocaines CMI). CyberSecure coordonne l'investigation forensique et la reconstruction des systèmes. Dépôt de plainte à la DGSN (Direction Générale de la Sûreté Nationale) — subdivision cybercriminalité de Fès.",
        },
      ],
    }}
  />
);

export default AuditSecuriteFes;
