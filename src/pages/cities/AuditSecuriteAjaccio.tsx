import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAjaccio = () => (
  <CityLandingPage
    data={{
      city: "Ajaccio",
      citySlug: "ajaccio",
      region: "Corse-du-Sud",
      postalCode: "20000",
      intro: "CyberSecure accompagne les entreprises de Ajaccio avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Ajaccio et dans tout le département Corse-du-Sud pour protéger vos systèmes d'information.",
      localContext: "Ajaccio est un bassin économique important de Corse-du-Sud regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Corse-du-Sud ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Ajaccio.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Ajaccio",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Corse-du-Sud",
        "Corse-du-Sud",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Ajaccio ?",
          a: "Un pentest applicatif pour une PME de Ajaccio démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Ajaccio pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Ajaccio et dans tout le département Corse-du-Sud. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Ajaccio ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Ajaccio sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Ajaccio ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAjaccio;
