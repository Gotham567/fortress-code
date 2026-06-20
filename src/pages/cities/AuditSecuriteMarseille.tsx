import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMarseille = () => (
  <CityLandingPage
    data={{
      city: "Marseille",
      citySlug: "marseille",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "13000",
      intro: "CyberSecure accompagne les entreprises marseillaises et provençales avec des audits de sécurité, pentests et réponse à incident. Port, logistique, tourisme et industrie : notre équipe intervient à Marseille et dans toute la région PACA.",
      localContext: "Marseille est le deuxième port de France et un hub logistique méditerranéen majeur. Les acteurs portuaires, les entreprises de logistique, les opérateurs de transport maritime et les PME locales sont exposés à des cybermenaces croissantes. La ville abrite aussi un tissu de startups numériques en forte croissance.",
      sectors: [
        "Logistique et port de Marseille",
        "Transport maritime et CMA CGM",
        "Tourisme et hôtellerie",
        "Industrie pétrochimique (Fos-sur-Mer)",
        "Santé (AP-HM, cliniques)",
        "Startups et French Tech Aix-Marseille",
      ],
      neighborhoods: [
        "Marseille Centre (1er-7e)",
        "Euroméditerranée et J4",
        "Aix-en-Provence et Vitrolles",
        "Fos-sur-Mer, Istres, Martigues",
        "Toulon, Avignon, Arles",
        "Toute la région PACA",
      ],
      faq: [
        {
          q: "Les opérateurs portuaires de Marseille sont-ils soumis à NIS2 ?",
          a: "Oui. Les opérateurs du Grand Port Maritime de Marseille sont des opérateurs de services essentiels (OSE) soumis à NIS2 dans le secteur des transports. Nous réalisons des audits de conformité NIS2 spécifiques au secteur portuaire.",
        },
        {
          q: "Comment protéger les systèmes de CMA CGM et ses sous-traitants ?",
          a: "Après la cyberattaque contre CMA CGM en 2020, la sécurité de la chaîne logistique maritime est devenue prioritaire. Nous proposons des audits de sécurité pour les prestataires et fournisseurs IT des grands groupes logistiques.",
        },
        {
          q: "Intervenez-vous à Marseille et dans la région PACA ?",
          a: "Oui. Nos consultants interviennent à Marseille, Aix-en-Provence, Toulon, Avignon, Nice et dans toute la région Provence-Alpes-Côte d'Azur. Intervention sur site sous 24h.",
        },
        {
          q: "Quel est le coût d'un audit de sécurité pour une PME marseillaise ?",
          a: "Un audit de sécurité organisationnel pour une PME de 20 à 100 salariés coûte entre 3 000 et 8 000 euros HT. Il inclut l'analyse des risques, l'évaluation des mesures en place et un plan de remédiation priorisé.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMarseille;
