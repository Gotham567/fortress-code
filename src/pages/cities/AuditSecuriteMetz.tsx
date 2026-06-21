import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMetz = () => (
  <CityLandingPage
    data={{
      city: "Metz",
      citySlug: "metz",
      region: "Grand Est",
      postalCode: "57000",
      intro: "CyberSecure accompagne les entreprises de Metz avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Metz et dans tout le département Moselle pour protéger vos systèmes d'information.",
      localContext: "Metz est un pôle économique majeur de Grand Est regroupant des PME, ETI et grandes entreprises dans tous les secteurs. Les cyberattaques contre les entreprises de Moselle ont augmenté de 40% en 2024. Les ransomwares, le phishing ciblé et le vol de données menacent aussi bien les PME que les grandes structures.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Metz",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Moselle",
        "Grand Est",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Metz ?",
          a: "Un pentest applicatif pour une PME de Metz démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Metz pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Metz et dans tout le département Moselle. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Metz ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Metz sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Metz ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMetz;
