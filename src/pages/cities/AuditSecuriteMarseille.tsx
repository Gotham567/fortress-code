import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMarseille = () => (
  <CityLandingPage
    data={{
      city: "Marseille",
      citySlug: "marseille",
      urlPath: "cybersecurite-marseille",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "13000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, accompagne les entreprises marseillaises avec des pentests et des audits de sécurité informatique adaptés aux enjeux du port, de la logistique et du commerce méditerranéen. CMA CGM, AP-HM, PME et startups de la French Tech Aix-Marseille font confiance à nos experts en cybersécurité PACA.",
      localContext: "Marseille est le deuxième port de France et un hub logistique méditerranéen majeur (CMA CGM, GPMM). Les acteurs portuaires, les entreprises de logistique maritime et les opérateurs de transport sont exposés à des cybermenaces ciblées : après l'attaque de CMA CGM en 2020, les acteurs du secteur ont accéléré leur transformation cybersécurité. Marseille abrite aussi l'AP-HM (Assistance Publique - Hôpitaux de Marseille), une scène de startups numériques dynamique et la pétrochimie de Fos-sur-Mer. CyberSecure intervient à Marseille, Aix-en-Provence, Vitrolles, Fos-sur-Mer et dans toute la région PACA.",
      sectors: [
        "Logistique portuaire et transport maritime (CMA CGM)",
        "Pétrochimie et industrie (Fos-sur-Mer)",
        "Santé (AP-HM, hôpitaux publics et privés)",
        "Tourisme et hôtellerie",
        "Commerce méditerranéen et import-export",
        "Startups et French Tech Aix-Marseille",
      ],
      neighborhoods: [
        "Marseille Centre (1er-7e) et Euroméditerranée",
        "Marseille Nord (13e-16e) et J4",
        "Aix-en-Provence et Vitrolles",
        "Fos-sur-Mer, Istres, Martigues",
        "Toulon, Avignon, Arles",
        "Toute la région PACA",
      ],
      faq: [
        {
          q: "Les opérateurs portuaires de Marseille sont-ils soumis à NIS2 ?",
          a: "Oui. Les opérateurs du Grand Port Maritime de Marseille (GPMM) et les acteurs du transport maritime sont des opérateurs de services essentiels (OSE) soumis à NIS2 dans le secteur des transports. Ils doivent mettre en place des mesures de gestion des risques, notifier les incidents à l'ANSSI et réaliser des audits de sécurité réguliers. Nous réalisons des audits de conformité NIS2 spécifiques au secteur portuaire, couvrant les systèmes VTMIS, les terminaux et les interfaces avec la douane.",
        },
        {
          q: "Comment protéger les systèmes logistiques des sous-traitants de CMA CGM à Marseille ?",
          a: "Après la cyberattaque contre CMA CGM en 2020, la sécurité de la chaîne logistique maritime est devenue prioritaire. Les prestataires IT et logistiques de CMA CGM doivent répondre à des exigences cybersécurité croissantes. Nous proposons des audits de sécurité pour les fournisseurs et prestataires des grands groupes logistiques : test d'intrusion des systèmes TMS, audit des APIs d'intégration et revue des politiques d'accès tiers.",
        },
        {
          q: "Comment sécuriser les systèmes d'information d'un hôpital AP-HM à Marseille ?",
          a: "La sécurisation d'un établissement AP-HM suit les référentiels PGSSI-S de l'ANS et les guides ANSSI pour la santé. Notre audit couvre la segmentation des réseaux médicaux et administratifs, la sécurité des équipements médicaux connectés (IoMT), la gestion des identités des personnels soignants, les accès distants des médecins libéraux et le plan de continuité d'activité. Nous intervenons sans perturber la prise en charge des patients.",
        },
        {
          q: "Intervenez-vous à Marseille et dans la région PACA ?",
          a: "Oui. Nos consultants interviennent à Marseille, Aix-en-Provence, Toulon, Avignon, Nice, Fos-sur-Mer, Vitrolles et dans toute la région Provence-Alpes-Côte d'Azur. Intervention sur site sous 24h à Marseille. Pour les entreprises du bassin méditerranéen avec des opérations en Italie ou en Espagne, nous proposons des audits couvrant plusieurs sites.",
        },
        {
          q: "Quel est le coût d'un audit de sécurité pour une PME marseillaise ?",
          a: "Un audit de sécurité organisationnel pour une PME de 20 à 100 salariés à Marseille coûte entre 3 000 et 8 000 € HT. Il inclut l'analyse des risques, l'évaluation des mesures en place, un pentest ciblé et un plan de remédiation priorisé. Pour les startups de la French Tech Aix-Marseille, nous proposons un Quick Scan sécurité à partir de 2 500 € HT. Devis personnalisé gratuit sous 48h.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMarseille;
