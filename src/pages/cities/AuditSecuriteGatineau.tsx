import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteGatineau = () => (
  <CityLandingPage
    data={{
      city: "Gatineau",
      citySlug: "gatineau",
      region: "Canada — Québec (Outaouais)",
      postalCode: "J8X",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Gatineau pour les sous-traitants IT du gouvernement fédéral canadien, le Casino du Lac-Leamy, l'Université du Québec en Outaouais (UQO) et les PME de la région. Cabinet qualifié PASSI ANSSI, nous intervenons en Outaouais avec une expertise en sécurité des environnements gouvernementaux fédéraux soumis simultanément à PIPEDA/Loi C-26 et à la Loi 25 québécoise.",
      localContext: "Gatineau est la porte d'entrée québécoise vers la capitale fédérale canadienne Ottawa, séparée uniquement par la rivière des Outaouais. Cette position géographique unique fait de Gatineau un hub de sous-traitants IT travaillant pour les ministères fédéraux : Défense nationale, SCRS, Communications Security Establishment (CSE), ISED, Santé Canada. Ces fournisseurs manipulent des données gouvernementales de haut niveau et sont des cibles d'attaques de supply chain visant à compromettre indirectement les réseaux fédéraux canadiens. Le Casino du Lac-Leamy (Loto-Québec) traite quotidiennement des milliers de transactions bancaires des clients et gère des données de jeu sensibles. L'UQO développe des programmes en informatique et cybersécurité. La double juridiction Loi 25 (Québec) + PIPEDA fédéral (remplacé progressivement par la Loi C-26) crée une complexité réglementaire unique que CyberSecure maîtrise.",
      sectors: [
        "Sous-traitants IT fédéraux (Defence, SCRS, CSE, Santé Canada)",
        "Jeux et divertissement (Casino Lac-Leamy, bingo, loteries)",
        "Enseignement supérieur (UQO, Cégep de l'Outaouais)",
        "Santé (CISSS de l'Outaouais, hôpital Gatineau)",
        "Commerce et retail (Place du Centre, mail Rideau côté Quebec)",
        "PME tech et conseils (hull, bureau chef, firmes conseil)",
      ],
      neighborhoods: [
        "Hull (centre-ville Gatineau, Casino, culture)",
        "Aylmer (résidentiel, PME, bord de rivière)",
        "Buckingham et Masson-Angers (est Gatineau, industrie légère)",
        "Plateau et Lac Beauchamp (résidentiel, tech, services)",
        "Frontière Ottawa-Gatineau (ponts Portage, MacDonald-Cartier)",
        "Outaouais rural (Maniwaki, Papineauville, Mont-Laurier)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Gatineau pour un sous-traitant IT du gouvernement fédéral canadien ?",
          a: "Un pentest pour un sous-traitant IT fédéral à Gatineau implique des contraintes spécifiques : certification de sécurité TPSGC (Travaux publics et Services gouvernementaux Canada), accès aux systèmes dans des environnements cloisonnés, parfois classification Protégé B. Tarifs : pentest d'application web ou système IT fédéral entre 6 000 et 15 000 $ CAD HT ; audit de sécurité infrastructure sous-traitant fédéral entre 10 000 et 22 000 $ CAD HT ; audit supply chain (sécurité des accès VPN au réseau du donneur d'ordre fédéral) entre 5 000 et 12 000 $ CAD HT. CyberSecure est familier des politiques de sécurité du Conseil du Trésor (Politique sur la sécurité du gouvernement, ITSG-33) et peut accompagner les sous-traitants dans leur mise en conformité.",
        },
        {
          q: "Audit Casino du Lac-Leamy à Gatineau : comment sécuriser les transactions bancaires et les données joueurs ?",
          a: "Le Casino du Lac-Leamy (opéré par Loto-Québec) traite des millions de transactions de jeu, des données bancaires et des programmes de fidélité exposant les données personnelles de joueurs. Les risques spécifiques : fraude aux machines à sous (manipulation des systèmes de crédit), accès non autorisé aux données des joueurs VIP (HNWI, données bancaires et habitudes de jeu sensibles), compromission des systèmes de surveillance vidéo (caméras IP), attaque sur les systèmes de gestion des paiements. CyberSecure réalise : pentest des applications de jeu en ligne et application mobile Loto-Québec, audit des systèmes de gestion gaming (SGS), test de la segmentation réseau (gaming floor / back-office / surveillance), audit de la conformité PCI DSS pour les paiements par carte. Tarif casino : 10 000-20 000 $ CAD HT.",
        },
        {
          q: "Double conformité Loi 25 Québec et PIPEDA fédéral à Gatineau : comment naviguer les deux cadres ?",
          a: "Gatineau est juridiquement soumise à la Loi 25 québécoise (en vigueur depuis 2023) pour les entreprises de droit québécois, et à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE/PIPEDA) au fédéral pour les activités interprovinciales et fédérales. Les sous-traitants IT fédéraux de Gatineau sont souvent soumis aux deux régimes. La future Loi C-26 fédérale (ACIA) renforcera encore les obligations. CyberSecure réalise des audits de conformité dual-track Loi 25/PIPEDA : cartographie des données personnelles selon les deux cadres, analyse des droits d'accès et de rectification, audit des mesures de sécurité proportionnées aux risques (Loi 25 art. 6), préparation aux obligations de notification (CAI pour Loi 25, OPC pour PIPEDA).",
        },
        {
          q: "Pentest pour une PME tech ou un cabinet conseil IT à Gatineau travaillant avec Ottawa ?",
          a: "Les PME de services IT gatinéens fournissant des services au gouvernement fédéral d'Ottawa sont soumises aux exigences du Programme de sécurité des contrats (PSC) de TPSGC. Un audit de sécurité PME-fournisseur fédéral comprend : test d'intrusion des systèmes partagés avec les clients fédéraux (VPN, partage de fichiers), audit des droits d'accès aux systèmes GC (GCKey, MFA gouvernemental), test du cloisonnement entre les données de différents clients fédéraux, revue de la politique de traitement des données Protégé A et B. CyberSecure accompagne également la demande d'attestation de sécurité PSC et la rédaction de la politique de sécurité organisationnelle exigée par TPSGC. Tarif PME : 4 000-10 000 $ CAD HT.",
        },
        {
          q: "Que faire en cas de cyberattaque à Gatineau impliquant des données gouvernementales fédérales ?",
          a: "Un incident de sécurité chez un sous-traitant fédéral à Gatineau doit être traité en urgence. Contactez notre CERT 24h/24. Obligations : notification immédiate à votre représentant TPSGC et au CISO de l'agence cliente (délais contractuels souvent inférieurs à 24h), notification au Centre canadien pour la cybersécurité (CCCS : cyber.gc.ca, 1-833-CYBER-88), notification à la Commission d'accès à l'information (CAI) si données québécoises compromises, notification au Commissaire à la protection de la vie privée (OPC) si données PIPEDA compromises. Pour des données classifiées : notification immédiate au CST (Centre de la sécurité des télécommunications). CyberSecure coordonne la réponse avec les équipes de sécurité gouvernementales fédérales. Intervention à Gatineau en moins de 2 heures.",
        },
      ],
    }}
  />
);

export default AuditSecuriteGatineau;
