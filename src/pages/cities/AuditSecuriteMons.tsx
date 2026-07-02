import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMons = () => (
  <CityLandingPage
    data={{
      city: "Mons",
      citySlug: "mons",
      region: "Belgique — Wallonie",
      postalCode: "7000",
      intro: "CyberSecure réalise des pentests, Red Team exercises et audits de sécurité à Mons pour les organisations proches du SHAPE (Quartier Général Suprême des Forces Alliées en Europe), Microsoft Belgique, la Digital Innovation Valley et l'UMONS. Cabinet qualifié PASSI ANSSI, nous intervenons en Province de Hainaut avec une expertise en tests d'intrusion sur des environnements exposés aux menaces de cyberespionnage étatique OTAN-adjacent.",
      localContext: "Mons est une ville stratégique sur le plan géopolitique : le SHAPE (Supreme Headquarters Allied Powers Europe) y est installé à Casteau, faisant de toute l'agglomération montoise une zone d'intérêt pour les services de renseignement adverses (russes, chinois). Microsoft a établi son centre de données belge et ses équipes cloud à Mons, générant un écosystème tech important. La Digital Innovation Valley fédère PME tech et startups. L'UMONS possède des laboratoires de recherche en cybersécurité et génie informatique. Les sous-traitants et fournisseurs de services aux organisations OTAN-adjacent sont des cibles de choix pour les attaques de supply chain visant à compromettre indirectement des réseaux alliés.",
      sectors: [
        "Défense et organisations OTAN-adjacent (SHAPE, sous-traitants)",
        "Technologie et cloud (Microsoft Belgique, Digital Innovation Valley)",
        "Enseignement supérieur (UMONS, Haute École, recherche)",
        "Administration publique (Ville de Mons, Province de Hainaut)",
        "Santé (CHU Ambroise Paré, polycliniques)",
        "PME tech et startups (Digital Innovation Valley)",
      ],
      neighborhoods: [
        "Centre de Mons (Grand Place, Beffroi, Jonction)",
        "SHAPE Casteau (Organisations militaires alliées)",
        "Ghlin et Cuesmes (zone industrielle et logistique)",
        "Nimy et Cité du Dragon (Microsoft, tech campus)",
        "Jemappes et Quaregnon (banlieue industrielle)",
        "Province de Hainaut (La Louvière, Soignies, Ath)",
      ],
      faq: [
        {
          q: "Pentest pour un sous-traitant OTAN ou SHAPE à Mons : quelles contraintes spécifiques ?",
          a: "Les fournisseurs et sous-traitants du SHAPE ou d'organisations OTAN sont des cibles privilégiées d'attaques de supply chain visant à compromettre indirectement des réseaux alliés. Un pentest de sous-traitant OTAN-adjacent à Mons comprend : audit de la segmentation réseau entre systèmes OTAN et systèmes commerciaux, test d'intrusion des accès distants (VPN, Remote Desktop) utilisés pour les connexions aux réseaux SHAPE, simulation de spear phishing ciblé sur les employés travaillant sur des contrats OTAN, revue des politiques de classification et de chiffrement des documents contractuels sensibles. CyberSecure respecte les contraintes de confidentialité renforcées et peut accompagner la certification NATO AQAP ou NIS2. Tarifs Red Team : 20 000-50 000 € HT selon périmètre.",
        },
        {
          q: "Audit Microsoft Azure ou Microsoft 365 tenant pour une organisation montoise : comment procéder ?",
          a: "La présence de Microsoft à Mons (centre de données, équipes commerciales) facilite les collaborations techniques. Un audit de tenant Microsoft 365 comprend : revue de la configuration Entra ID (ex-Azure AD) et des politiques d'accès conditionnel, audit des droits Exchange Online et SharePoint (permissions excessives, partages externes non contrôlés), test de l'authentification MFA et des protections anti-phishing Defender, audit des applications tierces connectées au tenant (OAuth abuse), revue de la conformité Microsoft Purview pour les données sensibles. CyberSecure est partenaire Microsoft et peut livrer un rapport Secure Score actionnable. Tarif audit M365 complet : 4 000-9 000 € HT.",
        },
        {
          q: "Red Team exercise à Mons : comment simuler une attaque APT étatique contre mon organisation ?",
          a: "Un Red Team exercise à Mons simule une attaque avancée persistante (APT) sur plusieurs semaines, comme celles menées par des services de renseignement adverses intéressés par la proximité OTAN. Les phases : reconnaissance OSINT sur l'organisation et ses employés, spear phishing ciblé sur des décideurs clés, exploitation de vulnérabilités externes (VPN, webservices), déplacement latéral dans le SI, exfiltration simulée de données sensibles. Le Red Team exercise inclut un debriefing avec l'équipe de réponse à incident (Blue Team) et des recommandations de détection (règles SIEM, IOC). Durée : 3-6 semaines. Tarif : 25 000-60 000 € HT selon périmètre et nombre de vecteurs d'attaque.",
        },
        {
          q: "Combien coûte un audit de sécurité à Mons pour une PME de la Digital Innovation Valley ?",
          a: "Pour les PME et startups de la Digital Innovation Valley de Mons, CyberSecure propose des prestations modulaires : diagnostic de sécurité (évaluation rapide 1-2 jours) entre 1 500 et 3 000 € HT, pentest application web ou API entre 3 000 et 7 000 € HT, audit infrastructure et Active Directory entre 4 000 et 9 000 € HT. Des forfaits startup existent avec des délais raccourcis (rapport en 5 jours ouvrés). Des subventions wallonnes (chèques-entreprises numériques) peuvent couvrir jusqu'à 50% du coût d'un audit de sécurité pour les PME wallonnes éligibles — CyberSecure vous accompagne dans la démarche.",
        },
        {
          q: "Que faire en cas de cyberattaque à Mons impliquant des données sensibles proches du SHAPE ?",
          a: "Un incident de sécurité chez un sous-traitant OTAN-adjacent doit être traité avec une extrême diligence. Contactez notre CERT immédiatement. Ne communiquez pas via vos canaux de messagerie habituels si vous soupçonnez une compromission de votre système de communication. CyberSecure coordonne : investigation forensique immédiate pour déterminer si des données relatives à des contrats OTAN ont été exfiltrées, notification au CCB belge (NIS2), notification aux autorités contractantes OTAN si exigé par votre contrat, préservation des preuves dans un format admissible en justice (hash, timeline). La Computer Crime Unit de la Police Fédérale belge dispose d'une unité spécialisée pour les incidents impliquant des organisations de défense.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMons;
