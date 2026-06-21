import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCreteil = () => (
  <CityLandingPage
    data={{
      city: "Créteil",
      citySlug: "creteil",
      region: "Île-de-France",
      postalCode: "94000",
      intro: "CyberSecure accompagne les entreprises de Créteil avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Créteil et dans tout le département Val-de-Marne pour protéger vos systèmes d'information.",
      localContext: "Créteil est un bassin économique important de Île-de-France regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Val-de-Marne ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Créteil.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Créteil",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Val-de-Marne",
        "Île-de-France",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Créteil ?",
          a: "Un pentest applicatif pour une PME de Créteil démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Créteil pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Créteil et dans tout le département Val-de-Marne. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Créteil ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Créteil sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Créteil ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCreteil;
