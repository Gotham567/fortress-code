import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteSaintNazaire = () => (
  <CityLandingPage
    data={{
      city: "Saint-Nazaire",
      citySlug: "saint-nazaire",
      region: "Pays de la Loire",
      postalCode: "44600",
      intro: "CyberSecure accompagne les entreprises de Saint-Nazaire avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Saint-Nazaire et dans tout le département Loire-Atlantique pour protéger vos systèmes d'information.",
      localContext: "Saint-Nazaire est un bassin économique important de Pays de la Loire regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Loire-Atlantique ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Saint-Nazaire.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Saint-Nazaire",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Loire-Atlantique",
        "Pays de la Loire",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Saint-Nazaire ?",
          a: "Un pentest applicatif pour une PME de Saint-Nazaire démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Saint-Nazaire pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Saint-Nazaire et dans tout le département Loire-Atlantique. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Saint-Nazaire ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Saint-Nazaire sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Saint-Nazaire ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteSaintNazaire;
