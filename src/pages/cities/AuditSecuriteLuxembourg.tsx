import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLuxembourg = () => (
  <CityLandingPage
    data={{
      city: "Luxembourg",
      citySlug: "luxembourg",
      region: "Luxembourg — Grand-Duché de Luxembourg",
      postalCode: "1009",
      intro: "CyberSecure accompagne les entreprises de Luxembourg avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons à Luxembourg et dans toute la région Grand-Duché de Luxembourg pour les entreprises francophones.",
      localContext: "Luxembourg concentre un tissu économique dense exposé à des cybermenaces en constante évolution. La réglementation locale impose des obligations de cybersécurité : NIS2 et loi luxembourgeoise sur la cybersécurité (CSSF). CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits et pentests reconnus internationalement pour les entreprises de Luxembourg.",
      sectors: [
        "Finance et secteur bancaire",
        "Cabinets d'avocats et conseil",
        "Industrie et sous-traitance",
        "Santé et établissements médicaux",
        "Organismes publics et institutions",
        "Commerce et distribution",
      ],
      neighborhoods: [
        "Centre de Luxembourg",
        "Luxembourg-Ville",
        "Grand-Duché de Luxembourg",
        "Luxembourg",
        "Intervention sur site et à distance",
        "Couverture internationale francophone",
      ],
      faq: [
        {
          q: "Réalisez-vous des pentests à Luxembourg ?",
          a: "Oui. CyberSecure intervient à Luxembourg pour des tests d'intrusion (pentest) applicatifs, réseau et infrastructure. Nos rapports sont conformes aux référentiels PASSI ANSSI, reconnus en France, Belgique, Suisse et Luxembourg.",
        },
        {
          q: "Quelles obligations de cybersécurité pour les entreprises de Luxembourg ?",
          a: "Les entreprises de Luxembourg sont soumises à : NIS2 et loi luxembourgeoise sur la cybersécurité (CSSF). CyberSecure réalise un diagnostic gratuit pour évaluer votre niveau de conformité et définir un plan d'action prioritaire.",
        },
        {
          q: "Que faire en cas de cyberattaque à Luxembourg ?",
          a: "Contactez notre cellule CERT immédiatement (24/7). Isolez vos machines sans les éteindre. CyberSecure coordonne la réponse à l'incident à Luxembourg, gère la communication de crise et réalise l'investigation forensique.",
        },
        {
          q: "Vos audits sont-ils reconnus à Luxembourg ?",
          a: "Oui. Nos audits PASSI ANSSI sont reconnus par les autorités françaises et acceptés par les régulateurs belges (CCN), luxembourgeois (CSSF), suisses (OFCS) et canadiens. Nous émettons des rapports bilingues si nécessaire.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLuxembourg;
