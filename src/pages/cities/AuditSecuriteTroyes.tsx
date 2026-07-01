import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteTroyes = () => (
  <CityLandingPage
    data={{
      city: "Troyes",
      citySlug: "troyes",
      region: "Grand Est",
      postalCode: "10000",
      intro: "CyberSecure accompagne les PME et ETI de Troyes avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs mode/textile, logistique et industriel de l'Aube. Notre cabinet qualifié PASSI ANSSI intervient sur site à Troyes pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT pour les entreprises de la Champagne méridionale.",
      localContext: "Troyes est la capitale mondiale du marché de l'outlet de mode avec les centres McArthurGlen et Marques Avenue qui attirent chaque année des millions d'acheteurs internationaux, générant d'importants flux de données commerciales et personnelles sur des plateformes e-commerce nécessitant une sécurisation irréprochable. La tradition textile troyenne (bonneterie) se réinvente avec des marques premium (Le Coq Sportif) dont les savoir-faire de fabrication constituent des actifs à protéger. La plateforme logistique auboise profite de la situation stratégique de Troyes à équidistance de Paris, Lyon et Strasbourg. La champagne vitivinicole méridionale (Côte des Bar, coteaux champenois) développe son commerce en ligne. Le CH de Troyes et les établissements de santé de l'Aube font face aux cybermenaces.",
      sectors: [
        "Mode, textile et outlet (McArthurGlen, Marques Avenue, Le Coq Sportif)",
        "E-commerce et retail digital (plateformes outlet en ligne)",
        "Logistique et transport (hub A5/A26)",
        "Champagne et viticulture (Côte des Bar)",
        "Santé (CH Troyes, cliniques Aube)",
        "Collectivités et Grand Troyes Communauté Urbaine",
      ],
      neighborhoods: [
        "Centre-ville historique (colombages, cathédrale Saint-Pierre)",
        "McArthurGlen et Marques Avenue (outlets mode)",
        "Zone logistique de la Noue (nord-ouest Troyes)",
        "Pont-Sainte-Marie et zones industrielles",
        "Sainte-Savine et Saint-André-les-Vergers (industrie)",
        "Bar-sur-Aube et Côte des Bar (champagne)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un centre outlet ou une marque de mode à Troyes ?",
          a: "Un audit de sécurité pour une plateforme e-commerce ou un centre outlet de Troyes (McArthurGlen, Marques Avenue) incluant les systèmes de caisse connectés, les portails clients et les données de fidélité se situe entre 6 000 et 14 000 € HT. Un pentest web ciblé sur un site de vente en ligne de marque de mode débute à 4 500 € HT. CyberSecure propose également des audits de conformité PCI-DSS pour les systèmes de paiement. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un pentest réseau à Troyes ?",
          a: "Un pentest réseau pour une PME troyenne dure 4 à 7 jours ouvrés. Pour un centre commercial ou une plateforme logistique incluant les systèmes de caisse et d'accès visiteurs, comptez 5 à 9 jours. L'audit Active Directory seul est réalisable en 2 à 3 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser une plateforme de e-commerce mode ou un système de fidélisation client dans l'outlet de Troyes ?",
          a: "Les systèmes de gestion de l'outlet troyen manipulent des données personnelles (programmes de fidélité, historiques d'achats) et des données bancaires de millions de clients internationaux. CyberSecure réalise des tests de pénétration web ciblant les injections, les XSS, les fuites de données personnelles et les vulnérabilités des API. Nous évaluons également la conformité PCI-DSS pour les paiements en ligne et la conformité RGPD pour les bases de données clients et les transferts vers les marques partenaires (souvent des groupes internationaux).",
        },
        {
          q: "CyberSecure intervient-il sur site à Troyes et dans l'Aube ?",
          a: "Oui, nos consultants se déplacent à Troyes, Bar-sur-Aube, Bar-sur-Seine, Nogent-sur-Seine et dans tout le département de l'Aube. Nous couvrons également la Marne (Reims, Châlons) et la Haute-Marne pour les groupes champenois ayant des sites multiples. Déploiement sous 72h à Troyes.",
        },
        {
          q: "Que faire en cas de cyberattaque à Troyes — procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre pour préserver les traces forensiques. Notre équipe peut être sur site à Troyes dans les 4 heures. En cas de violation de données personnelles ou bancaires (RGPD, PCI-DSS), CyberSecure assure les notifications obligatoires auprès de la CNIL et de l'ANSSI dans les délais réglementaires. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteTroyes;
