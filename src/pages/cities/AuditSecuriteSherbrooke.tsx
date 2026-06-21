import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteSherbrooke = () => (
  <CityLandingPage
    data={{
      city: "Sherbrooke",
      citySlug: "sherbrooke",
      region: "Canada — Québec",
      postalCode: "J1H",
      intro: "CyberSecure accompagne les entreprises de Sherbrooke avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons à Sherbrooke et dans toute la région Québec pour les entreprises francophones.",
      localContext: "Sherbrooke concentre un tissu économique dense exposé à des cybermenaces en constante évolution. La réglementation locale impose des obligations de cybersécurité : Loi 25 et Loi C-26 fédérale sur la cybersécurité. CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits et pentests reconnus internationalement pour les entreprises de Canada.",
      sectors: [
        "Finance et secteur bancaire",
        "Cabinets d'avocats et conseil",
        "Industrie et sous-traitance",
        "Santé et établissements médicaux",
        "Organismes publics et institutions",
        "Commerce et distribution",
      ],
      neighborhoods: [
        "Centre de Sherbrooke",
        "Estrie",
        "Québec",
        "Canada",
        "Intervention sur site et à distance",
        "Couverture internationale francophone",
      ],
      faq: [
        {
          q: "Réalisez-vous des pentests à Sherbrooke ?",
          a: "Oui. CyberSecure intervient à Sherbrooke pour des tests d'intrusion (pentest) applicatifs, réseau et infrastructure. Nos rapports sont conformes aux référentiels PASSI ANSSI, reconnus en France, Belgique, Suisse et Luxembourg.",
        },
        {
          q: "Quelles obligations de cybersécurité pour les entreprises de Sherbrooke ?",
          a: "Les entreprises de Sherbrooke sont soumises à : Loi 25 et Loi C-26 fédérale sur la cybersécurité. CyberSecure réalise un diagnostic gratuit pour évaluer votre niveau de conformité et définir un plan d'action prioritaire.",
        },
        {
          q: "Que faire en cas de cyberattaque à Sherbrooke ?",
          a: "Contactez notre cellule CERT immédiatement (24/7). Isolez vos machines sans les éteindre. CyberSecure coordonne la réponse à l'incident à Sherbrooke, gère la communication de crise et réalise l'investigation forensique.",
        },
        {
          q: "Vos audits sont-ils reconnus à Sherbrooke ?",
          a: "Oui. Nos audits PASSI ANSSI sont reconnus par les autorités françaises et acceptés par les régulateurs belges (CCN), luxembourgeois (CSSF), suisses (OFCS) et canadiens. Nous émettons des rapports bilingues si nécessaire.",
        },
      ],
    }}
  />
);

export default AuditSecuriteSherbrooke;
