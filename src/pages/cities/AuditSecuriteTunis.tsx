import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteTunis = () => (
  <CityLandingPage
    data={{
      city: "Tunis",
      citySlug: "tunis",
      region: "Tunisie — Gouvernorat de Tunis",
      postalCode: "1000",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Tunis pour les centres de services offshore nearshoring (Capgemini, Orange Business, EY Tunisie), la BIAT, la Banque Centrale de Tunisie (BCT), Tunisie Telecom et Ooredoo. Cabinet qualifié PASSI ANSSI, nous intervenons en Tunisie avec une expertise en sécurité des centres nearshoring IT pour clients EU et en audit des systèmes bancaires tunisiens sous supervision BCT et INPDP.",
      localContext: "Tunis est le principal hub de nearshoring IT d'Afrique du Nord pour les entreprises françaises et européennes : Capgemini Tunisia, Orange Business Services Tunisie, EY Tunisie, Accenture et des centaines de centres de service traitent des données confidentielles de clients EU. Cette position crée une exigence de sécurité à deux niveaux : les clients EU imposent des audits de sécurité PASSI à leurs prestataires tunisiens (contrats MSP), et la Tunisie développe son propre cadre de cybersécurité via l'ANSI (Agence Nationale de la Sécurité Informatique). La BIAT (Banque Internationale Arabe de Tunisie) est la 1ère banque privée tunisienne, la BCT (Banque Centrale de Tunisie) régule le système financier. Tunisie Telecom et Ooredoo Tunisie sont les principaux opérateurs. L'INPDP (Instance Nationale de Protection des Données Personnelles) applique la Loi organique 63-2004 — en cours d'alignement sur le RGPD.",
      sectors: [
        "Nearshoring IT et offshoring (centres de services EU, call centers tech)",
        "Banques et finance (BIAT, STB, Attijari, ATB, BCT)",
        "Télécommunications (Tunisie Telecom, Ooredoo, Orange Tunisie)",
        "Assurances (STAR, Lloyd Tunisie, Comar, Maghrebia)",
        "Industrie et agroalimentaire (Poulina Group Holding, SFBT)",
        "Startups tech (Tunisian Silicon Valley, Carthage Business Angels)",
      ],
      neighborhoods: [
        "Tunis Centre et Médina (administrations, BIAT, BTI)",
        "Les Berges du Lac I & II (centres d'affaires, nearshoring, sièges sociaux)",
        "Ariana et Ennasr (tech, universités, PME nearshoring)",
        "El Menzah et La Soukra (résidentiel aisé, PME services)",
        "Carthage et Sidi Bou Saïd (institutions, tourisme haut de gamme)",
        "Tunis Sud et Megrine (industrie, logistique, zones franches)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Tunis pour un centre offshore nearshoring ou une startup IT ?",
          a: "Les tarifs à Tunis varient selon que le client est tunisien (facturation en TND) ou européen (facturation en EUR depuis la France). Facturation TND pour client tunisien : pentest d'application web ou système IT d'un centre offshore entre 3 000 et 8 000 TND HT (soit environ 900-2 400 €) ; audit de sécurité complet (infrastructure, AD, applications) entre 8 000 et 20 000 TND HT. Facturation EUR pour client EU faisant auditer son prestataire tunisien : audit de sécurité PASSI d'un centre nearshoring entre 8 000 et 20 000 € HT (l'exigence de conformité RGPD du client EU justifie les tarifs européens). CyberSecure émet des rapports en français conformes aux standards ANSSI et acceptés par les DPO des clients EU pour leurs revues fournisseurs annuelles.",
        },
        {
          q: "Un client français peut-il imposer un audit PASSI à son prestataire nearshoring tunisien ?",
          a: "Oui, et c'est même recommandé. Le RGPD (article 28) impose au responsable de traitement de choisir des sous-traitants présentant des garanties suffisantes de sécurité, et d'auditer régulièrement ces garanties. Un client français utilisant un centre de services à Tunis pour traiter des données personnelles (support client, backoffice RH, comptabilité) doit s'assurer que son prestataire tunisien protège ces données conformément au RGPD. CyberSecure réalise des audits PASSI des centres nearshoring tunisiens pour le compte de leurs clients EU : revue des mesures de sécurité techniques et organisationnelles (RGPD art. 32), test d'intrusion des systèmes accédant aux données EU, audit des droits d'accès des employés tunisiens aux données européennes. Le rapport PASSI est transmis au DPO du client EU pour sa documentation de conformité.",
        },
        {
          q: "Comment auditer la sécurité d'une banque tunisienne (BIAT, STB, ATB) soumise à la BCT ?",
          a: "Les banques tunisiennes sont soumises aux circulaires de la Banque Centrale de Tunisie (BCT) en matière de sécurité informatique, notamment la circulaire 2021-04 sur la résilience opérationnelle des établissements de crédit. Un audit bancaire BIAT-type comprend : pentest de l'espace client e-banking et de l'application mobile, audit de l'infrastructure core banking (T24 Temenos, Flexcube Oracle), test d'intrusion du réseau interne (segmentation entre front-office et back-office), audit Active Directory et des accès privilégiés (administrateurs systèmes), test de phishing ciblé sur les agents bancaires. CyberSecure produit des rapports compatibles avec les exigences de la BCT et de l'ANSI tunisienne. Tarif audit bancaire : 15 000-40 000 TND HT ou sur devis EUR pour banques à actionnariat étranger.",
        },
        {
          q: "ANSI Tunisie vs PASSI ANSSI France : quelle différence pour choisir son prestataire d'audit ?",
          a: "L'ANSI (Agence Nationale de la Sécurité Informatique de Tunisie) est l'autorité nationale tunisienne de cybersécurité, équivalent fonctionnel de l'ANSSI française. Elle délivre des homologations de systèmes d'information sensibles pour les administrations tunisiennes et coordonne le CERT tunisien. La qualification PASSI de l'ANSSI française est la certification de prestataire d'audit la plus exigeante de l'espace francophone — elle certifie les compétences techniques, l'indépendance et la méthodologie de l'auditeur. Pour une entreprise tunisienne ayant des clients EU : choisir un prestataire qualifié PASSI ANSSI (CyberSecure) signifie que l'audit sera reconnu à la fois par les régulateurs tunisiens (ANSI, BCT, INPDP) et par les clients européens (DPO RGPD, ANSSI française, CCB belge). C'est la garantie d'un seul audit valable dans les deux espaces réglementaires.",
        },
        {
          q: "Que faire en cas de cyberattaque dans un centre nearshoring ou une banque à Tunis ?",
          a: "En cas d'incident à Tunis, notre CERT est disponible 24h/24 en français et arabe. Pour un centre nearshoring traitant des données EU : notification immédiate au client donneur d'ordre européen (obligation contractuelle et RGPD article 33 : le responsable de traitement EU doit être notifié sous 72h pour notifier lui-même la CNIL/autorité de protection des données), notification à l'ANSI tunisienne (mCERT : cert@ansi.tn) et à l'INPDP si données personnelles tunisiennes compromises. Pour une banque : notification à la BCT selon la circulaire 2021-04, isolation des systèmes compromis sans interruption des transactions en cours si possible. CyberSecure coordonne l'investigation forensique, la reconstruction sécurisée et la double notification tunisienne/EU. Dépôt de plainte à la police cyber (BCTII — Brigade de lutte contre les infractions liées aux technologies de l'information).",
        },
      ],
    }}
  />
);

export default AuditSecuriteTunis;
