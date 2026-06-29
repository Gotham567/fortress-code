import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMeurtheEtMoselle = () => (
  <CityLandingPage
    data={{
      city: "Meurthe-et-Moselle",
      citySlug: "meurthe-et-moselle",
      region: "Grand Est",
      postalCode: "54",
      intro: "CyberSecure est votre prestataire audit de sécurité Meurthe-et-Moselle (54) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Nancy, Vandœuvre-lès-Nancy, Lunéville, Longwy, Briey et tout le département.",
      localContext: "La Meurthe-et-Moselle est un département lorrain de contrastes : Nancy est une métropole universitaire et culturelle en renouveau numérique, tandis que le nord du département (Longwy, Briey) est marqué par la reconversion industrielle post-sidérurgie. L'Université de Lorraine (UL) et le laboratoire LORIA (IA) positionnent Nancy comme un pôle académique tech. Le CHRU Nancy est l'un des plus grands hôpitaux de France en dehors de Paris. La cristallerie Baccarat et Saint-Louis sont des fleurons du luxe artisanal lorrain. La zone frontalière avec le Luxembourg (Longwy) génère un tissu économique transfrontalier.",
      sectors: [
        "Numérique (LORIA Nancy, Université Lorraine, ESN — IA, cloud, cybersécurité)",
        "Santé (CHRU Nancy, CHR Metz-Thionville 54 — HDS, e-santé, neurosciences)",
        "Cristallerie et luxe (Baccarat, Saint-Louis — IP artisanale, e-commerce export)",
        "Sidérurgie (Arcelor Florange côté 54, Lorfonte — OT/SCADA héritage industriel)",
        "Chimie (Air Liquide Champigneulles, Solvay — Seveso, systèmes ICS)",
        "Transfrontalier (Longwy — Luxembourg, frontaliers — cloud, RGPD multi-pays)",
        "Collectivités (Métropole Grand Nancy, CD54 — cloud souverain, dématérialisation)",
        "PME industrielles (bassin Briey-Longwy, mécatronique, plasturgie — ERP cloud)",
      ],
      neighborhoods: [
        "Nancy – Vandœuvre – Essey-lès-Nancy (54000/54500)",
        "Maxéville – Tomblaine – Laxou (54320/54510)",
        "Longwy – Mont-Saint-Martin – Herserange (54400)",
        "Briey – Conflans-en-Jarnisy (54150/54800)",
        "Lunéville (54300)",
        "Toul (54200)",
        "Villers-lès-Nancy – Heillecourt (54600)",
        "Pont-à-Mousson (54700)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Meurthe-et-Moselle (54) ?",
          a: "Oui, CyberSecure intervient dans tout le 54 : Métropole du Grand Nancy, Pays du Bassin de Briey, Lunéville-Forêts, et zones frontalières Luxembourg. Nos consultants ont une expertise dans les industries lorraines et les problématiques de conformité transfrontalières. CERT d'urgence 24/7.",
        },
        {
          q: "Le LORIA Nancy (IA, cybersécurité) : comment une startup issue d'un laboratoire valorise-t-elle son IP en sécurisant ses codes sources ?",
          a: "Les startups deeptech issues du LORIA (spin-offs en IA et cybersécurité) développent des algorithmes propriétaires qui constituent leur principal actif. La protection de ces codes sources passe par : repository Git privé sécurisé (GitHub Enterprise, GitLab self-hosted avec MFA), politique de branches avec revues de code obligatoires, chiffrement des secrets dans le CI/CD (HashiCorp Vault), analyse de composition logicielle (SCA) pour les dépendances open-source, et accord de confidentialité avec les développeurs. CyberSecure accompagne les startups deeptech lorraines dans leur sécurité dès la phase de création.",
        },
        {
          q: "Baccarat et Saint-Louis Cristal : comment protéger des savoir-faire artisanaux multicentenaires contre l'espionnage ?",
          a: "La cristallerie Baccarat (fondée en 1764) et Saint-Louis (fondée en 1586) détiennent des savoir-faire unique dans la fusion du cristal, la gravure, et le polissage. Ces techniques sont transmises par compagnonnage et ne sont pas entièrement documentées dans des systèmes informatiques. Les risques cyber : vol des archives numériques des collections historiques (scans 3D, photos de haute résolution des pièces uniques), compromission des systèmes e-commerce (boutiques en ligne avec clientèle mondiale haut de gamme), et ingénierie sociale ciblant les maîtres-verriers. CyberSecure propose des audits de sécurité adaptés aux Maisons de luxe artisanal.",
        },
        {
          q: "Les entreprises de Longwy (frontière Luxembourg-Belgique) : quelles obligations NIS2 transfrontalières ?",
          a: "NIS2 s'applique uniformément dans l'UE. Une entreprise de Longwy qui est en même temps établie au Luxembourg (holding LU) et en Belgique (filiale BE) doit déterminer quelle autorité NIS2 est compétente (règle de l'établissement principal — généralement là où la direction est implantée). Si l'entité principale est en France, c'est l'ANSSI qui supervise. Les obligations NIS2 s'appliquent à l'ensemble des systèmes d'information de l'entité, y compris ceux hébergés dans d'autres États membres. CyberSecure accompagne les groupes transfrontaliers dans leur conformité NIS2 multi-pays.",
        },
        {
          q: "Quels financements pour un audit cyber en Meurthe-et-Moselle ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Meurthe-et-Moselle — diagnostics numériques. Métropole du Grand Nancy — programmes innovation. BPI France Grand Est — prêts innovation. Le LORIA et la Région Grand Est co-financent des projets numériques et cyber. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMeurtheEtMoselle;
