import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNeuchatel = () => (
  <CityLandingPage
    data={{
      city: "Neuchâtel",
      citySlug: "neuchatel",
      region: "Suisse — Suisse romande",
      postalCode: "2000",
      intro: "CyberSecure accompagne les entreprises de Neuchâtel avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons à Neuchâtel et dans toute la région Suisse romande pour les entreprises francophones.",
      localContext: "Neuchâtel concentre un tissu économique dense exposé à des cybermenaces en constante évolution. La réglementation locale impose des obligations de cybersécurité : LPD révisée et recommandations OFCS. CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits et pentests reconnus internationalement pour les entreprises de Suisse.",
      sectors: [
        "Finance et secteur bancaire",
        "Cabinets d'avocats et conseil",
        "Industrie et sous-traitance",
        "Santé et établissements médicaux",
        "Organismes publics et institutions",
        "Commerce et distribution",
      ],
      neighborhoods: [
        "Centre de Neuchâtel",
        "Canton de Neuchâtel",
        "Suisse romande",
        "Suisse",
        "Intervention sur site et à distance",
        "Couverture internationale francophone",
      ],
      faq: [
        {
          q: "Réalisez-vous des pentests à Neuchâtel ?",
          a: "Oui. CyberSecure intervient à Neuchâtel pour des tests d'intrusion (pentest) applicatifs, réseau et infrastructure. Nos rapports sont conformes aux référentiels PASSI ANSSI, reconnus en France, Belgique, Suisse et Luxembourg.",
        },
        {
          q: "Quelles obligations de cybersécurité pour les entreprises de Neuchâtel ?",
          a: "Les entreprises de Neuchâtel sont soumises à : LPD révisée et recommandations OFCS. CyberSecure réalise un diagnostic gratuit pour évaluer votre niveau de conformité et définir un plan d'action prioritaire.",
        },
        {
          q: "Que faire en cas de cyberattaque à Neuchâtel ?",
          a: "Contactez notre cellule CERT immédiatement (24/7). Isolez vos machines sans les éteindre. CyberSecure coordonne la réponse à l'incident à Neuchâtel, gère la communication de crise et réalise l'investigation forensique.",
        },
        {
          q: "Vos audits sont-ils reconnus à Neuchâtel ?",
          a: "Oui. Nos audits PASSI ANSSI sont reconnus par les autorités françaises et acceptés par les régulateurs belges (CCN), luxembourgeois (CSSF), suisses (OFCS) et canadiens. Nous émettons des rapports bilingues si nécessaire.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNeuchatel;
