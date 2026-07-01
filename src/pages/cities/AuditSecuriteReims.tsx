import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteReims = () => (
  <CityLandingPage
    data={{
      city: "Reims",
      citySlug: "reims",
      region: "Grand Est",
      postalCode: "51100",
      intro: "CyberSecure accompagne les PME et ETI de Reims avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs du champagne, de l'agroalimentaire et de l'industrie rémoise. Notre cabinet qualifié PASSI ANSSI intervient sur site à Reims pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT ciblées sur les enjeux économiques spécifiques de la Marne.",
      localContext: "Reims est la capitale mondiale du champagne, abritant les sièges et caves de maisons emblématiques comme Moët & Chandon, Veuve Clicquot, Mumm et Taittinger, dont les recettes d'assemblage, les fichiers clients à haute valeur et les systèmes de traçabilité des millésimes constituent des actifs immatériels extrêmement sensibles. L'agroalimentaire rémois (sucreries, biscuiteries) et les industries diverses (packaging, chimie) complètent un tissu économique PME/ETI nécessitant une cybersécurité adaptée. Le CHU de Reims et les établissements de santé de la Marne sont exposés aux ransomwares qui frappent régulièrement les hôpitaux français. L'Université de Reims Champagne-Ardenne et ses campus numériques génèrent des risques cybersécurité liés aux environnements académiques ouverts.",
      sectors: [
        "Champagne et viticulture haut de gamme (Moët, Veuve Clicquot)",
        "Agroalimentaire (sucreries, biscuiteries Marne)",
        "Santé (CHU Reims, cliniques, EHPAD)",
        "Industrie et packaging (chimie, papeterie)",
        "Tourisme culturel et hôtellerie de prestige",
        "Collectivités et Grand Reims",
      ],
      neighborhoods: [
        "Centre-ville et quartier de la Cathédrale",
        "Bezannes (TGV, zones d'activités nouvelles)",
        "Zone industrielle de Reims-Moulin de l'Écaille",
        "Tinqueux et zones commerciales ouest",
        "Épernay et Vallée de la Marne (champagne)",
        "Châlons-en-Champagne et Marne rurale",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une maison de champagne à Reims ?",
          a: "Un audit de sécurité pour une maison de champagne de Reims ou de la Vallée de la Marne inclut la protection des recettes d'assemblage, des bases clients grands crus et des systèmes de commandes en ligne. Le budget se situe entre 8 000 et 20 000 € HT selon la taille de la maison et le périmètre SI. Pour les vignerons indépendants avec un site e-commerce, un audit ciblé pentest web est disponible dès 4 500 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest ou audit réseau à Reims ?",
          a: "Un pentest réseau pour une PME rémoise dure 4 à 7 jours ouvrés. Pour une ETI agroalimentaire avec plusieurs sites, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 4 jours. CyberSecure peut intervenir sur site à Reims dans les 72h pour les urgences et livre le rapport avec recommandations dans les 5 jours ouvrés après la fin des tests.",
        },
        {
          q: "Comment protéger les recettes et données commerciales d'une maison de champagne contre l'espionnage industriel ?",
          a: "Les maisons de champagne détiennent des secrets industriels (assemblages, cépages, procédés de vieillissement) et des bases de données clients très haute valeur qui attirent l'espionnage industriel et le piratage commercial. CyberSecure réalise des audits de classification des données, des tests d'exfiltration, des revues des accès partenaires et distributeurs, et des évaluations de la sécurité des portails B2B. Nous recommandons également des solutions de DLP et de traçabilité des accès aux informations sensibles.",
        },
        {
          q: "CyberSecure intervient-il sur site à Reims et dans la Marne ?",
          a: "Oui, nos consultants se déplacent à Reims, Épernay, Châlons-en-Champagne, Vitry-le-François et dans l'ensemble de la Marne. Nous couvrons également l'Aube (Troyes) et les Ardennes (Charleville-Mézières) pour les groupes ayant des sites en Grand Est. Déploiement sous 48h à Reims.",
        },
        {
          q: "Que faire en cas de cyberattaque à Reims — procédure d'urgence CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (ligne d'urgence disponible 24h/24 et 7j/7). Isolez les systèmes compromis sans les éteindre pour préserver les traces forensiques. Notre équipe peut être sur site à Reims dans les 4 heures pour contenir l'attaque, analyser l'intrusion et coordonner la reprise d'activité. CyberSecure prend en charge les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteReims;
