import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteTarbes = () => (
  <CityLandingPage
    data={{
      city: "Tarbes",
      citySlug: "tarbes",
      region: "Occitanie",
      postalCode: "65000",
      intro: "CyberSecure accompagne les PME et ETI de Tarbes avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs aéronautique, agricole et industriel des Hautes-Pyrénées. Notre cabinet qualifié PASSI ANSSI intervient sur site à Tarbes pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT.",
      localContext: "Tarbes est un pôle aéronautique reconnu avec la présence de Safran Landing Systems (trains d'atterrissage pour toute l'aviation commerciale mondiale), de Daher et de nombreux sous-traitants aéronautiques dont les données de conception et les exigences de conformité NADCAP/AS9100 imposent des niveaux de cybersécurité élevés. L'agriculture pyrénéenne (maïs semence, élevage, produits montagnards) et les coopératives agricoles des Hautes-Pyrénées s'informatisent progressivement. Le tourisme pyrénéen (Lourdes, ski, thermalisme) génère une économie d'accueil massive avec des plateformes de réservation et des données personnelles de pèlerins du monde entier. Le CH de Tarbes et les établissements de santé des Hautes-Pyrénées font face aux cybermenaces.",
      sectors: [
        "Aéronautique (Safran Landing Systems, Daher, sous-traitants)",
        "Agriculture et coopératives (maïs, élevage pyrénéen)",
        "Tourisme religieux et thermal (Lourdes, Barèges, Cauterets)",
        "Santé (CH Tarbes, cliniques Hautes-Pyrénées)",
        "Industrie et PME tarbaises",
        "Collectivités et Tarbes-Lourdes-Pyrénées",
      ],
      neighborhoods: [
        "Centre-ville de Tarbes",
        "Zone industrielle et aéronautique de Tarbes-Ossun",
        "Ossun (aéroport Tarbes-Lourdes-Pyrénées, Safran)",
        "Aureilhan et zones d'activités",
        "Lourdes (sanctuaires, hôtels, pèlerinage)",
        "Bagnères-de-Bigorre et Hautes-Pyrénées (thermalisme, ski)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un sous-traitant aéronautique (Safran, Daher) à Tarbes ?",
          a: "Un audit de sécurité pour un sous-traitant aéronautique à Tarbes soumis aux exigences AS9100 et NADCAP se situe entre 7 000 et 18 000 € HT selon le périmètre et le niveau de certification requis. Pour les PME sous-traitantes en attente d'homologation fournisseur, CyberSecure propose des audits de pré-certification à partir de 5 500 € HT. Nous maîtrisons les référentiels aéronautiques spécifiques. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau ETI à Tarbes ?",
          a: "Un audit réseau pour une PME tarbaise dure 4 à 7 jours ouvrés. Pour une ETI aéronautique avec plusieurs sites et des accès partenaires (Airbus, Safran), comptez 7 à 12 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment auditer les systèmes d'information d'un fabricant de trains d'atterrissage à Tarbes (Safran Landing Systems) ?",
          a: "Les sous-traitants de Safran Landing Systems à Tarbes développent des pièces critiques pour la sécurité des vols dont les données de conception (plans CAO, spécifications matériaux, dossiers de qualification) sont soumises aux exigences FAR/CS-25 et aux clauses de sécurité des donneurs d'ordre. CyberSecure réalise des audits incluant la protection des données de certification aéronautique, la sécurité des environnements PLM, le test des accès distants de maintenance et la conformité aux exigences de cybersécurité de la supply chain aéronautique (CMMC pour les contrats avec des donneurs d'ordre américains).",
        },
        {
          q: "CyberSecure intervient-il sur site à Tarbes et dans les Hautes-Pyrénées ?",
          a: "Oui, nos consultants se déplacent à Tarbes, Lourdes, Bagnères-de-Bigorre, Argelès-Gazost et dans toutes les Hautes-Pyrénées. Nous couvrons également les Pyrénées-Atlantiques (Pau) pour les groupes aéronautiques ayant des sites dans les deux départements. Déploiement sous 72h à Tarbes.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site aéronautique ou une PME à Tarbes ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les incidents sur des données de certification aéronautique, informez également votre donneur d'ordre (Safran, Airbus) conformément aux clauses contractuelles. Notre équipe peut être sur site à Tarbes dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteTarbes;
