import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCholet = () => (
  <CityLandingPage
    data={{
      city: "Cholet",
      citySlug: "cholet",
      region: "Pays de la Loire",
      postalCode: "49300",
      intro: "CyberSecure accompagne les entreprises de Cholet avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Cholet et dans tout le département Maine-et-Loire pour protéger vos systèmes d'information.",
      localContext: "Cholet est un bassin économique important de Pays de la Loire regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Maine-et-Loire ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Cholet.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Cholet",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Maine-et-Loire",
        "Pays de la Loire",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Cholet ?",
          a: "Un pentest applicatif pour une PME de Cholet démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Cholet pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Cholet et dans tout le département Maine-et-Loire. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Cholet ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Cholet sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Cholet ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCholet;
