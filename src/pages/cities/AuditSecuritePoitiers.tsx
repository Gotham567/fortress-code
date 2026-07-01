import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuritePoitiers = () => (
  <CityLandingPage
    data={{
      city: "Poitiers",
      citySlug: "poitiers",
      region: "Nouvelle-Aquitaine",
      postalCode: "86000",
      intro: "CyberSecure accompagne les PME et ETI de Poitiers avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs industriel, agricole, numérique et de la santé dans la Vienne. Notre cabinet qualifié PASSI ANSSI intervient sur site à Poitiers pour des missions d'audit réseau, d'audit Active Directory et de pentest application web pour les entreprises poitevines.",
      localContext: "Poitiers est un pôle universitaire et de recherche reconnu avec l'Université de Poitiers et ses laboratoires en mathématiques et informatique qui forment un écosystème de startups et PME numériques en besoin de sécurisation. L'industrie poitevine hérite d'un tissu de PME mécaniques et d'imprimeries (Poitiers fut une ville d'imprimeurs) dont les systèmes CAO et ERP nécessitent une protection adaptée. Le complexe touristique du Futuroscope, l'un des parcs d'attractions technologiques les plus visités de France, manipule des données personnelles de plusieurs millions de visiteurs. Le CHU de Poitiers et les établissements de santé de la Vienne font face aux cybermenaces ciblant le secteur médical.",
      sectors: [
        "Industrie et PME mécaniques (Vienne)",
        "Numérique et recherche (Université de Poitiers, startups)",
        "Tourisme et loisirs (Futuroscope, événementiel)",
        "Agriculture et agroalimentaire viennois",
        "Santé (CHU Poitiers, cliniques Vienne)",
        "Collectivités et Grand Poitiers Communauté Urbaine",
      ],
      neighborhoods: [
        "Centre-ville et quartier des Cordeliers",
        "Futuroscope et technopôle nord",
        "Zone industrielle de Poitiers",
        "Buxerolles et Chasseneuil (université, recherche)",
        "Montmorillon et Vienne rurale",
        "Châtellerault et nord Vienne (industrie)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour le Futuroscope ou une entreprise du tourisme technologique à Poitiers ?",
          a: "Un audit de sécurité pour un opérateur touristique gérant des données personnelles de millions de visiteurs comme le Futuroscope se situe entre 10 000 et 25 000 € HT selon le périmètre des systèmes (billetterie, réservations, accès connectés, app mobile). Un pentest web pour une PME touristique ou une plateforme de réservation régionale débute à 4 500 € HT. CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un test d'intrusion à Poitiers ?",
          a: "Un test d'intrusion réseau pour une PME poitevine dure 4 à 7 jours ouvrés. Pour une ETI avec un SI complexe ou un établissement de santé, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences à Poitiers.",
        },
        {
          q: "Comment sécuriser un système d'information industriel ou de PME mécanique à Poitiers ?",
          a: "Les PME industrielles de Poitiers et de la Vienne utilisent souvent des ERP anciens, des réseaux WiFi insuffisamment sécurisés et des accès distants non contrôlés. CyberSecure réalise des audits de maturité cybersécurité incluant la revue des mises à jour, le test des accès VPN, la cartographie des actifs informatiques et l'évaluation des politiques de sauvegarde. Nous proposons un plan de remédiation priorisé adapté aux budgets des PME poitevines.",
        },
        {
          q: "CyberSecure intervient-il sur site à Poitiers et dans la Vienne ?",
          a: "Oui, nos consultants se déplacent à Poitiers, Châtellerault, Montmorillon, Civray et dans tout le département de la Vienne. Nous couvrons également les Deux-Sèvres (Niort) et la Charente (Angoulême) pour les groupes ayant des sites dans plusieurs départements de Nouvelle-Aquitaine. Déploiement sous 72h à Poitiers.",
        },
        {
          q: "Que faire en cas de cyberattaque à Poitiers — quelle est la procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre pour préserver les preuves forensiques. Notre équipe peut être sur site à Poitiers dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL et coordonne la reprise d'activité. Pour les établissements de santé, nous gérons également les notifications ARS. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuritePoitiers;
