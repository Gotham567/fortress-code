import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMaineEtLoire = () => (
  <CityLandingPage
    data={{
      city: "Maine-et-Loire",
      citySlug: "maine-et-loire",
      region: "Pays de la Loire",
      postalCode: "49",
      intro: "CyberSecure est votre prestataire audit de sécurité Maine-et-Loire (49) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises d'Angers, Saint-Barthélemy-d'Anjou, Avrillé, Saumur, Cholet et tout le département.",
      localContext: "Le Maine-et-Loire allie un tissu industriel technologique (STMicroelectronics, pharma Servier) à une économie agro-alimentaire et viticole forte. Angers est un pôle universitaire avec l'ESEO, l'ISTIA, et des formations en mécatronique, électronique, et informatique embarquée. La French Tech Angers génère des startups IoT et SaaS. Le secteur de la sous-traitance automobile (Valeo, Faurecia) est présent en périphérie. Le tourisme culturel et oenotouristique (Château d'Angers, Loire) génère des flux de données clients importants.",
      sectors: [
        "Microélectronique (STMicroelectronics Angers — circuits intégrés, TISAX, R&D)",
        "Pharma (Servier Pharmaceuticals — R&D, essais cliniques, NIS2 santé)",
        "Agroalimentaire (Cointreau, Anjou Wines, charcuteries angevines — ERP, export)",
        "Mécatronique (Valeo, équipementiers — automatisation, OT)",
        "Numérique (French Tech Angers, ESEO, ISTIA — startups IoT, SaaS, cloud)",
        "Santé (CHU Angers, ICO — HDS, recherche oncologie, CHBS Cholet)",
        "Viticulture (caves Loire, négociants — e-commerce, certifications AOP)",
        "Collectivités (ALM, CD49 — e-administration, cloud souverain)",
      ],
      neighborhoods: [
        "Angers – Belle-Beille – Technopôle (49000)",
        "Saint-Barthélemy-d'Anjou – Trélazé (49124/49800)",
        "Avrillé – Beaucouzé (49240/49070)",
        "Saumur (49400)",
        "Cholet (49300)",
        "Les Ponts-de-Cé – Bouchemaine (49130)",
        "Segré-en-Anjou Bleu (49500)",
        "Doué-en-Anjou (49700)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Maine-et-Loire (49) ?",
          a: "Oui, CyberSecure intervient dans tout le 49 : Angers Loire Métropole, Saumurois, Choletais, Baugeois, Segréen. Nos consultants connaissent les secteurs microélectronique (STMicro), pharma (Servier), et agroalimentaire (Cointreau) du 49. CERT d'urgence 24/7.",
        },
        {
          q: "STMicroelectronics Angers : les outils EDA (Cadence, Synopsys) sont-ils des vecteurs d'attaque ?",
          a: "Les outils EDA (Electronic Design Automation) comme Cadence Virtuoso ou Synopsys Design Compiler sont des logiciels propriétaires coûteux qui tournent souvent sur des serveurs Linux dédiés (farm de calcul). Leurs vulnérabilités spécifiques : serveurs de licences (flexlm) souvent non patchés, interfaces web d'administration exposées sur le réseau interne, et accès SSH depuis les postes d'ingénieurs. Un audit de sécurité des outils EDA chez STMicro Angers couvre : version et patching des serveurs EDA, politique d'accès aux bibliothèques de conception (PDK sous NDA des fondeurs), et monitoring des exports de données de layouts. CyberSecure accompagne les équipes R&D microélectronique.",
        },
        {
          q: "Servier développe des médicaments contre le cancer : comment sécuriser les données d'essais cliniques contre l'espionnage ?",
          a: "Les données d'essais cliniques de Servier (résultats des études de phase III, données biomarqueurs des patients, formules moléculaires) valent des milliards pour les concurrents. La protection passe par : chiffrement end-to-end des bases de données d'essais (Oracle Clinical/Medidata Rave sur cloud chiffré), contrôle strict des accès des CRO (Clinical Research Organizations) qui co-gèrent les essais, audit des accès aux data rooms virtuelles (Veeva Vault), et formation des équipes investigateur sur le phishing. CyberSecure accompagne les laboratoires pharmaceutiques dans leur sécurité des données cliniques.",
        },
        {
          q: "La French Tech Angers génère des startups IoT embarqué : quels sont les pentests nécessaires avant commercialisation ?",
          a: "Les startups IoT d'Angers (capteurs intelligents, modules connectés pour l'industrie) doivent sécuriser leurs produits avant commercialisation pour éviter des rappels coûteux et des incidents de sécurité chez leurs clients. Un pentest IoT couvre : sécurité du firmware (extraction, analyse de sécurité, déboggage non autorisé), sécurité des protocoles de communication (BLE, MQTT, Zigbee, LoRaWAN), sécurité du backend cloud (API, authentification des appareils), et hardening du système embarqué (désactivation des ports de débogage JTAG/UART). CyberSecure propose des pentests IoT complets pour les startups hardware.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Maine-et-Loire ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Maine-et-Loire — diagnostics numériques. Angers Loire Métropole — programmes innovation. BPI France Pays de Loire — prêts innovation. Atlanpole et la French Tech Angers accompagnent leurs membres. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMaineEtLoire;
