import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLille = () => (
  <CityLandingPage
    data={{
      city: "Lille",
      citySlug: "lille",
      urlPath: "cybersecurite-lille",
      region: "Hauts-de-France",
      postalCode: "59000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les ETI et grandes entreprises lilloises avec des audits de sécurité informatique et des pentests de haut niveau. EuraTechnologies, Décathlon, Leroy Merlin, CHU : nos experts protègent les entreprises de Lille et des Hauts-de-France contre les cyberattaques ciblées.",
      localContext: "Lille est la capitale des Hauts-de-France et le premier hub tech du nord avec EuraTechnologies (plus de 400 startups et PME numériques). La métropole lilloise abrite des géants du retail (Leroy Merlin, Decathlon, Auchan, La Redoute) qui gèrent des dizaines de millions de données clients, un hub logistique européen critique et le CHU de Lille. Ces acteurs B2C et B2B font face à des menaces croissantes : vol de données clients à grande échelle, attaques sur les systèmes WMS des entrepôts, ransomwares ciblant les ERP. CyberSecure intervient à Lille, Roubaix, Tourcoing, Villeneuve-d'Ascq et dans toute la région Hauts-de-France.",
      sectors: [
        "Retail et grande distribution (Auchan, Decathlon, Leroy Merlin)",
        "Logistique et transport européen",
        "Industrie textile et pharmaceutique",
        "Banque et assurance (Crédit Agricole Nord)",
        "Santé (CHU de Lille)",
        "Numérique et startups (EuraTechnologies)",
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
          q: "Quel est le prix d'un pentest pour une ETI lilloise du retail ou de la logistique ?",
          a: "Un pentest web e-commerce pour une enseigne retail lilloise démarre à 4 000 € HT pour une application. Un audit complet d'une ETI logistique couvrant WMS, réseau, Active Directory et applications varie entre 15 000 et 35 000 € HT. Un pentest Red Team simulant une attaque ciblée pour tester la résilience d'une grande enseigne est disponible à partir de 20 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une ETI lilloise ?",
          a: "Un pentest web prend 3 à 5 jours. Un pentest interne complet pour une ETI de 100 à 500 salariés nécessite 8 à 15 jours selon le périmètre. Nous démarrons les missions sous 5 à 10 jours ouvrés après signature. Pour les grandes enseignes retail avec des SI complexes, prévoir 3 à 6 semaines pour un audit complet multi-périmètre.",
        },
        {
          q: "Comment protéger les données clients des enseignes retail lilloises ?",
          a: "Les enseignes retail traitent des millions de données clients (RGPD). Un audit de sécurité e-commerce identifie les failles dans les applications web, les APIs de paiement (PCI DSS), les systèmes de fidélité et les interfaces partenaires. Nous réalisons également des simulations de phishing pour tester la vigilance des équipes IT et métier. Nos rapports incluent un plan de remédiation priorisé et des recommandations de gouvernance.",
        },
        {
          q: "Les entrepôts logistiques des Hauts-de-France sont-ils une cible ?",
          a: "Oui. Les systèmes WMS (gestion d'entrepôts) et les automates logistiques sont des cibles croissantes pour les ransomwares qui paralysent les flux de distribution. Un audit OT/IT permet de cartographier vos risques, de tester la segmentation entre systèmes de gestion et systèmes de convoyage, et de protéger votre continuité opérationnelle. Nous avons une expertise spécifique dans les entrepôts automatisés.",
        },
        {
          q: "Intervenez-vous à Lille et dans les Hauts-de-France ?",
          a: "Oui. Nos consultants interviennent à Lille, Roubaix, Tourcoing, Valenciennes, Douai, Arras, Dunkerque et dans toute la région Hauts-de-France. Nous intervenons aussi côté belge (Bruxelles, Gand) pour les entreprises transfrontalières. En cas de cyberattaque, notre CERT déploie une équipe à Lille sous 4 heures.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLille;
