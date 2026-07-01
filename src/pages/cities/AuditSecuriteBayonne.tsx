import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBayonne = () => (
  <CityLandingPage
    data={{
      city: "Bayonne",
      citySlug: "bayonne",
      region: "Nouvelle-Aquitaine",
      postalCode: "64100",
      intro: "CyberSecure accompagne les PME et ETI de Bayonne avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs agroalimentaire basque, chimique et touristique des Pyrénées-Atlantiques. Notre cabinet qualifié PASSI ANSSI intervient sur site à Bayonne et dans l'agglomération BAB (Bayonne-Anglet-Biarritz) pour protéger les systèmes d'information contre les cybermenaces régionales.",
      localContext: "Bayonne est la capitale économique du Pays Basque français avec un tissu agroalimentaire très dense : le jambon de Bayonne (IGP) avec ses ateliers de fabrication et ses systèmes de traçabilité, Lindt & Sprüngli (chocolat) et les nombreuses coopératives basques constituent des fleurons industriels dont les savoir-faire et données commerciales sont exposés à la cybercriminalité. Le pôle chimique de Lacq, en périphérie bayonnaise, héberge des industriels chimistes dont les systèmes de contrôle de procédés (SCADA) sont des cibles critiques. L'attractivité touristique de Biarritz et de la Côte Basque génère une économie hôtelière et de luxe manipulant de nombreuses données personnelles. La proximité de l'Espagne (Bilbao à 1h) génère des flux transfrontaliers.",
      sectors: [
        "Agroalimentaire basque (jambon Bayonne, Lindt, chocolatiers)",
        "Chimie industrielle (Lacq, matériaux composites)",
        "Tourisme côtier et hôtellerie haut de gamme (Biarritz)",
        "Commerce et distribution (agglomération BAB)",
        "Santé (CH Bayonne, cliniques Pyrénées-Atlantiques)",
        "Collectivités et Communauté d'Agglomération du Pays Basque",
      ],
      neighborhoods: [
        "Grand Bayonne (centre historique, commerces)",
        "Anglet (zones d'activités, technopôle Izarbel)",
        "Biarritz (tourisme, hôtellerie de luxe)",
        "Mouguerre et zone industrielle nord-est",
        "Hendaye et frontière espagnole (frontaliers)",
        "Saint-Jean-de-Luz et Côte Basque sud",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une entreprise agroalimentaire basque à Bayonne ?",
          a: "Un audit de sécurité pour une PME agroalimentaire de Bayonne (jambon, chocolat, conserves basques) incluant les systèmes de traçabilité et les plateformes e-commerce est tarifé entre 5 500 et 12 000 € HT. Pour Lindt ou un grand fabricant avec des systèmes de production automatisés, le budget d'un audit complet SI + OT se situe entre 12 000 et 25 000 € HT. CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Bayonne ?",
          a: "Un pentest réseau pour une PME bayonnaise dure 4 à 7 jours ouvrés. Un audit chimique incluant les systèmes SCADA de la zone de Lacq prend 8 à 15 jours selon la complexité. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir en urgence sous 72h à Bayonne.",
        },
        {
          q: "Comment sécuriser les systèmes de contrôle industriel (SCADA) d'un site chimique dans la zone de Lacq près de Bayonne ?",
          a: "Les sites chimiques de la zone de Lacq utilisent des systèmes de contrôle de procédés (DCS/SCADA) dont la compromission peut entraîner des accidents industriels graves. CyberSecure réalise des audits OT/IT selon la norme IEC 62443, incluant la cartographie des réseaux OT, l'analyse des cloisonnements entre le SI de gestion et les automates industriels, le test des accès distants de maintenance et la revue des procédures de mise à jour des firmwares. Nous intervenons sans interruption de production.",
        },
        {
          q: "CyberSecure intervient-il sur site à Bayonne et dans l'agglomération BAB ?",
          a: "Oui, nos consultants se déplacent à Bayonne, Anglet, Biarritz, Hendaye, Saint-Jean-de-Luz, Mouguerre et dans toute l'agglomération Pays Basque. Nous couvrons également les Landes (Dax, Mont-de-Marsan) et les Hautes-Pyrénées (Tarbes) pour les groupes ayant des sites dans plusieurs départements de Nouvelle-Aquitaine. Déploiement sous 48h à Bayonne.",
        },
        {
          q: "Que faire en cas de cyberattaque à Bayonne — quelle est la procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (ligne d'urgence 24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les sites chimiques ou industriels, activez également votre plan d'urgence interne. Notre équipe peut être sur site à Bayonne dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBayonne;
