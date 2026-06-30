import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCentreValDeLoire = () => (
  <CityLandingPage
    data={{
      city: "Centre-Val de Loire",
      citySlug: "centre-val-de-loire",
      urlPath: "cybersecurite-centre-val-de-loire",
      region: "Centre-Val de Loire",
      postalCode: "18 / 28 / 36 / 37 / 41 / 45",
      intro: "CyberSecure est votre prestataire audit de sécurité Centre-Val de Loire : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises d'Orléans, Tours, Chartres, Bourges, Blois, Châteauroux et toute la région.",
      localContext: "Le Centre-Val de Loire est une région industrielle dense, positionnée entre Paris et les grandes régions de l'ouest et du sud. Orléans accueille des industries pharmaceutiques majeures (Servier, Novartis), une chimie fine et une scène numérique en développement. Tours est un pôle universitaire et abrite la microélectronique (STMicroelectronics Tours). Chartres concentre le secteur cosmétique et pharmaceutique (Cosmétologue, laboratoires). La région est traversée par l'axe A10/A11 qui en fait un hub logistique national (Amazon, SEGRO, entrepôts automatisés). L'énergie nucléaire est présente avec les centrales de Saint-Laurent-des-Eaux et Belleville-sur-Loire.",
      sectors: [
        "Pharmaceutique et cosmétique (Servier Orléans, laboratoires Chartres, Caudalie)",
        "Microélectronique (STMicroelectronics Tours, industrie électronique 37)",
        "Logistique et e-commerce (Amazon, SEGRO, entrepôts automatisés axe A10)",
        "Énergie nucléaire (Saint-Laurent-des-Eaux 41, Belleville-sur-Loire 18)",
        "Agroalimentaire et viticulture (vins de Loire AOP, céréales Beauce)",
        "Aéronautique (sous-traitance Safran, Zodiac Chartres/Dreux)",
        "Tourisme (châteaux de la Loire, Amboise, Chenonceau, Chambord)",
        "Collectivités (Orléans Métropole, Tours Métropole, Région Centre-VdL)",
      ],
      neighborhoods: [
        "Orléans Métropole – Saint-Jean-de-Braye – Fleury-les-Aubrais (45)",
        "Tours Métropole Val de Loire – Saint-Cyr-sur-Loire (37)",
        "Chartres – Dreux – Châteaudun (28)",
        "Bourges – Vierzon – Saint-Amand-Montrond (18)",
        "Blois – Vendôme (41)",
        "Châteauroux – Issoudun (36)",
        "Amboise – Chinon – Loches (37)",
        "Gien – Montargis – Pithiviers (45)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 6 départements du Centre-Val de Loire ?",
          a: "Oui, CyberSecure intervient dans les six départements : Cher (18), Eure-et-Loir (28), Indre (36), Indre-et-Loire (37), Loir-et-Cher (41) et Loiret (45). La proximité avec Paris (moins de 2h de trajet depuis toute la région) nous permet des délais d'intervention courts. CERT d'urgence 24/7.",
        },
        {
          q: "Les laboratoires pharmaceutiques du Loiret sont-ils soumis à NIS2 ?",
          a: "Oui. Les laboratoires pharmaceutiques du Loiret (Servier à Gidy et Orléans, Novartis) sont des entités importantes NIS2 dans le secteur santé. Les enjeux cyber incluent la protection de la propriété intellectuelle (brevets, formules), la sécurité des données d'essais cliniques (RGPD données de santé catégorie particulière), et la continuité de production. CyberSecure accompagne les industriels pharmaceutiques de la région.",
        },
        {
          q: "Les entrepôts logistiques automatisés de la région sont-ils des risques cyber ?",
          a: "Oui. La région Centre-Val de Loire concentre d'importants entrepôts logistiques (Amazon Saint-Aignan-de-Grand-Lieu, SEGRO Orléans) dont les WMS (Warehouse Management Systems) et systèmes automatisés (convoyeurs, AGV, drones de picking) sont connectés et exposés. Ces systèmes OT sont des cibles privilégiées pour les ransomwares. CyberSecure propose des audits de sécurité OT/IT adaptés à la logistique.",
        },
        {
          q: "Les centrales nucléaires de la région sont-elles concernées par NIS2 ?",
          a: "Oui. Les centrales de Saint-Laurent-des-Eaux (EDF, Loir-et-Cher) et Belleville-sur-Loire (EDF, Cher) sont des opérateurs d'importance vitale (OIV) soumis à la directive NIS2 dans le secteur énergie, avec des obligations de sécurité renforcées. Leurs prestataires et sous-traitants intervenant sur les systèmes industriels sont également dans le périmètre de sécurité réglementaire.",
        },
        {
          q: "Quels financements pour un audit cyber en Centre-Val de Loire ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit pour les PME. La Région Centre-Val de Loire via ses fonds FEDER et le programme Naissance d'une ETI. Les CCI régionales (CCI Loiret, CCI Indre-et-Loire, CCI Eure-et-Loir). BPI France Centre — prêts numériques et garanties. Des pôles de compétitivité (Cosmetic Valley, S2E2 énergie électrique) proposent aussi des accompagnements collectifs.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCentreValDeLoire;
