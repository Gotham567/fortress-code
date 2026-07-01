import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMontpellier = () => (
  <CityLandingPage
    data={{
      city: "Montpellier",
      citySlug: "montpellier",
      urlPath: "cybersecurite-montpellier",
      region: "Occitanie",
      postalCode: "34000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les startups medtech, PME numériques et entreprises de santé de Montpellier avec des pentests et des audits de sécurité adaptés à leur secteur. French Tech Montpellier, santé et agrotech : nos experts assurent la cybersécurité des entreprises innovantes d'Occitanie.",
      localContext: "Montpellier est l'une des métropoles françaises à la croissance la plus rapide, portée par un écosystème numérique dynamique, un pôle santé et medtech de premier plan (CHU, IBM, startups medtech), l'agriculture intelligente et 55 000 étudiants qui alimentent la création de startups. Les entreprises medtech gèrent des données de santé ultra-sensibles réglementées par le RGPD de la santé, tandis que les startups numériques SaaS exposent des APIs qui peuvent devenir des vecteurs d'attaque. CyberSecure intervient à Montpellier, Castelnau-le-Lez, Grabels, Vendargues et dans tout le département Hérault.",
      sectors: [
        "Santé et medtech (CHU, startups, IBM)",
        "Numérique et startups SaaS",
        "Agriculture intelligente et agrotech",
        "Logistique et distribution",
        "Enseignement supérieur et recherche",
        "Commerce et immobilier",
      ],
      neighborhoods: [
        "Montpellier Centre et Comédie",
        "Euromédecine et Parc Club du Millénaire",
        "Castelnau-le-Lez et Grabels",
        "Vendargues et Pérols",
        "Sète, Béziers, Nîmes",
        "Tout le département Hérault",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une startup medtech à Montpellier ?",
          a: "Un pentest pour une startup medtech montpelliéraine varie selon la maturité du produit : de 4 000 € HT pour un pentest d'une API ou d'une application mobile, jusqu'à 15 000 € HT pour un audit complet d'un dispositif médical connecté (application + backend + communication). Pour les startups en phase de certification (marquage CE, FDA), nos rapports PASSI ANSSI peuvent être intégrés dans les dossiers de conformité réglementaire. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une PME numérique à Montpellier ?",
          a: "Un pentest d'une application SaaS montpelliéraine prend 3 à 7 jours selon la complexité des fonctionnalités et le nombre d'APIs. Un audit complet couvrant infrastructure cloud, application web, API et Active Directory nécessite 8 à 15 jours. Pour les startups souhaitant un premier bilan rapide, notre Quick Scan (2 jours) identifie les risques prioritaires à partir de 2 500 € HT.",
        },
        {
          q: "Comment sécuriser une application medtech ou un dispositif médical connecté à Montpellier ?",
          a: "La sécurisation d'un dispositif médical connecté suit le règlement MDR (EU 2017/745) et les normes de cybersécurité IEC 81001-5-1. Notre audit couvre la sécurité de l'application mobile, du backend cloud, des APIs de communication, du protocole Bluetooth/BLE et de la gestion des données de santé (pseudonymisation, chiffrement). Nos rapports sont conformes aux exigences des organismes notifiés pour le marquage CE et peuvent être soumis à la FDA pour les marchés américains.",
        },
        {
          q: "Intervenez-vous sur site à Montpellier et dans l'Hérault ?",
          a: "Oui. Nos consultants se déplacent sur site à Montpellier, Castelnau-le-Lez, Grabels, Vendargues, Sète, Béziers et dans tout le département Hérault. Nous intervenons également à Nîmes (Gard) et Perpignan (Pyrénées-Orientales) pour les missions régionales en Occitanie. Les audits à distance sont disponibles pour les startups SaaS dont l'infrastructure est entièrement dans le cloud.",
        },
        {
          q: "Que faire en cas de cyberattaque contre une startup ou une PME à Montpellier ?",
          a: "Contactez notre CERT immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau ou désactivez les comptes compromis dans votre cloud. Si des données de santé ont été exposées, vous devez notifier à la fois la CNIL (sous 72h) et l'ANS (Agence du Numérique en Santé). Pour les startups, documentez l'incident pour votre assurance cyber. Nos experts CyberSecure interviennent à Montpellier pour contenir l'attaque et vous accompagner dans les démarches réglementaires.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMontpellier;
