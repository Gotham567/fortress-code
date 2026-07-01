import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAuxerre = () => (
  <CityLandingPage
    data={{
      city: "Auxerre",
      citySlug: "auxerre",
      region: "Bourgogne-Franche-Comté",
      postalCode: "89000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les PME, coopératives agroalimentaires et industriels d'Auxerre et de l'Yonne avec des audits de sécurité informatique et des pentests adaptés à leur réalité économique. Test d'intrusion Auxerre PME, audit sécurité Yonne : nos experts se déplacent sur site.",
      localContext: "Auxerre est le chef-lieu du département de l'Yonne et un bassin économique ancré dans l'agroalimentaire (filière viticole Chablis, coopératives), l'industrie légère et les services aux entreprises. Les PME et ETI de l'Yonne sont de plus en plus ciblées par des ransomwares opportunistes qui exploitent des systèmes mal mis à jour, des accès RDP exposés et des sauvegardes insuffisantes. La transformation numérique des exploitations viticoles et des IAA (Industrie Agroalimentaire) crée de nouvelles surfaces d'attaque. CyberSecure intervient à Auxerre, Sens, Joigny, Avallon et dans tout le département Yonne.",
      sectors: [
        "Viticulture et agroalimentaire (Chablis, coopératives)",
        "Industrie légère et manufacture",
        "Commerce et distribution",
        "Santé (Centre Hospitalier d'Auxerre)",
        "Collectivités et administrations",
        "PME de services et artisanat",
      ],
      neighborhoods: [
        "Auxerre Centre et Saint-Georges",
        "Saint-Gervais et zone industrielle",
        "Sens et Sens Sud",
        "Joigny, Migennes, Tonnerre",
        "Avallon et Vézelay",
        "Tout le département Yonne",
      ],
      faq: [
        {
          q: "Quel est le tarif d'un pentest pour une PME à Auxerre ?",
          a: "Un pentest web pour une PME d'Auxerre démarre à 4 000 € HT pour une application. Un audit réseau interne complet varie entre 8 000 et 15 000 € HT selon le nombre de serveurs et d'équipements à tester. Pour les petites structures (moins de 20 salariés), nous proposons un audit rapide de 2 jours à partir de 3 000 € HT couvrant les risques prioritaires. Devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité informatique à Auxerre ?",
          a: "Un audit de cybersécurité pour une PME de l'Yonne dure généralement 2 à 5 jours selon le périmètre. Un audit organisationnel (politiques de sécurité, RGPD, sensibilisation) prend 1 à 2 jours. Un pentest réseau complet avec rapport de remédiation nécessite 3 à 7 jours. Nous planifions les interventions en dehors des pics d'activité pour minimiser les perturbations.",
        },
        {
          q: "Les caves et coopératives viticoles du Chablis sont-elles des cibles cyberattaques ?",
          a: "Oui. Les coopératives viticoles et caves du Chablis gèrent des données commerciales sensibles (contrats de négoce, clients internationaux, stocks) ainsi que des systèmes de contrôle de production. Les ransomwares ciblant l'agroalimentaire ont augmenté de 60 % en deux ans. Une attaque en période de vendanges peut paralyser toute la chaîne de production et de vente. CyberSecure propose des audits adaptés aux TPE/PME viticoles avec des recommandations pragmatiques et des budgets maîtrisés.",
        },
        {
          q: "Intervenez-vous sur site à Auxerre et dans l'Yonne ?",
          a: "Oui. Nos consultants se déplacent sur site à Auxerre, Sens, Joigny, Migennes, Avallon, Tonnerre et dans tout le département de l'Yonne. Certaines missions (revue de configuration, audit organisationnel, analyse de sauvegardes) peuvent être réalisées à distance pour réduire les coûts et les délais. Nous intervenons également dans les départements limitrophes (Nièvre, Côte-d'Or, Loiret).",
        },
        {
          q: "Que faire si mon entreprise auxerroise est victime d'un ransomware ?",
          a: "Appelez immédiatement notre ligne CERT (disponible 24h/24 et 7j/7). Isolez les machines touchées du réseau local sans les éteindre. Ne tentez pas de déchiffrer vous-même les fichiers et ne payez pas la rançon sans avis d'expert. Signalez l'incident sur cybermalveillance.gouv.fr et, si des données personnelles ont été compromises, notifiez la CNIL sous 72 heures. Nos consultants CyberSecure interviennent à Auxerre pour contenir l'attaque et restaurer l'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAuxerre;
