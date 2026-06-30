import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteHautsDeFrance = () => (
  <CityLandingPage
    data={{
      city: "Hauts-de-France",
      citySlug: "hauts-de-france",
      urlPath: "prestataire-cybersecurite-hauts-de-france",
      region: "Hauts-de-France",
      postalCode: "59 / 62",
      intro: "CyberSecure est votre prestataire cybersécurité Hauts-de-France : audit PASSI, pentest, conformité NIS2 et CERT d'urgence pour les PME, ETI et industries du Nord–Pas-de-Calais. Interventions sur Lille, Lens, Béthune, Arras, Valenciennes, Dunkerque, Calais et toute la région.",
      localContext: "La région Hauts-de-France concentre un tissu économique dense : industrie automobile (Renault Douai, Toyota Onnaing), logistique (corridor Nord-Europe), grande distribution (Leroy Merlin, Auchan), agroalimentaire, textile et une scène tech et startups croissante autour de Lille Métropole. Cette densité industrielle fait des Hauts-de-France une cible privilégiée des cyberattaques : ransomwares sur les chaînes logistiques, phishing ciblant les sous-traitants automobiles, intrusions sur les systèmes OT industriels. Le CERT-FR a recensé une augmentation de 40 % des incidents dans la région en 2024. CyberSecure intervient dans toute la région pour auditer, sécuriser et former vos équipes.",
      sectors: [
        "Industrie automobile et sous-traitance",
        "Logistique, transport et supply chain",
        "Grande distribution et e-commerce",
        "Agroalimentaire et industries alimentaires",
        "Startups et scale-ups tech (Lille, Roubaix)",
        "Santé, hôpitaux et cliniques",
        "Collectivités locales et administrations",
        "PME et ETI industrielles (Nord-Pas-de-Calais)",
      ],
      neighborhoods: [
        "Lille Métropole (MEL)",
        "Lens – Liévin",
        "Béthune – Bruay",
        "Arras et Pas-de-Calais",
        "Valenciennes – Maubeuge",
        "Dunkerque et littoral",
        "Calais – Boulogne-sur-Mer",
        "Amiens et Somme",
      ],
      faq: [
        {
          q: "Couvrez-vous toute la région Hauts-de-France ?",
          a: "Oui. CyberSecure intervient dans tous les départements des Hauts-de-France : Nord (59), Pas-de-Calais (62), Somme (80), Aisne (02) et Oise (60). Nos consultants se déplacent sur site ou interviennent à distance selon la nature de la mission. Réponse à incident et CERT disponibles 24/7 dans toute la région.",
        },
        {
          q: "Quels sont vos délais d'intervention dans les Hauts-de-France ?",
          a: "Pour les missions d'audit planifiées, nous pouvons démarrer sous 5 à 10 jours ouvrés. Pour les incidents cyber en urgence (ransomware, intrusion), notre CERT intervient sous 4 heures, que ce soit à Lille, Lens, Valenciennes ou Arras. Notre ligne d'urgence est disponible 24/7.",
        },
        {
          q: "Mon entreprise industrielle des Hauts-de-France est-elle concernée par NIS2 ?",
          a: "Très probablement si vous êtes dans l'industrie alimentaire, la logistique, la fabrication de véhicules ou la santé avec plus de 50 salariés ou 10 M€ de CA. Les sous-traitants de grands groupes (PSA, Toyota, Renault, Leroy Merlin) peuvent également être soumis à des exigences NIS2 via leurs donneurs d'ordre. Diagnostic NIS2 gratuit en 30 minutes.",
        },
        {
          q: "Quels financements existent pour un audit cybersécurité dans les Hauts-de-France ?",
          a: "Mon Aide Cyber (ANSSI) propose un accompagnement gratuit pour les PME. La Région Hauts-de-France et les CCI locales (CCI Nord de France, CCI Artois) proposent régulièrement des diagnostics co-financés. BPI France propose des prêts numériques pour financer les investissements sécurité. Nous vous guidons dans l'accès à ces dispositifs.",
        },
        {
          q: "Proposez-vous des formations cybersécurité pour les équipes dans les Hauts-de-France ?",
          a: "Oui. Nous proposons des formations et sensibilisations cybersécurité en présentiel dans toute la région : ateliers de sensibilisation phishing, formations des équipes IT, formation dirigeants (demi-journée). Nos formations sont éligibles aux OPCO et peuvent être financées par la formation professionnelle continue.",
        },
      ],
    }}
  />
);

export default AuditSecuriteHautsDeFrance;
