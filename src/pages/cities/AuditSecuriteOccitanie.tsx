import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteOccitanie = () => (
  <CityLandingPage
    data={{
      city: "Occitanie",
      citySlug: "occitanie",
      urlPath: "cybersecurite-occitanie",
      region: "Occitanie",
      postalCode: "09 / 11 / 12 / 30 / 31 / 32 / 34 / 46 / 48 / 65 / 66 / 81 / 82",
      intro: "CyberSecure est votre prestataire d'audit cybersécurité Occitanie : pentest, audit NIS2, conformité RGPD, réponse aux incidents pour les entreprises de Toulouse, Montpellier, Nîmes, Perpignan, Albi et toute la région.",
      localContext: "L'Occitanie est une région économiquement dynamique où la cybersécurité joue un rôle croissant. Toulouse est la capitale mondiale de l'aéronautique civile (Airbus, Safran, ATR, Thales Alenia Space) et abrite un écosystème tech en pleine expansion (Labège, Aéroconstellation, French Tech Toulouse). Montpellier est une métropole en forte croissance avec un tissu numérique actif. Les cyberattaques ont frappé la région : hôpital de Cahors, collectivités héraultaises. CyberSecure dispose d'experts déployables rapidement dans toute la région.",
      sectors: [
        "Aéronautique et spatial (Airbus, CNES, Safran, ATR, Thales Alenia Space)",
        "Numérique et tech (Labège, Montpellier, French Tech Toulouse et Montpellier)",
        "Santé et biotech (CHU Toulouse Rangueil, CHU Montpellier, ICM)",
        "Viticulture et IAA (Languedoc-Roussillon, AOC Gaillac, Cognac des Pyrénées)",
        "Tourisme et thermalisme (Pyrénées, Camargue, littoral languedocien)",
        "Agriculture et coopératives (Occitanie premier territoire agricole français)",
        "Défense (DGA Toulouse, armée de l'air Évreux, MBDA)",
        "Collectivités (Toulouse Métropole, Montpellier Métropole, Région Occitanie)",
      ],
      neighborhoods: [
        "Toulouse Métropole – Labège – Blagnac – Colomiers – L'Union",
        "Montpellier Méditerranée Métropole – Lattes – Mauguio",
        "Nîmes – Alès – Bagnols-sur-Cèze (30)",
        "Perpignan – Canet-en-Roussillon (66)",
        "Albi – Castres – Mazamet (81)",
        "Béziers – Sète – Agde (34)",
        "Narbonne – Limoux – Carcassonne (11)",
        "Tarbes – Lourdes – Bagnères-de-Bigorre (65)",
      ],
      faq: [
        {
          q: "Couvrez-vous toute l'Occitanie, de l'Ariège au Gard ?",
          a: "Oui, CyberSecure intervient dans les 13 départements d'Occitanie. Nos consultants se déplacent sur site partout dans la région — y compris dans les zones rurales (Aveyron, Lozère, Ariège, Gers) et les zones de montagne (Pyrénées). CERT d'urgence 24/7 disponible. Délai d'intervention pour les audits planifiés : 5-10 jours ouvrés.",
        },
        {
          q: "Mon entreprise sous-traite pour Airbus à Toulouse — quelles obligations cyber ?",
          a: "Les sous-traitants d'Airbus sont soumis à plusieurs obligations : NIS2 si vous dépassez les seuils dans la fabrication aéronautique, exigences Airbus via son programme Safeguard et les questionnaires fournisseurs (TISAX pour les échanges de données industrielles), et potentiellement des exigences contractuelles spécifiques pour les sous-traitants Tier 1 (SCAS — Supply Chain Assurance Services). CyberSecure maîtrise ce triple référentiel et accompagne les sous-traitants toulousains.",
        },
        {
          q: "Réalisez-vous des audits de sécurité pour les hôpitaux et CHU occitans ?",
          a: "Oui. Les établissements de santé publics (CHU Toulouse, CHU Montpellier, hôpitaux de Nîmes, Perpignan, Albi) sont des entités essentielles NIS2 et sont soumis à la certification HDS. CyberSecure réalise des audits de sécurité adaptés aux hôpitaux : revue des SI médicaux et administratifs, audit de la conformité HDS, pentest des applications médicales, revue des sauvegardes (les hôpitaux ont des RTO/RPO stricts). Expérience avec plusieurs CHU français.",
        },
        {
          q: "Quelles aides pour financer un audit cyber à Toulouse ou Montpellier ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Occitanie via son programme SOHO et ses fonds FEDER. Les CCI occitanes (CCI Toulouse, CCI Hérault, CCI Gard). BPI France Occitanie — prêts numériques. La métropole de Toulouse propose aussi des aides à la transformation numérique. À Montpellier, Business & Innovation Center (BIC) accompagne les startups sur ces enjeux. Devis gratuit chez CyberSecure.",
        },
        {
          q: "Mon domaine viticole en Languedoc-Roussillon doit-il se conformer au RGPD ?",
          a: "Dès lors que vous collectez des données clients (fichier de dégustatoire, cave en ligne, mailing), vous êtes soumis au RGPD. Pour les domaines exportateurs avec des clients asiatiques ou américains, la collecte de données personnelles d'étrangers engage aussi votre responsabilité. CyberSecure propose un audit RGPD adapté aux domaines viticoles et coopératives languedociennes : registre des traitements, politique de confidentialité, sécurité du CRM et conformité des newsletters.",
        },
      ],
    }}
  />
);

export default AuditSecuriteOccitanie;
