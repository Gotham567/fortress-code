import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuritePerpignan = () => (
  <CityLandingPage
    data={{
      city: "Perpignan",
      citySlug: "perpignan",
      region: "Occitanie",
      postalCode: "66000",
      intro: "CyberSecure accompagne les PME et ETI de Perpignan avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs agricole, touristique et logistique des Pyrénées-Orientales. Notre cabinet qualifié PASSI ANSSI intervient sur site à Perpignan pour protéger les systèmes d'information des entreprises catalanes contre les cybermenaces ciblant ce territoire frontalier.",
      localContext: "Perpignan est la capitale de la Catalogne française et un hub agro-logistique majeur : son marché de gros Saint-Charles est le premier marché européen de fruits et légumes frais, manipulant des flux commerciaux colossaux avec l'Espagne et toute l'Europe, des systèmes de traçabilité et des plateformes d'enchères numériques qui constituent des cibles cybercriminelles prioritaires. Le tourisme balnéaire de la Côte Vermeille et le tourisme culturel catalan (Palais des Rois de Majorque) génèrent une économie saisonnière avec des systèmes de réservation manipulant des données bancaires. La proximité de l'Espagne génère des flux transfrontaliers et des architectures IT multi-pays. Les collectivités locales et le tissu de PME catalanes s'informatisent dans un contexte de cybermenaces croissantes.",
      sectors: [
        "Agro-logistique et marché de gros (Saint-Charles international)",
        "Viticulture et vins du Roussillon (AOC Banyuls, Maury)",
        "Tourisme côtier et hôtellerie (Côte Vermeille)",
        "Logistique et transport transfrontalier Espagne",
        "Santé (CH Perpignan, cliniques Pyrénées-Orientales)",
        "Collectivités et Perpignan Méditerranée Métropole",
      ],
      neighborhoods: [
        "Centre-ville et quartier Saint-Jean",
        "Saint-Charles (plateforme agro-logistique)",
        "Rivesaltes et zone industrielle nord",
        "Cabestany et zones d'activités est",
        "Argelès-sur-Mer et Côte Vermeille",
        "Cerdagne et Pyrénées catalanes",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une entreprise agro-logistique à Perpignan ?",
          a: "Un audit de sécurité pour une plateforme logistique ou un opérateur du marché Saint-Charles à Perpignan est tarifé entre 6 000 et 14 000 € HT selon la taille des systèmes et les interfaces avec les partenaires espagnols. Un pentest web pour un portail d'enchères ou de traçabilité des fruits et légumes débute à 4 500 € HT. CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest ou audit réseau à Perpignan ?",
          a: "Un audit réseau pour une PME perpignanaise dure 4 à 7 jours ouvrés. Pour une plateforme logistique incluant les interconnexions avec des partenaires en Espagne et à l'international, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment auditer les interconnexions IT transfrontalières d'une entreprise active entre Perpignan et l'Espagne ?",
          a: "Les entreprises de Perpignan ayant des partenaires ou des filiales en Espagne opèrent souvent des architectures IT transfrontalières complexes avec des VPN site-à-site, des accès partenaires et des échanges EDI soumis à des réglementations différentes. CyberSecure réalise des audits incluant la revue des règles de filtrage inter-pays, le test des liaisons VPN, l'analyse des flux de données personnelles transfrontaliers (RGPD) et la cartographie des dépendances externes.",
        },
        {
          q: "CyberSecure intervient-il sur site à Perpignan et dans les Pyrénées-Orientales ?",
          a: "Oui, nos consultants se déplacent à Perpignan, Cabestany, Rivesaltes, Elne, Argelès-sur-Mer, Céret et dans toute la zone des Pyrénées-Orientales. Nous couvrons également l'Aude (Narbonne, Carcassonne) pour les groupes ayant des sites dans plusieurs départements occitans. Déploiement sous 72h à Perpignan.",
        },
        {
          q: "Que faire en cas de cyberattaque à Perpignan — procédure CERT ?",
          a: "Contactez immédiatement le CERT de CyberSecure (disponible 24h/24, 7j/7). Isolez les machines compromises du réseau sans les éteindre. Notre équipe peut intervenir sur site à Perpignan dans les 4 à 6 heures pour contenir l'attaque et coordonner la reprise d'activité. Pour les entreprises avec des partenaires en Espagne, nous coordonnons si nécessaire avec le CERT espagnol (INCIBE). CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuritePerpignan;
