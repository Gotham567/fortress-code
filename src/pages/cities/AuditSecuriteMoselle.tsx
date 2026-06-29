import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMoselle = () => (
  <CityLandingPage
    data={{
      city: "Moselle",
      citySlug: "moselle",
      region: "Grand Est",
      postalCode: "57",
      intro: "CyberSecure est votre prestataire audit de sécurité Moselle (57) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Metz, Thionville, Forbach, Sarreguemines, Sarrebourg et tout le département.",
      localContext: "La Moselle est un département stratégique à la croisée de trois pays (France, Allemagne, Luxembourg). Metz est une ville en forte transformation numérique, avec la Technopole de Metz et des initiatives smart city. Thionville est le centre des frontaliers travaillant au Luxembourg (secteur financier, tech). Le bassin industriel Fensch-Orne (ArcelorMittal, Aperam) représente un secteur OT/IT critique. La présence de nombreux militaires (état-major, base aérienne Chambley) génère des exigences de sécurité spécifiques. La frontière avec l'Allemagne (Saarland) et le Luxembourg implique des flux de données transfrontaliers soumis au RGPD.",
      sectors: [
        "Sidérurgie (ArcelorMittal Florange, Aperam Gueugnon — OT/SCADA, IEC 62443)",
        "Transfrontalier (entreprises Thionville/Luxembourg border — cloud multi-pays)",
        "Défense et armée (RSMA, bases aériennes — systèmes homologués ANSSI)",
        "Numérique (Technopole Metz, startups Grand Est — SaaS, cloud)",
        "Santé (CHR Metz-Thionville, polycliniques — HDS, NIS2 santé)",
        "Logistique (plateforme A31, Amazon Cournon — WMS cloud, sécurité OT entrepôts)",
        "Tertiaire et finance (Société Générale Metz, assureurs, fiduciaires — cloud financier)",
        "Collectivités (Metz Métropole, Eurométropole Thionville — cloud souverain)",
      ],
      neighborhoods: [
        "Metz – Technopole – Sablon (57000)",
        "Thionville – Yutz – Algrange (57100/57970)",
        "Forbach – Freyming-Merlebach (57600/57800)",
        "Sarreguemines – Sarrebruck (57200)",
        "Hagondange – Amnéville – Moyeuvre (57300/57360)",
        "Fameck – Uckange – Florange (57290/57700)",
        "Saint-Avold – Creutzwald (57500)",
        "Montigny-lès-Metz – Woippy (57158/57140)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Moselle (57) ?",
          a: "Oui, CyberSecure intervient dans toute la Moselle : Metz Métropole, Pays de Thionville-Fensch, Bassin Houiller, Sarreguemines, et zones frontalières. Nous avons une expertise dans les environnements industriels OT et les problématiques de conformité transfrontalière. CERT d'urgence 24/7.",
        },
        {
          q: "Les entreprises mosellanes qui travaillent avec le Luxembourg : RGPD et flux de données transfrontaliers ?",
          a: "Les transferts de données personnelles entre la France et le Luxembourg sont encadrés par le RGPD (transferts au sein de l'UE, libre). Cependant, les entreprises doivent documenter ces flux dans leur registre des traitements (article 30 RGPD), sécuriser les transferts (chiffrement TLS, VPN site-à-site), et s'assurer que les contrats avec les sous-traitants luxembourgeois incluent des clauses DPA (Data Processing Agreement). CyberSecure audite la conformité RGPD des entreprises frontalières.",
        },
        {
          q: "ArcelorMittal à Florange-Hayange : comment sécuriser les systèmes OT d'un site sidérurgique actif ?",
          a: "Un site sidérurgique actif (hauts fourneaux, convertisseurs LD) présente des contraintes uniques pour un audit OT : impossibilité de tester activement les systèmes de contrôle en production (risque d'explosion ou d'arrêt du four), Legacy OT (automates Siemens S5 des années 1980 encore en service), et convergence OT/IT progressive (maintenance prédictive, analytics de production). L'approche CyberSecure : audit passif réseau OT (analyse de trafic sans injection), revue documentaire, interviews opérateurs, et recommandations priorisées par criticité.",
        },
        {
          q: "La Technopole de Metz : accompagnement des startups numériques dans leur certification ISO 27001 ?",
          a: "ISO 27001 est devenu un prérequis pour de nombreuses startups B2B qui veulent vendre à des grands comptes ou à des administrations. La certification implique : gap analysis initial, définition du périmètre SMSI (Système de Management de la Sécurité de l'Information), implémentation des 93 contrôles de l'Annexe A (ISO 27001:2022), audit interne, et audit de certification par un organisme accrédité (Bureau Veritas, LRQA, BSI). CyberSecure accompagne les startups mosellanes de la phase de gap analysis jusqu'à l'obtention du certificat.",
        },
        {
          q: "Quels financements pour un audit cyber en Moselle ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Moselle — diagnostics numériques. Metz Métropole — programmes innovation. BPI France Grand Est — prêts innovation. La Région Grand Est (FEDER numérique) co-finance des projets de cybersécurité. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMoselle;
