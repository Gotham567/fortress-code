import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAngouleme = () => (
  <CityLandingPage
    data={{
      city: "Angoulême",
      citySlug: "angouleme",
      region: "Nouvelle-Aquitaine",
      postalCode: "16000",
      intro: "CyberSecure accompagne les PME et ETI d'Angoulême avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs de la BD/jeux vidéo, du papier, de l'industrie et du numérique créatif en Charente. Notre cabinet qualifié PASSI ANSSI intervient sur site à Angoulême pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT.",
      localContext: "Angoulême est mondialement reconnue pour son Festival International de la Bande Dessinée (FIBD, premier festival BD au monde) et s'est développée en capital européen des industries créatives et numériques : studios de jeux vidéo (notamment Ubisoft dans la région), agences de création numérique, maisons d'édition BD dont les propriétés intellectuelles, les données de production et les plateformes de distribution numérique constituent des actifs à protéger contre le piratage et la cybercriminalité. La tradition papetière angoumoïne (Arjowiggins, Condat) laisse place à des industries de pointe en matériaux d'emballage. L'industrie automobile (Faurecia) et les PME de la Charente représentent un tissu économique diversifié. Le CH d'Angoulême et les établissements de santé font face aux cybermenaces.",
      sectors: [
        "Industries créatives et jeux vidéo (studios, éditeurs BD)",
        "Papier et emballage (Arjowiggins, Condat)",
        "Automobile et industrie (Faurecia, équipementiers)",
        "Numérique et agences créatives",
        "Santé (CH Angoulême, cliniques Charente)",
        "Collectivités et Grand Angoulême",
      ],
      neighborhoods: [
        "Centre-ville et Plateau (festival BD, culture)",
        "La Couronne et zones industrielles sud",
        "Soyaux et zones d'activités est (industrie)",
        "Gond-Pontouvre et zones nord",
        "Cognac et Charente viticole (cognac, pineau)",
        "Châteauneuf-sur-Charente et Charente rurale",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un studio de jeux vidéo ou un éditeur BD à Angoulême ?",
          a: "Un audit de sécurité pour un studio de jeux vidéo ou une maison d'édition BD à Angoulême est tarifé entre 4 500 et 10 000 € HT selon la taille du SI et les plateformes à protéger (code source, assets artistiques, plateformes de distribution). CyberSecure propose des audits de protection des propriétés intellectuelles incluant la sécurisation des dépôts de code (GitHub, GitLab), des serveurs de build et des plateformes cloud de stockage des assets. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Angoulême ?",
          a: "Un pentest réseau pour une PME angoumoixine dure 3 à 6 jours ouvrés. Pour un studio de jeux vidéo avec des serveurs cloud et des accès distants multiples, comptez 4 à 7 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment protéger le code source et les propriétés intellectuelles d'un studio de jeux vidéo à Angoulême ?",
          a: "Les studios de jeux vidéo d'Angoulême gèrent des actifs numériques extrêmement précieux : code source, modèles 3D, musiques, données joueurs et propriétés intellectuelles pouvant valoir des centaines de millions d'euros. CyberSecure réalise des audits incluant la sécurisation des dépôts de code source, les droits d'accès des développeurs (incluant les freelances et sous-traitants), la protection des comptes sur les stores (Steam, console), et les tests de résistance des plateformes multijoueurs aux attaques DDoS. Nous évaluons également les risques de fuites de données avant publication (« leaks »).",
        },
        {
          q: "CyberSecure intervient-il sur site à Angoulême et en Charente ?",
          a: "Oui, nos consultants se déplacent à Angoulême, Cognac, Barbezieux-Saint-Hilaire, Confolens et dans tout le département Charente. Nous couvrons également la Charente-Maritime (La Rochelle, Saintes) et la Dordogne (Périgueux) pour les groupes ayant des sites dans plusieurs départements de Nouvelle-Aquitaine. Déploiement sous 72h à Angoulême.",
        },
        {
          q: "Que faire en cas de cyberattaque ou de vol de code source à Angoulême ?",
          a: "Contactez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les serveurs compromis sans les éteindre. En cas de vol de code source ou de données joueurs, activez votre plan de réponse aux incidents et notifiez la CNIL (violation de données personnelles) dans les 72h. Notre équipe peut être sur site à Angoulême dans les 4 heures. CyberSecure assure les notifications ANSSI. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAngouleme;
