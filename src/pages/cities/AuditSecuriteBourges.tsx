import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBourges = () => (
  <CityLandingPage
    data={{
      city: "Bourges",
      citySlug: "bourges",
      region: "Centre-Val de Loire",
      postalCode: "18000",
      intro: "CyberSecure accompagne les PME et ETI de Bourges avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs défense, armement, industrie et agriculture du Cher. Notre cabinet qualifié PASSI ANSSI intervient sur site à Bourges pour des missions d'audit réseau, d'audit Active Directory et de réponse à incident CERT dans cette capitale de l'armement français.",
      localContext: "Bourges est la capitale française de l'armement et de la pyrotechnie avec la présence de Thales, ArianeGroup (ex-MBDA) et du Groupement Industriel des Armements Terrestres (GIAT, devenu KNDS) dont les systèmes d'information critiques traitent des informations classifiées de défense nationale. Les sous-traitants de l'industrie de défense berruyers doivent respecter des exigences IGI 1300 et des certifications de sécurité imposées par la DGA. L'agriculture berruyère (céréales, élevage, BERRY) et les coopératives agricoles constituent un tissu économique rural en numérisation progressive. Le CH de Bourges et les établissements de santé du Cher font face aux cybermenaces. Le Printemps de Bourges (festival international) génère une économie événementielle dont la billetterie nécessite une sécurisation des données.",
      sectors: [
        "Défense et armement (Thales, ArianeGroup, KNDS)",
        "Industrie et sous-traitance de défense",
        "Agriculture et coopératives (céréales, élevage Cher)",
        "Santé (CH Bourges, cliniques Cher)",
        "Événementiel et tourisme culturel (Printemps de Bourges)",
        "Collectivités et Bourges Plus",
      ],
      neighborhoods: [
        "Centre-ville et quartier cathédrale (UNESCO)",
        "La Chancellerie et zones d'armement",
        "Marmagne et zone industrielle nord",
        "Saint-Doulchard et zones commerciales",
        "Vierzon et Cher industriel (industrie, ferroviaire)",
        "Saint-Amand-Montrond et Berry rural",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un sous-traitant de défense ou d'armement à Bourges ?",
          a: "Un audit de sécurité pour un sous-traitant de Thales, ArianeGroup ou KNDS à Bourges se situe entre 10 000 et 30 000 € HT selon le niveau de classification des informations traitées et le périmètre du SI. Les entreprises soumises aux exigences IGI 1300 et aux clauses de sécurité DGA font l'objet d'audits de conformité spécifiques. CyberSecure est qualifié PASSI ANSSI et habilité à intervenir sur ces environnements sensibles. Devis confidentiel sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau ou un pentest à Bourges ?",
          a: "Un audit réseau pour une PME berruyre dure 4 à 7 jours ouvrés. Pour un site industriel de défense avec des réseaux cloisonnés et des contraintes de classification, comptez 10 à 20 jours selon le périmètre. L'audit Active Directory seul est réalisable en 3 à 5 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment auditer et sécuriser le SI d'une entreprise traitant des informations classifiées de défense à Bourges ?",
          a: "Les sous-traitants de défense à Bourges traitant des Informations Classifiées de Défense (ICD) doivent respecter le référentiel IGI 1300 (Instruction Générale Interministérielle) et les conditions de sécurité imposées par la DRSD. CyberSecure réalise des audits de conformité IGI 1300 incluant la revue des mesures de protection physique et logique, l'analyse des cloisonnements entre réseaux classifiés et non classifiés, et le test des procédures de destruction des informations. Nos consultants disposent des habilitations nécessaires pour intervenir sur ces environnements.",
        },
        {
          q: "CyberSecure intervient-il sur site à Bourges et dans le Cher ?",
          a: "Oui, nos consultants se déplacent à Bourges, Vierzon, Saint-Amand-Montrond, Mehun-sur-Yèvre et dans tout le département du Cher. Nous couvrons également l'Allier (Moulins, Vichy) et l'Indre (Châteauroux) pour les groupes industriels ayant des sites dans plusieurs départements du Centre. Déploiement sous 72h à Bourges.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site de défense ou une PME à Bourges ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Pour les incidents touchant des systèmes traitant des informations classifiées, notifiez simultanément la DRSD et le SGDSN conformément aux procédures de sécurité défense. N'éteignez pas les systèmes compromis — isolez-les du réseau. Notre équipe peut être sur site à Bourges dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBourges;
