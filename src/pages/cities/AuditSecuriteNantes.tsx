import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNantes = () => (
  <CityLandingPage
    data={{
      city: "Nantes",
      citySlug: "nantes",
      urlPath: "cybersecurite-nantes",
      region: "Pays de la Loire",
      postalCode: "44000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits de sécurité et pentests pour les PME, ETI et industriels nantais. Airbus, Naval Group, agroalimentaire, numérique et santé : nos experts protègent les entreprises de Nantes et des Pays de la Loire contre les cybermenaces ciblées.",
      localContext: "Nantes est un hub économique dynamique associant industrie navale (Naval Group, anciennement DCNS), construction aéronautique (Airbus), agroalimentaire (LU, coopératives bretonnes), une scène numérique active (Digital League) et des entreprises de santé innovantes. Les sous-traitants de Naval Group traitent des informations sensibles liées à la défense nationale et font l'objet d'exigences cybersécurité très strictes. Les ETI de l'agroalimentaire sont ciblées par des ransomwares qui peuvent paralyser des chaînes de production entières. CyberSecure intervient à Nantes, Saint-Nazaire, Carquefou, Saint-Herblain et dans toute la région Pays de la Loire.",
      sectors: [
        "Industrie navale et défense (Naval Group, STX)",
        "Aéronautique (Airbus, sous-traitants)",
        "Agroalimentaire (LU, Brossard, coopératives)",
        "Numérique et startups (French Tech Nantes)",
        "Santé et medtech",
        "Logistique et port de Nantes-Saint-Nazaire",
      ],
      neighborhoods: [
        "Nantes Centre et Île de Nantes",
        "Saint-Nazaire et estuaire de la Loire",
        "Carquefou, Rezé, Saint-Herblain",
        "La Roche-sur-Yon et Vendée",
        "Angers, Le Mans, Laval",
        "Toute la région Pays de la Loire",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une ETI nantaise de l'industrie navale ou de l'agroalimentaire ?",
          a: "Un pentest réseau pour une ETI nantaise de 100 à 500 salariés varie entre 10 000 et 25 000 € HT selon le périmètre. Pour les sous-traitants de Naval Group soumis à l'IGI 1300, un audit complet (réseau, AD, applications, conformité défense) est généralement compris entre 15 000 et 35 000 € HT. Un pentest web applicatif pour une PME numérique démarre à 4 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une entreprise à Nantes ?",
          a: "Un audit organisationnel pour une PME nantaise prend 2 à 4 jours. Un pentest réseau et applicatif complet pour une ETI nécessite 8 à 15 jours. Pour les sous-traitants de Naval Group ou d'Airbus avec des obligations de conformité spécifiques (IGI 1300, DO-178C pour l'avionique), la durée peut s'étendre à 3 à 6 semaines. Nous adaptons le planning à vos contraintes de production.",
        },
        {
          q: "Les sous-traitants de Naval Group à Nantes sont-ils soumis à des obligations cyber ?",
          a: "Oui. Les fournisseurs de Naval Group traitent des informations sensibles liées à la défense nationale et doivent respecter des exigences cybersécurité strictes (IGI 1300, RGS, politique cybersécurité Naval Group). Les systèmes traitant des informations classifiées ou sensibles Défense font l'objet d'exigences particulières. Nous vous accompagnons dans cette conformité avec des consultants disposant des habilitations nécessaires.",
        },
        {
          q: "Comment sécuriser les systèmes industriels d'une ETI agroalimentaire nantaise ?",
          a: "La sécurisation des OT (systèmes industriels) dans l'agroalimentaire passe par la segmentation IT/OT, l'inventaire des automates et capteurs connectés, la mise à jour des systèmes de supervision, la surveillance en temps réel et un plan de continuité d'activité testé. Nous réalisons des audits OT selon la norme IEC 62443 en tenant compte des contraintes de production continue et des pics saisonniers.",
        },
        {
          q: "Que faire si mon entreprise nantaise subit une cyberattaque ?",
          a: "Contactez notre CERT immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis et activez votre PCA si l'activité de production est impactée. Pour les sous-traitants de la défense, notifiez votre point de contact sécurité chez le donneur d'ordre. Nos experts CyberSecure peuvent être déployés à Nantes sous 4 heures pour contenir l'incident, préserver les preuves et coordonner la reprise d'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNantes;
