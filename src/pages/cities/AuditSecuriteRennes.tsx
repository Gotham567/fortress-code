import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteRennes = () => (
  <CityLandingPage
    data={{
      city: "Rennes",
      citySlug: "rennes",
      urlPath: "cybersecurite-rennes",
      region: "Bretagne",
      postalCode: "35000",
      intro: "CyberSecure accompagne les entreprises rennaises et bretonnes avec des audits de sécurité et pentests. Défense, télécoms, agroalimentaire et numérique : nos experts protègent les entreprises de Rennes et de toute la Bretagne.",
      localContext: "Rennes est un pôle numérique majeur avec des acteurs de la défense (DGA, Naval Group), des télécoms (Orange Labs), un secteur agroalimentaire breton très développé et une scène tech dynamique. La présence militaire et de défense sur le territoire crée des enjeux de cybersécurité spécifiques liés à la protection du secret.",
      sectors: [
        "Défense et industrie navale (DGA, Naval Group)",
        "Télécommunications (Orange, Bouygues)",
        "Agroalimentaire breton (Lactalis, Roullier)",
        "Numérique et ESN",
        "Santé (CHU de Rennes)",
        "Collectivités et administrations",
      ],
      neighborhoods: [
        "Rennes Centre et Villejean",
        "Cesson-Sévigné et Chantepie",
        "Saint-Malo, Dinard, Fougères",
        "Brest, Lorient, Quimper",
        "Vannes, Saint-Brieuc",
        "Toute la Bretagne",
      ],
      faq: [
        {
          q: "Avez-vous des habilitations pour intervenir chez des clients défense à Rennes ?",
          a: "Nos consultants disposent des habilitations nécessaires pour intervenir dans des environnements classifiés. Nous maîtrisons les exigences IGI 1300 et les procédures de sécurité des systèmes d'information classifiés.",
        },
        {
          q: "Comment sécuriser une coopérative agroalimentaire bretonne ?",
          a: "Les coopératives agroalimentaires gèrent des systèmes de production industrielle (OT), des chaînes logistiques complexes et des données commerciales sensibles. Nous proposons des audits adaptés combinant sécurité IT et OT.",
        },
        {
          q: "Intervenez-vous à Rennes et dans toute la Bretagne ?",
          a: "Oui. Nos consultants couvrent Rennes, Saint-Malo, Brest, Lorient, Quimper, Vannes et toute la région Bretagne. Délai d'intervention sous 48h sur site.",
        },
        {
          q: "Quel pentest pour une entreprise de télécommunications à Rennes ?",
          a: "Pour les opérateurs télécoms, nous réalisons des pentests spécialisés : infrastructure réseau, signalisation SS7/Diameter, API exposées, et revue de l'architecture de sécurité conformément aux guides ANSSI TELCO.",
        },
      ],
    }}
  />
);

export default AuditSecuriteRennes;
