import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNanterre = () => (
  <CityLandingPage
    data={{
      city: "Nanterre",
      citySlug: "nanterre",
      region: "Île-de-France",
      postalCode: "92000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les grands groupes et ETI de Nanterre et La Défense avec des audits de sécurité informatique et des pentests de haut niveau. Total, EDF, Société Générale, LVMH et leurs prestataires IT font confiance à nos experts pour leurs tests d'intrusion dans les Hauts-de-Seine.",
      localContext: "Nanterre est le siège social de nombreux grands groupes français implantés à La Défense — premier quartier d'affaires européen avec Total Energies, EDF, Société Générale, LVMH, Havas. Ces groupes gèrent des données stratégiques d'une valeur considérable et leurs fournisseurs IT constituent des cibles intermédiaires pour accéder à leurs systèmes (attaques supply chain). La densité d'entités financières, énergétiques et de services autour de La Défense en fait l'une des zones les plus exposées aux attaques étatiques et à la cybercriminalité organisée en France. CyberSecure intervient à Nanterre, Puteaux, Courbevoie, La Garenne-Colombes et dans tout le département Hauts-de-Seine.",
      sectors: [
        "Services financiers et banques (Société Générale, HSBC)",
        "Énergie et utilities (EDF, Total Energies)",
        "Luxe et retail (LVMH, Publicis)",
        "Médias et communication (Havas, TF1)",
        "Conseil et services aux entreprises",
        "ETI et prestataires IT de La Défense",
      ],
      neighborhoods: [
        "La Défense et CNIT",
        "Nanterre Centre et Préfecture",
        "Puteaux et Courbevoie",
        "La Garenne-Colombes et Bois-Colombes",
        "Neuilly-sur-Seine et Levallois-Perret",
        "Tout le département Hauts-de-Seine",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour un prestataire IT ou ETI de La Défense à Nanterre ?",
          a: "Un pentest web applicatif pour une ETI de Nanterre démarre à 4 000 € HT. Pour un prestataire IT des grands groupes de La Défense souhaitant valider sa sécurité avant un audit client, un pentest réseau et applicatif complet varie entre 12 000 et 30 000 € HT. Un test Red Team simulant une attaque APT ciblée est disponible à partir de 20 000 € HT pour les entreprises critiques. Nos rapports PASSI ANSSI sont acceptés par tous les grands groupes dans leurs processus de qualification fournisseurs. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour un grand groupe ou une ETI à Nanterre ?",
          a: "Un pentest web complet pour une ETI prend 5 à 8 jours. Un audit complet d'une grande entreprise (réseau, Active Directory, applications, cloud, sensibilisation) nécessite 3 à 8 semaines selon la taille du SI. Pour les grands groupes de La Défense soumis à des obligations réglementaires (OSE, OIV), les audits sont planifiés sur plusieurs phases afin de ne pas perturber les opérations critiques.",
        },
        {
          q: "Comment auditer la sécurité d'un accès fournisseur aux SI des grands groupes de La Défense ?",
          a: "Les accès fournisseurs représentent l'un des principaux vecteurs d'attaque des grandes organisations. Notre audit couvre la revue des politiques d'accès tiers, le test des solutions de gestion des accès à privilèges (PAM), l'évaluation des authentifications MFA, la surveillance des activités des comptes fournisseurs et la revue des contrats de sécurité. Nous simulons également des attaques de type supply chain pour tester la chaîne de confiance entre votre entreprise et vos donneurs d'ordre.",
        },
        {
          q: "Intervenez-vous sur site à Nanterre, La Défense et dans les Hauts-de-Seine ?",
          a: "Oui. Nos consultants interviennent sur site à Nanterre, Puteaux, Courbevoie, La Garenne-Colombes, Neuilly-sur-Seine, Levallois-Perret et dans tout le département des Hauts-de-Seine. Pour les grands groupes de La Défense, nos missions sont planifiées en coordination avec les équipes sécurité et conformité internes. Nous intervenons également à Paris intramuros pour les sièges sociaux situés dans la capitale.",
        },
        {
          q: "Que faire en cas de cyberattaque contre un grand groupe ou une ETI à Nanterre ?",
          a: "Activez immédiatement votre plan de réponse aux incidents et contactez notre CERT (disponible 24h/24, 7j/7). Isolez les systèmes compromis et prévenez votre RSSI et votre DPO. Si votre entreprise est un OIV (Opérateur d'Importance Vitale), vous avez l'obligation légale de notifier l'ANSSI dans les délais prescrits. Nos experts CyberSecure interviennent à Nanterre pour contenir l'incident, analyser les vecteurs d'attaque et coordonner la communication de crise.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNanterre;
