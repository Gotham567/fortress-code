import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuritePaysDeLaLoire = () => (
  <CityLandingPage
    data={{
      city: "Pays de la Loire",
      citySlug: "pays-de-la-loire",
      urlPath: "cybersecurite-pays-de-la-loire",
      region: "Pays de la Loire",
      postalCode: "44 / 49 / 53 / 72 / 85",
      intro: "CyberSecure est votre prestataire audit de sécurité Pays de la Loire : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Nantes, Saint-Nazaire, Angers, Le Mans, La Roche-sur-Yon et toute la région.",
      localContext: "Les Pays de la Loire combinent industrie navale et aéronautique, agroalimentaire et numérique. Nantes est la 4e métropole française, hub French Tech avec plus de 2 500 startups et scale-ups. Saint-Nazaire concentre les Chantiers de l'Atlantique (construction de paquebots et navires GNL) et Airbus (assemblage fuselages A320/A330). Le Mans est un bassin automobile (Renault, équipementiers). La Vendée est le 1er département agroalimentaire français (Lactalis, LDC, Les Mousquetaires). L'économie numérique ligérienne est en forte croissance, portée par le Digital League et la scène tech nantaise.",
      sectors: [
        "Naval et aéronautique (Chantiers de l'Atlantique, Airbus Saint-Nazaire)",
        "Automobile et équipementiers (Renault Le Mans, sous-traitants Sarthe)",
        "Agroalimentaire (Lactalis, Maine Viande, LDC, conserveries vendéennes)",
        "Numérique et tech (French Tech Nantes, startups ligériennes, Digital League)",
        "Santé (CHU Nantes, CHU Angers, cliniques régionales)",
        "Énergie offshore (EMR, éolien offshore Saint-Nazaire, parc de Guérande)",
        "Commerce et distribution (Fnac Darty, GMS régionaux)",
        "Collectivités (Nantes Métropole, Région Pays de la Loire)",
      ],
      neighborhoods: [
        "Nantes Métropole – Rezé – Saint-Herblain (44)",
        "Saint-Nazaire Agglomération – Montoir-de-Bretagne (44)",
        "Angers Loire Métropole – Cholet (49)",
        "Le Mans Métropole (72)",
        "La Roche-sur-Yon – Les Sables-d'Olonne (85)",
        "Laval – Mayenne (53)",
        "Saint-Jean-de-Monts – Les Herbiers (85)",
        "Châteaubriant – Ancenis-Saint-Géréon (44)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 5 départements des Pays de la Loire ?",
          a: "Oui, CyberSecure intervient dans les cinq départements : Loire-Atlantique (44), Maine-et-Loire (49), Mayenne (53), Sarthe (72) et Vendée (85). Nos consultants se déplacent sur site partout dans la région, des métropoles aux zones rurales et littorales. CERT d'urgence 24/7 disponible.",
        },
        {
          q: "Les Chantiers de l'Atlantique et Airbus Saint-Nazaire sont-ils soumis à NIS2 ?",
          a: "Oui. Les Chantiers de l'Atlantique (construction navale militaire et civile) et Airbus (assemblage des fuselages) sont des entités importantes NIS2 dans les secteurs transport et défense. Leurs sous-traitants de la zone industrielle de Saint-Nazaire (plus de 50 salariés) sont également concernés. CyberSecure accompagne l'écosystème industriel nazerais dans cette mise en conformité.",
        },
        {
          q: "Le parc éolien offshore de Saint-Nazaire est-il une infrastructure critique ?",
          a: "Oui. Le parc éolien offshore de Saint-Nazaire (80 éoliennes, 480 MW) exploité par EDF Renouvelables est une infrastructure critique dans le secteur énergie NIS2. Les systèmes SCADA de supervision du parc sont des cibles. La filière ENR offshore émergente (projets Guérande, Noirmoutier) créera de nouvelles infrastructures critiques dans la région. CyberSecure propose des audits OT pour les opérateurs d'énergie renouvelable.",
        },
        {
          q: "La scène tech nantaise a-t-elle des besoins spécifiques en sécurité cloud ?",
          a: "Nantes est l'une des premières communautés French Tech hors Paris. Les startups ligériennes ont des besoins croissants : sécurisation des architectures cloud AWS/Azure/GCP, conformité RGPD dès le démarrage, audit de sécurité avant levée de fonds (exigé en série A/B), SOC 2 Type II pour les SaaS B2B. CyberSecure propose des packages startup adaptés aux budgets des entreprises en amorçage et des offres fractionnées pour les scale-ups.",
        },
        {
          q: "Quels financements pour un audit cybersécurité en Pays de la Loire ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Pays de la Loire via ses dispositifs de soutien numérique (fonds FEDER, programme Numérique en Entreprise). Les CCI régionales (CCI Loire-Atlantique, CCI Maine-et-Loire, CCI Vendée). BPI France Pays de la Loire — prêts numériques et garanties. La Digital League accompagne ses membres avec des diagnostics co-financés.",
        },
      ],
    }}
  />
);

export default AuditSecuritePaysDeLaLoire;
