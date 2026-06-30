import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuritePaca = () => (
  <CityLandingPage
    data={{
      city: "PACA",
      citySlug: "paca",
      urlPath: "cybersecurite-paca",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "04 / 05 / 06 / 13 / 83 / 84",
      intro: "CyberSecure est votre prestataire d'audit cybersécurité PACA : pentest PASSI, audit NIS2, conformité RGPD, réponse aux incidents 24/7 pour les entreprises de Marseille, Nice, Toulon, Aix-en-Provence, Sophia Antipolis et toute la région Provence-Alpes-Côte d'Azur.",
      localContext: "La région PACA présente une double économie : d'un côté les industries lourdes (chimie à Fos-sur-Mer, naval à Toulon, logistique portuaire à Marseille) qui ont des enjeux OT/IT critiques ; de l'autre une économie de services et de tech à Nice et Sophia Antipolis (Intel, IBM, Amadeus, SAP, SAMSUNG Research) avec des enjeux de propriété intellectuelle et de données. Le tourisme de luxe de la Côte d'Azur génère des flux massifs de données personnelles. La Marine Nationale à Toulon est la plus grande base navale d'Europe. CyberSecure dispose d'équipes déployables rapidement en PACA.",
      sectors: [
        "Tech et R&D (Sophia Antipolis, Euratechnologies Nice, startups)",
        "Port et logistique (GPMM Marseille, port Fos-sur-Mer)",
        "Défense navale (Marine Nationale Toulon, Naval Group La Seyne)",
        "Chimie et pétrochimie (Fos-sur-Mer, zone industrielle de Berre)",
        "Tourisme de luxe (Côte d'Azur, hôtellerie 5*, yachting)",
        "Santé (AP-HM Marseille, CHU Nice, APHM, cliniques)",
        "Agroalimentaire (huile d'olive, rosé provençal, fromages AOP)",
        "Immobilier et BTP (Euroméditerranée Marseille, Côte d'Azur)",
      ],
      neighborhoods: [
        "Aix-Marseille-Provence – Martigues – Vitrolles – Salon-de-Provence (13)",
        "Métropole Nice Côte d'Azur – Sophia Antipolis – Antibes (06)",
        "Toulon Provence Méditerranée – La Seyne-sur-Mer (83)",
        "Avignon – Carpentras – Cavaillon (84)",
        "Cannes – Grasse – Mougins – Mandelieu (06)",
        "Fréjus – Saint-Raphaël – Draguignan (83)",
        "Arles – Salon-de-Provence – Marignane (13)",
        "Gap – Briançon – Embrun (05)",
      ],
      faq: [
        {
          q: "Couvrez-vous toute la région PACA pour les audits de sécurité ?",
          a: "Oui, CyberSecure intervient dans les 6 départements de PACA : Alpes-de-Haute-Provence (04), Hautes-Alpes (05), Alpes-Maritimes (06), Bouches-du-Rhône (13), Var (83) et Vaucluse (84). Nos consultants se déplacent sur site partout dans la région, des métropoles (Marseille, Nice, Toulon) aux zones rurales et montagneuses (Gap, Briançon, Haute-Ubaye). CERT 24/7 disponible.",
        },
        {
          q: "Réalisez-vous des audits de sécurité pour les entreprises de Sophia Antipolis ?",
          a: "Oui, Sophia Antipolis est l'un de nos principaux bassins d'activité en PACA. Nous réalisons des audits pour les centres R&D (Intel, IBM, SAP, Samsung Research), les startups deeptech, les entreprises SaaS. Les enjeux spécifiques à Sophia : sécurité de la propriété intellectuelle, conformité RGPD pour les entreprises américaines opérant en Europe, mise en conformité NIS2 pour les fournisseurs de services numériques. Délai : 5-7 jours ouvrés.",
        },
        {
          q: "Mon hôtel ou casino de la Côte d'Azur doit-il faire un audit de sécurité ?",
          a: "Pour l'hôtellerie de luxe : la RGPD impose la sécurisation des données clients (cartes VIP, préférences, numéros de carte bancaire). La norme PCI DSS est obligatoire pour les paiements par carte. En hôtellerie 5 étoiles, une fuite de données peut avoir des conséquences réputationnelles désastreuses. Pour les casinos : les obligations de conformité (KYC, lutte anti-blanchiment, jeux en ligne) créent des bases de données de très grande valeur qui sont des cibles prioritaires. CyberSecure propose des audits adaptés à ces secteurs.",
        },
        {
          q: "Les entreprises chimiques de Fos-sur-Mer et de la zone de Berre sont-elles soumises à NIS2 ?",
          a: "Oui. Les industriels de la zone de Fos-sur-Mer, Lavera et Berre (chimie, pétrochimie, énergie) sont généralement des entités essentielles (énergie) ou importantes (fabrication chimique) au sens de NIS2. Leurs systèmes OT (SCADA, DCS, API) sont au cœur des obligations de sécurité. CyberSecure propose des audits OT spécialisés pour les sites industriels de la région marseillaise.",
        },
        {
          q: "Quels financements pour un audit cyber en PACA ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région PACA soutient la numérisation des PME via ses fonds FEDER et le programme Territoires d'Innovation. Les CCI de PACA (CCI Nice Côte d'Azur, CCI Aix-Marseille-Provence, CCI Var) proposent des diagnostics cyber co-financés. BPI France PACA — prêts numériques. Le pôle Pégase (aéronautique PACA) accompagne aussi ses membres sur les enjeux cybersécurité. Diagnostic CyberSecure gratuit sous 48h.",
        },
      ],
    }}
  />
);

export default AuditSecuritePaca;
