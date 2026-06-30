import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteIleDeFrance = () => (
  <CityLandingPage
    data={{
      city: "Île-de-France",
      citySlug: "ile-de-france",
      urlPath: "cybersecurite-ile-de-france",
      region: "Île-de-France",
      postalCode: "75 / 77 / 78 / 91 / 92 / 93 / 94 / 95",
      intro: "CyberSecure est votre prestataire d'audit cybersécurité Île-de-France : pentest PASSI certifié, audit NIS2, conformité RGPD et DORA, réponse aux incidents 24/7 pour les groupes du CAC40, ETI, startups, fintechs, cabinets d'avocats et collectivités franciliens.",
      localContext: "L'Île-de-France concentre les sièges sociaux des plus grandes entreprises françaises et européennes, les institutions financières de La Défense, les ministères et administrations centrales, et l'essentiel des startups françaises. Cette densité fait de la région la cible numéro 1 des cyberattaques sophistiquées en France : groupes APT ciblant la défense et l'aéronautique (Safran, Thales, Airbus), Business Email Compromise (BEC) ciblant les entreprises du CAC40, ransomwares sur les PME de Seine-Saint-Denis et du Val-d'Oise, phishing ciblant les fintechs de Paris. CyberSecure dispose d'équipes dédiées en Île-de-France pour les missions urgentes et les projets de grande envergure.",
      sectors: [
        "Finance, banque et assurance (La Défense, Paris 8e-9e-17e)",
        "Fintechs et néobanques (Paris, Neuilly)",
        "Aéronautique et défense (Safran, Thales, Airbus Defence)",
        "Tech et startups (Station F, BPI France, VC)",
        "Santé et biotech (AP-HP, Institut Pasteur, Gustave Roussy)",
        "Médias, presse et divertissement",
        "Cabinets d'avocats et notaires (Paris Palais)",
        "Administrations centrales et ministères",
      ],
      neighborhoods: [
        "Paris 1-4e (finance, droit, tech)",
        "Paris 8-9-17e (banque, assurance, grands groupes)",
        "La Défense – Nanterre – Puteaux – Courbevoie (92)",
        "Boulogne-Billancourt – Issy-les-Moulineaux (92)",
        "Seine-Saint-Denis – Montreuil – Pantin (93)",
        "Créteil – Ivry – Vitry – Charenton (94)",
        "Versailles – Saint-Quentin-en-Yvelines – Vélizy (78)",
        "Marne-la-Vallée – Évry – Saclay (77/91)",
      ],
      faq: [
        {
          q: "Êtes-vous qualifié PASSI pour réaliser des audits en Île-de-France ?",
          a: "CyberSecure réalise des audits en partenariat avec des prestataires qualifiés PASSI (labellisés ANSSI) pour les missions nécessitant cette qualification : audits d'OIV, d'administrations, d'entités NIS2 essentielles. Pour les PME et ETI n'ayant pas d'obligation de PASSI, nos propres auditeurs certifiés (OSCP, CEH, CISM) réalisent des audits de niveau équivalent à des tarifs compétitifs. Nos rapports suivent les standards ANSSI.",
        },
        {
          q: "Intervenez-vous sur La Défense et le 92 pour des audits de grands groupes ?",
          a: "Oui, La Défense et les Hauts-de-Seine représentent une part importante de nos missions : audits de sécurité pour des banques et assurances, pentests d'applications financières, conformité DORA pour les entreprises d'investissement, revues de sécurité avant acquisitions. Nous sommes habitués aux contraintes des grands groupes (procédures de sécurité physique, habilitations requises, validation juridique des périmètres de test).",
        },
        {
          q: "Pouvez-vous réaliser un audit de sécurité pour une startup francilienne avant sa levée de fonds ?",
          a: "Oui, c'est l'une de nos spécialités. Les VC (Kima Ventures, Partech, Idinvest, Bpifrance Investissement) réalisent systématiquement une due diligence sécurité en série A. Nous réalisons des audits pré-levée de fonds adaptés : revue de l'architecture cloud, audit IAM, rapport de vulnérabilités avec remédiation, synthèse exécutive pour les investisseurs. Délai express possible sous 5 jours ouvrés.",
        },
        {
          q: "Quels sont les délais d'intervention en Île-de-France ?",
          a: "Pour les missions planifiées, démarrage sous 3 à 7 jours ouvrés. Pour les incidents urgents (ransomware, intrusion, fuite de données), notre CERT intervient sous 2 heures en Île-de-France — en présentiel ou en remote selon la situation. Nous disposons de consultants basés à Paris et en petite couronne pour les interventions physiques urgentes.",
        },
        {
          q: "Proposez-vous des audits de conformité DORA pour les fintechs parisiennes ?",
          a: "Oui. DORA (Digital Operational Resilience Act) s'applique aux banques, assurances, fintechs, PSP et entreprises d'investissement depuis janvier 2025. CyberSecure propose des audits de conformité DORA complets : évaluation des 5 piliers, revue des contrats avec les prestataires TIC (AWS, Azure, Salesforce), tests de résilience opérationnelle, plan de mise en conformité. Plusieurs fintechs parisiennes nous font déjà confiance.",
        },
      ],
    }}
  />
);

export default AuditSecuriteIleDeFrance;
