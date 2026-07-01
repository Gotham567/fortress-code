import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLaRochelle = () => (
  <CityLandingPage
    data={{
      city: "La Rochelle",
      citySlug: "la-rochelle",
      region: "Nouvelle-Aquitaine",
      postalCode: "17000",
      intro: "CyberSecure accompagne les PME et ETI de La Rochelle avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs portuaire, touristique, numérique et des énergies renouvelables de Charente-Maritime. Notre cabinet qualifié PASSI ANSSI intervient sur site à La Rochelle pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT.",
      localContext: "La Rochelle est une ville en pointe sur la transition énergétique et le numérique : le projet Ile de Ré 100% électrique, les projets éoliens offshore et le pôle de compétitivité Atlantech positionnent La Rochelle comme un laboratoire de la mobilité durable dont les architectures SI sont innovantes et doivent être sécurisées dès leur conception. Le port de La Rochelle, spécialisé dans les céréales, les engrais et les bois exotiques, constitue un nœud logistique dont les systèmes de gestion portuaire sont exposés aux cybermenaces. L'économie touristique rochelaise (Old Port, îles de Ré et d'Oléron) génère une activité saisonnière intense manipulant des données personnelles et bancaires. L'Université de La Rochelle et l'École Supérieure du Bois développent des pôles de recherche en sciences marines et matériaux.",
      sectors: [
        "Énergie renouvelable et mobilité durable (Atlantech)",
        "Port et logistique maritime (céréales, bois)",
        "Tourisme côtier et insulaire (Ré, Oléron)",
        "Numérique et startups (technopôle du Perillon)",
        "Santé (CH La Rochelle, cliniques Charente-Maritime)",
        "Agroalimentaire et ostréiculture charentaise",
      ],
      neighborhoods: [
        "Centre-ville et Vieux-Port",
        "Chef-de-Baie (port de commerce, zones industrielles)",
        "Périgny et technopôle du Perillon",
        "Aytré et zones d'activités sud",
        "Île de Ré (tourisme, PME insulaires)",
        "Rochefort et Charente-Maritime sud",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une entreprise d'énergies renouvelables à La Rochelle ?",
          a: "Un audit de sécurité pour une PME ou startup des énergies renouvelables à La Rochelle (éolien offshore, stockage batterie, mobilité électrique) incluant les systèmes SCADA de supervision et les plateformes IoT de gestion énergétique est tarifé entre 7 000 et 18 000 € HT. Un pentest de l'application web de pilotage de parc éolien débute à 5 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à La Rochelle ?",
          a: "Un pentest réseau pour une PME rochelaise dure 4 à 7 jours ouvrés. Pour une installation portuaire ou logistique incluant les interfaces avec les systèmes douaniers, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes de gestion d'un port de commerce comme La Rochelle ?",
          a: "Les ports de commerce gèrent des systèmes critiques (PCS - Port Community System, TOS - Terminal Operating System) interconnectés avec les douanes, les compagnies maritimes et les transitaires internationaux. CyberSecure réalise des audits incluant la revue des accès externes multiples, le test des interfaces EDI avec les partenaires maritimes, l'évaluation des cloisonnements entre le SI de gestion et les systèmes opérationnels des terminaux, et l'analyse des risques cyber des grues et équipements connectés.",
        },
        {
          q: "CyberSecure intervient-il sur site à La Rochelle et en Charente-Maritime ?",
          a: "Oui, nos consultants se déplacent à La Rochelle, Rochefort, Saintes, Royan, Saint-Jean-d'Angély et dans toute la Charente-Maritime. Nous couvrons également les îles de Ré et d'Oléron pour les entreprises insulaires. Déploiement sous 72h à La Rochelle.",
        },
        {
          q: "Que faire en cas de cyberattaque à La Rochelle — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les incidents touchant des infrastructures portuaires, informez également les autorités maritimes (CROSS Étel). Notre équipe peut être sur site à La Rochelle dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLaRochelle;
