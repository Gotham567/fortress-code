import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMetz = () => (
  <CityLandingPage
    data={{
      city: "Metz",
      citySlug: "metz",
      region: "Grand Est",
      postalCode: "57000",
      intro: "CyberSecure réalise des audits de sécurité informatique, pentests et tests d'intrusion à Metz pour les PME et ETI de Moselle, avec une expertise sur les secteurs industriels, logistiques et les travailleurs frontaliers exposés aux risques cyber transfrontaliers. Notre cabinet qualifié PASSI ANSSI intervient à Metz et dans l'agglomération pour des missions d'audit réseau, d'audit Active Directory et de réponse à incident CERT.",
      localContext: "Metz occupe une position géographique stratégique au carrefour de la France, du Luxembourg et de l'Allemagne, générant un tissu économique particulier avec des dizaines de milliers de frontaliers travaillant au Luxembourg et utilisant des systèmes d'information transfrontaliers complexes. L'industrie sidérurgique héritée (ArcelorMittal, Knauf) coexiste avec des centres de données et des entreprises de services numériques attirés par la proximité du Luxembourg, hub financier européen. La reconversion économique de la Moselle attire des investissements dans la logistique et l'agroalimentaire. L'Université de Lorraine et l'École Nationale d'Ingénieurs de Metz forment des talents en cybersécurité que CyberSecure contribue à accompagner.",
      sectors: [
        "Sidérurgie et industrie lourde (ArcelorMittal, Knauf)",
        "Services aux frontaliers et entreprises transfrontalières",
        "Logistique et transport (hub trimodal Moselle)",
        "Numérique et data centers (proximité Luxembourg)",
        "Santé (CHR Metz-Thionville, cliniques Moselle)",
        "Collectivités et Eurométropole de Metz",
      ],
      neighborhoods: [
        "Centre-ville et île du Saulcy",
        "Borny et zone industrielle est",
        "Technopôle de Metz (Metz 2000)",
        "Woippy et zones d'activités nord",
        "Montigny-lès-Metz et Vallières",
        "Thionville et Moselle nord (frontaliers)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour une entreprise mosellane avec des accès frontaliers Luxembourg ?",
          a: "Un audit de sécurité informatique pour une entreprise de Metz avec des collaborateurs frontaliers ou des accès VPN au Luxembourg est tarifé entre 7 000 et 15 000 € HT selon la complexité des architectures multi-pays. Les entreprises soumises à la fois à la réglementation française (ANSSI) et européenne (NIS2, DORA) bénéficient d'un audit dual couvrant les deux référentiels. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau ETI à Metz ?",
          a: "Un audit réseau pour une ETI messine de 100 à 500 collaborateurs dure 5 à 9 jours ouvrés. Pour des architectures hybrides incluant des accès transfrontaliers, comptez 7 à 12 jours. L'audit Active Directory seul est réalisable en 3 à 4 jours. CyberSecure peut intervenir sous 72h pour les situations urgentes.",
        },
        {
          q: "Comment sécuriser une architecture IT multi-pays pour une entreprise avec des sites en France et au Luxembourg ?",
          a: "Les entreprises messianes disposant de sites ou d'accès au Luxembourg doivent gérer des architectures IT hybrides soumises à des réglementations différentes. CyberSecure réalise des audits incluant la revue des politiques de routage inter-pays, le test des VPN et des accès distants, l'analyse des transferts de données personnelles transfrontaliers (RGPD) et la conformité NIS2. Nous cartographions les interconnexions entre les SI français et luxembourgeois pour identifier les vecteurs d'attaque prioritaires.",
        },
        {
          q: "CyberSecure intervient-il sur site à Metz et en Moselle ?",
          a: "Oui, nos consultants se déplacent à Metz, Thionville, Forbach, Sarreguemines, Sarrebourg et dans l'ensemble de la Moselle. Nous couvrons également la Meurthe-et-Moselle (Nancy) et la Meuse pour les groupes ayant des sites multiples en Grand Est. Déploiement sous 48h à Metz.",
        },
        {
          q: "Que faire en cas de cyberattaque à Metz — quelle est la procédure d'urgence ?",
          a: "Contactez le CERT de CyberSecure immédiatement (ligne d'urgence 24h/24). Isolez les machines compromises sans les éteindre. Notre équipe peut intervenir sur site à Metz dans les 4 heures. Pour les entreprises ayant des interconnexions avec des partenaires au Luxembourg, nous coordonnons également avec les CSIRT luxembourgeois si nécessaire. CyberSecure prend en charge les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMetz;
