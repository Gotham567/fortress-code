import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNarbonne = () => (
  <CityLandingPage
    data={{
      city: "Narbonne",
      citySlug: "narbonne",
      region: "Occitanie",
      postalCode: "11100",
      intro: "CyberSecure accompagne les entreprises de Narbonne avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Narbonne et dans tout le département Aude pour protéger vos systèmes d'information.",
      localContext: "Narbonne est un bassin économique important de Occitanie regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Aude ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Narbonne.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Narbonne",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Aude",
        "Occitanie",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Narbonne ?",
          a: "Un pentest applicatif pour une PME de Narbonne démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Narbonne pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Narbonne et dans tout le département Aude. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Narbonne ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Narbonne sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Narbonne ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNarbonne;
