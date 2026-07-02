import CountryHubPage, { CountryData } from "@/components/CountryHubPage";

const data: CountryData = {
  country: "Afrique francophone",
  countrySlug: "afrique",
  region: "Afrique subsaharienne francophone",
  intro:
    "CyberSecure accompagne les entreprises et institutions d'Afrique subsaharienne francophone dans leurs audits de sécurité informatique et pentests. De Abidjan à Douala, nos experts PASSI sécurisent les plateformes mobile money, les banques régionales BCEAO/BEAC, les ports stratégiques et les infrastructures OT contre des cybermenaces en forte croissance.",
  context:
    "L'Afrique subsaharienne francophone connaît une explosion du mobile money : Wave (Sénégal, Côte d'Ivoire), MTN MoMo et Orange Money totalisent plus de 200 millions de comptes actifs, créant des cibles de premier choix pour les fraudeurs et les cybercriminels. Les ports stratégiques d'Abidjan (3e port d'Afrique de l'Ouest) et de Douala (principal port d'Afrique centrale) intègrent des systèmes OT de gestion des terminaux exposés à des risques de sabotage. Les banques de la zone BCEAO (ECOBANK, Société Générale CI, BOA) et BEAC (Afriland First Bank, SCB Cameroun) font face à des fraudes sophistiquées sur les systèmes SWIFT et les transferts interbancaires. L'ANTIC (Agence Nationale des Technologies de l'Information et de la Communication) du Cameroun a traité 1 200 incidents cyber déclarés en 2023, dont 40 % ciblaient les administrations publiques.",
  regulation:
    "En Côte d'Ivoire, la loi n° 2013-450 relative à la protection des données personnelles est supervisée par l'ARTCI (Autorité de Régulation des Télécommunications/TIC). Au Sénégal, la loi n° 2008-12 sur la protection des données personnelles est gérée par la CDP (Commission des Données Personnelles). Au Cameroun, la loi n° 2010/012 relative à la cybersécurité et à la cybercriminalité est mise en œuvre par l'ANTIC. L'UEMOA et la CEDEAO poussent à l'harmonisation des réglementations cyber, avec un cadre commun en cours d'adoption pour 2025.",
  sectors: [
    "Mobile money et fintech (Wave, Orange Money, MTN MoMo, Moov Africa)",
    "Banques régionales (ECOBANK, BOA, Société Générale CI, Afriland First Bank)",
    "Ports et logistique (Port d'Abidjan, Port de Douala, Port de Dakar)",
    "Télécommunications (Orange CI, MTN Cameroun, Sonatel)",
    "Mines et industries extractives (Endeavour Mining, Glencore Cameroun)",
    "Administration publique et institutions CEDEAO/UEMOA",
  ],
  cities: [
    { name: "Abidjan", urlPath: "/audit-securite-abidjan", description: "Capital économique CI, hub fintech et premier port" },
    { name: "Dakar", urlPath: "/audit-securite-dakar", description: "Capitale sénégalaise, Wave, administrations et banques" },
    { name: "Yaoundé", urlPath: "/audit-securite-yaounde", description: "Capitale politique camerounaise, ANTIC et ministères" },
    { name: "Douala", urlPath: "/audit-securite-douala", description: "Capitale économique camerounaise, port et industries" },
  ],
  faq: [
    {
      q: "Quel est le prix d'un audit de sécurité pour une plateforme mobile money en Afrique ?",
      a: "Un audit de sécurité complet d'une plateforme mobile money (API, back-office, application mobile iOS/Android) est facturé entre 12 000 € et 45 000 € selon le nombre de services exposés et le volume de transactions. Le périmètre inclut les tests d'intrusion sur les API de paiement, les mécanismes d'authentification OTP et les interfaces USSD. Délai : 4 à 8 semaines.",
    },
    {
      q: "CyberSecure intervient-il physiquement en Côte d'Ivoire, au Sénégal et au Cameroun ?",
      a: "Oui, nos consultants se déplacent à Abidjan, Dakar, Douala et Yaoundé pour des missions sur site. Nous disposons de partenariats locaux avec des cabinets IT certifiés. Les missions hybrides (audit à distance + intervention sur site pour les phases critiques) sont possibles à partir de 8 500 €.",
    },
    {
      q: "Comment sécuriser les systèmes OT des ports maritimes d'Afrique de l'Ouest ?",
      a: "La sécurisation des ports passe par un audit des systèmes de gestion de terminaux (TOS), des grues automatisées et des réseaux AIS/GMDSS. Les vecteurs d'attaque les plus fréquents incluent le phishing ciblant les opérateurs portuaires, les attaques sur les VPN d'accès distants et les failles dans les SCADA Schneider/ABB. CyberSecure propose un audit OT portuaire spécialisé en 6 semaines.",
    },
    {
      q: "La loi 2013-450 ivoirienne impose-t-elle des audits aux banques et fintech ?",
      a: "La loi 2013-450 impose des mesures de sécurité techniques pour le traitement des données personnelles. L'ARTCI peut ordonner des audits de conformité aux opérateurs enregistrés. De plus, la BCEAO (Banque Centrale des États de l'Afrique de l'Ouest) impose des exigences de sécurité des systèmes de paiement électronique via l'instruction n° 008-05-2015, incluant des tests d'intrusion annuels.",
    },
    {
      q: "Quelles menaces cyber ciblent spécifiquement les entreprises d'Afrique francophone ?",
      a: "Les principales menaces sont : la fraude sur les plateformes mobile money (SIM swapping, man-in-the-middle sur les API USSD), les attaques BEC (Business Email Compromise) ciblant les transactions SWIFT interbancaires, le ransomware ciblant les administrations publiques (hausse de 60 % en 2023) et les intrusions APT sur les infrastructures minières et pétrolières. Un budget cybersécurité représentant 5 à 8 % du budget IT est recommandé.",
    },
  ],
};

const AuditSecuriteAfrique = () => <CountryHubPage data={data} />;
export default AuditSecuriteAfrique;
