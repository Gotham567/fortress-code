import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteFribourg = () => (
  <CityLandingPage
    data={{
      city: "Fribourg",
      citySlug: "fribourg",
      region: "Suisse — Canton de Fribourg",
      postalCode: "1700",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Fribourg pour l'Hôpital Fribourgeois (HFR), l'Université de Fribourg, Elanco Animal Health et les PME industrielles de la ville bilingue FR/DE. Cabinet qualifié PASSI ANSSI, nous intervenons dans le Canton de Fribourg avec une expertise en sécurité des établissements de santé et en audits d'environnements industriels conformes à la LPD/nFADP suisse.",
      localContext: "Fribourg est une ville bilingue française et allemande, carrefour entre la Suisse romande et alémanique. L'Hôpital Fribourgeois (HFR) gère cinq sites hospitaliers et des données de santé sensibles de 300 000 habitants soumises à la LPD révisée. L'Université de Fribourg héberge des facultés de droit, de sciences économiques et d'informatique. Elanco Animal Health (anciennement Eli Lilly Animal Health) est un leader mondial de la santé animale avec une R&D sensible. Schindler Group opère depuis Ebikon (proche Lucerne) mais dispose de sites fribourgeois. La ville accueille également des organisations catholiques internationales (Ordre Dominicain, universités pontificales) gérant des données confidentielles. Le tissu économique fribourgeois comprend de nombreuses PME agroalimentaires (Gruyère AOP, chocolatiers) dont la digitalisation croissante crée de nouveaux risques cyber.",
      sectors: [
        "Santé hospitalière (HFR, cliniques privées, EMS)",
        "Enseignement supérieur (Université Fribourg, HES-SO)",
        "Industrie pharmaceutique et santé animale (Elanco, Medvance)",
        "Agroalimentaire et production (laiteries Gruyère, chocolateries)",
        "Organisations religieuses et institutions internationales",
        "PME tech et services (administration cantonale fribourgeoise)",
      ],
      neighborhoods: [
        "Basse-Ville et Haute-Ville historique (centre, Sarine)",
        "Pérolles et universités (Uni Fribourg, HES-SO, Blue Factory)",
        "Marly et Villars-sur-Glâne (zones industrielles et logistique)",
        "Route de Berne (zone commerciale, services)",
        "Bulle et Gruyère (industrie agroalimentaire, PME)",
        "Morat/Murten et Lac (tourisme, hôtellerie)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Fribourg pour une PME ou un hôpital ?",
          a: "Les tarifs à Fribourg suivent les standards suisses avec une légère adaptation aux réalités des PME fribourgeoises : pentest d'application web pour une PME entre 4 000 et 10 000 CHF HT ; audit de sécurité informatique complet (réseau, AD, cloud) entre 8 000 et 20 000 CHF HT ; audit spécialisé hôpital (données de santé, systèmes médicaux connectés) entre 12 000 et 25 000 CHF HT. Pour l'Hôpital Fribourgeois ou une clinique NIS2, une certification ISO 27001 ou un audit selon les recommandations de H+ (fédération des hôpitaux suisses) peut être incluse. Tarifs en CHF HT, TVA suisse 7.7% en sus.",
        },
        {
          q: "Audit de sécurité de l'Hôpital Fribourgeois (HFR) : systèmes médicaux et données de santé LPD ?",
          a: "L'HFR gère cinq sites hospitaliers avec des milliers de dossiers patients électroniques soumis à la LPD révisée et à la Loi fédérale sur le dossier électronique du patient (LDEP). Un audit hospitalier HFR comprend : pentest du portail patient en ligne, audit des systèmes PACS (radiologie, IRM), test d'intrusion réseau interne (segmentation soins/administration), audit des appareils médicaux connectés (IoT médical : pompes, moniteurs, scanners), test des accès des médecins et infirmiers (MFA, droits d'accès minimaux). CyberSecure connaît les contraintes de disponibilité hospitalière 24/7 et adapte ses tests aux plages de maintenance. Rapport compatible avec les exigences NCSC et H+ Cybersécurité.",
        },
        {
          q: "Pentest pour une PME agroalimentaire fribourgeoise (laiterie Gruyère, chocolaterie) : enjeux spécifiques ?",
          a: "Les PME agroalimentaires fribourgeoises gèrent des recettes et processus de fabrication confidentiels (appellations AOP), des systèmes de traçabilité HACCP connectés et des plateformes e-commerce ou EDI avec les grandes surfaces (Coop, Migros, Spar). Les risques sont : vol de recettes et de processus industriels, compromission des systèmes de traçabilité (risque de retrait de produits coûteux), ransomware perturbant la chaîne de production froide. CyberSecure réalise des audits adaptés : test des systèmes de traçabilité et ERP (SAP, Abacus), audit des accès EDI partenaires, revue des sauvegardes. Tarif PME agroalimentaire : 3 000-8 000 CHF HT.",
        },
        {
          q: "Université de Fribourg : audit de sécurité pour une institution bilingue avec données étudiants et recherche ?",
          a: "L'Université de Fribourg gère des données d'environ 10 000 étudiants en droit, sciences économiques et informatique, ainsi que des recherches en éthique, droit international et data science soumises à la LPD. Un audit universitaire comprend : pentest du portail étudiant (inscription, résultats, Moodle), audit des droits d'accès des professeurs et assistants, test de phishing ciblé sur les étudiants et chercheurs, audit de la politique BYOD (appareils personnels connectés au réseau), revue de la conformité LPD pour les données des enquêtes et recherches en sciences sociales. La bilinguisme FR/DE nécessite des rapports en deux langues — CyberSecure livre en français et en allemand sur demande.",
        },
        {
          q: "Que faire en cas de cyberattaque à Fribourg ?",
          a: "En cas d'incident à Fribourg, contactez notre CERT 24h/24. Obligations selon la LPD révisée suisse : notification au PFPDT si violation de données personnelles (recommandation de notification rapide, avec obligation légale à venir). Pour l'HFR ou une entité NIS2 : notification au NCSC (ncsc.admin.ch). CyberSecure coordonne l'investigation forensique, l'isolement de la menace et la reconstruction sécurisée. Pour les entreprises avec une présence en Allemagne ou en Autriche (fréquent pour les PME fribourgeoises bilingues), nous coordonnons les notifications au BSI (Bundesamt für Sicherheit in der Informationstechnik) si nécessaire. Dépôt de plainte auprès du Ministère Public fribourgeois (Staatsanwaltschaft/Ministère public). Intervention sur site en moins de 2 heures depuis Berne ou Lausanne.",
        },
      ],
    }}
  />
);

export default AuditSecuriteFribourg;
