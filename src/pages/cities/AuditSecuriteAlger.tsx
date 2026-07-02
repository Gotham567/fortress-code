import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAlger = () => (
  <CityLandingPage
    data={{
      city: "Alger",
      citySlug: "alger",
      region: "Algérie — Wilaya d'Alger",
      postalCode: "16000",
      intro: "CyberSecure, prestataire qualifié PASSI ANSSI, accompagne les organisations algériennes : pentest Sonatrach et systèmes OT/SCADA pétroliers, audit de sécurité banques publiques algériennes (BNA, BADR, CPA), test d'intrusion Algérie Télécom et opérateurs mobiles, pentest Air Algérie. Conformité Loi 18-07 sur la protection des données personnelles et ANPDP.",
      localContext: "Alger est la capitale et le centre névralgique économique de l'Algérie. Sonatrach, première entreprise africaine par le chiffre d'affaires, opère des systèmes SCADA pétroliers classés infrastructure critique nationale — une cyberattaque sur ces systèmes aurait des conséquences catastrophiques pour l'approvisionnement énergétique national et régional. Les banques publiques BNA, BADR, CPA et BEA fonctionnent sur des systèmes bancaires legacy (certains datant des années 1990) avec une migration numérique en cours. Algérie Télécom, Djezzy, Mobilis et Ooredoo assurent les télécommunications nationales. Air Algérie connecte l'Algérie à l'international depuis l'aéroport Houari Boumediene. Le CSIRT Algérie (Cybersecurity Incident Response Team national) coordonne la réponse aux incidents. La Loi 18-07 et l'ANPDP encadrent la protection des données personnelles.",
      sectors: [
        "Hydrocarbures (Sonatrach, Naftal, Sonelgaz)",
        "Banque publique (BNA, BADR, CPA, BEA)",
        "Télécommunications (Algérie Télécom, Djezzy, Mobilis, Ooredoo)",
        "Gouvernement et ministères",
        "Agroalimentaire (Cevital, GIPLAIT, Hamoud Boualem)",
        "BTP et services (nombreuses PME)",
      ],
      neighborhoods: [
        "Alger Centre et Hydra (CBD, ministères)",
        "El Biar et Ben Aknoun (résidentiel aisé)",
        "Hussein Dey et Kouba (industrie, commerce)",
        "Bir Mourad Raïs et Birkhadem",
        "Ain Benian et Chéraga (zone résidentielle Ouest)",
        "Dar El Beida (aéroport, zone industrielle Est)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest en Algérie ?",
          a: "Les tarifs sont exprimés en euros car le dinar algérien (DZD) est soumis à des restrictions de change. Pour un pentest d'application web destiné à une PME algérienne, comptez entre 1 200 et 3 500 €. Pour un audit complet de Sonatrach ou d'une banque publique (périmètre réseau interne, Active Directory, applications critiques, OT/SCADA), le budget se situe entre 5 000 et 15 000 €. CyberSecure propose des modalités de paiement adaptées aux réalités économiques algériennes et peut facturer via des entités partenaires locales.",
        },
        {
          q: "Comment sécuriser les systèmes OT/SCADA de Sonatrach ?",
          a: "Les systèmes OT (Operational Technology) et SCADA de Sonatrach — contrôlant pipelines, raffineries et plateformes de production — sont des infrastructures critiques nationales. Un audit de sécurité OT/SCADA comprend : (1) inventaire et cartographie des actifs OT (API/PLC Siemens, Schneider, Honeywell), (2) analyse de la segmentation réseau IT/OT (purdue model), (3) audit des protocoles industriels (Modbus, DNP3, OPC-UA) et des communications, (4) identification des vulnérabilités CVE sans perturbation de la production, (5) test d'intrusion en environnement isolé ou sur copie numérique. CyberSecure respecte les normes IEC 62443 et les recommandations ANSSI pour les systèmes industriels.",
        },
        {
          q: "Votre PASSI est-il reconnu par le CSIRT Algérie ?",
          a: "La qualification PASSI ANSSI est le standard d'excellence français et européen pour les audits de sécurité. Le CSIRT Algérie, créé pour coordonner la réponse aux incidents cyber nationaux, reconnaît les méthodologies internationales (ISO 27001, OWASP, PTES) que nous appliquons. Nos rapports d'audit sont structurés selon ces référentiels et incluent une analyse de conformité avec la Loi algérienne 18-07 et les recommandations de l'ANPDP. Des organisations algériennes de premier plan font confiance à des prestataires PASSI pour la rigueur de leurs audits.",
        },
        {
          q: "Audit Active Directory des banques algériennes avec systèmes legacy des années 90 : quelle méthodologie ?",
          a: "Les banques publiques algériennes (BNA, BADR, CPA) fonctionnent souvent sur des environnements hybrides : Active Directory Windows Server récent coexistant avec des applications mainframe ou client-serveur des années 1990. Notre méthodologie d'audit AD pour ces contextes comprend : (1) cartographie de l'annuaire (utilisateurs, groupes, GPO, relations de confiance), (2) identification des chemins d'élévation de privilèges (BloodHound/SharpHound), (3) test des protocoles d'authentification legacy (NTLM, Kerberoasting, AS-REP Roasting), (4) audit des comptes de service et des droits excessifs, (5) revue des interfaces entre AD et les applications legacy. Un plan de remédiation progressive est fourni en tenant compte des contraintes opérationnelles bancaires.",
        },
        {
          q: "Que faire en cas de cyberattaque en Algérie ?",
          a: "En cas de cyberattaque sur votre organisation en Algérie : (1) isolez immédiatement les systèmes compromis du réseau (déconnexion réseau, pas d'extinction qui pourrait détruire des preuves volatiles), (2) alertez le CSIRT Algérie via le portail national de signalement des incidents cyber, (3) notifiez l'ANPDP si des données personnelles sont compromises (obligation légale Loi 18-07), (4) contactez CyberSecure pour une réponse à incident et investigation forensique — notre équipe CERT intervient en support à distance sous 2 heures, (5) ne payez pas de rançon sans consultation préalable d'experts. Conservez tous les journaux d'événements disponibles.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAlger;
