import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCaen = () => (
  <CityLandingPage
    data={{
      city: "Caen",
      citySlug: "caen",
      region: "Normandie",
      postalCode: "14000",
      intro: "CyberSecure accompagne les PME et ETI de Caen avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés à l'industrie automobile, à la santé et à l'agroalimentaire normand. Notre cabinet qualifié PASSI ANSSI intervient sur site à Caen et dans le Calvados pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT.",
      localContext: "Caen est le premier pôle économique de Normandie avec un tissu industriel historique dans l'automobile (usine PSA Stellantis de Mondeville, l'une des plus grandes de France) générant un écosystème de sous-traitants interconnectés dont la sécurisation informatique conditionne la conformité TISAX exigée par les constructeurs. L'agroalimentaire normand (produits laitiers, cidre, calvados) s'appuie sur des coopératives et PME en transformation numérique qui constituent des cibles croissantes pour les ransomwares. L'Université de Caen Normandie, le CHU et les grandes écoles d'ingénieurs (ENSICAEN spécialisée en cybersécurité) font de Caen un pôle de compétences cyber reconnu. Les mémoriaux et sites touristiques génèrent une économie saisonnière manipulant de nombreuses données de réservation.",
      sectors: [
        "Automobile et équipementiers (Stellantis, Tier 1/2)",
        "Agroalimentaire normand (laiteries, distilleries)",
        "Santé (CHU Caen, cliniques Calvados)",
        "Enseignement supérieur et recherche (ENSICAEN, UNICAEN)",
        "Tourisme mémoriel et hôtellerie",
        "Collectivités et Caen-la-Mer Métropole",
      ],
      neighborhoods: [
        "Centre-ville et quartier des Quatrans",
        "Mondeville (zone industrielle PSA Stellantis)",
        "Hérouville-Saint-Clair (zones d'activités, CHU)",
        "Côte de Nacre et Ouistreham (port, logistique)",
        "Falaise et Calvados intérieur (agroalimentaire)",
        "Bayeux et Bessin (tourisme, PME normandes)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest TISAX pour un équipementier automobile à Caen ?",
          a: "Un pentest dans le cadre d'une certification TISAX pour un équipementier automobile de Caen ou Mondeville se situe entre 8 000 et 20 000 € HT selon le niveau d'assurance visé (AL1, AL2, AL3). Pour les sous-traitants Tier 2 et Tier 3 soumis aux exigences de PSA Stellantis, CyberSecure propose des audits de pré-certification TISAX à partir de 6 000 € HT. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit sécurité informatique à Caen ?",
          a: "Un audit réseau pour une PME caennaise dure généralement 4 à 7 jours ouvrés. Pour une ETI industrielle incluant les systèmes de production, comptez 7 à 12 jours. L'audit Active Directory seul est réalisable en 2 à 4 jours. CyberSecure peut intervenir en urgence sous 72h et livrer le rapport final dans les 5 jours ouvrés après la fin des tests.",
        },
        {
          q: "Comment sécuriser les systèmes d'information d'un sous-traitant automobile à Caen pour la conformité PSA/Stellantis ?",
          a: "Les sous-traitants de PSA Stellantis à Mondeville et dans le Calvados doivent respecter les exigences TISAX et souvent les normes ISO 27001 pour maintenir leur homologation fournisseur. CyberSecure réalise des audits de conformité incluant la revue des contrôles d'accès au réseau (NAC), le test des liaisons EDI avec les constructeurs, l'évaluation des politiques de BYOD et la sécurité des postes de conception (CAO). Nous accompagnons également la préparation aux audits de certification TISAX.",
        },
        {
          q: "CyberSecure intervient-il sur site à Caen et dans le Calvados ?",
          a: "Oui, nos consultants se déplacent à Caen, Mondeville, Hérouville-Saint-Clair, Bayeux, Lisieux, Falaise et dans tout le département du Calvados. Nous couvrons également la Manche (Cherbourg, Saint-Lô) et l'Orne (Alençon) pour les groupes normands ayant des sites multiples. Intervention sous 48h à Caen.",
        },
        {
          q: "Que faire en cas de cyberattaque à Caen — quelle est la procédure CERT ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les machines compromises du réseau sans les éteindre afin de préserver les traces forensiques. Notre équipe peut être sur site à Caen dans les 4 heures pour contenir l'attaque et coordonner la reprise d'activité. Nous assurons les notifications obligatoires auprès de l'ANSSI et de la CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCaen;
