import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteYvelines = () => (
  <CityLandingPage
    data={{
      city: "Yvelines",
      citySlug: "yvelines",
      region: "Île-de-France",
      postalCode: "78",
      intro: "CyberSecure est votre prestataire audit de sécurité Yvelines (78) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Versailles, Vélizy-Villacoublay, Saint-Quentin-en-Yvelines, Mantes-la-Jolie, Rambouillet et tout le département.",
      localContext: "Les Yvelines concentrent certaines des plus grandes entreprises françaises de technologie et de défense. Vélizy-Villacoublay est le principal pôle tech du département : Thales Group (siège mondial — avionique, cybersécurité, defense), Airbus Defence & Space (siège européen), Dassault Systèmes (éditeur de PLM mondial), DXC Technology. Saint-Quentin-en-Yvelines héberge le Technocentre Renault (Guyancourt) et le siège européen de Toyota. Ces entreprises sont des cibles majeures de l'espionnage industriel étatique et des groupes APT.",
      sectors: [
        "Défense et aérospatial (Thales Vélizy, Airbus D&S — NIS2 défense, secret défense)",
        "CAO/PLM (Dassault Systèmes — 3DExperience security, supply chain clients)",
        "Automobile (Renault Technocentre, Toyota Europe — TISAX, PLM cloud)",
        "Tech (DXC, Cap Gemini Vélizy, Oracle — SI grands comptes, cloud)",
        "Santé (André-Mignot, cliniques Yvelines — HDS, télémédecine IDF)",
        "Recherche (UVSQ, Paris-Saclay — NIS2 entité importante, données recherche)",
        "Logistique (entrepôts Yvelines, ADP logistique — WMS cloud, OT)",
        "Collectivités (CASQY, CD78, CA Versailles — cloud souverain, RGPD)",
      ],
      neighborhoods: [
        "Vélizy-Villacoublay (78140)",
        "Versailles – Le Chesnay – Rocquencourt (78000/78150)",
        "Guyancourt – Élancourt – Maurepas (78280/78990)",
        "Mantes-la-Jolie – Les Mureaux (78200/78130)",
        "Rambouillet (78120)",
        "Poissy – Carrières – Conflans (78300)",
        "Saint-Germain-en-Laye (78100)",
        "Sartrouville – Houilles (78500/78800)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Yvelines (78) ?",
          a: "Oui, CyberSecure intervient dans tout le 78 : SQY Communauté, Versailles Grand Parc, Mantes en Yvelines. Nous avons une expertise dans les environnements défense/aérospatial de Vélizy et les contraintes des industriels automobiles. CERT d'urgence 24/7.",
        },
        {
          q: "Thales Group (siège Vélizy) : quelles sont les obligations NIS2 d'un groupe de défense et de technologies critiques ?",
          a: "Thales est à la fois fournisseur de systèmes de défense critiques (soumis aux réglementations OIV et aux arrêtés sectoriels) et entreprise de cybersécurité commerciale (acteur NIS2 lui-même). Ses obligations NIS2 couvrent : notification des incidents à l'ANSSI dans les 24h pour les entités essentielles, mise en œuvre de mesures de gestion des risques (article 21 NIS2), et sécurité de la chaîne d'approvisionnement de ses propres clients. Thales dispose d'un CSIRT interne et d'une division Cyber Threat Intelligence. CyberSecure peut compléter ces dispositifs pour les filiales ou sous-traitants de Thales.",
        },
        {
          q: "Dassault Systèmes (3DExperience) héberge les données PLM de l'aéronautique mondiale : quelles garanties de sécurité offre-t-il ?",
          a: "Dassault Systèmes a certifié sa plateforme 3DExperience SaaS selon ISO 27001, SOC 2 Type II, et TISAX pour ses clients industriels. Son CSIRT (DS CERT) surveille les menaces 24/7. Pour les clients industriels sensibles (Airbus, MBDA), DS propose des tenants cloud dédiés avec accès restreint. Les PME sous-traitantes qui utilisent 3DExperience via des licences grand compte doivent s'assurer que leur usage est conforme aux politiques de sécurité du donneur d'ordre (gestion des accès, interdiction d'export de données de conception hors VPN). CyberSecure audite les usages de 3DExperience chez les sous-traitants.",
        },
        {
          q: "Le Technocentre Renault (Guyancourt) développe des véhicules à 100% électriques : protéger les logiciels embarqués ?",
          a: "Les véhicules électriques modernes (Renault 5, Mégane E-Tech) intègrent des millions de lignes de code pour gérer la batterie, le moteur électrique, les ADAS, et la connectivité (Android Automotive, OTA updates). La sécurité des logiciels embarqués automobile est réglementée par l'UN-ECE R155 et R156 (cybersécurité et OTA). Un audit de la chaîne de développement logiciel chez Renault comprend : sécurisation des repositories de code embarqué, analyse SBOM (Software Bill of Materials) des dépendances open-source, securisation du pipeline CI/CD, et test de pénétration du véhicule (pentest ECU). CyberSecure accompagne les constructeurs automobiles.",
        },
        {
          q: "Quels financements pour un audit cyber dans les Yvelines ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Versailles-Yvelines — diagnostics numériques. CASQY et CD78 — programmes innovation. BPI France Île-de-France — prêts innovation. Paris-Saclay et Systematic Paris-Region accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteYvelines;
