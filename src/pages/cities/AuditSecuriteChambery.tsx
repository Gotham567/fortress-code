import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteChambery = () => (
  <CityLandingPage
    data={{
      city: "Chambéry",
      citySlug: "chambery",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "73000",
      intro: "CyberSecure accompagne les entreprises de Chambéry avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Chambéry et dans tout le département Savoie pour protéger vos systèmes d'information.",
      localContext: "Chambéry est un bassin économique important de Auvergne-Rhône-Alpes regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Savoie ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Chambéry.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Chambéry",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Savoie",
        "Auvergne-Rhône-Alpes",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Chambéry ?",
          a: "Un pentest applicatif pour une PME de Chambéry démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Chambéry pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Chambéry et dans tout le département Savoie. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Chambéry ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Chambéry sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Chambéry ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteChambery;
