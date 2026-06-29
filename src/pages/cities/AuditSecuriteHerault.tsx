import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteHerault = () => (
  <CityLandingPage
    data={{
      city: "Hérault",
      citySlug: "herault",
      region: "Occitanie",
      postalCode: "34",
      intro: "CyberSecure est votre prestataire audit de sécurité Hérault (34) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Montpellier, Béziers, Sète, Lunel, Agde et tout le département.",
      localContext: "L'Hérault est l'un des départements à la plus forte croissance en France. Montpellier est la 7e métropole française avec une économie très diversifiée : numérique (Montpellier French Tech), santé et biotech (CHU, Institut du Cancer, biothérapies), agro-tech (Agropolis International — 1er cluster agri mondial), tourisme côtier. L'économie est portée par une population jeune et qualifiée. Le port de Sète est un hub multimodal méditerranéen avec des enjeux logistiques croissants.",
      sectors: [
        "Numérique (Montpellier French Tech, Innovarc, startups héraultaises)",
        "Santé et biotech (CHU Montpellier, Institut du Cancer, biothérapies, medtech)",
        "Agro-tech (Agropolis International, INRAE, technologies agricoles)",
        "Port et logistique (Port de Sète, hub multimodal, logistique régionale)",
        "Viticulture (caves coopératives AOC Languedoc, négoce)",
        "Tourisme (Cap d'Agde, Palavas, tourisme côtier numérisé)",
        "Agroalimentaire (coopératives, industries alimentaires 34)",
        "Collectivités (Montpellier Méditerranée Métropole, CD34)",
      ],
      neighborhoods: [
        "Montpellier – Antigone – Odysseum (34000)",
        "Montpellier Nord – Euromédecine – Agropolis (34090)",
        "Montpellier Est – Jacou – Castelnau-le-Lez (34430)",
        "Béziers – Agde – Sète (34500/34530)",
        "Lunel – Mauguio – Palavas (34400)",
        "Pézenas – Clermont-l'Hérault (34120)",
        "Saint-Jean-de-Védas – Juvignac (34430)",
        "Lattes – Villeneuve-lès-Maguelone (34970)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout l'Hérault (34) ?",
          a: "Oui, CyberSecure intervient dans tout le département de l'Hérault : Montpellier Métropole, Béziers Méditerranée, Sète Agglopôle, Pays de Lunel et zones rurales. Nos consultants se déplacent sur site dans tout le 34. CERT d'urgence 24/7.",
        },
        {
          q: "Les startups de la French Tech Montpellier ont-elles besoin d'un pentest avant leur levée de fonds ?",
          a: "Oui, c'est devenu un standard. Les investisseurs et fonds de VC présents à Montpellier demandent un audit de sécurité avant les tours de table séries A et B. CyberSecure propose des audits adaptés aux startups montpelliéraines : pentest des plateformes SaaS, revue de la sécurité cloud (AWS/Azure/GCP), conformité RGPD, et rapport exécutif pour les investisseurs.",
        },
        {
          q: "Le CHU de Montpellier : comment l'accompagnez-vous face aux ransomwares ?",
          a: "Le CHU de Montpellier est une entité essentielle NIS2 dans le secteur santé. Les hôpitaux sont des cibles prioritaires des groupes de ransomware. CyberSecure propose pour les établissements de santé : audit de segmentation réseau, test d'intrusion interne, vérification des plans de sauvegarde et de reprise (PCA/PRA), audit des accès distants (VPN, RDP), et formation des équipes IT hospitalières.",
        },
        {
          q: "Les entreprises agro-tech d'Agropolis ont-elles des risques cyber spécifiques ?",
          a: "Les startups agri-tech d'Agropolis développent des plateformes cloud pour l'agriculture de précision, le monitoring des cultures, et la gestion des coopératives agricoles. Leurs risques : vol de données de R&D (variétés végétales, séquences génomiques), compromission des plateformes IoT agricoles, et violations RGPD sur les données agriculteurs. CyberSecure propose des audits adaptés aux entreprises agri-tech.",
        },
        {
          q: "Quels financements pour un audit cyber dans l'Hérault ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Hérault — diagnostics numériques. Montpellier Méditerranée Métropole — programmes numériques. BPI France Occitanie — prêts innovation. Business & Clusters Occitanie et Agropolis International accompagnent leurs membres.",
        },
      ],
    }}
  />
);

export default AuditSecuriteHerault;
