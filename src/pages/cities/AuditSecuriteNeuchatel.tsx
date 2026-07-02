import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNeuchatel = () => (
  <CityLandingPage
    data={{
      city: "Neuchâtel",
      citySlug: "neuchatel",
      region: "Suisse — Canton de Neuchâtel",
      postalCode: "2000",
      intro: "CyberSecure réalise des pentests, audits de sécurité industriels et tests d'intrusion à Neuchâtel pour le Swatch Group, ETA, Breitling, le CSEM et les entreprises de microtechnique exposées à l'espionnage industriel sur leur R&D horlogère. Cabinet qualifié PASSI ANSSI, nous intervenons dans l'Arc jurassien avec une expertise unique en sécurité des systèmes OT de précision et en protection de la propriété intellectuelle de l'industrie horlogère suisse.",
      localContext: "Neuchâtel est le cœur de l'Arc jurassien horloger, abritant les géants mondiaux de la montre : Swatch Group (Omega, Longines, Tissot, Rado — siège Biel/Bienne mais R&D à Neuchâtel via ETA), TAG Heuer (LVMH, R&D mouvements), Breitling (montres aviation), et le CSEM (Centre Suisse d'Électronique et de Microtechnique) qui développe les technologies de microfabrication utilisées par toute l'industrie horlogère mondiale. Ces entreprises possèdent une propriété intellectuelle d'une valeur estimée à des centaines de milliards — les brevets horlogers, les savoir-faire de fabrication des complications et les algorithmes de régulation sont des cibles d'espionnage économique documentées (services chinois, coréens). Les systèmes de production horlogère (MOCN, robots d'assemblage, bancs de contrôle qualité) sont des systèmes OT spécialisés dont la compromission entraînerait des pertes de production considérables et une atteinte à la confidentialité des nouveaux modèles.",
      sectors: [
        "Horlogerie de luxe et mouvements (Swatch Group, ETA, TAG Heuer)",
        "Microtechnique et MEMS (CSEM, Colibrys, IMT)",
        "Medtech et instruments de précision (Kistler, ENAC)",
        "Université et recherche (UniNE, HE-Arc, laboratoires)",
        "Fintech et banque (Banque cantonale neuchâteloise, BCN)",
        "PME de l'Arc jurassien (sous-traitants horlogerie, mécanique fine)",
      ],
      neighborhoods: [
        "Neuchâtel centre (Vieux quartiers, Écoles, Port)",
        "Maladière et La Chaux-de-Fonds (industrie horlogère)",
        "Le Locle et Les Brenets (horlogerie UNESCO patrimoine)",
        "Cortaillod et Areuse (industrie, chimie spécialisée)",
        "Fleurier et Val-de-Travers (Absinthe, microtechnique)",
        "Colombier et Bevaix (zones artisanales, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit de sécurité à Neuchâtel pour une entreprise horlogère (Swatch, Breitling, TAG Heuer) ?",
          a: "Un audit de sécurité d'une entreprise horlogère neuchâteloise couvre à la fois les systèmes IT (bureautique, ERP, PLM) et les systèmes OT (MOCN, robots d'assemblage, bancs de contrôle qualité). Tarifs indicatifs : audit de sécurité OT horlogerie (cartographie, analyse risque, sans intrusion) entre 8 000 et 18 000 CHF HT ; pentest IT convergent (réseau interne, AD, accès PLM) entre 10 000 et 22 000 CHF HT ; audit complet IT/OT avec test du cloisonnement R&D/production entre 20 000 et 45 000 CHF HT ; Red Team exercise simulant une exfiltration de données R&D entre 30 000 et 70 000 CHF HT. Les rapports incluent une analyse de l'exposition à l'espionnage industriel basée sur le contexte géopolitique de l'industrie horlogère suisse.",
        },
        {
          q: "Comment auditer la sécurité du CSEM (Centre Suisse d'Électronique et de Microtechnique) à Neuchâtel ?",
          a: "Le CSEM développe des technologies de rupture en microfabrication, photovoltaïque, capteurs inertiels et communication sans fil utilisées par des partenaires industriels mondiaux sous NDA. La sécurité de ces recherches est critique. Un audit CSEM comprend : test d'intrusion des plateformes de partage de données avec les partenaires industriels (portail collaboratif, FTP sécurisé), audit des droits d'accès aux laboratoires virtuels (simulation CAD, données de caractérisation), test de phishing ciblé sur les ingénieurs de recherche, audit de la segmentation réseau entre les laboratoires de différents projets concurrents, revue des politiques de classification des données (public, confidentiel, secret industriel). CyberSecure accompagne le CSEM dans la rédaction de sa politique de sécurité de l'information recherche.",
        },
        {
          q: "Espionnage industriel horloger à Neuchâtel : comment détecter et prévenir le vol de propriété intellectuelle ?",
          a: "L'industrie horlogère suisse est l'une des plus ciblées par l'espionnage économique en Europe : brevets de mouvements mécaniques, recettes d'alliages métalliques spéciaux, algorithmes de réglage des oscillateurs, plans 3D des complications. Les vecteurs d'attaque documentés : recrutement d'ex-employés avec extraction de données (insider threat), intrusion réseau pour accéder aux PLM/PDM contenant les plans 3D, compromission des emails de direction pour accéder aux négociations commerciales sensibles. CyberSecure met en place des détections comportementales (DLP, UEBA) sur les systèmes PLM (PTC Windchill, Siemens Teamcenter), audite les logs d'accès aux dessins techniques et déploie des honey-tokens dans les repositories de plans pour détecter les exfiltrations.",
        },
        {
          q: "Pentest pour une sous-traitant horloger à Neuchâtel (PME mécanique fine, décolletage) ?",
          a: "Les sous-traitants horlogers de l'Arc jurassien (décolleteurs, décorateurs, fabricants de cadrans) gèrent des fichiers de plans confidentiels de leurs donneurs d'ordre (Swatch, Richemont, LVMH) et sont parfois le maillon faible de la supply chain horlogère. Un pentest PME sous-traitant comprend : audit des droits d'accès aux fichiers CAO partagés par les donneurs d'ordre, test de phishing sur les opérateurs et techniciens, audit de la sécurité du Wi-Fi atelier, revue des sauvegardes (ransomware). Tarif PME horlogère : 3 000-7 000 CHF HT. CyberSecure propose aussi un service de veille sur les fuites de données de sous-traitants (dark web monitoring).",
        },
        {
          q: "Que faire en cas de vol de données horlogères ou de cyberattaque à Neuchâtel ?",
          a: "En cas d'incident à Neuchâtel impliquant des données horlogères ou de recherche, notre CERT est disponible 24h/24. Priorités : préservation des logs PLM et des systèmes de fichiers partagés (ne rien supprimer), isolation immédiate des systèmes compromis, identification des fichiers potentiellement exfiltrés (analyse des transferts sortants suspects). CyberSecure coordonne l'investigation forensique, la notification au PFPDT (LPD si données personnelles), la notification au NCSC et le dépôt de plainte au Ministère Public neuchâtelois. Pour les entreprises avec des partenaires internationaux (LVMH, PPR/Kering, Richemont), nous gérons la notification contractuelle aux donneurs d'ordre selon les clauses de sécurité des contrats de sous-traitance.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNeuchatel;
