import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLeMans = () => (
  <CityLandingPage
    data={{
      city: "Le Mans",
      citySlug: "le-mans",
      region: "Pays de la Loire",
      postalCode: "72000",
      intro: "CyberSecure accompagne les entreprises de Le Mans avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Le Mans et dans tout le département Sarthe pour protéger vos systèmes d'information.",
      localContext: "Le Mans est un pôle économique majeur de Pays de la Loire regroupant des PME, ETI et grandes entreprises dans tous les secteurs. Les cyberattaques contre les entreprises de Sarthe ont augmenté de 40% en 2024. Les ransomwares, le phishing ciblé et le vol de données menacent aussi bien les PME que les grandes structures.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Le Mans",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Sarthe",
        "Pays de la Loire",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Le Mans ?",
          a: "Un pentest applicatif pour une PME de Le Mans démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Le Mans pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Le Mans et dans tout le département Sarthe. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Le Mans ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Le Mans sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Le Mans ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLeMans;
