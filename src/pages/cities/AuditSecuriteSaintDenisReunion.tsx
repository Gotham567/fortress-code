import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteSaintDenisReunion = () => (
  <CityLandingPage
    data={{
      city: "Saint-Denis de la Réunion",
      citySlug: "saint-denis-reunion",
      region: "La Réunion — Océan Indien",
      postalCode: "97400",
      intro: "CyberSecure, prestataire qualifié PASSI ANSSI, intervient à La Réunion avec les mêmes standards qu'en métropole : pentest CHU Réunion (entité essentielle NIS2 santé), audit de sécurité Vindémia/GBH (grande distribution, systèmes ERP), test d'intrusion opérateurs télécoms SFR/Orange Réunion (NIS2), audit Caisse d'Épargne Réunion (DORA). RGPD, NIS2 et réglementations françaises intégralement applicables à La Réunion.",
      localContext: "La Réunion, département et région d'outre-mer français (DROM), est pleinement soumise au droit français et européen — RGPD, directive NIS2, règlement DORA, qualifications ANSSI — exactement comme la métropole. Le CHU Réunion (sites de Bellepierre à Saint-Denis et Félix Guyon) est une entité essentielle au sens de la directive NIS2 dans la catégorie santé, avec l'obligation d'audits de sécurité réguliers. Vindémia (groupe GBH, filiale LVMH) est le principal distributeur réunionnais avec des systèmes ERP et logistiques complexes. Les opérateurs Orange Réunion, SFR Réunion et Zeop sont classés entités importantes NIS2 dans le secteur télécom. La Caisse d'Épargne Réunion est soumise au règlement DORA sur la résilience opérationnelle numérique du secteur financier. Le contexte géographique insulaire crée des enjeux spécifiques de connectivité et de résilience des systèmes.",
      sectors: [
        "Santé (CHU Réunion, CHGM, cliniques)",
        "Distribution (Vindémia GBH, Score, Carrefour)",
        "Télécommunications (Orange, SFR, Zeop)",
        "Collectivités (Région, Département, communes)",
        "Finance (Caisse d'Épargne, BNP, Crédit Agricole)",
        "Tourisme et hôtellerie",
      ],
      neighborhoods: [
        "Saint-Denis et Sainte-Clotilde",
        "Saint-Paul et Saint-Gilles-les-Bains",
        "Saint-Pierre et Saint-Louis",
        "Saint-André et Bras-Panon",
        "Le Port et La Possession",
        "Tampon et Plaine des Cafres",
      ],
      faq: [
        {
          q: "Les mêmes standards PASSI/NIS2 s'appliquent-ils à La Réunion comme en France métropolitaine ?",
          a: "Oui, totalement. La Réunion est un DROM (Département et Région d'Outre-Mer) français, pleinement soumis au droit français et européen. La directive NIS2 (transposée en droit français), le RGPD, le règlement DORA, les qualifications ANSSI (dont la qualification PASSI) s'appliquent à La Réunion exactement comme en métropole. Le CHU Réunion, les opérateurs télécoms, les établissements financiers réunionnais ont les mêmes obligations de cybersécurité que leurs homologues métropolitains. CyberSecure intervient à La Réunion avec les mêmes équipes et les mêmes méthodologies qu'en France métropolitaine.",
        },
        {
          q: "Pentest CHU Réunion : coût et méthodologie NIS2 santé ?",
          a: "Le CHU Réunion est une entité essentielle NIS2 dans la catégorie 'prestataires de soins de santé'. À ce titre, il a l'obligation légale de mettre en place des mesures de sécurité proportionnées et de réaliser des audits réguliers. Un pentest CHU Réunion comprend : audit des systèmes d'information hospitaliers (DPI — Dossier Patient Informatisé, systèmes de prescription, imagerie médicale PACS), test d'intrusion réseau interne et DMZ, audit Active Directory et gestion des identités, test des interfaces avec les partenaires (laboratoires, cliniques, médecins de ville), test de la résilience face aux ransomwares. Tarifs France : 5 000 à 15 000 € selon le périmètre. Des déplacements depuis la métropole sont nécessaires et facturés au coût réel.",
        },
        {
          q: "Audit SFR/Orange Réunion : obligations NIS2 pour un opérateur télécom ?",
          a: "SFR Réunion et Orange Réunion sont des entités importantes au sens de la directive NIS2 dans le secteur des télécommunications (fourniture d'accès à Internet, de téléphonie). Leurs obligations NIS2 comprennent : mise en place de mesures de gestion des risques cyber, notification des incidents significatifs à l'ANSSI dans les 24h (rapport préliminaire), réalisation d'audits de sécurité. Un audit NIS2 télécom comprend : revue de l'architecture réseau (cœur de réseau, réseau d'accès mobile et fixe), audit des plateformes de supervision (NOC), test des interfaces avec les partenaires opérateurs, audit de la chaîne d'approvisionnement logicielle. CyberSecure a l'expertise pour accompagner les opérateurs télécoms dans leur conformité NIS2.",
        },
        {
          q: "Comment tester la sécurité des systèmes de distribution Vindémia à La Réunion ?",
          a: "Vindémia (groupe GBH, distributeur leader à La Réunion, Mayotte et Antilles) opère des ERP de grande distribution (SAP ou équivalent), des systèmes de gestion des stocks, des plateformes e-commerce, des caisses connectées et des systèmes logistiques. Un audit de sécurité Vindémia comprend : pentest des applications web et e-commerce, audit de l'ERP (droits d'accès, interfaces avec fournisseurs), test de la segmentation réseau entre les magasins et le siège, audit des terminaux de caisse et systèmes de paiement (conformité PCI-DSS), test des accès VPN fournisseurs. Les enjeux sont réels : une compromission des systèmes de caisse ou de logistique paralyserait l'approvisionnement de toute l'île.",
        },
        {
          q: "Que faire en cas de cyberattaque à La Réunion ?",
          a: "En cas de cyberattaque à La Réunion, la procédure est identique à la métropole. (1) Activez votre PCA (Plan de Continuité d'Activité) et isolez les systèmes compromis. (2) Contactez le CERT de l'ANSSI (cert.ssi.gouv.fr) pour les organisations NIS2 ou d'importance critique — obligation légale de notification dans les 24h pour les entités essentielles et importantes. (3) Déposez une plainte auprès de la gendarmerie ou police locale (STRJD/C3N pour les affaires cyber). (4) Contactez CyberSecure : notre CERT intervient à distance sous 2 heures et peut déployer une équipe sur site à La Réunion sous 24-48h. (5) Ne payez pas de rançon et préservez les preuves numériques.",
        },
      ],
    }}
  />
);

export default AuditSecuriteSaintDenisReunion;
