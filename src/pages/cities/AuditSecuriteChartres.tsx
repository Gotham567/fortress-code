import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteChartres = () => (
  <CityLandingPage
    data={{
      city: "Chartres",
      citySlug: "chartres",
      region: "Centre-Val de Loire",
      postalCode: "28000",
      intro: "CyberSecure accompagne les PME et ETI de Chartres avec des audits de sécurité informatique, pentests et tests d'intrusion adaptés aux secteurs pharmaceutique, cosmétique, logistique et électronique d'Eure-et-Loir. Notre cabinet qualifié PASSI ANSSI intervient sur site à Chartres pour des missions d'audit réseau, de pentest PME et de réponse à incident CERT.",
      localContext: "Chartres est un pôle pharmaceutique et cosmétique reconnu à l'échelle nationale, accueillant des entreprises comme Covidien (Medtronic), des sous-traitants pharmaceutiques et des laboratoires de cosmétique dont les données de formulation et les processus de fabrication réglementés (BPF, GMP) constituent des actifs à protéger impérativement. Philips (éclairage professionnel) et son réseau de sous-traitants électroniques illustrent la diversité industrielle du bassin chartrain. La position stratégique de Chartres sur l'axe Paris-Le Mans (A11) en fait un hub logistique important. L'agriculture d'Eure-et-Loir (premier département céréalier de France) génère un tissu de coopératives en numérisation. Le CH Louis-Pasteur de Chartres et les établissements médico-sociaux font face aux cybermenaces.",
      sectors: [
        "Pharmaceutique et dispositifs médicaux (Medtronic, sous-traitants)",
        "Cosmétique et chimie fine (Eure-et-Loir)",
        "Électronique et industrie (Philips, sous-traitants)",
        "Logistique et transport (hub A11)",
        "Agriculture et coopératives céréalières",
        "Santé (CH Louis-Pasteur, cliniques Eure-et-Loir)",
      ],
      neighborhoods: [
        "Centre-ville et cathédrale (patrimoine UNESCO)",
        "Lucé et zone industrielle ouest",
        "Mainvilliers et zones d'activités nord",
        "Champhol et zones logistiques",
        "Luce-Lucé et parc d'activités régional",
        "Dreux et Eure-et-Loir nord (industrie, automobile)",
      ],
      faq: [
        {
          q: "Combien coûte un audit sécurité informatique pour un site pharmaceutique ou un fabricant de dispositifs médicaux à Chartres ?",
          a: "Un audit de sécurité pour un site pharmaceutique ou de dispositifs médicaux à Chartres incluant la conformité GxP, Annex 11 et MDR se situe entre 10 000 et 30 000 € HT selon la taille du SI et le périmètre. Pour les sous-traitants pharmaceutiques, un audit ciblé débute à 5 500 € HT. CyberSecure maîtrise les référentiels BPF/GMP, GAMP 5, 21 CFR Part 11 et le règlement MDR UE 2017/745. Devis gratuit sous 48h.",
        },
        {
          q: "Quel délai pour un audit réseau ETI à Chartres ?",
          a: "Un audit réseau pour une PME chartraise dure 4 à 7 jours ouvrés. Pour un site industriel pharmaceutique incluant les systèmes MES et LIMS, comptez 8 à 15 jours. L'audit Active Directory seul est réalisable en 2 à 4 jours. CyberSecure peut intervenir sous 72h pour les urgences.",
        },
        {
          q: "Comment sécuriser les systèmes informatisés d'un site pharmaceutique à Chartres pour une inspection ANSM ?",
          a: "L'Agence Nationale de Sécurité du Médicament (ANSM) inspecte régulièrement les sites pharmaceutiques d'Eure-et-Loir et vérifie notamment la conformité des systèmes informatisés (Annexe 11 des BPF européennes). CyberSecure réalise des audits de validation des systèmes informatisés (CSV) incluant la revue des procédures d'accès et de modification des données, l'audit des journaux d'audit (audit trails), les tests d'intégrité des données et la revue des plans de validation des systèmes critiques. Nous préparons les entreprises aux inspections ANSM et FDA.",
        },
        {
          q: "CyberSecure intervient-il sur site à Chartres et en Eure-et-Loir ?",
          a: "Oui, nos consultants se déplacent à Chartres, Dreux, Nogent-le-Rotrou, Châteaudun et dans tout le département d'Eure-et-Loir. Nous couvrons également le Loiret (Orléans) et le Loir-et-Cher (Blois) pour les groupes ayant des sites dans plusieurs départements de Centre-Val de Loire. Déploiement sous 72h à Chartres.",
        },
        {
          q: "Que faire en cas de cyberattaque sur un site pharmaceutique ou industriel à Chartres ?",
          a: "Appelez le CERT de CyberSecure immédiatement (24h/24, 7j/7). Isolez les systèmes compromis sans les éteindre. Pour les sites pharmaceutiques, activez votre plan de continuité BPF et informez l'ANSM si la production ou la traçabilité des produits est impactée. Notre équipe peut être sur site à Chartres dans les 4 heures. CyberSecure assure les notifications ANSSI et CNIL. Tarif CERT : 1 500 € HT/jour.",
        },
      ],
    }}
  />
);

export default AuditSecuriteChartres;
