import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBeziers = () => (
  <CityLandingPage
    data={{
      city: "Béziers",
      citySlug: "beziers",
      region: "Occitanie",
      postalCode: "34500",
      intro: "CyberSecure accompagne les entreprises de Béziers avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Béziers et dans tout le département Hérault pour protéger vos systèmes d'information.",
      localContext: "Béziers est un bassin économique important de Occitanie regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Hérault ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Béziers.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Béziers",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Hérault",
        "Occitanie",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Béziers ?",
          a: "Un pentest applicatif pour une PME de Béziers démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Béziers pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Béziers et dans tout le département Hérault. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Béziers ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Béziers sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Béziers ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBeziers;
