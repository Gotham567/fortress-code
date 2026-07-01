import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteVannes = () => (
  <CityLandingPage
    data={{
      city: "Vannes",
      citySlug: "vannes",
      region: "Bretagne",
      postalCode: "56000",
      intro: "CyberSecure accompagne les PME et ETI de Vannes avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs touristique, numérique, commercial et des PME du Morbihan. Notre cabinet qualifié PASSI ANSSI intervient sur site à Vannes pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises du Golfe du Morbihan.",
      localContext: "Vannes est une ville dynamique et attractive qui combine tourisme patrimonial (cité médiévale), économie numérique en croissance et un tissu de PME commerçantes et de services en plein essor. Le technopôle Espace Bretagne-Atlantique et la Cité des Télécoms font de Vannes un pôle numérique breton de second rang mais à la croissance rapide, accueillant des startups et des PME IT dont les systèmes d'information nécessitent une protection adaptée. L'économie maritime du Golfe du Morbihan (tourisme nautique, pêche côtière, algoculture) et le commerce de proximité vannetais génèrent des données personnelles et financières à sécuriser. Le Centre Hospitalier Bretagne-Atlantique (CHBA) et les établissements de santé morbihannais sont des cibles de ransomwares.",
      sectors: [
        "Numérique et startups (technopôle Espace Bretagne-Atlantique)",
        "Tourisme patrimonial et nautique (Golfe du Morbihan)",
        "Commerce et distribution (centre commercial Les Quatre Moulins)",
        "PME de services et artisanat morbihannais",
        "Santé (CHBA, cliniques Morbihan)",
        "Collectivités et Golfe du Morbihan Vannes Agglomération",
      ],
      neighborhoods: [
        "Intra-muros et Vieille Ville de Vannes",
        "La Marébaudière et quartier d'affaires",
        "Espace Bretagne-Atlantique (technopôle)",
        "Limur et zones d'activités nord",
        "Séné et rive du Golfe (nautisme, tourisme)",
        "Auray et presqu'île de Quiberon (tourisme, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une PME numérique ou touristique à Vannes ?",
          a: "Un audit de sécurité pour une PME numérique du technopôle vannetais est tarifé entre 4 000 et 9 000 € HT. Pour un opérateur touristique gérant des réservations en ligne (port de plaisance, hébergements), un pentest web ciblé débute à 3 500 € HT. CyberSecure propose des offres adaptées aux PME et startups bretonnes avec un devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Vannes ?",
          a: "Un pentest réseau pour une PME vannetaise dure 3 à 6 jours ouvrés. Pour une ETI avec plusieurs sites ou des systèmes cloud complexes, comptez 5 à 8 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences à Vannes.",
        },
        {
          q: "Comment sécuriser un système de gestion d'un port de plaisance ou d'une marina dans le Golfe du Morbihan ?",
          a: "Les ports de plaisance du Golfe du Morbihan utilisent des systèmes de gestion des anneaux, de réservation en ligne, de contrôle d'accès et de facturation qui traitent des données personnelles et bancaires de plaisanciers du monde entier. CyberSecure réalise des audits incluant le test des portails de réservation, la sécurité des systèmes de badge et contrôle d'accès, la conformité PCI-DSS pour les paiements et la conformité RGPD pour les données des usagers. Nous recommandons également des tests de charge pour les pics saisonniers.",
        },
        {
          q: "CyberSecure intervient-il sur site à Vannes et dans le Morbihan ?",
          a: "Oui, nos consultants se déplacent à Vannes, Lorient, Auray, Quiberon, Ploërmel et dans tout le Morbihan. Nous couvrons également les Côtes-d'Armor (Saint-Brieuc) et le Finistère (Quimper) pour les groupes bretons ayant des sites dans plusieurs départements. Déploiement sous 72h à Vannes.",
        },
        {
          q: "Que faire en cas de cyberattaque à Vannes — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Notre équipe peut être déployée sur site à Vannes dans les 4 heures pour contenir l'attaque et coordonner la reprise d'activité. CyberSecure prend en charge les notifications ANSSI et CNIL. Pour les PME sans RSSI interne, nous proposons une assistance téléphonique immédiate. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteVannes;
