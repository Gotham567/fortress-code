import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteSeineMaritime = () => (
  <CityLandingPage
    data={{
      city: "Seine-Maritime",
      citySlug: "seine-maritime",
      region: "Normandie",
      postalCode: "76",
      intro: "CyberSecure est votre prestataire audit de sécurité Seine-Maritime (76) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Rouen, Le Havre, Dieppe, Fécamp, Elbeuf et tout le département.",
      localContext: "La Seine-Maritime est un département industriel majeur de la Normandie. Le Havre est le 1er port de commerce français pour les conteneurs et un hub logistique qui digitalise ses opérations (port du futur). La vallée de la Seine concentre l'industrie pétroléo-chimique (TotalEnergies Gonfreville, Lubrizol), pharmaceutique (Pfizer Rouen), et automobile (Renault Sandouville, mécatronique). Rouen est la capitale normande avec une économie tertiaire croissante. La Seine-Maritime est aussi un département agricole (pommes, lin) avec une transformation agroalimentaire significative.",
      sectors: [
        "Port et transport (Grand Port Maritime Le Havre, Haropa Port — OIV, NIS2)",
        "Pétrochimie (TotalEnergies Gonfreville, Lubrizol, Exxon — OT/SCADA Seveso)",
        "Pharma (Pfizer Rouen, Bayer Santé — GxP, données essais cliniques)",
        "Automobile (Renault Sandouville, NTN-SNR — PLM, OT production)",
        "Logistique et e-commerce (Amazon Le Havre, XPO, ID Logistics — WMS cloud)",
        "Santé (CHU Rouen, GHH — HDS, cybersécurité hospitalière)",
        "Agroalimentaire (Lactalis, Savencia, IAA normands — ERP, chaîne froid)",
        "Collectivités (Métropole Rouen Normandie, Le Havre Seine Métropole — smart city)",
      ],
      neighborhoods: [
        "Rouen – Saint-Sever – Rive Gauche (76000)",
        "Le Havre – Grand Hameau – La Mare Rouge (76600)",
        "Mont-Saint-Aignan – Bois-Guillaume – Bihorel (76130)",
        "Gonfreville-l'Orcher – Harfleur – Saint-Romain (76700)",
        "Dieppe – Arques-la-Bataille (76200)",
        "Elbeuf – Saint-Pierre-lès-Elbeuf (76500)",
        "Barentin – Yvetot (76360/76190)",
        "Fécamp – Étretat – Lillebonne (76400/76170)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Seine-Maritime (76) ?",
          a: "Oui, CyberSecure intervient dans tout le 76 : Métropole Rouen Normandie, Le Havre Seine Métropole, la côte d'Alabâtre, le Pays de Caux, et le Pays de Bray. Nous avons une expertise forte dans les environnements portuaires, pétrochimiiques et pharmaceutiques normands. CERT d'urgence 24/7.",
        },
        {
          q: "Haropa Port (Le Havre) : quelles sont les exigences cyber pour un port de classe mondiale ?",
          a: "Haropa Port (fusion des ports de Paris, Rouen et Le Havre) est un OIV dans le secteur transport. Ses obligations : plan de sécurité des systèmes d'information (PSSI-OIV), audits de sécurité réguliers par des prestataires qualifiés ANSSI (PASSI), notification des incidents à l'ANSSI. Les périmètres critiques : système de gestion du trafic maritime (VTS), portail community system SOGET, contrôle des grues automatiques, et gestion des accès (camionneurs, transitaires, douane). CyberSecure est qualifié PASSI pour les audits d'OIV.",
        },
        {
          q: "TotalEnergies Gonfreville (la plus grande raffinerie de France) : comment s'assurer de la résilience cyber ?",
          a: "La raffinerie de Gonfreville-l'Orcher raffine 16 millions de tonnes de pétrole par an. Un incident cyber sur ses systèmes OT pourrait provoquer des conséquences industrielles graves (arrêt de production, pollution, risque explosif). Les mesures clés : ségrégation stricte OT/IT (architecture Purdue), surveillance continue du trafic OT (sondes SCADA passives), procédures de réponse aux incidents OT spécifiques, et tests de reprise sur systèmes de test dédiés. CyberSecure réalise des audits OT avec une approche non-intrusive adaptée aux sites à risques.",
        },
        {
          q: "Pfizer Rouen : comment gérer la conformité cyber pour une filiale d'un groupe pharmaceutique américain ?",
          a: "Pfizer impose à ses sites mondiaux (dont Rouen, 4e site de production Pfizer en Europe) une conformité au cadre de sécurité du groupe (Pfizer Security Framework, basé sur NIST CSF). Les sites européens doivent également respecter le RGPD pour les données des essais cliniques et des employés, la directive NIS2 pour les systèmes critiques, et les réglementations FDA (21 CFR Part 11) pour les systèmes GxP. CyberSecure audite les filiales françaises de groupes pharmaceutiques américains avec une approche qui intègre les exigences des deux réglementations.",
        },
        {
          q: "Quels financements pour un audit cyber en Seine-Maritime ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Seine-Maritime — diagnostics numériques. Métropole Rouen Normandie — programmes innovation. BPI France Normandie — prêts innovation. Normandie AeroEspace et le CRITT Normandie accompagnent leurs membres sectoriels. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteSeineMaritime;
