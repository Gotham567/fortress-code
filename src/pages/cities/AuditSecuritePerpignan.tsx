import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuritePerpignan = () => (
  <CityLandingPage
    data={{
      city: "Perpignan",
      citySlug: "perpignan",
      region: "Occitanie",
      postalCode: "66000",
      intro: "CyberSecure accompagne les entreprises de Perpignan avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Perpignan et dans tout le département Pyrénées-Orientales pour protéger vos systèmes d'information.",
      localContext: "Perpignan est un pôle économique majeur de Occitanie regroupant des PME, ETI et grandes entreprises dans tous les secteurs. Les cyberattaques contre les entreprises de Pyrénées-Orientales ont augmenté de 40% en 2024. Les ransomwares, le phishing ciblé et le vol de données menacent aussi bien les PME que les grandes structures.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Perpignan",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Pyrénées-Orientales",
        "Occitanie",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Perpignan ?",
          a: "Un pentest applicatif pour une PME de Perpignan démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Perpignan pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Perpignan et dans tout le département Pyrénées-Orientales. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Perpignan ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Perpignan sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Perpignan ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuritePerpignan;
