import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteSousse = () => (
  <CityLandingPage
    data={{
      city: "Sousse",
      citySlug: "sousse",
      region: "Tunisie — Gouvernorat de Sousse",
      postalCode: "4000",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Sousse pour les hôtels balnéaires, les systèmes de réservation touristique, les zones franches industrielles et les centres nearshoring IT. Cabinet qualifié PASSI ANSSI, nous intervenons dans la 3e ville de Tunisie avec une expertise en sécurité des données touristiques (clients EU, cartes bancaires), des systèmes hôteliers PMS et des plateformes e-booking soumis simultanément à l'INPDP tunisienne et au RGPD européen.",
      localContext: "Sousse est la 3e ville de Tunisie et la principale station balnéaire, accueillant 2 millions de touristes européens par an (principalement français, allemands et britanniques). La ville est marquée par l'attentat de 2015 qui a ciblé l'hôtel Riu Imperial Marhaba — depuis, la sécurité physique et cyber des complexes hôteliers tunisiens est scrutée avec attention par les tour-opérateurs européens qui imposent des audits de sécurité. La zone franche de Sousse (SFAX Sousse) héberge des entreprises textiles et mécaniques exportatrices. Plusieurs centres de services IT nearshoring se sont implantés à Sousse, profitant de l'université locale (Université de Sousse). L'IHC (Instut Hôtelier de la Costal) forme des professionnels de l'hôtellerie. La Caisse d'Épargne Nationale de Tunisie (CENT) et les banques régionales gèrent les flux financiers locaux.",
      sectors: [
        "Hôtellerie balnéaire (Riu, Steigenberger, Sentido, Iberostar)",
        "Tourisme et agences réceptives (TUI partenaires, Thomas Cook reliquats)",
        "Zone franche et textile (Sousse El Kantaoui, export EU)",
        "Nearshoring IT (centres de services, développement, support)",
        "Commerce et agroalimentaire (marché central, export primeurs)",
        "Enseignement supérieur (Université de Sousse, ISET)",
      ],
      neighborhoods: [
        "Port El Kantaoui (complexes hôteliers de luxe, marina, golf)",
        "Zone hôtelière Hammam Sousse (hôtels chaînes, balnéaire)",
        "Centre de Sousse (Médina UNESCO, commerces, banques)",
        "Zone franche Industrielle (usines, ateliers export)",
        "Sahloul et Khezama (résidentiel, hôpital régional, universités)",
        "Monastir et Enfidha (aéroports, tourisme côtier voisin)",
      ],
      faq: [
        {
          q: "Combien coûte un audit de sécurité PMS pour un hôtel balnéaire à Sousse ou Port El Kantaoui ?",
          a: "Un audit de sécurité hôtelière à Sousse est particulièrement critique compte tenu de la sensibilité des tour-opérateurs européens post-attentat 2015 : TUI, Thomas Cook (Neos), DER Touristik imposent des audits de sécurité réguliers à leurs partenaires hôteliers tunisiens. Tarifs : audit de sécurité PMS (Opera, Fidelio, Protel) et systèmes de réservation entre 10 000 et 30 000 TND HT (3 000-9 000 €) ; audit de conformité PCI DSS pour paiements par carte EU entre 15 000 et 40 000 TND HT ; pentest WiFi hôtel (segmentation invités/personnel) entre 5 000 et 15 000 TND HT ; audit de sécurité complet pour un hôtel 5 étoiles (Riu, Steigenberger) entre 40 000 et 100 000 TND HT. CyberSecure produit des rapports en français et anglais acceptés par les compliance officers des grands TO européens.",
        },
        {
          q: "Après l'attentat de Sousse 2015, comment les hôtels tunisiens gèrent-ils la cybersécurité liée à la sécurité physique ?",
          a: "L'attentat de l'hôtel Imperial Marhaba (2015) a révélé des lacunes dans la coordination entre sécurité physique et systèmes numériques (CCTV, contrôle d'accès, communication de crise). Depuis, les hôtels de Sousse ont investi dans des systèmes de surveillance améliorés — qui sont eux-mêmes devenus des cibles cyber (accès non autorisé aux flux vidéo). Un audit post-2015 comprend : test d'intrusion des systèmes de vidéosurveillance IP (caméras Hikvision, Dahua, Axis — failles de sécurité documentées), audit des systèmes de contrôle d'accès électronique (portes, ascenseurs, parking), test de la communication de crise sécurisée (canaux de communication d'urgence), audit des accès des sociétés de sécurité externe (gardiennage, sociétés de surveillance). CyberSecure accompagne la convergence sécurité physique/cybersécurité des hôtels tunisiens.",
        },
        {
          q: "Pentest d'une zone franche industrielle de Sousse : comment auditer les systèmes de production export ?",
          a: "La zone franche de Sousse (ZONE SFAX — Zone Franche Économique de Sousse) héberge des entreprises textiles, mécaniques et électroniques exportant vers l'EU. Ces entreprises gèrent des commandes électroniques de clients européens (EDI, portails fournisseurs Zara, H&M, VF Corporation) et des données de conformité sociale/environnementale soumises aux exigences de due diligence EU. CyberSecure réalise : audit de la sécurité des accès portails partenaires EU (authentification, droits), test d'intrusion du réseau industriel (ERP, systèmes de GPAO), audit de la messagerie (Business Email Compromise — fraude aux virements de paiement de commandes), revue de la conformité INPDP pour les données des salariés. Tarif zone franche : 10 000-25 000 TND HT ou 3 000-7 500 €.",
        },
        {
          q: "RGPD et INPDP à Sousse : comment gérer les données des touristes européens dans les hôtels tunisiens ?",
          a: "Les hôtels de Sousse traitent des données personnelles de touristes européens (passeports, cartes bancaires, préférences de séjour) soumises au RGPD si les réservations sont passées via des OTA établies dans l'EU (Booking.com Netherlands B.V., TUI Germany) — le RGPD s'applique alors au traitement par l'hôtel tunisien en tant que sous-traitant. Simultanément, la Loi organique 63-2004 tunisienne (INPDP) s'applique pour les données locales. CyberSecure accompagne les hôtels de Sousse dans la mise en conformité dual-track : inventaire des données EU traitées, rédaction des clauses contractuelles UE avec les TO (DPA, SCC), audit des mesures de sécurité techniques (chiffrement, pseudonymisation), gestion des exercices de droits des touristes EU (accès, effacement). Tarif accompagnement conformité RGPD/INPDP hôtel : 8 000-20 000 TND HT.",
        },
        {
          q: "Que faire en cas de cyberattaque contre un hôtel ou une entreprise à Sousse ?",
          a: "En cas d'incident à Sousse, notre CERT est disponible 24h/24 en français et arabe. Pour un hôtel avec clientèle EU : notification immédiate au tour-opérateur partenaire (TUI, DER, Neckermann) selon les clauses contractuelles de sécurité, notification à l'INPDP tunisienne si données personnelles compromises, notification aux autorités de protection des données EU des clients affectés si RGPD applicable (CNIL pour clients français — délai 72h à partir du constat de la violation). CyberSecure coordonne l'investigation forensique, le containment et la reconstruction des systèmes. Pour les hôtels membres de chaînes internationales (Riu, Accor, Louvre Hotels) : notification simultanée à la direction IT du groupe selon leurs procédures internes. Dépôt de plainte à la BCTII (brigade cybercriminalité) de Sousse.",
        },
      ],
    }}
  />
);

export default AuditSecuriteSousse;
