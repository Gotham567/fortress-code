import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCholet = () => (
  <CityLandingPage
    data={{
      city: "Cholet",
      citySlug: "cholet",
      region: "Pays de la Loire",
      postalCode: "49300",
      intro: "CyberSecure accompagne les PME et ETI de Cholet avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs textile, chaussure, logistique et services de l'agglomération choletaise. Notre cabinet qualifié PASSI ANSSI intervient sur site à Cholet pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT.",
      localContext: "Cholet est un bassin économique dynamique au carrefour des Pays de la Loire, de la Bretagne et de la Vendée, avec une tradition industrielle forte dans le textile et la chaussure (Eram, André, Hexis) dont les savoir-faire de fabrication, les bases clients et les systèmes e-commerce sont des actifs nécessitant une protection cybersécurité adaptée. La logistique joue un rôle majeur dans l'économie choletaise grâce à la situation géographique idéale sur l'axe Nantes-Poitiers. L'agroalimentaire (viandes, conserveries) et le secteur de la santé complètent le tissu économique local. Les PME choletaises, souvent familiales et en phase de transmission numérique, constituent une cible de choix pour les cybercriminels ciblant les PME françaises.",
      sectors: [
        "Textile et chaussure (Eram, André, industrie mode)",
        "Logistique et distribution (axe Nantes-Poitiers)",
        "Agroalimentaire (conserveries, viandes)",
        "Services aux entreprises et commerce",
        "Santé (CH Cholet, cliniques Maine-et-Loire)",
        "Collectivités et Cholet Agglomération",
      ],
      neighborhoods: [
        "Centre-ville de Cholet",
        "Zone industrielle nord (textile, logistique)",
        "Maulévrier et zones d'activités est",
        "Saint-Léger-sous-Cholet et zones sud",
        "Les Herbiers et Vendée voisine (PME, tourisme)",
        "Bressuire et Deux-Sèvres nord (industrie, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une entreprise textile ou chaussure à Cholet ?",
          a: "Un audit de sécurité pour une PME textile ou chaussure de Cholet incluant les systèmes e-commerce, les outils de conception (CAO mode) et les ERP de gestion est tarifé entre 5 000 et 11 000 € HT. Pour un groupe comme Eram avec plusieurs sites et un SI distribué, le budget d'un audit complet se situe entre 10 000 et 20 000 € HT. CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Cholet ?",
          a: "Un pentest réseau pour une PME choletaise dure 4 à 6 jours ouvrés. Pour une ETI avec un réseau logistique multi-sites, comptez 6 à 9 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sur site à Cholet dans les 72h pour les urgences.",
        },
        {
          q: "Comment protéger les données de conception et les bases clients d'une marque de mode ou chaussure à Cholet ?",
          a: "Les entreprises textiles et chaussures de Cholet développent des collections, des modèles et des savoir-faire de fabrication qui constituent des actifs créatifs sensibles face à la contrefaçon. CyberSecure réalise des audits incluant la protection des fichiers CAO et de création, la sécurité des portails B2B avec les distributeurs, la conformité RGPD pour les bases clients fidélité et e-commerce, et les tests d'intrusion des plateformes de vente en ligne. Nous évaluons également les risques liés aux prestataires de fabrication asiatiques avec accès aux designs.",
        },
        {
          q: "CyberSecure intervient-il sur site à Cholet et dans le Maine-et-Loire ?",
          a: "Oui, nos consultants se déplacent à Cholet, Maulévrier, Saint-Macaire-en-Mauges, Beaupréau et dans toute la région choletaise du Maine-et-Loire. Nous couvrons également la Vendée (Les Herbiers, La Roche-sur-Yon) et les Deux-Sèvres (Bressuire) pour les groupes ayant des sites dans plusieurs départements. Déploiement sous 72h à Cholet.",
        },
        {
          q: "Que faire en cas de cyberattaque à Cholet — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre pour préserver les traces forensiques. Notre équipe peut être déployée sur site à Cholet dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Pour les PME sans équipe informatique interne, nous proposons une assistance téléphonique préalable pour les premières mesures de confinement. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCholet;
