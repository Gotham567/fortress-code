import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMonaco = () => (
  <CityLandingPage
    data={{
      city: "Monaco",
      citySlug: "monaco",
      region: "Monaco — Principauté de Monaco",
      postalCode: "98000",
      intro: "CyberSecure accompagne les entreprises de Monaco avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons à Monaco et dans toute la région Principauté de Monaco pour les entreprises francophones.",
      localContext: "Monaco concentre un tissu économique dense exposé à des cybermenaces en constante évolution. La réglementation locale impose des obligations de cybersécurité : Loi n° 1.383 sur la protection des données personnelles et règlements CCIN. CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits et pentests reconnus internationalement pour les entreprises de Monaco.",
      sectors: [
        "Finance et secteur bancaire",
        "Cabinets d'avocats et conseil",
        "Industrie et sous-traitance",
        "Santé et établissements médicaux",
        "Organismes publics et institutions",
        "Commerce et distribution",
      ],
      neighborhoods: [
        "Centre de Monaco",
        "Monaco",
        "Principauté de Monaco",
        "Monaco",
        "Intervention sur site et à distance",
        "Couverture internationale francophone",
      ],
      faq: [
        {
          q: "Réalisez-vous des pentests à Monaco ?",
          a: "Oui. CyberSecure intervient à Monaco pour des tests d'intrusion (pentest) applicatifs, réseau et infrastructure. Nos rapports sont conformes aux référentiels PASSI ANSSI, reconnus en France, Belgique, Suisse et Luxembourg.",
        },
        {
          q: "Quelles obligations de cybersécurité pour les entreprises de Monaco ?",
          a: "Les entreprises de Monaco sont soumises à : Loi n° 1.383 sur la protection des données personnelles et règlements CCIN. CyberSecure réalise un diagnostic gratuit pour évaluer votre niveau de conformité et définir un plan d'action prioritaire.",
        },
        {
          q: "Que faire en cas de cyberattaque à Monaco ?",
          a: "Contactez notre cellule CERT immédiatement (24/7). Isolez vos machines sans les éteindre. CyberSecure coordonne la réponse à l'incident à Monaco, gère la communication de crise et réalise l'investigation forensique.",
        },
        {
          q: "Vos audits sont-ils reconnus à Monaco ?",
          a: "Oui. Nos audits PASSI ANSSI sont reconnus par les autorités françaises et acceptés par les régulateurs belges (CCN), luxembourgeois (CSSF), suisses (OFCS) et canadiens. Nous émettons des rapports bilingues si nécessaire.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMonaco;
