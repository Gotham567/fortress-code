import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBelfort = () => (
  <CityLandingPage
    data={{
      city: "Belfort",
      citySlug: "belfort",
      region: "Bourgogne-Franche-Comté",
      postalCode: "90000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des pentests industriels et des audits de sécurité SI pour les ETI et sous-traitants du bassin belfortain. Alstom TGV, General Electric turbines, mécatronique : nos experts protègent les systèmes OT/IT critiques du Territoire de Belfort contre les cybermenaces.",
      localContext: "Belfort est un pôle industriel majeur ancré dans la mécatronique, l'énergie et les transports ferroviaires. Alstom (TGV, locomotives) et General Electric (turbines, énergie) génèrent un écosystème dense de sous-traitants dont les systèmes de production sont de plus en plus connectés. Ces OT (systèmes opérationnels) constituent des cibles prioritaires pour les attaques par ransomware et le cyberespionnage industriel. La frontière suisse et la proximité de Mulhouse créent également des enjeux transfrontaliers de protection des données et des flux d'information. CyberSecure intervient à Belfort, Montbéliard, Héricourt et dans tout le Territoire de Belfort.",
      sectors: [
        "Ferroviaire et transports (Alstom TGV)",
        "Énergie et turbines (General Electric)",
        "Mécatronique et sous-traitance industrielle",
        "Automobile et équipementiers",
        "Santé (CHBM, hôpitaux)",
        "PME industrielles et artisanat de précision",
      ],
      neighborhoods: [
        "Belfort Centre et Faubourg de France",
        "Zone industrielle des Forges",
        "Montbéliard et Sochaux (PSA)",
        "Héricourt et Delle",
        "Mulhouse et Haut-Rhin voisin",
        "Tout le Territoire de Belfort",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest industriel à Belfort pour un sous-traitant d'Alstom ?",
          a: "Un pentest industriel OT/IT pour un sous-traitant du secteur ferroviaire ou énergétique à Belfort varie entre 10 000 et 25 000 € HT selon la complexité des systèmes. L'audit d'un réseau OT (automates, SCADA, supervision) est généralement compris entre 12 000 et 20 000 € HT. Un pentest web applicatif seul démarre à 4 000 € HT. Un audit Active Directory pour une ETI de 100 à 500 salariés coûte entre 5 000 et 12 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité OT pour une ETI industrielle à Belfort ?",
          a: "Un audit OT/IT complet pour une ETI industrielle belfortaine dure généralement 10 à 15 jours. La phase de cartographie des systèmes et d'inventaire des actifs prend 2 à 3 jours, le test des interfaces de supervision (HMI, SCADA) 3 à 5 jours, et l'analyse de la segmentation IT/OT avec rédaction du rapport 3 à 5 jours. Nous intervenons en tenant compte des contraintes de production pour ne pas impacter la continuité opérationnelle.",
        },
        {
          q: "Comment sécuriser les systèmes SCADA et OT d'un industriel à Belfort ?",
          a: "La sécurisation des systèmes OT (SCADA, automates Siemens, Schneider, Rockwell) passe par plusieurs étapes : inventaire exhaustif des actifs, audit de la segmentation IT/OT, test des interfaces HMI, évaluation des protocoles industriels (Modbus, Profinet, OPC-UA) et revue des politiques de mise à jour. Nos audits OT suivent la norme IEC 62443 et les guides ANSSI pour les systèmes industriels. Nous analysons également les risques spécifiques aux prestataires de maintenance ayant des accès distants.",
        },
        {
          q: "Intervenez-vous sur site à Belfort, Montbéliard et dans le Territoire de Belfort ?",
          a: "Oui. Nos consultants se déplacent sur site à Belfort, Montbéliard, Héricourt, Delle, Audincourt et dans tout le Territoire de Belfort. Nous couvrons également le Haut-Rhin (Mulhouse, Altkirch) et la Haute-Saône pour les missions régionales. Les interventions sur les sites industriels sont planifiées avec votre équipe de production pour minimiser les perturbations.",
        },
        {
          q: "Que faire si mon site industriel à Belfort est victime d'une cyberattaque ?",
          a: "Activez immédiatement votre plan de continuité d'activité et contactez notre CERT (disponible 24h/24, 7j/7). Isolez les systèmes IT du réseau OT si la segmentation le permet — ne stoppez les automates que si c'est nécessaire à la sécurité physique des personnes. Préservez les journaux des systèmes SCADA et des firewalls industriels. Nos experts CyberSecure se déploient à Belfort pour contenir l'incident, analyser les vecteurs d'attaque et vous accompagner dans la reprise de production.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBelfort;
