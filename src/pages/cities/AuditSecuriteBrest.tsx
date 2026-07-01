import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBrest = () => (
  <CityLandingPage
    data={{
      city: "Brest",
      citySlug: "brest",
      region: "Bretagne",
      postalCode: "29200",
      intro: "CyberSecure réalise des audits de sécurité informatique et pentests à Brest pour les PME et ETI du Finistère, avec une expertise spécifique sur les environnements naval, défense et recherche océanographique. Notre cabinet qualifié PASSI ANSSI intervient sur site à Brest pour protéger les systèmes d'information des entreprises exposées aux menaces cyber dans un bassin économique stratégique.",
      localContext: "Brest accueille la principale base opérationnelle des sous-marins nucléaires de la Marine Nationale et un écosystème dense de sous-traitants de défense dont la sécurité informatique est d'une importance critique. L'IFREMER, l'IRD et les laboratoires de l'Université de Bretagne Occidentale mènent des recherches océanographiques dont les données constituent des actifs sensibles face à l'espionnage industriel. La French Tech Brest+ fédère un écosystème numérique de startups et PME technologiques croissantes. Les pêcheries industrielles et les entreprises agroalimentaires bretonnes s'informatisent rapidement, élargissant leur surface d'attaque sans toujours disposer des ressources cybersécurité adaptées.",
      sectors: [
        "Défense et naval (Marine Nationale, Naval Group)",
        "Recherche océanographique (IFREMER, UBO)",
        "Numérique et French Tech (startups, ESN)",
        "Pêche industrielle et agroalimentaire",
        "Santé (CHRU Brest, cliniques)",
        "Collectivités et métropole de Brest",
      ],
      neighborhoods: [
        "Recouvrance (zone navale et arsenaux)",
        "Technopôle Brest-Iroise (recherche, numérique)",
        "Centre-ville et quartier Saint-Martin",
        "Guipavas et zone aéroport",
        "Plougastel-Daoulas et Presqu'île",
        "Landerneau et hinterland finistérien",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour un sous-traitant de la défense navale à Brest ?",
          a: "Un pentest complet pour un sous-traitant de la Marine Nationale ou de Naval Group à Brest se situe entre 8 000 et 18 000 € HT selon la complexité des systèmes et les exigences de classification. Les audits de conformité aux référentiels IGI 1300 et ANSSI pour les entreprises traitant des informations classifiées font l'objet d'un devis spécifique. CyberSecure est qualifié PASSI ANSSI et habilité à intervenir sur ces environnements sensibles.",
        },
        {
          q: "Quel est le délai pour un audit réseau ETI à Brest ?",
          a: "Un audit réseau pour une ETI de 100 à 500 collaborateurs à Brest dure généralement 5 à 10 jours ouvrés selon le périmètre. L'audit Active Directory seul prend 3 à 5 jours. Le rapport de préconisations avec plan de remédiation prioritisé est livré dans les 5 jours ouvrés suivant la fin de la mission. CyberSecure peut intervenir en urgence sous 72h.",
        },
        {
          q: "Comment auditer les systèmes informatiques d'un laboratoire de recherche océanographique à Brest ?",
          a: "Les laboratoires de recherche comme l'IFREMER manipulent des données scientifiques sensibles et collaborent avec des partenaires internationaux via des accès distants multiples. CyberSecure réalise des audits d'architecture incluant la revue des interconnexions avec les partenaires, le test des accès VPN, l'analyse des politiques de sauvegarde des données et la conformité RGPD pour les transferts internationaux. Nous évaluons également la sécurité des équipements embarqués sur les navires de recherche connectés.",
        },
        {
          q: "Intervenez-vous à Brest et dans le Finistère pour des missions de cybersécurité ?",
          a: "Oui, CyberSecure intervient sur site à Brest, Quimper, Morlaix, Landerneau, Douarnenez et dans l'ensemble du département Finistère. Nos consultants peuvent également couvrir le Finistère Nord (Roscoff, Saint-Pol-de-Léon) et les îles pour certaines missions. Le déploiement sur site à Brest est possible sous 48h.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un système de la Marine ou d'un sous-traitant à Brest ?",
          a: "Isolez immédiatement les systèmes compromis et contactez le CERT de CyberSecure (24h/24, 7j/7). Pour les systèmes impliquant des informations classifiées, contactez également la DRSD (Direction du Renseignement et de la Sécurité de la Défense). CyberSecure assure la réponse à incident, l'analyse forensique et la notification ANSSI/CNIL. Notre équipe peut être présente sur site à Brest dans les 4 heures. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBrest;
