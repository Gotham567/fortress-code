import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLorient = () => (
  <CityLandingPage
    data={{
      city: "Lorient",
      citySlug: "lorient",
      region: "Bretagne",
      postalCode: "56100",
      intro: "CyberSecure accompagne les PME et ETI de Lorient avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs pêche industrielle, naval et défense du Morbihan. Notre cabinet qualifié PASSI ANSSI intervient sur site à Lorient pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises du bassin lorientais.",
      localContext: "Lorient est un pôle naval et de pêche de premier rang national : la base navale de Lorient est l'une des trois bases de la Marine Nationale française, générant un écosystème de sous-traitants de défense aux systèmes d'information critiques. Le port de Lorient est le premier port de pêche de France métropolitaine par les volumes traités, avec une filière de mareyage, conserveries et entreprises de transformation dont les systèmes de traçabilité et de commerce sont en pleine numérisation. La Cité de la Voile Éric Tabarly et le Pôle Course au Large attirent des entreprises de haute technologie nautique (matériaux composites, électronique embarquée) aux données techniques sensibles. L'Université de Bretagne-Sud et son école d'ingénieurs contribuent à l'écosystème numérique lorientais.",
      sectors: [
        "Pêche industrielle et mareyage (1er port de pêche France)",
        "Naval et défense (Marine Nationale, sous-traitants)",
        "Course au Large et nautisme technologique",
        "Agroalimentaire et conserveries bretonnes",
        "Santé (CH Bretagne-Sud, cliniques Morbihan)",
        "Collectivités et Cap Lorient Agglomération",
      ],
      neighborhoods: [
        "Centre-ville et base sous-marine (patrimoine)",
        "Port de Keroman (pêche industrielle, mareyage)",
        "Technopôle Lorient La Base (innovation nautique)",
        "Caudan et zone d'activités de Kerdrean",
        "Lanester et zones industrielles rive gauche",
        "Hennebont et Morbihan intérieur (industrie, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour un sous-traitant de la Marine Nationale ou une entreprise de défense navale à Lorient ?",
          a: "Un pentest pour un sous-traitant de la Marine Nationale à Lorient se situe entre 8 000 et 18 000 € HT selon le périmètre et les contraintes de classification. CyberSecure est qualifié PASSI ANSSI et habitué aux exigences des environnements de défense. Pour les entreprises soumises aux exigences IGI 1300, nous proposons des audits de conformité spécifiques. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau ETI à Lorient ?",
          a: "Un audit réseau pour une PME lorientaise dure 4 à 7 jours ouvrés. Pour une ETI navale ou un opérateur portuaire incluant les systèmes OT, comptez 7 à 12 jours. L'audit Active Directory seul est réalisable en 2 à 4 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes informatiques d'un port de pêche et d'une filière mareyage à Lorient ?",
          a: "Le port de Lorient utilise des systèmes de gestion portuaire, de criée électronique et de traçabilité des produits de la mer exposés aux cybermenaces. CyberSecure réalise des audits incluant la sécurité des plateformes de vente en criée (systèmes d'enchères numériques), les accès des acheteurs et mareyeurs, la conformité IFS pour les systèmes de traçabilité et la sécurité des chaînes du froid connectées. Nous évaluons également les interconnexions avec les systèmes douaniers et vétérinaires.",
        },
        {
          q: "CyberSecure intervient-il sur site à Lorient et dans le Morbihan ?",
          a: "Oui, nos consultants se déplacent à Lorient, Vannes, Auray, Pontivy, Hennebont, Port-Louis et dans tout le Morbihan. Nous couvrons également le Finistère (Quimper, Brest) pour les groupes bretons ayant des sites multiples. Déploiement sous 72h à Lorient.",
        },
        {
          q: "Que faire en cas de cyberattaque à Lorient — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les systèmes touchant à des contrats de défense, contactez également la DRSD (Direction du Renseignement et de la Sécurité de la Défense). Notre équipe peut être sur site à Lorient dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLorient;
