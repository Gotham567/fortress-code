import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBethune = () => (
  <CityLandingPage
    data={{
      city: "Béthune",
      citySlug: "bethune",
      region: "Hauts-de-France",
      postalCode: "62400",
      intro: "CyberSecure accompagne les entreprises de Béthune et de l'arrondissement de Béthune-Bruay avec des audits de sécurité qualifiés PASSI, des pentests et une cellule CERT disponible 24h/24. Prestataire cybersécurité local pour les PME, ETI et artisans du Pas-de-Calais.",
      localContext: "Béthune est une ville dynamique au cœur du bassin minier classé UNESCO, avec un tissu économique dense : industrie chimique et pharmaceutique, logistique, commerce, BTP et services. Le bassin Béthune-Bruay compte plusieurs milliers d'entreprises, des PME artisanales aux ETI industrielles dont certaines opèrent dans des secteurs réglementés (pharma, agroalimentaire). Les cyberattaques ciblant les entreprises des Hauts-de-France ont progressé de 40 % en 2024 selon le CERT-FR. Ransomware, phishing ciblé et fraude au virement : aucun secteur n'est épargné. CyberSecure intervient sur Béthune, Bruay-la-Buissière, Noeux-les-Mines et tout le Béthunois pour sécuriser votre système d'information.",
      sectors: [
        "Industrie chimique et pharmaceutique",
        "Logistique et transport",
        "Commerce et distribution",
        "BTP et immobilier",
        "Services aux entreprises",
        "Artisanat et TPE",
      ],
      neighborhoods: [
        "Béthune centre",
        "Bruay-la-Buissière",
        "Noeux-les-Mines",
        "Barlin",
        "Auchel",
        "Arrondissement Béthune-Bruay",
      ],
      faq: [
        {
          q: "Combien coûte un audit cybersécurité à Béthune ?",
          a: "Un audit cybersécurité pour une PME de Béthune démarre à 3 000 € HT pour un audit ciblé de 2 jours. Un audit complet avec pentest réseau et applicatif varie entre 8 000 et 20 000 € selon le périmètre. Pour les ETI industrielles du secteur chimique ou pharma soumises à NIS2, un audit de conformité complet est généralement compris entre 12 000 et 30 000 € HT. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un pentest pour une entreprise de Béthune ?",
          a: "Un pentest d'une application web métier dure 3 à 5 jours. Un pentest réseau interne pour une PME de 20 à 100 salariés nécessite 4 à 7 jours. Un audit complet couvrant réseau, Active Directory, applications et sensibilisation des équipes prend 8 à 12 jours. Nous intervenons sur site à Béthune avec un planning adapté à votre activité pour minimiser les perturbations.",
        },
        {
          q: "Les entreprises pharmaceutiques et chimiques de Béthune ont-elles des obligations cyber spécifiques ?",
          a: "Oui. Les entreprises pharmaceutiques et chimiques de plus de 50 salariés sont potentiellement soumises à NIS2 (secteurs santé et fabrication critique). Elles doivent mettre en place des mesures de gestion des risques, notifier les incidents à l'ANSSI et réaliser des audits de sécurité réguliers. Les systèmes de contrôle de production (OT) et les données de R&D pharmaceutique doivent faire l'objet d'une protection renforcée.",
        },
        {
          q: "Intervenez-vous sur site à Béthune ?",
          a: "Oui. Nos consultants interviennent sur site à Béthune, Bruay-la-Buissière, Noeux-les-Mines et dans tout l'arrondissement Béthune-Bruay. Nous couvrons également Lens, Arras et Lille pour les missions régionales dans les Hauts-de-France. Les audits à distance sont disponibles pour les missions qui s'y prêtent (revue de configuration, audit de code, questionnaire organisationnel) pour plus de flexibilité.",
        },
        {
          q: "Que faire si mon entreprise à Béthune subit un ransomware ?",
          a: "Appelez notre ligne CERT d'urgence immédiatement (disponible 24/7). Isolez vos machines du réseau sans les éteindre et ne payez pas la rançon avant d'avoir appelé un expert. Préservez les logs des serveurs et équipements réseau. Signalez l'incident à cybermalveillance.gouv.fr et à votre assureur. Nous déployons une équipe à Béthune dans les plus brefs délais pour contenir l'attaque, analyser les vecteurs d'intrusion et préserver les preuves numériques.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBethune;
