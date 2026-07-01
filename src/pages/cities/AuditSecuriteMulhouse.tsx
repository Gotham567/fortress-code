import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMulhouse = () => (
  <CityLandingPage
    data={{
      city: "Mulhouse",
      citySlug: "mulhouse",
      region: "Grand Est",
      postalCode: "68100",
      intro: "CyberSecure accompagne les PME et ETI de Mulhouse avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs automobile, chimique et textile du Haut-Rhin. Notre cabinet qualifié PASSI ANSSI intervient sur site à Mulhouse pour des missions d'audit réseau, d'audit Active Directory et de réponse à incident CERT dans ce bassin industriel trifontalier France-Allemagne-Suisse.",
      localContext: "Mulhouse est un pôle industriel majeur du Haut-Rhin avec la présence de Stellantis/PSA (l'une des plus grandes usines automobiles de France à Mulhouse-Burnhaupt), de l'industrie chimique (pôle de Chalampé) et des ateliers textiles techniques. Les sous-traitants automobiles et chimiques soumis aux exigences TISAX et aux normes REACH développent des architectures IT de plus en plus interconnectées. La situation trinationale (à 20 km de Bâle et à 30 km de Freiburg) génère des flux de travailleurs frontaliers et des architectures IT cross-border complexes. L'hôpital universitaire de Mulhouse-Colmar (GHR) et le tissu de cliniques du Haut-Rhin font face aux cybermenaces médical.",
      sectors: [
        "Automobile (Stellantis PSA Mulhouse, équipementiers)",
        "Chimie industrielle (pôle de Chalampé, BASF, Solvay)",
        "Textile technique et innovation textile",
        "Santé (GHR Mulhouse-Colmar, cliniques 68)",
        "Commerce et logistique (trinational)",
        "Collectivités et Mulhouse Alsace Agglomération",
      ],
      neighborhoods: [
        "Centre-ville et Cité de l'Automobile",
        "Dornach et zone industrielle automobile",
        "Illzach et zones d'activités nord",
        "Wittenheim et Kingersheim (industrie, commerce)",
        "Chalampé et Ottmarsheim (chimie, port rhénan)",
        "Habsheim et aéroport de Bâle-Mulhouse",
      ],
      faq: [
        {
          q: "Combien coûte un pentest TISAX pour un équipementier automobile à Mulhouse ?",
          a: "Un audit de pré-certification TISAX pour un équipementier automobile de Mulhouse ou un sous-traitant de Stellantis se situe entre 8 000 et 20 000 € HT selon le niveau d'assurance (AL1, AL2, AL3) et la taille du SI. Un pentest réseau pour une PME industrielle est tarifé entre 6 000 et 12 000 € HT. CyberSecure maîtrise les exigences TISAX et propose des accompagnements complets de mise en conformité. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit sécurité informatique à Mulhouse ?",
          a: "Un audit réseau pour une PME mulhousienne dure 4 à 7 jours ouvrés. Pour une ETI industrielle avec des systèmes de production, comptez 7 à 12 jours. L'audit Active Directory seul est réalisable en 2 à 4 jours. CyberSecure peut intervenir sur site à Mulhouse dans les 48h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes de production d'un site automobile Stellantis ou d'un sous-traitant à Mulhouse ?",
          a: "Les lignes d'assemblage automobile de Mulhouse utilisent des systèmes MES, des robots industriels et des réseaux OT interconnectés au SI de gestion. CyberSecure réalise des audits OT/IT incluant la cartographie des flux réseau entre les ateliers et le SI corporate, le test des accès distants de maintenance, l'évaluation des cloisonnements DMZ industrielles et la revue des procédures de mise à jour des firmwares robots. Nous appliquons les exigences TISAX et les guides ANSSI pour les systèmes industriels.",
        },
        {
          q: "CyberSecure intervient-il sur site à Mulhouse et dans le Haut-Rhin ?",
          a: "Oui, nos consultants se déplacent à Mulhouse, Colmar, Guebwiller, Saint-Louis, Illzach et dans tout le Haut-Rhin. Nous couvrons également l'EuroAirport Bâle-Mulhouse-Fribourg et les zones industrielles du Rhin supérieur. Déploiement sous 48h à Mulhouse.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site industriel à Mulhouse ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les sites de production, suivez votre plan de continuité industrielle et évitez d'éteindre les automates. Notre équipe peut être sur site à Mulhouse dans les 4 heures. CyberSecure assure les notifications ANSSI, CNIL et les déclarations réglementaires. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMulhouse;
