import CountryHubPage, { CountryData } from "@/components/CountryHubPage";

const data: CountryData = {
  country: "Canada (Québec)",
  countrySlug: "canada",
  region: "Amérique du Nord francophone",
  intro:
    "CyberSecure accompagne les entreprises canadiennes francophones dans leurs audits de sécurité informatique, pentests et mise en conformité Loi 25/LPRPDE. De Montréal à Gatineau, nos experts PASSI sécurisent les studios de jeux vidéo, les coopératives financières, les cabinets gouvernementaux et les centres de recherche en IA contre des cybermenaces en forte croissance au Québec.",
  context:
    "Montréal s'est imposée comme un hub mondial du jeu vidéo (Ubisoft, EA, Warner Bros Games, Behaviour Interactive) et de l'IA (MILA — Institut québécois d'intelligence artificielle, plus grand cluster IA francophone mondial). L'affaire Desjardins de 2019 — fuite massive de données de 4,2 millions de membres par un employé malveillant — a marqué un tournant dans la prise de conscience cyber au Québec et entraîné des investissements massifs en cybersécurité coopérative. Bombardier, dont le siège est à Montréal, a subi en 2021 une cyberattaque via la faille Accellion FTA compromettant des données aéronautiques sensibles. CGI Group, plus grand prestataire IT canadien, gère des systèmes gouvernementaux critiques à Gatineau pour le gouvernement fédéral. Le gouvernement du Québec a investi 290 millions CAD en cybersécurité gouvernementale entre 2022 et 2025.",
  regulation:
    "La Loi 25 (Loi modernisant des dispositions législatives en matière de protection des renseignements personnels) est entrée pleinement en vigueur en septembre 2023 au Québec, supervisée par la CAI (Commission d'accès à l'information). La LPRPDE (Loi sur la protection des renseignements personnels et les documents électroniques) s'applique au niveau fédéral, avec le Commissariat à la protection de la vie privée du Canada. Le Centre canadien pour la cybersécurité (CCCS) publie des référentiels de sécurité pour les organisations fédérales. Les institutions financières sont supervisées par le BSIF (Bureau du surintendant des institutions financières).",
  sectors: [
    "Jeux vidéo et divertissement numérique (Ubisoft, EA, Warner Bros Games)",
    "Intelligence artificielle et recherche (MILA, Université de Montréal, Polytechnique)",
    "Coopératives financières et banques (Desjardins, Caisse de dépôt, BNC)",
    "Aéronautique et défense (Bombardier, CAE, Pratt & Whitney Canada)",
    "Services gouvernementaux fédéraux (CGI, Gatineau, SSC)",
    "Santé et biosciences (CHU Sainte-Justine, Génome Québec, BioMérieux)",
  ],
  cities: [
    { name: "Montréal", urlPath: "/audit-securite-montreal", description: "Hub IA, jeux vidéo, finance et aéronautique" },
    { name: "Québec", urlPath: "/audit-securite-quebec", description: "Capitale provinciale, administrations et gouvernement" },
    { name: "Gatineau", urlPath: "/audit-securite-gatineau", description: "Fonctions publiques fédérales, CGI et CCCS" },
    { name: "Sherbrooke", urlPath: "/audit-securite-sherbrooke", description: "Université, PME technologiques et industrie" },
  ],
  faq: [
    {
      q: "Quel est le coût d'un audit de sécurité pour un studio de jeux vidéo à Montréal ?",
      a: "Un audit de sécurité pour un studio de jeux vidéo type Ubisoft ou EA Montréal est facturé entre 15 000 CAD et 65 000 CAD selon la taille et le périmètre. Le périmètre inclut : pentest des plateformes de développement (GitHub Enterprise, Jenkins, perforce), sécurité des APIs de jeu en ligne, protection de la propriété intellectuelle (codes sources, assets 3D), audit des accès tiers et test de résistance aux leaks. Délai : 4 à 8 semaines.",
    },
    {
      q: "La Loi 25 québécoise impose-t-elle des audits de sécurité aux entreprises ?",
      a: "La Loi 25 impose des mesures de sécurité adéquates pour protéger les renseignements personnels (article 3.2), une évaluation des facteurs relatifs à la vie privée (EFVP/PIA) pour les projets à risque élevé, et la notification des incidents de confidentialité à la CAI sous 72 heures. Elle n'impose pas explicitement des audits périodiques, mais la CAI recommande fortement des tests de sécurité réguliers. Les amendes peuvent atteindre 25 millions CAD ou 4 % du CA mondial.",
    },
    {
      q: "Comment les leçons de la fuite Desjardins 2019 s'appliquent-elles à la sécurité d'une coopérative financière ?",
      a: "L'affaire Desjardins a révélé la nécessité de contrôles rigoureux sur les menaces internes : DLP (prévention des fuites de données), surveillance comportementale (UEBA), principes du moindre privilège pour les accès aux bases de données membres, et audit régulier des droits d'accès. CyberSecure propose un package 'Insider Threat' spécialement conçu pour les coopératives et institutions financières canadiennes, à partir de 12 000 CAD.",
    },
    {
      q: "CyberSecure intervient-il pour les contrats gouvernementaux fédéraux à Gatineau ?",
      a: "Oui, CyberSecure accompagne des prestataires IT gouvernementaux à Gatineau (SSC, CGI Group, Deloitte Canada) pour leurs audits de sécurité dans le cadre des contrats fédéraux. Nos consultants sont familiers avec le cadre de cybersécurité du gouvernement du Canada (GC ITSC), les exigences CCCS et les standards NIST adaptés au contexte canadien. Les missions incluent des vérifications de sécurité du personnel si requis.",
    },
    {
      q: "Le MILA et les centres de recherche IA sont-ils des cibles pour le cyberespionnage ?",
      a: "Oui, les centres de recherche en IA comme le MILA (co-fondé par Yoshua Bengio), Polytechnique Montréal et les laboratoires de Université de Montréal sont des cibles prioritaires pour le cyberespionnage étatique (principalement APT41 et groupes liés à la Chine et à la Russie) ciblant les modèles de langage, les algorithmes propriétaires et les données d'entraînement. Un audit de sécurité pour un centre de recherche IA inclut la protection des modèles, des datasets et des pipelines MLOps, pour 20 000 à 45 000 CAD.",
    },
  ],
};

const AuditSecuriteCanada = () => <CountryHubPage data={data} />;
export default AuditSecuriteCanada;
