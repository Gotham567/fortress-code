import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLens = () => (
  <CityLandingPage
    data={{
      city: "Lens",
      citySlug: "lens",
      region: "Hauts-de-France",
      postalCode: "62300",
      intro: "CyberSecure protège les entreprises de Lens, Liévin, Hénin-Beaumont et de l'agglomération Lens-Liévin avec des audits de sécurité qualifiés PASSI, des tests d'intrusion et une réponse à incident disponible 24h/24. Prestataire cybersécurité de référence dans le Pas-de-Calais.",
      localContext: "L'agglomération Lens-Liévin constitue un pôle économique majeur des Hauts-de-France, porté par la logistique (proximité autoroute A26), l'industrie manufacturière, les services à la personne et un secteur commercial actif lié au Louvre-Lens. La transformation numérique des entreprises lensoises crée de nouvelles vulnérabilités : accès distants, cloud, applications métier exposées. Les ransomwares et le phishing ciblé représentent plus de 70 % des incidents signalés dans le Pas-de-Calais. CyberSecure intervient à Lens, Liévin, Hénin-Beaumont, Carvin et dans toute la communauté d'agglomération.",
      sectors: [
        "Logistique et entreposage",
        "Industrie manufacturière",
        "Commerce de détail",
        "Tourisme et culture (Louvre-Lens)",
        "Services à la personne et santé",
        "BTP et travaux publics",
        "PME et TPE locales",
        "Collectivités territoriales",
      ],
      neighborhoods: [
        "Lens centre",
        "Liévin",
        "Hénin-Beaumont",
        "Carvin",
        "Harnes",
        "Noyelles-sous-Lens",
        "Agglomération Lens-Liévin",
        "Pas-de-Calais (62)",
      ],
      faq: [
        {
          q: "Quel est le prix d'un audit de sécurité informatique à Lens ?",
          a: "Un audit de sécurité pour une PME de Lens démarre à 3 000 € HT pour un audit ciblé. Un pentest réseau varie entre 5 000 et 15 000 € selon la complexité. Un audit complet multi-périmètre peut aller jusqu'à 30 000 € pour une ETI. Devis gratuit et personnalisé sous 48h.",
        },
        {
          q: "Vous déplacez-vous dans l'agglomération Lens-Liévin pour les audits ?",
          a: "Oui, nos consultants se déplacent sur site à Lens, Liévin, Hénin-Beaumont, Carvin et dans tout le bassin lensois. Certaines missions peuvent également être réalisées à distance (revue de configuration, audit de code, questionnaire organisationnel) pour plus de flexibilité.",
        },
        {
          q: "Mon entreprise logistique à Lens doit-elle se conformer à NIS2 ?",
          a: "Le secteur transport et logistique est explicitement listé dans NIS2. Si votre entreprise emploie plus de 50 personnes ou réalise plus de 10 millions d'euros de CA, vous êtes potentiellement concerné en tant qu'entité importante. Nous réalisons un diagnostic de conformité NIS2 gratuit.",
        },
        {
          q: "Comment réagir si mon entreprise de Lens est victime de phishing ?",
          a: "Isolez immédiatement le poste concerné du réseau. Changez tous les mots de passe des comptes potentiellement compromis. Signalez-le à votre responsable IT ou contactez notre CERT. Si des données personnelles ont été exposées, vous devez notifier la CNIL dans les 72 heures.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLens;
