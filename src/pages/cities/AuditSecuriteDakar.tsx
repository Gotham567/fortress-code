import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteDakar = () => (
  <CityLandingPage
    data={{
      city: "Dakar",
      citySlug: "dakar",
      region: "Sénégal — Région de Dakar",
      postalCode: "11000",
      intro: "CyberSecure, prestataire qualifié PASSI ANSSI, accompagne les organisations sénégalaises : pentest Wave Sénégal (fintech AWS 5M+ clients), audit de sécurité Sonatel/Orange infrastructure télécom nationale, test d'intrusion systèmes OT Total Energies Sangomar offshore, audit BCEAO siège régional. Conformité CDP (Commission de Protection des Données personnelles) et Loi sénégalaise 2008-12.",
      localContext: "Dakar est la capitale et le moteur économique du Sénégal, en plein boom avec la découverte de pétrole offshore (Sangomar) et de gaz naturel. Wave Sénégal, fintech AWS basée à San Francisco et Dakar, dessert plus de 5 millions de clients sénégalais pour les paiements mobiles — c'est l'une des applications fintech à la croissance la plus rapide en Afrique. Sonatel (filiale Orange) est l'opérateur télécom historique dominant le marché sénégalais. Total Energies développe le champ pétrolier offshore Sangomar (2 milliards de barils de réserves), avec des systèmes OT sous-marins critiques. La BCEAO (Banque Centrale des États de l'Afrique de l'Ouest) siège à Dakar et coordonne la politique monétaire de 8 pays. Diamniadio, nouveau pôle urbain à 30 km de Dakar, se construit comme une Smart City avec des infrastructures numériques modernes.",
      sectors: [
        "Fintech et Mobile Money (Wave, Orange Money, Free Money)",
        "Télécommunications (Sonatel/Orange, Free Sénégal)",
        "Pétrole/Gaz (Total Energies Sangomar, Woodside)",
        "Institutions (BCEAO, gouvernement, ministères)",
        "Startups (CTIC, Dakar Tech City, Orange Digital Center)",
        "BTP et services (forte croissance économique)",
      ],
      neighborhoods: [
        "Plateau (centre affaires, ambassades)",
        "Point E et Almadies (résidentiel aisé, hôtels)",
        "Mermoz et Sacré-Cœur (PME, services)",
        "Pikine et Guédiawaye (banlieue industrielle)",
        "Rufisque (zone industrielle, aéroport)",
        "Diamniadio (nouveau pôle urbain, Smart City)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Dakar pour une fintech (Wave, Orange Money) ?",
          a: "Pour une PME fintech ou un opérateur Mobile Money à Dakar, un pentest d'application mobile (iOS/Android) et API associée coûte entre 350 000 et 900 000 FCFA HT (environ 535 à 1 370 €). Pour un audit complet incluant l'infrastructure cloud AWS/Azure, les APIs de paiement, les applications web et le back-office, le budget monte entre 900 000 et 2 500 000 FCFA (1 370 à 3 800 €). Pour Wave Sénégal ou Orange Money Sénégal — avec des millions de transactions quotidiennes — un périmètre d'audit étendu justifie un budget de 3 000 à 8 000 €. CyberSecure établit des devis personnalisés.",
        },
        {
          q: "Comment auditer Wave (AWS) contre les fraudes massives ?",
          a: "Wave Sénégal opère sur une architecture AWS hautement disponible. Un audit de sécurité anti-fraude Wave comprend : (1) pentest de l'API mobile (authentification OAuth2, autorisation granulaire, limites de débit, rejeu de transactions), (2) test de l'application Android/iOS (OWASP MSTG — stockage local des tokens, traffic interception via proxy Burp Suite), (3) revue de l'architecture AWS (IAM least privilege, S3 bucket policies, API Gateway throttling, CloudTrail logging), (4) test de la logique métier des transactions (simulation de doublon, annulation frauduleuse, manipulation des montants), (5) audit du back-office agents et de la gestion des KYC. Nos experts certifiés OSCP et cloud security interviennent sur ce type de mission.",
        },
        {
          q: "Pentest Total Energies offshore Sangomar : systèmes OT pétroliers sous-marins ?",
          a: "Le projet Sangomar de Total Energies (premier champ pétrolier offshore sénégalais) opère des FPSO (Floating Production Storage and Offloading) et des systèmes de contrôle sous-marins (Subsea Control Modules, umbilicals) connectés à des systèmes SCADA en surface. Un audit de sécurité OT offshore comprend : audit de la segmentation réseau entre les systèmes de bureautique, de supervision et de contrôle, revue des protocoles industriels maritimes, test des accès distants (satellite VSAT, maintenance fournisseurs), audit des systèmes de sécurité instrumentée (SIS/SIL). Ces audits requièrent une autorisation HSSE préalable de Total Energies et une coordination avec les équipes operations. Tarif indicatif : 8 000 à 20 000 € pour un périmètre offshore.",
        },
        {
          q: "Votre PASSI est-il reconnu au Sénégal ?",
          a: "La qualification PASSI ANSSI est le standard français et européen de référence pour les audits de sécurité. Au Sénégal, la CDP (Commission de Protection des Données personnelles) et l'ADIE (Agence De l'Informatique de l'État) s'appuient sur les référentiels internationaux compatibles avec notre qualification : ISO 27001, OWASP, PTES. Les filiales de multinationales françaises et les institutions financières sénégalaises exigent ou préfèrent des prestataires PASSI. Nos rapports incluent une analyse de conformité avec la Loi sénégalaise 2008-12 sur la protection des données personnelles.",
        },
        {
          q: "Que faire en cas de cyberattaque à Dakar ?",
          a: "En cas de cyberattaque sur votre organisation à Dakar : (1) activez votre cellule de crise et isolez les systèmes compromis, (2) signalez l'incident à la DIC (Division de Cybercriminalité de la Police nationale sénégalaise) et à l'ADIE pour les organisations publiques, (3) notifiez la CDP si des données personnelles de citoyens sénégalais sont compromises, (4) contactez CyberSecure pour une réponse à incident à distance ou sur site — notre CERT intervient sous 4 heures en support téléphonique, (5) préservez les preuves numériques (journaux, images disque) avant toute restauration. Ne redémarrez pas les systèmes avant d'avoir consulté un expert en forensique numérique.",
        },
      ],
    }}
  />
);

export default AuditSecuriteDakar;
