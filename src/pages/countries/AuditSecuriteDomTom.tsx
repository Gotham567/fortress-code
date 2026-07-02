import CountryHubPage, { CountryData } from "@/components/CountryHubPage";

const data: CountryData = {
  country: "DOM-TOM",
  countrySlug: "dom-tom",
  region: "Outre-mer français",
  intro:
    "CyberSecure accompagne les entreprises et établissements publics des DOM-TOM dans leurs audits de sécurité informatique, pentests et mise en conformité NIS2/RGPD. De La Réunion à la Guyane, nos experts PASSI sécurisent les CHU, les collectivités et les infrastructures critiques nationales face à des cyberattaques ransomware en forte recrudescence.",
  context:
    "Les départements et territoires d'outre-mer ont été frappés par des cyberattaques majeures ces dernières années. Le CHU de Martinique a subi une attaque ransomware dévastatrice en avril 2022, paralysant ses systèmes pendant plusieurs semaines et contraignant au retour au papier. En novembre 2021, le CHU de Guadeloupe (CHU de Pointe-à-Pitre) avait connu une attaque similaire avec chiffrement complet de ses données. Ces incidents démontrent la vulnérabilité spécifique des établissements de santé ultramarins, souvent moins dotés en ressources cybersécurité que leurs homologues métropolitains. Le Centre Spatial Guyanais (CSG/CNES) constitue une infrastructure critique nationale de premier plan, nécessitant une protection maximale de ses systèmes de lancement et de contrôle de vol. La connectivité limitée par câbles sous-marins (SAT-3, LION2, ASEC) crée des points de défaillance uniques à sécuriser.",
  regulation:
    "Les DOM-TOM sont soumis au droit français complet : RGPD (avec la CNIL comme autorité de contrôle), directive NIS2 transposée par la loi n° 2023-703, certification HDS (Hébergeur de Données de Santé) pour les établissements hospitaliers, et référentiels ANSSI (PGSSI-S pour la santé). Les collectivités de Guadeloupe, Martinique, Guyane et La Réunion bénéficient du Programme DIANA de l'ANSSI pour l'accompagnement cybersécurité des collectivités ultramarines. La réglementation DORA s'applique aux établissements financiers présents dans les DOM.",
  sectors: [
    "Santé et CHU (CHU Martinique, CHU Guadeloupe, CHU La Réunion, CHCB)",
    "Infrastructure spatiale et défense (CSG/CNES, Base militaire Cayenne)",
    "Collectivités régionales et mairies (Conseils régionaux, CTM, CTG)",
    "Énergie et environnement (EDF SEI, SARA Martinique, Total Guyane)",
    "Banques et assurances (Crédit Agricole, BNP Paribas Caraïbes, Bred)",
    "Tourisme, hôtellerie et aéroports (Aéroport Guadeloupe, Club Med)",
  ],
  cities: [
    { name: "Saint-Denis (Réunion)", urlPath: "/audit-securite-saint-denis-reunion", description: "CHU La Réunion, collectivités, tourisme et numérique" },
    { name: "Fort-de-France", urlPath: "/audit-securite-fort-de-france", description: "CHU Martinique, Conseil exécutif CTM, banques" },
    { name: "Pointe-à-Pitre", urlPath: "/audit-securite-pointe-a-pitre", description: "CHU Guadeloupe, port, collectivités" },
    { name: "Cayenne", urlPath: "/audit-securite-cayenne", description: "CSG/CNES, CTG, administrations guyanaises" },
  ],
  faq: [
    {
      q: "Quel est le coût d'un audit de cybersécurité pour un CHU en Martinique ou Guadeloupe ?",
      a: "Un audit de sécurité complet d'un CHU ultramarin est facturé entre 18 000 € et 55 000 € selon la taille du SI et le périmètre. Le périmètre standard inclut : audit réseau et Active Directory, pentest des applications métier (DPI, PACS, SIH), revue de la segmentation IT/OT médical et plan de réponse à incident. Des subventions ANSSI (Programme CaRE) peuvent couvrir jusqu'à 50 % du coût pour les établissements de santé.",
    },
    {
      q: "Les DOM-TOM sont-ils soumis à NIS2 et aux exigences ANSSI ?",
      a: "Oui, la directive NIS2, transposée en droit français, s'applique intégralement aux DOM-TOM. Les entités essentielles (EE) et entités importantes (EI) des outre-mer doivent se conformer aux exigences ANSSI dans les mêmes délais que la métropole. Les collectivités ultramarines bénéficient du programme DIANA de l'ANSSI pour un accompagnement spécifique.",
    },
    {
      q: "Comment le CSG/CNES protège-t-il ses systèmes de lancement à Kourou ?",
      a: "En tant qu'infrastructure critique nationale, le CSG/CNES est soumis aux obligations des Opérateurs d'Importance Vitale (OIV) avec des exigences ANSSI renforcées. Les systèmes de contrôle de vol et de lancement font l'objet d'audits réguliers par des prestataires PASSI qualifiés. CyberSecure dispose de l'habilitation nécessaire pour intervenir sur ce type d'infrastructure sensible.",
    },
    {
      q: "CyberSecure intervient-il physiquement dans les DOM-TOM ?",
      a: "Oui, nous intervenons à La Réunion, Martinique, Guadeloupe et Guyane. Les missions intègrent les frais de déplacement pour les interventions de plus de 5 jours. Nous proposons également des missions hybrides : audit à distance + déplacement ciblé sur site pour les phases de test d'intrusion physique et de sensibilisation. Un bureau partenaire est disponible à Fort-de-France.",
    },
    {
      q: "Quelles leçons tirer des attaques ransomware sur les CHU ultramarins de 2021-2022 ?",
      a: "Les attaques sur les CHU de Guadeloupe (2021) et Martinique (2022) ont révélé des failles communes : Active Directory non durci (absence de MFA, comptes privilégiés non protégés), sauvegardes sur le même réseau que la production, absence de segmentation entre réseau médical et administratif, et plans de continuité non testés. CyberSecure propose un package 'post-ransomware resilience' à 12 000 € incluant audit AD, plan de sauvegarde air-gap et exercice de crise.",
    },
  ],
};

const AuditSecuriteDomTom = () => <CountryHubPage data={data} />;
export default AuditSecuriteDomTom;
