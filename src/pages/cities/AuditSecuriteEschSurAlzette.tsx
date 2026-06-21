import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteEschSurAlzette = () => (
  <CityLandingPage
    data={{
      city: "Esch-sur-Alzette",
      citySlug: "esch-sur-alzette",
      region: "Luxembourg — Grand-Duché de Luxembourg",
      postalCode: "4010",
      intro: "CyberSecure accompagne les entreprises de Esch-sur-Alzette avec des audits de sécurité PASSI, des pentests et une cellule CERT disponible 24h/24. Nous intervenons à Esch-sur-Alzette et dans toute la région Grand-Duché de Luxembourg pour les entreprises francophones.",
      localContext: "Esch-sur-Alzette concentre un tissu économique dense exposé à des cybermenaces en constante évolution. La réglementation locale impose des obligations de cybersécurité : NIS2 et loi luxembourgeoise sur la cybersécurité (CSSF). CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits et pentests reconnus internationalement pour les entreprises de Luxembourg.",
      sectors: [
        "Finance et secteur bancaire",
        "Cabinets d'avocats et conseil",
        "Industrie et sous-traitance",
        "Santé et établissements médicaux",
        "Organismes publics et institutions",
        "Commerce et distribution",
      ],
      neighborhoods: [
        "Centre de Esch-sur-Alzette",
        "Canton d'Esch-sur-Alzette",
        "Grand-Duché de Luxembourg",
        "Luxembourg",
        "Intervention sur site et à distance",
        "Couverture internationale francophone",
      ],
      faq: [
        {
          q: "Réalisez-vous des pentests à Esch-sur-Alzette ?",
          a: "Oui. CyberSecure intervient à Esch-sur-Alzette pour des tests d'intrusion (pentest) applicatifs, réseau et infrastructure. Nos rapports sont conformes aux référentiels PASSI ANSSI, reconnus en France, Belgique, Suisse et Luxembourg.",
        },
        {
          q: "Quelles obligations de cybersécurité pour les entreprises de Esch-sur-Alzette ?",
          a: "Les entreprises de Esch-sur-Alzette sont soumises à : NIS2 et loi luxembourgeoise sur la cybersécurité (CSSF). CyberSecure réalise un diagnostic gratuit pour évaluer votre niveau de conformité et définir un plan d'action prioritaire.",
        },
        {
          q: "Que faire en cas de cyberattaque à Esch-sur-Alzette ?",
          a: "Contactez notre cellule CERT immédiatement (24/7). Isolez vos machines sans les éteindre. CyberSecure coordonne la réponse à l'incident à Esch-sur-Alzette, gère la communication de crise et réalise l'investigation forensique.",
        },
        {
          q: "Vos audits sont-ils reconnus à Esch-sur-Alzette ?",
          a: "Oui. Nos audits PASSI ANSSI sont reconnus par les autorités françaises et acceptés par les régulateurs belges (CCN), luxembourgeois (CSSF), suisses (OFCS) et canadiens. Nous émettons des rapports bilingues si nécessaire.",
        },
      ],
    }}
  />
);

export default AuditSecuriteEschSurAlzette;
