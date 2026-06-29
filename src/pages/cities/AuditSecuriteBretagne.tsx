import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBretagne = () => (
  <CityLandingPage
    data={{
      city: "Bretagne",
      citySlug: "bretagne",
      region: "Bretagne",
      postalCode: "22 / 29 / 35 / 56",
      intro: "CyberSecure est votre prestataire d'audit cybersécurité Bretagne : pentest, audit NIS2, conformité RGPD, réponse aux incidents pour les entreprises de Rennes, Brest, Quimper, Lorient, Vannes et Saint-Brieuc.",
      localContext: "La Bretagne présente un profil cyber spécifique : Rennes est un pôle majeur de la cybersécurité française (ANSSI y a une antenne, Orange Cyberdefense y est présent, Thales DMS y a son centre R&D), Brest abrite la plus importante base navale militaire française avec des enjeux de défense, et le tissu économique breton inclut une proportion élevée d'agroalimentaires (Lactalis, Bigard, coopératives) et de PME de pêche industrielle exposées aux cyberrisques. CyberSecure a des experts dédiés à la région bretonne, connaissance approfondie du tissu économique et des spécificités réglementaires.",
      sectors: [
        "Défense et naval (Marine Nationale, Naval Group, DGA Techniques navales Brest)",
        "Cybersécurité et tech (Orange Cyberdefense, Thales DMS, startups rennaises)",
        "Agroalimentaire et coopératives (Lactalis, Bigard, Even, Roullier)",
        "Pêche industrielle et conserveries (Quimper, Concarneau, Douarnenez)",
        "Collectivités (Rennes Métropole, Brest Métropole, Région Bretagne)",
        "Santé (CHU Rennes, CHRU Brest, hôpitaux bretons)",
        "Tourisme balnéaire (Morbihan, Côtes-d'Armor, Finistère)",
        "Agriculture et élevage (Finistère, Morbihan)",
      ],
      neighborhoods: [
        "Rennes Métropole – Cesson-Sévigné – Saint-Jacques-de-la-Lande",
        "Brest Métropole – Gouesnou – Guipavas",
        "Quimper – Quimper Cornouaille (29)",
        "Lorient Agglomération – Lanester (56)",
        "Vannes Agglomération – Golfe du Morbihan",
        "Saint-Brieuc Armor Agglomération (22)",
        "Saint-Malo – Dinard – Cancale (35)",
        "Morlaix – Carhaix – Lannion (22/29)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 4 départements bretons pour les audits de sécurité ?",
          a: "Oui, CyberSecure intervient dans les quatre départements de Bretagne : Côtes-d'Armor (22), Finistère (29), Ille-et-Vilaine (35) et Morbihan (56). Nos consultants se déplacent sur site partout en Bretagne — y compris dans les îles (Belle-Île, Île d'Ouessant) si nécessaire. CERT d'urgence 24/7 dans toute la région. Délai d'intervention standard : 5-10 jours ouvrés pour les audits planifiés, moins de 4h pour les incidents urgents.",
        },
        {
          q: "Avez-vous de l'expérience avec les entreprises de défense brestoise ?",
          a: "CyberSecure accompagne les sous-traitants civils de la défense navale brestoise : fournisseurs de Naval Group, prestataires IT de la base navale, équipementiers embarqués. Les organismes militaires (Marine Nationale, DGA) ont leurs propres prestataires accrédités MINARM. En revanche, les entreprises civiles travaillant avec ces organismes ont besoin d'audits de sécurité conformes aux exigences de leurs donneurs d'ordre — c'est là que CyberSecure intervient.",
        },
        {
          q: "Les coopératives agroalimentaires bretonnes sont-elles soumises à NIS2 ?",
          a: "Les grandes coopératives agroalimentaires bretonnes (Lactalis, Even, Roullier, coopératives laitières...) dépassant 250 salariés ou 50 M€ de CA sont des entités importantes NIS2 dans le secteur alimentation. Les coopératives entre 50 et 249 salariés (10-50 M€ CA) le sont aussi. CyberSecure propose un diagnostic NIS2 gratuit adapté au secteur agroalimentaire breton : inventaire IT/OT, gap analysis article 21, plan de conformité priorisé.",
        },
        {
          q: "Y a-t-il des financements disponibles pour un audit cyber en Bretagne ?",
          a: "Oui : Mon Aide Cyber (ANSSI) — diagnostic gratuit pour les PME. La Région Bretagne co-finance les diagnostics numériques via son programme Breizh Up. Les CCI bretonnes (CCI Rennes, CCI Brest Iroise, CCI Bretagne) proposent des accompagnements co-financés. BPI France Bretagne propose des prêts pour les investissements cyber. Le Pôle d'Excellence Cyber (Rennes) propose des ressources et mises en relation. CyberSecure vous aide à naviguer ces dispositifs.",
        },
        {
          q: "Mon entreprise de Rennes est en croissance — quand faut-il s'occuper de la cybersécurité ?",
          a: "La réponse est : dès maintenant, avant que vous en ayez besoin d'urgence. Les entreprises rennaises en croissance font face à 3 risques principaux : l'expansion de la surface d'attaque (nouveaux salariés, nouveaux outils), les exigences de sécurité des grands clients (questionnaires, audits fournisseurs), et les obligations réglementaires (NIS2 dès 50 salariés dans certains secteurs). CyberSecure propose un audit de départ à coût maîtrisé — pensez-y comme un investissement avant qu'un incident ne vous coûte 10 à 100 fois plus.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBretagne;
