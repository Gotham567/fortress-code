import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLens = () => (
  <CityLandingPage
    data={{
      city: "Lens",
      citySlug: "lens",
      region: "Hauts-de-France",
      postalCode: "62300",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, protège les entreprises de Lens, Liévin, Hénin-Beaumont et de l'agglomération Lens-Liévin avec des audits de sécurité, des tests d'intrusion et une réponse à incident disponible 24h/24. Logistique e-commerce, industrie et PME du Pas-de-Calais : nos experts sécurisent vos systèmes d'information.",
      localContext: "L'agglomération Lens-Liévin constitue un pôle économique majeur des Hauts-de-France, porté par la logistique e-commerce (entrepôts Amazon, plateformes de distribution), l'industrie manufacturière en reconversion, le commerce actif lié au Louvre-Lens et les services à la personne. La transformation numérique rapide des entrepôts logistiques (WMS, automatisation) crée de nouvelles surfaces d'attaque. Les ransomwares ciblant la logistique et les systèmes de gestion d'entrepôts peuvent paralyser toute la chaîne de distribution. CyberSecure intervient à Lens, Liévin, Hénin-Beaumont, Carvin et dans toute la communauté d'agglomération.",
      sectors: [
        "Logistique e-commerce et entreposage",
        "Industrie manufacturière en reconversion",
        "Commerce de détail et grande distribution",
        "Tourisme et culture (Louvre-Lens)",
        "Services à la personne et santé",
        "PME et TPE locales",
      ],
      neighborhoods: [
        "Lens centre",
        "Liévin",
        "Hénin-Beaumont",
        "Carvin",
        "Harnes",
        "Noyelles-sous-Lens",
      ],
      faq: [
        {
          q: "Quel est le prix d'un audit de sécurité informatique à Lens ?",
          a: "Un audit de sécurité pour une PME de Lens démarre à 3 000 € HT pour un audit ciblé de 2 jours. Un pentest réseau varie entre 5 000 et 15 000 € selon la complexité. Un audit complet multi-périmètre (réseau, applications, Active Directory, sensibilisation) peut aller jusqu'à 30 000 € HT pour une ETI logistique. Pour les entrepôts avec des systèmes WMS et des automates, nous proposons des audits OT/IT spécialisés. Devis gratuit et personnalisé sous 48h.",
        },
        {
          q: "Combien de temps dure un pentest pour une entreprise logistique à Lens ?",
          a: "Un pentest d'un système de gestion d'entrepôt (WMS) prend 4 à 7 jours. Un audit réseau complet d'une plateforme logistique avec systèmes automatisés nécessite 7 à 12 jours. La phase de planification est cruciale pour les entrepôts en activité continue : nous adaptons les tests pour ne pas perturber les opérations de nuit et les pics d'activité liés aux périodes commerciales (Black Friday, Noël).",
        },
        {
          q: "Mon entreprise logistique à Lens doit-elle se conformer à NIS2 ?",
          a: "Le secteur transport et logistique est explicitement listé dans NIS2. Si votre entreprise emploie plus de 50 personnes ou réalise plus de 10 millions d'euros de CA dans le transport ou la logistique, vous êtes potentiellement concerné en tant qu'entité importante. Les plateformes de distribution e-commerce qui assurent une infrastructure critique de distribution nationale peuvent être qualifiées d'entités essentielles. Nous réalisons un diagnostic de conformité NIS2 gratuit en 30 minutes.",
        },
        {
          q: "Vous déplacez-vous dans l'agglomération Lens-Liévin pour les audits ?",
          a: "Oui. Nos consultants se déplacent sur site à Lens, Liévin, Hénin-Beaumont, Carvin, Harnes et dans tout le bassin lensois. Certaines missions peuvent également être réalisées à distance (revue de configuration, audit de code, questionnaire organisationnel) pour plus de flexibilité. Nous couvrons également Béthune, Arras et Douai pour les missions régionales dans le Pas-de-Calais.",
        },
        {
          q: "Comment réagir si mon entreprise de Lens est victime de phishing ou d'un ransomware ?",
          a: "Isolez immédiatement le ou les postes concernés du réseau. Changez tous les mots de passe des comptes potentiellement compromis depuis un appareil sain. Signalez-le à votre responsable IT ou contactez notre CERT (disponible 24h/24). Si des données personnelles ont été exposées, vous devez notifier la CNIL dans les 72 heures. Nos experts CyberSecure interviennent à Lens pour contenir l'attaque, analyser les causes et coordonner la reprise d'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLens;
