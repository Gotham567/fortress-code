import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteChambery = () => (
  <CityLandingPage
    data={{
      city: "Chambéry",
      citySlug: "chambery",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "73000",
      intro: "CyberSecure accompagne les PME et ETI de Chambéry avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs industriel, touristique alpin et du numérique en Savoie. Notre cabinet qualifié PASSI ANSSI intervient sur site à Chambéry pour des missions d'audit réseau, d'audit Active Directory et de réponse à incident CERT dans la capitale de la Savoie.",
      localContext: "Chambéry est la capitale de la Savoie et un carrefour entre Lyon, Grenoble, Turin et Genève, positionnée sur un axe économique franco-italo-suisse de premier plan. Savoie Technolac, le technopôle d'Aix-les-Bains au bord du lac du Bourget, accueille des entreprises innovantes en chimie du solaire, énergie et numérique qui sont des cibles de choix pour l'espionnage industriel. Le tourisme alpin (Tarentaise, Maurienne, Beaufortain) génère une économie de stations de ski et d'hôtellerie de montagne gérant des données personnelles et des systèmes de réservation en ligne. L'industrie chimique savoyarde (Albis Plastic, Vencorex) et les PME de montagne constituent un tissu économique nécessitant une cybersécurité adaptée. Le CH de Chambéry et les établissements de santé de Savoie sont exposés aux cybermenaces.",
      sectors: [
        "Numérique et énergie (Savoie Technolac, startups)",
        "Tourisme alpin et hôtellerie de montagne",
        "Chimie et matériaux (industrie savoyarde)",
        "Santé (CH Chambéry, cliniques Savoie)",
        "Logistique et transport (axe franco-italo-suisse)",
        "Collectivités et Grand Chambéry",
      ],
      neighborhoods: [
        "Centre-ville et Vieille Ville",
        "Technopôle Savoie Technolac (Aix-les-Bains)",
        "Bissy et zones d'activités nord",
        "La Ravoire et zones commerciales est",
        "Albertville et Tarentaise (tourisme, JO)",
        "Modane et Maurienne (transport franco-italien)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une entreprise de Savoie Technolac ou un opérateur de station de ski à Chambéry ?",
          a: "Un audit de sécurité pour une startup ou ETI de Savoie Technolac est tarifé entre 5 000 et 12 000 € HT. Pour un opérateur de station de ski gérant des billetteries en ligne, des bornes connectées et des remontées mécaniques automatisées, le budget d'un audit complet se situe entre 8 000 et 18 000 € HT. CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Chambéry ?",
          a: "Un pentest réseau pour une PME chambérienne dure 4 à 7 jours ouvrés. Pour un système de gestion de station de ski incluant les caisses et remontées mécaniques connectées, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes informatiques d'une station de ski et ses remontées mécaniques connectées en Savoie ?",
          a: "Les stations de ski savoyardes utilisent des systèmes complexes mêlant billetteries connectées, contrôle d'accès par RFID, gestion des remontées mécaniques (supervision SCADA) et applications mobiles. CyberSecure réalise des audits incluant le test des portails de réservation en ligne, la sécurité des bornes de chargement de forfaits, l'évaluation des systèmes de supervision des remontées et la conformité RGPD pour les données de skieurs. Nous testons également la résistance des systèmes aux attaques lors des pics de fréquentation saisonnière.",
        },
        {
          q: "CyberSecure intervient-il sur site à Chambéry et en Savoie ?",
          a: "Oui, nos consultants se déplacent à Chambéry, Aix-les-Bains, Albertville, Modane, Saint-Jean-de-Maurienne et dans toute la Savoie. Nous couvrons également la Haute-Savoie (Annecy, Thonon) pour les groupes savoyards ayant des sites dans les deux départements. Déploiement sous 72h à Chambéry.",
        },
        {
          q: "Que faire en cas de cyberattaque à Chambéry — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les stations de ski ou les opérateurs touristiques en haute saison, notre équipe priorise l'intervention pour minimiser l'impact sur l'activité. Déploiement sur site à Chambéry dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteChambery;
