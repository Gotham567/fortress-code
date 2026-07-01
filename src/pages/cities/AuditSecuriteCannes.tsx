import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCannes = () => (
  <CityLandingPage
    data={{
      city: "Cannes",
      citySlug: "cannes",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06400",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les entreprises du luxe, de l'événementiel et de l'hôtellerie à Cannes avec des audits de sécurité et des pentests sur mesure. MIPIM, Festival de Cannes, Palme d'Or : la ville des grands événements concentre des données ultra-sensibles que nos experts sécurisent tout au long de l'année.",
      localContext: "Cannes est mondialement connue pour ses festivals et marchés professionnels (MIPIM, MIPTV, MIDEM, Festival du Film) qui rassemblent chaque année des milliers d'entreprises du luxe, de l'immobilier, du divertissement et de la technologie. Ces événements génèrent des flux considérables de données sensibles (contrats, bases de contacts, données financières) et des accès temporaires à des réseaux qui doivent être sécurisés. Le secteur hôtelier cannois gère des données bancaires de clients UHNWI (Ultra High Net Worth Individuals) qui en font des cibles de valeur pour les cybercriminels. CyberSecure intervient à Cannes, Mandelieu, Mougins et dans toutes les Alpes-Maritimes.",
      sectors: [
        "Hôtellerie de luxe et palaces",
        "Événementiel et congrès (MIPIM, Festival)",
        "Immobilier haut de gamme",
        "Yachting et services nautiques",
        "Commerce de luxe et joaillerie",
        "Médias, cinéma et production audiovisuelle",
      ],
      neighborhoods: [
        "Cannes Centre et La Croisette",
        "Le Cannet et Rocheville",
        "Mandelieu-la-Napoule",
        "Mougins et Sophia Antipolis",
        "Grasse et Pays de Grasse",
        "Tout le bassin Alpes-Maritimes",
      ],
      faq: [
        {
          q: "Quel est le tarif d'un pentest pour une entreprise du luxe ou de l'événementiel à Cannes ?",
          a: "Un pentest web pour un acteur de l'événementiel ou du luxe cannois démarre à 4 000 € HT pour une plateforme de réservation ou un site e-commerce. Pour un palace ou un groupe hôtelier avec PMS, application de gestion et portails clients, un audit complet varie entre 10 000 et 20 000 € HT. Nous proposons également des audits ponctuels avant les grands événements (Festival, MIPIM) pour vérifier la sécurité des infrastructures temporaires. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour un hôtel ou un palace à Cannes ?",
          a: "Un audit de sécurité pour un établissement hôtelier de Cannes dure généralement 4 à 8 jours. La revue du PMS (Property Management System), des systèmes de paiement (PCI DSS), du Wi-Fi clients, des accès distants et de la gestion des identités constitue le cœur de l'audit. Nous planifions l'intervention pendant les périodes de plus faible occupation pour minimiser l'impact sur l'expérience client.",
        },
        {
          q: "Comment sécuriser les infrastructures réseau lors des grands événements à Cannes ?",
          a: "Lors du Festival, du MIPIM ou du MIDEM, des milliers de participants se connectent à des infrastructures temporaires qui peuvent être compromises. Nous proposons des audits préventifs des réseaux événementiels, des tests de pénétration des bornes Wi-Fi et des équipements temporaires, ainsi que des recommandations pour les organisateurs et les exposants sur les bonnes pratiques de connexion sécurisée pendant les événements.",
        },
        {
          q: "Intervenez-vous sur site à Cannes et dans les Alpes-Maritimes ?",
          a: "Oui. Nos consultants se déplacent sur site à Cannes, Le Cannet, Mandelieu-la-Napoule, Mougins, Grasse, Antibes et Nice. Nous couvrons tout le département des Alpes-Maritimes et pouvons intervenir à Monaco pour les entreprises qui y opèrent. Les interventions sont planifiées en dehors des périodes de grands événements pour ne pas perturber votre activité, sauf en cas d'urgence.",
        },
        {
          q: "Que faire si mon entreprise cannoise est victime d'une cyberattaque pendant un événement majeur ?",
          a: "Contactez notre CERT immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau et si possible, basculez sur des systèmes de backup pour maintenir l'activité événementielle. Informez votre responsable sécurité et votre prestataire réseau. Nos experts CyberSecure peuvent être déployés à Cannes sous 4 heures pour gérer la crise, contenir l'attaque et maintenir la continuité opérationnelle pendant l'événement.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCannes;
