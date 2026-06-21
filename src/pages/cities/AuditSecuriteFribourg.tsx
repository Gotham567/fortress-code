import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteFribourg = () => (
  <CityLandingPage
    data={{
      city: "Fribourg",
      citySlug: "fribourg",
      region: "Suisse — Suisse romande",
      postalCode: "1700",
      intro: "CyberSecure accompagne les entreprises de Fribourg avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons à Fribourg et dans toute la région Suisse romande pour les entreprises francophones.",
      localContext: "Fribourg concentre un tissu économique dense exposé à des cybermenaces en constante évolution. La réglementation locale impose des obligations de cybersécurité : LPD révisée et recommandations OFCS. CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits et pentests reconnus internationalement pour les entreprises de Suisse.",
      sectors: [
        "Finance et secteur bancaire",
        "Cabinets d'avocats et conseil",
        "Industrie et sous-traitance",
        "Santé et établissements médicaux",
        "Organismes publics et institutions",
        "Commerce et distribution",
      ],
      neighborhoods: [
        "Centre de Fribourg",
        "Canton de Fribourg",
        "Suisse romande",
        "Suisse",
        "Intervention sur site et à distance",
        "Couverture internationale francophone",
      ],
      faq: [
        {
          q: "Réalisez-vous des pentests à Fribourg ?",
          a: "Oui. CyberSecure intervient à Fribourg pour des tests d'intrusion (pentest) applicatifs, réseau et infrastructure. Nos rapports sont conformes aux référentiels PASSI ANSSI, reconnus en France, Belgique, Suisse et Luxembourg.",
        },
        {
          q: "Quelles obligations de cybersécurité pour les entreprises de Fribourg ?",
          a: "Les entreprises de Fribourg sont soumises à : LPD révisée et recommandations OFCS. CyberSecure réalise un diagnostic gratuit pour évaluer votre niveau de conformité et définir un plan d'action prioritaire.",
        },
        {
          q: "Que faire en cas de cyberattaque à Fribourg ?",
          a: "Contactez notre cellule CERT immédiatement (24/7). Isolez vos machines sans les éteindre. CyberSecure coordonne la réponse à l'incident à Fribourg, gère la communication de crise et réalise l'investigation forensique.",
        },
        {
          q: "Vos audits sont-ils reconnus à Fribourg ?",
          a: "Oui. Nos audits PASSI ANSSI sont reconnus par les autorités françaises et acceptés par les régulateurs belges (CCN), luxembourgeois (CSSF), suisses (OFCS) et canadiens. Nous émettons des rapports bilingues si nécessaire.",
        },
      ],
    }}
  />
);

export default AuditSecuriteFribourg;
