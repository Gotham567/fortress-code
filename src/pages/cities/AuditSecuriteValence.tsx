import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteValence = () => (
  <CityLandingPage
    data={{
      city: "Valence",
      citySlug: "valence",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "26000",
      intro: "CyberSecure accompagne les entreprises de Valence avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Valence et dans tout le département Drôme pour protéger vos systèmes d'information.",
      localContext: "Valence est un pôle économique majeur de Auvergne-Rhône-Alpes regroupant des PME, ETI et grandes entreprises dans tous les secteurs. Les cyberattaques contre les entreprises de Drôme ont augmenté de 40% en 2024. Les ransomwares, le phishing ciblé et le vol de données menacent aussi bien les PME que les grandes structures.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Valence",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Drôme",
        "Auvergne-Rhône-Alpes",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Valence ?",
          a: "Un pentest applicatif pour une PME de Valence démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Valence pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Valence et dans tout le département Drôme. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Valence ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Valence sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Valence ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteValence;
