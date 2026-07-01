import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNice = () => (
  <CityLandingPage
    data={{
      city: "Nice",
      citySlug: "nice",
      urlPath: "cybersecurite-nice",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits de sécurité informatique et des pentests pour les entreprises de Nice, Sophia Antipolis et la Côte d'Azur. Tourisme, hôtellerie, santé et tech : nos experts protègent les entreprises niçoises et les acteurs de la Riviera contre les cybermenaces.",
      localContext: "Nice et la Côte d'Azur concentrent des enjeux cybersécurité uniques : un tissu de PME touristiques gérant des données bancaires sensibles, des entreprises tech dynamiques à Sophia Antipolis, un secteur santé exposé (CHU de Nice, Pasteur), une clientèle internationale haut de gamme et des entreprises monégasques réglementées. La cyberattaque contre la Ville de Nice et le CHU Pasteur illustrent la vulnérabilité du territoire niçois. CyberSecure intervient à Nice, Cannes, Antibes, Sophia Antipolis, Menton et dans tout le département des Alpes-Maritimes.",
      sectors: [
        "Tourisme, hôtellerie de luxe et casinos",
        "Santé (CHU de Nice, cliniques privées)",
        "Technologie et startups (Sophia Antipolis)",
        "Finance, gestion de patrimoine et family offices",
        "Immobilier de luxe et promotion",
        "Entreprises monégasques et transfrontalières",
      ],
      neighborhoods: [
        "Nice Centre et Promenade des Anglais",
        "Nice Méridia et technopole",
        "Sophia Antipolis et Valbonne",
        "Cannes, Antibes, Juan-les-Pins",
        "Menton, Monaco (frontaliers)",
        "Toute la Côte d'Azur et Alpes-Maritimes",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une entreprise à Nice ou sur la Côte d'Azur ?",
          a: "Un pentest web pour une PME niçoise démarre à 4 000 € HT pour une application. Pour un hôtel de luxe ou un établissement touristique avec système PMS et paiement en ligne, un audit complet varie entre 8 000 et 18 000 € HT. Un pentest pour une entreprise tech de Sophia Antipolis (API, infrastructure cloud, application SaaS) est généralement compris entre 6 000 et 20 000 € HT. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une entreprise niçoise ?",
          a: "Un audit rapide pour une TPE ou PME de Nice prend 2 à 4 jours. Un audit complet pour une ETI du tourisme ou de la tech couvre le réseau, les applications, les accès distants et la gestion des données clients et prend 7 à 15 jours. Pour les établissements de santé du CHU de Nice, nous planifions des interventions adaptées aux contraintes de continuité des soins.",
        },
        {
          q: "Comment sécuriser un hôtel ou un casino de luxe sur la Côte d'Azur ?",
          a: "Les établissements touristiques et les casinos gèrent des données bancaires (conformité PCI DSS obligatoire) et des données personnelles de clients UHNWI à haut risque. Notre pentest hôtelier couvre l'audit du PMS (Property Management System), des terminaux de paiement, du Wi-Fi clients, des interfaces de réservation en ligne et des accès distants du personnel. Nous vérifions aussi la conformité PCI DSS et RGPD, avec des recommandations pragmatiques adaptées à votre organisation.",
        },
        {
          q: "Intervenez-vous à Nice, Monaco et sur la Côte d'Azur ?",
          a: "Oui. Nous intervenons à Nice, Cannes, Antibes, Sophia Antipolis, Monaco, Menton, Cagnes-sur-Mer, Grasse et dans tout le département des Alpes-Maritimes. Pour les entreprises monégasques, nous maîtrisons les exigences de la CCIN (Commission de Contrôle des Informations Nominatives) en plus du RGPD européen. Déplacement sur site possible sous 48h sur toute la Riviera.",
        },
        {
          q: "Que faire si mon entreprise niçoise ou de la Côte d'Azur subit une cyberattaque ?",
          a: "Contactez notre CERT immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau sans les éteindre. Si votre système de paiement est impliqué, bloquez-le immédiatement et contactez votre banque acquéreur. Signalez l'incident à la CNIL dans les 72 heures si des données personnelles sont exposées. Nos experts CyberSecure peuvent être déployés rapidement à Nice pour contenir l'attaque et accompagner la reprise d'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNice;
