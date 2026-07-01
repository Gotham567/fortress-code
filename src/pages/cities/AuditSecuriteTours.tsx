import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteTours = () => (
  <CityLandingPage
    data={{
      city: "Tours",
      citySlug: "tours",
      region: "Centre-Val de Loire",
      postalCode: "37000",
      intro: "CyberSecure accompagne les PME et ETI de Tours avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs pharmaceutique, agroalimentaire et touristique de l'Indre-et-Loire. Notre cabinet qualifié PASSI ANSSI réalise des missions d'audit réseau, d'audit Active Directory et de pentest application web à Tours et dans l'agglomération tourangelle.",
      localContext: "Tours est un hub pharmaceutique européen de premier plan avec la présence de Pfizer et Boehringer Ingelheim dont les données de recherche clinique et les processus de fabrication sont soumis aux normes GxP et constituent des cibles d'espionnage industriel à haute valeur. L'agroalimentaire tourangeau (viticulture Val de Loire, Rillettes de Tours, Vouvray) rassemble des PME en pleine numérisation dont les systèmes de traçabilité et de commerce en ligne nécessitent une sécurisation renforcée. Le tourisme patrimonial (châteaux de la Loire classés UNESCO) génère une économie hôtelière et événementielle manipulant des données bancaires et personnelles. L'Université de Tours et le CHU Bretonneau constituent d'importants pôles académiques et de santé exposés aux cybermenaces.",
      sectors: [
        "Pharmaceutique (Pfizer, Boehringer Ingelheim)",
        "Viticulture et agroalimentaire Val de Loire",
        "Santé (CHU Bretonneau, cliniques 37)",
        "Tourisme patrimonial et hôtellerie haut de gamme",
        "Numérique et ESN tourangelles",
        "Logistique et transport (axe A10)",
      ],
      neighborhoods: [
        "Centre-ville et quartier Vieux-Tours",
        "Saint-Pierre-des-Corps (industrie, logistique)",
        "Parcay-Meslay et zone nord (Pfizer)",
        "Joué-lès-Tours (zones commerciales, industrie)",
        "La Riche et zone d'activités ouest",
        "Amboise et Val de Loire châteaux",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un site pharmaceutique à Tours ?",
          a: "Un audit de sécurité pour un site pharmaceutique comme Pfizer ou Boehringer Ingelheim à Tours nécessite une approche couvrant à la fois le SI de gestion et les systèmes de supervision de production (MES, SCADA). Le budget se situe entre 15 000 et 40 000 € HT selon la taille du site et le périmètre. Pour les PME du secteur pharmaceutique ou de la sous-traitance, un audit ciblé SI débute à 6 000 € HT. CyberSecure maîtrise les référentiels GxP, Annex 11 et les exigences FDA 21 CFR Part 11.",
        },
        {
          q: "Quel délai pour un pentest réseau ETI à Tours ?",
          a: "Un pentest réseau pour une ETI tourangelle dure 5 à 8 jours ouvrés. Pour un audit complet d'un site industriel pharmaceutique incluant les OT, comptez 10 à 15 jours. CyberSecure peut intervenir sur site à Tours dans les 72h pour les urgences et livre le rapport final dans les 5 jours ouvrés suivant la fin des tests.",
        },
        {
          q: "Comment sécuriser les systèmes de recherche et de production pharmaceutique à Tours (conformité GxP) ?",
          a: "Les laboratoires et sites de production pharmaceutique à Tours sont soumis aux Bonnes Pratiques de Fabrication (BPF/GMP) et à la réglementation 21 CFR Part 11 pour les systèmes informatiques. CyberSecure réalise des audits de validation des systèmes informatisés (CSV), des revues des journaux d'audit (audit trails), des tests de pénétration des systèmes MES et LIMS, et des évaluations de conformité Annex 11. Nous accompagnons également la préparation aux inspections des autorités sanitaires (ANSM, EMA).",
        },
        {
          q: "Intervenez-vous sur site à Tours et en Indre-et-Loire pour des audits ?",
          a: "Oui, nos consultants se déplacent à Tours, Amboise, Chinon, Loches, Châteaurenault et dans tout le département Indre-et-Loire. Nous couvrons également le Loir-et-Cher (Blois) et l'Indre (Châteauroux) pour les groupes ayant des sites multiples en Centre-Val de Loire. Déploiement possible sous 48h à Tours.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site pharmaceutique ou une entreprise à Tours ?",
          a: "Contactez immédiatement le CERT de CyberSecure (disponible 24h/24, 7j/7). Pour les sites pharmaceutiques, activez également votre plan de continuité BPF et informez l'ANSM si des processus de fabrication sont impactés. Notre équipe peut être déployée sur site à Tours dans les 4 heures pour contenir l'attaque et préserver les preuves. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteTours;
