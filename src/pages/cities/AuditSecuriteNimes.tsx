import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNimes = () => (
  <CityLandingPage
    data={{
      city: "Nîmes",
      citySlug: "nimes",
      region: "Occitanie",
      postalCode: "30000",
      intro: "CyberSecure accompagne les PME et ETI de Nîmes avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs logistique, industriel, agricole et touristique du Gard. Notre cabinet qualifié PASSI ANSSI intervient sur site à Nîmes pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises gardoises.",
      localContext: "Nîmes est une ville carrefour entre Lyon, Marseille et l'Espagne, positionnée comme hub logistique majeur sur l'axe A9 avec des entrepôts et plateformes de distribution dont les systèmes WMS et les interfaces EDI constituent des vecteurs d'attaque prisés. L'industrie nîmoise (textile technique, BTP, mécanique) et le tissu dense de PME gardoises s'appuient sur des ERP et systèmes de gestion en transformation numérique. Le tourisme des Arènes de Nîmes, des Férias et du patrimoine romain attire plusieurs millions de visiteurs et génère une économie événementielle et hôtelière exposée aux cybermenaces. La viticulture AOC Costières de Nîmes et l'agriculture gardoise complètent le panorama économique.",
      sectors: [
        "Logistique et transport (hub A9/A54)",
        "Industrie et BTP (textile technique, métallurgie)",
        "Agriculture et viticulture (Costières de Nîmes)",
        "Tourisme patrimonial et événementiel (Arènes, Férias)",
        "Santé (CHU Carémeau, cliniques Gard)",
        "Collectivités et Nîmes Métropole",
      ],
      neighborhoods: [
        "Centre-ville et quartier des Arènes",
        "Zone industrielle de Nîmes-Grézan",
        "Marguerittes et zone logistique nord-est",
        "Caissargues et zones d'activités sud",
        "Alès et Gard nord (industrie, mines)",
        "Bagnols-sur-Cèze et Gard rhodanien",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une plateforme logistique à Nîmes ?",
          a: "Un audit de sécurité pour une plateforme logistique nîmoise incluant les systèmes WMS, EDI et les accès transporteurs est tarifé entre 6 000 et 14 000 € HT. Un pentest web pour un portail client ou un extranet logistique débute à 4 500 € HT. CyberSecure propose également des audits de conformité NIS2 pour les opérateurs logistiques d'importance systémique. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau ETI à Nîmes ?",
          a: "Un pentest réseau pour une ETI nîmoise dure 5 à 8 jours ouvrés. Pour une plateforme logistique ou un groupe industriel multi-sites, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 4 jours. CyberSecure peut intervenir sous 72h pour les urgences à Nîmes.",
        },
        {
          q: "Comment sécuriser les systèmes de billetterie et de gestion des Férias de Nîmes ?",
          a: "Les événements de grande ampleur comme les Férias de Nîmes (400 000 spectateurs) et les spectacles des Arènes mobilisent des systèmes de billetterie en ligne, de contrôle d'accès et de paiement qui constituent des cibles de choix pour les cybercriminels. CyberSecure réalise des audits de sécurité des plateformes de billetterie incluant les tests d'injection, de vol de session, de fraude aux paiements (PCI-DSS) et la revue des API tierces. Nous recommandons des tests de charge pour anticiper les pics de trafic lors des ouvertures de ventes.",
        },
        {
          q: "CyberSecure intervient-il sur site à Nîmes et dans le Gard ?",
          a: "Oui, nos consultants se déplacent à Nîmes, Alès, Bagnols-sur-Cèze, Uzès, Le Vigan et dans tout le département du Gard. Nous couvrons également l'Hérault (Montpellier) et le Vaucluse (Avignon) pour les groupes ayant des sites dans plusieurs départements du Sud. Déploiement sous 72h à Nîmes.",
        },
        {
          q: "Que faire en cas de cyberattaque à Nîmes — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre pour préserver les traces forensiques. Notre équipe peut être sur site à Nîmes dans les 4 heures pour contenir l'attaque et coordonner la reprise d'activité. CyberSecure prend en charge les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNimes;
