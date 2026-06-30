import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteGrenoble = () => (
  <CityLandingPage
    data={{
      city: "Grenoble",
      citySlug: "grenoble",
      urlPath: "cybersecurite-grenoble",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "38000",
      intro: "CyberSecure réalise des audits de sécurité et pentests pour les industriels et laboratoires de recherche grenoblois. Microélectronique, énergie, nucléaire et deeptech : nos experts protègent la propriété intellectuelle des entreprises de Grenoble et de l'Isère.",
      localContext: "Grenoble est la capitale mondiale de la microélectronique (STMicroelectronics, Soitec, CEA-Leti). Son tissu industriel — semi-conducteurs, énergie (Schneider Electric), recherche nucléaire (CEA) — est une cible prioritaire des attaques étatiques et du cyberespionnage industriel. La protection de la propriété intellectuelle est l'enjeu n°1.",
      sectors: [
        "Microélectronique (STMicroelectronics, Soitec)",
        "Énergie et smart grid (Schneider Electric)",
        "Recherche et nucléaire (CEA, CNRS, Inria)",
        "Santé et medtech (CHU, bioMérieux)",
        "Startups deeptech",
        "Sous-traitants industriels",
      ],
      neighborhoods: [
        "Presqu'île et Polygone Scientifique",
        "Meylan, Montbonnot, Crolles",
        "Échirolles, Grenoble Sud",
        "Voiron, Bourgoin-Jallieu",
        "Chambéry, Annecy, Valence",
        "Toute la région Isère",
      ],
      faq: [
        {
          q: "Comment protéger la R&D d'une entreprise de semi-conducteurs à Grenoble ?",
          a: "La protection de la R&D dans les semi-conducteurs passe par le chiffrement des données de conception, le contrôle strict des accès (Zero Trust), la surveillance des exfiltrations (DLP) et des audits réguliers de sécurité. Nous avons une expertise reconnue dans ce secteur.",
        },
        {
          q: "Les sous-traitants du CEA à Grenoble ont-ils des obligations spécifiques ?",
          a: "Oui. Les prestataires du CEA traitent des informations sensibles dans le domaine nucléaire et doivent respecter des exigences de sécurité très strictes (IGI 1300, réglementation nucléaire). Nous vous accompagnons dans cette conformité.",
        },
        {
          q: "Intervenez-vous à Grenoble et dans le bassin grenoblois ?",
          a: "Oui. Nous intervenons à Grenoble, Meylan, Crolles, Échirolles, Voiron et dans tout le département de l'Isère, ainsi qu'à Chambéry et Annecy.",
        },
        {
          q: "Proposez-vous des pentests pour les systèmes embarqués et IoT industriels ?",
          a: "Oui. Nous réalisons des tests d'intrusion sur firmware, protocoles industriels (Modbus, Profinet, OPC-UA), interfaces embarquées et systèmes IoT. Expertise reconnue dans les secteurs de l'énergie et de la microélectronique.",
        },
      ],
    }}
  />
);

export default AuditSecuriteGrenoble;
