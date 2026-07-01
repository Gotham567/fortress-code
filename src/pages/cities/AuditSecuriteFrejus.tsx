import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteFrejus = () => (
  <CityLandingPage
    data={{
      city: "Fréjus",
      citySlug: "frejus",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "83600",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les PME, artisans et acteurs du tourisme de Fréjus et Saint-Raphaël avec des audits de sécurité et des pentests adaptés à leurs besoins. Tourisme balnéaire, BTP et commerce côtier varois : nos experts sécurisent vos systèmes d'information sur tout le littoral du Var.",
      localContext: "Fréjus et l'agglomération Fréjus-Saint-Raphaël constituent un bassin économique varois dynamique porté par le tourisme balnéaire, le BTP, l'artisanat et le commerce de proximité. Ces entreprises, souvent des TPE et PME, gèrent des données clients et des paiements en ligne qui en font des cibles opportunistes pour les cybercriminels. Les pics d'activité estivaux et la dépendance aux systèmes de réservation et de point de vente créent des vulnérabilités spécifiques. CyberSecure intervient à Fréjus, Saint-Raphaël, Puget-sur-Argens, Sainte-Maxime et dans tout le Var côtier.",
      sectors: [
        "Tourisme balnéaire et hôtellerie",
        "BTP et construction immobilière",
        "Commerce de proximité et restauration",
        "Artisanat et services à la personne",
        "Santé et cabinets médicaux",
        "Collectivités et administrations locales",
      ],
      neighborhoods: [
        "Fréjus Centre et plages",
        "Saint-Raphaël et Valescure",
        "Puget-sur-Argens",
        "Les Issambres et Roquebrune-sur-Argens",
        "Sainte-Maxime et Grimaud",
        "Tout le Var côtier",
      ],
      faq: [
        {
          q: "Quel est le tarif d'un audit de sécurité pour une PME à Fréjus ?",
          a: "Un audit de sécurité ciblé pour une PME de Fréjus démarre à 3 000 € HT pour 2 jours couvrant les risques prioritaires (messagerie, accès distants, sauvegardes). Un pentest web pour un site de réservation ou e-commerce varie entre 4 000 et 8 000 € HT. Un audit réseau complet pour une TPE ou PME de 10 à 50 salariés est généralement compris entre 5 000 et 12 000 € HT. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit cybersécurité pour une entreprise touristique à Fréjus ?",
          a: "Un audit rapide de 2 jours pour un hôtel ou une agence touristique de Fréjus couvre les points critiques : sécurité Wi-Fi clients, systèmes de réservation, paiement en ligne et messagerie. Un audit plus complet pour un groupe hôtelier avec plusieurs établissements nécessite 5 à 10 jours. Nous planifions l'intervention en basse saison pour ne pas perturber votre activité.",
        },
        {
          q: "Comment sécuriser un site de réservation ou un système de paiement pour un acteur du tourisme varois ?",
          a: "La sécurisation des systèmes e-commerce et de réservation touristique passe par un pentest applicatif complet : test des injections SQL et XSS, audit de la gestion des sessions, vérification de la conformité PCI DSS pour les paiements par carte, et test des API de réservation. Nous vérifions également la sécurité des interfaces avec les OTAs (Booking, Airbnb) et les partenaires. Les recommandations sont priorisées selon leur criticité et leur facilité de mise en œuvre.",
        },
        {
          q: "Intervenez-vous sur site à Fréjus, Saint-Raphaël et dans le Var ?",
          a: "Oui. Nos consultants se déplacent sur site à Fréjus, Saint-Raphaël, Sainte-Maxime, Puget-sur-Argens, Draguignan, Toulon et dans tout le département du Var. Nous couvrons également les Alpes-Maritimes et le Var intérieur pour les missions régionales. Les audits à distance sont disponibles pour les missions qui s'y prêtent (revue de configuration, audit de code, questionnaire organisationnel).",
        },
        {
          q: "Que faire en cas de cyberattaque contre mon commerce ou hôtel à Fréjus ?",
          a: "Appelez immédiatement notre ligne CERT (disponible 24h/24, 7j/7). Isolez les systèmes compromis en débranchant le câble réseau ou en désactivant le Wi-Fi. Si votre système de paiement est compromis, bloquez-le immédiatement et contactez votre banque acquéreur. Si des données personnelles clients (noms, emails, données bancaires) ont été exposées, notifiez la CNIL dans les 72 heures. Nos experts CyberSecure peuvent intervenir à Fréjus pour contenir l'attaque et vous aider à reprendre l'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteFrejus;
