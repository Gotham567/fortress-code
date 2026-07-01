import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteSaintEtienne = () => (
  <CityLandingPage
    data={{
      city: "Saint-Étienne",
      citySlug: "saint-etienne",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "42000",
      intro: "CyberSecure accompagne les PME et ETI de Saint-Étienne avec des audits de sécurité informatique, des pentests et des tests d'intrusion adaptés aux secteurs métallurgique, médical et numérique du bassin stéphanois. Notre cabinet qualifié PASSI ANSSI intervient sur site à Saint-Étienne pour des missions d'audit réseau, d'audit Active Directory et de réponse à incident CERT.",
      localContext: "Saint-Étienne est une ville en pleine transformation économique portée par la Cité du Design, pôle d'excellence mondial qui attire des entreprises créatives et des agences numériques dont les données clients sont des actifs sensibles. L'héritage industriel de la métropole se perpétue dans des PME de métallurgie, d'armurerie et de mécanique de précision exposées aux cybermenaces industrielles et à l'espionnage économique. Le CHU de Saint-Étienne, troisième CHU d'Auvergne-Rhône-Alpes, et les nombreuses cliniques stéphanoises font face aux attaques ransomware ciblant la santé. L'Université Jean Monnet et ses laboratoires de recherche génèrent des données scientifiques qui nécessitent une protection adaptée.",
      sectors: [
        "Métallurgie, armes et mécanique de précision",
        "Design et industries créatives (Cité du Design)",
        "Santé (CHU, cliniques, EHPAD Loire)",
        "Numérique et ESN stéphanoises",
        "Textile technique et industrie du futur",
        "Commerce et distribution grand public",
      ],
      neighborhoods: [
        "Centre-ville et Cité du Design (Manufacture)",
        "Châteaucreux (quartier d'affaires, gare TGV)",
        "La Plaine Achille (zone industrielle)",
        "Monthieu et zone commerciale nord",
        "Firminy et vallée du Gier",
        "Andrézieux-Bouthéon (aéroport, zones d'activités)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour une PME métallurgique ou de mécanique de précision à Saint-Étienne ?",
          a: "Un pentest réseau pour une PME industrielle de Saint-Étienne est tarifé entre 6 000 et 12 000 € HT. Si des équipements de production connectés (SCADA, automates) sont inclus, le tarif est majoré de 2 000 à 4 000 € HT. Un pentest applicatif web pour une agence numérique ou une entreprise de design débute à 4 000 € HT. CyberSecure fournit un devis personnalisé gratuit sous 48h.",
        },
        {
          q: "Quel est le délai pour un audit sécurité informatique à Saint-Étienne ?",
          a: "Un audit réseau pour une PME stéphanoise s'étale sur 4 à 7 jours ouvrés. Un audit Active Directory complet sur une ETI de 200 collaborateurs prend 3 à 5 jours. CyberSecure peut intervenir sur site à Saint-Étienne dans les 48 à 72h pour les missions urgentes et livrer le rapport de recommandations dans un délai de 2 à 3 semaines après la mission.",
        },
        {
          q: "Comment sécuriser un atelier de production connecté (Industrie 4.0) à Saint-Étienne ?",
          a: "Les PME industrielles stéphanoises qui déploient des solutions Industrie 4.0 (cobots, MES, capteurs IoT) créent des passerelles entre leur SI de gestion et leurs équipements de production qui constituent des vecteurs d'attaque critiques. CyberSecure réalise des audits OT/IT incluant la cartographie des flux, l'évaluation des cloisonnements réseau entre IT et OT, et le test des interfaces HMI. Nous appliquons les recommandations du guide ANSSI sur la sécurité des systèmes industriels.",
        },
        {
          q: "CyberSecure intervient-il sur site à Saint-Étienne et dans la Loire ?",
          a: "Oui, nos consultants interviennent physiquement à Saint-Étienne, Roanne, Firminy, Le Chambon-Feugerolles, Andrézieux-Bouthéon et dans l'ensemble du département Loire. Nous couvrons également la zone de Lyon-Sud pour les groupes ayant des sites dans les deux agglomérations. Déploiement sur site sous 48h.",
        },
        {
          q: "Que faire en cas de cyberattaque à Saint-Étienne — procédure d'urgence CERT ?",
          a: "Contactez immédiatement le CERT de CyberSecure (ligne d'urgence 24h/24, 7j/7). Isolez les systèmes touchés sans les éteindre. Notre équipe peut être déployée sur site à Saint-Étienne dans les 4 heures pour contenir l'attaque, analyser le vecteur d'intrusion et préserver les preuves numériques. CyberSecure assure les notifications ANSSI et CNIL. Tarif d'intervention CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteSaintEtienne;
