import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteGrandEst = () => (
  <CityLandingPage
    data={{
      city: "Grand Est",
      citySlug: "grand-est",
      region: "Grand Est",
      postalCode: "08 / 10 / 51 / 52 / 54 / 55 / 57 / 67 / 68 / 88",
      intro: "CyberSecure est votre prestataire audit de sécurité Grand Est : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Strasbourg, Metz, Nancy, Reims, Mulhouse, Colmar et toute la région.",
      localContext: "Le Grand Est est une région frontalière stratégique avec l'Allemagne, la Suisse, le Luxembourg et la Belgique. Strasbourg accueille le Parlement européen et de nombreuses institutions européennes, ce qui en fait une cible de choix pour le cyberespionnage. L'industrie alsacienne est très diversifiée : chimie et pharmacie (Strasbourg, Mulhouse), automobile (Mercedes Hambach, Stellantis), logistique (port de Strasbourg, hub rhénan). La Lorraine concentre l'industrie sidérurgique (ArcelorMittal à Florange), la métallurgie et les équipementiers automobile. La Marne est dominée par la filière Champagne (LVMH, Lanson, Taittinger) avec des enjeux de traçabilité numérique. La région est un nœud logistique européen majeur.",
      sectors: [
        "Chimie et pharmacie (Strasbourg, Mulhouse, industries rhénanes)",
        "Automobile (Mercedes Hambach, Stellantis Trémery, équipementiers 57)",
        "Champagne et viticulture (LVMH, Lanson, Taittinger, Rémy Cointreau)",
        "Sidérurgie et métallurgie (ArcelorMittal Florange, industries lorraines)",
        "Logistique et transport (port de Strasbourg, hub rhénan, plateformes)",
        "Institutions européennes (Parlement européen, Conseil de l'Europe)",
        "Santé (CHU Strasbourg, CHU Nancy, CHR Metz)",
        "Collectivités (Eurométropole Strasbourg, Metz Métropole, Région Grand Est)",
      ],
      neighborhoods: [
        "Eurométropole Strasbourg – Schiltigheim – Illkirch (67)",
        "Metz Métropole – Thionville (57)",
        "Nancy Métropole – Lunéville (54)",
        "Reims – Châlons-en-Champagne – Épernay (51)",
        "Mulhouse – Colmar – Saint-Louis (68)",
        "Troyes – Bar-sur-Aube (10)",
        "Charleville-Mézières – Sedan (08)",
        "Épinal – Saint-Dié-des-Vosges (88)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 10 départements du Grand Est ?",
          a: "Oui, CyberSecure intervient dans les dix départements : Ardennes (08), Aube (10), Marne (51), Haute-Marne (52), Meurthe-et-Moselle (54), Meuse (55), Moselle (57), Bas-Rhin (67), Haut-Rhin (68) et Vosges (88). Nos consultants se déplacent sur site partout dans la région, y compris dans les zones frontalières. CERT d'urgence 24/7.",
        },
        {
          q: "Les institutions européennes de Strasbourg ont-elles des besoins spécifiques en cybersécurité ?",
          a: "Oui. Le Parlement européen, le Conseil de l'Europe et les autres institutions basées à Strasbourg sont des cibles de premier rang pour le cyberespionnage étatique. Les prestataires et fournisseurs travaillant avec ces institutions doivent répondre à des exigences de sécurité très élevées (accréditations EU RESTRICTED, NIS2). CyberSecure accompagne les entreprises de la sphère institutionnelle strasbourgeoise dans leurs audits.",
        },
        {
          q: "La filière Champagne est-elle exposée aux cybermenaces ?",
          a: "Oui. Les grandes maisons de Champagne (LVMH, Pernod Ricard, Rémy Cointreau) dépassent largement les seuils NIS2. Les enjeux cyber incluent la protection des systèmes de traçabilité des cuvées, la sécurité des plateformes e-commerce et export, et la protection contre la contrefaçon numérique. Les coopératives viticoles de Marne (vignerons indépendants) ont aussi des données clients à protéger conformément au RGPD.",
        },
        {
          q: "Les entreprises du Grand Est qui travaillent avec l'Allemagne ont-elles des obligations spécifiques ?",
          a: "Les entreprises du Grand Est ayant des clients ou sous-traitants allemands doivent souvent répondre à des exigences de sécurité élevées : TISAX pour la filière automobile (exigé par Volkswagen, BMW, Mercedes), ISO 27001 pour les fournisseurs industriels, et les critères NIS2 s'appliquent de façon harmonisée en UE. CyberSecure connaît les standards transfrontaliers et accompagne les entreprises loralo-alsaciennes dans ces certifications.",
        },
        {
          q: "Quels financements pour un audit cyber en Grand Est ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Grand Est via ses fonds FEDER et le programme Alsace Numérique. Les CCI régionales (CCI Alsace Eurométropole, CCI Grand Nancy, CCI de la Marne). BPI France Grand Est — prêts numériques. Le cluster Alsace Digitale et les pôles de compétitivité régionaux (Materalia, Hydreos) accompagnent aussi leurs membres.",
        },
      ],
    }}
  />
);

export default AuditSecuriteGrandEst;
