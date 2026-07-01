import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteValenciennes = () => (
  <CityLandingPage
    data={{
      city: "Valenciennes",
      citySlug: "valenciennes",
      region: "Hauts-de-France",
      postalCode: "59300",
      intro: "CyberSecure accompagne les PME et ETI de Valenciennes avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs automobile, ferroviaire et logistique du Valenciennois. Notre cabinet qualifié PASSI ANSSI intervient sur site à Valenciennes pour des missions d'audit réseau, d'audit Active Directory et de réponse à incident CERT dans ce bassin industriel en reconversion.",
      localContext: "Valenciennes est l'un des principaux pôles automobiles et ferroviaires de France : Toyota (Onnaing), Renault et leurs centaines de sous-traitants constituent un écosystème industriel connecté où les exigences TISAX et les interdépendances supply chain créent des besoins cybersécurité complexes. Alstom (anciennement Bombardier) fabrique à Crespin des TGV et des métros dont les systèmes de conception et les données techniques sont d'une valeur stratégique immense. La plateforme logistique trimodale de Valenciennes (route, rail, voie d'eau) accueille de grands centres de distribution. L'Université Polytechnique Hauts-de-France et ses formations ingénierie contribuent à l'écosystème innovant local. Le CH de Valenciennes et les établissements de santé du Nord font face aux cyberattaques.",
      sectors: [
        "Automobile (Toyota Onnaing, Renault, équipementiers TISAX)",
        "Ferroviaire (Alstom TGV/métros, Crespin)",
        "Logistique trimodale et transport",
        "Industrie métallurgique et plasturgie",
        "Santé (CH Valenciennes, cliniques Nord)",
        "Collectivités et CA Valenciennes Métropole",
      ],
      neighborhoods: [
        "Centre-ville de Valenciennes",
        "Onnaing (Toyota, zones automobiles)",
        "Crespin et Saint-Amand-les-Eaux (Alstom, industrie)",
        "Trith-Saint-Léger et zones d'activités (logistique)",
        "Denain et bassin minier reconverti",
        "Maubeuge et Sambre-Avesnois (industrie, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit TISAX pour un équipementier automobile à Valenciennes ?",
          a: "Un audit de conformité TISAX pour un équipementier automobile de Valenciennes ou Onnaing (fournisseur Toyota/Renault) se situe entre 7 000 et 18 000 € HT selon le niveau d'assurance (AL1 à AL3) et la taille du SI. Pour les petits sous-traitants Tier 2 et 3, CyberSecure propose des audits de pré-certification TISAX à partir de 5 500 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau ETI à Valenciennes ?",
          a: "Un audit réseau pour une PME valenciennoise dure 4 à 7 jours ouvrés. Pour un sous-traitant automobile incluant les systèmes de production et les interconnexions EDI avec les constructeurs, comptez 7 à 12 jours. L'audit Active Directory seul est réalisable en 2 à 4 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes d'information d'un fabricant de matériel ferroviaire (Alstom TGV) à Valenciennes ?",
          a: "Les systèmes de conception et de fabrication des TGV et métros d'Alstom (Crespin) sont d'une valeur technologique et stratégique considérable pour la sécurité des transports publics. CyberSecure réalise des audits incluant la sécurisation des environnements PLM (Product Lifecycle Management), la protection des données de qualification des sous-systèmes ferroviaires, le test des accès partenaires (SNCF, RATP, opérateurs internationaux) et la conformité aux exigences de cybersécurité ferroviaire EN 50701. Nous accompagnons également la mise en conformité NIS2 pour les opérateurs ferroviaires critiques.",
        },
        {
          q: "CyberSecure intervient-il sur site à Valenciennes et dans le Nord ?",
          a: "Oui, nos consultants se déplacent à Valenciennes, Maubeuge, Denain, Condé-sur-l'Escaut, Crespin et dans toute la zone Valenciennes-Sambre-Avesnois. Nous couvrons également la métropole lilloise pour les groupes industriels ayant des sites dans le Nord. Déploiement sous 48h à Valenciennes.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site industriel à Valenciennes ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les incidents sur des systèmes de conception ferroviaire, contactez également le RSSI d'Alstom Group si vous êtes prestataire. Notre équipe peut être sur site à Valenciennes dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteValenciennes;
