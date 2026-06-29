import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteGironde = () => (
  <CityLandingPage
    data={{
      city: "Gironde",
      citySlug: "gironde",
      region: "Nouvelle-Aquitaine",
      postalCode: "33",
      intro: "CyberSecure est votre prestataire audit de sécurité Gironde (33) : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Bordeaux, Mérignac, Mérignac Cyber, Pessac, Libourne, Arcachon et tout le département.",
      localContext: "La Gironde est le 2e département le plus peuplé de France hors Île-de-France, avec une économie diversifiée portée par l'aéronautique, le numérique et la viticulture. Bordeaux Métropole concentre un tissu industriel et tech dense : Dassault Aviation (Mérignac), Thales, le cluster Mérignac Cyber (cybersécurité), et une French Tech dynamique. La viticulture est au cœur de l'économie girondine avec des exportations mondiales et des enjeux de traçabilité numérique. La Gironde est aussi la 1ère région viticole de France par la valeur de ses exports.",
      sectors: [
        "Aéronautique et défense (Dassault Mérignac, Thales, Liebherr, Safran)",
        "Cybersécurité (cluster Mérignac Cyber, acteurs locaux)",
        "Viticulture et négoce (Médoc, Saint-Émilion, Pomerol, grand négoce bordelais)",
        "Numérique (French Tech Bordeaux, Station B, Bordeaux Métropole Tech)",
        "Chimie et pharmacie (BASF Bordeaux, Sanofi, industries chimiques 33)",
        "Santé (CHU Bordeaux Pellegrin, Hôpital Haut-Lévêque, cliniques)",
        "Logistique et port (Port de Bordeaux Bassens, hub viticole)",
        "Collectivités (Bordeaux Métropole, Gironde Numérique, Conseil Départemental 33)",
      ],
      neighborhoods: [
        "Bordeaux – Mérignac – Pessac (33000/33700/33600)",
        "Mérignac Cyber – Technoparc de l'Aviation",
        "Libourne – Saint-Émilion (33500)",
        "Arcachon – Bassin d'Arcachon (33120)",
        "Langon – Gratte-Ciel (33210)",
        "Blaye – Bourg-sur-Gironde (33390)",
        "Lesparre-Médoc – Pauillac (33340)",
        "Bordeaux Nord – Lormont – Cenon (33310)",
      ],
      faq: [
        {
          q: "Couvrez-vous toute la Gironde (33) ?",
          a: "Oui, CyberSecure intervient dans tout le département de la Gironde : Bordeaux Métropole, bassin arcachonnais, Entre-Deux-Mers, Médoc, Libournais et zones rurales. Nos consultants se déplacent sur site dans tout le 33. Présence dans l'écosystème Mérignac Cyber. CERT d'urgence 24/7.",
        },
        {
          q: "Les sous-traitants de Dassault Aviation Mérignac doivent-ils être conformes NIS2 ?",
          a: "Oui. Les sous-traitants et fournisseurs de Dassault Aviation Mérignac dépassant 50 salariés dans la fabrication aéronautique ou les services numériques sont des entités importantes NIS2. Dassault impose aussi ses propres exigences de sécurité contractuelles (certification CMMC pour les marchés US, exigences DIB). CyberSecure accompagne les PME de la chaîne aéronautique girondine dans ces certifications.",
        },
        {
          q: "Un pentest sur un domaine viticole bordelais, c'est utile ?",
          a: "Oui. Les grands domaines bordelais avec boutique en ligne, systèmes de réservation de visites, et applications de traçabilité exposent des surfaces d'attaque web. Un pentest applicatif identifie les vulnérabilités dans ces systèmes (injection SQL, XSS, authentification faible, API non sécurisées). CyberSecure propose des pentests adaptés aux domaines viticoles et aux maisons de négoce bordelaises.",
        },
        {
          q: "Quels financements pour un audit cyber en Gironde ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Bordeaux Gironde — diagnostics numériques cofinancés. BPI France Nouvelle-Aquitaine — prêts innovation. Bordeaux Métropole accompagne les startups via ses programmes numériques. Le cluster Mérignac Cyber organise des événements de sensibilisation et de mise en relation.",
        },
        {
          q: "Délai de réponse pour un incident cyber en Gironde ?",
          a: "Pour une réponse à incident en Gironde, notre CERT intervient en moins de 4 heures sur site dans l'agglomération bordelaise et Mérignac. Pour les zones plus éloignées (bassin arcachonnais, Libournais), délai de 6 à 8 heures. En support téléphonique et à distance, notre CERT est disponible 24/7.",
        },
      ],
    }}
  />
);

export default AuditSecuriteGironde;
