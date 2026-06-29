import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNouvelleAquitaine = () => (
  <CityLandingPage
    data={{
      city: "Nouvelle-Aquitaine",
      citySlug: "nouvelle-aquitaine",
      region: "Nouvelle-Aquitaine",
      postalCode: "16 / 17 / 19 / 23 / 24 / 33 / 40 / 47 / 64 / 79 / 86 / 87",
      intro: "CyberSecure est votre prestataire audit de sécurité Nouvelle-Aquitaine : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Bordeaux, Pau, Bayonne, Limoges, Poitiers, La Rochelle, Périgueux et toute la région.",
      localContext: "La Nouvelle-Aquitaine est la plus grande région française par sa superficie, combinant des secteurs industriels diversifiés et une économie numérique dynamique. Bordeaux est le hub économique avec une scène tech en plein essor (French Tech Bordeaux, Station F régionale). L'aéronautique et la défense sont présentes avec Thales, Dassault Aviation (Mérignac), Safran et leurs sous-traitants. L'industrie chimique et pharmaceutique (BASF, Sanofi) est concentrée sur la Gironde. Le secteur viticole et agroalimentaire est majeur (Bordeaux, Cognac, Armagnac). Le Pays Basque (Bayonne, Anglet, Biarritz) concentre des industries de pointe. La Creuse et la Corrèze restent rurales avec des enjeux de transformation numérique.",
      sectors: [
        "Aéronautique et défense (Dassault Mérignac, Thales, Safran, Thalès)",
        "Chimie et pharmacie (BASF, Sanofi, industries chimiques Gironde)",
        "Viticulture et spiritueux (Bordeaux, Cognac, Armagnac)",
        "Agroalimentaire (Landes, Périgord, productions régionales AOC)",
        "Numérique et tech (French Tech Bordeaux, startups aquitaines)",
        "Santé (CHU Bordeaux, Pellegrin, cliniques régionales)",
        "Énergie (centrales nucléaires, ENR, industrie pétrolière Pau-LACQ)",
        "Collectivités (Bordeaux Métropole, Région Nouvelle-Aquitaine)",
      ],
      neighborhoods: [
        "Bordeaux Métropole – Mérignac – Mérignac Cyber (33)",
        "Pau – Lourdes – Lacq (64)",
        "Bayonne – Anglet – Biarritz (64)",
        "Limoges Métropole – Tulle (87/19)",
        "Poitiers – Niort – Châtellerault (86/79)",
        "La Rochelle – Saintes – Rochefort (17)",
        "Périgueux – Bergerac – Sarlat (24)",
        "Agen – Marmande – Villeneuve-sur-Lot (47)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 12 départements de Nouvelle-Aquitaine ?",
          a: "Oui, CyberSecure intervient dans les douze départements : Charente (16), Charente-Maritime (17), Corrèze (19), Creuse (23), Dordogne (24), Gironde (33), Landes (40), Lot-et-Garonne (47), Pyrénées-Atlantiques (64), Deux-Sèvres (79), Vienne (86) et Haute-Vienne (87). Nos consultants se déplacent sur site partout dans la région. CERT d'urgence 24/7.",
        },
        {
          q: "Dassault Aviation Mérignac et ses sous-traitants sont-ils soumis à NIS2 ?",
          a: "Oui. Dassault Aviation (constructeur aéronautique de défense) et ses sous-traitants de la filière aéronautique aquitaine sont dans le périmètre NIS2 (secteur aéronautique, fabrication de matériels de défense). La base aérienne de Mérignac est une infrastructure critique. Les fournisseurs et équipementiers dépassant 50 salariés sont également concernés. CyberSecure accompagne l'écosystème aéronautique bordelais.",
        },
        {
          q: "Les châteaux viticoles de Bordeaux ont-ils des obligations cyber ?",
          a: "Les grands châteaux bordelais (Médoc, Saint-Émilion, Pomerol) qui exportent mondialement traitent des données clients internationaux et sont soumis au RGPD. Les grandes maisons de négoce (LVMH Moët Hennessy, Castel) dépassent les seuils NIS2. Les enjeux cyber spécifiques incluent la protection des systèmes de traçabilité numérique des millésimes, la sécurité des plateformes de vente en ligne directe (DTC), et la protection contre les contrefaçons numériques.",
        },
        {
          q: "Le cluster industriel de Lacq (64) est-il exposé aux cybermenaces industrielles ?",
          a: "Oui. Le bassin de Lacq (Pyrénées-Atlantiques) concentre des industries chimiques et pétrolières (Total Energies, Toray, SOBEGI) dont les systèmes industriels (OT/SCADA) sont des cibles prioritaires. Les attaques sur les systèmes ICS peuvent avoir des conséquences physiques graves. CyberSecure propose des audits de sécurité OT spécialisés pour les industries chimiques et pétrolières de la région.",
        },
        {
          q: "Quels financements disponibles pour un audit cyber en Nouvelle-Aquitaine ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Nouvelle-Aquitaine via ses fonds FEDER et le programme Digital New Aquitaine. Les CCI régionales (CCI Bordeaux Gironde, CCI Pau-Béarn). BPI France Nouvelle-Aquitaine — prêts numériques. Le Pôle Aéronautique Aquitain et Aerospace Valley accompagnent leurs membres. La Cyber Digital Academy de Bordeaux propose des formations et du conseil.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNouvelleAquitaine;
