import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteDijon = () => (
  <CityLandingPage
    data={{
      city: "Dijon",
      citySlug: "dijon",
      region: "Bourgogne-Franche-Comté",
      postalCode: "21000",
      intro: "CyberSecure propose des audits de sécurité informatique, pentests et tests d'intrusion à Dijon pour les PME et ETI de Côte-d'Or, avec une expertise sur les secteurs agroalimentaire, viticole, industriel et financier. Notre cabinet qualifié PASSI ANSSI intervient à Dijon et dans l'agglomération dijonnaise pour sécuriser vos systèmes face aux cybermenaces qui ciblent l'économie bourguignonne.",
      localContext: "Dijon est la capitale régionale de Bourgogne-Franche-Comté et un important carrefour logistique et agroalimentaire, avec des géants comme Dijon Céréales, Lactalis et de nombreuses coopératives viticoles dont les données de production et les systèmes SCADA sont des cibles prioritaires. Le CHU de Dijon et les établissements de santé privés du département sont exposés à la vague de ransomwares frappant le secteur médical. Le pôle financier dijonnais (Crédit Agricole Champagne Bourgogne, Groupe Banque Populaire) et les cabinets d'avocats de la cour d'appel manipulent des données hautement confidentielles. L'Université de Bourgogne et l'AgroSup Dijon génèrent également un écosystème de startups agritech en besoin de sécurisation.",
      sectors: [
        "Agroalimentaire et coopératives viticoles",
        "Finance et assurance (Crédit Agricole, mutuelles)",
        "Santé (CHU Dijon, cliniques privées)",
        "Industrie et logistique (axe A6)",
        "Cabinets d'avocats et professions juridiques",
        "Collectivités et Métropole de Dijon",
      ],
      neighborhoods: [
        "Centre-ville et Hypercentre dijonnais",
        "Cap Nord (zones d'activités industrielles)",
        "Quetigny (zones commerciales et logistique)",
        "Longvic (aéroport, industrie)",
        "Chenôve et Marsannay-la-Côte",
        "Beaune et Côte-d'Or viticole",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une coopérative viticole ou agroalimentaire à Dijon ?",
          a: "Un audit de sécurité réseau pour une PME agroalimentaire ou une coopérative viticole à Dijon est tarifé entre 6 000 et 12 000 € HT selon la taille du SI. Si des systèmes SCADA de production sont inclus dans le périmètre, il faut prévoir un budget complémentaire de 3 000 à 5 000 € HT pour l'audit des systèmes industriels (ICS/OT). CyberSecure propose un devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest application web à Dijon ?",
          a: "Un pentest d'application web pour une PME dijonnaise dure généralement 3 à 5 jours selon la complexité. Pour un test d'intrusion réseau complet sur une ETI, comptez 5 à 8 jours ouvrés. Le rapport de pentest avec classification des vulnérabilités (CVSS) et recommandations priorisées est livré sous 5 jours ouvrés après la fin des tests.",
        },
        {
          q: "Comment sécuriser un système SCADA ou un environnement de production industrielle à Dijon ?",
          a: "Les coopératives viticoles et les usines agroalimentaires de Dijon utilisent des automates industriels (PLC/SCADA) qui, lorsqu'ils sont connectés au réseau IT, constituent des vecteurs d'attaque critiques. CyberSecure réalise des audits OT/IT incluant la cartographie des flux réseau entre SI de gestion et SI de production, le test des cloisonnements (DMZ industrielle), et l'évaluation des postes de supervision. Nous recommandons l'application du guide ANSSI sur la cybersécurité des systèmes industriels.",
        },
        {
          q: "CyberSecure intervient-il sur site à Dijon et en Côte-d'Or ?",
          a: "Oui, nos consultants se déplacent à Dijon, Beaune, Chenôve, Longvic, Quetigny et dans toute la Côte-d'Or. Nous couvrons également l'Yonne (Auxerre), la Saône-et-Loire (Chalon, Mâcon) et le Doubs (Besançon) pour les ETI régionales ayant des sites multiples en Bourgogne-Franche-Comté.",
        },
        {
          q: "Que faire en cas de ransomware ou cyberattaque à Dijon ?",
          a: "Appelez le CERT de CyberSecure immédiatement (ligne d'urgence disponible 24h/24). Isolez les systèmes infectés du réseau sans les éteindre. Notre équipe peut être déployée sur site à Dijon dans les 4 heures pour contenir la propagation, réaliser l'analyse forensique et coordonner la remise en production. CyberSecure prend en charge les notifications ANSSI et CNIL obligatoires. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteDijon;
