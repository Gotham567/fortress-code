import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteToulouse = () => (
  <CityLandingPage
    data={{
      city: "Toulouse",
      citySlug: "toulouse",
      urlPath: "cybersecurite-toulouse",
      region: "Occitanie",
      postalCode: "31000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les entreprises aéronautiques, spatiales et les sous-traitants Airbus de Toulouse avec des audits de sécurité SI et des pentests de haut niveau. Airbus, CNES, Thales, Dassault et leurs fournisseurs font confiance à nos experts pour protéger leurs systèmes d'information critiques en Occitanie.",
      localContext: "Toulouse est la capitale mondiale de l'aéronautique et de l'espace avec Airbus (siège mondial), CNES (Centre National d'Études Spatiales), Thales Alenia Space, Dassault Aviation et des centaines de sous-traitants ESN. Ces entreprises et leur écosystème traitent des données techniques et commerciales hautement sensibles (plans d'avions, données de vol, propriété intellectuelle spatiale, données de défense) qui en font des cibles prioritaires du cyberespionnage d'État et de la cybercriminalité organisée. Les exigences cybersécurité d'Airbus pour sa chaîne d'approvisionnement (programme FAST) imposent des standards élevés aux fournisseurs. CyberSecure intervient à Toulouse, Blagnac, Colomiers, Labège et dans toute la région Occitanie.",
      sectors: [
        "Aéronautique et spatial (Airbus, CNES, Thales, Dassault)",
        "Défense et systèmes embarqués",
        "Recherche et enseignement supérieur",
        "Santé (CHU de Toulouse, biotech)",
        "Numérique, ESN et startups deeptech",
        "Sous-traitants aéronautiques et équipementiers",
      ],
      neighborhoods: [
        "Toulouse Blagnac et Colomiers (Airbus, aéroport)",
        "Labège et Innopole (tech et biotech)",
        "Toulouse Métropole Centre et Compans Caffarelli",
        "Montauban, Tarbes, Albi",
        "Castres, Muret, L'Union",
        "Toute la région Occitanie",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour un sous-traitant Airbus à Toulouse ?",
          a: "Un pentest réseau et applicatif pour un sous-traitant Airbus varie entre 12 000 et 30 000 € HT selon le périmètre. Pour les fournisseurs soumis au programme FAST (Fournisseurs Airbus Sécurité et Transformation), un audit de conformité complet est généralement compris entre 20 000 et 50 000 € HT. Un pentest web pour une ESN toulousaine de taille moyenne démarre à 4 000 € HT. Un pentest Red Team simulant une attaque ciblée APT est disponible à partir de 20 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une ETI aéronautique à Toulouse ?",
          a: "Un audit complet pour une ETI aéronautique toulousaine (réseau, AD, applications, systèmes embarqués, conformité FAST/IGI 1300) nécessite généralement 15 à 30 jours selon la taille du SI et le niveau de sensibilité. Un pentest réseau interne seul prend 7 à 12 jours. Pour les entreprises avec des systèmes OT (chaînes d'assemblage, essais en vol), l'audit OT peut prendre 5 à 10 jours supplémentaires.",
        },
        {
          q: "Comment protéger la propriété intellectuelle des sous-traitants d'Airbus ?",
          a: "Les fournisseurs d'Airbus doivent respecter les exigences du programme FAST (Fournisseurs Airbus Sécurité et Transformation) qui impose des contrôles de sécurité stricts (segmentation réseau, gestion des accès, chiffrement des données techniques, traçabilité). Nous réalisons des audits alignés sur ces exigences et sur les standards cybersécurité de la défense (RGS, IGI 1300). Nos rapports PASSI ANSSI sont reconnus par Airbus dans leur processus de qualification fournisseurs.",
        },
        {
          q: "Les entreprises de défense toulousaines sont-elles soumises à des obligations spécifiques ?",
          a: "Oui. Les entreprises travaillant pour la DGA et les programmes de défense (Dassault Rafale, A400M) sont soumises à l'IGI 1300 et doivent protéger les informations classifiées selon des règles strictes. Les systèmes traitant des données de défense doivent être qualifiés par l'ANSSI. Nous disposons des habilitations et de l'expertise nécessaires pour accompagner les entreprises toulousaines dans cette conformité exigeante.",
        },
        {
          q: "Que faire en cas d'attaque sur les systèmes industriels ou embarqués à Toulouse ?",
          a: "En cas d'attaque sur vos systèmes OT ou embarqués, contactez notre CERT au 07 69 32 30 19 (disponible 24h/24, 7j/7). Isolez le réseau IT du réseau OT selon votre plan de segmentation. Pour les systèmes traitant des données de défense, notifiez immédiatement votre responsable sécurité défense et le donneur d'ordre selon les procédures IGI 1300. Nos experts CyberSecure se déploient à Toulouse sous 4 heures avec une équipe spécialisée en sécurité industrielle et forensique.",
        },
      ],
    }}
  />
);

export default AuditSecuriteToulouse;
