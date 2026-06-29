import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteHauteGaronne = () => (
  <CityLandingPage
    data={{
      city: "Haute-Garonne",
      citySlug: "haute-garonne",
      region: "Occitanie",
      postalCode: "31",
      intro: "CyberSecure est votre prestataire audit de sécurité Haute-Garonne (31) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Toulouse, Blagnac, Colomiers, Tournefeuille, Muret et tout le département.",
      localContext: "La Haute-Garonne est le département de la capitale mondiale de l'aérospatial civil. Airbus (siège mondial à Blagnac), Thales Alenia Space, Safran, Collins Aerospace, et l'ensemble de la filière aéronautique génèrent une économie de la connaissance très exposée aux menaces cyber (espionnage industriel, APT). L'écosystème académique (INSA Toulouse, ISAE-Supaéro, INP Toulouse) et la French Tech Toulouse complètent ce tableau avec des startups deeptech. Le CHU Toulouse et l'Oncopole représentent le pôle santé-biotech régional. Toulouse est aussi une capitale de la recherche sur l'IA embarquée et les systèmes autonomes.",
      sectors: [
        "Aéronautique (Airbus siège, ATR, Latécoère, Collins Aerospace — TISAX, NIS2)",
        "Espace et défense (Thales Alenia Space, CNES, ArianeGroup — données critiques)",
        "Motorisation et équipements (Safran Aircraft Engines, Ratier-Figeac, Liebherr)",
        "Recherche et formation (INSA, ISAE-Supaéro, ONERA — IP, brevets, données)",
        "Santé et biotech (CHU Toulouse, Oncopole, Pierre Fabre — HDS, essais cliniques)",
        "Deeptech et IA (French Tech Toulouse, startups robotique, drones civils)",
        "Agroalimentaire (Pyrénées/HG, coopératives, IAA — ERP cloud)",
        "Collectivités (Toulouse Métropole, CD31 — cloud souverain, smart city)",
      ],
      neighborhoods: [
        "Toulouse – Capitole – Compans-Caffarelli (31000)",
        "Blagnac – Beauzelle – Cornebarrieu (31700)",
        "Colomiers – Tournefeuille (31770/31170)",
        "Labège – Ramonville – Quint-Fonsegrives (31670)",
        "Muret – Portet-sur-Garonne (31600)",
        "L'Union – Balma – Aucamville (31240)",
        "Cugnaux – Villeneuve-Tolosane (31270)",
        "Saint-Orens-de-Gameville – Escalquens (31650)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le département Haute-Garonne (31) ?",
          a: "Oui, CyberSecure intervient dans toute la Haute-Garonne : Toulouse Métropole, le Muretain, le Lauragais, et toutes les zones péri-urbaines. Nos consultants sont intégrés dans l'écosystème aéronautique et tech toulousain. CERT d'urgence 24/7.",
        },
        {
          q: "Comment CyberSecure réalise-t-il un pentest dans un environnement aéronautique (Airbus, sous-traitants) ?",
          a: "Le pentest dans un environnement aéronautique suit un protocole strict : accord de non-divulgation renforcé, délimitation précise du périmètre (éviter tout impact sur les systèmes de production), autorisation écrite de la DSI. Les phases classiques : reconnaissance OSINT (informations exposées publiquement sur l'entreprise), audit de l'annuaire Active Directory (technique de type BloodHound), tests des accès fournisseurs (portails extranet Airbus, Teamcenter, CATIA Web), et vérification des accès distants (VPN, Citrix). Le rapport final inclut un scoring CVSS et une roadmap de remédiation.",
        },
        {
          q: "TISAX : comment accompagner les PME aéronautiques dans leur certification ?",
          a: "TISAX (Trusted Information Security Assessment Exchange) est la norme de sécurité de l'information de l'industrie automobile et aéronautique européenne. Pour les PME sous-traitantes d'Airbus ou de Safran qui doivent se certifier TISAX : l'évaluation couvre 4 niveaux (AL1 à AL4) selon la sensibilité des données. CyberSecure réalise un gap analysis TISAX, aide à la mise en œuvre des mesures manquantes, et prépare les équipes à l'audit de certification par un auditeur accrédité ENX. Délai typique : 6-12 mois selon le niveau de maturité initial.",
        },
        {
          q: "L'Oncopole de Toulouse : comment protéger les données de recherche sur le cancer ?",
          a: "L'Oncopole rassemble l'Institut Universitaire du Cancer de Toulouse (IUCT), l'INSERM, et plusieurs laboratoires pharmaceutiques. Les données de recherche sur le cancer (génomique, données patients des essais cliniques, résultats d'imagerie) sont soumises au RGPD, à la réglementation HDS pour les données de santé, et à des obligations de conservation spécifiques. Les espaces de collaboration cloud entre chercheurs et partenaires industriels doivent être sécurisés : chiffrement des données partagées, gestion des droits par protocole de recherche, et audit des accès. CyberSecure audite les environnements de recherche médicale.",
        },
        {
          q: "Quels financements pour un audit cyber en Haute-Garonne ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Toulouse Métropole — chèques numériques. Toulouse Métropole — appels à projets innovation. BPI France Occitanie — prêts innovation. Aerospace Valley accompagne ses membres avec des ressources cybersécurité. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteHauteGaronne;
