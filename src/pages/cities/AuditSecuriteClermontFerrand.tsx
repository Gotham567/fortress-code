import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteClermontFerrand = () => (
  <CityLandingPage
    data={{
      city: "Clermont-Ferrand",
      citySlug: "clermont-ferrand",
      urlPath: "cybersecurite-clermont-ferrand",
      region: "Auvergne-Rhône-Alpes",
      postalCode: "63000",
      intro: "CyberSecure accompagne les entreprises clermontoises et auvergnates avec des audits de sécurité et pentests industriels qualifiés PASSI ANSSI. Michelin, sous-traitants de l'automobile, CHU et PME industrielles : nos experts protègent les systèmes OT/IT des entreprises de Clermont-Ferrand et de toute l'Auvergne contre les cybermenaces.",
      localContext: "Clermont-Ferrand est dominée par Michelin (siège mondial) et un écosystème dense de sous-traitants dans le pneumatique, l'équipement automobile et la plasturgie. Le secteur spatial (iSpace, Thales Alenia) et le CHU de Clermont-Ferrand complètent un tissu économique diversifié mais très ciblé. Les sous-traitants de Michelin sont des cibles de choix pour les attaques de la chaîne d'approvisionnement cherchant à rebondir vers le groupe principal. Les systèmes de production (OT) et les données de R&D pneumatique constituent des enjeux de cyberespionnage industriel de premier ordre. CyberSecure intervient à Clermont-Ferrand, Cournon-d'Auvergne, Vichy, Thiers et dans toute la région Auvergne.",
      sectors: [
        "Industrie du pneumatique (Michelin et sous-traitants)",
        "Équipementiers automobiles et plasturgie",
        "Santé (CHU de Clermont, thermalisme)",
        "Spatial et technologies (iSpace, Thales)",
        "Agroalimentaire auvergnat",
        "PME industrielles et artisanat de précision",
      ],
      neighborhoods: [
        "Clermont-Ferrand Centre et La Pardieu",
        "Cournon-d'Auvergne et Aubière",
        "Vichy, Thiers, Issoire",
        "Riom, Ambert, Brioude",
        "Le Puy-en-Velay, Aurillac",
        "Toute la région Auvergne",
      ],
      faq: [
        {
          q: "Les sous-traitants de Michelin sont-ils des cibles cybersécurité prioritaires ?",
          a: "Oui. Les fournisseurs critiques de Michelin sont des portes d'entrée potentielles pour attaquer le groupe principal via des attaques de la chaîne d'approvisionnement (supply chain attack). Michelin impose des exigences cybersécurité croissantes à ses fournisseurs (cartographie des risques, audit annuel, conformité ISO 27001 pour les plus critiques) que nous vous aidons à satisfaire. Nos pentests couvrent les interfaces d'échange de données avec Michelin et les accès distants des équipes techniques.",
        },
        {
          q: "Comment réaliser un audit OT pour une PME industrielle auvergnate ?",
          a: "Notre audit OT/IT pour PME industrielle comprend l'inventaire des équipements connectés (automates, capteurs, SCADA), l'analyse de la segmentation réseau IT/OT, le test des interfaces HMI et des systèmes de supervision, l'évaluation des protocoles industriels (Modbus, Profinet, OPC-UA) et un plan de remédiation priorisé. Durée : 3 à 8 jours selon la complexité. Nous intervenons sans impacter la continuité de production.",
        },
        {
          q: "Intervenez-vous à Clermont-Ferrand et en Auvergne ?",
          a: "Oui. Nous intervenons à Clermont-Ferrand, Cournon-d'Auvergne, Vichy, Thiers, Riom et dans toute la région Auvergne. Nos consultants se déplacent sur site pour les audits industriels et les interventions de réponse à incident. Nous couvrons également le Puy-en-Velay (Haute-Loire) et Aurillac (Cantal) pour les missions requérant une présence sur site.",
        },
        {
          q: "Combien coûte un pentest pour une PME de 50 salariés à Clermont-Ferrand ?",
          a: "Un pentest web (1 application) pour une PME de 50 salariés coûte entre 3 500 et 6 000 € HT. Un test d'intrusion réseau interne varie entre 5 000 et 10 000 € HT. Un audit Active Directory pour sécuriser vos comptes administrateurs et prévenir les mouvements latéraux coûte entre 5 000 et 12 000 € HT. Pour les sous-traitants de Michelin souhaitant un audit complet, prévoir un budget entre 12 000 et 25 000 € HT. Devis gratuit et sans engagement sous 48h.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site industriel à Clermont-Ferrand ?",
          a: "Contactez immédiatement notre cellule CERT (disponible 24h/24, 7j/7). Si l'attaque menace les systèmes OT, isolez le réseau IT du réseau industriel selon votre plan de segmentation. Ne stoppez les automates que si la sécurité des personnes l'exige. Préservez les journaux des systèmes SCADA et des équipements réseau. Nos experts CyberSecure se déploient à Clermont-Ferrand pour contenir l'incident, préserver les preuves et accompagner la reprise de production.",
        },
      ],
    }}
  />
);

export default AuditSecuriteClermontFerrand;
