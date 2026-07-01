import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteColmar = () => (
  <CityLandingPage
    data={{
      city: "Colmar",
      citySlug: "colmar",
      region: "Grand Est",
      postalCode: "68000",
      intro: "CyberSecure accompagne les PME et ETI de Colmar avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs viticole alsacien, touristique et industriel du Haut-Rhin. Notre cabinet qualifié PASSI ANSSI intervient sur site à Colmar pour des missions d'audit réseau, d'audit Active Directory et de réponse à incident CERT dans un territoire frontalier Allemagne-Suisse.",
      localContext: "Colmar est la capitale des vins d'Alsace et une destination touristique de premier plan (Marché de Noël parmi les plus visités d'Europe) : les maisons viticoles, les caves coopératives alsaciennes et les hôtels de charme du centre-ville manipulent des données commerciales et personnelles sensibles face aux cybermenaces. Le tissu industriel du Haut-Rhin (mécanique, industrie chimique, textiles techniques) constitue un écosystème PME/ETI en transformation numérique. La situation géographique trinationale (France-Allemagne-Suisse) génère des architectures IT multi-pays et des besoins de conformité croisée RGPD/DSG (Suisse). L'hôpital de Colmar et le centre hospitalier de Mulhouse à proximité font face aux cybermenaces ciblant le secteur médical.",
      sectors: [
        "Viticulture et vins d'Alsace (caves coopératives, grands domaines)",
        "Tourisme et hôtellerie (marché de Noël, centre alsacien)",
        "Industrie mécanique et chimique (Haut-Rhin)",
        "Santé (hôpital Pasteur Colmar, cliniques 68)",
        "Agroalimentaire alsacien (choucroute, brasseries)",
        "Collectivités et Colmar Agglomération",
      ],
      neighborhoods: [
        "Centre-ville et Petite Venise",
        "Zone industrielle Colmar-Houssen",
        "Ingersheim et vignoble alsacien nord",
        "Rouffach et Route des Vins du sud",
        "Guebwiller et Haut-Rhin viticole",
        "Mulhouse et Sud Alsace (industrie, frontaliers)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une cave viticole ou un négociant alsacien à Colmar ?",
          a: "Un audit de sécurité pour une cave viticole alsacienne ou un négociant en vins à Colmar est tarifé entre 4 500 et 10 000 € HT selon la taille et les systèmes en place (e-commerce, ERP de négoce, portail distributeurs). Pour les caves coopératives avec des systèmes de traçabilité et des adhérents connectés, le budget se situe entre 7 000 et 15 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau ETI à Colmar ?",
          a: "Un pentest réseau pour une PME colmarienne dure 4 à 7 jours ouvrés. Pour une ETI industrielle ou une coopérative viticole avec plusieurs sites, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser une architecture IT multi-pays pour une entreprise alsacienne travaillant avec l'Allemagne et la Suisse ?",
          a: "Les entreprises de Colmar ayant des partenaires ou des filiales en Allemagne et en Suisse doivent gérer des transferts de données soumis au RGPD (UE), au DSGVO (Allemagne) et à la LPD (Suisse). CyberSecure réalise des audits incluant la revue des politiques de transferts internationaux de données, le test des VPN et connexions inter-pays, la cartographie des sous-traitants et l'évaluation de la conformité tri-nationale. Nous accompagnons également la mise en conformité pour les nouvelles exigences NIS2.",
        },
        {
          q: "CyberSecure intervient-il sur site à Colmar et dans le Haut-Rhin ?",
          a: "Oui, nos consultants se déplacent à Colmar, Mulhouse, Guebwiller, Rouffach, Ribeauvillé et dans tout le Haut-Rhin. Nous couvrons également le Bas-Rhin (Strasbourg) et la région de Freiburg-im-Breisgau (Allemagne) pour les groupes ayant des sites de part et d'autre du Rhin. Déploiement sous 72h à Colmar.",
        },
        {
          q: "Que faire en cas de cyberattaque à Colmar — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre pour préserver les traces forensiques. Notre équipe peut être sur site à Colmar dans les 4 heures. Pour les entreprises ayant des partenaires en Suisse ou en Allemagne, nous coordonnons si nécessaire avec les CERT respectifs. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteColmar;
