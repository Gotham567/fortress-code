import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteEvreux = () => (
  <CityLandingPage
    data={{
      city: "Évreux",
      citySlug: "evreux",
      region: "Normandie",
      postalCode: "27000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les PME industrielles, laboratoires pharmaceutiques et collectivités d'Évreux avec des pentests et des audits de sécurité informatique adaptés à leur secteur. Famar, logistique et industrie normande : nos experts protègent vos systèmes d'information dans l'Eure.",
      localContext: "Évreux est la préfecture de l'Eure et abrite un tissu économique ancré dans l'industrie pharmaceutique (Famar, laboratoires), la logistique (plates-formes autoroute A13), et les PME normandes. Le secteur pharmaceutique ebroïcien est une cible prioritaire du cyberespionnage industriel cherchant à voler des données de formulation ou des données d'essais cliniques. Les plates-formes logistiques, interconnectées avec de grands donneurs d'ordre, sont exposées aux attaques de la chaîne d'approvisionnement. CyberSecure intervient à Évreux, Vernon, Bernay, Louviers et dans tout le département Eure.",
      sectors: [
        "Industrie pharmaceutique et chimique (Famar)",
        "Logistique et transport",
        "Agroalimentaire normand",
        "Santé (Centre Hospitalier d'Évreux)",
        "Collectivités et administrations",
        "PME industrielles et artisanat",
      ],
      neighborhoods: [
        "Évreux Centre et Nétreville",
        "Zone industrielle de la Madeleine",
        "Vernon et Gaillon",
        "Bernay et Breteuil",
        "Louviers et Val-de-Reuil",
        "Tout le département Eure",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une entreprise pharmaceutique à Évreux ?",
          a: "Un pentest pour une PME pharmaceutique ebroïcienne varie entre 8 000 et 20 000 € HT selon le périmètre. L'audit d'une application de gestion de production (MES) ou d'un système LIMS coûte entre 6 000 et 15 000 € HT. Un pentest réseau complet pour une ETI industrielle de l'Eure est généralement compris entre 10 000 et 25 000 € HT. Nos rapports qualifiés PASSI ANSSI sont reconnus dans les audits réglementaires pharmaceutiques (BPF, FDA 21 CFR Part 11). Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une industrie à Évreux ?",
          a: "Un audit de sécurité pour une PME industrielle d'Évreux dure de 3 à 8 jours selon le périmètre. Un audit complet couvrant le réseau, les systèmes de production, Active Directory et les applications métier nécessite 8 à 15 jours pour une ETI. Pour les entreprises pharmaceutiques soumises aux BPF (Bonnes Pratiques de Fabrication), nous incluons également la revue de la validation informatique (CSV) dans notre audit.",
        },
        {
          q: "Les laboratoires pharmaceutiques de l'Eure ont-ils des obligations cyber spécifiques ?",
          a: "Oui. Les laboratoires pharmaceutiques soumis aux BPF (Bonnes Pratiques de Fabrication) doivent assurer la validation de leurs systèmes informatiques (CSV — Computer System Validation) et la protection de l'intégrité des données (data integrity). NIS2 s'applique par ailleurs aux fabricants de produits pharmaceutiques au-delà de certains seuils. Nos auditeurs maîtrisent les référentiels FDA 21 CFR Part 11, Annexe 11 EU et les guides ANSSI pour vous accompagner dans cette double conformité.",
        },
        {
          q: "Intervenez-vous sur site à Évreux et dans l'Eure ?",
          a: "Oui. Nos consultants se déplacent sur site à Évreux, Vernon, Louviers, Val-de-Reuil, Bernay, Breteuil et dans tout le département de l'Eure. Nous intervenons également à Rouen, Caen et dans toute la région Normandie pour les missions régionales. Les déplacements depuis nos équipes en Île-de-France permettent des interventions rapides à Évreux (moins d'1h30 de Paris).",
        },
        {
          q: "Que faire si mon entreprise ebroïcienne subit une cyberattaque ?",
          a: "Contactez immédiatement notre cellule CERT (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau sans les éteindre. Pour les sites de production pharmaceutique, isolez les systèmes MES et SCADA du réseau IT et passez en mode dégradé selon votre PCA. Notifiez l'ANSSI et la CNIL (sous 72h si des données personnelles sont impliquées). Nos experts CyberSecure peuvent intervenir rapidement à Évreux pour contenir l'incident et coordonner la reprise d'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteEvreux;
