import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCherbourg = () => (
  <CityLandingPage
    data={{
      city: "Cherbourg-en-Cotentin",
      citySlug: "cherbourg",
      region: "Normandie",
      postalCode: "50100",
      intro: "CyberSecure accompagne les PME et ETI de Cherbourg-en-Cotentin avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs nucléaire, naval, de défense et de l'énergie offshore de la Manche. Notre cabinet qualifié PASSI ANSSI intervient sur site à Cherbourg pour des missions d'audit réseau, d'audit des systèmes industriels et de réponse à incident CERT.",
      localContext: "Cherbourg-en-Cotentin est un site industriel et de défense stratégique de premier plan : Orano (ex-Areva) y exploite l'usine de retraitement de la Hague (l'un des sites nucléaires les plus sensibles au monde) et y construit les sous-marins nucléaires français (SNLE) via Naval Group. Ces infrastructures critiques sont soumises aux exigences les plus strictes de cybersécurité et classées Opérateurs d'Importance Vitale (OIV). Le projet d'éolien offshore en Manche et les activités portuaires (port transmanche avec l'Angleterre/Irlande) génèrent de nouveaux besoins. Le CH de Cherbourg et les établissements de santé cotentinois font face aux cybermenaces. Les PME normandes sous-traitantes de ces grands groupes ont des obligations de sécurité renforcées.",
      sectors: [
        "Nucléaire (Orano La Hague, sous-traitants)",
        "Construction navale et sous-marins (Naval Group)",
        "Énergie offshore (éolien maritime Manche)",
        "Port transmanche et logistique",
        "Santé (CH Cherbourg, cliniques Manche)",
        "Collectivités et Communauté Urbaine Cherbourg-en-Cotentin",
      ],
      neighborhoods: [
        "Centre-ville de Cherbourg",
        "La Hague et zone nucléaire Orano",
        "Arsenal de Cherbourg (Naval Group, sous-marins)",
        "Port transmanche (ferries vers UK et Irlande)",
        "Tourlaville et zones industrielles",
        "Carentan et Manche sud (agroalimentaire, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un sous-traitant du nucléaire ou du naval à Cherbourg ?",
          a: "Un audit de sécurité pour un sous-traitant d'Orano (La Hague) ou de Naval Group à Cherbourg est tarifé selon les exigences de classification des informations. Pour un prestataire nucléaire soumis à l'INB et aux obligations IRSN, le budget se situe entre 15 000 et 50 000 € HT. Pour les PME sous-traitantes industrielles de Naval Group, un audit réseau ciblé débute à 8 000 € HT. CyberSecure est qualifié PASSI ANSSI et habilité à intervenir sur ces sites sensibles.",
        },
        {
          q: "Quel délai pour un audit réseau ETI à Cherbourg ?",
          a: "Un audit réseau pour une PME cherbourgeoise dure 4 à 7 jours ouvrés. Pour un site industriel nucléaire ou naval avec des exigences de classification, les délais sont ajustés en fonction des contraintes d'accès et des processus d'habilitation. CyberSecure anticipe ces contraintes et adapte le planning d'intervention aux exigences réglementaires du site.",
        },
        {
          q: "Comment auditer la cybersécurité d'un prestataire d'une INB (Installation Nucléaire de Base) à Cherbourg ?",
          a: "Les prestataires intervenants sur des INB comme l'usine de la Hague d'Orano sont soumis aux exigences de l'Arrêté INB et aux référentiels de cybersécurité de l'ANSSI pour les systèmes importants pour la protection (SIP). CyberSecure réalise des audits de conformité incluant la revue des mesures techniques et organisationnelles de protection, le test des accès distants, l'évaluation des procédures de gestion des incidents de sécurité et la vérification des habilitations du personnel. Nous intervenons dans le respect des contraintes de sécurité nucléaire.",
        },
        {
          q: "CyberSecure intervient-il sur site à Cherbourg et dans la Manche ?",
          a: "Oui, nos consultants se déplacent à Cherbourg, Valognes, Saint-Lô, Avranches, Coutances et dans tout le département de la Manche. Nous couvrons également le Calvados (Caen) pour les groupes normands avec des sites dans les deux départements. L'accès à certaines zones sécurisées requiert des processus d'habilitation préalables que nous gérons en amont.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site nucléaire ou naval à Cherbourg ?",
          a: "Activez immédiatement vos procédures d'urgence internes de sécurité nucléaire et contactez le CERT de CyberSecure (24h/24, 7j/7). Pour les INB, notifiez simultanément l'ASN (Autorité de Sûreté Nucléaire) et l'ANSSI. Pour les systèmes de Naval Group, contactez la DRSD. CyberSecure coordonne avec toutes les autorités compétentes et assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCherbourg;
