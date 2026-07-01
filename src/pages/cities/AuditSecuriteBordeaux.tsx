import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBordeaux = () => (
  <CityLandingPage
    data={{
      city: "Bordeaux",
      citySlug: "bordeaux",
      urlPath: "cybersecurite-bordeaux",
      region: "Nouvelle-Aquitaine",
      postalCode: "33000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des pentests et audits de sécurité informatique à Bordeaux pour les ETI de l'aéronautique, du vitivinicole et du numérique. Thales, Dassault, LVMH Grands Crus et les startups bordelaises font confiance à nos experts pour leurs tests d'intrusion en Nouvelle-Aquitaine.",
      localContext: "Bordeaux est un pôle économique majeur de Nouvelle-Aquitaine qui associe viticulture de prestige (LVMH, négociants Grands Crus), industrie aéronautique et de défense (Thales, Dassault Aviation, Airbus) et une scène numérique dynamique. Ces secteurs détiennent une propriété intellectuelle et des données commerciales à haute valeur qui en font des cibles prioritaires pour le cyberespionnage et les ransomwares à forte demande de rançon. Les grands châteaux et négociants viticoles gèrent des bases clients internationaux ultra-sensibles. CyberSecure intervient à Bordeaux, Mérignac, Pessac, Lormont et dans toute la Gironde.",
      sectors: [
        "Vitivinicole et négoce de vins (LVMH, Grands Crus)",
        "Aéronautique et défense (Thales, Dassault)",
        "Numérique et startups (French Tech Bordeaux)",
        "Tourisme et hôtellerie de luxe",
        "Santé et biotechnologies",
        "Logistique et port de Bordeaux",
      ],
      neighborhoods: [
        "Bordeaux Centre et Triangle d'Or",
        "Mérignac et zone aéronautique",
        "Pessac et Talence (campus)",
        "Lormont, Cenon, Floirac",
        "Libourne, Arcachon, Périgueux",
        "Toute la Gironde",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une ETI aéronautique ou viticole à Bordeaux ?",
          a: "Un pentest web applicatif pour une PME bordelaise démarre à 4 000 € HT. Pour une ETI du secteur aéronautique ou viticole avec une infrastructure complexe (réseau OT, applications ERP, accès partenaires), un pentest complet varie entre 12 000 et 30 000 € HT. Un test Red Team simulant une attaque ciblée (APT) est disponible à partir de 15 000 € HT pour les groupes souhaitant valider leur résilience. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité informatique à Bordeaux ?",
          a: "Un audit de sécurité pour une PME bordelaise dure 3 à 7 jours selon le périmètre. Un audit complet pour une ETI — couvrant réseau, Active Directory, applications, SI industriels et organisation — nécessite 10 à 20 jours. Pour les sociétés viticoles ou les châteaux avec des systèmes de gestion spécifiques, nous adaptons le périmètre à vos contraintes saisonnières.",
        },
        {
          q: "Comment protéger les données clients et contrats d'un grand négociant en vins à Bordeaux ?",
          a: "Les négociants et châteaux bordelais gèrent des bases de données clients internationaux très sensibles (coordonnées, historiques d'achat, conditions commerciales) ainsi que des accès aux plateformes de vente en ligne. Notre pentest applicatif couvre l'audit du CRM, des interfaces e-commerce, des API partenaires et des accès distants des commerciaux. Nous vérifions également la conformité RGPD des traitements de données et la sécurité des emails.",
        },
        {
          q: "Intervenez-vous sur site à Bordeaux et en Nouvelle-Aquitaine ?",
          a: "Oui. Nos consultants se déplacent sur site à Bordeaux, Mérignac, Pessac, Libourne, Arcachon, Périgueux, Bayonne et dans toute la région Nouvelle-Aquitaine. Nous couvrons également les sites industriels en zones périurbaines et rurales pour les ETI avec plusieurs établissements. Les interventions sur les sites aéronautiques sont planifiées en accord avec vos plans de sécurité.",
        },
        {
          q: "Que faire en cas de cyberattaque contre mon entreprise bordelaise ?",
          a: "Contactez immédiatement notre cellule CERT (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau sans les éteindre pour préserver les traces numériques. Ne payez pas de rançon sans avis d'expert. Informez votre direction juridique en cas de vol de données commerciales sensibles et notifiez la CNIL si des données personnelles sont exposées. CyberSecure déploie une équipe à Bordeaux sous 4 heures pour contenir l'incident et piloter la reprise d'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBordeaux;
