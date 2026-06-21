import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteVersailles = () => (
  <CityLandingPage
    data={{
      city: "Versailles",
      citySlug: "versailles",
      region: "Île-de-France",
      postalCode: "78000",
      intro: "CyberSecure accompagne les entreprises de Versailles avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Versailles et dans tout le département Yvelines pour protéger vos systèmes d'information.",
      localContext: "Versailles est un bassin économique important de Île-de-France regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Yvelines ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Versailles.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Versailles",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Yvelines",
        "Île-de-France",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Versailles ?",
          a: "Un pentest applicatif pour une PME de Versailles démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Versailles pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Versailles et dans tout le département Yvelines. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Versailles ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Versailles sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Versailles ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteVersailles;
