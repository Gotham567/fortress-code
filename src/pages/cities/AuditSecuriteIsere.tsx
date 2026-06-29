import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteIsere = () => (
  <CityLandingPage
    data={{
      city: "Isère",
      citySlug: "isere",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "38",
      intro: "CyberSecure est votre prestataire audit de sécurité Isère (38) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Grenoble, Meylan, Crolles, Échirolles, Bourgoin-Jallieu, Vienne et tout le département.",
      localContext: "L'Isère est l'un des départements les plus innovants d'Europe. Grenoble-Alpes Métropole est un pôle mondial de la microélectronique (STMicroelectronics, Soitec, Lynred), de l'énergie (Schneider Electric), et de la recherche (CEA-Leti, INSERM). Minalogic est le premier cluster microélectronique-logiciel au monde. L'Isère accueille aussi des industries chimiques majeures (ArianeGroup, Air Liquide), des énergies renouvelables (EDF Hydraulique Alpes) et un secteur touristique alpin important.",
      sectors: [
        "Microélectronique (STMicroelectronics Crolles/Grenoble, Soitec Bernin, Lynred)",
        "Recherche et innovation (CEA-Leti, Grenoble INP, INSERM)",
        "Énergie (Schneider Electric siège, EDF Hydraulique, Enedis)",
        "Chimie et défense (ArianeGroup La Léchère, Air Liquide, Cémoi)",
        "Numérique (Minalogic, startup deeptech, Grenoble Alpes Startup)",
        "Santé (CHU Grenoble-Alpes, cliniques, medtech iséroise)",
        "Tourisme alpin (Chamrousse, Alpe d'Huez, Les 2 Alpes, Vercors)",
        "Collectivités (Grenoble-Alpes Métropole, Pays Voironnais, CD38)",
      ],
      neighborhoods: [
        "Grenoble – Presqu'île – Europole (38000)",
        "Meylan – Montbonnot – Biviers (38240)",
        "Crolles – Bernin – Pontcharra (38920)",
        "Échirolles – Évreux – Poisat (38130)",
        "Bourgoin-Jallieu – La Tour-du-Pin (38300)",
        "Vienne – Pont-Évêque (38200)",
        "Voiron – Tullins – Vinay (38500)",
        "Vizille – Jarrie – Claix (38220)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout l'Isère (38) ?",
          a: "Oui, CyberSecure intervient dans tout le département de l'Isère : Grenoble-Alpes Métropole, Bièvre Isère, Pays Voironnais, Pays de Vienne, et zones montagnardes. Nos consultants sont intégrés dans l'écosystème Minalogic et la communauté tech grenobloise. CERT d'urgence 24/7.",
        },
        {
          q: "STMicroelectronics à Crolles : quelle approche pour un pentest de systèmes microélectroniques ?",
          a: "Un pentest dans un environnement microélectronique (STMicro, Soitec) couvre plusieurs périmètres : l'infrastructure IT (réseau d'entreprise, AD, accès distants), les applications métiers (ERP, PLM, outils de conception EDA), les systèmes OT de production (FAB, équipements de lithographie), et la gestion des accès fournisseurs et prestataires de maintenance. CyberSecure propose des pentests adaptés aux environnements de haute technicité.",
        },
        {
          q: "Le CEA-Leti collabore avec des startups : comment sécuriser les données partagées ?",
          a: "Les partenariats CEA-Leti/startups (via les programmes Carnot, les spin-offs) impliquent le partage de données de R&D précieuses. La sécurisation passe par : accord de confidentialité (NDA) technique renforcé, espaces de collaboration cloud sécurisés (chiffrement bout-en-bout, accès conditionnel), cloisonnement des données par projet, et audit des droits d'accès. CyberSecure accompagne les startups issues du CEA dans leur sécurité.",
        },
        {
          q: "Schneider Electric impose-t-il des exigences cyber à ses fournisseurs en Isère ?",
          a: "Oui. Schneider Electric (siège mondial à Rueil-Malmaison, forte présence en Isère) impose des exigences de cybersécurité à ses fournisseurs dans le cadre de sa politique supply chain. Ces exigences incluent des évaluations de sécurité, la conformité NIS2, et des audits contractuels. CyberSecure accompagne les PME isèroises dans le référencement fournisseur Schneider Electric.",
        },
        {
          q: "Quels financements pour un audit cyber en Isère ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Grenoble — diagnostics numériques. Grenoble-Alpes Métropole — programmes innovation. BPI France AuRA — prêts innovation. Minalogic (cluster microélectronique-logiciel) accompagne ses membres avec des ressources cybersécurité et des projets collaboratifs.",
        },
      ],
    }}
  />
);

export default AuditSecuriteIsere;
