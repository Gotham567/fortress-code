import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteDouala = () => (
  <CityLandingPage
    data={{
      city: "Douala",
      citySlug: "douala",
      region: "Cameroun — Littoral",
      postalCode: "237",
      intro: "CyberSecure, prestataire qualifié PASSI ANSSI, réalise vos audits cybersécurité à Douala : pentest Port Autonome de Douala (hub 7 pays enclavés d'Afrique centrale), audit de sécurité MTN Cameroun/Orange Cameroun Mobile Money, test d'intrusion Afriland First Bank, audit Brasseries du Cameroun et industrie. Douala est le moteur économique du Cameroun et l'une des places financières majeures d'Afrique centrale.",
      localContext: "Douala est la capitale économique et commerciale du Cameroun, concentrant plus de 70 % du tissu industriel national. Le Port Autonome de Douala est la porte d'entrée de 7 pays enclavés (Cameroun, Chad, RCA, Niger, Mali, Burkina Faso, Rwanda) et opère des systèmes IT portuaires (TOS — Terminal Operating System, EDI douaniers) critiques. MTN Cameroun et Orange Cameroun proposent des services Mobile Money (MoMo) à des millions de clients avec des infrastructures de paiement exposées. Afriland First Bank est la première banque privée camerounaise et un acteur panafricain en croissance. Les Brasseries du Cameroun (groupe SAB Miller/AB InBev) exploitent des chaînes de production avec des systèmes OT. SGBC (Société Générale), UBA, Ecobank et d'autres banques internationales sont présentes. Nestlé Cameroun, Total Energies et ENEO (énergie) complètent le tissu économique.",
      sectors: [
        "Port et logistique (Port Autonome, Bolloré, DHL, Maersk)",
        "Finance (Afriland First Bank, SGBC, UBA, Ecobank)",
        "Télécoms (MTN, Orange, MoMo)",
        "Industrie (Brasseries, Nestlé, CICAM, BTP)",
        "Énergie (Total, ENEO)",
        "Négoce international (hub Afrique centrale)",
      ],
      neighborhoods: [
        "Akwa et Bonanjo (centre affaires)",
        "Bassa (zone industrielle, port)",
        "Bonabéri (zone industrielle Ouest)",
        "Makepe et Deïdo (résidentiel, commerce)",
        "Logbessou et Kotto (banlieue)",
        "Zone portuaire et entrepôts",
      ],
      faq: [
        {
          q: "Pentest Port Autonome Douala : comment tester les systèmes IT d'un port international ?",
          a: "Le Port Autonome de Douala opère un Terminal Operating System (TOS) pour la gestion des conteneurs, des équipements de manutention connectés (grues RTG, portiques STS, tracteurs portuaires), des systèmes de scanning douaniers (SYDONIA World) et des EDI avec les armateurs et agences maritimes. Un test d'intrusion portuaire comprend : (1) audit du TOS et des applications de gestion portuaire (vulnérabilités web, authentification, droits d'accès), (2) test de la segmentation réseau IT/OT (réseaux administratifs vs équipements portuaires), (3) pentest des portails douaniers et EDI partenaires, (4) test des accès VPN des sous-traitants et agences maritimes, (5) simulation d'attaque sur le système de tracking des conteneurs. Budget indicatif : 2 000 à 6 000 € selon le périmètre.",
        },
        {
          q: "Audit MTN Cameroun (MoMo) : comment sécuriser Mobile Money pour 10M+ clients ?",
          a: "MTN Mobile Money (MoMo) Cameroun traite des millions de transactions quotidiennes. Un audit de sécurité complet comprend : (1) pentest de l'application mobile MoMo Android/iOS (OWASP MSTG — authentification, chiffrement local, certificats SSL), (2) test des APIs de paiement (authentification OAuth, limites de débit, rejeu de transactions, manipulation des montants), (3) audit de l'infrastructure de traitement des paiements (HSM, switches de paiement), (4) test de la logique métier (simulation de fraudes courantes : SIM swapping, interception d'OTP, ingénierie sociale ciblée), (5) revue de conformité PCI-DSS et réglementations BEAC/COBAC sur les paiements mobiles. Nos experts certifiés OSCP et spécialisés fintech interviennent sur ce type d'audit.",
        },
        {
          q: "Pentest Afriland First Bank : test d'intrusion d'une banque privée africaine ?",
          a: "Afriland First Bank, première banque privée camerounaise avec une présence dans plusieurs pays africains, opère des systèmes bancaires core banking, des applications web (banque en ligne, applications mobiles), un réseau d'agences et des interfaces interbancaires. Un test d'intrusion bancaire complet chez Afriland comprend : pentest de la banque en ligne et de l'application mobile, audit de l'infrastructure réseau interne et de la DMZ, test des accès SWIFT et des interfaces interbancaires, revue de l'Active Directory et de la gestion des identités, test des postes de travail et du SOC interne. Conformité réglementaire COBAC (Commission Bancaire de l'Afrique Centrale) incluse dans nos rapports.",
        },
        {
          q: "Quel coût pour un pentest à Douala ?",
          a: "Les tarifs de pentest à Douala sont exprimés en FCFA ou en euros. Un pentest d'application web PME ou banque locale : 500 000 à 1 500 000 FCFA HT (760 à 2 300 €). Audit sécurité réseau interne PME industrielle : 1 000 000 à 2 500 000 FCFA (1 520 à 3 800 €). Audit complet institution financière (Afriland, SGBC) : 3 000 à 8 000 €. Audit Port ou grande industrie (Brasseries, Nestlé) : 3 000 à 10 000 €. Les déplacements depuis la France sont mutualisés sur plusieurs jours de mission. CyberSecure dispose de partenaires locaux certifiés à Douala pour certaines phases d'audit.",
        },
        {
          q: "Que faire en cas de fraude bancaire ou de cyberattaque à Douala ?",
          a: "En cas de fraude bancaire en ligne ou de cyberattaque à Douala : (1) blocquez immédiatement les accès compromis (compte bancaire, application Mobile Money, accès réseau) et contactez votre banque en urgence, (2) signalez l'incident à l'ANTIC (Agence Nationale des TIC, CERT-Cameroun) et déposez une plainte auprès de la police judiciaire (Division Spéciale de Cybercriminalité), (3) informez la COBAC si vous êtes un établissement financier (obligation réglementaire), (4) contactez CyberSecure pour une réponse à incident à distance immédiate et, si nécessaire, déploiement d'une équipe sur site à Douala sous 48h, (5) préservez toutes les traces numériques (logs, captures d'écran, e-mails) avant toute action de remédiation.",
        },
      ],
    }}
  />
);

export default AuditSecuriteDouala;
