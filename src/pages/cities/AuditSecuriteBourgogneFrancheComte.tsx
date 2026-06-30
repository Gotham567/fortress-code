import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBourgogneFrancheComte = () => (
  <CityLandingPage
    data={{
      city: "Bourgogne-Franche-Comté",
      citySlug: "bourgogne-franche-comte",
      urlPath: "cybersecurite-bourgogne-franche-comte",
      region: "Bourgogne-Franche-Comté",
      postalCode: "21 / 25 / 39 / 58 / 70 / 71 / 89 / 90",
      intro: "CyberSecure est votre prestataire audit de sécurité Bourgogne-Franche-Comté : pentest, audit NIS2, conformité RGPD et réponse aux incidents pour les entreprises de Dijon, Besançon, Belfort-Montbéliard, Chalon-sur-Saône, Mâcon, Auxerre et toute la région.",
      localContext: "Bourgogne-Franche-Comté réunit des filières industrielles de renommée mondiale. La filière automobile est dominante : Stellantis Sochaux (Doubs) est l'un des sites de production automobile les plus importants d'Europe, et le bassin de Montbéliard concentre des centaines d'équipementiers (Faurecia, Plastic Omnium). Belfort abrite Alstom (TGV) et General Electric (turbines à gaz, énergie). L'horlogerie et la micromécanique comtoises (Besançon, Morteau, Pontarlier) sont de renommée mondiale. La viticulture bourguignonne (Côte de Nuits, Côte de Beaune, Chablis) représente un patrimoine économique exceptionnel.",
      sectors: [
        "Automobile (Stellantis Sochaux, Faurecia, Plastic Omnium, bassin Montbéliard)",
        "Ferroviaire et énergie (Alstom Belfort TGV, General Electric turbines)",
        "Viticulture (Bourgogne grand cru, Chablis, Mâconnais, négoce)",
        "Horlogerie et micromécanique (Besançon, Morteau, Pontarlier, industrie chrono)",
        "Agroalimentaire (Bresse AOP, fromages comtois, moutarde Dijon Fallot)",
        "Santé (CHU Dijon Bourgogne, CHRU Besançon, centres de recherche)",
        "Nucléaire et énergie (centrale nucléaire Belleville-sur-Loire 58)",
        "Collectivités (Dijon Métropole, Grand Besançon Métropole, Région BFC)",
      ],
      neighborhoods: [
        "Dijon Métropole – Chenôve – Quetigny (21)",
        "Grand Besançon Métropole – Pontarlier (25)",
        "Belfort – Montbéliard – Héricourt (90/25)",
        "Auxerre – Avallon – Joigny (89)",
        "Chalon-sur-Saône – Mâcon – Le Creusot (71)",
        "Nevers – Cosne-sur-Loire (58)",
        "Vesoul – Lure – Gray (70)",
        "Lons-le-Saunier – Dole – Saint-Claude (39)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 8 départements de Bourgogne-Franche-Comté ?",
          a: "Oui, CyberSecure intervient dans les huit départements : Côte-d'Or (21), Doubs (25), Jura (39), Nièvre (58), Haute-Saône (70), Saône-et-Loire (71), Yonne (89) et Territoire de Belfort (90). Nos consultants se déplacent sur site partout dans la région. CERT d'urgence 24/7. Délai d'intervention pour audits planifiés : 5-10 jours ouvrés.",
        },
        {
          q: "Stellantis Sochaux et ses équipementiers sont-ils soumis à NIS2 ?",
          a: "Oui. Stellantis Sochaux est une entité importante NIS2. Stellantis impose aussi TISAX (Trusted Information Security Assessment Exchange) à ses fournisseurs — le standard de sécurité de l'industrie automobile allemande. Les sous-traitants du bassin de Montbéliard-Belfort dépassant 50 salariés doivent se conformer à NIS2 et TISAX. CyberSecure accompagne les équipementiers dans ces certifications simultanées.",
        },
        {
          q: "Les domaines viticoles de Bourgogne ont-ils des obligations cyber ?",
          a: "Les grands domaines bourguignons (Côte de Nuits, Côte de Beaune, Chablis) qui exportent mondialement (États-Unis, Japon, Chine) traitent des données clients internationaux et sont soumis au RGPD. Les grandes maisons de négoce (Louis Jadot, Bouchard Père & Fils, Drouhin) dépassent souvent les seuils NIS2. Les enjeux incluent aussi la protection de la réputation numérique (une fuite de données peut faire chuter la valeur d'un domaine) et la traçabilité des millésimes.",
        },
        {
          q: "Les industries horlogères comtoises ont-elles des risques cyber spécifiques ?",
          a: "Oui. L'horlogerie et la micromécanique de précision (Besançon, Morteau, Pontarlier) ont des enjeux critiques : protection des plans de fabrication (CAO/FAO — propriété intellectuelle) contre le cyberespionnage industriel, sécurisation des machines-outils connectées (CNC, centres d'usinage 5 axes), et conformité NIS2 pour les fabricants d'équipements. CyberSecure propose des audits OT pour les ateliers de production de haute précision.",
        },
        {
          q: "Quels financements disponibles pour un audit cyber en BFC ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Bourgogne-Franche-Comté via ses fonds FEDER et le programme BFC Numérique. Les CCI de BFC (CCI Côte-d'Or, CCI du Doubs, CCI de Saône-et-Loire). BPI France Bourgogne — prêts numériques. Le Pôle Véhicule du Futur et la Bourgogne Franche-Comté Alliance (BFCA) accompagnent leurs membres.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBourgogneFrancheComte;
