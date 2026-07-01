import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteOrleans = () => (
  <CityLandingPage
    data={{
      city: "Orléans",
      citySlug: "orleans",
      region: "Centre-Val de Loire",
      postalCode: "45000",
      intro: "CyberSecure réalise des audits de sécurité informatique, pentests et tests d'intrusion à Orléans pour les PME et ETI du Loiret, avec une expertise sur les secteurs pharmaceutique, cosmétique et logistique qui font d'Orléans un hub économique majeur du Centre-Val de Loire. Notre cabinet qualifié PASSI ANSSI intervient sur site à Orléans pour protéger vos systèmes d'information contre les cybermenaces ciblant ces secteurs à haute valeur.",
      localContext: "Orléans est un pôle pharmaceutique et cosmétique d'envergure nationale avec la présence du groupe Servier (l'un des premiers laboratoires pharmaceutiques français indépendants), de L'Oréal et de nombreux façonniers et sous-traitants dont les données de formulation et les processus de fabrication constituent des secrets industriels à protéger absolument. La plateforme logistique d'Orléans-Saran (dont Amazon, Geodis et ID Logistics) est l'une des plus importantes de France, avec des architectures IT d'entrepôt complexes mêlant WMS, robots et terminaux mobiles. La Loire à Vélo et le tourisme patrimonial génèrent une économie saisonnière nécessitant la sécurisation des plateformes de réservation. Le CHR d'Orléans et le tissu de cliniques privées du Loiret font face aux ransomwares ciblant le secteur de la santé.",
      sectors: [
        "Pharmaceutique et cosmétique (Servier, L'Oréal)",
        "Logistique et e-commerce (Amazon, Geodis, Saran)",
        "Santé (CHR Orléans, cliniques Loiret)",
        "Agriculture et agroalimentaire ligérien",
        "Numérique et ESN orléanaises",
        "Collectivités et Orléans Métropole",
      ],
      neighborhoods: [
        "Centre-ville et quartier de la Charpenterie",
        "La Source (universités, CHR, technopole)",
        "Saran (plateforme logistique, Amazon, Geodis)",
        "Saint-Jean-de-Braye (industrie, zones d'activités)",
        "Fleury-les-Aubrais et zone nord (ferroviaire)",
        "Pithiviers et Loiret rural (agroalimentaire)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité pour un laboratoire pharmaceutique à Orléans comme Servier ou un sous-traitant ?",
          a: "Un audit de sécurité informatique pour un site pharmaceutique à Orléans incluant la conformité GxP et Annex 11 se situe entre 12 000 et 35 000 € HT selon la taille du SI et le périmètre. Pour les PME sous-traitantes de Servier ou L'Oréal dans le Loiret, un audit ciblé débute à 5 500 € HT. CyberSecure maîtrise les référentiels pharmaceutiques (21 CFR Part 11, GAMP 5) et propose des devis personnalisés sous 48h.",
        },
        {
          q: "Quel délai pour un test d'intrusion réseau à Orléans ?",
          a: "Un test d'intrusion réseau pour une ETI orléanaise dure 5 à 9 jours ouvrés. Pour une plateforme logistique incluant les systèmes WMS et les équipements automatisés, comptez 7 à 12 jours. L'audit Active Directory seul est réalisable en 3 à 4 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment auditer la sécurité d'une plateforme logistique à Orléans-Saran (WMS, robots, IoT) ?",
          a: "Les entrepôts logistiques d'Orléans-Saran utilisent des architectures IT complexes mêlant WMS, convoyeurs automatisés, robots (cobots AGV), terminaux mobiles et WiFi d'entrepôt. CyberSecure réalise des audits incluant le test de pénétration du réseau WiFi industriel, la revue des accès fournisseurs et prestataires, l'évaluation des cloisonnements IT/OT et le test des interfaces web du WMS. Nous testons également la résistance aux attaques de type ransomware ciblant les systèmes de gestion d'entrepôt.",
        },
        {
          q: "CyberSecure intervient-il sur site à Orléans et dans le Loiret ?",
          a: "Oui, nos consultants se déplacent à Orléans, Saran, Saint-Jean-de-Braye, Fleury-les-Aubrais, Montargis, Pithiviers et dans l'ensemble du Loiret. Nous couvrons également l'Eure-et-Loir (Chartres) et le Loir-et-Cher (Blois) pour les groupes multisite du Centre-Val de Loire. Déploiement sous 48h à Orléans.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site pharmaceutique ou logistique à Orléans ?",
          a: "Contactez immédiatement le CERT de CyberSecure (disponible 24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les sites pharmaceutiques, activez votre plan de continuité BPF et informez l'ANSM si la production est impactée. Notre équipe peut être sur site à Orléans dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteOrleans;
