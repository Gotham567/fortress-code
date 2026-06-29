import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuritePuyDeDome = () => (
  <CityLandingPage
    data={{
      city: "Puy-de-Dôme",
      citySlug: "puy-de-dome",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "63",
      intro: "CyberSecure est votre prestataire audit de sécurité Puy-de-Dôme (63) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Clermont-Ferrand, Riom, Thiers, Issoire, Ambert et tout le département.",
      localContext: "Le Puy-de-Dôme est le département de Michelin, l'un des groupes industriels français les plus innovants et les plus exposés aux risques cyber. Clermont-Ferrand est un pôle technologique avec l'Université Clermont Auvergne (UCA), une French Tech active, et un tissu de PME industrielles diversifiées. Limagrain à Chappes/Riom est le 4e semencier mondial. Le secteur agroalimentaire (brasseries, Thiers-coutellerie) contribue à l'identité économique. Le CHRU Gabriel-Montpied est le centre hospitalier universitaire de référence d'Auvergne.",
      sectors: [
        "Pneumatiques (Michelin siège Clermont-Ferrand — 100 000+ salariés, R&D globale)",
        "Semences (Limagrain Chappes — génomique végétale, IP semencière)",
        "Chimie (Arkema Clermont, Solvay Thann — sites chimiques, ICS)",
        "Alimentation (Source Perrier, industrie agroalimentaire clermontoise)",
        "Numérique (French Tech Clermont, startups, Capgemini, SII — SI, cloud)",
        "Santé (CHRU Clermont-Ferrand, CHR Vichy — HDS, recherche auvergnate)",
        "Coutellerie (Thiers — patrimoine artisanal, e-commerce international)",
        "Collectivités (Clermont Auvergne Métropole, CD63 — cloud souverain, smart city)",
      ],
      neighborhoods: [
        "Clermont-Ferrand – La Pardieu – Cézeaux (63000)",
        "Cournon-d'Auvergne – Aubière (63800/63170)",
        "Chamalières – Royat (63400/63130)",
        "Riom – Chappes (63200/63720)",
        "Thiers (63300)",
        "Issoire (63500)",
        "Vichy (03200)",
        "Ambert – Cunlhat (63600)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Puy-de-Dôme (63) ?",
          a: "Oui, CyberSecure intervient dans tout le 63 : Clermont Auvergne Métropole, Riom-Limagne-Volcans, Thiers Dore et Montagne, et zones rurales. Nos consultants connaissent l'écosystème économique auvergnate. CERT d'urgence 24/7.",
        },
        {
          q: "Michelin (siège mondial Clermont-Ferrand) : comment protéger l'IP d'un leader mondial du pneumatique ?",
          a: "Michelin développe des technologies propriétaires (formules de caoutchouc, algorithmes de conception de pneus, modèles de simulation), protégées par des milliers de brevets. Les risques cyber : espionnage industriel par des APT (groupes APT41, Winnti ont ciblé des industriels européens), compromission des systèmes de CAO/simulation, vol de données via les fournisseurs de matières premières. Michelin dispose d'un CERT interne. Pour leurs PME sous-traitantes clermontoise, CyberSecure réalise des audits conformes aux exigences Michelin Supply Chain Security.",
        },
        {
          q: "Limagrain (Riom) développe des semences OGM et non-OGM : comment protéger les données génomiques ?",
          a: "Les séquences génomiques des variétés végétales créées par Limagrain (maïs, blé, tournesol, légumes) sont des actifs immatériels protégés par des droits d'obtenteur végétal (CPOV). Un vol de données génomiques permettrait à un concurrent de recréer une variété brevetée sans années de développement. La sécurisation passe par : classification des bases de données génomiques (SECRET R&D), chiffrement des serveurs de bioinformatique (NGS servers), contrôle des accès des chercheurs (MFA, RBAC par projet), et audit des transferts de données vers les filiales mondiales (Vilmorin, Harris Moran). CyberSecure accompagne les entreprises de sciences du vivant.",
        },
        {
          q: "Les stations thermales du Puy-de-Dôme (Vichy, Royat) : risques cyber dans le secteur du bien-être et de la santé thermale ?",
          a: "Les établissements thermaux traitent des données de santé sensibles (pathologies traitées, prescriptions médicales, données biométriques). Ces données sont soumises au RGPD et à la réglementation HDS si elles sont hébergées dans le cloud. Les risques : ransomware sur les systèmes de gestion des patients (logiciels de cure thermale), vol de données médicales revendables, et violations RGPD si les données sont partagées avec des partenaires commerciaux non conformes. CyberSecure propose des audits de conformité RGPD et de sécurité adaptés aux établissements de santé thermale.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Puy-de-Dôme ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Puy-de-Dôme — diagnostics numériques. Clermont Auvergne Métropole — programmes innovation. BPI France AuRA — prêts innovation. Le cluster VIAMECA et Clermont Métropole Innovation accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuritePuyDeDome;
