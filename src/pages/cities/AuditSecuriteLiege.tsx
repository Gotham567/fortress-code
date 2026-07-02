import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLiege = () => (
  <CityLandingPage
    data={{
      city: "Liège",
      citySlug: "liege",
      region: "Belgique — Wallonie",
      postalCode: "4000",
      intro: "CyberSecure réalise des pentests OT/IT industriels, des audits Active Directory et des tests d'intrusion à Liège pour ArcelorMittal, le CHU de Liège, l'aéroport cargo DHL et les entreprises du Port de Liège exposées aux cybermenaces sur systèmes de contrôle industriel (SCADA/ICS). Cabinet qualifié PASSI ANSSI, nous intervenons en Wallonie avec une expertise spécifique en sécurité des environnements industriels et des données de santé sous NIS2 belge.",
      localContext: "Liège est une place industrielle de premier plan en Belgique avec ArcelorMittal Liège (sidérurgie avec systèmes OT critique SCADA), l'aéroport de Liège hébergeant le hub DHL Europe (infrastructure logistique critique), le Port de Liège (4e port fluvial européen en tonnage), et John Cockerill Group (défense, énergie, industrie). Le CHU de Liège traite des millions de données de santé soumises au RGPD et à la directive NIS2 en tant qu'entité essentielle. L'Université de Liège héberge de nombreux spin-offs technologiques. Les environnements OT/IT industriels liégeois sont particulièrement exposés aux ransomwares ciblant la production (comme l'attaque contre les aciéries européennes en 2022) et aux attaques de supply chain visant la logistique aéroportuaire. CyberSecure conduit des audits convergents IT/OT selon la méthodologie IEC 62443 et les recommandations ANSSI pour les systèmes industriels.",
      sectors: [
        "Sidérurgie et métallurgie OT (ArcelorMittal, Cockerill)",
        "Santé et CHU (données NIS2, dossiers patients)",
        "Aéroport et logistique cargo (DHL, TUI, frêt)",
        "Port fluvial et transport (Port de Liège, conteneurs)",
        "Défense et industrie (John Cockerill, sous-traitants)",
        "Université et spin-offs technologiques (ULiège)",
      ],
      neighborhoods: [
        "Centre de Liège (Guillemins, Outremeuse)",
        "Zone industrielle Flémalle-Seraing (ArcelorMittal)",
        "Aéroport de Liège (Grâce-Hollogne, cargo DHL)",
        "Port de Liège (Val Benoît, Renory)",
        "Sart-Tilman (ULiège, CHU, technopole)",
        "Province de Liège (Herstal, Visé, Huy)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest OT/IT industriel à Liège pour une aciérie ou une usine ?",
          a: "Un pentest OT/IT industriel à Liège est plus complexe qu'un pentest IT classique car il nécessite des précautions spécifiques pour ne pas impacter la production. Les tarifs indicatifs : audit de sécurité OT (cartographie, analyse de risque, sans intrusion active) entre 8 000 et 15 000 € HT ; pentest OT/IT convergent sur environnement de test (réplique ou plage de maintenance) entre 12 000 et 25 000 € HT ; audit complet SCADA/ICS avec test d'intrusion réseau industriel et rapport IEC 62443 entre 20 000 et 40 000 € HT. CyberSecure travaille avec des ingénieurs ayant une double compétence IT cybersécurité et systèmes industriels. Nous planifions les tests pendant les maintenances planifiées pour zéro impact sur la production.",
        },
        {
          q: "Comment auditer la sécurité du CHU de Liège (données de santé NIS2) ?",
          a: "Le CHU de Liège est classé entité essentielle selon la directive NIS2 belge, ce qui implique des obligations d'audit et de déclaration d'incidents au CCB. Un audit de sécurité CHU comprend : pentest des applications web du Dossier Patient Informatisé (DPI), audit des accès aux systèmes PACS (imagerie médicale), test d'intrusion réseau interne (segmentation entre réseau médical et administratif), audit Active Directory des droits des médecins et soignants, test de phishing ciblé sur le personnel soignant (vecteur principal d'attaque hôpital). CyberSecure a une expérience spécifique en milieu hospitalier. Nos rapports sont conformes aux exigences du CCB et de l'APD pour la notification des violations de données de santé.",
        },
        {
          q: "Pentest aéroport de Liège et systèmes cargo DHL : comment procéder ?",
          a: "L'aéroport de Liège (LGG) est une infrastructure critique classée OIE (Opérateur d'Importance Essentielle) selon NIS2. Un pentest aéroport comprend des phases spécifiques : audit des systèmes de gestion du trafic cargo (WMS, TMS), test d'intrusion sur les réseaux de gestion de piste et de tour de contrôle (en environnement sandboxé), audit des accès partenaires (DHL, Amazon Air, compagnies charters), test de social engineering sur les agents de sûreté et IT. Toute intervention requiert des autorisations préalables formelles de la direction et de la DGTA (Direction Générale Transport Aérien). CyberSecure coordonne ces autorisations et adapte le périmètre aux contraintes opérationnelles aéroportuaires.",
        },
        {
          q: "Audit Active Directory à Liège pour une entreprise industrielle : par où commencer ?",
          a: "L'Active Directory est le point d'entrée privilégié des ransomwares visant l'industrie liégeoise (ex: NotPetya avait paralysé des sites ArcelorMittal en 2017). Un audit AD industriel à Liège commence par une évaluation BloodHound des chemins d'attaque vers les comptes Domain Admin, puis analyse des comptes de service utilisés pour les interfaces IT/OT (souvent trop privilégiés), vérification de la segmentation entre le domaine corporate et les DMZ industrielles, audit des politiques de mots de passe et des protocoles d'authentification legacy (NTLM v1, protocoles Kerberos faibles). CyberSecure livre un plan de remédiation priorisé selon l'exposition réelle, avec des quick wins réalisables sans interruption de production.",
        },
        {
          q: "Que faire en cas de cyberattaque à Liège (ransomware ou incident industriel) ?",
          a: "En cas d'incident de sécurité à Liège, appelez notre CERT 24/7 immédiatement. Pour un ransomware industriel : isolez les segments réseau IT des réseaux OT/SCADA sans couper les automates (risque de sécurité physique si procédés en cours), ne payez pas de rançon avant expertise, conservez les logs des systèmes de supervision. CyberSecure coordonne la réponse : investigation forensique pour identifier le patient zéro et le vecteur d'entrée, containment réseau, reconstruction des systèmes compromis, notification au CCB (obligation NIS2 : 24h pour alerte initiale, 72h pour notification complète, 1 mois pour rapport final), et dépôt de plainte auprès de la police fédérale belge (Computer Crime Unit).",
        },
      ],
    }}
  />
);

export default AuditSecuriteLiege;
