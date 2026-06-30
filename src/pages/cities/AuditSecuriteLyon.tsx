import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLyon = () => (
  <CityLandingPage
    data={{
      city: "Lyon",
      citySlug: "lyon",
      urlPath: "cybersecurite-lyon",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "69000",
      intro: "CyberSecure réalise des audits de sécurité et pentests pour les entreprises lyonnaises. Industrie, santé, finance : nos experts interviennent à Lyon, Villeurbanne et dans toute la métropole pour évaluer et renforcer votre cybersécurité.",
      localContext: "Lyon est le deuxième pôle économique français avec un tissu industriel dense (chimie, pharma, textile), un secteur santé majeur (CHU, biotech) et une scène numérique en pleine croissance. Les ETI industrielles lyonnaises sont particulièrement ciblées par les APT et les ransomwares visant les systèmes OT/IT.",
      sectors: [
        "Industrie chimique et pharmaceutique",
        "Santé et biotechnologies (CHU, Sanofi)",
        "Banque et finance (Crédit Agricole)",
        "Numérique et ESN",
        "Agro-alimentaire",
        "PME industrielles et sous-traitants",
      ],
      neighborhoods: [
        "Lyon Part-Dieu et Confluence",
        "Villeurbanne et Vaulx-en-Velin",
        "Bron, Caluire, Ecully",
        "Grenoble, Chambéry, Valence",
        "Saint-Etienne et Loire",
        "Toute la région Auvergne-Rhône-Alpes",
      ],
      faq: [
        {
          q: "Proposez-vous des audits OT/IT pour les industriels lyonnais ?",
          a: "Oui. Nous réalisons des audits de sécurité des systèmes industriels (SCADA, automates Siemens, Schneider) selon les normes IEC 62443 et les guides ANSSI, en tenant compte des contraintes de continuité de production.",
        },
        {
          q: "Combien de temps dure un pentest pour une ETI lyonnaise ?",
          a: "Pour une ETI de 100 à 500 employés, un pentest complet (réseau, web, AD) prend généralement 10 à 15 jours. Nous remettons un rapport exécutif et technique avec un plan de remédiation priorisé.",
        },
        {
          q: "Intervenez-vous à Lyon et dans la région Auvergne-Rhône-Alpes ?",
          a: "Oui. Nos consultants interviennent à Lyon, Villeurbanne, Bron, Grenoble, Chambéry, Valence et dans toute la région. Réponse à incident sous 24h.",
        },
        {
          q: "Comment détecter une intrusion sur mon réseau d'entreprise lyonnais ?",
          a: "La mise en place d'un EDR (Endpoint Detection and Response) et d'une surveillance réseau (NDR/SIEM) permet de détecter les intrusions en temps réel. Nous proposons des solutions managées adaptées aux PME et ETI lyonnaises.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLyon;
