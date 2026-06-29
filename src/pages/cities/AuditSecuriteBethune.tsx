import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBethune = () => (
  <CityLandingPage
    data={{
      city: "Béthune",
      citySlug: "bethune",
      region: "Hauts-de-France",
      postalCode: "62400",
      intro: "CyberSecure accompagne les entreprises de Béthune et de l'arrondissement de Béthune-Bruay avec des audits de sécurité qualifiés PASSI, des pentests et une cellule CERT disponible 24h/24. Prestataire cybersécurité local pour les PME, ETI et artisans du Pas-de-Calais.",
      localContext: "Béthune est une ville dynamique au cœur du bassin minier classé UNESCO, avec un tissu économique dense : industrie agroalimentaire, logistique, commerce, BTP et services. Le bassin Béthune-Bruay compte plusieurs milliers d'entreprises, des PME artisanales aux ETI industrielles. Les cyberattaques ciblant les entreprises des Hauts-de-France ont progressé de 40 % en 2024 selon le CERT-FR. Ransomware, phishing ciblé, compromission de comptes : aucun secteur n'est épargné. CyberSecure intervient sur Béthune, Bruay-la-Buissière, Noeux-les-Mines et tout le Béthunois pour sécuriser votre système d'information.",
      sectors: [
        "Industrie agroalimentaire",
        "Logistique et transport",
        "Commerce et distribution",
        "BTP et immobilier",
        "Services aux entreprises",
        "Artisanat et TPE",
        "Santé et établissements médicaux",
        "Collectivités et administrations",
      ],
      neighborhoods: [
        "Béthune centre",
        "Bruay-la-Buissière",
        "Noeux-les-Mines",
        "Barlin",
        "Auchel",
        "Arrondissement Béthune-Bruay",
        "Pas-de-Calais (62)",
        "Hauts-de-France",
      ],
      faq: [
        {
          q: "Combien coûte un audit cybersécurité à Béthune ?",
          a: "Un audit cybersécurité pour une PME de Béthune démarre à 3 000 € HT pour un audit ciblé de 2 jours. Un audit complet avec pentest réseau et applicatif varie entre 8 000 et 20 000 € selon le périmètre. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Intervenez-vous sur site à Béthune ?",
          a: "Oui. Nos consultants interviennent sur site à Béthune, Bruay-la-Buissière, Noeux-les-Mines et dans tout l'arrondissement Béthune-Bruay. Nous proposons aussi des audits à distance pour les missions qui s'y prêtent, afin de réduire les délais et les coûts.",
        },
        {
          q: "Que faire si mon entreprise à Béthune subit un ransomware ?",
          a: "Appelez notre ligne CERT d'urgence immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre et ne payez pas la rançon avant d'avoir appelé un expert. Nous déployons une équipe à Béthune dans les plus brefs délais pour contenir l'attaque et préserver les preuves numériques.",
        },
        {
          q: "Mon entreprise béthunoise est-elle concernée par NIS2 ?",
          a: "Cela dépend de votre secteur et de votre taille. Si vous êtes dans l'énergie, le transport, la santé, l'agroalimentaire ou la logistique avec plus de 50 salariés, vous êtes potentiellement concerné. Contactez-nous pour un diagnostic NIS2 gratuit en 30 minutes.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBethune;
