import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNancy = () => (
  <CityLandingPage
    data={{
      city: "Nancy",
      citySlug: "nancy",
      region: "Grand Est",
      postalCode: "54000",
      intro: "CyberSecure accompagne les PME et ETI de Nancy avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs industriel, de la santé, du cristal et des collectivités de Meurthe-et-Moselle. Notre cabinet qualifié PASSI ANSSI intervient sur site à Nancy pour des missions d'audit réseau, d'audit Active Directory et de pentest application web.",
      localContext: "Nancy est un pôle industriel et académique majeur de Grand Est, abritant l'Université de Lorraine (classée parmi les meilleures universités européennes en ingénierie) et ses laboratoires de recherche en sciences des matériaux et en informatique. L'industrie cristallière (Baccarat, dont les ateliers et le SI commercial sont des actifs sensibles), la filière de l'acier spécial et les PME mécaniques constituent le tissu économique hérité de la Lorraine industrielle. Le CHRU de Nancy est l'un des plus grands de France et concentre d'importantes données médicales. La proximité de Metz et du Luxembourg génère des flux économiques transfrontaliers et des architectures IT hybrides qui élargissent la surface d'attaque des entreprises nancéiennes.",
      sectors: [
        "Industrie et métallurgie (aciers spéciaux, mécanique)",
        "Cristallerie et arts décoratifs (Baccarat)",
        "Santé (CHRU Nancy, cliniques Meurthe-et-Moselle)",
        "Enseignement supérieur et recherche (Université de Lorraine)",
        "Services aux entreprises et cabinets conseils",
        "Collectivités et Métropole du Grand Nancy",
      ],
      neighborhoods: [
        "Centre-ville et place Stanislas (patrimoine UNESCO)",
        "Brabois et technopôle (universités, CHU, recherche)",
        "Maxéville et zone industrielle nord",
        "Laxou et zones d'activités ouest",
        "Vandœuvre-lès-Nancy (industries, laboratoires)",
        "Pont-à-Mousson et Meurthe-et-Moselle nord",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une PME industrielle à Nancy ?",
          a: "Un audit réseau et sécurité pour une PME industrielle de Nancy est tarifé entre 5 500 et 12 000 € HT selon le périmètre. Pour une ETI de la filière acier ou cristallerie, le budget d'un test d'intrusion complet se situe entre 9 000 et 18 000 € HT. CyberSecure propose des offres adaptées aux PME nancéiennes avec des périmètres modulables selon le budget. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Nancy ?",
          a: "Un pentest réseau pour une PME nancéienne dure 4 à 7 jours ouvrés. Pour une ETI avec plusieurs sites en Lorraine, comptez 7 à 12 jours. L'audit Active Directory seul est réalisable en 2 à 4 jours. CyberSecure peut intervenir sur site à Nancy dans les 48 à 72h pour les urgences.",
        },
        {
          q: "Comment protéger les données de recherche des laboratoires de l'Université de Lorraine à Nancy ?",
          a: "Les laboratoires de l'Université de Lorraine à Nancy conduisent des recherches en sciences des matériaux, en chimie et en informatique dont les résultats constituent des actifs d'innovation exposés à l'espionnage académique. CyberSecure réalise des audits de sécurité des plateformes de recherche, des accès aux données de projets européens (H2020, Horizon Europe), et des interconnexions avec les partenaires industriels. Nous évaluons également la conformité aux exigences de sécurité des financeurs institutionnels (ANR, UE).",
        },
        {
          q: "CyberSecure intervient-il sur site à Nancy et en Meurthe-et-Moselle ?",
          a: "Oui, nos consultants se déplacent à Nancy, Vandœuvre-lès-Nancy, Maxéville, Laxou, Pont-à-Mousson, Lunéville et dans toute la Meurthe-et-Moselle. Nous couvrons également la Moselle (Metz) et les Vosges (Épinal) pour les groupes lorrains ayant des sites multiples. Déploiement sous 48h à Nancy.",
        },
        {
          q: "Que faire en cas de cyberattaque à Nancy — procédure CERT ?",
          a: "Appelez immédiatement la cellule CERT de CyberSecure (disponible 24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Notre équipe peut être déployée sur site à Nancy dans les 4 heures pour contenir l'attaque et coordonner la reprise. Nous assurons les notifications ANSSI et CNIL et pouvons coordonner avec le CSIRT de l'Université de Lorraine pour les incidents touchant les structures académiques. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNancy;
