import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAixEnProvence = () => (
  <CityLandingPage
    data={{
      city: "Aix-en-Provence",
      citySlug: "aix-en-provence",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "13100",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits de sécurité informatique et des pentests à Aix-en-Provence pour les PME, ETI et groupes high-tech de la Technopole. Sopra Steria, Capgemini et les entreprises du numérique aixois font confiance à nos experts pour leurs tests d'intrusion dans les Bouches-du-Rhône.",
      localContext: "Aix-en-Provence abrite l'une des plus importantes concentrations de sociétés de services numériques de PACA, avec des acteurs comme Sopra Steria, Capgemini et de nombreuses startups issues de ses universités et grandes écoles. Ce tissu high-tech attire les cyberattaquants : vol de propriété intellectuelle, compromission des accès distants des ESN, attaques sur la chaîne d'approvisionnement. Le bassin Aix-Marseille Technopole compte plusieurs milliers d'entreprises numériques et industrielles dont les systèmes d'information sont de plus en plus interconnectés et exposés. CyberSecure intervient sur Aix-en-Provence, Vitrolles, Gardanne et dans tout le département Bouches-du-Rhône pour évaluer et renforcer votre posture de sécurité.",
      sectors: [
        "Numérique et ESN (Sopra Steria, Capgemini)",
        "Recherche et enseignement supérieur",
        "Industrie et technologie",
        "Finance et assurance",
        "Santé et établissements médicaux",
        "Tourisme et immobilier de luxe",
      ],
      neighborhoods: [
        "Aix-en-Provence Centre et Sextius-Mirabeau",
        "Technopole de l'Arbois",
        "Vitrolles et aéroport Marseille-Provence",
        "Gardanne et bassin minier",
        "Salon-de-Provence, Martigues",
        "Tout le département Bouches-du-Rhône",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une PME numérique à Aix-en-Provence ?",
          a: "Un pentest web applicatif pour une PME high-tech d'Aix-en-Provence démarre à 4 000 € HT pour une application. Un pentest réseau interne varie entre 8 000 et 20 000 € HT selon le périmètre et la complexité de l'infrastructure. Pour les ETI comme les intégrateurs ou ESN, un audit complet incluant Active Directory et applications métier est généralement compris entre 12 000 et 25 000 € HT. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité informatique à Aix-en-Provence ?",
          a: "Un audit organisationnel (ISO 27001, questionnaire, entretiens) prend 2 à 3 jours sur site. Un audit technique complet — réseau, Active Directory, applications — nécessite de 5 à 15 jours selon la taille du système d'information. Pour les sociétés de services numériques, l'audit code source peut allonger la durée de 3 à 5 jours supplémentaires. Nous proposons un planning adapté pour minimiser l'impact sur votre activité.",
        },
        {
          q: "Comment sécuriser les accès distants d'une ESN ou d'un intégrateur IT à Aix-en-Provence ?",
          a: "Les ESN et intégrateurs informatiques aixois gèrent des accès distants à de nombreux SI clients, ce qui en fait des cibles de choix pour les attaques de type supply chain. Notre pentest d'accès distants couvre l'audit VPN, l'évaluation des droits d'accès tiers, le test des authentifications et la revue des politiques de segmentation. Nous testons également les interfaces RDP, Citrix et les solutions de prise en main à distance pour identifier les vecteurs d'attaque.",
        },
        {
          q: "Intervenez-vous sur site à Aix-en-Provence et dans les Bouches-du-Rhône ?",
          a: "Oui. Nos consultants se déplacent sur site à Aix-en-Provence, Vitrolles, Gardanne, Salon-de-Provence et dans tout le département Bouches-du-Rhône. Nous couvrons également Marseille et Toulon pour les missions qui le nécessitent. Les audits à distance (revue de configuration, questionnaire organisationnel, analyse de logs) sont aussi disponibles pour réduire les délais et les coûts.",
        },
        {
          q: "Que faire si mon entreprise aixoise subit une cyberattaque ?",
          a: "Contactez immédiatement notre cellule CERT (disponible 24h/24 et 7j/7). Isolez sans délai les machines concernées du réseau sans les éteindre afin de préserver les traces numériques. Ne payez pas la rançon sans avoir consulté un expert : cela ne garantit pas la récupération des données et finance les attaquants. Nos consultants CyberSecure peuvent être déployés à Aix-en-Provence sous 4 heures pour contenir l'incident, analyser les causes et coordonner la reprise d'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAixEnProvence;
