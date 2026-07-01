import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteParis = () => (
  <CityLandingPage
    data={{
      city: "Paris",
      citySlug: "paris",
      urlPath: "cybersecurite-paris",
      region: "Île-de-France",
      postalCode: "75000",
      intro: "CyberSecure, cabinet PASSI qualifié ANSSI, accompagne les PME, ETI et grandes entreprises parisiennes avec des audits de sécurité informatique, des pentests et une cellule CERT disponible 24h/24. Finance, avocats, luxe, startups et CAC 40 : notre cabinet PASSI Paris intervient sur tout le territoire francilien.",
      localContext: "Paris concentre les sièges sociaux des grands groupes du CAC 40, des milliers de cabinets d'avocats et de conseil, les fintech du quartier de La Défense, les maisons de luxe du Triangle d'Or et des milliers de PME dans tous les secteurs. La densité économique de la capitale en fait la zone la plus ciblée par les ransomwares, le cyberespionnage et le vol de données confidentielles en France. Les cabinets d'avocats, les banques et les entreprises du luxe parisiens font l'objet d'attaques ciblées de plus en plus sophistiquées visant leurs données clients stratégiques. CyberSecure intervient sur Paris et dans toute l'Île-de-France.",
      sectors: [
        "Finance, banque et assurance (BNP, AXA, Amundi)",
        "Cabinets d'avocats et conseil (Big 4, top tier)",
        "Luxe et mode (LVMH, Kering, Hermès)",
        "Médias, communication et publicité",
        "Startups, scale-ups et French Tech",
        "Institutions publiques et administrations",
      ],
      neighborhoods: [
        "Paris 8e, 9e, 16e (sièges sociaux, Triangle d'Or)",
        "La Défense et Neuilly-sur-Seine",
        "Boulogne-Billancourt, Levallois-Perret",
        "Le Marais, Sentier (startups, tech)",
        "Saint-Denis, Montreuil, Vincennes",
        "Versailles, Massy, Saclay (Paris-Saclay)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Paris pour une PME ou ETI ?",
          a: "Un pentest web pour une PME parisienne démarre à 4 000 € HT pour une application. Un pentest réseau complet pour une ETI varie entre 8 000 et 20 000 € HT selon le périmètre. Pour un cabinet d'avocats ou une banque souhaitant un Red Team simulant une attaque ciblée, le budget est généralement compris entre 20 000 et 50 000 € HT. Un audit Active Directory pour sécuriser vos comptes administrateurs coûte entre 5 000 et 12 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit de sécurité informatique à Paris ?",
          a: "Un audit organisationnel prend 3 à 5 jours. Un audit technique complet (réseau, Active Directory, applications) prend 5 à 15 jours selon la taille de votre SI. Un pentest Red Team pour un grand groupe peut s'étendre sur 4 à 8 semaines. Nous pouvons intervenir sous 5 jours ouvrés pour les urgences. Les audits à distance réduisent les délais pour les phases de revue de configuration et d'analyse documentaire.",
        },
        {
          q: "Comment sécuriser un cabinet d'avocats parisien contre les fuites de données ?",
          a: "Les cabinets d'avocats gèrent des dossiers hautement confidentiels (secret professionnel) qui en font des cibles de premier plan pour le cyberespionnage et le chantage. Notre audit pour cabinets d'avocats couvre la sécurité des messageries et des échanges clients (chiffrement, DLP), l'audit des accès au DMS (document management system), la sécurité des connexions distantes des associés et collaborateurs, la revue des politiques de classification des documents et la conformité RGPD pour les données personnelles des clients.",
        },
        {
          q: "Intervenez-vous sur site à Paris et en Île-de-France ?",
          a: "Oui. Nos consultants interviennent sur site dans tout Paris intramuros et en Île-de-France (Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Essonne, Yvelines, Val-d'Oise). Nous proposons aussi des audits à distance pour réduire les coûts sans compromettre la qualité. Pour les grands groupes avec plusieurs sites, nous organisons des missions coordonnées multi-sites.",
        },
        {
          q: "Que faire en cas de cyberattaque à Paris ?",
          a: "Contactez notre CERT immédiatement au 07 69 32 30 19 (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau sans les éteindre pour préserver les traces. Si vous êtes un OIV ou soumis à NIS2, notifiez l'ANSSI dans les délais réglementaires. Informez votre DPO pour la notification CNIL sous 72h si des données personnelles sont compromises. Nos experts CyberSecure déploient une équipe de réponse à incident sous 4 heures à Paris.",
        },
      ],
    }}
  />
);

export default AuditSecuriteParis;
