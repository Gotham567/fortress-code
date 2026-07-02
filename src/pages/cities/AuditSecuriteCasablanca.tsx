import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCasablanca = () => (
  <CityLandingPage
    data={{
      city: "Casablanca",
      citySlug: "casablanca",
      region: "Maroc — Grand Casablanca-Settat",
      postalCode: "20000",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Casablanca pour Attijariwafa Bank, BMCE Bank of Africa, Banque Populaire, OCP Group, Royal Air Maroc et les entreprises de Casablanca Finance City. Cabinet qualifié PASSI ANSSI, nous intervenons au Maroc avec des rapports conformes aux exigences de la DGSSI (l'équivalent marocain de l'ANSSI), en dirhams marocains ou en euros selon les préférences.",
      localContext: "Casablanca est la capitale économique du Maroc et le hub financier panafricain de référence avec Casablanca Finance City (CFC). OCP Group est le 1er exportateur mondial de phosphates et d'engrais, une infrastructure industrielle et OT critique à l'échelle nationale. Attijariwafa Bank est la 8e banque africaine par les actifs, BMCE Bank of Africa est présente dans 20 pays africains, et Banque Populaire (Groupe BCP) est le 1er réseau bancaire marocain. Royal Air Maroc gère une infrastructure aéronautique nationale. Maroc Telecom, Inwi et Orange Maroc opèrent les télécommunications du Royaume. Renault-Dacia Casablanca produit des centaines de milliers de véhicules par an avec des systèmes OT. La DGSSI (Direction Générale de la Sécurité des Systèmes d'Information) est le régulateur marocain en cybersécurité, équivalent à l'ANSSI française. La Loi 09-08 (protection des données personnelles, CNDP) impose des obligations croissantes aux entreprises casablancaises.",
      sectors: [
        "Banques et finance (Attijariwafa, BMCE, BP, CFC, fintechs)",
        "Industrie chimique et phosphates (OCP Group, Lydec, Sonasid)",
        "Télécommunications (Maroc Telecom, Inwi, Orange Maroc)",
        "Aéronautique et transport (Royal Air Maroc, aéroport CMN)",
        "Automobile et industrie (Renault-Dacia, Safran, sous-traitants)",
        "E-commerce et retail (Jumia Maroc, Marjane, Label'Vie)",
      ],
      neighborhoods: [
        "Casablanca Finance City (CFC, Anfa, quartier d'affaires)",
        "Centre de Casablanca (Maarif, Centre 2000, medina)",
        "Zone industrielle Aïn Sebaâ (Renault, OCP, industrie)",
        "Quartier des affaires (Hassan II, Gauthier, Foire)",
        "Sidi Bernoussi et Hay Mohammadi (zones portuaires)",
        "Mohammedia et côte (industrie pétrochimique, raffinerie Samir)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest au Maroc pour une banque ou une fintech à Casablanca ?",
          a: "Les tarifs au Maroc sont exprimés en dirhams marocains (MAD) ou en euros : un pentest d'application web bancaire ou fintech coûte entre 15 000 et 40 000 MAD HT (soit environ 1 400 à 3 700 €) pour une PME ou startup ; un audit de sécurité complet d'une banque (infrastructure, réseau, Active Directory, applications core banking) entre 50 000 et 120 000 MAD HT (4 600-11 100 €) ; un test d'intrusion sur système OCP ou industrie chimique entre 80 000 et 200 000 MAD HT selon la complexité OT. Pour les filiales marocaines de groupes internationaux (Sociéte Générale Maroc, CIH, Crédit Agricole Maroc), les devis peuvent être établis en euros. CyberSecure émet des rapports bilingues français/arabe sur demande, conformes aux recommandations de la DGSSI.",
        },
        {
          q: "Votre qualification PASSI ANSSI est-elle reconnue par la DGSSI marocaine ?",
          a: "La DGSSI (Direction Générale de la Sécurité des Systèmes d'Information) du Maroc s'est fortement inspirée du modèle ANSSI français lors de la construction de son référentiel de qualification. La DGSSI a mis en place son propre programme de labellisation des prestataires de sécurité (similaire au PASSI), et reconnaît et valorise la qualification PASSI ANSSI comme équivalent de haute qualité dans le cadre des audits commandés par des entités soumises à ses directives. Les entreprises du secteur financier marocain (BAM — Bank Al-Maghrib) et les opérateurs d'infrastructures critiques (OCP, Maroc Telecom) cherchent des prestataires qualifiés PASSI pour leurs audits, car cette qualification constitue la référence francophone la plus exigeante. CyberSecure est régulièrement mandaté par des groupes marocains ayant des filiales en France.",
        },
        {
          q: "Comment auditer la sécurité d'une fintech à Casablanca Finance City (CFC) ?",
          a: "Casablanca Finance City héberge des fintechs (M2T, HPS, CMI, startups African tech) opérant sous le régime réglementaire de Bank Al-Maghrib (BAM) et de l'ACAPS (assurances). Un audit fintech CFC comprend : pentest de l'application mobile (Android/iOS) et de l'API de paiement, audit de la conformité PCI DSS (si traitement de cartes bancaires), test de l'authentification forte (OTP, biométrie), revue de la sécurité de l'architecture cloud (AWS, GCP, Azure), audit des accès des partenaires bancaires et intégrateurs. Pour les fintechs Mobile Money (M-Wallet, HPS PowerCARD), CyberSecure réalise des tests spécifiques de fraude mobile (SIM swapping, replay attacks, MITM sur protocoles de paiement mobile). Rapport compatible BAM et DGSSI.",
        },
        {
          q: "Test d'intrusion OCP Group ou industrie chimique à Casablanca : méthodologie OT/IT industrielle ?",
          a: "OCP Group opère des sites miniers, des unités de traitement chimique et des ports d'exportation avec des systèmes OT (SCADA, DCS, automates) représentant une infrastructure critique nationale. Un pentest OT/IT OCP-type comprend : cartographie réseau industriel (identification des PLCs, DCS, historians), audit des interfaces IT/OT (PI System OSIsoft, passerelles DMZ industrielle), test sans intrusion des protocoles industriels exposés (Modbus TCP, OPC-UA, Profinet), audit des accès à distance des techniciens de maintenance (VPN industriel, Citrix), revue de la segmentation OT/IT selon IEC 62443. CyberSecure coordonne avec les équipes HSE et maintenance d'OCP pour garantir zéro impact sur la production de phosphates. Tarif OT industriel : sur devis selon périmètre, environ 80 000-200 000 MAD.",
        },
        {
          q: "Que faire en cas de cyberattaque à Casablanca (incident bancaire, attaque OCP, ransomware) ?",
          a: "En cas de cyberattaque à Casablanca, contactez notre CERT 24h/24 (support en français et arabe). Obligations légales marocaines : notification à la DGSSI (déclaration d'incident au maci@dgssi.gov.ma) pour les opérateurs d'infrastructures critiques et les administrations, notification à la CNDP (Commission Nationale de contrôle de la Protection des Données à caractère Personnel, Loi 09-08) si données personnelles compromises, notification à Bank Al-Maghrib si établissement financier. Pour OCP : notification interne immédiate à la DSI centrale et coordination avec la cellule HSE si des systèmes OT sont affectés. CyberSecure coordonne l'investigation forensique, la reconstruction sécurisée des systèmes, et peut assurer la liaison avec le Centre Marocain d'Alerte et de Gestion des Incidents Informatiques (maCERT/DGSSI). Dépôt de plainte à la BNPJ (Brigade Nationale de la Police Judiciaire, unité cybercriminalité).",
        },
      ],
    }}
  />
);

export default AuditSecuriteCasablanca;
