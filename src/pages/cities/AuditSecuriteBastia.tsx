import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBastia = () => (
  <CityLandingPage
    data={{
      city: "Bastia",
      citySlug: "bastia",
      region: "Haute-Corse",
      postalCode: "20200",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, protège les PME, commerces et collectivités de Bastia avec des audits cybersécurité et des pentests adaptés au tissu économique corse. Première ville économique de Corse, Bastia concentre port, commerce et services — des cibles prioritaires des cyberattaquants.",
      localContext: "Bastia est la principale ville économique de la Haute-Corse avec un port commercial actif, un tissu dense de PME dans le commerce, l'import-export, les transports et le tourisme. Les entreprises bastiaies gèrent des flux financiers et logistiques importants qui en font des cibles récurrentes de fraudes au virement (FOVI), de ransomwares et d'attaques sur les systèmes de gestion. La dépendance à la connectivité insulaire amplifie l'impact d'une cyberattaque sur la continuité d'activité. CyberSecure intervient à Bastia, Corte, L'Île-Rousse et dans toute la Haute-Corse pour sécuriser vos systèmes.",
      sectors: [
        "Commerce et import-export",
        "Transport maritime et logistique portuaire",
        "Tourisme et hôtellerie",
        "BTP et construction",
        "Collectivités et administrations",
        "PME et artisanat local",
      ],
      neighborhoods: [
        "Bastia Centre et Vieux-Port",
        "Lupino et zone industrielle",
        "Furiani et Biguglia",
        "Corte et Haute-Corse intérieure",
        "L'Île-Rousse, Calvi",
        "Toute la Haute-Corse",
      ],
      faq: [
        {
          q: "Quel est le prix d'un audit cybersécurité pour une PME corse à Bastia ?",
          a: "Un audit de sécurité pour une PME bastiaie démarre à 3 500 € HT pour un audit ciblé de 2 jours couvrant les risques principaux. Un pentest réseau complet varie entre 8 000 et 15 000 € HT selon le périmètre. Pour les commerces et TPE, un diagnostic rapide est disponible à partir de 1 500 € HT. Nos rapports qualifiés PASSI ANSSI sont reconnus par les banques et assureurs cyber. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un pentest pour une entreprise à Bastia ?",
          a: "Un pentest web pour un site e-commerce ou une application métier prend 3 à 5 jours. Un audit réseau et Active Directory pour une PME de 20 à 50 salariés nécessite 4 à 7 jours. Nous adaptons le planning à vos contraintes et pouvons réaliser certaines phases à distance pour limiter les frais de déplacement tout en maintenant la qualité de la prestation.",
        },
        {
          q: "Les PME corses sont-elles particulièrement exposées aux fraudes au virement (FOVI) ?",
          a: "Oui. La fraude au virement bancaire cible particulièrement les PME qui réalisent des transactions importantes avec des fournisseurs continentaux. Les attaquants compromettent les messageries (phishing) pour intercepter les échanges et modifier les coordonnées bancaires. Notre audit de messagerie et de phishing permet d'identifier ces vulnérabilités et de former vos équipes aux bonnes pratiques de vérification.",
        },
        {
          q: "Intervenez-vous sur site à Bastia et dans toute la Haute-Corse ?",
          a: "Oui. Nos consultants se déplacent sur site à Bastia, Corte, L'Île-Rousse, Calvi et dans tout le département de la Haute-Corse. Les missions à distance (revue de configuration, audit organisationnel, analyse de vulnérabilités) sont disponibles pour réduire les délais et les coûts de déplacement. La Corse bénéficie de la même expertise et des mêmes standards qualité PASSI que nos interventions en métropole.",
        },
        {
          q: "Que faire en cas de cyberattaque sur mon entreprise à Bastia ?",
          a: "Appelez notre ligne CERT immédiatement (disponible 24h/24 et 7j/7). Isolez sans délai les postes et serveurs compromis du réseau en débranchant les câbles réseau (Wi-Fi compris) sans éteindre les machines. Conservez tous les journaux d'événements. Signalez l'incident sur cybermalveillance.gouv.fr et à votre assureur. Si des données personnelles sont compromises, notifiez la CNIL dans les 72 heures. CyberSecure coordonne la réponse et la reprise d'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBastia;
