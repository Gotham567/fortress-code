import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteRouen = () => (
  <CityLandingPage
    data={{
      city: "Rouen",
      citySlug: "rouen",
      urlPath: "cybersecurite-rouen",
      region: "Normandie",
      postalCode: "76000",
      intro: "CyberSecure accompagne les entreprises rouennaises et normandes avec des audits de sécurité et pentests industriels. Chimie, logistique, agroalimentaire et santé : nos experts interviennent à Rouen, Le Havre et dans toute la Normandie.",
      localContext: "Rouen est la capitale de la Normandie et un pôle industriel majeur avec son port fluvial, sa zone pétrochimique et chimique (après l'incident Lubrizol 2019) et son tissu d'ETI industrielles. La région Normandie est aussi un hub logistique (port du Havre) et agricole qui doit renforcer sa résilience face aux cyberattaques sur les systèmes OT.",
      sectors: [
        "Industrie chimique et pétrolière",
        "Logistique et port du Havre",
        "Agroalimentaire normand",
        "Santé (CHU de Rouen)",
        "Automobile et équipementiers",
        "PME industrielles et artisanat",
      ],
      neighborhoods: [
        "Rouen Centre et rive droite",
        "Petit-Quevilly et Grand-Couronne",
        "Le Havre et port",
        "Caen, Cherbourg, Évreux",
        "Dieppe, Fécamp",
        "Toute la Normandie",
      ],
      faq: [
        {
          q: "Comment éviter une cyberattaque sur un site industriel comme Lubrizol à Rouen ?",
          a: "La protection des sites industriels passe par la segmentation IT/OT, la mise à jour des systèmes, la surveillance en temps réel (SOC OT) et un plan de réponse aux incidents testé régulièrement. Notre audit OT/IT identifie vos vulnérabilités avant qu'elles ne soient exploitées.",
        },
        {
          q: "Les opérateurs portuaires du Havre doivent-ils se conformer à NIS2 ?",
          a: "Oui. Les opérateurs du Grand Port Maritime du Havre sont soumis à NIS2 (secteur transports). Nous réalisons des audits de conformité NIS2 et des tests d'intrusion adaptés aux systèmes portuaires.",
        },
        {
          q: "Intervenez-vous en Normandie ?",
          a: "Oui. Nos consultants interviennent à Rouen, Le Havre, Caen, Cherbourg, Évreux et dans toute la région Normandie. Réponse à incident sous 24h.",
        },
        {
          q: "Quel pentest pour une ETI industrielle normande ?",
          a: "Pour les ETI industrielles normandes, nous proposons des pentests combinés IT/OT : test d'intrusion réseau, audit Active Directory, test de rebond vers les automates et évaluation de la segmentation IT/OT. Devis gratuit sous 48h.",
        },
      ],
    }}
  />
);

export default AuditSecuriteRouen;
