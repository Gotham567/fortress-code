import CountryHubPage, { CountryData } from "@/components/CountryHubPage";

const data: CountryData = {
  country: "Algérie",
  countrySlug: "algerie",
  region: "Afrique du Nord",
  intro:
    "CyberSecure accompagne les entreprises et institutions algériennes dans leurs audits de sécurité informatique, pentests OT/SCADA et mise en conformité réglementaire. Nos experts interviennent à Alger et Oran pour sécuriser les infrastructures pétrolières, les banques publiques et les opérateurs télécoms face à des menaces cyber croissantes.",
  context:
    "L'Algérie, premier exportateur de gaz naturel d'Afrique, concentre des enjeux de cybersécurité industrielle majeurs. Sonatrach, le groupe pétrolier public, exploite des milliers de kilomètres de pipelines équipés de systèmes SCADA exposés à des attaques APT d'origine étatique. Algérie Télécom et ses filiales (Mobilis, Djezzy) ont subi plusieurs incidents de sécurité liés à des vulnérabilités dans leurs portails clients et leurs infrastructures réseau. Le secteur bancaire public — BNA (Banque Nationale d'Algérie), BADR, CPA — opère sur des systèmes Core Banking vieillissants (certains datant des années 1990) présentant des risques critiques d'injection SQL et d'accès non autorisé. L'État algérien a lancé en 2021 la stratégie nationale de cybersécurité, avec la création de l'Autorité Nationale de Prévention et de Protection contre la Délinquance Informatique (ANPDP) et l'obligation de déclaration des incidents pour les administrations.",
  regulation:
    "La loi n° 18-07 du 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données à caractère personnel crée l'Autorité Nationale de Protection des Données Personnelles (ANPDP). La loi n° 09-04 portant règles particulières relatives à la prévention et à la lutte contre les infractions liées aux technologies de l'information constitue le socle de la cybercriminalité. La DGSSI algérienne (Direction Générale de la Sécurité des Systèmes d'Information) émet des directives sécurité pour les administrations. Sonatrach et les opérateurs d'importance vitale sont soumis à des exigences de sécurité industrielle selon les normes IEC 62443.",
  sectors: [
    "Pétrole et gaz — OT/SCADA (Sonatrach, Sonelgaz, Naftal)",
    "Banques publiques et institutions financières (BNA, BADR, CPA, BEA)",
    "Télécommunications (Algérie Télécom, Mobilis, Djezzy, Ooredoo)",
    "Administration publique et défense (ANPDP, ministères)",
    "Industries pharmaceutiques et chimiques (Saidal, ENPC)",
    "Ports et logistique (EPB Alger, Oran, Annaba)",
  ],
  cities: [
    { name: "Alger", urlPath: "/audit-securite-alger", description: "Capitale, banques publiques, administrations et télécoms" },
    { name: "Oran", urlPath: "/audit-securite-oran", description: "2e ville, industrie pétrochimique et port stratégique" },
  ],
  faq: [
    {
      q: "Quel est le coût d'un audit de sécurité OT/SCADA pour Sonatrach ou une entreprise pétrolière algérienne ?",
      a: "Un audit de sécurité OT/SCADA complet pour une infrastructure pétrolière algérienne est estimé entre 25 000 € et 80 000 € selon le nombre de sites et la complexité des systèmes Siemens/Honeywell. Le périmètre inclut : audit architecture ICS/OT, tests d'intrusion sur les postes opérateurs, analyse des protocoles Modbus/DNP3 et plan de remédiation. Délai : 8 à 14 semaines.",
    },
    {
      q: "La loi 18-07 algérienne impose-t-elle des mesures de cybersécurité aux banques ?",
      a: "La loi 18-07 impose des mesures techniques de sécurité pour le traitement des données personnelles. La Banque d'Algérie a émis des instructions complémentaires imposant aux banques des audits de sécurité annuels, des tests d'intrusion sur les systèmes de paiement et la notification sous 48 heures de tout incident majeur. CyberSecure peut réaliser ces audits de conformité.",
    },
    {
      q: "Comment CyberSecure intervient-il en Algérie ?",
      a: "Nos missions en Algérie démarrent par une phase de reconnaissance et d'audit à distance, suivie d'une intervention sur site à Alger ou Oran d'une durée de 1 à 3 semaines selon le périmètre. Nous collaborons avec des partenaires locaux certifiés pour les aspects réglementaires. Les rapports sont fournis en français et incluent une roadmap de remédiation priorisée.",
    },
    {
      q: "Quelles sont les principales vulnérabilités des banques publiques algériennes ?",
      a: "Les systèmes Core Banking vieillissants (IBM AS/400, Oracle Temenos) présentent des risques d'injection SQL, d'authentification faible et de manque de chiffrement des données en transit. Les portails de banque en ligne sont régulièrement vulnérables aux attaques XSS, CSRF et aux failles d'API non documentées. Un pentest complet d'un système bancaire algérien prend généralement 4 à 6 semaines.",
    },
    {
      q: "Algérie Télécom est-elle soumise à des obligations de cybersécurité spécifiques ?",
      a: "Algérie Télécom, en tant qu'opérateur d'importance vitale, est soumise aux directives de la DGSSI et aux recommandations de l'Union Internationale des Télécommunications (UIT). La directive algérienne sur la protection des réseaux impose des audits de sécurité annuels et la mise en place d'un SOC (Security Operations Center). CyberSecure propose des audits de conformité spécifiques aux télécoms.",
    },
  ],
};

const AuditSecuriteAlgerie = () => <CountryHubPage data={data} />;
export default AuditSecuriteAlgerie;
