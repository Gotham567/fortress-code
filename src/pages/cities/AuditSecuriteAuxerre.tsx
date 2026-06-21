import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAuxerre = () => (
  <CityLandingPage
    data={{
      city: "Auxerre",
      citySlug: "auxerre",
      region: "Bourgogne-Franche-Comté",
      postalCode: "89000",
      intro: "CyberSecure accompagne les entreprises de Auxerre avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons sur Auxerre et dans tout le département Yonne pour protéger vos systèmes d'information.",
      localContext: "Auxerre est un bassin économique important de Bourgogne-Franche-Comté regroupant des PME, ETI et organismes publics. Les cyberattaques ciblant les entreprises de Yonne ont fortement augmenté ces dernières années : ransomware, phishing ciblé, compromission de comptes. CyberSecure propose des audits et pentests sur mesure pour évaluer et renforcer votre posture de sécurité à Auxerre.",
      sectors: [
        "Industrie et manufacture",
        "Santé et établissements médicaux",
        "Finance et assurance",
        "Commerce et distribution",
        "Collectivités et administrations",
        "PME et artisanat",
      ],
      neighborhoods: [
        "Centre de Auxerre",
        "Zone industrielle locale",
        "Agglomération élargie",
        "Département Yonne",
        "Bourgogne-Franche-Comté",
        "Toute la France",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Auxerre ?",
          a: "Un pentest applicatif pour une PME de Auxerre démarre à 4 000 € HT. Un pentest réseau complet varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Auxerre pour des audits ?",
          a: "Oui. Nos consultants interviennent sur site à Auxerre et dans tout le département Yonne. Nous proposons aussi des audits à distance pour certaines missions afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque à Auxerre ?",
          a: "Appelez notre ligne d'urgence CERT immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre. Nous déployons une équipe à Auxerre sous 4 heures pour contenir l'attaque et préserver les preuves.",
        },
        {
          q: "Votre audit est-il reconnu par l'ANSSI à Auxerre ?",
          a: "Oui. Nos audits sont réalisés par des consultants qualifiés PASSI ANSSI. Les rapports sont reconnus par tous les organismes de contrôle français (CNIL, ANSSI, ARS) et valorisés dans les appels d'offres publics.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAuxerre;
