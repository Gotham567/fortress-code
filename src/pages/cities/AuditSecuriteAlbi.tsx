import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAlbi = () => (
  <CityLandingPage
    data={{
      city: "Albi",
      citySlug: "albi",
      region: "Occitanie",
      postalCode: "81000",
      intro: "CyberSecure accompagne les PME et ETI d'Albi avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs agroalimentaire, industriel, touristique et des PME tarnaises. Notre cabinet qualifié PASSI ANSSI intervient sur site à Albi pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises du bassin albigeois.",
      localContext: "Albi est la préfecture du Tarn et une ville inscrite au patrimoine UNESCO pour sa cathédrale Sainte-Cécile et son ensemble épiscopal, générant une économie touristique importante dont les systèmes de billetterie et de réservation doivent être sécurisés. L'économie albigeoise repose sur un tissu de PME dans l'agroalimentaire (confiseries, produits du Tarn), la chimie industrielle (EDF, phosphates) et les services. La zone d'activités de Graulhet (maroquinerie, cuir) et l'industrie tarnaise de Castres-Mazamet complètent le panorama économique régional. Le CH d'Albi et les établissements médico-sociaux du Tarn font face aux ransomwares ciblant la santé publique.",
      sectors: [
        "Agroalimentaire (confiseries, produits du Tarn, AOC)",
        "Chimie et industrie (phosphates, EDF locaux)",
        "Maroquinerie et cuir (Graulhet, zone tanneries)",
        "Tourisme culturel (patrimoine UNESCO, cathédrale)",
        "Santé (CH Albi, cliniques Tarn)",
        "Collectivités et Grand Albigeois",
      ],
      neighborhoods: [
        "Centre-ville historique et cathédrale (UNESCO)",
        "Pratgraussals et zones industrielles",
        "Le Séquestre et zones d'activités nord (aéroport)",
        "Saint-Juéry et industrie des forges",
        "Castres et Montagne Noire tarnaise (pharma, PME)",
        "Graulhet et pays d'Agout (maroquinerie, cuir)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour une PME agroalimentaire ou une entreprise industrielle à Albi ?",
          a: "Un audit de sécurité pour une PME agroalimentaire du Tarn (confiseries, vins, produits régionaux) est tarifé entre 4 000 et 9 000 € HT. Pour une entreprise industrielle (chimie, maroquinerie) avec un SI plus complexe, le budget se situe entre 6 000 et 14 000 € HT. CyberSecure propose des offres adaptées aux PME tarnaises avec des périmètres modulables. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Albi ?",
          a: "Un pentest réseau pour une PME albigeoise dure 3 à 6 jours ouvrés. Pour une ETI industrielle ou une collectivité, comptez 5 à 8 jours. L'audit Active Directory seul est réalisable en 1 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment aider une PME tarnaise à se conformer à la réglementation NIS2 à Albi ?",
          a: "La directive NIS2, entrée en vigueur en France en 2024, impose de nouvelles obligations de cybersécurité aux PME de certains secteurs (alimentation, transport, santé). CyberSecure réalise des audits de conformité NIS2 incluant l'analyse des écarts par rapport aux 10 mesures essentielles, la mise en place d'une politique de sécurité adaptée aux ressources des PME tarnaises, et la formation des dirigeants et responsables informatiques. Nous proposons des accompagnements sur mesure pour les PME ne disposant pas de RSSI interne.",
        },
        {
          q: "CyberSecure intervient-il sur site à Albi et dans le Tarn ?",
          a: "Oui, nos consultants se déplacent à Albi, Castres, Gaillac, Graulhet, Lavaur et dans tout le département du Tarn. Nous couvrons également l'Aveyron (Rodez, Millau) et le Tarn-et-Garonne (Montauban) pour les groupes ayant des sites dans plusieurs départements d'Occitanie. Déploiement sous 72h à Albi.",
        },
        {
          q: "Que faire en cas de cyberattaque à Albi — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre pour préserver les preuves forensiques. Notre équipe peut être déployée sur site à Albi dans les 4 à 6 heures. Pour les PME sans ressources informatiques internes, nous proposons une assistance téléphonique prioritaire pour les premières mesures de confinement. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAlbi;
