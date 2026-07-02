import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteCharleroi = () => (
  <CityLandingPage
    data={{
      city: "Charleroi",
      citySlug: "charleroi",
      region: "Belgique — Wallonie",
      postalCode: "6000",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Charleroi pour l'aéroport Bruxelles-Charleroi (BSCA), AGC Glass, les entreprises biotech de Biowin et les industries en reconversion numérique du Pays Noir. Cabinet qualifié PASSI ANSSI, nous intervenons en Province de Hainaut avec une expertise en sécurité des systèmes industriels OT et des infrastructures aéroportuaires critiques soumises à NIS2 belge.",
      localContext: "Charleroi traverse une reconversion économique ambitieuse autour du numérique et de la biotech, tout en maintenant une base industrielle historique (verrerie AGC Glass, chimie). L'aéroport Bruxelles-Charleroi (BSCA) est le 2e aéroport belge par le trafic passagers, classé infrastructure critique selon NIS2. Le cluster Biowin fédère des entreprises pharmaceutiques et biotechnologiques gérant des données de recherche sensibles (propriété intellectuelle, essais cliniques). Igretec (intercommunale) pilote la transformation numérique des entreprises locales. La reconversion des friches industrielles en zones technologiques (Charleroi Métropole Digitale) crée de nouveaux enjeux de sécurité IT pour des entreprises peu matures en cybersécurité. CyberSecure adapte ses prestations aux réalités économiques des PME de reconversion industrielle.",
      sectors: [
        "Aéroport et aviation (BSCA, Ryanair, services au sol)",
        "Verrerie et industrie (AGC Glass, Solvay, chimie)",
        "Biotech et pharmacie (Biowin, essais cliniques, R&D)",
        "Numérique et tech (Charleroi Métropole Digitale, startups)",
        "Collectivités et intercommunales (Igretec, CPAS)",
        "Commerce et distribution (Ville 2, logistics hainuyer)",
      ],
      neighborhoods: [
        "Centre de Charleroi (Ville Haute, Ville Basse)",
        "Aéroport (Gosselies, Fleurus, zone cargo)",
        "Marcinelle et Jumet (industrie reconvertie)",
        "Lodelinsart et Gilly (biotech, Biowin)",
        "Courcelles et Fontaine-l'Évêque (logistique)",
        "Province de Hainaut (Mons, Thuin, Chimay)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Charleroi pour une PME en reconversion numérique ?",
          a: "CyberSecure propose des prestations adaptées aux budgets des PME carolorégiennes en transformation numérique : un pentest d'application web ou e-commerce est facturé entre 3 000 et 7 000 € HT ; un audit de sécurité réseau interne (infrastructure IT, Active Directory, VPN) entre 5 000 et 12 000 € HT ; un accompagnement NIS2 complet (gap analysis + plan de remédiation) entre 4 000 et 8 000 € HT. Pour l'aéroport BSCA ou AGC Glass (infrastructure critique ou OIE NIS2), les tarifs sont spécifiques et incluent la coordination avec les autorités de régulation. CyberSecure propose également des forfaits mensuels de surveillance et d'alerte pour les PME sans équipe sécurité interne.",
        },
        {
          q: "Pentest aéroport Bruxelles-Charleroi (BSCA) : comment auditer une infrastructure critique aéroportuaire ?",
          a: "L'aéroport Bruxelles-Charleroi est classé OIE (Opérateur d'Importance Essentielle) selon la loi NIS2 belge. Un audit BSCA nécessite des autorisations formelles de la direction de la sûreté et coordination avec l'Aviation Civile belge (DGTA). CyberSecure réalise : audit des systèmes de billetterie et e-commerce (site BSCA, APIs partenaires Ryanair/Wizzair), test d'intrusion sur les réseaux de gestion aéroportuaire (check-in, bagages, passage sûreté) en environnement de test, audit des accès tiers (prestataires, compagnies aériennes), test de social engineering sur le personnel sûreté. Nos rapports respectent les standards de l'ENISA pour la cybersécurité aéroportuaire.",
        },
        {
          q: "AGC Glass et industrie verrière à Charleroi : audit de sécurité OT/IT en environnement de production continue ?",
          a: "AGC Glass Belgium opère des fours de fusion en continu — impossible à arrêter sous peine de destruction coûteuse — ce qui impose des contraintes extrêmes lors des tests de sécurité OT. CyberSecure adopte une approche passive-first : cartographie réseau industriel sans trafic actif (sniffing SCADA), analyse des configurations des automates Siemens/Rockwell, audit des connexions IT/OT (passerelles, historiens de données), revue documentaire des procédures de sécurité opérationnelle. Les tests intrusifs sont réservés aux répliques ou bancs de test. Un audit OT AGC-type coûte entre 15 000 et 35 000 € HT selon la surface couverte.",
        },
        {
          q: "Biowin et biotech à Charleroi : comment protéger la propriété intellectuelle des essais cliniques ?",
          a: "Les entreprises Biowin (Univercells, Bone Therapeutics, DNAlytics...) gèrent des données de propriété intellectuelle à très haute valeur — brevets en cours de dépôt, résultats d'essais cliniques Phase I/II/III soumis au RGPD et aux bonnes pratiques cliniques (BPC). Les menaces principales sont l'espionnage industriel par des concurrents ou des APT étatiques. CyberSecure réalise : audit des plateformes de gestion des données d'essais (EDC, CTMS), pentest des accès investigators et CRO partenaires, test de l'isolation des données entre projets concurrents, audit du code des outils d'analyse bioinformatique. Nous accompagnons également la qualification des systèmes informatisés selon les exigences FDA 21 CFR Part 11 et EMA pour les essais cliniques.",
        },
        {
          q: "Que faire en cas de cyberattaque à Charleroi (ransomware industriel ou violation de données) ?",
          a: "En cas d'incident à Charleroi, notre CERT est disponible 24h/24. Priorité absolue pour une industrie : ne jamais couper les automates de production en cours sans l'accord de l'ingénieur process (risque de dommages physiques). Isolez les réseaux IT des réseaux OT via les firewalls industriels. CyberSecure intervient sur site dans les 4 heures depuis Bruxelles pour une investigation forensique immédiate. Obligations légales : notification au CCB dans les 24h si entité NIS2, dépôt de plainte à la Computer Crime Unit (CCU) de la Police Fédérale belge, notification APD si données personnelles compromises. Pour l'aéroport BSCA : notification complémentaire à la DGTA Aviation Civile.",
        },
      ],
    }}
  />
);

export default AuditSecuriteCharleroi;
