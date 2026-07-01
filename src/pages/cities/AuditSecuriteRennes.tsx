import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteRennes = () => (
  <CityLandingPage
    data={{
      city: "Rennes",
      citySlug: "rennes",
      urlPath: "cybersecurite-rennes",
      region: "Bretagne",
      postalCode: "35000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les entreprises rennaises et bretonnes avec des audits de cybersécurité et des pentests spécialisés. Défense, télécoms Orange, agroalimentaire breton et numérique : nos experts protègent les entreprises de Rennes et de toute la Bretagne contre les cyberattaques ciblées.",
      localContext: "Rennes est un pôle numérique majeur avec des acteurs de la défense (DGA Maîtrise de l'Information, Naval Group, Thales), des télécoms (Orange Labs, Bouygues Telecom), un secteur agroalimentaire breton très développé (Lactalis, Le Duff, coopératives) et une scène tech dynamique. La présence militaire et de défense sur le territoire crée des enjeux de cybersécurité spécifiques liés à la protection du secret défense et au cyberespionnage industriel. Le secteur télécom rennais est également une cible pour les attaques visant les infrastructures critiques. CyberSecure intervient à Rennes, Cesson-Sévigné, Bruz, Saint-Malo et dans toute la Bretagne.",
      sectors: [
        "Défense et renseignement (DGA, Naval Group, Thales)",
        "Télécommunications (Orange Labs, Bouygues)",
        "Agroalimentaire breton (Lactalis, Le Duff, coopératives)",
        "Numérique et ESN (Rennes Atalante)",
        "Santé (CHU de Rennes)",
        "Collectivités et administrations bretonnes",
      ],
      neighborhoods: [
        "Rennes Centre et Villejean",
        "Cesson-Sévigné et Rennes Atalante",
        "Bruz et aéroport",
        "Saint-Malo, Dinard, Fougères",
        "Brest, Lorient, Quimper",
        "Vannes, Saint-Brieuc et toute la Bretagne",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une ETI rennaise du numérique ou de la défense ?",
          a: "Un pentest réseau et applicatif pour une ETI rennaise varie entre 10 000 et 25 000 € HT selon le périmètre. Pour les sous-traitants de la défense soumis à l'IGI 1300, un audit complet (réseau, AD, applications, conformité) est généralement compris entre 15 000 et 35 000 € HT. Un pentest télécom spécialisé (infrastructure SS7, signalisation, core network) pour un opérateur est disponible sur devis. Les PME numériques bénéficient de pentests web à partir de 4 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une entreprise à Rennes ?",
          a: "Un audit de sécurité pour une PME rennaise dure 3 à 7 jours selon le périmètre. Pour une ETI de la défense ou des télécoms, un audit complet (réseau, systèmes, conformité) nécessite 10 à 25 jours. Pour les coopératives agroalimentaires avec des systèmes OT de production, prévoir 5 à 15 jours. Nous planifions les interventions pour minimiser l'impact sur votre activité et votre production.",
        },
        {
          q: "Avez-vous des habilitations pour intervenir chez des clients défense à Rennes ?",
          a: "Nos consultants disposent des habilitations nécessaires pour intervenir dans des environnements classifiés. Nous maîtrisons les exigences IGI 1300, les référentiels II 901 et les procédures de sécurité des systèmes d'information classifiés. Nos audits pour les sous-traitants défense couvrent la conformité aux politiques de sécurité des systèmes d'information (PSSI) imposées par les donneurs d'ordre comme Naval Group, Thales ou la DGA.",
        },
        {
          q: "Quel pentest pour une entreprise de télécommunications à Rennes ?",
          a: "Pour les opérateurs et équipementiers télécoms rennais, nous réalisons des pentests spécialisés : infrastructure réseau cœur, signalisation SS7/Diameter, protocoles SIP/VoIP, API exposées (MVNO, services à valeur ajoutée), et revue de l'architecture de sécurité conformément aux guides ANSSI TELCO. Nous évaluons également la sécurité des plateformes cloud télécoms et des interfaces avec les partenaires de roaming.",
        },
        {
          q: "Que faire en cas de cyberattaque contre une entreprise à Rennes ?",
          a: "Contactez immédiatement notre CERT (disponible 24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les entreprises de la défense, notifiez votre officier sécurité et le donneur d'ordre selon les procédures en vigueur. Pour les opérateurs télécoms soumis à NIS2, notifiez l'ANSSI dans les délais réglementaires. Nos experts CyberSecure peuvent être déployés à Rennes sous 4 heures pour contenir l'incident.",
        },
      ],
    }}
  />
);

export default AuditSecuriteRennes;
