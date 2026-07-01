import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLaval = () => (
  <CityLandingPage
    data={{
      city: "Laval",
      citySlug: "laval",
      region: "Pays de la Loire",
      postalCode: "53000",
      intro: "CyberSecure accompagne les PME et ETI de Laval avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs agroalimentaire, industriel et numérique de la Mayenne. Notre cabinet qualifié PASSI ANSSI intervient sur site à Laval pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises mayennaises.",
      localContext: "Laval est un pôle agroalimentaire reconnu (Lactalis y a son siège mondial, Andros, Le Duff) dont les systèmes de gestion de la traçabilité et les ERP de production constituent des cibles cybercriminelles à haute valeur. L'industrie mayennaise, notamment l'électronique et la plasturgie (Lacroix Electronics, Anjou Industries), développe des compétences en Industrie 4.0 qui élargissent la surface d'attaque des PME. Le numérique lavallois est en essor avec le Laval Virtual Center (réalité virtuelle et augmentée) dont les savoir-faire constituent des actifs immatériels à protéger. Le CH de Laval et les établissements de santé de Mayenne font face aux ransomwares ciblant la santé publique.",
      sectors: [
        "Agroalimentaire (Lactalis, Andros, industrie laitière)",
        "Électronique et industrie 4.0 (Lacroix Electronics)",
        "Numérique et réalité virtuelle (Laval Virtual Center)",
        "Santé (CH Laval, cliniques Mayenne)",
        "Agriculture et coopératives mayennaises",
        "Collectivités et Laval Agglomération",
      ],
      neighborhoods: [
        "Centre-ville historique de Laval (château, vieille ville)",
        "Zone industrielle de Laval Saint-Nicolas",
        "Changé et zones d'activités est",
        "L'Huisserie et zones d'activités logistique",
        "Bonchamp-lès-Laval et zones industrielles",
        "Château-Gontier et Mayenne sud (agroalimentaire)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un groupe agroalimentaire comme Lactalis à Laval ?",
          a: "Un audit de sécurité pour un groupe agroalimentaire comme Lactalis (siège mondial à Laval) ou un sous-traitant mayennais est tarifé selon la taille du SI et le périmètre. Pour un site de production avec des systèmes SCADA et des ERP de traçabilité, le budget se situe entre 12 000 et 35 000 € HT. Pour les PME agroalimentaires mayennaises, un audit ciblé démarre à 5 500 € HT. CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Laval ?",
          a: "Un pentest réseau pour une PME lavalloise dure 4 à 7 jours ouvrés. Pour une ETI agroalimentaire avec des interconnexions fournisseurs et des systèmes de traçabilité, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes informatiques d'une usine agroalimentaire à Laval face aux risques cyber (SCADA, ERP) ?",
          a: "Les usines agroalimentaires de Laval (laiteries, fromageries) utilisent des systèmes de conduite de process (SCADA, automates) interconnectés aux ERP de traçabilité et aux systèmes de gestion de la chaîne du froid. CyberSecure réalise des audits OT/IT incluant la cartographie des flux réseau entre SI de gestion et SI de production, le test des cloisonnements, l'évaluation de la sécurité des accès de maintenance à distance et la conformité aux normes IFS/BRC pour les systèmes informatisés d'assurance qualité.",
        },
        {
          q: "CyberSecure intervient-il sur site à Laval et en Mayenne ?",
          a: "Oui, nos consultants se déplacent à Laval, Mayenne, Château-Gontier, Evron et dans tout le département de la Mayenne. Nous couvrons également la Sarthe (Le Mans) et l'Ille-et-Vilaine (Rennes) pour les groupes avec des sites dans plusieurs départements des Pays de la Loire et de Bretagne. Déploiement sous 72h à Laval.",
        },
        {
          q: "Que faire en cas de cyberattaque à Laval — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Notre équipe peut être déployée sur site à Laval dans les 4 heures pour contenir l'attaque et coordonner la reprise d'activité. CyberSecure prend en charge les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLaval;
