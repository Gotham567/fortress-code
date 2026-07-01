import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLimoges = () => (
  <CityLandingPage
    data={{
      city: "Limoges",
      citySlug: "limoges",
      region: "Nouvelle-Aquitaine",
      postalCode: "87000",
      intro: "CyberSecure propose des audits de sécurité informatique, pentests et tests d'intrusion à Limoges pour les PME et ETI de Haute-Vienne, avec une expertise sur les secteurs de la porcelaine, de la santé et du numérique. Notre cabinet qualifié PASSI ANSSI intervient sur site à Limoges pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT adaptées aux spécificités de l'économie limougeaude.",
      localContext: "Limoges est mondialement reconnue pour sa tradition de porcelaine et d'arts du feu, avec des manufactures comme Haviland et Bernardaud dont les savoir-faire artisanaux et les données de conception sont des actifs immatériels à protéger contre l'espionnage industriel. Le CHU de Limoges est le centre hospitalier universitaire de référence pour la Nouvelle-Aquitaine nord, gérant des données médicales sensibles pour des centaines de milliers de patients. Le pôle numérique limougeaud, porté par le technopôle Ester, héberge des PME et startups innovantes dans les secteurs de l'IA et des télécommunications. Les nombreuses PME artisanales du département s'informatisent progressivement et nécessitent un accompagnement cybersécurité adapté à leur budget.",
      sectors: [
        "Porcelaine et arts du feu (Haviland, Bernardaud)",
        "Santé (CHU Limoges, cliniques, EHPAD)",
        "Numérique et startups (Technopôle Ester)",
        "Agroalimentaire et agriculture limousine",
        "PME artisanales et savoir-faire traditionnels",
        "Collectivités et services publics",
      ],
      neighborhoods: [
        "Centre-ville et Cité de la Porcelaine",
        "Technopôle Ester (nord-est, numérique)",
        "Zone industrielle nord de Limoges",
        "Beaubreuil et quartiers résidentiels nord",
        "Isle et zones d'activités Haute-Vienne",
        "Saint-Junien et Haute-Vienne ouest",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour une manufacture de porcelaine ou une PME artisanale à Limoges ?",
          a: "Un audit de sécurité informatique adapté aux PME artisanales et manufactures de porcelaine de Limoges débute à 3 500 € HT pour un périmètre limité. Un pentest réseau complet pour une ETI comme Haviland ou Bernardaud se situe entre 7 000 et 14 000 € HT. CyberSecure propose des offres modulaires permettant aux PME à budget limité de bénéficier d'un audit ciblé sur leurs actifs les plus critiques. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit sécurité informatique à Limoges ?",
          a: "Un audit réseau pour une PME limougeaude dure 3 à 6 jours ouvrés. Pour une ETI avec plusieurs sites, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut planifier les missions dans les 2 semaines suivant la signature du bon de commande, avec un rapport livré sous 5 jours ouvrés après la fin des tests.",
        },
        {
          q: "Comment protéger les savoir-faire et données de conception des manufactures de porcelaine à Limoges ?",
          a: "Les manufactures de porcelaine de Limoges détiennent des recettes de pâtes, des formules d'émaux et des motifs décoratifs qui constituent un patrimoine immatériel précieux face à la concurrence internationale. CyberSecure réalise des audits de classification des données, des revues des droits d'accès aux fichiers de conception (CAO), et des tests d'exfiltration de données. Nous recommandons également des solutions de marquage des documents (watermarking numérique) pour tracer les fuites potentielles.",
        },
        {
          q: "CyberSecure intervient-il sur site à Limoges et en Haute-Vienne ?",
          a: "Oui, nos consultants se déplacent à Limoges, Saint-Junien, Rochechouart, Bellac, Ambazac et dans toute la Haute-Vienne. Nous couvrons également la Creuse et la Corrèze pour les entreprises multisite de Nouvelle-Aquitaine. Intervention possible sur site sous 72h à Limoges.",
        },
        {
          q: "Que faire en cas de cyberattaque à Limoges — quelle est la procédure CERT ?",
          a: "Contactez immédiatement la cellule CERT de CyberSecure (24h/24, 7j/7). Isolez les équipements compromis sans les arrêter. Notre équipe peut être déployée à Limoges dans les 4 à 6 heures pour contenir l'incident, réaliser l'analyse forensique et coordonner la reprise d'activité. Nous prenons en charge les déclarations ANSSI et CNIL. Pour les PME, nous proposons une assistance téléphonique préalable pour les premières actions de confinement. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLimoges;
