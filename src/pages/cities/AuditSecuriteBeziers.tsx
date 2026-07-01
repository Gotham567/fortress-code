import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBeziers = () => (
  <CityLandingPage
    data={{
      city: "Béziers",
      citySlug: "beziers",
      region: "Occitanie",
      postalCode: "34500",
      intro: "CyberSecure accompagne les PME et ETI de Béziers avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs viticole, touristique, commercial et logistique de l'Hérault. Notre cabinet qualifié PASSI ANSSI intervient sur site à Béziers pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT.",
      localContext: "Béziers est la capitale viticole du Languedoc-Roussillon, produisant des volumes importants de vins AOC Languedoc, Minervois et Faugères dont les caves coopératives, les négociants et les domaines viticoles développent leur commerce en ligne et leurs outils de traçabilité. La ville est également un hub logistique entre Barcelone et Lyon sur l'axe A9 avec des plateformes de distribution alimentaire en lien avec l'Espagne. L'économie biterroise repose aussi sur un tissu de PME commerçantes et de services dont le niveau de maturité cybersécurité reste à développer. Le CH de Béziers et les établissements de santé du bassin biterrois font face aux cybermenaces ciblant la santé. La proximité de la mer (Cap d'Agde, Valras-Plage) génère une économie touristique saisonnière.",
      sectors: [
        "Viticulture et caves coopératives (Languedoc, AOC)",
        "Logistique et transport (axe A9 France-Espagne)",
        "Tourisme côtier et balnéaire (Cap d'Agde, Valras)",
        "Commerce et distribution alimentaire",
        "Santé (CH Béziers, cliniques Hérault ouest)",
        "Collectivités et Béziers Méditerranée",
      ],
      neighborhoods: [
        "Centre-ville et quartier des Arènes",
        "Zone industrielle de Béziers",
        "Villeneuve-lès-Béziers et zones d'activités",
        "Portiragnes et zones logistiques A9",
        "Cap d'Agde et littoral héraultais (tourisme)",
        "Pézenas et Hérault intérieur (viticulture, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une cave coopérative viticole à Béziers ?",
          a: "Un audit de sécurité pour une cave coopérative ou un négociant en vins de Béziers incluant les systèmes de traçabilité, le site e-commerce et les échanges avec la grande distribution est tarifé entre 4 500 et 10 000 € HT. Pour les grandes caves coopératives avec des systèmes SCADA de vinification, il faut prévoir un audit OT complémentaire. CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Béziers ?",
          a: "Un pentest réseau pour une PME biterroise dure 3 à 6 jours ouvrés. Pour un opérateur logistique avec des interconnexions franco-espagnoles, comptez 5 à 8 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes logistiques d'une entreprise travaillant entre la France et l'Espagne via Béziers ?",
          a: "Les opérateurs logistiques de la zone biterroise gérant des flux France-Espagne utilisent des systèmes EDI, des plateformes de tracking et des interfaces douanières soumises aux contrôles post-Brexit et aux règlements sanitaires phytosanitaires. CyberSecure réalise des audits incluant la revue des flux EDI inter-pays, la sécurité des accès partenaires espagnols, la conformité RGPD pour les transferts de données et la résistance des systèmes de gestion de flotte aux cyberattaques.",
        },
        {
          q: "CyberSecure intervient-il sur site à Béziers et dans l'Hérault ?",
          a: "Oui, nos consultants se déplacent à Béziers, Agde, Pézenas, Clermont-l'Hérault et dans l'ouest de l'Hérault. Nous couvrons également l'Aude (Narbonne, Carcassonne) pour les groupes avec des sites dans les deux départements. Déploiement sous 72h à Béziers.",
        },
        {
          q: "Que faire en cas de cyberattaque à Béziers — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre pour préserver les traces forensiques. Notre équipe peut être déployée sur site à Béziers dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBeziers;
