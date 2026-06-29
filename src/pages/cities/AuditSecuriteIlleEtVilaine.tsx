import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteIlleEtVilaine = () => (
  <CityLandingPage
    data={{
      city: "Ille-et-Vilaine",
      citySlug: "ille-et-vilaine",
      region: "Bretagne",
      postalCode: "35",
      intro: "CyberSecure est votre prestataire audit de sécurité Ille-et-Vilaine (35) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Rennes, Cesson-Sévigné, Saint-Malo, Vitré, Fougères et tout le département.",
      localContext: "L'Ille-et-Vilaine est le cœur du pôle cybersécurité breton. Rennes héberge le campus Cyber Bretagne (Rennes Atalante), l'un des clusters cybersécurité les plus importants d'Europe. Des acteurs comme Thales, Orange Cyberdefense, Amossys et de nombreuses startups cyber constituent un écosystème unique. Cesson-Sévigné est la zone tech principale avec plus de 700 entreprises numériques. Saint-Malo est un port actif avec une économie touristique numérisée. Vitré et Fougères ont des industries agroalimentaires et logistiques importantes.",
      sectors: [
        "Cybersécurité (campus Cyber Bretagne, Thales Rennes, Orange Cyberdefense)",
        "Numérique (Rennes Atalante, Cesson-Sévigné tech hub, Nokia, SFR R&D)",
        "Agroalimentaire (Lactalis, coopératives laitières Ille-et-Vilaine)",
        "Automobile et équipements (sous-traitants, logistique)",
        "Santé (CHU Rennes, cliniques 35, e-santé bretonne)",
        "Télécommunications (Orange Labs Rennes, Nokia Bell Labs, Capgemini)",
        "Tourisme (Saint-Malo, Cancale, Mont-Saint-Michel)",
        "Collectivités (Rennes Métropole, Saint-Malo Agglomération, CD35)",
      ],
      neighborhoods: [
        "Rennes – Centre – Beaulieu (35000)",
        "Cesson-Sévigné – Via Silva (35510)",
        "Rennes Atalante – Saint-Jacques-de-la-Lande (35700)",
        "Saint-Malo – Paramé (35400)",
        "Vitré – Fougères (35500/35300)",
        "Redon – Bain-de-Bretagne (35600)",
        "Bruz – Chavagne (35170)",
        "Saint-Grégoire – Betton (35760)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout l'Ille-et-Vilaine (35) ?",
          a: "Oui, CyberSecure intervient dans tout le département de l'Ille-et-Vilaine : Rennes Métropole, Pays de Saint-Malo, Pays de Vitré, Pays de Fougères et Pays de Redon. Nos consultants sont intégrés dans l'écosystème Rennes Atalante / campus Cyber Bretagne. CERT d'urgence 24/7.",
        },
        {
          q: "Le campus Cyber Bretagne à Rennes rend-il les entreprises du 35 plus exposées ou plus protégées ?",
          a: "Plus protégées ! Le campus Cyber Bretagne a attiré des centaines d'experts en cybersécurité et a développé un écosystème d'accompagnement unique. Les entreprises de l'Ille-et-Vilaine bénéficient d'un accès privilégié à des compétences cyber de haut niveau et à un réseau d'experts. CyberSecure fait partie de cet écosystème et propose des audits et pentests avec des méthodologies éprouvées.",
        },
        {
          q: "Thales à Rennes (Rennes Atalante) impose-t-il des exigences cyber à ses sous-traitants ?",
          a: "Oui. Thales (défense, aérospatial, cybersécurité) impose des exigences de sécurité élevées à ses fournisseurs : clause ITAR/EAR pour les technologies de défense américaines, exigences ISO 27001, et dans certains cas des accréditations de niveau Diffusion Restreinte. Les PME sous-traitantes de Thales à Rennes doivent répondre à ces exigences. CyberSecure accompagne ces entreprises dans leurs démarches.",
        },
        {
          q: "Quels financements pour un audit cyber en Ille-et-Vilaine ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Ille-et-Vilaine et la CCI Bretagne — diagnostics numériques. Rennes Métropole — programmes de soutien aux entreprises numériques. BPI France Bretagne — prêts innovation. Le campus Cyber Bretagne propose également des ressources pour les membres de l'écosystème.",
        },
        {
          q: "Délai d'intervention pour un pentest ou un audit NIS2 en Ille-et-Vilaine ?",
          a: "Pour un pentest planifié, nos délais habituels sont de 5 à 15 jours ouvrés selon le périmètre. Pour une réponse à incident en urgence, notre CERT intervient en moins de 4 heures sur Rennes et Cesson-Sévigné. Délai maximum de 8 heures sur l'ensemble du département.",
        },
      ],
    }}
  />
);

export default AuditSecuriteIlleEtVilaine;
