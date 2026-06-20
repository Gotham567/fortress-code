import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNantes = () => (
  <CityLandingPage
    data={{
      city: "Nantes",
      citySlug: "nantes",
      region: "Pays de la Loire",
      postalCode: "44000",
      intro: "CyberSecure réalise des audits de sécurité et pentests pour les entreprises nantaises. Industrie navale, agroalimentaire, numérique et santé : nos experts protègent les ETI et PME de Nantes et des Pays de la Loire contre les cybermenaces.",
      localContext: "Nantes est un hub économique dynamique avec une industrie navale (Naval Group, Airbus), un secteur agroalimentaire important, une scène numérique active et des entreprises de santé innovantes. La métropole nantaise concentre des ETI et des PME industrielles qui sont de plus en plus ciblées par les ransomwares.",
      sectors: [
        "Industrie navale (Naval Group, STX)",
        "Agroalimentaire (LU, Brossard)",
        "Numérique et ESN",
        "Santé et medtech",
        "Logistique et transport",
        "Startups et French Tech Nantes",
      ],
      neighborhoods: [
        "Nantes Centre et Île de Nantes",
        "Saint-Nazaire et estuaire",
        "Reze, Carquefou, Saint-Herblain",
        "La Roche-sur-Yon, Le Mans, Angers",
        "Saint-Nazaire, Cholet",
        "Toute la région Pays de la Loire",
      ],
      faq: [
        {
          q: "Les sous-traitants de Naval Group à Nantes sont-ils soumis à des obligations cyber ?",
          a: "Oui. Les fournisseurs de Naval Group traitent des informations sensibles liées à la défense nationale et doivent respecter des exigences cybersécurité strictes (IGI 1300, RGS). Nous vous accompagnons dans cette conformité.",
        },
        {
          q: "Comment sécuriser les systèmes industriels d'une ETI nantaise ?",
          a: "La sécurisation des OT (systèmes industriels) passe par la segmentation IT/OT, l'inventaire des actifs, la mise à jour des systèmes et la surveillance en temps réel. Nous réalisons des audits OT selon la norme IEC 62443.",
        },
        {
          q: "Intervenez-vous à Nantes et dans les Pays de la Loire ?",
          a: "Oui. Nous intervenons à Nantes, Saint-Nazaire, Angers, La Roche-sur-Yon, Le Mans et dans toute la région Pays de la Loire. Déplacement sur site possible sous 48h.",
        },
        {
          q: "Quel accompagnement pour une startup nantaise en croissance ?",
          a: "Nous proposons des audits de sécurité adaptés aux startups : évaluation rapide (Quick Scan), test d'intrusion de l'application principale et accompagnement RGPD. Tarif adapté aux structures en croissance.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNantes;
