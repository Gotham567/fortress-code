import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteArras = () => (
  <CityLandingPage
    data={{
      city: "Arras",
      citySlug: "arras",
      region: "Hauts-de-France",
      postalCode: "62000",
      intro: "CyberSecure accompagne les PME et ETI d'Arras avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs agricole, logistique, industriel et des collectivités du Pas-de-Calais. Notre cabinet qualifié PASSI ANSSI intervient sur site à Arras pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises artésiennes.",
      localContext: "Arras est la préfecture du Pas-de-Calais et une ville à forte tradition agricole et industrielle : le bassin sucrier (betteraviers, sucreries Cristal Union) et la filière céréalière constituent des secteurs en pleine numérisation avec des systèmes de gestion de coopératives et de traçabilité agricole exposés aux cybermenaces. La logistique profite de la position stratégique d'Arras sur les axes A1 (Paris-Lille) et A26 (Calais-Troyes) pour accueillir des plateformes de distribution importantes. Les collectivités territoriales du Pas-de-Calais constituent d'importants donneurs d'ordre publics qui doivent se conformer à la directive NIS2. L'hôpital d'Arras et le tissu médico-social local font face aux cyberattaques ciblant la santé publique.",
      sectors: [
        "Agriculture et agroalimentaire (betterave, céréales, sucreries)",
        "Logistique et transport (hub A1/A26)",
        "Industrie et PME artésiennes",
        "Collectivités et services publics (NIS2)",
        "Santé (CH Arras, cliniques Pas-de-Calais)",
        "Commerce de détail et grande distribution",
      ],
      neighborhoods: [
        "Centre-ville et Grand-Place (patrimoine flamand)",
        "Zone industrielle Saint-Laurent-Blangy (logistique)",
        "Achicourt et zones d'activités sud",
        "Sainte-Catherine et zones d'activités nord",
        "Lens et bassin minier (déjà industriel reconverti)",
        "Béthune et Pas-de-Calais ouest (industrie, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une coopérative agricole ou une sucrerie à Arras ?",
          a: "Un audit de sécurité pour une coopérative céréalière ou une sucrerie du Pas-de-Calais est tarifé entre 5 500 et 12 000 € HT selon la taille du SI. Si des systèmes SCADA de production sucrière sont inclus, il faut ajouter un budget OT de 3 000 à 6 000 € HT. Pour une collectivité territoriale soumise à NIS2, CyberSecure propose des audits de conformité NIS2 dès 4 500 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau ou un pentest à Arras ?",
          a: "Un audit réseau pour une PME artésienne dure 4 à 7 jours ouvrés. Pour une plateforme logistique incluant les systèmes WMS et les accès transporteurs, comptez 5 à 9 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment aider une collectivité du Pas-de-Calais à se conformer à NIS2 ?",
          a: "La directive NIS2, transposée en France en 2024, impose aux collectivités de taille significative, aux régions et aux services publics critiques de respecter des mesures de cybersécurité renforcées. CyberSecure propose des audits de conformité NIS2 incluant l'analyse des écarts par rapport aux 10 mesures essentielles, la cartographie des actifs numériques critiques, le test de pénétration des systèmes exposés et la formation des élus et agents aux obligations légales. Nous accompagnons également la rédaction de la politique de sécurité des systèmes d'information (PSSI).",
        },
        {
          q: "CyberSecure intervient-il sur site à Arras et dans le Pas-de-Calais ?",
          a: "Oui, nos consultants se déplacent à Arras, Lens, Béthune, Boulogne-sur-Mer, Saint-Omer et dans tout le Pas-de-Calais. Nous couvrons également la Somme (Amiens) et le Nord (Lille, Douai) pour les groupes ayant des sites dans plusieurs départements de Hauts-de-France. Déploiement sous 72h à Arras.",
        },
        {
          q: "Que faire en cas de cyberattaque à Arras — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Notre équipe peut être sur site à Arras dans les 4 heures. Pour les collectivités, nous coordonnons avec l'ANSSI et le CERT du Gouvernement. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteArras;
