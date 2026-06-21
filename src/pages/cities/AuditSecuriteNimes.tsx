import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNimes = () => (
  <CityLandingPage
    data={{
      city: "Nîmes",
      citySlug: "nimes",
      region: "Occitanie",
      postalCode: "30000",
      intro: "CyberSecure accompagne les entreprises de Nîmes avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Nîmes et dans tout le département Gard pour protéger vos systèmes d'information.",
      localContext: "Nîmes est un pôle économique majeur de Occitanie regroupant des PME, ETI et grandes entreprises dans tous les secteurs. Les cyberattaques contre les entreprises de Gard ont augmenté de 40% en 2024. Les ransomwares, le phishing ciblé et le vol de données menacent aussi bien les PME que les grandes structures.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Nîmes",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Gard",
        "Occitanie",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Nîmes ?",
          a: "Un pentest applicatif pour une PME de Nîmes démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Nîmes pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Nîmes et dans tout le département Gard. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Nîmes ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Nîmes sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Nîmes ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNimes;
