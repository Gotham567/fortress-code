import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteAbidjan = () => (
  <CityLandingPage
    data={{
      city: "Abidjan",
      citySlug: "abidjan",
      region: "Côte d'Ivoire — District d'Abidjan",
      postalCode: "01 BP",
      intro: "CyberSecure, prestataire qualifié PASSI ANSSI, réalise vos audits de sécurité et tests d'intrusion à Abidjan : pentest Mobile Money (Wave, Orange Money, MTN MoMo), audit banques panafricaines (Ecobank), test d'intrusion systèmes logistiques portuaires (Bolloré, Port d'Abidjan) et pentest supply chain agro-négoce (Cargill, Barry Callebaut). Conformité ARTCI et Loi ivoirienne 2013-450 sur la cybercriminalité.",
      localContext: "Abidjan est la capitale économique de la Côte d'Ivoire et le hub financier majeur d'Afrique de l'Ouest francophone. Ecobank Transnational Incorporated (ETI) y a son siège et couvre 36 pays africains avec une infrastructure Azure. Wave CI, fintech AWS desservant plus de 5 millions de clients ivoiriens, et les opérateurs Orange CI et MTN CI via leurs services Mobile Money exposent des surfaces d'attaque applicatives et d'infrastructure critiques. Le port d'Abidjan est le premier port d'Afrique de l'Ouest par le trafic conteneurs et l'opérateur Bolloré Africa Logistics y est stratégique. La Côte d'Ivoire produit 40 % du cacao mondial — Cargill, Barry Callebaut, Olam et SIFCA opèrent des systèmes ERP de traçabilité sensibles. La BCEAO (Banque Centrale des États de l'Afrique de l'Ouest) siège à Dakar mais dispose d'une direction nationale à Abidjan. Le régulateur ARTCI encadre la cybersécurité sous la Loi 2013-450.",
      sectors: [
        "Finance et Mobile Money (Ecobank, Wave, Orange Money, MTN MoMo, NSIA)",
        "Cacao et agro-négoce (Cargill, Barry Callebaut, Olam, SIFCA)",
        "Télécommunications (Orange CI, MTN CI, Moov Africa)",
        "Port et logistique (Bolloré, port Abidjan, MSC)",
        "BTP et immobilier (Tractafric, promoteurs)",
        "Gouvernement et institutions (ARTCI, BCEAO, BNI)",
      ],
      neighborhoods: [
        "Plateau (CBD, banques, ambassades)",
        "Zone 4 et Marcory (commerce, PME)",
        "Cocody (résidentiel aisé, ambassades, hôtels)",
        "Yopougon (industrie, population dense)",
        "Port Bouët et aéroport (logistique, FHB airport)",
        "Abidjan Nord: Abobo, Adjamé (commerce)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Abidjan pour une banque ou une fintech ?",
          a: "Les tarifs d'un pentest applicatif web pour une PME ou fintech à Abidjan se situent généralement entre 500 000 et 1 500 000 FCFA HT (soit environ 760 à 2 280 €). Pour un audit complet d'une banque — périmètre réseau, applications web et mobile, Active Directory — le budget oscille entre 1 500 000 et 4 000 000 FCFA (2 280 à 6 100 €). CyberSecure établit un devis précis après cadrage du périmètre. Un investissement en audit de sécurité est nettement inférieur au coût moyen d'une fraude sur Mobile Money ou d'un incident cyber.",
        },
        {
          q: "Comment auditer la sécurité de Wave (Mobile Money sur AWS) ?",
          a: "Wave CI est une infrastructure AWS (Amazon Web Services) traitant des millions de transactions mobiles quotidiennes. Un audit de sécurité Wave comprend : un pentest de l'API mobile (authentification, autorisation, rejeu de transactions), un audit de l'application Android/iOS (reverse engineering, stockage local, communications réseau), une revue de l'architecture AWS (IAM, S3, API Gateway, WAF) et des tests d'injection sur les flux de paiement. CyberSecure utilise les méthodologies OWASP Mobile Security Testing Guide (MSTG) et OWASP API Security Top 10 pour ces audits fintech.",
        },
        {
          q: "Votre qualification PASSI ANSSI est-elle reconnue par l'ARTCI ?",
          a: "La qualification PASSI (Prestataire d'Audit de la Sécurité des Systèmes d'Information), délivrée par l'ANSSI française, est le référentiel d'excellence reconnu en matière d'audit cybersécurité. En Côte d'Ivoire, l'ARTCI s'aligne sur les standards internationaux : nos méthodologies PASSI (ISO 27001, OWASP, PTES, OSSTMM) sont pleinement applicables et reconnues par les grandes organisations ivoiriennes et les filiales de multinationales. Nos rapports d'audit respectent les exigences de la Loi ivoirienne 2013-450 sur la cybercriminalité et les recommandations ARTCI.",
        },
        {
          q: "Pentest Ecobank panafricain (36 pays) : comment l'organiser ?",
          a: "Un pentest de l'infrastructure Ecobank Transnational — présente dans 36 pays africains avec une plateforme Azure centralisée — nécessite une approche structurée. CyberSecure organise ce type de mission en plusieurs phases : (1) cadrage périmètre avec l'équipe CISO Ecobank (applications web groupe, APIs interbancaires, portail clients, Active Directory Azure AD), (2) tests en environnement de pré-production avec validation légale par pays concernés, (3) pentest réseau externe et interne sur les sites prioritaires (Abidjan, Lagos, Accra), (4) rapport consolidé avec plan de remédiation priorisé par criticité. La coordination multi-juridictionnelle est gérée par notre équipe.",
        },
        {
          q: "Que faire en cas de fraude cyber sur Mobile Money à Abidjan ?",
          a: "En cas de fraude cyber sur un service Mobile Money (Wave, Orange Money, MTN MoMo) à Abidjan : (1) bloquez immédiatement le compte compromis via l'application ou le service client de l'opérateur, (2) signalez l'incident à l'ARTCI (plateforme de signalement en ligne), (3) déposez une plainte auprès de la PLCC (Plateforme de Lutte contre la Cybercriminalité), (4) contactez votre banque si un compte bancaire est lié, (5) faites appel à CyberSecure pour une investigation forensique numérique afin de comprendre le vecteur d'attaque et sécuriser les systèmes. Notre CERT intervient sous 24h à Abidjan.",
        },
      ],
    }}
  />
);

export default AuditSecuriteAbidjan;
