import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteTanger = () => (
  <CityLandingPage
    data={{
      city: "Tanger",
      citySlug: "tanger",
      region: "Maroc — Tanger-Tétouan-Al Hoceïma",
      postalCode: "90000",
      intro: "CyberSecure réalise des pentests, audits de sécurité OT/IT et tests d'intrusion à Tanger pour Renault-Dacia, Port Med (1er port de Méditerranée), la zone franche Tanger Free Zone et les entreprises de la chaîne d'approvisionnement automobile. Cabinet qualifié PASSI ANSSI, nous intervenons dans la région Tanger-Tétouan avec une expertise en sécurité des supply chains industrielles, des systèmes portuaires et des usines automobiles exposés aux menaces cyber OT.",
      localContext: "Tanger est devenu un hub industriel et logistique majeur de la Méditerranée. Port Med est le 1er port de la Méditerranée par le trafic conteneurs, traitant plus de 9 millions d'EVP par an — une infrastructure critique nationale dont la compromission aurait un impact économique colossal. Renault Group et Dacia opèrent la plus grande usine automobile d'Afrique à Melloussa (Tanger) avec 400 000 véhicules par an et des systèmes OT (robots ABB, Kuka, lignes de peinture automatisées). La zone franche Tanger Free Zone héberge 800+ entreprises internationales (Lear Corporation, Sumitomo Electric, Yazaki) dans le secteur automobile. BMCE Bank et les banques marocaines ont des pôles régionaux à Tanger. La position géopolitique de Tanger (détroit de Gibraltar, frontière Espagne) en fait une zone d'intérêt pour des services de renseignement étrangers.",
      sectors: [
        "Automobile et supply chain (Renault-Dacia, équipementiers Tanger)",
        "Port et logistique (Port Med, Marsa Maroc, opérateurs TEU)",
        "Zone franche industrielle (Lear, Sumitomo, Yazaki, Delphi)",
        "Finance et banque (BMCE, Attijariwafa, agences régionales)",
        "Textile et confection (zones industrielles, export EU)",
        "Tourisme et services (hôtels médina, croisiéristes)",
      ],
      neighborhoods: [
        "Port Med et Ksar Sghir (hub portuaire, logistique)",
        "Melloussa et Gzenaya (usine Renault-Dacia, industrie automobile)",
        "Tanger Free Zone (équipementiers, manufacturing, bureaux)",
        "Centre de Tanger (Médina, Ville Nouvelle, Malabata)",
        "Tétouan et M'diq (industrie légère, textile, tourisme balnéaire)",
        "Fnideq et frontière Ceuta (commerce transfrontalier, logistique)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest de supply chain automobile à Tanger (Renault, équipementiers) ?",
          a: "Un audit de sécurité de supply chain automobile à Tanger couvre à la fois les systèmes IT des équipementiers et les interfaces EDI/B2B avec Renault. Tarifs indicatifs : audit de sécurité d'un équipementier automobile (réseau, Active Directory, EDI) entre 30 000 et 80 000 MAD HT (2 800-7 400 €) ; pentest OT/IT usine (segmentation réseau industriel, SCADA robots) entre 50 000 et 130 000 MAD HT ; audit supply chain complet (cartographie des accès fournisseurs, test de l'interface EDI Renault) entre 80 000 et 180 000 MAD HT. Pour Renault Group (périmètre France), les audits peuvent être commandés depuis la France et intégrer les sites de Melloussa dans un périmètre mondial. CyberSecure intervient en arabe, français et anglais.",
        },
        {
          q: "Audit Port Med à Tanger : comment sécuriser le 1er port de la Méditerranée ?",
          a: "Port Med est une infrastructure critique nationale marocaine traitant plus de 9 millions de conteneurs par an — sa compromission bloquerait une partie significative du commerce extérieur marocain et méditerranéen. Un audit Port Med comprend : test d'intrusion des systèmes de gestion de Terminal (TOS — Terminal Operating System, ex: Navis N4), audit des accès des compagnies maritimes et agents consignataires, test de la segmentation entre réseaux opérationnels portuaires et réseaux administratifs, audit des systèmes AIS/VTS (Vessel Traffic Service), test des accès douaniers (BADR — Base Automatisée de Dédouanement en Réseau). Ces prestations nécessitent une autorisation de l'Agence Spéciale Tanger-Med (TMSA) et coordination avec la Gendarmerie Royale Maritime.",
        },
        {
          q: "Pentest usine Renault-Dacia à Melloussa (Tanger) : sécurité OT robots et systèmes industriels ?",
          a: "L'usine Renault-Dacia de Melloussa est la plus grande usine automobile d'Afrique avec 8 000 employés et des centaines de robots ABB et Kuka pilotés par des systèmes Siemens S7 et Allen-Bradley. Un audit OT usine automobile comprend : cartographie du réseau industriel (OT network mapping sans impact production), audit des interfaces IT/OT (passerelles DMZ, historians OSIsoft PI), test de la politique de mises à jour des automates (PLC patching — souvent bloqué pour raisons de certification), audit des accès à distance des intégrateurs et fournisseurs de robots, revue de la politique cybersécurité selon les recommandations RENIX (Renault Internal Security Standard). Coordination préalable avec le DSI Renault Maroc obligatoire.",
        },
        {
          q: "Sécurité de la zone franche Tanger Free Zone : comment auditer un équipementier automobile international ?",
          a: "Les équipementiers de la Tanger Free Zone (Lear Corporation, Sumitomo Electric, Yazaki — fabricants de faisceaux électriques) gèrent des systèmes connectés à leurs donneurs d'ordre (Renault, Stellantis, Ford) via des EDI et des portails fournisseurs. La sécurité de ces interfaces est critique : une compromission d'un fournisseur de rang 1 peut servir de tremplin pour attaquer l'OEM. CyberSecure réalise : audit des accès EDI aux portails fournisseurs (Renault Supplier Portal, Stellantis Connect), test d'intrusion des réseaux internes des équipementiers, test de phishing ciblé sur les équipes achat et IT, audit de la conformité TISAX (Trusted Information Security Assessment Exchange — standard de cybersécurité automobile). Tarif équipementier TFZ : 30 000-80 000 MAD HT.",
        },
        {
          q: "Que faire en cas de cyberattaque à Tanger (ransomware Port Med, incident Renault, attaque supply chain) ?",
          a: "En cas d'incident à Tanger, notre CERT est disponible 24h/24 en français et arabe. Pour une attaque sur Port Med ou Renault : notification immédiate à la DGSSI, coordination avec le DSI du groupe international (Renault SA Paris, Lear Corporation Detroit), préservation des preuves forensiques. Pour un équipementier automotive : notification contractuelle au donneur d'ordre (Renault, Stellantis ont des exigences de notification d'incident dans les SLA de supply chain). CyberSecure coordonne l'investigation forensique, le containment des systèmes OT industriels sans arrêt de production, et la reconstruction sécurisée. Dépôt de plainte à la BNPJ (Brigade Nationale de la Police Judiciaire) et notification à l'Administration des Douanes si les systèmes BADR sont affectés.",
        },
      ],
    }}
  />
);

export default AuditSecuriteTanger;
