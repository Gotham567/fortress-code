import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAnnecy = () => (
  <CityLandingPage
    data={{
      city: "Annecy",
      citySlug: "annecy",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "74000",
      intro: "CyberSecure accompagne les PME et ETI d'Annecy avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs industriel de précision, touristique alpin et mécatronique de Haute-Savoie. Notre cabinet qualifié PASSI ANSSI intervient sur site à Annecy pour des missions d'audit réseau, d'audit Active Directory et de pentest application web pour les entreprises du bassin annécien.",
      localContext: "Annecy est un pôle industriel de précision et de mécatronique reconnu, avec des entreprises comme Salomon (équipements de sport), Somfy (domotique), des sous-traitants aéronautiques et des PME de décolletage dont les savoir-faire sont exposés à l'espionnage industriel et aux ransomwares. Le tourisme alpin (ski, voile sur le lac, randonnée) génère une économie hôtelière et de loisirs manipulant de nombreuses données personnelles et bancaires sur des plateformes de réservation en ligne. La proximité de la Suisse et de Genève génère un tissu d'entreprises à dimension internationale avec des architectures IT multi-pays. L'Université Savoie Mont Blanc et ses campus annéciens forment un écosystème académique et de startups en plein essor.",
      sectors: [
        "Industrie de précision et mécatronique (Salomon, Somfy, sous-traitants)",
        "Tourisme alpin et hôtellerie (lac et montagnes)",
        "Décolletage et sous-traitance aéronautique",
        "Numérique et startups (Haute-Savoie Innovation)",
        "Santé (CH Annecy-Genevois, cliniques)",
        "Collectivités et Grand Annecy",
      ],
      neighborhoods: [
        "Centre-ville et Vieille Ville (Palais de l'Île)",
        "Cran-Gevrier et Seynod (zones industrielles)",
        "Argonay et zone nord (aéronautique, logistique)",
        "Annecy-le-Vieux et rives du lac",
        "Thônes et Aravis (industrie montagne)",
        "Annemasse et Genevois français (frontaliers Suisse)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour une PME industrielle de précision à Annecy ?",
          a: "Un pentest réseau pour une PME de mécatronique ou de décolletage à Annecy est tarifé entre 5 500 et 12 000 € HT selon le périmètre. Pour une ETI comme Somfy avec des systèmes IoT et des plateformes cloud, le budget d'un audit complet se situe entre 10 000 et 25 000 € HT. CyberSecure propose également des audits de la sécurité des objets connectés (IoT) pour les fabricants de domotique. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit sécurité informatique à Annecy ?",
          a: "Un audit réseau pour une PME annécienne dure 4 à 7 jours ouvrés. Pour une ETI avec des architectures IoT ou cloud, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 4 jours. CyberSecure peut intervenir sur site à Annecy dans les 72h pour les urgences.",
        },
        {
          q: "Comment auditer la sécurité des objets connectés (IoT) d'un fabricant de domotique à Annecy ?",
          a: "Les fabricants de domotique comme Somfy et leurs partenaires annnéciens produisent des objets connectés qui communiquent via des protocoles radio (Z-Wave, Zigbee, RF) et des plateformes cloud. CyberSecure réalise des audits IoT incluant le test des firmwares des équipements, l'analyse des protocoles de communication, la revue des plateformes cloud associées et les tests d'authentification des API. Nous appliquons les recommandations du référentiel ANSSI sur la sécurité des objets connectés et de l'ETSI EN 303 645.",
        },
        {
          q: "CyberSecure intervient-il sur site à Annecy et en Haute-Savoie ?",
          a: "Oui, nos consultants se déplacent à Annecy, Cran-Gevrier, Seynod, Thônes, Annemasse, Cluses, Chamonix et dans toute la Haute-Savoie. Nous couvrons également la Savoie (Chambéry) et le Genevois français pour les entreprises avec des sites en zone frontalière. Déploiement sous 48h à Annecy.",
        },
        {
          q: "Que faire en cas de cyberattaque à Annecy — procédure CERT ?",
          a: "Contactez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre pour préserver les traces forensiques. Notre équipe peut être sur site à Annecy dans les 4 heures pour contenir l'attaque, analyser le vecteur d'intrusion et coordonner la reprise. CyberSecure prend en charge les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAnnecy;
