import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNormandie = () => (
  <CityLandingPage
    data={{
      city: "Normandie",
      citySlug: "normandie",
      region: "Normandie",
      postalCode: "14 / 27 / 50 / 61 / 76",
      intro: "CyberSecure est votre prestataire d'audit cybersécurité Normandie : pentest, audit NIS2, RGPD et réponse aux incidents pour les entreprises de Rouen, Caen, Le Havre, Évreux, Cherbourg et les PME/ETI industrielles de la région.",
      localContext: "La Normandie est une région industrielle avec des enjeux cyber spécifiques liés à ses secteurs dominants. Le port du Havre (premier port à conteneurs français) et l'axe pétrochimique Rouen-Le Havre (Total, ExxonMobil, Lubrizol) sont des infrastructures critiques soumises à NIS2. L'industrie automobile (Renault Sandouville) et ses sous-traitants ont des exigences TISAX. Les hôpitaux normands ont déjà subi des cyberattaques. CyberSecure intervient depuis plusieurs années en Normandie et connaît bien le tissu industriel régional et ses vulnérabilités spécifiques.",
      sectors: [
        "Port et logistique maritime (Port du Havre, HAROPA Port)",
        "Pétrochimie et chimie (Total, ExxonMobil, Lubrizol, sites SEVESO)",
        "Automobile et équipementiers (Renault Sandouville, sous-traitants)",
        "Nucléaire et énergie (EDF Paluel, Flamanville, Penly)",
        "Agroalimentaire (Lactalis, Danone, laiteries normandes)",
        "Pharmacie (Pierre Fabre, Aguettant Normandie)",
        "Tourisme et patrimoine (Mont-Saint-Michel, mémoriaux D-Day)",
        "Collectivités (Métropole Rouen, Caen la Mer, Le Havre Métropole)",
      ],
      neighborhoods: [
        "Métropole Rouen Normandie – Petit-Quevilly – Grand-Quevilly",
        "Le Havre Seine Métropole – Gonfreville – Harfleur",
        "Caen la Mer – Hérouville-Saint-Clair",
        "Évreux – Val-de-Reuil (27)",
        "Cherbourg-en-Cotentin (50)",
        "Alençon – Argentan (61)",
        "Dieppe – Fécamp – Bolbec (76)",
        "Bayeux – Vire – Flers (14)",
      ],
      faq: [
        {
          q: "Réalisez-vous des audits de sécurité sur les sites industriels et portuaires normands ?",
          a: "Oui, c'est l'une de nos spécialités normandes. Nous réalisons des audits de sécurité IT et OT sur les sites industriels (pétrochimie, chimie, automobile), les infrastructures portuaires (systèmes de gestion des terminaux, EDI maritime) et les sites d'énergie. Nos experts OT connaissent les protocoles industriels normands (Modbus, PROFINET, EtherNet/IP) et les contraintes des sites SEVESO en termes de disponibilité. Les audits sont planifiés pour ne pas perturber la production.",
        },
        {
          q: "Les entreprises normandes soumises à SEVESO ont-elles des obligations NIS2 spécifiques ?",
          a: "Les sites SEVESO ne sont pas tous soumis à NIS2 en tant que tels, mais les entreprises chimiques dépassant les seuils (50 salariés / 10 M€ CA) sont des entités importantes NIS2 dans le secteur 'fabrication chimique'. Les sites pétroliers et énergétiques sont généralement des entités essentielles dans le secteur 'énergie'. La combinaison SEVESO + NIS2 crée des obligations croisées (rapport PPRT + PSSI) que CyberSecure maîtrise.",
        },
        {
          q: "Avez-vous de l'expérience avec les systèmes nucléaires d'EDF en Normandie ?",
          a: "La sécurité informatique des centrales nucléaires est réglementée par l'ASN et la loi de programmation militaire — ces systèmes ont leurs propres prestataires accrédités. En revanche, CyberSecure accompagne les sous-traitants et fournisseurs d'EDF (prestataires de maintenance, fournisseurs d'équipements) dans leur mise en conformité avec les exigences cybersécurité d'EDF (PSSI EDF, NIS2 comme entités importantes). Devis gratuit.",
        },
        {
          q: "Mon entreprise agroalimentaire normande (Calvados, Camembert, Cidre) est-elle concernée par NIS2 ?",
          a: "Les entreprises agroalimentaires normandes dépassant 50 salariés ou 10 M€ de CA sont des entités importantes NIS2. En pratique : Lactalis (siège à Laval, sites en Normandie), les laiteries et coopératives laitières (Isigny-Sainte-Mère, Normandie Lait), les distilleries (Calvados) et les cidriers industriels dépassant les seuils sont concernés. Les petits producteurs artisanaux restent hors du périmètre. CyberSecure propose un diagnostic NIS2 gratuit.",
        },
        {
          q: "Quels financements pour un audit cyber en Normandie ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Normandie (programme Norman'InCub, fonds FEDER). Les CCI normandes (CCI Seine-Maritime, CCI Normandie) — diagnostics numériques co-financés. BPI France Normandie — prêts numériques. ADN'Co (Union maritime du Havre) — accompagnement cybersécurité pour les acteurs maritimes. Contactez CyberSecure pour un diagnostic gratuit et une orientation vers les bons financements.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNormandie;
