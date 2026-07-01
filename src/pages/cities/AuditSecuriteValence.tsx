import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteValence = () => (
  <CityLandingPage
    data={{
      city: "Valence",
      citySlug: "valence",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "26000",
      intro: "CyberSecure accompagne les PME et ETI de Valence avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs industriel, logistique, agricole et de la santé dans la Drôme. Notre cabinet qualifié PASSI ANSSI intervient sur site à Valence pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT dans la capitale de la Drôme.",
      localContext: "Valence est un carrefour logistique majeur sur l'axe Lyon-Marseille (A7 et ligne TGV) accueillant d'importantes plateformes de distribution et de transport dont la connectivité génère des risques cyber significatifs. L'industrie valentinoise (mécanique, agroalimentaire, emballage) et les entreprises de la zone Rovaltain (TGV Valence) constituent un tissu économique PME/ETI en pleine numérisation. L'agriculture drômoise spécialisée (fruits, noisettes, plantes aromatiques) s'appuie sur des coopératives et des marques premium comme Valrhona (chocolat). Le CH de Valence et les établissements de santé de la Drôme font face aux cybermenaces. La centrale nucléaire de Cruas-Meysse toute proche fait de la région un territoire à enjeux OIV.",
      sectors: [
        "Logistique et transport (axe A7, Rovaltain TGV)",
        "Agriculture spécialisée et agroalimentaire (Valrhona, fruits)",
        "Industrie mécanique et emballage",
        "Santé (CH Valence, cliniques Drôme)",
        "Numérique et services (PME Drôme)",
        "Collectivités et Valence Romans Agglo",
      ],
      neighborhoods: [
        "Centre-ville et Champ-de-Mars",
        "Zone Rovaltain (TGV, activités tertiaires)",
        "Alixan et zone industrielle nord",
        "Portes-lès-Valence et zones d'activités sud",
        "Romans-sur-Isère (chaussure, textile technique)",
        "Montélimar et Drôme provençale (tourisme, nougat)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un opérateur logistique ou une coopérative agricole à Valence ?",
          a: "Un audit de sécurité pour une plateforme logistique de la zone Rovaltain ou un opérateur de transport à Valence est tarifé entre 5 500 et 12 000 € HT. Pour une coopérative agricole ou un fabricant comme Valrhona incluant les systèmes de traçabilité et les ERP de production, le budget se situe entre 7 000 et 15 000 € HT. CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Valence ?",
          a: "Un pentest réseau pour une PME valentinoise dure 4 à 7 jours ouvrés. Pour une ETI logistique avec des interconnexions EDI et des accès transporteurs, comptez 6 à 9 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment protéger les systèmes informatiques d'une entreprise agroalimentaire comme Valrhona à Valence ?",
          a: "Les entreprises agroalimentaires haut de gamme comme Valrhona gèrent des recettes et processus de fabrication qui constituent des actifs immatériels sensibles, ainsi que des systèmes de traçabilité connectés aux fournisseurs de cacao du monde entier. CyberSecure réalise des audits incluant la sécurisation des ERP de production, la protection des recettes et formulations, le test des interfaces avec les partenaires agricoles internationaux et l'évaluation de la conformité IFS/BRC pour les systèmes informatisés d'assurance qualité.",
        },
        {
          q: "CyberSecure intervient-il sur site à Valence et dans la Drôme ?",
          a: "Oui, nos consultants se déplacent à Valence, Romans-sur-Isère, Montélimar, Die, Nyons et dans tout le département de la Drôme. Nous couvrons également l'Ardèche (Privas, Aubenas) pour les groupes ayant des sites dans les deux départements. Déploiement sous 72h à Valence.",
        },
        {
          q: "Que faire en cas de cyberattaque à Valence — procédure d'urgence CERT ?",
          a: "Contactez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Notre équipe peut être déployée sur site à Valence dans les 4 heures pour contenir l'attaque, analyser le vecteur d'intrusion et coordonner la reprise. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteValence;
