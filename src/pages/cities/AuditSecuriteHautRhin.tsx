import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteHautRhin = () => (
  <CityLandingPage
    data={{
      city: "Haut-Rhin",
      citySlug: "haut-rhin",
      region: "Grand Est",
      postalCode: "68",
      intro: "CyberSecure est votre prestataire audit de sécurité Haut-Rhin (68) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Mulhouse, Colmar, Saint-Louis, Wittenheim, Cernay et tout le département.",
      localContext: "Le Haut-Rhin est un département frontalier avec une économie ouverte sur l'international (France-Allemagne-Suisse). Mulhouse est un pôle industriel historique en transformation (ex-PSA, chimie, énergie). L'industrie chimique (BASF Colorants, DMC) génère des sites Seveso avec des systèmes OT critiques. La proximité avec le cluster pharmaceutique bâlois (Novartis, Roche, Syngenta) crée des relations économiques transfrontalières intenses. Colmar est un hub touristique (Route des Vins d'Alsace) et tertiaire. L'agglomération de Saint-Louis est au cœur du triangle transfrontalier (EuroAirport Bâle-Mulhouse-Fribourg).",
      sectors: [
        "Automobile (Stellantis Mulhouse — OT/IT chaîne production, TISAX, NIS2)",
        "Chimie (BASF, DMC Mulhouse — ICS/SCADA, Seveso seuil haut)",
        "Pharma (prestataires Basel Area, façonniers pharm. 68 — GxP, essais)",
        "Énergies (centrale d'Alsace, TotalEnergies 68 — OT, infrastructure critique)",
        "Tourisme (Route des Vins, musées — RGPD, PCI DSS, données visiteurs)",
        "Numérique (Alsace Digitale Mulhouse, ESN — SI, cloud)",
        "Transfrontalier (Suisse, Allemagne — flux tri-nationaux, RGPD, NDA)",
        "Collectivités (M2A, CD68 — cloud souverain, e-administration alsacienne)",
      ],
      neighborhoods: [
        "Mulhouse – Bourtzwiller (68100)",
        "Colmar – Horbourg-Wihr (68000/68180)",
        "Saint-Louis – Hésingue (68300)",
        "Wittenheim – Wittelsheim (68270)",
        "Guebwiller (68500)",
        "Cernay – Thann (68700)",
        "Illzach – Kingersheim (68110)",
        "Sierentz – Habsheim (68510/68440)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Haut-Rhin (68) ?",
          a: "Oui, CyberSecure intervient dans tout le 68 : Mulhouse Alsace Agglomération, Colmar-Agglomération, Saint-Louis Agglomération, et zones frontalières CH/DE. Nous avons une expertise dans les environnements OT industriels et les exigences TISAX des donneurs d'ordre automobiles. CERT d'urgence 24/7.",
        },
        {
          q: "Stellantis Mulhouse-Sausheim : comment s'assurer que les PME fournisseurs sont conformes TISAX niveau AL2 ?",
          a: "Pour atteindre le niveau TISAX AL2 (protection élevée des informations confidentielles), une PME fournisseur de Stellantis doit mettre en œuvre : chiffrement des données PSA reçues (disques, emails), accès uniquement aux personnes ayant un besoin légitime (access on need), traçabilité des accès aux données (logs), procédure de destruction sécurisée des données à l'issue du contrat, et audit par un auditeur certifié ENX. La préparation dure typiquement 3-6 mois. CyberSecure réalise les gap analysis TISAX, accompagne la mise en conformité, et prépare les équipes à l'audit ENX.",
        },
        {
          q: "La frontière Suisse (Bâle) : comment les PME du 68 qui travaillent avec Novartis ou Roche gèrent-elles leurs obligations cyber ?",
          a: "Novartis et Roche imposent à leurs fournisseurs des standards de cybersécurité élevés. Roche utilise le framework NIST CSF pour ses évaluations de tiers (Third-Party Risk). Les PME haut-rhinoises fournisseurs de ces groupes reçoivent des questionnaires VSA (Vendor Security Assessment) à remplir annuellement. Ces questionnaires couvrent : politique de sécurité documentée, gestion des incidents (SIEM, CERT), tests de pénétration réguliers, formation du personnel. CyberSecure accompagne les PME dans la préparation et la réponse aux VSA des donneurs d'ordre pharmaceutiques suisses.",
        },
        {
          q: "BASF Colorants à Mulhouse : comment auditer un site chimique classé Seveso seuil haut ?",
          a: "Un site Seveso seuil haut est un OIV (Opérateur d'Importance Vitale) dans la catégorie industries de la chimie. Les exigences : PSSI-OIV (Plan de Sécurité des Systèmes d'Information OIV), audits par des PASSI qualifiés ANSSI, et conformité aux arrêtés sectoriels industrie chimique. L'audit OT d'un site chimique couvre : les systèmes SCADA de contrôle des réactions (Siemens PCS 7, ABB 800xA), les Safety Instrumented Systems (SIS — protections critiques contre les emballements), les interfaces opérateur (IHM), et les interconnexions avec les systèmes IT. CyberSecure est qualifié pour les audits OT sur sites Seveso.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Haut-Rhin ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Sud Alsace Mulhouse — diagnostics numériques. M2A — programmes innovation. BPI France Grand Est — prêts innovation. Alsace Digitale et le cluster Archi'Tech accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteHautRhin;
