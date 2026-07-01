import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLyon = () => (
  <CityLandingPage
    data={{
      city: "Lyon",
      citySlug: "lyon",
      urlPath: "cybersecurite-lyon",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "69000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits de sécurité OT/IT et des pentests pour les ETI industrielles et pharmaceutiques de Lyon. Sanofi, Crédit Agricole, biotech et PME lyonnaises : nos experts interviennent à Lyon, Villeurbanne et dans toute la métropole pour évaluer et renforcer votre cybersécurité.",
      localContext: "Lyon est le deuxième pôle économique français avec un tissu industriel dense (chimie, pharma, textile), un secteur santé majeur (CHU, Sanofi, biotech du Biopôle) et une scène numérique en pleine croissance (French Tech Lyon-Saint-Étienne). Les ETI industrielles lyonnaises sont particulièrement ciblées par les APT et les ransomwares visant les systèmes OT/IT. La convergence IT/OT dans les usines chimiques et pharmaceutiques crée de nouvelles surfaces d'attaque à fort impact potentiel. CyberSecure intervient à Lyon, Villeurbanne, Bron, Vénissieux et dans toute la métropole lyonnaise.",
      sectors: [
        "Industrie chimique et pharmaceutique (Sanofi, Boehringer)",
        "Santé et biotechnologies (CHU, Biopôle, bioMérieux)",
        "Banque et finance (Crédit Agricole, Société Générale)",
        "Numérique et ESN (French Tech Lyon)",
        "Agroalimentaire (Andros, Fleury Michon)",
        "PME industrielles et sous-traitants",
      ],
      neighborhoods: [
        "Lyon Part-Dieu et Confluence",
        "Villeurbanne et Vaulx-en-Velin",
        "Bron, Caluire, Ecully",
        "Vénissieux et Saint-Priest (industrie)",
        "Saint-Etienne et Loire",
        "Toute la région Auvergne-Rhône-Alpes",
      ],
      faq: [
        {
          q: "Proposez-vous des audits OT/IT pour les industriels lyonnais ?",
          a: "Oui. Nous réalisons des audits de sécurité des systèmes industriels (SCADA, automates Siemens, Schneider, Rockwell) selon les normes IEC 62443 et les guides ANSSI pour les systèmes industriels. Notre audit couvre l'inventaire des actifs OT, la segmentation IT/OT, le test des interfaces HMI et des protocoles industriels, et un plan de remédiation priorisé. Nous intervenons sans impacter la continuité de production grâce à des méthodologies passives non intrusives.",
        },
        {
          q: "Combien de temps dure un pentest pour une ETI lyonnaise ?",
          a: "Pour une ETI de 100 à 500 salariés, un pentest complet (réseau, web, Active Directory) prend généralement 10 à 15 jours. Un pentest OT/IT pour une usine chimique ou pharmaceutique nécessite 12 à 20 jours compte tenu des systèmes spécifiques à auditer. Nous remettons un rapport exécutif pour la direction et un rapport technique détaillé pour les équipes IT avec un plan de remédiation priorisé.",
        },
        {
          q: "Comment tester la sécurité des accès distants pour une pharmacie ou un laboratoire lyonnais ?",
          a: "Les accès distants sont le principal vecteur d'attaque des ETI industrielles. Notre pentest des accès distants couvre l'audit VPN (configuration, authentification MFA, politiques d'accès), le test des solutions de bureau à distance (RDP, Citrix), la revue des comptes de prestataires de maintenance et le test des interfaces web de supervision industrielle. Nous évaluons également la robustesse des protocoles d'authentification et la gestion des sessions.",
        },
        {
          q: "Intervenez-vous à Lyon et dans la région Auvergne-Rhône-Alpes ?",
          a: "Oui. Nos consultants interviennent à Lyon, Villeurbanne, Bron, Vénissieux, Saint-Priest, Grenoble, Chambéry, Valence, Saint-Étienne et dans toute la région Auvergne-Rhône-Alpes. Nous assurons une réponse à incident sous 24h à Lyon et dans la métropole. Pour les ETI avec plusieurs sites, nous organisons des interventions mutualisées pour optimiser les coûts.",
        },
        {
          q: "Que faire en cas de cyberattaque contre une ETI lyonnaise ?",
          a: "Contactez immédiatement notre cellule CERT (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau sans les éteindre. Si l'attaque touche les systèmes OT, activez votre plan de continuité et isolez le réseau industriel du réseau IT. Ne payez pas de rançon sans avis d'expert. Signalez l'incident à l'ANSSI et à la CNIL (sous 72h si des données personnelles sont impliquées). CyberSecure déploie une équipe à Lyon sous 4 heures.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLyon;
