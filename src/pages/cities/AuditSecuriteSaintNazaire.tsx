import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteSaintNazaire = () => (
  <CityLandingPage
    data={{
      city: "Saint-Nazaire",
      citySlug: "saint-nazaire",
      region: "Pays de la Loire",
      postalCode: "44600",
      intro: "CyberSecure accompagne les PME et ETI de Saint-Nazaire avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs naval, aéronautique et de l'énergie offshore qui font de Saint-Nazaire l'un des sites industriels les plus stratégiques de France. Notre cabinet qualifié PASSI ANSSI intervient sur site à Saint-Nazaire pour des missions d'audit réseau, d'audit Active Directory et de réponse à incident CERT.",
      localContext: "Saint-Nazaire abrite les Chantiers de l'Atlantique (rachetés par MSC), le plus grand chantier naval civil d'Europe, constructeur de paquebots géants pour les plus grandes compagnies mondiales. Les systèmes de conception navale (CAO 3D), de gestion de chantier et de chaîne logistique constituent des actifs d'une valeur extraordinaire exposés à l'espionnage industriel et aux ransomwares. Airbus Atlantic (nacelles moteurs A320/A350) représente le volet aéronautique d'une économie nazairienne à très haute valeur technologique. Les projets d'éoliennes offshore (Saint-Nazaire Offshore Wind) créent un nouveau tissu d'entreprises de l'énergie marine. Le port de Saint-Nazaire-Montoir et ses terminaux constituent des OIV potentiels soumis aux exigences ANSSI.",
      sectors: [
        "Construction navale (Chantiers de l'Atlantique MSC)",
        "Aéronautique (Airbus Atlantic, Tier 1 et sous-traitants)",
        "Énergie offshore (éolien, énergies marines renouvelables)",
        "Port et logistique (Saint-Nazaire-Montoir, terminal vraquiers)",
        "Santé (CH Saint-Nazaire, cliniques Loire-Atlantique ouest)",
        "Collectivités et Cap Atlantique",
      ],
      neighborhoods: [
        "Centre-ville et Base sous-marine (patrimoine)",
        "Port et Chantiers de l'Atlantique",
        "Montoir-de-Bretagne (terminal méthanier, port de commerce)",
        "Trignac et zones industrielles (Airbus Atlantic)",
        "Saint-Brévin-les-Pins et littoral (tourisme, PME)",
        "Pornic et côte de Jade (tourisme, PME artisanales)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour un sous-traitant des Chantiers de l'Atlantique ou d'Airbus Atlantic à Saint-Nazaire ?",
          a: "Un pentest pour un sous-traitant des Chantiers de l'Atlantique ou d'Airbus Atlantic à Saint-Nazaire soumis aux exigences TISAX ou aux clauses de sécurité contractuelles se situe entre 8 000 et 20 000 € HT selon le niveau d'assurance requis. Pour les PME de la supply chain avec des systèmes CAO partagés via des extranet, CyberSecure propose des audits ciblés à partir de 5 500 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau ETI à Saint-Nazaire ?",
          a: "Un audit réseau pour une ETI nazairienne dure 5 à 9 jours ouvrés. Pour un audit complet d'un sous-traitant naval ou aéronautique incluant les systèmes CAO et les accès partenaires, comptez 8 à 15 jours. L'audit Active Directory seul est réalisable en 3 à 4 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes de CAO et de conception navale des Chantiers de l'Atlantique contre l'espionnage industriel ?",
          a: "Les Chantiers de l'Atlantique développent des paquebots complexes dont les plans, les spécifications techniques et les savoir-faire représentent des actifs intellectuels de plusieurs milliards d'euros. CyberSecure réalise des audits de protection des données de conception incluant la revue des droits d'accès aux environnements PLM/CAO, les tests d'exfiltration de données, l'évaluation de la sécurité des extranet partenaires et la protection contre les menaces internes. Nous appliquons les recommandations ANSSI pour la protection des secrets industriels.",
        },
        {
          q: "CyberSecure intervient-il sur site à Saint-Nazaire et en Loire-Atlantique ouest ?",
          a: "Oui, nos consultants se déplacent à Saint-Nazaire, Montoir-de-Bretagne, Trignac, Pornic, Saint-Brévin-les-Pins et dans toute la Loire-Atlantique ouest. Nous couvrons également le Morbihan (Vannes, Lorient) pour les groupes industriels ayant des sites sur la façade atlantique. Déploiement sous 48h à Saint-Nazaire.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site industriel à Saint-Nazaire ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les incidents sur des infrastructures portuaires ou des systèmes classifiés, contactez également les autorités maritimes et la DGA si nécessaire. Notre équipe peut être sur site à Saint-Nazaire dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteSaintNazaire;
