import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAntibes = () => (
  <CityLandingPage
    data={{
      city: "Antibes",
      citySlug: "antibes",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06600",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des pentests et audits de sécurité pour les startups, PME high-tech et entreprises de luxe d'Antibes et de Sophia Antipolis. Avec plus de 2 400 entreprises technologiques implantées sur la technopole, la Côte d'Azur concentre des enjeux cyber majeurs que nos experts maîtrisent.",
      localContext: "Antibes et Sophia Antipolis forment l'un des premiers pôles technologiques européens avec plus de 2 400 entreprises — notamment dans les secteurs des logiciels, de la sécurité informatique, des sciences de la vie et du conseil. Ces entreprises détiennent une propriété intellectuelle considérable et gèrent des données clients sensibles qui en font des cibles de choix pour le cyberespionnage et les ransomwares. Le secteur du yachting et du luxe sur Juan-les-Pins et le cap d'Antibes expose également des données à haute valeur (clients UHNWI, contrats confidentiels). CyberSecure intervient à Antibes, Sophia Antipolis, Valbonne et dans toutes les Alpes-Maritimes.",
      sectors: [
        "Technologie et logiciels (Sophia Antipolis)",
        "Sciences de la vie et medtech",
        "Yachting et nautisme de luxe",
        "Immobilier et promotion haut de gamme",
        "Tourisme et hôtellerie haut de gamme",
        "PME et startups Côte d'Azur",
      ],
      neighborhoods: [
        "Antibes Centre et vieil Antibes",
        "Juan-les-Pins et Cap d'Antibes",
        "Sophia Antipolis et Valbonne",
        "Biot et Villeneuve-Loubet",
        "Cagnes-sur-Mer, Mougins",
        "Tout le bassin Alpes-Maritimes",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une startup de Sophia Antipolis ?",
          a: "Un pentest web applicatif pour une startup de Sophia Antipolis démarre à 4 000 € HT pour une application SaaS. Un test d'intrusion complet (API, infrastructure cloud, front-end et back-end) varie entre 8 000 et 15 000 € HT selon le périmètre. Pour les startups en phase de croissance, nous proposons un Quick Scan sécurité à partir de 2 500 € HT permettant d'identifier rapidement les risques prioritaires. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité à Antibes ou Sophia Antipolis ?",
          a: "Un audit ciblé sur une application SaaS ou une API prend 3 à 5 jours. Un audit complet d'une PME technologique — réseau, Active Directory, applications web, cloud et sensibilisation — nécessite 7 à 12 jours. Pour les entreprises de sciences de la vie avec des données cliniques, la durée peut s'étendre à 15 jours pour couvrir tous les systèmes réglementés.",
        },
        {
          q: "Comment tester la sécurité des APIs et applications SaaS des entreprises de Sophia Antipolis ?",
          a: "Le pentest d'API comprend l'évaluation de l'authentification (OAuth, JWT), le test des autorisations (BOLA, BFLA), l'analyse des injections, la vérification de la gestion des données sensibles et le test des limites de débit. Nous suivons le référentiel OWASP API Security Top 10 et testons également les API REST, GraphQL et gRPC. Les rapports incluent des exemples de code de remédiation pour accélérer les corrections.",
        },
        {
          q: "Intervenez-vous sur site à Antibes, Sophia Antipolis et dans les Alpes-Maritimes ?",
          a: "Oui. Nos consultants se déplacent sur site à Antibes, Sophia Antipolis, Valbonne, Biot, Cagnes-sur-Mer, Nice et dans tout le département des Alpes-Maritimes. Nous couvrons également Monaco pour les entreprises transfrontalières. Les audits à distance sont disponibles pour les revues de code, configurations et questionnaires organisationnels.",
        },
        {
          q: "Que faire si mon entreprise de Sophia Antipolis subit une cyberattaque ?",
          a: "Contactez notre cellule CERT immédiatement (24h/24, 7j/7). Isolez les systèmes compromis du réseau sans les éteindre. Prévenez votre DPO si des données personnelles sont potentiellement exposées — vous disposez de 72 heures pour notifier la CNIL. Nos experts peuvent être déployés rapidement à Antibes et Sophia Antipolis pour contenir l'attaque, préserver les preuves et orchestrer la reprise d'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAntibes;
