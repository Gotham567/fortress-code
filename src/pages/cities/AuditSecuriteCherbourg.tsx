import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCherbourg = () => (
  <CityLandingPage
    data={{
      city: "Cherbourg-en-Cotentin",
      citySlug: "cherbourg",
      region: "Normandie",
      postalCode: "50100",
      intro: "CyberSecure accompagne les entreprises de Cherbourg-en-Cotentin avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Cherbourg-en-Cotentin et dans tout le département Manche pour protéger vos systèmes d'information.",
      localContext: "Cherbourg-en-Cotentin est un bassin économique important de Normandie regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Manche ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Cherbourg-en-Cotentin.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Cherbourg-en-Cotentin",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Manche",
        "Normandie",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Cherbourg-en-Cotentin ?",
          a: "Un pentest applicatif pour une PME de Cherbourg-en-Cotentin démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Cherbourg-en-Cotentin pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Cherbourg-en-Cotentin et dans tout le département Manche. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Cherbourg-en-Cotentin ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Cherbourg-en-Cotentin sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Cherbourg-en-Cotentin ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCherbourg;
