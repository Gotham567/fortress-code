import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLille = () => (
  <CityLandingPage
    data={{
      city: "Lille",
      citySlug: "lille",
      region: "Hauts-de-France",
      postalCode: "59000",
      intro: "CyberSecure accompagne les entreprises lilloises et nordistes avec des audits de sécurité et pentests professionnels. Retail, logistique et industrie : nos experts protègent les entreprises de Lille et des Hauts-de-France contre les cyberattaques.",
      localContext: "Lille est la capitale des Hauts-de-France et un centre commercial et logistique majeur. La métropole lilloise abrite des géants du retail (Leroy Merlin, Decathlon, Auchan, La Redoute), une industrie textile et pharmaceutique et un hub logistique européen. Ces acteurs B2C et B2B gèrent des volumes massifs de données clients sensibles.",
      sectors: [
        "Retail et grande distribution (Auchan, Decathlon)",
        "Logistique et transport (Europorte)",
        "Industrie textile et pharmaceutique",
        "Banque et assurance (Crédit Agricole Nord)",
        "Santé (CHU de Lille)",
        "PME et ETI industrielles",
      ],
      neighborhoods: [
        "Lille Centre et Euralille",
        "Villeneuve-d'Ascq et Lezennes",
        "Roubaix, Tourcoing, Croix",
        "Valenciennes, Douai, Arras",
        "Dunkerque, Calais, Boulogne",
        "Toute la région Hauts-de-France",
      ],
      faq: [
        {
          q: "Comment protéger les données clients des enseignes retail lilloises ?",
          a: "Les enseignes retail traitent des millions de données clients (RGPD). Un audit de sécurité e-commerce + un pentest de votre site web identifient les failles avant qu'elles ne soient exploitées. Nous avons une expertise spécifique retail/e-commerce.",
        },
        {
          q: "Les entrepôts logistiques des Hauts-de-France sont-ils une cible ?",
          a: "Oui. Les systèmes WMS (gestion d'entrepôts) et les automates logistiques sont des cibles croissantes pour les ransomwares. Un audit OT/IT permet de cartographier vos risques et de protéger votre continuité opérationnelle.",
        },
        {
          q: "Intervenez-vous à Lille et dans les Hauts-de-France ?",
          a: "Oui. Nos consultants interviennent à Lille, Roubaix, Tourcoing, Valenciennes, Douai, Dunkerque et dans toute la région Hauts-de-France. Nous intervenons aussi en Belgique pour les entreprises transfrontalières.",
        },
        {
          q: "Quel délai pour un pentest à Lille ?",
          a: "Nous démarrons les missions sous 5 à 10 jours ouvrés après signature. Un pentest web prend 3 à 5 jours. Un pentest interne complet prend 5 à 10 jours selon le périmètre.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLille;
