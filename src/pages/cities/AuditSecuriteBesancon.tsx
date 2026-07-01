import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBesancon = () => (
  <CityLandingPage
    data={{
      city: "Besançon",
      citySlug: "besancon",
      region: "Bourgogne-Franche-Comté",
      postalCode: "25000",
      intro: "CyberSecure accompagne les PME et ETI de Besançon avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs microtechnique, horloger, médical et numérique du Doubs. Notre cabinet qualifié PASSI ANSSI intervient sur site à Besançon pour protéger les systèmes d'information des entreprises franc-comtoises contre les cybermenaces ciblant les secteurs de haute précision.",
      localContext: "Besançon est la capitale mondiale historique de l'horlogerie et un pôle d'excellence en microtechniques : Témis (technopole des microtechniques et sciences numériques) accueille des ETI et startups innovantes en optique, systèmes embarqués et capteurs dont les brevets et données de R&D constituent des actifs à haute valeur à protéger. L'industrie médicale (implants, dispositifs médicaux de précision) s'appuie sur des PME exigeant une conformité ISO 13485 et MDR. Le CHU de Besançon et les établissements de santé franc-comtois font face aux ransomwares. La proximité de la Suisse génère des flux économiques transfrontaliers et des besoins de conformité croisée RGPD/LPD.",
      sectors: [
        "Microtechniques et horlogerie (Témis, PME précision)",
        "Dispositifs médicaux et santé (ISO 13485, MDR)",
        "Numérique et startups (technopole Témis)",
        "Industrie mécanique et décolletage",
        "Santé (CHU Besançon, cliniques Doubs)",
        "Collectivités et Grand Besançon Métropole",
      ],
      neighborhoods: [
        "Centre-ville historique (quartier Saint-Jean)",
        "Témis (technopole nord, microtechniques)",
        "Planoise et zones d'activités ouest",
        "Chalezeule et zone industrielle est",
        "Pontarlier et Haut-Doubs (industrie, frontaliers)",
        "Montbéliard et Pays de Montbéliard (automobile PSA)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une entreprise de microtechniques ou de dispositifs médicaux à Besançon ?",
          a: "Un audit de sécurité pour une PME de microtechniques ou de dispositifs médicaux à Besançon intégrant les exigences ISO 13485 ou MDR européen se situe entre 7 000 et 16 000 € HT. Pour les entreprises soumises à une certification MDR, CyberSecure propose des audits de conformité cybersécurité selon l'Article 5 du règlement UE 2017/745. Un pentest applicatif pour une plateforme de gestion de données patients débute à 5 000 € HT.",
        },
        {
          q: "Quel délai pour un test d'intrusion réseau à Besançon ?",
          a: "Un test d'intrusion réseau pour une PME bisontine dure 4 à 7 jours ouvrés. Pour une ETI avec plusieurs sites ou des accès frontaliers vers la Suisse, comptez 6 à 10 jours. L'audit Active Directory seul est réalisable en 2 à 4 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les données de R&D et les brevets des entreprises de microtechniques à Besançon ?",
          a: "Les entreprises du technopôle Témis développent des savoir-faire en optique, microsystèmes et systèmes embarqués qui constituent des cibles d'espionnage industriel. CyberSecure réalise des audits de classification des données sensibles, des tests d'exfiltration, des revues des droits d'accès aux fichiers de conception (CAO, plans, brevets) et des évaluations de la sécurité des portails de collaboration avec les partenaires. Nous recommandons des solutions de DRM pour protéger les fichiers de propriété industrielle.",
        },
        {
          q: "CyberSecure intervient-il sur site à Besançon et dans le Doubs ?",
          a: "Oui, nos consultants se déplacent à Besançon, Montbéliard, Pontarlier, Baume-les-Dames et dans tout le département Doubs. Nous couvrons également la Haute-Saône (Vesoul) et le Territoire de Belfort pour les groupes ayant des sites multiples en Bourgogne-Franche-Comté. Intervention sous 72h à Besançon.",
        },
        {
          q: "Que faire en cas de cyberattaque à Besançon — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les entreprises ayant des accès à des partenaires suisses, notre équipe coordonne si nécessaire avec le CERT de la Confédération helvétique. Nous pouvons être sur site à Besançon dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBesancon;
