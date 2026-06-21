import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBastia = () => (
  <CityLandingPage
    data={{
      city: "Bastia",
      citySlug: "bastia",
      region: "Haute-Corse",
      postalCode: "20200",
      intro: "CyberSecure accompagne les entreprises de Bastia avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Bastia et dans tout le département Haute-Corse pour protéger vos systèmes d'information.",
      localContext: "Bastia est un bassin économique important de Haute-Corse regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Haute-Corse ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Bastia.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Bastia",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Haute-Corse",
        "Haute-Corse",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Bastia ?",
          a: "Un pentest applicatif pour une PME de Bastia démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Bastia pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Bastia et dans tout le département Haute-Corse. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Bastia ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Bastia sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Bastia ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBastia;
