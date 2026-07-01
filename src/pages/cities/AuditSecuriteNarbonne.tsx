import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNarbonne = () => (
  <CityLandingPage
    data={{
      city: "Narbonne",
      citySlug: "narbonne",
      region: "Occitanie",
      postalCode: "11100",
      intro: "CyberSecure accompagne les PME et ETI de Narbonne avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs viticole, logistique, touristique et portuaire de l'Aude. Notre cabinet qualifié PASSI ANSSI intervient sur site à Narbonne pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT.",
      localContext: "Narbonne est un carrefour logistique et viticole majeur de l'Occitanie, située à l'intersection de l'A9 (axe France-Espagne) et de l'A61 (axe Toulouse-Méditerranée), accueillant des plateformes de distribution alimentaire et viticole dont les systèmes informatiques sont au coeur de leurs opérations commerciales. La viticulture narbonnaise (Corbières, Fitou, Languedoc) rassemble des centaines de domaines et caves coopératives dont les outils de traçabilité et de vente directe en ligne se développent rapidement. Le canal de la Robine (UNESCO) et les plages des Corbières attirent un tourisme balnéaire et patrimonial dont les structures d'hébergement manipulent des données personnelles sensibles. Le CH de Narbonne et les établissements médico-sociaux de l'Aude-Littoral font face aux cybermenaces.",
      sectors: [
        "Viticulture et caves coopératives (Corbières, Fitou)",
        "Logistique et transport (hub A9/A61 France-Espagne)",
        "Tourisme côtier et balnéaire (Narbonne-Plage, Gruissan)",
        "Port fluvial et commerce (canal de la Robine)",
        "Santé (CH Narbonne, cliniques Aude-Littoral)",
        "Collectivités et Narbonne Agglo",
      ],
      neighborhoods: [
        "Centre-ville et canal de la Robine",
        "Zone industrielle et logistique Croix-Sud",
        "Narbonne-Plage et littoral (tourisme balnéaire)",
        "Gruissan (port, tourisme, plage)",
        "Coursan et zones agricoles et industrielles",
        "Sigean et Fitou (viticulture, réserve naturelle)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour un opérateur logistique France-Espagne à Narbonne ?",
          a: "Un audit de sécurité pour un opérateur logistique actif sur l'axe A9 France-Espagne à Narbonne incluant les systèmes TMS, EDI et les accès douaniers est tarifé entre 6 000 et 13 000 € HT selon la taille et la complexité des échanges. Un pentest web pour un portail client logistique débute à 4 500 € HT. CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau à Narbonne ?",
          a: "Un audit réseau pour une PME narbonnaise dure 3 à 6 jours ouvrés. Pour un opérateur logistique ou viticole avec plusieurs sites, comptez 5 à 8 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment protéger les données commerciales d'une cave coopérative viticole à Narbonne ?",
          a: "Les caves coopératives de Narbonne gèrent des données de production (millésimes, rendements), des informations clients (négociants, GMS, export) et des systèmes de traçabilité obligatoires soumis aux contrôles douaniers et de la Répression des Fraudes. CyberSecure réalise des audits incluant la sécurisation des ERP de gestion viticole, la protection des bases de données clients et de tarification, le test des portails e-commerce de vente directe et la conformité RGPD pour les données des adhérents.",
        },
        {
          q: "CyberSecure intervient-il sur site à Narbonne et dans l'Aude littorale ?",
          a: "Oui, nos consultants se déplacent à Narbonne, Gruissan, Port-la-Nouvelle, Sigean, Coursan et dans toute la zone Narbonne-Littoral. Nous couvrons également Carcassonne et l'Aude intérieure pour les groupes ayant des sites dans tout le département. Déploiement sous 72h à Narbonne.",
        },
        {
          q: "Que faire en cas de cyberattaque à Narbonne — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Notre équipe peut être sur site à Narbonne dans les 4 heures. Pour les incidents touchant des systèmes logistiques critiques ou des données douanières, CyberSecure coordonne avec les autorités compétentes. Nous assurons les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNarbonne;
