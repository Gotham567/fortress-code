import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNice = () => (
  <CityLandingPage
    data={{
      city: "Nice",
      citySlug: "nice",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06000",
      intro: "CyberSecure réalise des audits de sécurité et pentests pour les entreprises niçoises et la Côte d'Azur. Tourisme, hôtellerie, santé et tech : nos experts protègent les entreprises de Nice, Monaco et de toute la Riviera.",
      localContext: "Nice et la Côte d'Azur concentrent des enjeux cybersécurité uniques : un tissu de PME touristiques, des entreprises monégasques réglementées, des acteurs de la santé (CHU de Nice) et un écosystème tech dynamique (Sophia Antipolis). La cyberattaque contre la Ville de Nice et le CHU Pasteur illustrent la vulnérabilité du territoire.",
      sectors: [
        "Tourisme, hôtellerie et casinos",
        "Santé (CHU de Nice, Pasteur)",
        "Technologie et startups (Sophia Antipolis)",
        "Finance et gestion de patrimoine",
        "Immobilier de luxe",
        "Entreprises monégasques",
      ],
      neighborhoods: [
        "Nice Centre et Promenade",
        "Sophia Antipolis et Valbonne",
        "Cannes, Antibes, Juan-les-Pins",
        "Menton, Monaco (frontaliers)",
        "Grasse, Cagnes-sur-Mer",
        "Toute la Côte d'Azur",
      ],
      faq: [
        {
          q: "Comment sécuriser un hôtel ou un casino sur la Côte d'Azur ?",
          a: "Les établissements touristiques gèrent des données bancaires (PCI DSS) et des données personnelles clients à haut risque. Nous réalisons des audits PCI DSS, des tests d'intrusion sur les systèmes de réservation et de point de vente.",
        },
        {
          q: "Les entreprises de Sophia Antipolis ont-elles des besoins spécifiques ?",
          a: "Les entreprises tech et R&D de Sophia Antipolis traitent des données sensibles (propriété intellectuelle, secrets industriels). Un test d'intrusion complet et un audit de sécurité du SI identifient les risques de fuite de données.",
        },
        {
          q: "Intervenez-vous à Nice, Monaco et sur la Côte d'Azur ?",
          a: "Oui. Nous intervenons à Nice, Cannes, Antibes, Monaco, Menton, Sophia Antipolis et dans tout le département des Alpes-Maritimes. Déplacement sur site possible sous 48h.",
        },
        {
          q: "Proposez-vous des audits pour les entreprises monégasques ?",
          a: "Oui. Nous accompagnons les entreprises monégasques soumises à la CCIN (Commission de Contrôle des Informations Nominatives) et au droit monégasque de la protection des données, en complément du RGPD européen.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNice;
