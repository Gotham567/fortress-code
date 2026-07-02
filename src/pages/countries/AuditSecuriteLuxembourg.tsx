import CountryHubPage, { CountryData } from "@/components/CountryHubPage";

const data: CountryData = {
  country: "Luxembourg",
  countrySlug: "luxembourg",
  region: "Europe occidentale",
  intro:
    "CyberSecure accompagne les entreprises luxembourgeoises dans leurs audits de sécurité informatique, pentests et mise en conformité DORA/RGPD/CSSF. Nos experts PASSI sécurisent les fonds d'investissement, Clearstream, les centres de données Amazon EU, les acteurs fintech et les institutions financières soumises aux exigences les plus élevées de l'UE en matière de résilience numérique.",
  context:
    "Le Luxembourg est la première place de fonds d'investissement en Europe continentale, avec plus de 3 000 fonds OPCVM totalisant 5 500 milliards d'euros d'actifs sous gestion. Clearstream (filiale de Deutsche Börse) traite les opérations de règlement-livraison pour la quasi-totalité des titres européens depuis Luxembourg. Amazon EU SARL a établi son siège fiscal européen à Luxembourg, avec des data centers critique hébergeant AWS Europe (ouest). LU-CIX (Luxembourg Internet Exchange) est le point d'échange internet central pour le Benelux. Le CIRCL (Computer Incident Response Center Luxembourg) traite annuellement plus de 2 000 incidents signalés, avec une spécialisation reconnue en threat intelligence et malware analysis (créateurs des standards MISP et STIX).",
  regulation:
    "Le RGPD est supervisé au Luxembourg par la CNPD (Commission Nationale pour la Protection des Données). La CSSF (Commission de Surveillance du Secteur Financier) impose des exigences de cybersécurité aux banques, fonds et PSP, notamment via la circulaire CSSF 22/806 sur les risques IT et la résilience opérationnelle. DORA (Digital Operational Resilience Act) s'applique depuis janvier 2025 à toutes les entités financières luxembourgeoises, avec des obligations de tests TLPT pour les entités significatives. Le CIRCL coordonne la réponse aux incidents cyber sur le territoire.",
  sectors: [
    "Fonds d'investissement et asset management (BlackRock, Amundi, Fidelity Luxembourg)",
    "Infrastructure de marché (Clearstream, CETREL, Euroclear)",
    "Centres de données et cloud (Amazon EU, LuxConnect, SES Satellites)",
    "Banques privées et PSP (BIL, BCEE, Bil, Swissquote Luxembourg)",
    "Fintech et paiement (PayPal Europe, Amazon Pay, Skrill/Paysafe)",
    "Cabinets d'avocats et compliance (Linklaters, Allen & Overy, KPMG LU)",
  ],
  cities: [
    { name: "Luxembourg-Ville", urlPath: "/audit-securite-luxembourg", description: "Place financière, CSSF, Clearstream et fonds d'investissement" },
    { name: "Esch-sur-Alzette", urlPath: "/audit-securite-esch-sur-alzette", description: "LuxConnect data centers, Belval et industries" },
  ],
  faq: [
    {
      q: "Quel est le coût d'un audit DORA pour un fonds d'investissement luxembourgeois ?",
      a: "Un audit de conformité DORA pour un gestionnaire de fonds luxembourgeois est facturé entre 20 000 € et 75 000 € selon la taille et la complexité du périmètre IT. Le périmètre inclut : évaluation des 5 piliers DORA (gouvernance, gestion des risques ICT, gestion des incidents, tests de résilience, risque tiers), pentest des systèmes critiques et roadmap de mise en conformité. Les tests TLPT pour les entités significatives démarrent à 35 000 €.",
    },
    {
      q: "La CSSF impose-t-elle des pentests aux banques et fonds luxembourgeois ?",
      a: "Oui, la circulaire CSSF 22/806 impose aux entités régulées une évaluation régulière de leur résilience informatique incluant des tests d'intrusion. Depuis janvier 2025, DORA renforce ces obligations avec des tests TLPT (Threat-Led Penetration Testing) annuels pour les entités significatives, réalisés par des prestataires tiers certifiés. CyberSecure est qualifié pour réaliser ces tests selon le cadre TIBER-EU/DORA.",
    },
    {
      q: "Comment sécuriser les accès à un centre de données comme LuxConnect ou Amazon EU ?",
      a: "La sécurisation des data centers luxembourgeois passe par : pentest des interfaces d'administration cloud, audit des contrôles d'accès physiques et logiques, test d'intrusion sur les API de gestion (AWS API Gateway, Azure ARM), revue des configurations IAM et évaluation de la conformité SOC 2/ISO 27001. CyberSecure propose un audit data center complet en 4 à 6 semaines à partir de 18 000 €.",
    },
    {
      q: "CIRCL (le CERT luxembourgeois) doit-il être notifié en cas d'incident cyber ?",
      a: "Les entités NIS2/DORA au Luxembourg doivent notifier les incidents significatifs à la fois à la CSSF (ou ILNAS selon le secteur) et au CIRCL en tant que CSIRT national, dans un délai de 24 heures pour l'alerte précoce et 72 heures pour le rapport intermédiaire. CyberSecure assiste ses clients dans la gestion de crise et la rédaction des notifications réglementaires.",
    },
    {
      q: "CyberSecure intervient-il sur les acteurs fintech comme PayPal Europe ou Amazon Pay basés à Luxembourg ?",
      a: "Oui, CyberSecure accompagne des acteurs fintech européens domiciliés à Luxembourg pour leurs audits de sécurité PCI DSS, pentests des API de paiement et conformité DORA. Nos consultants ont une expertise spécifique sur les environnements Kubernetes/AWS utilisés par les grandes plateformes e-commerce. Un audit complet d'une plateforme de paiement inclut les tests PCI DSS niveau 1 et se déroule sur 6 à 10 semaines.",
    },
  ],
};

const AuditSecuriteLuxembourg = () => <CountryHubPage data={data} />;
export default AuditSecuriteLuxembourg;
