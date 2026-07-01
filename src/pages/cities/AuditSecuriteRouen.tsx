import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteRouen = () => (
  <CityLandingPage
    data={{
      city: "Rouen",
      citySlug: "rouen",
      urlPath: "cybersecurite-rouen",
      region: "Normandie",
      postalCode: "76000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les industriels, opérateurs portuaires et ETI de Rouen avec des pentests OT et des audits de sécurité informatique. Pétrochimie, port du Havre, agroalimentaire et santé : nos experts protègent les systèmes d'information normands contre les cybermenaces.",
      localContext: "Rouen est la capitale de la Normandie et un pôle industriel majeur avec son port fluvial, sa zone pétrochimique et chimique emblématique de la Vallée de Seine (après l'incident Lubrizol en 2019, la résilience des sites industriels est devenue un enjeu stratégique) et un tissu d'ETI industrielles. La région Normandie est aussi un hub logistique (port du Havre, premier port de conteneurs français) et agricole qui doit renforcer sa résilience face aux cyberattaques visant les systèmes OT. CyberSecure intervient à Rouen, Le Havre, Grand-Couronne, Petit-Quevilly et dans toute la Normandie.",
      sectors: [
        "Industrie chimique et pétrolière (Vallée de Seine)",
        "Logistique et port du Havre (GPMH)",
        "Agroalimentaire normand",
        "Santé (CHU de Rouen, cliniques)",
        "Automobile et équipementiers",
        "PME industrielles et sous-traitants",
      ],
      neighborhoods: [
        "Rouen Centre et rive droite",
        "Petit-Quevilly et Grand-Couronne",
        "Le Havre et port de conteneurs",
        "Caen, Cherbourg, Évreux",
        "Dieppe, Fécamp, Barentin",
        "Toute la région Normandie",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest industriel OT pour une entreprise à Rouen ?",
          a: "Un pentest OT/IT pour un site industriel rouennais varie entre 12 000 et 30 000 € HT selon la complexité des systèmes. L'audit d'un réseau pétrochimique avec SCADA et automates coûte généralement entre 15 000 et 35 000 € HT. Un pentest IT classique (réseau, AD, applications) pour une ETI normande est compris entre 8 000 et 20 000 € HT. Pour les opérateurs portuaires du Havre soumis à NIS2, un audit de conformité complet commence à 20 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité OT pour un industriel à Rouen ?",
          a: "Un audit OT complet pour un site pétrochimique ou chimique de la Vallée de Seine dure généralement 10 à 20 jours. La phase de cartographie des actifs et d'analyse passive du réseau industriel prend 3 à 5 jours. Les tests actifs contrôlés (dans des fenêtres de maintenance) nécessitent 4 à 8 jours. La rédaction du rapport de remédiation prend 2 à 4 jours. Nous planifions l'ensemble en coordination avec vos équipes de production.",
        },
        {
          q: "Comment sécuriser un site industriel contre les risques cyber après l'incident Lubrizol ?",
          a: "La protection des sites industriels normands passe par la segmentation rigoureuse IT/OT (vlan industriels séparés), la mise à jour des systèmes SCADA et automates selon les possibilités, la surveillance en temps réel du réseau OT (SOC industriel), la gestion des accès distants des prestataires de maintenance et un PCA/PRI testé régulièrement. Notre audit OT/IT identifie vos vulnérabilités conformément aux guides ANSSI pour la cybersécurité des systèmes industriels et à la norme IEC 62443.",
        },
        {
          q: "Les opérateurs portuaires du Havre doivent-ils se conformer à NIS2 ?",
          a: "Oui. Les opérateurs du Grand Port Maritime du Havre et les acteurs de la chaîne logistique portuaire sont soumis à NIS2 (secteur transports). Ils doivent mettre en place des mesures de gestion des risques cyber, notifier les incidents à l'ANSSI et réaliser des audits réguliers. Nous réalisons des audits de conformité NIS2 spécifiques aux systèmes portuaires (VTMIS, terminal operating system, douane numérique) et des tests d'intrusion adaptés.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site industriel normand ?",
          a: "Contactez immédiatement notre CERT (disponible 24h/24, 7j/7). Si l'attaque touche les systèmes OT, activez votre plan de réponse aux incidents industriels et isolez le réseau IT du réseau industriel. Ne stoppez les automates que si la sécurité physique des personnes l'exige. Préservez les journaux SCADA et les traces réseau. Nos experts CyberSecure se déploient à Rouen pour contenir l'incident, analyser les vecteurs d'attaque et accompagner la reprise de production.",
        },
      ],
    }}
  />
);

export default AuditSecuriteRouen;
