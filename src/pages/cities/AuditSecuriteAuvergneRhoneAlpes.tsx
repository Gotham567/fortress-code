import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAuvergneRhoneAlpes = () => (
  <CityLandingPage
    data={{
      city: "Auvergne-Rhône-Alpes",
      citySlug: "auvergne-rhone-alpes",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "01 / 03 / 07 / 15 / 26 / 38 / 42 / 43 / 63 / 69 / 73 / 74",
      intro: "CyberSecure est votre prestataire audit de sécurité Auvergne-Rhône-Alpes : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Lyon, Grenoble, Saint-Étienne, Clermont-Ferrand, Annecy, Chambéry et toute la région.",
      localContext: "Auvergne-Rhône-Alpes est la 2e région économique française après l'Île-de-France. Lyon est la capitale économique avec un tissu industriel et numérique dense (French Tech Lyon, Axeleo). Grenoble est un pôle mondial de la microélectronique et de la recherche (STMicroelectronics, Soitec, CEA-Leti). Saint-Étienne a une tradition industrielle forte (métallurgie, design). Clermont-Ferrand est dominée par Michelin (4e groupe pneumatique mondial). La Savoie et Haute-Savoie concentrent des industries de précision, le tourisme et une économie transfrontalière avec la Suisse. La région est la 1ère destination de datacenter hors Île-de-France.",
      sectors: [
        "Microélectronique et semiconducteurs (STMicroelectronics, Soitec, Grenoble)",
        "Industrie mécanique et automobile (Michelin Clermont, équipementiers)",
        "Chimie et pharmacie (Sanofi, Arkema, industries rhodaniennes)",
        "Numérique et tech (French Tech Lyon, Axeleo, startups alpines)",
        "Énergie (EDF Isère, nucléaire, hydroélectricité alpine, Enalp)",
        "Tourisme et montagne (stations alpines, domaines skiables connectés)",
        "Santé (CHU Lyon, CHU Grenoble, centres de recherche INSERM)",
        "Collectivités (Métropole de Lyon, Grenoble-Alpes Métropole, Région AuRA)",
      ],
      neighborhoods: [
        "Métropole de Lyon – Villeurbanne – Bron (69)",
        "Grenoble-Alpes Métropole – Meylan – Crolles (38)",
        "Saint-Étienne Métropole (42)",
        "Clermont Auvergne Métropole (63)",
        "Annecy – Cran-Gevrier (74)",
        "Chambéry – Aix-les-Bains (73)",
        "Valence – Romans-sur-Isère (26)",
        "Moulins – Vichy – Montluçon (03)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 12 départements d'Auvergne-Rhône-Alpes ?",
          a: "Oui, CyberSecure intervient dans les douze départements : Ain (01), Allier (03), Ardèche (07), Cantal (15), Drôme (26), Isère (38), Loire (42), Haute-Loire (43), Puy-de-Dôme (63), Rhône (69), Savoie (73) et Haute-Savoie (74). Nos consultants se déplacent partout dans la région. CERT d'urgence 24/7.",
        },
        {
          q: "STMicroelectronics Grenoble et ses fournisseurs sont-ils soumis à NIS2 ?",
          a: "STMicroelectronics (semiconducteurs) est une entité essentielle NIS2 dans le secteur des infrastructures numériques. Ses sous-traitants grenoblois dépassant 50 salariés sont des entités importantes. L'écosystème de la microélectronique grenobloise (Soitec, Lynred, Dolphin Design) a aussi des enjeux de protection de propriété intellectuelle critiques. CyberSecure propose des audits de sécurité adaptés aux industries de haute technologie.",
        },
        {
          q: "Michelin à Clermont-Ferrand est-il concerné par NIS2 ?",
          a: "Oui. Michelin (4e pneumaticien mondial, siège à Clermont-Ferrand) est une entité importante NIS2 dans le secteur fabrication de matériels de transport. Ses systèmes industriels (OT/IT) et sa chaîne d'approvisionnement mondiale sont des cibles pour le cyberespionnage industriel. Les sous-traitants et équipementiers clermontois entrant dans la chaîne de valeur Michelin sont également dans le périmètre. CyberSecure accompagne l'écosystème industriel auvergnat.",
        },
        {
          q: "Les stations de ski alpines ont-elles des obligations cyber ?",
          a: "Les grandes stations alpines (Chamonix, Courchevel, Les Menuires, Val-d'Isère) exploitent des systèmes informatiques complexes : billetterie numérique, remontées mécaniques connectées (SCADA), systèmes de réservation, paiement en ligne. Ils traitent des millions de données clients touristiques (RGPD). Les sociétés d'exploitation de remontées mécaniques dépassant les seuils NIS2 entrent dans la catégorie transport. CyberSecure connaît ces enjeux.",
        },
        {
          q: "Quels financements pour un audit cyber en Auvergne-Rhône-Alpes ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région AuRA via ses fonds FEDER et le programme Auvergne-Rhône-Alpes Entreprises. Les CCI régionales (CCI Lyon Métropole, CCI Grenoble, CCI Clermont). BPI France Auvergne-Rhône-Alpes — prêts numériques. Des clusters tech comme Axeleo (Lyon), Minalogic (Grenoble) et Biopôle (Lyon) accompagnent leurs membres.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAuvergneRhoneAlpes;
