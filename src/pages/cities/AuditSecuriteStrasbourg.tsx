import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteStrasbourg = () => (
  <CityLandingPage
    data={{
      city: "Strasbourg",
      citySlug: "strasbourg",
      urlPath: "cybersecurite-strasbourg",
      region: "Grand Est",
      postalCode: "67000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des audits de sécurité informatique et des pentests pour les ETI pharmaceutiques, les institutions européennes et les entreprises transfrontalières de Strasbourg. Alsace BioValley, Parlement Européen, banques et logistique : nos experts assurent la cybersécurité du Grand Est.",
      localContext: "Strasbourg, siège du Parlement Européen et du Conseil de l'Europe, concentre des enjeux de cybersécurité exceptionnels : institutions internationales ciblées par des acteurs étatiques, industrie pharmaceutique (Eli Lilly, Boehringer Ingelheim, Alsace BioValley), industrie automobile (Stellantis Mulhouse), entreprises transfrontalières franco-allemandes et un tissu de PME alsaciennes. Les cybermenaces étatiques ciblant le Parlement Européen et ses prestataires créent un environnement de risque élevé pour l'ensemble de l'écosystème strasbourgeois. CyberSecure intervient à Strasbourg, Mulhouse, Colmar, Haguenau et dans tout le Grand Est.",
      sectors: [
        "Institutions européennes et organisations internationales",
        "Pharmacie et biotechnologies (Alsace BioValley)",
        "Industrie automobile (Stellantis Mulhouse)",
        "Banque et finance transfrontalière",
        "Santé (CHU de Strasbourg, NHC)",
        "PME alsaciennes et entreprises transfrontalières",
      ],
      neighborhoods: [
        "Strasbourg Centre et Neudorf",
        "Schiltigheim, Illkirch et Eurométropole",
        "Mulhouse et Alsace du Sud",
        "Colmar, Haguenau, Sélestat",
        "Metz, Nancy, Reims (Grand Est)",
        "Zone transfrontalière franco-allemande (Kehl, Freiburg)",
      ],
      faq: [
        {
          q: "Quel est le prix d'un pentest pour une ETI pharmaceutique à Strasbourg ?",
          a: "Un pentest pour une ETI pharmaceutique de Strasbourg varie entre 12 000 et 30 000 € HT selon le périmètre. L'audit de la sécurité d'un laboratoire connecté (LIMS, équipements analytiques) coûte entre 8 000 et 20 000 € HT. Un pentest réseau complet pour une PME pharma ou biotech est compris entre 8 000 et 20 000 € HT. Nos rapports PASSI ANSSI intègrent les exigences de l'Annexe 11 EU pour la validation informatique pharmaceutique. Devis gratuit sous 48h.",
        },
        {
          q: "Combien de temps dure un audit de sécurité pour une entreprise alsacienne ?",
          a: "Un audit de sécurité pour une PME alsacienne dure 3 à 7 jours selon le périmètre. Un audit complet pour une ETI pharmaceutique ou automobile (réseau, OT, applications, conformité BPF ou ISO/TS 16949) nécessite 10 à 25 jours. Pour les entreprises transfrontalières avec des opérations côté allemand, la durée peut s'étendre pour couvrir les deux périmètres.",
        },
        {
          q: "Avez-vous une expertise pour les entreprises transfrontalières franco-allemandes ?",
          a: "Oui. Nos consultants maîtrisent à la fois le RGPD français et le BDSG (Bundesdatenschutzgesetz) allemand, ainsi que le BSI-Grundschutz (référentiel de sécurité allemand équivalent à l'ISO 27001). Nous accompagnons les entreprises opérant des deux côtés du Rhin dans leur double conformité cybersécurité et pouvons intervenir à Kehl, Freiburg et dans tout le Bade-Wurtemberg pour les missions côté allemand.",
        },
        {
          q: "Comment sécuriser les systèmes des fournisseurs des institutions européennes à Strasbourg ?",
          a: "Les prestataires des institutions européennes (Parlement, Conseil de l'Europe) doivent respecter les règlements ENISA, les exigences NIS2 et les politiques de sécurité des institutions. Nous réalisons des audits de conformité et des tests d'intrusion pour valider votre niveau de sécurité avant un contrat avec les institutions, ainsi que des analyses de risques selon la méthodologie EBIOS RM utilisée par les institutions françaises.",
        },
        {
          q: "Que faire en cas de cyberattaque contre une entreprise à Strasbourg ?",
          a: "Contactez notre CERT immédiatement (disponible 24h/24, 7j/7). Isolez les systèmes compromis du réseau sans les éteindre. Si vous êtes prestataire d'une institution européenne, informez votre contact sécurité au sein de l'institution. Notifiez l'ANSSI et la CNIL (sous 72h si des données personnelles sont impliquées). Nos experts CyberSecure se déploient à Strasbourg pour contenir l'incident et accompagner la reprise d'activité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteStrasbourg;
