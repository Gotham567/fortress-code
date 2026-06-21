import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBruxelles = () => (
  <CityLandingPage
    data={{
      city: "Bruxelles",
      citySlug: "bruxelles",
      region: "Belgique — Région de Bruxelles-Capitale",
      postalCode: "1000",
      intro: "CyberSecure accompagne les entreprises de Bruxelles avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons à Bruxelles et dans toute la région Région de Bruxelles-Capitale pour les entreprises francophones.",
      localContext: "Bruxelles concentre un tissu économique dense exposé à des cybermenaces en constante évolution. La réglementation locale impose des obligations de cybersécurité : NIS2 (directive européenne transposée en droit belge). CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits et pentests reconnus internationalement pour les entreprises de Belgique.",
      sectors: [
        "Finance et secteur bancaire",
        "Cabinets d'avocats et conseil",
        "Industrie et sous-traitance",
        "Santé et établissements médicaux",
        "Organismes publics et institutions",
        "Commerce et distribution",
      ],
      neighborhoods: [
        "Centre de Bruxelles",
        "Bruxelles",
        "Région de Bruxelles-Capitale",
        "Belgique",
        "Intervention sur site et à distance",
        "Couverture internationale francophone",
      ],
      faq: [
        {
          q: "Réalisez-vous des pentests à Bruxelles ?",
          a: "Oui. CyberSecure intervient à Bruxelles pour des tests d'intrusion (pentest) applicatifs, réseau et infrastructure. Nos rapports sont conformes aux référentiels PASSI ANSSI, reconnus en France, Belgique, Suisse et Luxembourg.",
        },
        {
          q: "Quelles obligations de cybersécurité pour les entreprises de Bruxelles ?",
          a: "Les entreprises de Bruxelles sont soumises à : NIS2 (directive européenne transposée en droit belge). CyberSecure réalise un diagnostic gratuit pour évaluer votre niveau de conformité et définir un plan d'action prioritaire.",
        },
        {
          q: "Que faire en cas de cyberattaque à Bruxelles ?",
          a: "Contactez notre cellule CERT immédiatement (24/7). Isolez vos machines sans les éteindre. CyberSecure coordonne la réponse à l'incident à Bruxelles, gère la communication de crise et réalise l'investigation forensique.",
        },
        {
          q: "Vos audits sont-ils reconnus à Bruxelles ?",
          a: "Oui. Nos audits PASSI ANSSI sont reconnus par les autorités françaises et acceptés par les régulateurs belges (CCN), luxembourgeois (CSSF), suisses (OFCS) et canadiens. Nous émettons des rapports bilingues si nécessaire.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBruxelles;
