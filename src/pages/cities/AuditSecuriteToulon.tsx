import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteToulon = () => (
  <CityLandingPage
    data={{
      city: "Toulon",
      citySlug: "toulon",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "83000",
      intro: "CyberSecure, cabinet PASSI qualifié ANSSI, réalise vos audits de sécurité informatique et pentests à Toulon pour les PME et ETI du Var, avec une expertise reconnue sur les environnements défense et naval. Notre équipe intervient sur site à Toulon pour des tests d'intrusion, audits Active Directory et missions CERT en réponse à incident.",
      localContext: "Toulon est le siège de la Marine Nationale et d'un tissu dense d'entreprises de défense, de sous-traitants navals et de PME du secteur BTP/tourisme. La base navale de Toulon, plus grande base militaire d'Europe de l'Ouest, génère un écosystème de fournisseurs critiques dont les systèmes d'information sont des cibles privilégiées pour l'espionnage industriel. Le CHU de Toulon-La Seyne, les cliniques privées et les collectivités du Var font face à une recrudescence d'attaques ransomware. La façade maritime et les activités portuaires attirent également des acteurs logistiques dont les interconnexions IT doivent être sécurisées.",
      sectors: [
        "Défense et industrie navale (DCNS Naval Group)",
        "Santé (CHU, cliniques privées, EHPAD)",
        "BTP et génie civil (grands chantiers Var)",
        "Tourisme et hôtellerie (Côte d'Azur varoise)",
        "Collectivités et administrations publiques",
        "Logistique et commerce portuaire",
      ],
      neighborhoods: [
        "Centre-ville et Vieux-Port de Toulon",
        "La Seyne-sur-Mer (zone navale et industrielle)",
        "Ollioules et zone d'activités Cap Sicié",
        "Hyères et l'Almanarre (tourisme, aéroport)",
        "La Garde et Ouest Var (zones d'activités)",
        "Six-Fours-les-Plages et littoral varois",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour une entreprise de défense ou sous-traitant naval à Toulon ?",
          a: "Un pentest applicatif web pour une PME sous-traitante de la Marine Nationale à Toulon est tarifé entre 5 000 et 10 000 € HT selon la surface d'attaque. Un pentest réseau complet avec ingénierie sociale pour un fournisseur de défense varie de 10 000 à 20 000 € HT. CyberSecure propose également des audits conformité ANSSI pour les entreprises soumises aux exigences OTAN/DGA, avec un devis gratuit sous 24h.",
        },
        {
          q: "Quel est le délai pour réaliser un audit de sécurité informatique à Toulon ?",
          a: "Un audit réseau ETI à Toulon se déroule en 5 à 10 jours ouvrés selon le périmètre. Un audit Active Directory sur un SI de 200 postes prend en moyenne 3 à 5 jours. Nos consultants CyberSecure peuvent se déployer sur site dans le Var sous 48 à 72h pour les missions urgentes, et sous 1 semaine pour des audits planifiés complets avec rapport de préconisations.",
        },
        {
          q: "Comment auditer et sécuriser un système d'information lié à la Marine Nationale à Toulon ?",
          a: "Les systèmes d'information des sous-traitants de défense à Toulon doivent respecter les référentiels IGI 1300 et les exigences de l'ANSSI pour les zones à accès contrôlé. CyberSecure réalise des audits de conformité PASSI incluant la revue des habilitations, l'analyse des cloisonnements réseau, le test des accès distants sécurisés et l'audit des postes de travail durcis. Nous accompagnons également la mise en place de procédures de réponse à incident adaptées aux contraintes de confidentialité défense.",
        },
        {
          q: "Intervenez-vous sur site à Toulon et dans le Var pour des missions de pentest ?",
          a: "Oui, CyberSecure intervient physiquement à Toulon, La Seyne-sur-Mer, Hyères, Fréjus et dans l'ensemble du département Var. Nos consultants sont basés en région PACA et peuvent rejoindre vos locaux sous 48h. Nous couvrons également les communes de Brignoles, Draguignan et Sainte-Maxime pour les ETI régionales.",
        },
        {
          q: "Que faire en cas de cyberattaque ou ransomware à Toulon ?",
          a: "Contactez immédiatement la cellule CERT de CyberSecure disponible 24h/24 et 7j/7. Isolez les machines compromises du réseau sans les éteindre afin de préserver les traces forensiques. Notre équipe peut être déployée sur site à Toulon sous 4 heures pour contenir la propagation, identifier le vecteur d'attaque et engager la restauration. Nous assurons également les déclarations ANSSI et CNIL requises. Le tarif d'intervention CERT est de 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteToulon;
