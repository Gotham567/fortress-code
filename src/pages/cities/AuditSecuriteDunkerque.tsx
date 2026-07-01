import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteDunkerque = () => (
  <CityLandingPage
    data={{
      city: "Dunkerque",
      citySlug: "dunkerque",
      region: "Hauts-de-France",
      postalCode: "59140",
      intro: "CyberSecure accompagne les PME et ETI de Dunkerque avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs sidérurgique, portuaire et énergétique du Dunkerquois. Notre cabinet qualifié PASSI ANSSI intervient sur site à Dunkerque pour des missions d'audit réseau, d'audit de systèmes industriels (OT/SCADA) et de réponse à incident CERT dans l'un des plus grands sites industriels de France.",
      localContext: "Dunkerque est le 3e port de France et abrite un des plus importants complexes industriels du pays avec ArcelorMittal (premier producteur d'acier européen), des terminaux méthaniers, des usines chimiques et le futur cluster batterie (Envision AESC, Verkor) qui fait de Dunkerque un hub stratégique de la transition énergétique européenne. Ces infrastructures critiques sont des cibles prioritaires pour les attaques cyber d'État et les ransomwares industriels. La zone portuaire et les terminaux logistiques gèrent des flux de marchandises colosseaux interconnectés avec des systèmes douaniers et des partenaires internationaux. Le tissu de PME locales (maintenance industrielle, sous-traitance) nécessite également une protection adaptée.",
      sectors: [
        "Sidérurgie et métallurgie (ArcelorMittal, acier)",
        "Énergie et industrie chimique (terminal GNL, chimie)",
        "Batteries et gigafactories (Envision AESC, Verkor)",
        "Port et logistique (3e port de France)",
        "Santé (CH Dunkerque, cliniques Nord)",
        "Collectivités et Communauté Urbaine de Dunkerque",
      ],
      neighborhoods: [
        "Centre-ville de Dunkerque",
        "Port-Est et zone portuaire industrielle",
        "Grande-Synthe (industrie, ArcelorMittal)",
        "Saint-Pol-sur-Mer et zones pétrochimiques",
        "Loon-Plage (terminal méthanier, logistique)",
        "Gravelines (centrale nucléaire EDF, côte)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité des systèmes industriels (OT/SCADA) pour un site sidérurgique à Dunkerque ?",
          a: "Un audit OT/IT pour un site industriel d'envergure à Dunkerque (ArcelorMittal, chimie, terminal GNL) est tarifé entre 20 000 et 60 000 € HT selon la taille du parc d'automates et le niveau de criticité des systèmes. Pour les PME sous-traitantes industrielles, un audit réseau ciblé démarre à 6 000 € HT. CyberSecure maîtrise les normes IEC 62443 et les guides ANSSI pour les OIV (Opérateurs d'Importance Vitale). Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau ETI à Dunkerque ?",
          a: "Un audit réseau pour une PME dunkerquoise dure 4 à 7 jours ouvrés. Pour un audit complet OT/IT d'un site industriel incluant les automates, les SCADA et les réseaux industriels, comptez 10 à 25 jours selon la taille du site. CyberSecure peut intervenir en urgence sous 72h et planifie les audits industriels pour éviter toute perturbation de la production.",
        },
        {
          q: "Comment auditer et sécuriser les systèmes SCADA d'un terminal GNL ou d'un site de production d'acier à Dunkerque ?",
          a: "Les systèmes de contrôle des terminaux GNL et des hauts-fourneaux utilisent des automates industriels (PLC, DCS, SIS) dont la compromission constituerait une catastrophe industrielle et environnementale. CyberSecure réalise des audits conformément aux normes IEC 62443 et aux exigences des OIV définies par l'ANSSI : cartographie des réseaux OT, analyse des zones de sécurité et conduits, test des accès distants de maintenance, évaluation des procédures de patch management industriel, et test des liaisons avec les systèmes d'information de gestion. Nous intervenons sans impact sur la production.",
        },
        {
          q: "CyberSecure intervient-il sur site à Dunkerque et dans l'arrondissement de Dunkerque ?",
          a: "Oui, nos consultants se déplacent à Dunkerque, Grande-Synthe, Gravelines, Saint-Pol-sur-Mer, Loon-Plage et dans tout l'arrondissement dunkerquois. Nous couvrons également Calais, Boulogne-sur-Mer et l'ensemble du Nord-Pas-de-Calais pour les groupes industriels ayant plusieurs sites. Déploiement sous 48h à Dunkerque.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site industriel à Dunkerque ?",
          a: "Contactez immédiatement le CERT de CyberSecure (24h/24, 7j/7) et activez votre plan de continuité industrielle. Pour les OIV, notifiez simultanément l'ANSSI (via le portail OIV). N'éteignez pas les automates industriels compromis — isolez-les du réseau IT. Notre équipe spécialisée OT peut être déployée à Dunkerque dans les 4 heures. CyberSecure assure les notifications ANSSI, CNIL et les déclarations réglementaires sectorielles. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteDunkerque;
