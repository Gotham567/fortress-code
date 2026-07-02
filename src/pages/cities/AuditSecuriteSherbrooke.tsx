import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteSherbrooke = () => (
  <CityLandingPage
    data={{
      city: "Sherbrooke",
      citySlug: "sherbrooke",
      region: "Canada — Québec (Estrie)",
      postalCode: "J1H",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Sherbrooke pour l'Université de Sherbrooke (UdeS), le CHUS (Centre Hospitalier Universitaire de Sherbrooke), BRP (Bombardier Recreational Products) et les PME industrielles de l'Estrie. Cabinet qualifié PASSI ANSSI, nous intervenons dans la région de Sherbrooke avec une expertise en sécurité des environnements de recherche universitaire et des systèmes de production industrielle soumis à la Loi 25 du Québec.",
      localContext: "Sherbrooke est une ville universitaire et industrielle dynamique en Estrie. L'Université de Sherbrooke est reconnue pour ses programmes coopératifs et ses partenariats industriels, hébergeant des recherches en cybersécurité, en intelligence artificielle et en génie. Le CHUS (maintenant CIUSSS de l'Estrie-CHUS) est l'un des plus grands hôpitaux universitaires du Québec hors Montréal, gérant des millions de données de santé très sensibles. BRP (Bombardier Recreational Products) conçoit les Sea-Doo, Ski-Doo et Can-Am depuis son siège de Valcourt (Estrie) — des données de R&D automobile valant des milliards. Kruger Inc. (papeteries) et Domtar gèrent des usines avec des systèmes OT industriels. La Ville de Sherbrooke développe des services numériques pour ses 170 000 habitants. Le parc industriel de l'autoroute 410 héberge des PME manufacturières en transformation numérique.",
      sectors: [
        "Enseignement supérieur et recherche (UdeS, Bishop's, Cégep de Sherbrooke)",
        "Santé universitaire (CHUS, CIUSSS Estrie, pharmacies et cliniques)",
        "Industrie loisirs et mobilité (BRP, sous-traitants automobile)",
        "Papetières et forestier (Kruger, Domtar, systèmes OT)",
        "Agriculture et agroalimentaire (coopératives, Coop Agri-Estrie)",
        "PME tech et numérique (Sherbrooke Innopole, Zone Estrie)",
      ],
      neighborhoods: [
        "Centre-ville de Sherbrooke (Vieux-Nord, Jacques-Cartier)",
        "Fleurimont et Nord (CHUS, quartier santé, UdeS médecine)",
        "Rock Forest et Saint-Élie (zones industrielles, BRP sous-traitants)",
        "Lennoxville et Bishop's (communauté anglophone, campus)",
        "Ascot et autoroute 410 (parcs industriels, PME, logistique)",
        "MRC des Sources et Coaticook (agroalimentaire, PME rurales)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Sherbrooke pour une PME industrielle ou l'UdeS ?",
          a: "Les tarifs à Sherbrooke sont alignés sur les standards québécois : pentest d'application web ou portail en ligne pour une PME entre 4 000 et 10 000 $ CAD HT ; audit de sécurité complet infrastructure (réseau, AD, VPN, cloud) entre 8 000 et 20 000 $ CAD HT ; audit OT industriel (PME manufacturière, systèmes automatisés) entre 8 000 et 18 000 $ CAD HT ; audit de sécurité universitaire (UdeS, portail étudiant, recherche) entre 7 000 et 16 000 $ CAD HT. CyberSecure propose des diagnostics rapides (2 jours, rapport en 5 jours ouvrés) pour les PME de Sherbrooke Innopole ou de Zone Estrie cherchant à améliorer leur posture de sécurité. Devis gratuit en 24h.",
        },
        {
          q: "Audit CHUS (Centre Hospitalier Universitaire de Sherbrooke) : données de santé et systèmes médicaux connectés ?",
          a: "Le CHUS est le centre de référence régional pour l'Estrie et gère des données de santé ultra-sensibles soumises à la Loi 25 (renseignements personnels de santé). Un audit CHUS comprend : pentest des applications cliniques (Cerner, Logibec DSQ), audit des dispositifs médicaux connectés (IoMT : ventilateurs, pompes insuline, IRM connectées), test de la segmentation réseau (réseau médical/réseau visiteurs/réseau administratif), audit des accès des résidents et internes (permissions excessives fréquentes), test de phishing sur le personnel soignant (vecteur majeur d'attaque hospitalière). Les hôpitaux québécois sont soumis aux directives de cybersécurité du MSSS. Tarif audit CHUS/CIUSSS : 12 000-28 000 $ CAD HT.",
        },
        {
          q: "Pentest BRP (Bombardier Recreational Products) à Sherbrooke ou Valcourt : protection de la R&D véhicules ?",
          a: "BRP conçoit des véhicules récréatifs (Sea-Doo, Ski-Doo, Can-Am, Lynx) dont la R&D représente des milliards en propriété intellectuelle — plans moteurs, technologies d'électrification, algorithmes de contrôle. Les menaces documentées sur l'industrie automobile : espionnage industriel par des concurrents (notamment asiatiques), attaques ransomware perturbant les chaînes de production, supply chain attacks via les fournisseurs de composants. Un audit BRP-type comprend : test d'intrusion des portails fournisseurs (EDI, B2B), audit de la segmentation entre réseaux ingénierie et production, test des accès au PLM (Product Lifecycle Management — Siemens NX, CATIA), audit OT des lignes de montage automatisées. Tarif : 15 000-40 000 $ CAD HT selon périmètre.",
        },
        {
          q: "Université de Sherbrooke : comment sécuriser les programmes coopératifs et les données d'entreprises partenaires ?",
          a: "L'UdeS est particulièrement exposée via ses programmes coopératifs (stagiaires accédant aux systèmes d'entreprises partenaires, et réciproquement, données d'entreprises traitées sur les serveurs universitaires). Un audit UdeS comprend : test d'intrusion du portail étudiant (MonPortail, Canvas LMS), audit des droits d'accès des étudiants co-op aux systèmes de recherche, test de la segmentation entre les données des projets de recherche partenaires, audit des accès tiers (entreprises partenaires, CRIAQ, Mitacs), revue de la politique BYOD (appareils personnels des étudiants). La faculté d'informatique développe des outils de cybersécurité — CyberSecure peut aussi collaborer avec les professeurs pour des ateliers Red Team pédagogiques. Tarif : 6 000-14 000 $ CAD HT.",
        },
        {
          q: "Que faire en cas de cyberattaque à Sherbrooke (ransomware BRP, incident CHUS, fuite UdeS) ?",
          a: "En cas d'incident à Sherbrooke, notre CERT est disponible 24h/24 en français. Obligations Loi 25 : notification à la Commission d'accès à l'information (CAI) si l'incident présente un risque sérieux pour les individus, dans les délais les plus courts (idéalement 72h). Pour le CHUS : notification prioritaire au MSSS, préservation de la continuité des soins critiques (patients en soins intensifs, chirurgie en cours). Pour BRP : isolement des réseaux de conception (PLM) et de production (OT), notification aux fournisseurs SI les systèmes EDI sont compromis. CyberSecure coordonne l'investigation forensique, le containment, la reconstruction et les communications de crise en collaboration avec le Centre canadien pour la cybersécurité (CCCS). Dépôt de plainte au Service de Police de Sherbrooke (SPS) et à la GRC. Intervention sur site à Sherbrooke en moins de 3 heures depuis Montréal.",
        },
      ],
    }}
  />
);

export default AuditSecuriteSherbrooke;
