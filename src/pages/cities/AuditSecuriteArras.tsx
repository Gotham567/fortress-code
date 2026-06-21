import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteArras = () => (
  <CityLandingPage
    data={{
      city: "Arras",
      citySlug: "arras",
      region: "Hauts-de-France",
      postalCode: "62000",
      intro: "CyberSecure accompagne les entreprises de Arras avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Arras et dans tout le département Pas-de-Calais pour protéger vos systèmes d'information.",
      localContext: "Arras est un bassin économique important de Hauts-de-France regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Pas-de-Calais ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Arras.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Arras",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Pas-de-Calais",
        "Hauts-de-France",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Arras ?",
          a: "Un pentest applicatif pour une PME de Arras démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Arras pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Arras et dans tout le département Pas-de-Calais. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Arras ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Arras sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Arras ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteArras;
