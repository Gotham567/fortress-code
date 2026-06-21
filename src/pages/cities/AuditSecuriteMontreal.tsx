import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMontreal = () => (
  <CityLandingPage
    data={{
      city: "Montréal",
      citySlug: "montreal",
      region: "Canada — Québec",
      postalCode: "H2Y",
      intro: "CyberSecure accompagne les entreprises de Montréal avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons à Montréal et dans toute la région Québec pour les entreprises francophones.",
      localContext: "Montréal concentre un tissu économique dense exposé à des cybermenaces en constante évolution. La réglementation locale impose des obligations de cybersécurité : Loi 25 (protection des données personnelles au Québec) et Loi C-26 fédérale. CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits et pentests reconnus internationalement pour les entreprises de Canada.",
      sectors: [
        "Finance et secteur bancaire",
        "Cabinets d'avocats et conseil",
        "Industrie et sous-traitance",
        "Santé et établissements médicaux",
        "Organismes publics et institutions",
        "Commerce et distribution",
      ],
      neighborhoods: [
        "Centre de Montréal",
        "Île de Montréal",
        "Québec",
        "Canada",
        "Intervention sur site et à distance",
        "Couverture internationale francophone",
      ],
      faq: [
        {
          q: "Réalisez-vous des pentests à Montréal ?",
          a: "Oui. CyberSecure intervient à Montréal pour des tests d'intrusion (pentest) applicatifs, réseau et infrastructure. Nos rapports sont conformes aux référentiels PASSI ANSSI, reconnus en France, Belgique, Suisse et Luxembourg.",
        },
        {
          q: "Quelles obligations de cybersécurité pour les entreprises de Montréal ?",
          a: "Les entreprises de Montréal sont soumises à : Loi 25 (protection des données personnelles au Québec) et Loi C-26 fédérale. CyberSecure réalise un diagnostic gratuit pour évaluer votre niveau de conformité et définir un plan d'action prioritaire.",
        },
        {
          q: "Que faire en cas de cyberattaque à Montréal ?",
          a: "Contactez notre cellule CERT immédiatement (24/7). Isolez vos machines sans les éteindre. CyberSecure coordonne la réponse à l'incident à Montréal, gère la communication de crise et réalise l'investigation forensique.",
        },
        {
          q: "Vos audits sont-ils reconnus à Montréal ?",
          a: "Oui. Nos audits PASSI ANSSI sont reconnus par les autorités françaises et acceptés par les régulateurs belges (CCN), luxembourgeois (CSSF), suisses (OFCS) et canadiens. Nous émettons des rapports bilingues si nécessaire.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMontreal;
