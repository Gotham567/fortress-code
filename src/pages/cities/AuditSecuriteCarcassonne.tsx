import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCarcassonne = () => (
  <CityLandingPage
    data={{
      city: "Carcassonne",
      citySlug: "carcassonne",
      region: "Occitanie",
      postalCode: "11000",
      intro: "CyberSecure accompagne les PME et ETI de Carcassonne avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs touristique, viticole et des PME de l'Aude. Notre cabinet qualifié PASSI ANSSI intervient sur site à Carcassonne pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises de l'Aude.",
      localContext: "Carcassonne est l'une des destinations touristiques les plus visitées de France avec sa cité médiévale classée patrimoine mondial UNESCO attirant plus de 3 millions de visiteurs par an, générant une économie hôtelière et de restauration gérant des volumes importants de données personnelles et de paiements. La viticulture audoise (Corbières, Minervois, Blanquette de Limoux) s'appuie sur des caves coopératives et des domaines dont les systèmes de traçabilité et de commerce en ligne nécessitent une sécurisation adaptée. Le tissu de PME et d'artisans de l'Aude s'informatise progressivement dans un contexte de cybermenaces croissantes ciblant les PME françaises. Le CH de Carcassonne et les établissements de santé audois font face aux ransomwares.",
      sectors: [
        "Tourisme patrimonial (Cité médiévale UNESCO, hôtellerie)",
        "Viticulture et vins d'Aude (Corbières, Minervois, Blanquette)",
        "Commerce et restauration touristique",
        "PME artisanales et industrie légère de l'Aude",
        "Santé (CH Carcassonne, cliniques Aude)",
        "Collectivités et Grand Carcassonne Agglo",
      ],
      neighborhoods: [
        "Cité médiévale et Intra-muros",
        "Bastide Saint-Louis (centre commercial)",
        "Zone industrielle et logistique de Carcassonne",
        "Limoux et Aude sud (viticulture, tourisme)",
        "Narbonne et Aude littoral (déjà traité)",
        "Castelnaudary et Lauragais (agriculture, industrie)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un hôtel ou un opérateur touristique à Carcassonne ?",
          a: "Un audit de sécurité pour un hôtel ou un opérateur touristique de Carcassonne incluant les systèmes de réservation (PMS), les portails de réservation en ligne, les terminaux de paiement et les systèmes WiFi clients est tarifé entre 4 500 et 9 000 € HT. Un pentest web ciblé sur une billetterie ou un portail de visites de la Cité médiévale débute à 3 500 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Carcassonne ?",
          a: "Un pentest réseau pour une PME carcassonnaise dure 3 à 5 jours ouvrés. Pour un groupement hôtelier ou une cave coopérative avec plusieurs sites, comptez 5 à 7 jours. L'audit Active Directory seul est réalisable en 1 à 2 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser un système de gestion hôtelière (PMS) et les données des clients de la Cité de Carcassonne ?",
          a: "Les hôtels et structures d'accueil touristique de Carcassonne utilisent des PMS (Property Management System) connectés aux OTA (Booking.com, Expedia) qui traitent des données bancaires et personnelles de voyageurs du monde entier. CyberSecure réalise des audits incluant le test des PMS (Opera, Protel, Fols), la sécurité des intégrations avec les OTA, la conformité PCI-DSS pour les terminaux de paiement et la conformité RGPD pour les données clients et les transferts vers des partenaires internationaux.",
        },
        {
          q: "CyberSecure intervient-il sur site à Carcassonne et dans l'Aude ?",
          a: "Oui, nos consultants se déplacent à Carcassonne, Narbonne, Limoux, Castelnaudary, Lézignan-Corbières et dans tout le département de l'Aude. Nous couvrons également l'Hérault (Béziers, Montpellier) pour les groupes touristiques et viticoles actifs dans les deux départements. Déploiement sous 72h à Carcassonne.",
        },
        {
          q: "Que faire en cas de cyberattaque à Carcassonne — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les hôtels et restaurateurs, sécurisez en priorité les systèmes de paiement pour éviter toute fuite de données bancaires. Notre équipe peut être sur site à Carcassonne dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL (et les notifications PCI-DSS si des données bancaires sont compromises). Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCarcassonne;
