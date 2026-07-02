import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteOran = () => (
  <CityLandingPage
    data={{
      city: "Oran",
      citySlug: "oran",
      region: "Algérie — Wilaya d'Oran",
      postalCode: "31000",
      intro: "CyberSecure, prestataire qualifié PASSI ANSSI, intervient à Oran pour vos audits de sécurité spécialisés : pentest OT/SCADA usine Renault Algérie Production (industrie automobile), audit des systèmes IT du port d'Oran, test d'intrusion GIPLAIT et industries agroalimentaires, pentest CHU et établissements de santé oranais. Conformité Loi algérienne 18-07.",
      localContext: "Oran est la deuxième ville d'Algérie et un pôle industriel majeur. L'usine Renault Algérie Production, implantée à Oued Tlélat près d'Oran, produit plus de 50 000 véhicules par an et opère des systèmes OT/SCADA de contrôle de ligne de production (robots Kuka, automates Siemens) constituant une cible attractive pour la cybercriminalité industrielle. Le port d'Oran, deuxième port national, opère des systèmes de gestion portuaire (TOS — Terminal Operating System) et des équipements de manutention connectés. GIPLAIT et les laiteries industrielles oranaises utilisent des systèmes de supervision de production. L'Université des Sciences et de la Technologie d'Oran (USTO) est un pôle de recherche en informatique et télécommunications. Le CHU d'Oran et l'EHU (Établissement Hospitalier Universitaire) 1er Novembre traitent des données de santé sensibles.",
      sectors: [
        "Industrie automobile (Renault Algérie, équipementiers)",
        "Port et logistique (port Oran, commerce)",
        "Agroalimentaire (GIPLAIT, laiteries, meuneries)",
        "Santé (CHU Oran, EHU)",
        "Université USTO et recherche",
        "PME industrielles et services",
      ],
      neighborhoods: [
        "Oran centre et Sidi El Houari",
        "Bir El Djir et USTO (université)",
        "Es Senia (aéroport, zone industrielle)",
        "Bir El Djir et complexe industriel Renault",
        "Zone industrielle de Hassi Ameur",
        "Ain Turk et côte oranaise",
      ],
      faq: [
        {
          q: "Pentest OT pour l'usine Renault Oran : méthodologie et coût ?",
          a: "L'usine Renault Algérie Production opère des lignes de fabrication automatisées avec des automates programmables (PLC Siemens, Fanuc), des robots de soudage/peinture et des systèmes MES (Manufacturing Execution System). Un audit OT partiel — inventaire des actifs, analyse de la segmentation réseau IT/OT, audit des protocoles industriels (Profinet, OPC-UA), identification des vulnérabilités CVE sans arrêt de production — coûte entre 2 000 et 5 000 €. Un audit complet incluant un test d'intrusion en environnement isolé est facturé entre 6 000 et 12 000 €. CyberSecure intervient en coordination avec les équipes maintenance et production pour zéro impact sur la chaîne.",
        },
        {
          q: "Port d'Oran : comment tester les systèmes de gestion portuaire ?",
          a: "Le port d'Oran utilise un Terminal Operating System (TOS) pour gérer les mouvements de conteneurs, les équipements de manutention (grues RTG, portiques STS) et les échanges EDI avec les armateurs. Un test d'intrusion portuaire comprend : (1) audit du TOS (vulnérabilités web, droits d'accès, connexions EDI avec partenaires), (2) test de la segmentation réseau entre le réseau administratif et les réseaux OT des équipements, (3) pentest des applications web et portails douaniers, (4) test des accès VPN des sous-traitants. CyberSecure coordonne systématiquement avec la direction informatique du port pour éviter toute perturbation opérationnelle.",
        },
        {
          q: "Audit USTO Oran : les universités algériennes et la cybersécurité ?",
          a: "L'Université des Sciences et de la Technologie d'Oran (USTO) héberge des laboratoires de recherche, des systèmes d'information universitaires (ENT, plateformes e-learning, bases de données de recherche) et des réseaux souvent interconnectés avec des partenaires internationaux. Les universités algériennes sont des cibles fréquentes pour des attaques de type ransomware, compromission de données d'étudiants ou accès à la recherche stratégique. Un audit de sécurité universitaire inclut : pentest du réseau Wi-Fi campus, audit de l'ENT, test des serveurs de messagerie, revue des droits d'accès des laboratoires. Tarif indicatif : 1 500 à 4 000 € selon le périmètre.",
        },
        {
          q: "Quel coût pour un pentest à Oran ?",
          a: "Les tarifs de pentest à Oran sont comparables à ceux pratiqués à Alger, exprimés en euros. Un pentest d'application web PME : 1 200 à 3 500 €. Audit réseau interne PME industrielle : 2 000 à 5 000 €. Audit OT partiel usine : 2 000 à 5 000 €. Audit complet multi-périmètre grande organisation : 6 000 à 15 000 €. CyberSecure peut coordonner des déplacements sur site à Oran depuis Alger ou directement depuis la France (vol direct Oran-Paris). Les déplacements sont facturés au coût réel et mutualisés sur plusieurs jours.",
        },
        {
          q: "Que faire en cas d'incident cyber sur une ligne de production automobile à Oran ?",
          a: "Un incident cyber sur la ligne de production Renault Oran (ransomware sur le MES, compromission d'un automate, arrêt de robots) constitue une urgence industrielle majeure. Procédure recommandée : (1) activez immédiatement le plan de continuité industrielle — passage en mode dégradé manuel si possible, (2) isolez les systèmes infectés en déconnectant les réseaux concernés (attention : ne coupez pas l'alimentation des automates en production), (3) contactez CyberSecure CERT pour une intervention à distance immédiate et déploiement d'une équipe sur site sous 24-48h, (4) notifiez Renault Group CISO et les autorités algériennes compétentes (CSIRT Algérie), (5) préservez les journaux d'événements systèmes et réseaux pour l'investigation forensique.",
        },
      ],
    }}
  />
);

export default AuditSecuriteOran;
