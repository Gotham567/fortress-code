import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteVar = () => (
  <CityLandingPage
    data={{
      city: "Var",
      citySlug: "var",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "83",
      intro: "CyberSecure est votre prestataire audit de sécurité Var (83) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Toulon, La Seyne-sur-Mer, Hyères, Fréjus, Brignoles et tout le département.",
      localContext: "Le Var est le département de la 1ère base navale française et européenne. Toulon abrite la Marine Nationale, le Commandement de la Force d'Action Navale, et Naval Group (ex-DCNS) qui construit les frégates de défense et les sous-marins nucléaires d'attaque. L'économie de sous-traitance défense (MBDA Toulon, équipementiers navals) est très développée. Au-delà de la défense, le Var est un département touristique majeur (Saint-Tropez, île de Porquerolles) avec des flux de capitaux importants dans l'hôtellerie de luxe. Le CHIR Toulon-La Seyne gère les urgences d'une population de 500 000 habitants.",
      sectors: [
        "Défense navale (Naval Group Toulon, ISMO, DCN — programmes classifiés)",
        "Base navale (BCRM Toulon — 18 000 militaires, logistique de flotte)",
        "Sous-traitance défense (MBDA, Accenture Défense, LDI — habilitations requises)",
        "Tourisme luxe (Saint-Tropez, Porquerolles, îles du Var — données UHNW)",
        "Santé (Hôpital Sainte-Musse, IUV — HDS, télémédecine varoise)",
        "Industrie et PME (Dracénie, Brignoles — métallurgie, SEVESO)",
        "Aéronautique militaire (BAN Hyères — systèmes militaires aériens)",
        "Collectivités (Toulon Provence Méditerranée, CD83 — cloud souverain)",
      ],
      neighborhoods: [
        "Toulon – La Seyne-sur-Mer (83000/83500)",
        "Hyères – Carqueiranne – Le Lavandou (83400/83980)",
        "La Garde – La Valette-du-Var (83130)",
        "Fréjus – Saint-Raphaël (83600/83700)",
        "Brignoles – Saint-Maximin (83170)",
        "Draguignan (83300)",
        "Six-Fours – Sanary – Bandol (83140/83110)",
        "Ollioules – Evenos (83190)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Var (83) ?",
          a: "Oui, CyberSecure intervient dans tout le Var : Toulon Provence Méditerranée, Dracénie, Pays Varois, Fréjus-Saint-Raphaël. Nos consultants ont une expertise dans les environnements de défense navale et la réglementation des OIV. CERT d'urgence 24/7.",
        },
        {
          q: "Les PME sous-traitantes de Naval Group à Toulon : comment obtenir les habilitations NSQ 1000 ?",
          a: "Naval Group impose la norme NSQ 1000 (Naval Security Requirements for Suppliers) à ses fournisseurs. Les étapes : auto-évaluation par rapport aux exigences NSQ 1000 (protection de l'information, sécurité des SI, sécurité physique), plan d'action pour combler les écarts, audit de conformité par Naval Group ou un tiers mandaté. Les domaines clés : classification des données reçues de Naval Group, sécurisation des postes de travail accédant aux portails Naval (Teamcenter, TANGO), contrôle des accès physiques aux ateliers, et formation du personnel sur les pratiques de sécurité. CyberSecure accompagne les PME varoises dans leur démarche NSQ 1000.",
        },
        {
          q: "La BAN Hyères (Base Aéronavale de Hyères) et ses sous-traitants : quelles contraintes cyber ?",
          a: "La BAN Hyères héberge des escadrilles de chasse et de patrouille maritime (Atlantique 2, Rafale Marine). Ses systèmes de contrôle aérien, de maintenance aéronautique, et de logistique opérationnelle sont des systèmes militaires soumis aux Instructions Générales Interministérielles de Sécurité (IGI). Les PME qui assurent la maintenance des équipements sur la BAN (Thales Avionics, ATR, fournisseurs de pièces détachées) doivent disposer d'habilitations gouvernementales et respecter des procédures strictes de contrôle des accès numériques. CyberSecure accompagne ces entreprises dans leur conformité défense.",
        },
        {
          q: "La marina de Saint-Tropez et les conciergeries de luxe : comment protéger les données des clients UHNW ?",
          a: "Les conciergeries varoise (villas de luxe, yachts, jets privés) traitent des données extrêmement sensibles : localisation GPS en temps réel des clients, planning de déplacements, données financières, préférences personnelles. Ces données sont soumises au RGPD et leur fuite peut mettre en danger physique des clients (kidnapping, extorsion). Un audit de sécurité d'une conciergerie de luxe couvre : sécurité du CRM (HubSpot, Salesforce), chiffrement des communications (WhatsApp Business chiffré de bout en bout ?), sécurité des applications mobiles dédiées, et formation du personnel à la détection du phishing. CyberSecure propose des audits adaptés aux services ultra-premium.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Var ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI du Var — diagnostics numériques. Toulon Provence Méditerranée — programmes numériques. BPI France PACA — prêts innovation. Toulon Var Technologies accompagne les startups et PME innovantes. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteVar;
