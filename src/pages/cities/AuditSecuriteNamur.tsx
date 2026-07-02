import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNamur = () => (
  <CityLandingPage
    data={{
      city: "Namur",
      citySlug: "namur",
      region: "Belgique — Wallonie",
      postalCode: "5000",
      intro: "CyberSecure accompagne les administrations wallonnes, les organismes publics et les entreprises de Namur avec des audits de sécurité PASSI, des pentests et des tests d'intrusion conformes à la directive NIS2 belge. En tant que capitale de la Wallonie, Namur concentre des systèmes d'information gouvernementaux critiques — Parlement wallon, SPW, Ethias — dont la compromission aurait un impact direct sur des millions de citoyens belges.",
      localContext: "Namur est la capitale administrative de la Région wallonne, hébergeant le Parlement wallon, le Gouvernement wallon et le Service Public de Wallonie (SPW) avec ses nombreuses directions générales gérant des données sensibles de citoyens (allocations, permis, fiscalité, marchés publics). L'Université de Namur (UNamur) héberge le laboratoire PReCISE spécialisé en cybersécurité et privacy, ainsi que plusieurs spin-offs. Ethias, l'assureur mutuel public, gère des données assurantielles et de santé soumises au RGPD. La Ville de Namur et les communes de la province ont subi une augmentation des tentatives d'intrusion sur leurs systèmes depuis 2022. Le CCB (Centre for Cybersecurity Belgium) classe plusieurs entités namuroises comme OIE ou OII soumises aux obligations NIS2. CyberSecure propose des audits adaptés au secteur public wallon avec une expérience en marchés publics de sécurité.",
      sectors: [
        "Administrations publiques wallonnes (SPW, Parlement, ministères)",
        "Assurance publique et mutualités (Ethias, mutuelles wallonnes)",
        "Enseignement supérieur et recherche (UNamur, PReCISE lab)",
        "Collectivités locales (Ville de Namur, communes province)",
        "PME et services aux entreprises (CCI Namur, BEP)",
        "Santé et médico-social (CHR Namur, CPAS, maisons de repos)",
      ],
      neighborhoods: [
        "Centre de Namur (Corbeille, Grognon, Ste-Louise)",
        "Salzinnes et CHR (hôpital, zone médicale)",
        "Belgrade et universités (UNamur, FUNDP)",
        "Zone d'activité économique (Rhisnes, Bouge)",
        "Province de Namur (Dinant, Philippeville, Gembloux)",
        "Basse-Sambre (Auvelais, Sambreville)",
      ],
      faq: [
        {
          q: "Comment auditer la sécurité des administrations publiques wallonnes à Namur (SPW, Parlement) ?",
          a: "L'audit de sécurité d'une administration publique wallonne nécessite une approche structurée en marchés publics (procédures belges d'attribution) et une connaissance des contraintes spécifiques au secteur public. CyberSecure réalise des pentests de portails citoyens, des audits des accès agents au réseau interne SPW, des tests de phishing ciblés sur les fonctionnaires (vecteur d'attaque privilégié des APT), et des audits Active Directory des Ministères wallons. Nous avons une expérience des environnements Microsoft 365 Government et des contraintes de classification des données publiques. Nos rapports sont compatibles avec les exigences du CCB et les obligations NIS2 des entités publiques essentielles.",
        },
        {
          q: "Pentest Ethias à Namur : comment auditer un assureur public soumis au RGPD et à NIS2 ?",
          a: "Ethias traite des millions de données d'assurés (vie, auto, habitation, soins de santé) soumises au RGPD et NIS2 belge en tant qu'entité importante du secteur financier. Un audit de sécurité Ethias comprend : pentest de l'espace client en ligne et des applications mobiles, audit des API échangeant des données médicales, test d'intrusion du réseau interne (segmentation entre traitement des sinistres et back-office financier), audit des droits d'accès aux données de santé (article 9 RGPD). CyberSecure réalise également des tests de continuité d'activité (PCA/PRA) et d'évaluation des mesures techniques RGPD. Tarifs : pentest application 5 000-10 000 € HT, audit complet 15 000-30 000 € HT.",
        },
        {
          q: "Votre qualification PASSI est-elle reconnue pour les marchés publics wallons de cybersécurité ?",
          a: "Oui. La qualification PASSI ANSSI est reconnue dans les marchés publics belges de cybersécurité et constitue une garantie de qualité recherchée par les acheteurs publics wallons. En vertu de la directive NIS2 transposée, les entités essentielles et importantes doivent faire appel à des prestataires qualifiés pour leurs audits. CyberSecure peut répondre aux marchés publics wallons sous forme de soumission directe ou de sous-traitance spécialisée. Nous fournissons tous les documents requis : références qualifiées PASSI, assurances RC professionnelle et cyber, CV des auditeurs, méthodologies détaillées.",
        },
        {
          q: "Audit de sécurité UNamur (Université de Namur) : protection de la recherche et des données étudiants ?",
          a: "L'UNamur héberge le laboratoire PReCISE spécialisé en cybersécurité et gère des données sensibles de recherche ainsi que les données personnelles de 10 000+ étudiants. Un audit universitaire comprend : pentest du portail étudiant MyUNamur et des plateformes e-learning, audit du réseau de recherche (segmentation entre labos et réseau administratif), test de phishing sur les chercheurs (cibles de vol de propriété intellectuelle), audit des accès aux serveurs de calcul haute performance. L'UNamur étant également fournisseur de services de confiance numériques via Namur Digital, un audit de ces infrastructures est particulièrement recommandé.",
        },
        {
          q: "Que faire en cas de cyberattaque contre une administration namuroise ?",
          a: "Contactez notre CERT immédiatement (24h/24). Pour une administration publique namuroise, les obligations légales sont : notification au CCB (Centre for Cybersecurity Belgium) dans les 24h si entité NIS2, notification à l'APD (Autorité de Protection des Données belge) dans les 72h si données personnelles compromises, information à la Région wallonne (DGSI) selon les procédures internes SPW. CyberSecure coordonne la réponse à incident, l'investigation forensique et la communication avec les autorités. Nous accompagnons également la communication aux citoyens namurois si leurs données sont affectées, et la reconstruction sécurisée des systèmes compromis.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNamur;
