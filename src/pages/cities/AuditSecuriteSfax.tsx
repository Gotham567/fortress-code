import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteSfax = () => (
  <CityLandingPage
    data={{
      city: "Sfax",
      citySlug: "sfax",
      region: "Tunisie — Gouvernorat de Sfax",
      postalCode: "3000",
      intro: "CyberSecure réalise des pentests OT industriels, des audits de sécurité et des tests d'intrusion à Sfax pour le CPG (Compagnie des Phosphates de Gafsa), le GCT (Groupe Chimique Tunisien), les PME industrielles et les entreprises IT de la région. Cabinet qualifié PASSI ANSSI, nous intervenons dans la 2e ville de Tunisie avec une expertise en sécurité des systèmes OT de l'industrie chimique et minière, et en audit des infrastructures IT des PME exportatrices.",
      localContext: "Sfax est la 2e ville et capitale économique de Tunisie, hub industriel majeur avec une tradition d'entrepreneuriat privé. Le CPG (Compagnie des Phosphates de Gafsa, siège régional Sfax) et le GCT (Groupe Chimique Tunisien — engrais, acide phosphorique) opèrent des infrastructures industrielles et OT critiques pour l'économie nationale. Le port de Sfax est le 2e port tunisien par le trafic. L'Université de Sfax développe des laboratoires en informatique et réseaux. Sfax est également un hub IT régional avec de nombreuses PME de services informatiques et de développement web travaillant pour des clients tunisiens et des donneurs d'ordre étrangers (nearshoring). La Sicar, Banque de l'Habitat et les agences régionales de banques gèrent des flux financiers importants. Les PME sfaxiennes exportent vers l'Europe (huile d'olive, conserves, produits industriels).",
      sectors: [
        "Industrie chimique et phosphates (CPG, GCT, dérivés phosphatés)",
        "Port et logistique (port de Sfax, transitaires, export)",
        "PME IT et nearshoring régional (développeurs, intégrateurs)",
        "Banques et finance (BH, Zitouna, Amen Bank Sfax)",
        "Olive oil et agroalimentaire (huileries, conserves, export EU)",
        "Enseignement supérieur (Université Sfax, Faculté Informatique)",
      ],
      neighborhoods: [
        "Médina et Centre de Sfax (commerce, banques, artisanat)",
        "Route de la Soukra et Sfax Nord (PME, résidentiel bourgeois)",
        "Zone industrielle El Ain (industrie légère, ateliers, entrepôts)",
        "Port de Sfax et Thyna (port industriel, pêche, export)",
        "Sakiet Eddaïr et El Busten (banlieue industrielle, agroalimentaire)",
        "Mahdia et littoral (tourisme côtier, agroalimentaire, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un audit OT industriel à Sfax pour le CPG ou le GCT (industrie chimique et phosphates) ?",
          a: "Un audit de sécurité OT des infrastructures chimiques et phosphatières à Sfax comprend des risques spécifiques liés aux dangers physiques des produits (acides, engrais) — toute perturbation OT peut avoir des conséquences de sécurité physique graves. Tarifs indicatifs : audit de sécurité OT passif (cartographie, analyse risque) entre 15 000 et 40 000 TND HT ou 4 500-12 000 € ; pentest OT/IT convergent sur environnement de test ou période de maintenance entre 25 000 et 70 000 TND HT ; audit complet incluant plan de remédiation IEC 62443 entre 40 000 et 100 000 TND HT. Pour les unités du GCT (Gabès, Sfax, Skhira) ayant des actionnaires ou partenaires EU, les devis peuvent être établis en euros. Coordination préalable avec les équipes HSE et maintenance obligatoire.",
        },
        {
          q: "Pentest d'une PME IT sfaxienne travaillant en nearshoring pour des clients français ?",
          a: "Les PME IT de Sfax développant des logiciels ou assurant des prestations de support pour des clients français traitent des données confidentielles soumises au RGPD. Un pentest PME nearshoring sfaxienne comprend : test d'intrusion de l'application ou du système livré au client EU, audit des accès des développeurs tunisiens aux environnements clients (VPN, accès Git/SVN, Jira), revue de la politique de traitement des données EU (RGPD article 28, sous-traitant), test de phishing sur les développeurs et chefs de projet, audit de la segmentation entre les projets de différents clients (isolation multi-tenant). CyberSecure délivre un rapport en français compatible avec les exigences des DPO français pour la revue annuelle de leurs prestataires tunisiens. Tarif PME IT Sfax : 8 000-20 000 TND HT ou 2 400-6 000 €.",
        },
        {
          q: "Audit de sécurité pour une PME exportatrice sfaxienne (huile d'olive, conserves) : plateformes B2B et données clients EU ?",
          a: "Les PME agroalimentaires sfaxiennes exportant vers l'Europe (France, Italie, Allemagne) gèrent des données de partenaires commerciaux EU (prix, volumes, contrats) et des certificats sanitaires numériques. Ces plateformes B2B et ERP sont des cibles croissantes pour la fraude au virement (BEC — Business Email Compromise) et l'espionnage commercial. CyberSecure réalise : audit du portail B2B partenaires (accès importateurs EU), test de la messagerie professionnelle (phishing, usurpation d'adresse pour fraude au virement), audit de l'ERP export (droits d'accès, intégrité des données de facturation), test de la sécurité des certificats électroniques d'origine. Tarif PME exportatrice : 8 000-20 000 TND HT. Rapport bilingue français/anglais sur demande.",
        },
        {
          q: "Université de Sfax (Faculté d'Informatique et d'Électronique) : audit de sécurité académique ?",
          a: "La Faculté des Sciences Économiques et de Gestion de Sfax et la Faculté des Sciences à Sfax gèrent des données de 40 000+ étudiants et développent des partenariats de recherche avec des universités européennes (programmes Erasmus). Un audit universitaire sfaxien comprend : test d'intrusion du portail étudiant (scolarité, résultats, inscriptions), audit des droits d'accès des professeurs et chargés de cours aux données étudiants, test de phishing sur le personnel administratif et enseignant, audit de la sécurité du réseau WiFi campus, revue de la conformité INPDP pour les données personnelles. CyberSecure accompagne également la sensibilisation des étudiants en informatique avec des ateliers CTF (Capture The Flag) et des formations aux bonnes pratiques de sécurité. Tarif audit université : 15 000-35 000 TND HT.",
        },
        {
          q: "Que faire en cas de cyberattaque à Sfax (incident industriel CPG/GCT, fraude PME, violation données) ?",
          a: "En cas d'incident à Sfax, notre CERT est disponible 24h/24 en français et arabe. Pour un incident OT industriel (CPG ou GCT) : priorité absolue à la sécurité des personnels et des procédés chimiques — ne jamais couper les systèmes de contrôle des unités de production sans expertise process chimique ; notifiez immédiatement l'ANSI (cert@ansi.tn) et le ministère de l'Industrie en tant qu'infrastructure critique. Pour une PME nearshoring : notification immédiate au client EU donneur d'ordre (ils ont l'obligation RGPD d'en être informés), notification à l'INPDP si données personnelles tunisiennes compromises. CyberSecure coordonne l'investigation forensique, la reconstruction et les communications avec les autorités tunisiennes et européennes selon la nature de l'incident. Dépôt de plainte à la BCTII (Brigade de lutte contre les infractions informatiques) à Sfax.",
        },
      ],
    }}
  />
);

export default AuditSecuriteSfax;
