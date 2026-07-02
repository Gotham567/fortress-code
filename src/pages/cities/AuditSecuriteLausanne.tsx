import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLausanne = () => (
  <CityLandingPage
    data={{
      city: "Lausanne",
      citySlug: "lausanne",
      region: "Suisse — Canton de Vaud",
      postalCode: "1000",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Lausanne pour le CIO (Comité International Olympique), l'EPFL, Swisscom, Philip Morris International et les startups de l'EPFL Innovation Park. Cabinet qualifié PASSI ANSSI, nous intervenons dans le Canton de Vaud avec une expertise en protection de la propriété intellectuelle de la recherche académique et en sécurité des infrastructures télécom critiques soumises à la LPD/nFADP suisse.",
      localContext: "Lausanne est une ville académique et internationale de premier plan : l'EPFL figure parmi les 15 meilleures universités mondiales en sciences et technologie, hébergeant des recherches à très haute valeur en IA, robotique, photonique et bioengineering — autant de cibles d'espionnage industriel. Le CIO gère les données confidentielles des fédérations sportives mondiales et des droits TV olympiques se chiffrant en milliards. Swisscom est l'opérateur de télécommunications national suisse, classé infrastructure critique NIS2 suisse. Philip Morris International (PMI) développe des produits de vapotage de nouvelle génération avec une R&D ultra-confidentielle. L'IMD Business School forme les dirigeants de multinationales, avec des données d'entreprises sensibles échangées lors des formations executives. L'EPFL Innovation Park héberge 350+ startups dont beaucoup travaillent sur des technologies duales (civiles et militaires).",
      sectors: [
        "Organisations sportives internationales (CIO, fédérations)",
        "Télécommunications nationales (Swisscom, Salt, Sunrise)",
        "Industrie et R&D (Philip Morris, Nestlé Vevey, Logitech)",
        "Recherche et enseignement (EPFL, UNIL, IMD Business School)",
        "Startups deeptech (EPFL Innovation Park, BioArk Monthey)",
        "Collectivités vaudoises (Canton de Vaud, Lausanne)",
      ],
      neighborhoods: [
        "EPFL et Ecublens (campus, startups, Innovation Park)",
        "Centre de Lausanne (Flon, Riponne, Palais de Justice)",
        "Ouchy et Vidy (CIO, institutions internationales, lac)",
        "Pully et Paudex (résidentiel, cabinets conseil)",
        "Crissier et Bussigny (zones d'activités, logistique)",
        "Nord vaudois (Yverdon-les-Bains, Orbe, Ste-Croix)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Lausanne pour une startup EPFL ou une scale-up tech ?",
          a: "Pour les startups de l'EPFL Innovation Park et les scale-ups vaudoises, CyberSecure propose : pentest application web ou API (SaaS, plateforme IA) entre 5 000 et 12 000 CHF HT ; audit de sécurité cloud et infrastructure entre 7 000 et 18 000 CHF HT ; audit de code source (applications deeptech, modèles IA) entre 6 000 et 15 000 CHF HT selon la volumétrie. Pour les entreprises en phase de due diligence (levée de fonds, M&A), CyberSecure propose un rapport de sécurité accelerated en 10 jours ouvrés, valorisé par les investisseurs comme preuve de maturité. Tarifs CHF hors TVA suisse (7.7%). Des devis adaptés aux budgets startup sont disponibles sur demande.",
        },
        {
          q: "Audit de sécurité CIO (Comité International Olympique) à Lausanne : enjeux et méthodologie ?",
          a: "Le CIO gère des données de compétition confidentielles, des droits TV olympiques d'une valeur de plusieurs milliards et les informations médicales des athlètes soumises au Code Mondial Antidopage. Les enjeux de sécurité sont majeurs : manipulation des résultats, fuite de données athlètes, vol de droits médias, perturbation des plateformes officielles lors des JO. CyberSecure réalise des tests d'intrusion sur les systèmes de gestion des accréditations, des plateformes de diffusion des droits TV, des systèmes antidopage ADAMS et des applications mobiles olympiques. Nos consultants respectent les exigences de confidentialité olympique et peuvent intervenir en coordination avec le CERT du CIO.",
        },
        {
          q: "Pentest Swisscom ou infrastructure télécom suisse : comment auditer un opérateur critique ?",
          a: "Swisscom est classé infrastructure critique en Suisse (équivalent NIS2 suisse — Loi sur la sécurité de l'information LSI). Un audit télécom comprend : test d'intrusion sur les portails clients et systèmes de facturation (BSS), audit des interfaces B2B (interconnexions opérateurs, peering BGP), test des systèmes de gestion de réseau (OSS, NMS), analyse des configurations MPLS et protocoles signalisation (SS7 si héritage), audit des accès sous-traitants et maintenance. CyberSecure travaille en coordination avec les équipes CISO de l'opérateur et le NCSC (Centre National de Cybersécurité). Tarif audit télécom : devis sur mesure selon périmètre, généralement 20 000-60 000 CHF HT.",
        },
        {
          q: "Protection de la propriété intellectuelle EPFL à Lausanne : comment auditer la sécurité de la recherche ?",
          a: "L'EPFL héberge des recherches en IA, quantique, photonique et bioengineering qui suscitent l'intérêt de services de renseignement économique étrangers. Un audit de sécurité recherche comprend : test d'intrusion des plateformes de collaboration (GitLab EPFL, SWITCHdrive, Slack), audit des droits d'accès aux serveurs de calcul HPC (clusters GPU de recherche IA), test de phishing ciblé sur les doctorants et post-docs (vecteur privilégié), audit de la segmentation entre réseaux laboratoire et réseau EPFL général, revue des politiques de partage de données avec des partenaires industriels (NDA, chiffrement). CyberSecure collabore avec la direction ISAS (Information Security, Audit and Security) de l'EPFL.",
        },
        {
          q: "Que faire en cas de cyberattaque à Lausanne (vol de données de recherche, incident CIO) ?",
          a: "En cas d'incident à Lausanne, contactez notre CERT 24h/24. Obligations légales suisses : notification au PFPDT (Préposé Fédéral à la Protection des Données et à la Transparence) si données personnelles compromises — délai recommandé 72h selon nFADP, notification au NCSC (ncsc.admin.ch) pour les infrastructures critiques. Pour l'EPFL ou une startup deeptech : préservation des logs de recherche, isolement des serveurs compromis, check des accès aux repositories de code source et aux carnets de laboratoire électroniques. CyberSecure coordonne l'investigation forensique, la reconstruction sécurisée et le dépôt de plainte au Ministère Public vaudois (MPC). Intervention sur site à Lausanne en moins de 3 heures depuis Genève.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLausanne;
