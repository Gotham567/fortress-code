import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAmiens = () => (
  <CityLandingPage
    data={{
      city: "Amiens",
      citySlug: "amiens",
      region: "Hauts-de-France",
      postalCode: "80000",
      intro: "CyberSecure réalise des audits de sécurité informatique, pentests et tests d'intrusion à Amiens pour les PME et ETI de la Somme, avec une expertise sur les secteurs industriel (pneumatiques, automobile), logistique et santé. Notre cabinet qualifié PASSI ANSSI intervient sur site à Amiens pour protéger les systèmes d'information des entreprises picardes face aux cybermenaces croissantes.",
      localContext: "Amiens est un carrefour logistique majeur à équidistance de Paris, Lille et Rouen, accueillant de grands centres de distribution dont la connectivité permanente multiplie les surfaces d'attaque. L'industrie amiénoise historique dans les pneumatiques et l'automobile (fournisseurs Tier 1 et Tier 2) est en pleine transformation numérique avec l'introduction de l'Industrie 4.0 qui génère de nouveaux risques cyber. Le CHU d'Amiens-Picardie, l'un des premiers de France par sa taille, et les nombreuses cliniques privées constituent des cibles prioritaires pour les groupes cybercriminels spécialisés dans la santé. L'Université de Picardie Jules Verne et son écosystème de startups bénéficient également de l'accompagnement cybersécurité de CyberSecure.",
      sectors: [
        "Industrie pneumatiques et automobile (Tier 1/2)",
        "Logistique et centres de distribution",
        "Santé (CHU Amiens-Picardie, cliniques)",
        "Agriculture et agroalimentaire picard",
        "Collectivités et Grand Amiens Métropole",
        "Commerce de détail et e-commerce",
      ],
      neighborhoods: [
        "Centre-ville et quartier Saint-Leu",
        "Zone industrielle nord (Glisy, Longueau)",
        "Amiens-Sud (zone commerciale Auchan)",
        "Rivery et zone d'activités est",
        "Albert (aéronautique, PME industrielles)",
        "Abbeville et Baie de Somme",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour une entreprise industrielle ou logistique à Amiens ?",
          a: "Un pentest réseau pour une PME industrielle ou logistique à Amiens est tarifé entre 6 000 et 14 000 € HT selon le périmètre. Un audit spécifique des systèmes de gestion d'entrepôt (WMS) et des interconnexions EDI avec les donneurs d'ordre est proposé à partir de 5 000 € HT. Pour les équipementiers automobile soumis aux exigences de leurs clients (TISAX, ISO 27001), CyberSecure propose des audits de conformité sur mesure.",
        },
        {
          q: "Quel délai pour un audit sécurité réseau à Amiens ?",
          a: "Un audit réseau ETI à Amiens s'étale sur 5 à 8 jours ouvrés. Un audit Active Directory pour 200 utilisateurs prend 3 à 4 jours. L'audit complet d'un entrepôt logistique incluant les systèmes WMS, les bornes WiFi et les scanners mobiles nécessite 4 à 6 jours. CyberSecure peut intervenir en urgence sous 72h.",
        },
        {
          q: "Comment auditer les systèmes d'information d'un centre logistique à Amiens ?",
          a: "Les plateformes logistiques d'Amiens utilisent des architectures complexes mêlant WMS, systèmes EDI, convoyeurs automatisés et terminaux mobiles connectés au WiFi d'entrepôt. CyberSecure réalise des audits incluant la revue des accès fournisseurs distants, le test de pénétration du WiFi industriel, l'évaluation des flux EDI et l'analyse des cloisonnements entre les réseaux IT et OT. Nous testons également la résistance aux attaques d'ingénierie sociale ciblant les opérateurs logistiques.",
        },
        {
          q: "CyberSecure intervient-il sur site à Amiens et dans la Somme ?",
          a: "Oui, nos consultants se déplacent à Amiens, Abbeville, Albert, Péronne, Montdidier et dans toute la Somme. Nous couvrons également les départements limitrophes (Oise, Aisne, Pas-de-Calais) pour les groupes ayant plusieurs sites en Hauts-de-France. Déploiement sous 48h à Amiens.",
        },
        {
          q: "Que faire en cas de cyberattaque ou ransomware à Amiens ?",
          a: "Appelez le CERT de CyberSecure immédiatement (disponible 24h/24 et 7j/7). Coupez les accès réseau des machines suspectées sans les éteindre. Notre équipe peut être sur site à Amiens dans les 4 heures pour l'analyse forensique, la confinement de l'attaque et la coordination de la reprise d'activité. Nous gérons les notifications ANSSI et CNIL. Tarif d'intervention CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAmiens;
