import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCalvados = () => (
  <CityLandingPage
    data={{
      city: "Calvados",
      citySlug: "calvados",
      region: "Normandie",
      postalCode: "14",
      intro: "CyberSecure est votre prestataire audit de sécurité Calvados (14) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Caen, Hérouville-Saint-Clair, Colombelles, Bayeux, Lisieux et tout le département.",
      localContext: "Le Calvados abrite STMicroelectronics Colombelles, l'un des plus grands sites de production de semi-conducteurs en Europe (technologies IoT, automotive, industrial). Le CHU Caen-Normandie est un établissement hospitalier universitaire de référence pour l'Ouest. L'agroalimentaire normand (lait, fromages, calvados, cidre) représente des centaines de PME avec des systèmes OT de process et des chaînes de traçabilité. Caen Métropole est un pôle numérique régional avec des ESN et startups. Le port de Caen-Ouistreham assure des liaisons régulières vers le Royaume-Uni.",
      sectors: [
        "Semi-conducteurs (STMicro Colombelles — audit OT fab, salle blanche, IP R&D)",
        "Santé (CHU Caen-Normandie — NIS2 santé, HDS, pentest applications médicales)",
        "Agroalimentaire (IAA normandes — audit OT, traçabilité, IFS/BRC, RGPD)",
        "Port (Caen-Ouistreham — NIS2 transports, audit OT portuaire, ISPS)",
        "Collectivités (Caen Métropole, CD14 — audit cloud, RGPD, NIS2 collectivités)",
        "Tourisme (Mémorial de Caen, D-Day, hôtellerie — RGPD, PCI DSS, audit)",
        "Numérique (ESN caennaises — pentest applicatif, audit cloud, NIS2)",
        "Distilleries (calvados, cidre normand — audit RGPD, PCI DSS e-commerce)",
      ],
      neighborhoods: [
        "Caen – Hérouville-Saint-Clair (14000/14200)",
        "Colombelles (14460)",
        "Bayeux (14400)",
        "Lisieux (14100)",
        "Vire-Normandie (14500)",
        "Falaise (14700)",
        "Mondeville (14120)",
        "Courseulles-sur-Mer (14470)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Calvados (14) pour les audits de sécurité ?",
          a: "Oui, CyberSecure intervient dans tout le 14 : Caen Métropole, Bayeux, Lisieux, Côte Fleurie, Pays d'Auge. Nos consultants ont une expertise dans les environnements de fabrication de semi-conducteurs et les OT des industries agroalimentaires normandes. CERT d'urgence 24/7.",
        },
        {
          q: "Comment réaliser un pentest sur les systèmes informatiques d'une salle blanche de semi-conducteurs ?",
          a: "Un pentest sur une fab de semi-conducteurs (environnement STMicro Colombelles type) est très contraint : les équipements de salle blanche ne peuvent pas être perturbés (coût d'un arrêt = millions d'euros). La méthodologie : pentest en mode 'passif' sur les systèmes IT corporate (bureautique, ERP SAP) sans toucher l'OT, analyse de la segmentation réseau entre OT et IT (DMZ industrielle, firewall industriel Tofino/Claroty), et revue d'architecture des AMHS (Automated Material Handling Systems). La phase OT est réalisée hors production ou sur environnement de test dédié. CyberSecure adapte ses pentests aux contraintes des industries de semi-conducteurs.",
        },
        {
          q: "CHU Caen-Normandie : comment se préparer à un audit NIS2 en tant qu'établissement de santé ?",
          a: "Depuis la transposition de NIS2 en France (2024), les établissements de santé sont des 'entités essentielles' soumises à des obligations renforcées : désignation d'un RSSI, mise en place d'un SMSI, déclaration des incidents à l'ANSSI sous 24h (incidents significatifs) et 72h (notification de violation RGPD santé). Un audit NIS2 santé commence par un gap analysis sur les 10 domaines NIS2 (gouvernance, gestion des risques, gestion des incidents, continuité d'activité, sécurité de la chaîne d'approvisionnement, sécurité des réseaux, etc.). CyberSecure réalise des audits NIS2 spécialisés pour les établissements de santé normands.",
        },
        {
          q: "Audit de sécurité pour une entreprise de calvados ou cidre normand : quels périmètres ?",
          a: "Un producteur de calvados ou de cidre normand a un SI simplifié mais des risques réels : site e-commerce de vente directe (PCI DSS, fraude carte), ERP de gestion des stocks et traçabilité des lots (exigences DGCCRF, AOP), et connexions EDI avec les distributeurs (Carrefour, Intermarché). La menace principale pour ces PME artisanales : le phishing ciblé des dirigeants (fraude au virement — un 'Livarot Maison Dupont' commande 50 000€ d'équipement de chais sur faux email). CyberSecure propose des audits cyber adaptés aux TPE/PME agroalimentaires normandes.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Calvados ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Caen Normandie — diagnostics numériques. Caen Métropole — programmes innovation. BPI France Normandie — prêts innovation. La Région Normandie — aides à la transformation numérique. Normandie Attractivité accompagne les PME. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCalvados;
