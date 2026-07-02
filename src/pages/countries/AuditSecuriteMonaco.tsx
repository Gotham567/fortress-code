import CountryHubPage, { CountryData } from "@/components/CountryHubPage";

const data: CountryData = {
  country: "Monaco",
  countrySlug: "monaco",
  region: "Principauté de Monaco",
  intro:
    "CyberSecure accompagne les institutions et entreprises de la Principauté de Monaco dans leurs audits de sécurité informatique, pentests et mise en conformité avec la loi n° 1.565 du 3 décembre 2023. Nos experts PASSI sécurisent les family offices, les prestataires de gestion de fortune UHNWI, les yachts connectés et l'immobilier premium contre des cybermenaces ciblées sur les ultra-riches.",
  context:
    "Monaco, avec ses 38 000 résidents dont une forte concentration d'ultra-high-net-worth individuals (UHNWI), constitue la cible la plus dense au monde pour les attaques cyber ciblant la fortune personnelle. Les family offices monégasques gèrent des patrimoines dépassant souvent 100 millions d'euros par client, ce qui en fait des cibles de premier choix pour le spear-phishing, le BEC (Business Email Compromise) et les intrusions APT. Le secteur du yachting (Port Hercule, Fontvieille) intègre des mégayachts dotés de systèmes IoT, de navigation satellitaire et de gestion de bord qui présentent des vulnérabilités croissantes. Le marché immobilier de luxe (Studio de l'Opéra, Carré d'Or) génère des transactions digitales portant sur des montants considérables. MC-CERT (Monaco CERT) a été créé en 2017 pour renforcer la cybersécurité nationale et accompagne les acteurs publics et privés.",
  regulation:
    "La loi n° 1.565 du 3 décembre 2023 relative à la protection des données à caractère personnel aligne Monaco sur les standards RGPD européens, avec la CCIN (Commission de Contrôle des Informations Nominatives) comme autorité de contrôle. Le Gouvernement Princier a adopté en 2020 une stratégie nationale de cybersécurité coordinée par la DISI (Direction de l'Informatique et des Systèmes d'Information). MC-CERT opère 24/7 pour la réponse aux incidents cyber. Les établissements financiers sont soumis aux directives de la CCAF (Commission de Contrôle des Activités Financières) incluant des exigences de sécurité numérique.",
  sectors: [
    "Family offices et wealth management UHNWI (Société Générale Private Banking, BNP Paribas Wealth)",
    "Yachting et marine connectée (Port Hercule, superyachts, navigation IoT)",
    "Immobilier de luxe et promoteurs (Groupe SBM, Versailles Monaco, Aedifica)",
    "Casinos et hôtels de luxe (Monte-Carlo SBM, Hôtel de Paris, Fairmont)",
    "Sports et événementiel premium (Formula 1 GP Monaco, Yacht Show)",
    "Administrations de la Principauté (Gouvernement Princier, Mairie, DISI)",
  ],
  cities: [
    { name: "Monaco", urlPath: "/audit-securite-monaco", description: "Principauté entière : family offices, yachts et luxe" },
  ],
  faq: [
    {
      q: "Quel est le coût d'un audit de sécurité pour un family office à Monaco ?",
      a: "Un audit de sécurité complet pour un family office monégasque est facturé entre 15 000 € et 50 000 € selon la taille du SI et le périmètre. Le périmètre spécifique inclut : pentest des portails de gestion de fortune, sécurité des communications chiffrées avec les clients UHNWI, audit des accès tiers (cabinets d'avocats, notaires, family assistants), test de spear-phishing ciblé sur les directeurs et protection contre les SIM-swap. Délai : 3 à 6 semaines.",
    },
    {
      q: "La loi n° 1.565 de Monaco impose-t-elle les mêmes obligations que le RGPD ?",
      a: "La loi n° 1.565 du 3 décembre 2023 est largement alignée sur le RGPD, incluant les mêmes droits des personnes (accès, rectification, effacement, portabilité), les obligations de privacy by design et de notification des violations dans les 72 heures. Les différences principales concernent les montants des sanctions : jusqu'à 100 000 € pour les violations les plus graves à Monaco, contre 4 % du CA mondial dans l'UE. La CCIN peut ordonner des audits de conformité.",
    },
    {
      q: "Comment sécuriser un superyacht connecté amarré à Port Hercule ?",
      a: "La sécurisation d'un superyacht connecté passe par : audit des systèmes NMEA 2000/0183 et AIS, pentest des réseaux WiFi invité et crew, sécurisation des systèmes SATCOM (Inmarsat FleetOne, Starlink maritime), audit des caméras de surveillance IP et des systèmes domotiques, et formation de l'équipage aux risques cyber. CyberSecure propose un package 'Yacht Cyber Security' en 2 à 3 semaines à partir de 8 500 €.",
    },
    {
      q: "Les casinos de Monte-Carlo sont-ils des cibles pour la cybercriminalité ?",
      a: "Les casinos sont des cibles prioritaires pour trois types d'attaques : la fraude sur les systèmes de gestion des jetons et des comptes joueurs, les attaques DDoS visant à perturber les opérations en ligne, et l'espionnage industriel ciblant les algorithmes d'anti-triche. La SBM (Société des Bains de Mer) investit significativement en cybersécurité pour ses activités casino en ligne et hors ligne. Un audit de sécurité spécialisé casinos est disponible à partir de 18 000 €.",
    },
    {
      q: "MC-CERT est-il équivalent à l'ANSSI française pour les entreprises monégasques ?",
      a: "MC-CERT (Monaco Computer Emergency Response Team) remplit à Monaco un rôle similaire à celui de l'ANSSI en France pour la coordination de la réponse aux incidents et les recommandations de sécurité. Cependant, MC-CERT est davantage orienté coordination et conseil que certification. La qualification PASSI de CyberSecure (délivrée par l'ANSSI française) est reconnue et recommandée par MC-CERT pour les missions d'audit de sécurité des organisations monégasques.",
    },
  ],
};

const AuditSecuriteMonaco = () => <CountryHubPage data={data} />;
export default AuditSecuriteMonaco;
