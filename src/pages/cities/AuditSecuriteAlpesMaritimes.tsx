import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAlpesMaritimes = () => (
  <CityLandingPage
    data={{
      city: "Alpes-Maritimes",
      citySlug: "alpes-maritimes",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06",
      intro: "CyberSecure est votre prestataire audit de sécurité Alpes-Maritimes (06) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Nice, Sophia Antipolis, Antibes, Cannes, Grasse et tout le département.",
      localContext: "Les Alpes-Maritimes hébergent l'un des plus grands technopôles d'Europe. Sophia Antipolis (2 400 entreprises, 40 000 emplois) est une Silicon Valley à la française avec SAP, Amadeus, Texas Instruments, IBM, Oracle et des centaines de startups tech. Nice est la 5e ville de France avec une métropole innovante (smart city Nice Côte d'Azur, 5G Living Lab). La proximité de Monaco génère un tissu financier de haute valeur (banque privée, wealth management). Le tourisme de luxe de la Côte d'Azur (Cannes, Antibes, Saint-Tropez) implique des systèmes de paiement et des données VIP très sensibles.",
      sectors: [
        "Tech et IT (Sophia Antipolis — SAP, Amadeus, TI, Oracle, IBM, startups)",
        "Finance et private banking (Monaco proximity, Lazard, BNP WM — DORA)",
        "Tourisme luxe (Cannes Festival, hôtels Palace, casinos — PCI DSS niveau 1)",
        "Santé (CHU Nice Pasteur, CHPG Monaco, Centre Antoine-Lacassagne — HDS)",
        "Aéroport (Nice Côte d'Azur 2e France — systèmes ATC, OT aéroportuaire)",
        "Défense (DGA, MBDA Sophia, armée — systèmes homologués, CONFIDENTIEL)",
        "Parfumerie luxe (Givaudan Grasse, IFF, Symrise — IP formules, R&D)",
        "Smart city (Nice Côte d'Azur — IoT urbain, données mobilité, capteurs)",
      ],
      neighborhoods: [
        "Nice – Promenade des Anglais – Arenas (06000)",
        "Sophia Antipolis – Valbonne – Mougins (06560/06250)",
        "Antibes – Juan-les-Pins – Biot (06600/06160)",
        "Cannes – Mougins – Mandelieu (06400/06250/06210)",
        "Grasse – Châteauneuf-de-Grasse (06130)",
        "Cagnes-sur-Mer – Saint-Laurent-du-Var (06800/06700)",
        "Menton – Roquebrune-Cap-Martin (06500)",
        "Carros – Saint-Martin-du-Var (06510)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Alpes-Maritimes (06) ?",
          a: "Oui, CyberSecure intervient dans tout le 06 : Nice Métropole Côte d'Azur, Sophia Antipolis, Pays Grassois, Pays Mentonnais. Nous sommes intégrés dans l'écosystème de Sophia Antipolis et connaissons les exigences des entreprises tech du 06. CERT d'urgence 24/7.",
        },
        {
          q: "SAP Labs (Sophia Antipolis) : comment une entreprise de logiciels gère-t-elle son propre pentest ?",
          a: "SAP Labs Sophia Antipolis développe des composants de la suite SAP S/4HANA. Les éditeurs de logiciels font face à un paradoxe : ils conçoivent des solutions pour les DSI, mais doivent eux-mêmes maintenir une sécurité exemplaire (leur code sera déployé chez des milliers de clients). Un pentest chez SAP Labs couvre : les environnements de développement (pipelines CI/CD, dépôts de code), les APIs internes entre équipes de dev, la sécurité des environnements cloud de test (AWS, Azure), et les accès distants des développeurs. CyberSecure propose des red team exercises pour les équipes R&D des éditeurs logiciels.",
        },
        {
          q: "Amadeus (Sophia Antipolis) gère les réservations de 700 compagnies aériennes : quelles obligations NIS2 ?",
          a: "Amadeus est un fournisseur de services numériques essentiels (FSNE) sous NIS2, dans la catégorie 'place de marché en ligne / services cloud' de très grande taille (plus de 10 milliards de CA). À ce titre, Amadeus doit notifier les incidents cybersécurité à l'ANSSI (article 23 NIS2), mettre en œuvre des mesures de gestion des risques proportionnées (article 21), et se conformer aux exigences de sécurité de la chaîne d'approvisionnement (article 21.2d) vis-à-vis de ses compagnies aériennes clientes. CyberSecure accompagne les entités de grande taille dans leur conformité NIS2.",
        },
        {
          q: "Les hôtels 5 étoiles de Cannes (Martinez, Carlton) : comment réussir un audit PCI DSS v4.0 ?",
          a: "PCI DSS v4.0 (entré en vigueur en mars 2024) introduit des exigences nouvelles pour les hôtels qui traitent des paiements par carte : authentification multifacteur (MFA) obligatoire pour tous les accès administrateurs aux systèmes de paiement, tests de pénétration annuels couvrant les interfaces web et les APIs de paiement, scan de vulnérabilités trimestriel par un ASV approuvé, et gestion des mots de passe renforcée (interdiction des mots de passe par défaut). CyberSecure est accrédité pour accompagner les hôtels dans leur audit PCI DSS.",
        },
        {
          q: "Quels financements pour un audit cyber dans les Alpes-Maritimes ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Nice Côte d'Azur — diagnostics numériques. Nice Métropole Côte d'Azur — programmes innovation. BPI France PACA — prêts innovation. Sophia Antipolis et la French Tech Nice Côte d'Azur accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAlpesMaritimes;
