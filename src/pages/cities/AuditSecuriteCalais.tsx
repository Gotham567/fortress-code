import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCalais = () => (
  <CityLandingPage
    data={{
      city: "Calais",
      citySlug: "calais",
      region: "Hauts-de-France",
      postalCode: "62100",
      intro: "CyberSecure accompagne les PME et ETI de Calais avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs logistique transmanche, portuaire et industriel du Pas-de-Calais. Notre cabinet qualifié PASSI ANSSI intervient sur site à Calais pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT dans ce territoire carrefour entre la France et le Royaume-Uni.",
      localContext: "Calais est le premier port transmanche européen avec Eurotunnel/Getlink et les ferries, générant un flux de 10 millions de passagers et de millions de camions par an dont les systèmes de gestion douanière, de réservation et de contrôle d'accès constituent des cibles cybercriminelles prioritaires depuis le Brexit. La dentelle de Calais (Noyon, Sophie Hallette) est un savoir-faire artisanal d'excellence mondiale dont les brevets et dessins sont exposés à la contrefaçon. La zone industrielle de Calais-Fréthun accueille des entreprises logistiques et de la chimie. Le CH de Calais et le tissu médico-social local font face aux cybermenaces. La frontière avec le Royaume-Uni génère des échanges commerciaux complexes soumis aux nouvelles contraintes post-Brexit.",
      sectors: [
        "Logistique transmanche et transport (Eurotunnel, ferries)",
        "Port de Calais et manutention portuaire",
        "Dentelle et textile de luxe (Noyon, Sophie Hallette)",
        "Industrie chimique et PME locales",
        "Santé (CH Calais, cliniques Pas-de-Calais)",
        "Collectivités et Calais Agglomération",
      ],
      neighborhoods: [
        "Centre-ville et quartier Nord",
        "Port de Calais et zone transmanche",
        "Calais-Fréthun (zone logistique, gare TGV)",
        "Coquelles (terminal Eurotunnel, centres commerciaux)",
        "Boulogne-sur-Mer et Côte d'Opale (pêche, tourisme)",
        "Saint-Omer et Flandres intérieures (industrie, agriculture)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un opérateur portuaire ou logistique à Calais ?",
          a: "Un audit de sécurité pour un opérateur transmanche ou logistique à Calais incluant les systèmes douaniers, de réservation et de gestion de flotte est tarifé entre 7 000 et 15 000 € HT selon la taille et la complexité. Pour Eurotunnel/Getlink ou un grand armateur, les audits de systèmes critiques font l'objet d'une proposition spécifique. CyberSecure maîtrise les enjeux de sécurité post-Brexit pour les flux France-UK. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Calais ?",
          a: "Un pentest réseau pour une PME calaisienne dure 4 à 7 jours ouvrés. Pour un opérateur portuaire ou logistique avec des interconnexions UK/France, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes de gestion douanière et les flux transmanche post-Brexit à Calais ?",
          a: "Le Brexit a multiplié les interfaces IT entre les opérateurs calaisiens et leurs partenaires britanniques (douanes UK, HMRC, systèmes de certification sanitaire) créant de nouveaux vecteurs d'attaque sur des architectures IT hybrides France-UK. CyberSecure réalise des audits incluant la revue des API d'échange avec les systèmes douaniers UK et EU, le test des portails de déclarations, l'évaluation des accès des prestataires britanniques et la conformité RGPD pour les transferts de données post-Brexit.",
        },
        {
          q: "CyberSecure intervient-il sur site à Calais et dans le Pas-de-Calais ?",
          a: "Oui, nos consultants se déplacent à Calais, Boulogne-sur-Mer, Saint-Omer, Arras, Lens et dans tout le Pas-de-Calais. Nous couvrons également le nord de France (Dunkerque, Lille) pour les groupes logistiques ayant des sites sur l'ensemble de la façade maritime. Déploiement sous 72h à Calais.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un opérateur transmanche ou une entreprise à Calais ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les incidents touchant des systèmes douaniers ou transfrontaliers, informez également les autorités douanières françaises et britanniques concernées. Notre équipe peut être sur site à Calais dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCalais;
