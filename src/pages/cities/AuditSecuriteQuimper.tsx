import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteQuimper = () => (
  <CityLandingPage
    data={{
      city: "Quimper",
      citySlug: "quimper",
      region: "Bretagne",
      postalCode: "29000",
      intro: "CyberSecure accompagne les PME et ETI de Quimper avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs agroalimentaire, pêche, touristique et artisanal du Finistère. Notre cabinet qualifié PASSI ANSSI intervient sur site à Quimper pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises bretonnes du sud-Finistère.",
      localContext: "Quimper est la préfecture du Finistère et le cœur culturel de la Bretagne traditionnelle : les industries agroalimentaires (Bigard, conserveries de sardines, produits de la mer) constituent le pilier économique avec des systèmes de traçabilité et de gestion de la chaîne du froid en pleine numérisation. La faïencerie de Quimper (HB-Henriot) est un artisanat patrimonial à l'identité mondiale dont les données de conception et les bases clients sont des actifs précieux. Le tourisme cornouaillais (Pointe du Raz, Festival de Cornouaille) et l'économie côtière génèrent une activité saisonnière exposée aux cybermenaces. Le Centre Hospitalier de Cornouaille et les établissements médico-sociaux du Finistère-Sud font face aux ransomwares ciblant la santé.",
      sectors: [
        "Agroalimentaire (Bigard, conserveries, produits de la mer)",
        "Pêche et aquaculture (Finistère-Sud)",
        "Artisanat d'art (faïence HB-Henriot, poterie)",
        "Tourisme cornouaillais et événementiel (Festival de Cornouaille)",
        "Santé (CH Cornouaille, EHPAD Finistère-Sud)",
        "Agriculture et PME bretonnes (Pays Glazik)",
      ],
      neighborhoods: [
        "Centre-ville et quartier de Locmaria (faïencerie)",
        "Kerfeunteun et zone industrielle nord",
        "Créac'h Gwen et zones d'activités",
        "Douarnenez (pêche, conserveries)",
        "Pont-l'Abbé et Pays Bigouden (pêche, tourisme)",
        "Concarneau et port de pêche thonnier",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une entreprise agroalimentaire ou une conserverie à Quimper ?",
          a: "Un audit de sécurité pour une conserverie ou une PME agroalimentaire du Finistère-Sud à Quimper est tarifé entre 5 000 et 11 000 € HT selon la taille et les systèmes en place (ERP, systèmes de traçabilité, chaîne du froid connectée). Pour un groupe comme Bigard ou une coopérative pêche, le budget se situe entre 10 000 et 20 000 € HT. CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Quimper ?",
          a: "Un pentest réseau pour une PME quimpéroise dure 4 à 7 jours ouvrés. Pour une ETI agroalimentaire avec plusieurs sites, comptez 6 à 9 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sur site à Quimper dans les 72h pour les urgences.",
        },
        {
          q: "Comment protéger les savoir-faire et données de conception de la faïencerie HB-Henriot et de l'artisanat quimpérois ?",
          a: "La faïencerie de Quimper HB-Henriot détient des motifs décoratifs bretons, des formules d'émaux et des techniques de peinture à la main qui constituent un patrimoine immatériel unique face à la contrefaçon internationale. CyberSecure réalise des audits de protection des données de création incluant la revue des droits d'accès aux fichiers de conception, les tests d'exfiltration de données et la mise en place de solutions de traçabilité des documents sensibles. Nous aidons également à sécuriser les plateformes e-commerce et les bases clients internationales.",
        },
        {
          q: "CyberSecure intervient-il sur site à Quimper et dans le Finistère-Sud ?",
          a: "Oui, nos consultants se déplacent à Quimper, Douarnenez, Concarneau, Pont-l'Abbé, Quimperlé et dans tout le Finistère-Sud. Nous couvrons également le nord du Finistère (Brest, Morlaix) pour les groupes ayant des sites dans l'ensemble du département. Déploiement sous 72h à Quimper.",
        },
        {
          q: "Que faire en cas de cyberattaque à Quimper — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre pour préserver les preuves forensiques. Notre équipe peut être déployée sur site à Quimper dans les 4 heures. CyberSecure prend en charge les notifications ANSSI et CNIL. Pour les PME disposant de peu de ressources internes, nous proposons une assistance téléphonique immédiate pour les premières actions de confinement. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteQuimper;
