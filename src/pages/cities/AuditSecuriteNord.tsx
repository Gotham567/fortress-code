import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteNord = () => (
  <CityLandingPage
    data={{
      city: "Nord",
      citySlug: "nord",
      region: "Hauts-de-France",
      postalCode: "59",
      intro: "CyberSecure est votre prestataire audit de sécurité Nord (59) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Lille, Roubaix, Tourcoing, Valenciennes, Dunkerque, Maubeuge et tout le département.",
      localContext: "Le Nord est le 3e département français par sa population. La Métropole Européenne de Lille est un carrefour économique franco-belge avec EuraTechnologies (3e incubateur numérique européen), Eurasanté (biotech et santé) et un tissu industriel dense. Dunkerque concentre une industrie lourde majeure (ArcelorMittal, GigaFactory ACC batteries électriques). Valenciennes est un pôle automobile (Toyota, Alstom). La région est aussi un hub logistique et e-commerce (Amazon, La Redoute, Decathlon).",
      sectors: [
        "Numérique (EuraTechnologies Roubaix — 300+ entreprises tech)",
        "Industrie lourde (ArcelorMittal Dunkerque, GigaFactory ACC Dunkerque)",
        "Automobile (Toyota Valenciennes, Alstom TGV, équipementiers 59)",
        "E-commerce et logistique (Amazon, La Redoute siège, Decathlon)",
        "Santé (CHU Lille, Eurasanté — 30+ entreprises biotech/medtech)",
        "Agroalimentaire (Bonduelle Villeneuve-d'Ascq, industries alimentaires 59)",
        "Finance et assurance (banques régionales, cabinets nordistes)",
        "Collectivités (MEL, Dunkerque Grand Littoral, CD59)",
      ],
      neighborhoods: [
        "Lille – EuraTechnologies – Roubaix (59000/59100)",
        "Tourcoing – Wattrelos – Hem (59200)",
        "Valenciennes – Anzin – Denain (59300)",
        "Dunkerque – Grande-Synthe – GigaFactory (59140)",
        "Douai – Lens – Sin-le-Noble (59500)",
        "Cambrai – Caudry (59400)",
        "Villeneuve-d'Ascq – Mons-en-Barœul (59650)",
        "Maubeuge – Sambre-Avesnois (59600)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Nord (59) ?",
          a: "Oui, CyberSecure intervient dans tout le département du Nord : MEL, Dunkerque Grand Littoral, Valenciennes Métropole, Douaisis, Cambrésis, Sambre-Avesnois. Présence dans l'écosystème EuraTechnologies à Roubaix. CERT d'urgence 24/7.",
        },
        {
          q: "EuraTechnologies héberge-t-il des besoins spécifiques en audit de sécurité ?",
          a: "EuraTechnologies est le 3e plus grand incubateur numérique d'Europe avec plus de 300 entreprises tech. Les startups et scale-ups y ont des besoins variés : pentest d'applications web/mobile, audit de configurations cloud, conformité RGPD, certifications ISO 27001 et SOC 2 pour les clients grands comptes. CyberSecure propose des packages adaptés aux entreprises d'EuraTechnologies, de l'amorçage à la scale-up.",
        },
        {
          q: "La GigaFactory ACC de Dunkerque : quels risques cyber industriels ?",
          a: "La GigaFactory ACC (batteries électriques JV Stellantis-Mercedes-TotalEnergies) intègre des systèmes industriels (OT) de haute technologie : robots de production, systèmes de contrôle des cellules de batteries, SCADA, IoT industriel. Une attaque sur ces systèmes pourrait arrêter la production ou créer des risques de sécurité physique (batteries défaillantes). CyberSecure propose des audits OT spécialisés pour les usines gigafactory.",
        },
        {
          q: "Toyota Valenciennes impose-t-il TISAX à ses fournisseurs locaux ?",
          a: "Oui. Toyota Manufacturing France (TMMF) impose TISAX (Trusted Information Security Assessment Exchange) à ses fournisseurs traitant des informations sensibles (plans, données de production). Les équipementiers automobiles du bassin valenciennois doivent obtenir leur évaluation TISAX via un auditeur ENX accrédité. CyberSecure accompagne les PME nordistes dans la préparation à l'évaluation TISAX.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Nord (59) ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Grand Lille — diagnostics numériques. BPI France Hauts-de-France — prêts innovation. La Région Hauts-de-France (FEDER Numérique). EuraTechnologies propose des ressources et partenariats pour ses membres sur la cybersécurité.",
        },
      ],
    }}
  />
);

export default AuditSecuriteNord;
