import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteRhone = () => (
  <CityLandingPage
    data={{
      city: "Rhône",
      citySlug: "rhone",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "69",
      intro: "CyberSecure est votre prestataire audit de sécurité Rhône (69) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Lyon, Villeurbanne, Vénissieux, Bron, Caluire, Écully et tout le département.",
      localContext: "Le Rhône est le 2e département économique de France. La Métropole de Lyon est la capitale économique régionale, avec une concentration exceptionnelle d'industries, de services et d'entreprises numériques. La chimie et pharmacie (Sanofi Marcy-l'Étoile, BioMérieux, Boehringer), la biotech (Lyonbiopôle — 1er biopôle de France), le numérique (French Tech Lyon, Axeleo) et la finance (Crédit Agricole, banques régionales) constituent les piliers de l'économie rhodanienne. Lyon est aussi la 1ère destination datacenter hors Île-de-France avec Equinix, SFR Business et Kyndryl.",
      sectors: [
        "Pharmacie et biotech (Sanofi Marcy-l'Étoile, BioMérieux, Lyonbiopôle)",
        "Chimie (Rhodia, Arkema, industries chimiques de la vallée du Rhône)",
        "Numérique (French Tech Lyon, Axeleo, éditeurs SaaS lyonnais)",
        "Finance (Crédit Agricole Centre-Est, banques régionales lyonnaises)",
        "Santé (HCL Hôpital Édouard Herriot, CHU Lyon, INSERM)",
        "Datacenters (Equinix Lyon, SFR Business, Kyndryl)",
        "Luxe et textile (Hermès, soyeux lyonnais, maisons de mode)",
        "Collectivités (Métropole de Lyon, Villeurbanne, CD69)",
      ],
      neighborhoods: [
        "Lyon 2e – 3e – Part-Dieu (69002/69003)",
        "Lyon 6e – Villeurbanne (69006/69100)",
        "Vénissieux – Saint-Fons – Feyzin (69200)",
        "Caluire-et-Cuire – Rillieux-la-Pape (69300)",
        "Bron – Vaulx-en-Velin (69500)",
        "Écully – Craponne – Tassin-la-Demi-Lune (69130)",
        "Meyzieu – Décines-Charpieu (69330)",
        "Givors – Mornant – Brignais (69700)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Rhône (69) et la Métropole de Lyon ?",
          a: "Oui, CyberSecure intervient dans tout le département du Rhône : Lyon Métropole (toutes les communes), Beaujolais, Monts du Lyonnais. Nos consultants sont basés à Lyon et couvrent l'ensemble du 69 en moins de 2 heures. CERT d'urgence 24/7.",
        },
        {
          q: "BioMérieux et Sanofi à Lyon : quels types de pentest sont nécessaires ?",
          a: "Les laboratoires pharmaceutiques et biotech lyonnais ont besoin de plusieurs types d'audits : pentest de l'infrastructure réseau (segmentation des réseaux de laboratoire), pentest des applications web (portails clients, APIs de données), audit des systèmes OT de production (automates de remplissage, systèmes de contrôle qualité), et revue de la sécurité des architectures cloud de données de R&D. CyberSecure propose tous ces types d'audits.",
        },
        {
          q: "Les startups lyonnaises (Axeleo) ont-elles besoin d'un audit avant levée de fonds ?",
          a: "Oui. Les fonds de VC (Axeleo, BNP Paribas Développement, Turenne Groupe) demandent systématiquement une évaluation de la maturité sécurité avant les tours de table séries A et B. CyberSecure propose des audits de sécurité cloud adaptés aux startups SaaS lyonnaises, incluant un rapport exécutif pour les investisseurs et une roadmap de mise en conformité RGPD et ISO 27001.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Rhône ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Lyon Métropole — diagnostics numériques cofinancés. Métropole de Lyon — programmes d'innovation. BPI France AuRA — prêts innovation. Axeleo et Lyonbiopôle accompagnent leurs membres sur les questions de sécurité.",
        },
        {
          q: "Délai d'intervention CERT pour un incident cyber dans le Rhône ?",
          a: "Pour une réponse à incident dans le Rhône, notre CERT intervient en moins de 2 heures sur Lyon intramuros et Villeurbanne, et en moins de 4 heures sur l'ensemble de la Métropole de Lyon. Support à distance 24/7 pour toute urgence.",
        },
      ],
    }}
  />
);

export default AuditSecuriteRhone;
