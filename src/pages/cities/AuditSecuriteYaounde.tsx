import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteYaounde = () => (
  <CityLandingPage
    data={{
      city: "Yaoundé",
      citySlug: "yaounde",
      region: "Cameroun — Centre",
      postalCode: "237",
      intro: "CyberSecure, prestataire qualifié PASSI ANSSI, accompagne les institutions et entreprises de Yaoundé : audit de sécurité BEAC (Banque des États de l'Afrique Centrale, 6 pays CEMAC), pentest des systèmes d'information ministériels, test d'intrusion avec conformité ANTIC (régulateur TIC camerounais), audit CHU Yaoundé et universités. La capitale politique et administrative du Cameroun concentre les institutions régionales et les enjeux cyber les plus stratégiques d'Afrique centrale.",
      localContext: "Yaoundé est la capitale politique du Cameroun et le siège de nombreuses institutions régionales stratégiques. La BEAC (Banque des États de l'Afrique Centrale) y a son siège et coordonne la politique monétaire des 6 pays de la zone CEMAC (Cameroun, Congo, Gabon, RCA, Guinée Équatoriale, Tchad) — un audit de ses systèmes informatiques a une portée régionale considérable. La CEMAC et la BAD (Banque Africaine de Développement — bureau régional) complètent ce paysage institutionnel. L'ANTIC (Agence Nationale des Technologies de l'Information et de la Communication) est le régulateur TIC et l'autorité compétente en matière de cybersécurité au Cameroun, sous la Loi 2010/012. Les Universités de Yaoundé I et II et les grandes écoles forment les futures générations d'informaticiens. Le CHU de Yaoundé traite des données de santé sensibles pour des milliers de patients.",
      sectors: [
        "Institutions régionales (BEAC, CEMAC, BAD)",
        "Gouvernement (Présidence, ministères, Assemblée Nationale)",
        "Santé (CHU Yaoundé, CHUY, CUSS)",
        "Enseignement (Universités Yaoundé I et II, grandes écoles)",
        "Ambassades et organisations internationales",
        "PME de services, audit, conseil",
      ],
      neighborhoods: [
        "Centre-ville et Nlongkak (CBD, ministères)",
        "Bastos (ambassades, résidences diplomatiques)",
        "Messa et Omnisport (résidentiel, services)",
        "Tsinga et Mvog-Ada (universités)",
        "Mendong et Odza (zone aéroport)",
        "Mfandena et Essos (commercial)",
      ],
      faq: [
        {
          q: "BEAC : comment auditer la sécurité de la banque centrale de 6 pays CEMAC ?",
          a: "La BEAC (Banque des États de l'Afrique Centrale) est une infrastructure financière critique couvrant 6 pays. Son audit de sécurité représente un projet structurant. Notre approche comprend : (1) cadrage avec le DSI et CISO BEAC pour définir le périmètre (SWIFT, systèmes de règlement interbancaire, applications web publiques, réseau WAN inter-pays), (2) audit de l'architecture réseau et de la segmentation entre les services BEAC et les filiales nationales, (3) pentest des applications bancaires critiques (transferts interbancaires CEMAC, systèmes RTGS), (4) audit Active Directory et gestion des identités, (5) revue de conformité ISO 27001 et réglementations bancaires COBAC. Budget estimatif pour un périmètre principal : 8 000 à 20 000 €. Un tel projet s'étale sur 4 à 8 semaines.",
        },
        {
          q: "ANTIC : quel rôle dans la cybersécurité camerounaise ?",
          a: "L'ANTIC (Agence Nationale des Technologies de l'Information et de la Communication) est l'autorité camerounaise compétente en matière de cybersécurité sous la Loi 2010/012 relative à la cybersécurité et la cybercriminalité. L'ANTIC : (1) agrée les prestataires de services de cybersécurité au Cameroun, (2) coordonne la réponse aux incidents cyber nationaux (CERT-Cameroun), (3) publie des recommandations de sécurité, (4) est le point de contact pour les signalements d'incidents. CyberSecure travaille en conformité avec les directives ANTIC. Nos rapports d'audit référencent les exigences légales camerounaises applicables.",
        },
        {
          q: "Pentest des ministères camerounais : est-ce autorisé ?",
          a: "Oui, les tests d'intrusion sur les systèmes d'information des ministères camerounais sont légaux et encouragés dans le cadre de la Loi 2010/012 — à condition d'obtenir les autorisations écrites préalables des autorités compétentes (ministère concerné, ANTIC selon le périmètre). CyberSecure gère systématiquement la phase de contractualisation et d'autorisation avant tout test. Pour les systèmes gouvernementaux sensibles, nous pouvons travailler avec une habilitation de sécurité et sous NDA renforcé. L'ANTIC recommande aux administrations de réaliser des audits de sécurité réguliers.",
        },
        {
          q: "Quel coût pour un pentest à Yaoundé ?",
          a: "Les tarifs de pentest à Yaoundé sont exprimés en FCFA ou en euros selon la préférence du client. Un pentest d'application web PME ou administration : 500 000 à 1 500 000 FCFA HT (760 à 2 280 €). Audit de sécurité d'une direction ministérielle : 1 500 000 à 4 000 000 FCFA (2 280 à 6 100 €). Audit BEAC ou institution régionale : 5 000 à 20 000 € selon le périmètre. Les déplacements de nos experts depuis la France sont facturés au coût réel et mutualisés sur plusieurs jours de mission. CyberSecure peut s'appuyer sur des partenaires locaux certifiés à Yaoundé.",
        },
        {
          q: "Que faire en cas de cyberattaque sur les institutions gouvernementales à Yaoundé ?",
          a: "En cas de cyberattaque sur un ministère ou une institution gouvernementale à Yaoundé : (1) activez le plan de continuité d'activité et isolez les systèmes compromis, (2) alertez immédiatement l'ANTIC (CERT-Cameroun) qui coordonne la réponse nationale, (3) notifiez la hiérarchie et la Présidence de la République via les canaux sécurisés si des données sensibles sont compromises, (4) contactez CyberSecure pour une réponse à incident et investigation forensique numérique, (5) ne communiquez pas publiquement sur l'incident avant d'avoir une vision claire de l'étendue de la compromission. Préservez toutes les preuves numériques disponibles.",
        },
      ],
    }}
  />
);

export default AuditSecuriteYaounde;
