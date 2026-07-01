import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteGrenoble = () => (
  <CityLandingPage
    data={{
      city: "Grenoble",
      citySlug: "grenoble",
      urlPath: "cybersecurite-grenoble",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "38000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits de sécurité et pentests pour les industriels de la microélectronique, de l'énergie et de la deeptech grenobloise. STMicro, Soitec, CEA et sous-traitants : nos experts protègent la propriété intellectuelle des entreprises de Grenoble et de l'Isère contre le cyberespionnage.",
      localContext: "Grenoble est la capitale mondiale de la microélectronique (STMicroelectronics, Soitec, CEA-Leti) et un hub de l'énergie (Schneider Electric, EDF, CEA) et des sciences de la vie. Son tissu industriel concentre une propriété intellectuelle d'une valeur considérable qui en fait une cible prioritaire des attaques étatiques et du cyberespionnage industriel. Les sous-traitants des grands groupes grenoblois sont des vecteurs d'intrusion potentiels via des attaques de la chaîne d'approvisionnement. La protection de la R&D et des secrets industriels est l'enjeu numéro un pour les entreprises de semi-conducteurs et de deeptech. CyberSecure intervient à Grenoble, Meylan, Crolles, Échirolles et dans tout le département de l'Isère.",
      sectors: [
        "Microélectronique (STMicroelectronics, Soitec)",
        "Énergie et smart grid (Schneider Electric, EDF)",
        "Recherche et nucléaire (CEA, CNRS, Inria)",
        "Santé et medtech (CHU, bioMérieux)",
        "Startups deeptech et robotique",
        "Sous-traitants industriels de précision",
      ],
      neighborhoods: [
        "Presqu'île et Polygone Scientifique",
        "Meylan, Montbonnot, Crolles",
        "Échirolles et Grenoble Sud",
        "Voiron, Bourgoin-Jallieu",
        "Chambéry, Annecy, Valence",
        "Toute la région Isère",
      ],
      faq: [
        {
          q: "Comment protéger la R&D d'une entreprise de semi-conducteurs à Grenoble ?",
          a: "La protection de la R&D dans les semi-conducteurs passe par le chiffrement des données de conception (GDSII, Verilog), le contrôle strict des accès (Zero Trust, authentification multifacteur), la surveillance des exfiltrations de données (DLP), la segmentation des réseaux de recherche et des audits réguliers de sécurité. Nous avons une expertise reconnue dans la protection de la propriété intellectuelle des acteurs grenoblois de la microélectronique et réalisons des pentests adaptés aux contraintes de confidentialité de ce secteur.",
        },
        {
          q: "Les sous-traitants du CEA à Grenoble ont-ils des obligations spécifiques ?",
          a: "Oui. Les prestataires du CEA traitent des informations sensibles dans le domaine nucléaire et de la défense qui doivent respecter des exigences de sécurité très strictes (IGI 1300, réglementation nucléaire, II 901). Leurs systèmes d'information doivent être qualifiés selon les règles en vigueur. Nous vous accompagnons dans cette conformité avec des consultants disposant des habilitations nécessaires et une connaissance approfondie des référentiels applicables.",
        },
        {
          q: "Intervenez-vous à Grenoble et dans le bassin grenoblois ?",
          a: "Oui. Nous intervenons à Grenoble, Meylan, Crolles, Montbonnot, Échirolles, Voiron, Bourgoin-Jallieu et dans tout le département de l'Isère. Nous couvrons également Chambéry (Savoie) et Annecy (Haute-Savoie) pour les entreprises du bassin alpin. Nos consultants se déplacent sur les sites industriels en respectant les procédures de sécurité physique spécifiques à chaque établissement.",
        },
        {
          q: "Proposez-vous des pentests pour les systèmes embarqués et IoT industriels à Grenoble ?",
          a: "Oui. Nous réalisons des tests d'intrusion sur firmware (extraction, analyse, reverse engineering), protocoles industriels (Modbus, Profinet, OPC-UA, CAN), interfaces embarquées (JTAG, UART, SPI), systèmes IoT et capteurs connectés. Notre équipe maîtrise les outils spécialisés (oscilloscopes, analyseurs de protocoles, debuggers JTAG) et a une expertise reconnue dans les secteurs de l'énergie, de la microélectronique et des systèmes embarqués critiques.",
        },
        {
          q: "Que faire en cas de cyberattaque ou de suspicion de cyberespionnage à Grenoble ?",
          a: "Contactez immédiatement notre CERT (disponible 24h/24, 7j/7). En cas de suspicion de cyberespionnage (vol de données R&D, exfiltration silencieuse), ne modifiez pas les systèmes compromis et préservez toutes les traces numériques. Signalez l'incident à l'ANSSI (obligation légale pour les OIV et les entreprises stratégiques) et à votre responsable sécurité. Nos experts CyberSecure analysent les indicateurs de compromission, identifient les données exfiltrées et vous accompagnent dans les démarches judiciaires si nécessaire.",
        },
      ],
    }}
  />
);

export default AuditSecuriteGrenoble;
