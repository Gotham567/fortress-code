import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuritePerigueux = () => (
  <CityLandingPage
    data={{
      city: "Périgueux",
      citySlug: "perigueux",
      region: "Nouvelle-Aquitaine",
      postalCode: "24000",
      intro: "CyberSecure accompagne les PME et ETI de Périgueux avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs gastronomique, touristique, artisanal et des PME locales en Dordogne. Notre cabinet qualifié PASSI ANSSI intervient sur site à Périgueux pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises périgordines.",
      localContext: "Périgueux est la capitale du Périgord et de la gastronomie française (foie gras, truffes, noix) avec un tissu de PME agroalimentaires et d'artisans producteurs dont les systèmes de vente en ligne, les données clients et les marques constituent des actifs précieux exposés aux cybermenaces. Le tourisme des grottes préhistoriques (Lascaux IV), des châteaux de la vallée de la Dordogne et des bastides attire plusieurs millions de visiteurs dont les données de réservation et de paiement doivent être sécurisées. Les PME artisanales périgordines (foie gras, confits, vins de Bergerac) développent leur commerce en ligne dans un contexte de cybermenaces croissantes. Le CH de Périgueux et les établissements de santé de Dordogne font face aux cyberattaques.",
      sectors: [
        "Agroalimentaire et gastronomie (foie gras, truffes, noix)",
        "Tourisme patrimonial et préhistorique (Lascaux, vallée Dordogne)",
        "Viticulture (Bergerac, Monbazillac, Pécharmant)",
        "PME artisanales et commerce en ligne",
        "Santé (CH Périgueux, cliniques Dordogne)",
        "Collectivités et Grand Périgueux",
      ],
      neighborhoods: [
        "Centre-ville historique et quartier Saint-Front",
        "Zone industrielle de Périgueux (Boulazac)",
        "Boulazac Isle Manoire et zones commerciales",
        "Marsac-sur-l'Isle et zones d'activités nord",
        "Bergerac et Périgord Pourpre (viticulture)",
        "Sarlat et Périgord Noir (tourisme, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un producteur de foie gras ou une PME gastronomique à Périgueux ?",
          a: "Un audit de sécurité adapté aux PME gastronomiques et agroalimentaires de Périgueux démarre à 3 500 € HT pour un périmètre limité (site e-commerce, ERP simple). Pour une PME de foie gras avec des circuits de distribution nationaux et internationaux et un SI plus complexe, le budget d'un audit réseau et sécurité complet se situe entre 5 000 et 10 000 € HT. CyberSecure propose des offres modulaires adaptées aux PME artisanales. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau PME à Périgueux ?",
          a: "Un audit réseau pour une PME périgourdie dure 3 à 5 jours ouvrés. Pour une ETI avec plusieurs sites ou des systèmes e-commerce complexes, comptez 5 à 8 jours. L'audit Active Directory seul est réalisable en 1 à 2 jours. CyberSecure peut intervenir sous 72h pour les urgences à Périgueux.",
        },
        {
          q: "Comment sécuriser une boutique en ligne de produits gastronomiques périgourdins contre la fraude et les attaques ?",
          a: "Les boutiques en ligne de produits gastronomiques (foie gras, truffes, vins) manipulent des données bancaires de clients en France et à l'international. CyberSecure réalise des audits des plateformes e-commerce incluant les tests d'injection SQL, de XSS, de fraude aux paiements et la conformité PCI-DSS pour les systèmes de paiement en ligne. Nous vérifions également la conformité RGPD pour les données clients et les pratiques de conservation des données bancaires. Un certificat SSL valide, un WAF et un suivi des anomalies de commandes sont nos recommandations de base.",
        },
        {
          q: "CyberSecure intervient-il sur site à Périgueux et en Dordogne ?",
          a: "Oui, nos consultants se déplacent à Périgueux, Bergerac, Sarlat, Ribérac, Nontron et dans tout le département de la Dordogne. Nous couvrons également la Gironde (Bordeaux) et la Corrèze (Brive) pour les groupes avec des sites dans plusieurs départements de Nouvelle-Aquitaine. Déploiement sous 72h à Périgueux.",
        },
        {
          q: "Que faire en cas de cyberattaque à Périgueux — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Notre équipe peut être déployée sur site à Périgueux dans les 4 à 6 heures. Pour les PME sans équipe informatique interne, nous proposons une assistance téléphonique pour les premières actions de confinement. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuritePerigueux;
