import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteReims = () => (
  <CityLandingPage
    data={{
      city: "Reims",
      citySlug: "reims",
      region: "Grand Est",
      postalCode: "51100",
      intro: "CyberSecure accompagne les entreprises de Reims avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Reims et dans tout le département Marne pour protéger vos systèmes d'information.",
      localContext: "Reims est un pôle économique majeur de Grand Est regroupant des PME, ETI et grandes entreprises dans tous les secteurs. Les cyberattaques contre les entreprises de Marne ont augmenté de 40% en 2024. Les ransomwares, le phishing ciblé et le vol de données menacent aussi bien les PME que les grandes structures.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Reims",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Marne",
        "Grand Est",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Reims ?",
          a: "Un pentest applicatif pour une PME de Reims démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Reims pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Reims et dans tout le département Marne. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Reims ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Reims sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Reims ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteReims;
