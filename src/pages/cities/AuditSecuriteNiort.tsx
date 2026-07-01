import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNiort = () => (
  <CityLandingPage
    data={{
      city: "Niort",
      citySlug: "niort",
      region: "Nouvelle-Aquitaine",
      postalCode: "79000",
      intro: "CyberSecure accompagne les PME et ETI de Niort avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés à la capitale française de la mutualité (MAIF, Matmut, MAAF, GMF) et aux secteurs agricole et industriel des Deux-Sèvres. Notre cabinet qualifié PASSI ANSSI intervient sur site à Niort pour protéger les systèmes d'information des entreprises du secteur assurantiel et mutualiste.",
      localContext: "Niort est la capitale mondiale de la mutualité française, concentrant les sièges sociaux de la MAIF, de la Matmut, de la MAAF et de la GMF — quatre des plus grandes mutuelles d'assurance françaises qui gèrent ensemble plusieurs dizaines de millions de données personnelles hautement sensibles (santé, habitation, responsabilité civile) soumises au RGPD et à la réglementation Solvabilité II/DORA. Ces acteurs sont des cibles prioritaires de ransomwares et d'attaques sophistiquées visant les données personnelles massives. L'agroalimentaire niortais (production de semences, lait, élevage) et l'industrie légère des Deux-Sèvres constituent un tissu économique PME/ETI complémentaire. La Chambre de Commerce et d'Industrie de Niort accompagne la transformation numérique des entreprises locales.",
      sectors: [
        "Assurance et mutualité (MAIF, Matmut, MAAF, GMF)",
        "Agriculture et coopératives (semences, lait, élevage)",
        "Industrie légère et PME Deux-Sèvres",
        "Santé (CH Niort, cliniques Deux-Sèvres)",
        "Numérique et fintech assurantielle (InsurTech)",
        "Collectivités et Niort Agglo",
      ],
      neighborhoods: [
        "Centre-ville et La Brèche",
        "La Croix-Blanche (sièges des mutuelles, tertiaire)",
        "Zone industrielle de Niort (nord et sud)",
        "Saint-Florent et zones d'activités",
        "Chauray et zones d'activités commerciales",
        "Parthenay et Deux-Sèvres nord (industrie, agriculture)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité pour une mutuelle d'assurance à Niort (MAIF, Matmut, MAAF, GMF) ?",
          a: "Un audit de sécurité complet pour une mutuelle d'assurance de Niort se situe entre 15 000 et 50 000 € HT selon la taille du SI et le périmètre (portails clients, back-office, API partenaires, SI décisionnel). Les mutuelles soumises à DORA (Digital Operational Resilience Act) depuis janvier 2025 doivent également conduire des tests de résilience opérationnelle que CyberSecure réalise selon les lignes directrices de l'ACPR. Pour les PME sous-traitantes des mutuelles, un audit ciblé débute à 6 000 € HT.",
        },
        {
          q: "Quel délai pour un audit réseau ou un pentest à Niort ?",
          a: "Un audit réseau pour une PME niortaise dure 4 à 7 jours ouvrés. Pour une mutuelle d'assurance avec un SI complexe incluant des portails en ligne, des API d'échange avec les partenaires et des environnements cloud hybrides, un audit complet prend 15 à 30 jours. L'audit Active Directory seul est réalisable en 3 à 5 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes d'information d'une mutuelle d'assurance pour se conformer à DORA et RGPD ?",
          a: "Les mutuelles niortaises (MAIF, Matmut, MAAF, GMF) doivent respecter le règlement DORA sur la résilience opérationnelle numérique des entités financières, en vigueur depuis janvier 2025. CyberSecure réalise des tests de pénétration TLPT (Threat-Led Penetration Testing) conformes aux exigences DORA, des audits des tiers critiques (cloud, prestataires IT), des exercices de crise cyber et des évaluations de la gestion des risques ICT. Nous accompagnons également la mise en conformité RGPD pour les traitements massifs de données personnelles d'assurés.",
        },
        {
          q: "CyberSecure intervient-il sur site à Niort et dans les Deux-Sèvres ?",
          a: "Oui, nos consultants se déplacent à Niort, Parthenay, Bressuire, Thouars et dans tout le département Deux-Sèvres. Nous couvrons également la Vienne (Poitiers) et la Charente-Maritime (La Rochelle) pour les groupes mutualistes ayant des sites dans plusieurs départements. Déploiement sous 48h à Niort.",
        },
        {
          q: "Que faire en cas de cyberattaque sur une mutuelle d'assurance à Niort ?",
          a: "Activez votre cellule de crise et contactez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Notifiez l'ACPR (Autorité de Contrôle Prudentiel et de Résolution) dans les délais prévus par DORA, et la CNIL en cas de violation de données personnelles d'assurés. Notre équipe peut être sur site à Niort dans les 4 heures pour contenir l'attaque et assurer la continuité du service aux sociétaires. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNiort;
