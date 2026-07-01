import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLeMans = () => (
  <CityLandingPage
    data={{
      city: "Le Mans",
      citySlug: "le-mans",
      region: "Pays de la Loire",
      postalCode: "72000",
      intro: "CyberSecure accompagne les PME et ETI du Mans avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés à l'industrie automobile, au secteur des assurances et au tissu de PME sarthoises. Notre cabinet qualifié PASSI ANSSI réalise des missions d'audit réseau, d'audit Active Directory et de pentest application web au Mans et dans tout le département de la Sarthe.",
      localContext: "Le Mans est mondialement connu pour ses 24 Heures mais son économie repose sur un solide tissu industriel automobile avec des équipementiers comme Renault Trucks et des centaines de sous-traitants dont les systèmes d'information sont interconnectés avec leurs donneurs d'ordre. La ville abrite également le siège de la MAIF, l'une des plus grandes mutuelles d'assurance françaises, qui traite des millions de données personnelles sensibles. L'agroalimentaire (volailles du Mans, charcuteries) et la logistique profitent du positionnement stratégique de la Sarthe sur l'axe Paris-Nantes. Le CHU du Mans et les établissements de santé privés complètent le panorama économique local exposé aux cybermenaces.",
      sectors: [
        "Industrie automobile et équipementiers",
        "Assurance et mutualité (MAIF et partenaires)",
        "Agroalimentaire et industries alimentaires",
        "Logistique et transport (axe A11)",
        "Santé (CHU Le Mans, cliniques Sarthe)",
        "PME artisanales et commerce local",
      ],
      neighborhoods: [
        "Centre-ville et Vieux-Mans",
        "Arnage et zone industrielle automobile",
        "Zone sud (circuit 24h, activités logistiques)",
        "Allonnes et zones d'activités ouest",
        "Saint-Saturnin et technopole Novaxis",
        "La Flèche et Sarthe sud",
      ],
      faq: [
        {
          q: "Combien coûte un pentest pour un équipementier automobile ou une mutuelle d'assurance au Mans ?",
          a: "Un pentest pour un équipementier automobile au Mans soumis aux exigences TISAX se situe entre 8 000 et 18 000 € HT selon le périmètre. Pour une structure d'assurance comme la MAIF ou ses partenaires, un audit de sécurité complet incluant le test des portails clients et des API bancaires varie de 10 000 à 20 000 € HT. CyberSecure propose des audits applicatifs web dès 4 500 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Quel est le délai pour un audit de sécurité au Mans ?",
          a: "Un audit réseau pour une PME sarthe dure généralement 4 à 7 jours ouvrés. Un audit de conformité TISAX pour un équipementier automobile prend 8 à 15 jours selon le niveau d'assurance visé. CyberSecure peut intervenir sous 72h pour les urgences et livre le rapport final dans les 5 jours ouvrés suivant la fin des tests.",
        },
        {
          q: "Comment sécuriser les données clients d'une compagnie d'assurance au Mans ?",
          a: "Les mutuelles et compagnies d'assurance mancelles gèrent des millions de données personnelles sensibles (santé, habitation, automobile) qui font l'objet d'une réglementation stricte (RGPD, Solvabilité II, DORA). CyberSecure réalise des audits de sécurité des portails clients, des API d'échange avec les partenaires, des accès back-office et des systèmes CRM. Nous évaluons également les procédures de gestion des habilitations et la traçabilité des accès aux données personnelles.",
        },
        {
          q: "CyberSecure intervient-il sur site au Mans et en Sarthe ?",
          a: "Oui, nos consultants se déplacent au Mans, La Flèche, Sablé-sur-Sarthe, Mamers et dans toute la Sarthe. Nous couvrons également les départements voisins (Mayenne, Maine-et-Loire) pour les groupes ayant des sites dans plusieurs villes des Pays de la Loire. Déploiement possible sous 48h.",
        },
        {
          q: "Que faire en cas de cyberattaque au Mans — procédure d'urgence CERT ?",
          a: "Appelez la ligne d'urgence CERT de CyberSecure disponible 24h/24 et 7j/7. N'éteignez pas les systèmes compromis — isolez-les du réseau. Notre équipe peut être déployée sur site au Mans dans les 4 heures pour contenir l'attaque, analyser les traces et coordonner la reprise d'activité. Nous assurons les notifications réglementaires auprès de l'ANSSI et de la CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLeMans;
