import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteClermontFerrand = () => (
  <CityLandingPage
    data={{
      city: "Clermont-Ferrand",
      citySlug: "clermont-ferrand",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "63000",
      intro: "CyberSecure accompagne les entreprises clermontoises et auvergnates avec des audits de sécurité et pentests. Michelin, sous-traitants, santé et PME industrielles : nos experts protègent les entreprises de Clermont-Ferrand et de toute l'Auvergne.",
      localContext: "Clermont-Ferrand est dominée par Michelin et son écosystème de sous-traitants industriels. Les entreprises du pneumatique, les équipementiers automobiles et les PME industrielles auvergnates doivent protéger leurs systèmes de production (OT) et leurs données commerciales contre des attaques de plus en plus sophistiquées visant la chaîne d'approvisionnement automobile.",
      sectors: [
        "Industrie du pneumatique (Michelin et sous-traitants)",
        "Équipementiers automobiles",
        "Santé (CHU de Clermont, thermalisme)",
        "Agroalimentaire auvergnat",
        "Tourisme et volcanisme (Vulcania)",
        "PME industrielles et artisanat",
      ],
      neighborhoods: [
        "Clermont-Ferrand Centre",
        "Cournon-d'Auvergne, Aubière",
        "Vichy, Thiers, Issoire",
        "Riom, Ambert",
        "Le Puy-en-Velay, Aurillac",
        "Toute la région Auvergne",
      ],
      faq: [
        {
          q: "Les sous-traitants de Michelin sont-ils des cibles cybersécurité prioritaires ?",
          a: "Oui. Les fournisseurs critiques de Michelin sont des portes d'entrée potentielles pour attaquer le groupe principal (attaque de la chaîne d'approvisionnement). Michelin impose des exigences cybersécurité croissantes à ses fournisseurs que nous vous aidons à satisfaire.",
        },
        {
          q: "Comment réaliser un audit OT pour une PME industrielle auvergnate ?",
          a: "Notre audit OT/IT pour PME industrielle comprend l'inventaire des équipements connectés, l'analyse de la segmentation réseau, le test des interfaces HMI et SCADA, et un plan de remédiation priorisé. Durée : 3 à 5 jours.",
        },
        {
          q: "Intervenez-vous à Clermont-Ferrand et en Auvergne ?",
          a: "Oui. Nous intervenons à Clermont-Ferrand, Vichy, Thiers, Riom et dans toute la région Auvergne. Nos consultants se déplacent sur site pour les audits.",
        },
        {
          q: "Combien coûte un pentest pour une PME de 50 salariés à Clermont-Ferrand ?",
          a: "Un pentest web (1 application) pour une PME de 50 salariés coûte entre 3 500 et 6 000 euros HT. Un test d'intrusion réseau interne varie entre 5 000 et 10 000 euros. Devis gratuit et sans engagement sous 48h.",
        },
      ],
    }}
  />
);

export default AuditSecuriteClermontFerrand;
