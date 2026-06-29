import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBasRhin = () => (
  <CityLandingPage
    data={{
      city: "Bas-Rhin",
      citySlug: "bas-rhin",
      region: "Grand Est",
      postalCode: "67",
      intro: "CyberSecure est votre prestataire audit de sécurité Bas-Rhin (67) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Strasbourg, Schiltigheim, Illkirch-Graffenstaden, Haguenau, Saverne et tout le département.",
      localContext: "Le Bas-Rhin est un département d'exception. Strasbourg est à la fois capitale régionale du Grand Est et capitale européenne de la démocratie (siège du Parlement Européen, du Conseil de l'Europe, et de la Cour Européenne des Droits de l'Homme). Cette concentration d'institutions européennes en fait une des villes les plus sensibles de France du point de vue de la cybersécurité et de l'espionnage. L'économie alsacienne est diversifiée : pharma (Lilly France, Sanofi, BASF), automobile (Hager Group, équipementiers), datacenters (OVHcloud, Interxion), et un tissu dense de PME industrielles et tertiaires. Le transfrontalier avec l'Allemagne (Kehl, Karlsruhe) est une réalité économique quotidienne.",
      sectors: [
        "Institutions européennes (PE, Conseil de l'Europe, CJUE — espionnage étatique)",
        "Pharma et chimie (Lilly France Strasbourg, BASF, Sanofi — GxP, RGPD essais)",
        "Automobile (Hager Group, Peugeot Mülhausen proche — PLM, OT production)",
        "Datacenter et cloud (OVHcloud Strasbourg, Interxion — infrastructure critique)",
        "Numérique (Alsace Digitale, Kaliop, ESN alsaciennes — SaaS, SI)",
        "Santé (HUS Strasbourg, NHC — HDS, recherche, Unistra)",
        "Agroalimentaire (Alsace Lait, SOUFFLET, brasseries — ERP, qualité)",
        "Collectivités (Eurométropole Strasbourg, CD67 — cloud souverain alsacien)",
      ],
      neighborhoods: [
        "Strasbourg – Neustadt – Port du Rhin (67000)",
        "Schiltigheim – Bischheim – Souffelweyersheim (67300/67400)",
        "Illkirch-Graffenstaden – Lingolsheim (67400)",
        "Haguenau – Bischwiller – Brumath (67500)",
        "Saverne – Molsheim – Obernai (67700/67120/67210)",
        "Sélestat – Erstein (67600/67150)",
        "Wissembourg – Lauterbourg (67160)",
        "Benfeld – Obernai (67230/67210)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Bas-Rhin (67) ?",
          a: "Oui, CyberSecure intervient dans tout le Bas-Rhin : Eurométropole de Strasbourg, Haguenau-Wissembourg, Saverne-Alsace Bossue, Sélestat-Erstein. Nos consultants connaissent les spécificités des institutions européennes, du secteur pharma, et des datacenters alsaciens. CERT d'urgence 24/7.",
        },
        {
          q: "Un fournisseur de services au Parlement Européen (Strasbourg) : quelles exigences de sécurité ?",
          a: "Les prestataires du Parlement Européen (IT, nettoyage, restauration, construction) doivent souvent signer des clauses de sécurité spécifiques. Pour les prestataires IT, les exigences incluent : habilitation de sécurité du personnel, systèmes d'information conformes aux politiques CERT-EU, non-utilisation de technologies d'origine suspecte (certains équipements Huawei ou logiciels russes sont prohibés), et audit de sécurité annuel. CyberSecure accompagne les entreprises qui souhaitent se qualifier comme prestataires des institutions européennes.",
        },
        {
          q: "OVHcloud Strasbourg (SBG) : quels avantages pour héberger des données sensibles alsaciennes ?",
          a: "OVHcloud Strasbourg offre des niveaux de certification élevés : ISO 27001, ISO 50001 (énergie), et des offres qualifiées SecNumCloud pour les données les plus sensibles. La proximité géographique permet une résilience locale (réplication entre Strasbourg et Roubaix). Pour les clients alsaciens sensibles (pharma, défense, secteur public), OVHcloud SecNumCloud garantit la souveraineté des données (pas de CLOUD Act américain applicable). CyberSecure audite la configuration cloud OVHcloud de ses clients : RBAC, security groups, chiffrement, et journalisation.",
        },
        {
          q: "Lilly France à Strasbourg : conformité GxP et cybersécurité des systèmes informatiques pharmaceutiques ?",
          a: "Les systèmes informatiques pharmaceutiques (LIMS, systèmes de contrôle de production, ERP SAP) sont soumis à la validation Computer System Validation (CSV) selon les bonnes pratiques de fabrication (BPF/GMP). En cybersécurité, les systèmes GxP doivent maintenir l'intégrité des données (audit trail, contrôle des versions), la disponibilité (pas de modification pendant la validation), et la confidentialité. Un audit de sécurité d'un système GxP ne doit pas affecter l'état validé du système. CyberSecure réalise des audits compatibles avec les contraintes GxP.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Bas-Rhin ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Bas-Rhin — chèques cyber et diagnostics numériques. Eurométropole de Strasbourg — programmes innovation. BPI France Grand Est — prêts innovation. Le pôle BioValley, Alsace Digitale, et Aerospace Valley accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBasRhin;
