import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCreteil = () => (
  <CityLandingPage
    data={{
      city: "Créteil",
      citySlug: "creteil",
      region: "Île-de-France",
      postalCode: "94000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits de sécurité informatique et des pentests à Créteil pour les PME, établissements de santé et organismes du Val-de-Marne. CHU Henri-Mondor, collectivités et entreprises du bassin Sud-Est parisien : nos experts assurent votre cybersécurité en Île-de-France.",
      localContext: "Créteil est la préfecture du Val-de-Marne et abrite le CHU Henri-Mondor (l'un des plus grands hôpitaux d'Europe), le centre commercial Créteil Soleil et un dense tissu de PME de services, de santé et d'administration. Le secteur de la santé est particulièrement exposé aux cyberattaques : les hôpitaux franciliens ont subi plusieurs incidents majeurs ces dernières années, paralysant les services aux patients. Les collectivités territoriales et les PME de services aux entreprises du Val-de-Marne font face à une recrudescence des attaques par phishing et ransomware. CyberSecure intervient à Créteil, Vitry-sur-Seine, Maisons-Alfort, Saint-Maur-des-Fossés et dans tout le Val-de-Marne.",
      sectors: [
        "Santé et établissements hospitaliers (CHU Henri-Mondor)",
        "Commerce et centres commerciaux",
        "Collectivités et administrations",
        "Services aux entreprises",
        "Immobilier et promotion",
        "PME industrielles et artisanat",
      ],
      neighborhoods: [
        "Créteil Centre et Mont-Mesly",
        "Créteil Soleil et La Habette",
        "Vitry-sur-Seine et Choisy-le-Roi",
        "Maisons-Alfort et Alfortville",
        "Saint-Maur-des-Fossés et Vincennes",
        "Tout le Val-de-Marne",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une PME du Val-de-Marne à Créteil ?",
          a: "Un pentest web applicatif pour une PME de Créteil démarre à 4 000 € HT pour une application. Un pentest réseau interne pour une structure de 20 à 100 salariés varie entre 8 000 et 20 000 € HT selon le périmètre. Pour les établissements de santé, un audit complet incluant les systèmes de gestion hospitalière (SIH) et les équipements médicaux connectés est généralement compris entre 15 000 et 35 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour un établissement de santé à Créteil ?",
          a: "Un audit de cybersécurité pour un établissement de santé de Créteil dure généralement 10 à 20 jours selon la taille. Il couvre la revue organisationnelle (PGI, RGPD de santé), l'audit du SIH et des applications médicales, le test des équipements médicaux connectés (IoMT), la sécurité des accès distants des médecins et un plan de remédiation priorisé. Nous intervenons sans impacter la continuité des soins.",
        },
        {
          q: "Comment sécuriser un CHU ou un hôpital comme Henri-Mondor contre les cyberattaques ?",
          a: "La sécurisation d'un établissement de santé passe par plusieurs axes prioritaires : segmentation réseau entre le SI administratif et les réseaux médicaux, audit des équipements médicaux connectés (scanners, IRM, pompes), sécurisation du SIH et des accès distants, formation des équipes soignantes au phishing et plan de continuité (PCA) testé. Nos audits suivent les référentiels PGSSI-S (Politique Générale de Sécurité des SI de Santé) de l'ANS et les guides ANSSI pour les hôpitaux.",
        },
        {
          q: "Intervenez-vous sur site à Créteil et dans le Val-de-Marne ?",
          a: "Oui. Nos consultants se déplacent sur site à Créteil, Vitry-sur-Seine, Maisons-Alfort, Saint-Maur-des-Fossés, Vincennes, Ivry-sur-Seine et dans tout le Val-de-Marne. Nous intervenons également à Paris intramuros et dans les départements limitrophes (Seine-Saint-Denis, Essonne, Marne) pour les missions régionales.",
        },
        {
          q: "Que faire si mon entreprise ou administration à Créteil subit une cyberattaque ?",
          a: "Contactez notre CERT immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau sans les éteindre pour préserver les preuves. Si vous êtes un établissement de santé, activez votre plan de continuité d'activité (PCA) et basculez sur les procédures dégradées pour maintenir la prise en charge des patients. Notifiez l'ANSSI (CERT-FR) si vous êtes un opérateur de service essentiel et la CNIL sous 72h si des données de santé sont impliquées. CyberSecure intervient sous 4 heures à Créteil.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCreteil;
