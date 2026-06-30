import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNordPasDeCalais = () => (
  <CityLandingPage
    data={{
      city: "Nord-Pas-de-Calais",
      citySlug: "nord-pas-de-calais",
      urlPath: "cybersecurite-nord-pas-de-calais",
      region: "Hauts-de-France",
      postalCode: "59 / 62",
      intro: "CyberSecure est votre prestataire cybersécurité Nord-Pas-de-Calais : audit PASSI certifié, pentest, conformité RGPD et NIS2, réponse aux incidents cyber 24/7 pour les entreprises industrielles, PME, ETI, collectivités et sous-traitants des départements 59 (Nord) et 62 (Pas-de-Calais).",
      localContext: "Le Nord-Pas-de-Calais regroupe deux départements densément industrialisés. Le Nord (59) concentre la métropole lilloise (capitale tech du nord avec EuraTechnologies), l'industrie textile (Roubaix, Tourcoing), la distribution (Auchan, Leroy Merlin, Décathlon — tous présents dans la MEL), la santé (CHU Lille, cliniques) et une forte densité de PME de services. Le Pas-de-Calais (62) est dominé par la sous-traitance automobile, la logistique (axe transmanche), l'agroalimentaire et l'ex-bassin minier en reconversion numérique. Ces deux territoires sont particulièrement ciblés par les ransomwares, notamment les sous-traitants automobiles et les PME logistiques qui traitent des données critiques de supply chain.",
      sectors: [
        "Industrie automobile et sous-traitants (59 et 62)",
        "Distribution et retail (Auchan, Leroy Merlin, Décathlon, Kiloutou)",
        "Logistique, transport et supply chain transmanche",
        "Santé (CHU Lille, hôpitaux, cliniques, laboratoires)",
        "Tech et startups (EuraTechnologies, French Tech Lille)",
        "Agroalimentaire et chimie industrielle",
        "Collectivités locales et administrations (MEL, CU Arras...)",
        "BTP, immobilier et services aux entreprises",
      ],
      neighborhoods: [
        "Métropole Européenne de Lille (MEL) — Lille, Roubaix, Tourcoing, Villeneuve d'Ascq",
        "Douai – Valenciennes (automobile, industrie)",
        "Lens – Liévin – Hénin-Beaumont",
        "Béthune – Bruay-la-Buissière (59 + 62)",
        "Arras (Pas-de-Calais)",
        "Calais – Boulogne-sur-Mer (logistique transmanche)",
        "Dunkerque (énergie, port)",
        "Maubeuge – Avesnes-sur-Helpe",
      ],
      faq: [
        {
          q: "Couvrez-vous les deux départements Nord (59) et Pas-de-Calais (62) ?",
          a: "Oui, CyberSecure intervient dans les deux départements du Nord-Pas-de-Calais : Nord (59) et Pas-de-Calais (62). Nos consultants se déplacent sur site dans toute la zone pour les audits terrain, et interviennent à distance pour les missions d'analyse et de conformité. Notre CERT est disponible 24/7 pour les incidents urgents (ransomware, intrusion, DDoS) partout dans les deux départements.",
        },
        {
          q: "Ma PME doit se mettre en conformité RGPD — par où commencer dans le Nord ?",
          a: "La conformité RGPD commence par 3 étapes concrètes : (1) Cartographier vos traitements de données pour créer votre registre des traitements RGPD (obligatoire). (2) Identifier et corriger les risques les plus critiques (sécurité des données, sous-traitants, durées de conservation). (3) Nommer un DPO (obligatoire selon votre activité) ou prévoir un DPO externalisé. CyberSecure propose des diagnostics RGPD adaptés aux PME du Nord-Pas-de-Calais. La CCI Grand Lille propose aussi des accompagnements co-financés. Diagnostic gratuit en 30 minutes.",
        },
        {
          q: "Êtes-vous qualifié PASSI pour les audits en Nord-Pas-de-Calais ?",
          a: "CyberSecure travaille avec des prestataires qualifiés PASSI (Prestataire d'Audit de Sécurité des Systèmes d'Information) par l'ANSSI pour les missions nécessitant cette qualification (audits d'entités NIS2, organismes publics). Nos experts sont également certifiés OSCP, CEH, ISO 27001 Lead Auditor. Nos audits respectent la méthodologie ANSSI et nos rapports sont structurés selon les standards du marché (CVSS, niveaux de risque, recommandations priorisées). Devis gratuit sous 48h.",
        },
        {
          q: "Mon entreprise du Nord est sous-traitante d'un grand groupe — on nous demande un audit de sécurité. Que faire ?",
          a: "C'est un cas de plus en plus fréquent dans le tissu industriel du Nord-Pas-de-Calais. Les grands donneurs d'ordre (Stellantis, Toyota, Auchan...) imposent à leurs fournisseurs des questionnaires de sécurité ou des audits directs. CyberSecure vous accompagne : réponse aux questionnaires (TISAX pour l'automobile, questionnaires sécurité grande distribution), préparation aux audits clients, rapport de pentest exploitable par votre client, et mise en conformité NIS2 pour les sous-traitants. Intervention rapide sous 5 jours ouvrés.",
        },
        {
          q: "Quelles aides financières pour un audit cybersécurité en Nord-Pas-de-Calais ?",
          a: "Plusieurs dispositifs sont disponibles : Mon Aide Cyber (ANSSI) — diagnostic gratuit pour les PME. CCI Grand Lille, CCI Artois, CCI Côte d'Opale — diagnostics numériques co-financés. Région Hauts-de-France — aides à la transformation numérique (fonds FEDER, programme PME Hauts-de-France). BPI France — prêts numériques et avances remboursables pour les investissements cyber. Certains syndicats professionnels (UIMM Nord, fédérations agroalimentaires) proposent également des accompagnements groupés. CyberSecure vous guide dans l'accès à ces dispositifs.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNordPasDeCalais;
