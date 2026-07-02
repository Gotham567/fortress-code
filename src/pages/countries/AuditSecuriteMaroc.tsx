import CountryHubPage, { CountryData } from "@/components/CountryHubPage";

const data: CountryData = {
  country: "Maroc",
  countrySlug: "maroc",
  region: "Afrique du Nord",
  intro:
    "CyberSecure accompagne les entreprises marocaines dans leurs audits de sécurité informatique, pentests applicatifs et mise en conformité réglementaire. De Casablanca à Agadir, nos experts PASSI interviennent auprès des PME, ETI et grands groupes confrontés à l'essor des cybermenaces en Afrique du Nord.",
  context:
    "Le Maroc s'impose comme la première économie numérique d'Afrique du Nord, avec un PIB IT en croissance de 12 % par an. L'OCP (Office Chérifien des Phosphates) a subi des tentatives d'intrusion APT ciblant ses systèmes SCADA industriels, illustrant la vulnérabilité des opérateurs d'importance vitale. Le secteur bancaire — Attijariwafa Bank, CIH Bank, BMCE — investit massivement dans la sécurité fintech face à l'explosion du mobile banking (16 millions d'utilisateurs). La Direction Générale de la Sécurité des Systèmes d'Information (DGSSI) a émis en 2023 une directive imposant des audits de sécurité annuels aux administrations et aux opérateurs télécom comme Maroc Telecom et Orange Maroc. Les pentests d'applications e-Gov (portail iDarass, plateformes e-commerce) révèlent régulièrement des vulnérabilités OWASP critiques dans les couches d'authentification et les API REST.",
  regulation:
    "La loi 09-08 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel est supervisée par la Commission Nationale de Contrôle de la Protection des Données Personnelles (CNDP). La DGSSI (Direction Générale de la Sécurité des Systèmes d'Information) émet des directives de sécurité obligatoires pour les administrations et les OIV. Bank Al-Maghrib impose aux établissements financiers des exigences de tests d'intrusion périodiques et d'audit de conformité Basel III. La directive DGSSI 2023-01 oblige les opérateurs de services essentiels à notifier tout incident cyber dans les 72 heures.",
  sectors: [
    "Banques et fintech (Attijariwafa, CIH Bank, BMCE, CDG)",
    "Industries minières et OT/SCADA (OCP Group, MANAGEM)",
    "Télécommunications (Maroc Telecom, Orange Maroc, inwi)",
    "E-gouvernement et administrations publiques (DGSSI, iDarass)",
    "Logistique et ports (Tanger Med, ODEP)",
    "Assurances et services financiers (CNIA Saada, Wafa Assurance)",
  ],
  cities: [
    { name: "Casablanca", urlPath: "/audit-securite-casablanca", description: "Capital économique, hub fintech et siège des grandes banques" },
    { name: "Rabat", urlPath: "/audit-securite-rabat", description: "Capitale administrative, ministères et DGSSI" },
    { name: "Marrakech", urlPath: "/audit-securite-marrakech", description: "Tourisme, hôtellerie et plateformes de réservation" },
    { name: "Tanger", urlPath: "/audit-securite-tanger", description: "Zone franche Tanger Med, logistique et industrie" },
    { name: "Agadir", urlPath: "/audit-securite-agadir", description: "Agrobusiness, pêche industrielle et tourisme balnéaire" },
    { name: "Fès", urlPath: "/audit-securite-fes", description: "Industrie traditionnelle, artisanat numérique et universités" },
  ],
  faq: [
    {
      q: "Quel est le coût d'un audit de sécurité informatique au Maroc ?",
      a: "Un audit de sécurité complet au Maroc est facturé entre 8 000 € et 35 000 € selon la taille du SI et le périmètre. Un pentest applicatif ciblé (5 à 10 applications) démarre à 4 500 €. Les délais vont de 3 semaines pour un audit ciblé à 2 mois pour un audit complet incluant les tests OT/SCADA.",
    },
    {
      q: "La loi 09-08 impose-t-elle des audits de sécurité réguliers ?",
      a: "La loi 09-08 n'impose pas directement des audits périodiques, mais la directive DGSSI 2023-01 exige des audits annuels pour les opérateurs d'importance vitale et les administrations. Bank Al-Maghrib impose aux banques des tests d'intrusion au moins une fois par an, avec rapport à soumettre au superviseur.",
    },
    {
      q: "CyberSecure intervient-il sur site au Maroc ?",
      a: "Oui, nos consultants se déplacent à Casablanca, Rabat, Tanger et dans les autres grandes villes marocaines. Nous proposons également des missions en mode hybride (kick-off sur site + tests à distance). Le déplacement est inclus dans les missions d'une durée supérieure à 5 jours.",
    },
    {
      q: "Comment protéger les systèmes SCADA de l'OCP contre les attaques APT ?",
      a: "La protection des systèmes OT industriels passe par une segmentation réseau IT/OT stricte, un audit des automates Siemens/Rockwell selon IEC 62443, la mise en place d'une détection d'anomalies réseau (Claroty, Dragos) et des exercices Red Team ciblant les protocoles Modbus et DNP3. Délai typique : 6 à 8 semaines.",
    },
    {
      q: "Quelles certifications les prestataires de cybersécurité doivent-ils avoir au Maroc ?",
      a: "La DGSSI recommande de faire appel à des prestataires certifiés ISO 27001 ou qualifiés PASSI (qualification française reconnue au Maroc via accords bilatéraux). CyberSecure dispose de la qualification PASSI de l'ANSSI, reconnue pour les missions au Maroc, en Tunisie et dans l'ensemble des pays francophones.",
    },
  ],
};

const AuditSecuriteMaroc = () => <CountryHubPage data={data} />;
export default AuditSecuriteMaroc;
