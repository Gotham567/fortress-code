import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuritePasDeCalais = () => (
  <CityLandingPage
    data={{
      city: "Pas-de-Calais",
      citySlug: "pas-de-calais",
      region: "Hauts-de-France",
      postalCode: "62",
      intro: "CyberSecure est votre prestataire audit de sécurité Pas-de-Calais (62) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Calais, Arras, Lens, Béthune, Boulogne-sur-Mer et tout le département.",
      localContext: "Le Pas-de-Calais combine des enjeux de cybersécurité industrielle critiques et des PME en transformation numérique. Getlink exploite l'Eurotunnel depuis Coquelles — opérateur d'infrastructure critique soumis à NIS2 niveau le plus élevé. Roquette Frères à Lestrem est l'un des plus grands sites Seveso d'agro-industrie en France. Le port de Boulogne-sur-Mer et le port de Calais (Dover Strait) sont des nœuds logistiques stratégiques. Le bassin minier (Lens, Béthune, Liévin) est en reconversion avec des entreprises industrielles héritant d'OT anciens. L'arrondissement d'Arras concentre les administrations et PME de services.",
      sectors: [
        "Infrastructure critique (Getlink Eurotunnel — OIV, NIS2, OT ferroviaire SCADA)",
        "Agro-industrie (Roquette Frères Lestrem — Seveso, PASSI ANSSI, OT process)",
        "Port maritime (Boulogne-Calais — NIS2 transports, OT portuaire, ISPS Code)",
        "Agroalimentaire (McCain Harnes, IAA 62 — audit ERP, IFS/BRC, traçabilité)",
        "Logistique (Calais-Dover, e-commerce 62 — audit SI logistique, RGPD)",
        "Industrie reconvertie (bassin minier — audit OT anciens, pentest SCADA)",
        "Collectivités (Arras, CD62 — audit cloud souverain, e-administration, RGPD)",
        "PME artois (Béthune, Saint-Omer — pentest, audit Microsoft 365, NIS2)",
      ],
      neighborhoods: [
        "Calais – Coquelles (62100/62231)",
        "Arras (62000)",
        "Lens – Liévin (62300/62800)",
        "Béthune – Bruay-la-Buissière (62400)",
        "Boulogne-sur-Mer (62200)",
        "Saint-Omer (62500)",
        "Harnes – Hénin-Beaumont (62440)",
        "Lestrem – Laventie (62136)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Pas-de-Calais (62) pour les audits de sécurité ?",
          a: "Oui, CyberSecure intervient dans tout le 62 : Calais, Arras, Lens-Liévin, Béthune, Boulogne-sur-Mer, Saint-Omer, bassin minier. Nous réalisons des audits de sécurité allant du pentest applicatif PME aux audits OT de sites Seveso. CERT d'urgence 24/7.",
        },
        {
          q: "Comment auditer la cybersécurité de l'Eurotunnel/Getlink — infrastructure critique franco-britannique ?",
          a: "Getlink est un opérateur d'infrastructure critique soumis à NIS2 côté français et à la NIS Regulation côté britannique (post-Brexit). Un audit de sécurité Getlink est un audit OIV soumis à règles ANSSI strictes : il doit être réalisé par un PASSI qualifié (Prestataire d'Audit de la Sécurité des SI). Le périmètre couvre les systèmes de contrôle-commande ferroviaire (ERTMS/ETCS), les systèmes de gestion des wagons sur navettes, les systèmes de détection incendie/sécurité, et les interconnexions IT (ventes en ligne, billetterie). CyberSecure est qualifié PASSI et accompagne les OIV du secteur transport dans leurs audits réglementaires.",
        },
        {
          q: "Comment réaliser un test d'intrusion sur un port de commerce/pêche comme Boulogne-sur-Mer ?",
          a: "Un pentest d'infrastructure portuaire couvre plusieurs périmètres : les systèmes d'information portuaire (SIP — gestion des escales, droits de port), les systèmes de contrôle des équipements (grues, écluses, portiques — OT maritime), les réseaux Wi-Fi des terminaux et entrepôts (isolement des réseaux camionneurs/professionnels), et les interfaces avec les douanes (DELTA, système douanier EU). Le code ISPS (International Ship and Port Facility Security) impose des mesures de sécurité physique et cyber pour les ports accueillant des navires de marchandises. CyberSecure réalise des audits de sécurité conformes ISPS pour les ports maritimes.",
        },
        {
          q: "Roquette Frères : quelles spécificités d'un audit PASSI sur un site Seveso agroalimentaire ?",
          a: "Un site Seveso seuil haut comme Roquette Frères (amidon de maïs, bioéthanol) est un OIV catégorie alimentation. L'audit PASSI couvre : les systèmes DCS (Distributed Control System — Honeywell TDC, Emerson DeltaV) contrôlant les réactions de fermentation et les tours de séchage, les Safety Instrumented Systems (SIS — vannes automatiques de sécurité), les interfaces opérateur (IHM Wonderware, FactoryTalk), et les réseaux industriels (Modbus, Profibus, OPC-UA). Une contrainte spécifique agroalimentaire : les audits ne peuvent pas perturber la production continue (process 24h/24). CyberSecure adapte ses méthodologies PASSI aux contraintes des sites en production continue.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Pas-de-Calais ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Artois et CCI Côte d'Opale — diagnostics numériques. Le CD62 — programmes numériques entreprises. BPI France Hauts-de-France — prêts innovation. La Région Hauts-de-France — Rev3, fonds de soutien à la transition numérique des PME industrielles. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default AuditSecuritePasDeCalais;
